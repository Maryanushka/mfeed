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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/authInteceptor.interceptor';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { UserFeedModule } from './userFeed/userFeed.module';
import { TagFeedModule } from './tagFeed/tagFeed.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	
		ReactiveFormsModule,
		FormsModule,
		AuthModule,
		TopBarModule,
		GlobalFeedModule,
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
