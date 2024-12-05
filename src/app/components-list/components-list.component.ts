import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { Sorting, ButtonClickEventValue } from '../../types';

@Component({
	selector: 'app-components-list',
	templateUrl: './components-list.component.html',
	styleUrls: ['./components-list.component.scss'],
})
export class ComponentsListComponent {
	heading = 'A simple page to display the components';

	btnClicked = 0;

	private clickSubject = new Subject<Sorting>();

	handleClick(v: ButtonClickEventValue): void {
		console.log('components-list handleClick w/ %o', v);

		this.btnClicked += 1;
		this.clickSubject.next(v.direction);
	}
}
