import React from 'react';

export interface RouteConfig {
  path: string;
  end: boolean;
  name: string;
  component: React.ComponentType<Record<string, unknown>>;
  resource?: string;
  help?: string;
}

export interface NavigationItem {
  name: string;
  icon: string;
  url: string;
  children?: NavigationItem[];
}

export interface AppRouter {
  addRoute(config: RouteConfig): void;
}

export interface AppNavigation {
  addItem(item: NavigationItem): void;
}

export interface AppInterface {
  Router: AppRouter;
  Navigation: AppNavigation;
}

export interface BrandImageVariant {
  full: string;
  minimized: string;
}

export interface BrandImage {
  light: BrandImageVariant;
  dark: BrandImageVariant;
}

export interface I18nConfig {
  fallbackLng: string;
  supportedLngs: string[];
  debug: boolean;
  nsSeparator: boolean | string;
}

export interface AppConfig {
  title: string;
  website: string;
  email: string;
  brandImage: BrandImage;
  sidebarLogo: BrandImage;
  i18n: I18nConfig;
}
