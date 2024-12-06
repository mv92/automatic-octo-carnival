import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ButtonClickEventValue, SettingsRoute } from '../../types';
import { RoutesService } from '../services/basic-settings-routes';

@Component({
	selector: 'app-basic',
	templateUrl: './basic.component.html',
	styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
	routes: Observable<SettingsRoute[]>;
	activeColumn = new BehaviorSubject<keyof SettingsRoute | undefined>(undefined);

	constructor(private routesService: RoutesService) {
		this.routes = this.routesService.routes;
	}

	sort(event: ButtonClickEventValue<keyof SettingsRoute>): void {
		const { name: column, direction } = event;
		this.activeColumn.next(column);

		this.routesService.sortRoutes(column as keyof SettingsRoute, direction);
	}
}
