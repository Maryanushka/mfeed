import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material components
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatRippleModule } from '@angular/material/core';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// angular material components


import { AuthModule } from 'src/app/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { AuthInterceptor } from 'src/app/shared/services/authInteceptor.interceptor';

import { TopBarModule } from 'src/app/shared/modules/topBar/topBar.module';
import { GlobalFeedModule } from 'src/app/globalFeed/globalFeed.module';
import { UserFeedModule } from 'src/app/userFeed/userFeed.module';
import { TagFeedModule } from 'src/app/tagFeed/tagFeed.module';
import { ArticleModule } from 'src/app/article/article.module';
import { CreateArticleModule } from 'src/app/createArticle/createArticle.module';
import { EditArticleModule } from 'src/app/editArticle/editArticle.module';
import { SettingsModule } from 'src/app/settings/settings.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		CreateArticleModule,
		ArticleModule,
		ReactiveFormsModule,
		FormsModule,
		AuthModule,
		TopBarModule,
		GlobalFeedModule,
		EditArticleModule,
		SettingsModule,
		UserFeedModule,
		TagFeedModule,
		HttpClientModule,
		StoreModule.forRoot({router: routerReducer}),
    EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(),
      maxAge: 25,
    }),
  ],
  providers: [
		PersistanceService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
