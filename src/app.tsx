import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import '@/styles/copy.scss';
import { Application, I18nModule, AboutModule } from 'asab_webui_shell';
import { AppConfig } from '@/interfaces/app.interface';

const appElement = document.getElementById('app');
const root = createRoot(appElement!);

(async function init() {
  const { default: TableApplicationModule } =
    await import('@/modules/UserTableModule');

  const config: AppConfig = {
    title: 'TeskaLabs Training UI App',
    website: 'https://teskalabs.com',
    email: 'info@teskalabs.com',
    brandImage: {
      light: {
        full: 'media/logo/sidebar-logo-full.svg',
        minimized: 'media/logo/sidebar-logo-minimized.svg',
      },
      dark: {
        full: 'media/logo/sidebar-logo-full-dark.svg',
        minimized: 'media/logo/sidebar-logo-minimized-dark.svg',
      },
    },
    sidebarLogo: {
      dark: {
        full: 'media/logo/sidebar-logo-full-dark.svg',
        minimized: 'media/logo/sidebar-logo-minimized-dark.svg',
      },
      light: {
        full: 'media/logo/sidebar-logo-full.svg',
        minimized: 'media/logo/sidebar-logo-minimized.svg',
      },
    },
    i18n: {
      fallbackLng: 'en',
      supportedLngs: ['en', 'cs'],
      debug: false,
      nsSeparator: false,
    },
  };

  root.render(
    <HashRouter>
      <Application
        configdefaults={config}
        modules={[I18nModule, AboutModule, TableApplicationModule]}
      />
    </HashRouter>,
  );
})();
