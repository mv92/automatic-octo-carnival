import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ButtonClickEventValue, Sorting, SortingDirection } from 'src/types';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
	@Input() label!: string;
	@Input() name!: string;
	@Input() customIcon?: string;

	protected isActive?: Sorting;
	protected iconClass = '';

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

	@Output() ClickEvent = new EventEmitter<ButtonClickEventValue>();

	ngOnInit(): void {
		if (!this.label) {
			throw new Error('Input label is required');
		}
		if (!this.name) {
			throw new Error('Input name is required');
		}
	}
}
