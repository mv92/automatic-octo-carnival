import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsRoute, SortingDirection, Sorting } from 'src/types';
import { MOCK_ROUTES, DEFAULT_MASK } from 'src/constants';

@Injectable({
	providedIn: 'root',
})
export class RoutesService {
	private static data: SettingsRoute[] = structuredClone(MOCK_ROUTES);

	private getData(): SettingsRoute[] {
		return RoutesService.data;
	}

	private routesSubject = new BehaviorSubject<SettingsRoute[]>(this.getData());

	routes = this.routesSubject.asObservable();

	compareIPs(
		a: SettingsRoute,
		b: SettingsRoute,
		column: keyof SettingsRoute,
		direction: SortingDirection,
	): number {
		const ipA = a[column].split('.').map(Number);
		const ipB = b[column].split('.').map(Number);
		let result = 0;

		for (let i = 0; i < 4; i += 1) {
			const diff = direction === SortingDirection.ASC
				? ipA[i] - ipB[i]
				: ipB[i] - ipA[i];

			if (diff !== 0) {
				result = diff > 0 ? 1 : -1;
				break;
			}
		}

		if (result === 0) {
			const maskA = a.mask ? Number(a.mask) : DEFAULT_MASK;
			const maskB = b.mask ? Number(b.mask) : DEFAULT_MASK

			result = direction === SortingDirection.ASC
				? maskA - maskB
				: maskB - maskA;
		}

		return result;
	}

	sortRoutes(column: keyof SettingsRoute, direction: Sorting): void {
		if (!direction) {
			this.routesSubject.next(this.getData());
			return;
		}

		const sortedRoutes = structuredClone(this.routesSubject.value).sort((a, b) => {
			const valueA = a[column];
			const valueB = b[column];

			if (column !== 'interface') {
				const r = this.compareIPs(a, b, column, direction);
				console.log(a.gateway, b.gateway, r, direction);
				return r;
			}

			if (valueA < valueB) {
				return direction === SortingDirection.ASC ? -1 : 1;
			} else if (valueA > valueB) {
				return direction === SortingDirection.ASC ? 1 : -1;
			} else {
				return 0;
			}
		});

		this.routesSubject.next(sortedRoutes);
	}
}
