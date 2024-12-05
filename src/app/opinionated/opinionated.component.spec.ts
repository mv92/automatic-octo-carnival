import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionatedComponent } from './opinionated.component';

describe('OpinionatedComponent', () => {
	let component: OpinionatedComponent;
	let fixture: ComponentFixture<OpinionatedComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [OpinionatedComponent],
		});
		fixture = TestBed.createComponent(OpinionatedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
