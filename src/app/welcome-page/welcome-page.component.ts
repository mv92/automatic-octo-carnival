import { Component } from '@angular/core';

import { appTitle } from '../../constants';

@Component({
	selector: 'app-welcome-page',
	templateUrl: './welcome-page.component.html',
	styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {
	title = appTitle;
}
