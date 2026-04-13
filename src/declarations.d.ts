declare module 'asab_webui_components' {
  import React from 'react';
  import { AppInterface, SortDirection } from './interfaces/app.interface';

  export class Module {
    App: AppInterface;
    Name: string;
    constructor(app: AppInterface, name?: string);
    initialize(): void;
  }

  export interface DataTableColumn<TRow> {
    title?: React.ReactNode;
    render: (args: {
      row: TRow;
      column: DataTableColumn<TRow>;
      ridx: number;
    }) => React.ReactNode;
    sort?: string;
    sortDirection?: SortDirection;
    thStyle?: React.CSSProperties;
    tdStyle?: React.CSSProperties;
    colStyle?: React.CSSProperties;
  }

  export interface DataTableLoaderArgs<TRow> {
    params: Record<string, string>;
    setRows: (rows: TRow[]) => void;
    setCount: (count: number) => void;
  }

  export interface DataTableLoaderResult<TRow> {
    count: number;
    rows: TRow[];
  }

  export function DataTableCard2<TRow>(props: {
    columns: DataTableColumn<TRow>[];
    loader: (
      args: DataTableLoaderArgs<TRow>,
    ) => Promise<DataTableLoaderResult<TRow>>;
    header?: React.ReactNode;
    className?: string;
    initialLimit?: number;
    rowHeight?: number;
    disableParams?: boolean;
    hideFooter?: boolean;
    rowStyle?: (row: TRow) => React.CSSProperties;
  }): React.ReactElement;

  export function DateTime(props: {
    value: number | string;
    dateTimeFormat?: string;
  }): React.ReactElement;

  export function DateTimeRelative(props: {
    value: number | string;
  }): React.ReactElement;
}

declare module 'asab_webui_shell' {
  import React from 'react';
  import { AppConfig, AppInterface } from './interfaces/app.interface';
  import { Module } from 'asab_webui_components';

  interface ApplicationProps {
    configdefaults: AppConfig;
    modules: Array<new (app: AppInterface) => Module>;
  }

  export const Application: React.ComponentClass<ApplicationProps>;

  export class I18nModule extends Module {}
  export class AboutModule extends Module {}
}
