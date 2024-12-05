import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageComponent } from './welcome-page.component';

import { appTitle } from '../../constants';


describe('WelcomePageComponent', () => {
	let component: WelcomePageComponent;
	let fixture: ComponentFixture<WelcomePageComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [WelcomePageComponent],
		});

		fixture = TestBed.createComponent(WelcomePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as title '${appTitle}'`, () => {
		const fixture = TestBed.createComponent(WelcomePageComponent);
		const component = fixture.componentInstance;

		expect(component.title).toEqual(`${appTitle}`);
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(WelcomePageComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;

		expect(compiled.querySelector('.content span')?.textContent).toContain(`${appTitle} app is running!`);
	});
});
