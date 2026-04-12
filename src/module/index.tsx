import { Module } from 'asab_webui_components';
import { AppInterface } from '../interfaces/AppInterface';

import { TableScreen } from './TableScreen';

export default class TableApplicationModule extends Module {
  constructor(app: AppInterface) {
    super(app, 'TableApplicationModule');

    app.Router.addRoute({
      path: '/',
      end: false,
      name: 'Table',
      component: TableScreen,
    });

    app.Navigation.addItem({
      name: 'Table',
      icon: 'bi bi-table',
      url: '/',
    });
  }
}
