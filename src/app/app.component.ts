import { Component } from '@angular/core';
import { ROUTES } from '../constants';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	routes = Object.values(ROUTES);
}
