import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BasicComponent } from './basic/basic.component';
import { OpinionatedComponent } from './opinionated/opinionated.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
	declarations: [
		AppComponent,
		WelcomePageComponent,
		BasicComponent,
		OpinionatedComponent,
		ButtonComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
