import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BasicComponent } from './basic/basic.component';
import { OpinionatedComponent } from './opinionated/opinionated.component';

const routes: Routes = [
	{
		title: 'Basic version',
		path: '',
		component: BasicComponent,
	},
	{
		title: 'Opinionated version',
		path: 'opinionated',
		component: OpinionatedComponent,
	},
	{
		title: 'Welcome Page',
		path: 'welcome',
		component: WelcomePageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
