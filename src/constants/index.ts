import { SettingsRoute } from '../types';

export * from './router';

export const appTitle = 'ktt';

export const mockRoutes: SettingsRoute[] = [
	{ uuid: '0', address: '0.0.0.0', mask: '0', gateway: '10.0.0.1', interface: 'Ethernet 0' },
	{ uuid: '1', address: '10.0.0.0', mask: '8', gateway: '10.0.0.1', interface: 'Ethernet 2' },
	{ uuid: '2', address: '172.16.0.0', mask: '12', gateway: '172.16.0.1', interface: 'Ethernet 1' },
	{ uuid: '3', address: '192.168.0.0', mask: '16', gateway: '192.168.0.1', interface: 'wlan0' },
	{ uuid: '4', address: '192.168.1.0', mask: '24', gateway: '192.168.1.1', interface: 'Ethernet 2' },
	{ uuid: '5', address: '192.168.1.0', mask: '25', gateway: '192.168.1.1', interface: 'Ethernet 2' },
	{ uuid: '6', address: '192.168.3.128', mask: '25', gateway: '192.168.1.1', interface: 'Ethernet 3' },
	{ uuid: '7', address: '10.0.0.0', mask: '16', gateway: '10.0.1.1', interface: 'Ethernet 0' },
	{ uuid: '8', address: '10.0.1.0', mask: '24', gateway: '10.0.1.254', interface: 'Ethernet 0' },
	{ uuid: '9', address: '169.254.0.0', mask: '16', gateway: '-', interface: 'Ethernet 1' },
	{ uuid: '10', address: '10.10.8.0', mask: '4', gateway: '-', interface: 'vpn0' },
	{ uuid: '11', address: '0.0.0.0', mask: '32', gateway: '10.0.0.1', interface: 'Ethernet 1' },
];

