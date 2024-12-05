import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BasicComponent } from './basic/basic.component';
import { OpinionatedComponent } from './opinionated/opinionated.component';
import { ComponentsListComponent } from './components-list/components-list.component';
import { ROUTES } from '../constants';

const routes: Routes = [
	{
		title: ROUTES.BASIC.title,
		path: ROUTES.BASIC.path,
		component: BasicComponent,
	},
	{
		title: ROUTES.OPINIONATED.title,
		path: ROUTES.OPINIONATED.path,
		component: OpinionatedComponent,
	},
	{
		title: ROUTES.COMPONENTS.title,
		path: ROUTES.COMPONENTS.path,
		component: ComponentsListComponent,
	},
	{
		title: ROUTES.WELCOME.title,
		path: ROUTES.WELCOME.path,
		component: WelcomePageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
