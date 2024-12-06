import {
	Component,
	EventEmitter,
	Input,
	Output,
	OnInit,
	OnDestroy,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import {
	ButtonClickEventValue,
	Sorting,
	SortingDirection,
	SettingsRoute,
} from 'src/types';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnDestroy {
	@Input() label!: string;
	@Input() name!: keyof SettingsRoute;
	@Input() customIcon?: string;
	@Input() activeColumn?: BehaviorSubject<keyof SettingsRoute | undefined>;

	protected isActive?: Sorting;
	protected iconClass = '';
	private subscription?: Subscription;

	handleClick(): void {
		switch (this.isActive) {
		case SortingDirection.ASC:
			this.isActive = SortingDirection.DESC;
			this.iconClass = '--desc';
			break;

		case SortingDirection.DESC:
			this.isActive = undefined;
			this.iconClass = '';
			break;

		default:
			this.isActive = SortingDirection.ASC;
			this.iconClass = '--asc';
			break;
		}

		this.ClickEvent.emit({ direction: this.isActive, name: this.name });
	}

	@Output() ClickEvent = new EventEmitter<ButtonClickEventValue<keyof SettingsRoute>>();

	ngOnInit(): void {
		if (!this.label) {
			throw new Error('Input label is required');
		}
		if (!this.name) {
			throw new Error('Input name is required');
		}

		if (this.activeColumn) {
			this.subscription = this.activeColumn.subscribe(activeColumn => {
				if (activeColumn !== this.name) {
					this.isActive = undefined;
					this.iconClass = '';
				}
			});
		}
	}

	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
