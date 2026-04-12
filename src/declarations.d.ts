declare module 'asab_webui_components' {
	import { AppInterface } from './interfaces/AppInterface';

	export class Module {
		App: AppInterface;
		Name: string;
		constructor(app: AppInterface, name?: string);
		initialize(): void;
	}
}

declare module 'asab_webui_shell' {
	import React from 'react';
	import { AppConfig, AppInterface } from './interfaces/AppInterface';
	import { Module } from 'asab_webui_components';

	interface ApplicationProps {
		configdefaults: AppConfig;
		modules: Array<new (app: AppInterface) => Module>;
	}

	export const Application: React.ComponentClass<ApplicationProps>;

	export class I18nModule extends Module {}
	export class AboutModule extends Module {}
}
