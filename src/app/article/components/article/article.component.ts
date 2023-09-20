import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { deleteArticleActions, getArticleActions } from '../../store/getArticle.action';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../../../shared/types/article.interface';
import { Observable, Subscription, combineLatest, combineLatestWith, map } from 'rxjs';
import { articleDataSelector, articleErrorSelector, articleIsLoadingSelector } from '../../store/getArticle.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { currentUserSelector } from '../../../auth/store/auth.selectors';
import { ICurrentUser } from '../../../shared/types/currentUser.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
	slug: string
	article: IArticle | null
	articleSubscription: Subscription
	isLoading$: Observable<boolean>
	error$: Observable<string | null>
	errorSubscription: Subscription;
	isAuthor$: Observable<boolean>

	constructor(
		private store: Store,
		private route: ActivatedRoute,
		private _snackBar: MatSnackBar,
	){}

	ngOnInit(): void {
		this.initializeValues()
		this.initializeListeners()
		this.initErrorSubscription()
		this.fetchData()
	}

	ngOnDestroy(): void {
		if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
		this.articleSubscription.unsubscribe()
	}

	initializeValues() {
		this.error$ = this.store.pipe(select(articleErrorSelector))
		this.isLoading$ = this.store.pipe(select(articleIsLoadingSelector))
		this.slug = this.route.snapshot.paramMap.get('slug')
		this.isAuthor$ = combineLatest([
			this.store.pipe(select(articleDataSelector)),
			this.store.pipe(select(currentUserSelector))
		]).pipe(
			map(
				(([article, user]: [IArticle | null, ICurrentUser | null]) => 
					{
						if(!article || !user) return false
						console.log(article, user);
						return article.author.username === user.username
					}
				)
			)
		)
	}

	initializeListeners(){
		this.articleSubscription = this.store
		.pipe(select(articleDataSelector))
		.subscribe((article: IArticle | null) => this.article = article)
	}

	fetchData() {
		this.store.dispatch(getArticleActions.getArticle({slug: this.slug}))
	}

	initErrorSubscription(): void {
    this.errorSubscription = this.error$.subscribe(error => {
      if (error) {
        this._snackBar.open(error, "close", {duration: 4000});
      }
    });
  }


	deleteArticle(): void {
		this.store.dispatch(deleteArticleActions.deleteArticle({slug: this.slug}))
	}
}
