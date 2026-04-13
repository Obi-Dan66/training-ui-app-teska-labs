import { Module } from 'asab_webui_components';
import { AppInterface } from '@/interfaces/app.interface';

import { UserTableScreen } from '@/screens/UserTableScreen';
import { DetailScreen } from '@/screens/DetailScreen';

export default class TableApplicationModule extends Module {
  constructor(app: AppInterface) {
    super(app, 'TableApplicationModule');

    app.Router.addRoute({
      path: '/',
      end: false,
      name: 'Table',
      component: UserTableScreen,
    });

    app.Router.addRoute({
      path: '/detail/:id',
      end: true,
      name: 'Detail',
      component: DetailScreen,
    });

    app.Navigation.addItem({
      name: 'Table',
      icon: 'bi bi-table',
      url: '/',
    });
  }
}
