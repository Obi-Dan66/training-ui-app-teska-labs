import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import {
  DataTableCard2,
  DataTableColumn,
  DataTableLoaderArgs,
  DateTime,
} from 'asab_webui_components';
import { CopyClip } from '@/components/CopyClip';
import { CopyTooltip } from '@/components/CopyTooltip';

import { getUserList } from '@/requests/user';
import { UserListData } from '@/interfaces/user.interface';

export function UserTableScreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const userTableLoader = async ({
    params,
  }: DataTableLoaderArgs<UserListData>) => {
    const response = await getUserList({
      p: Number(params.p),
      i: Number(params.i),
    });

    return {
      count: response.count,
      rows: response.data,
    };
  };

  const userTableColumns: DataTableColumn<UserListData>[] = [
    {
      title: (
        <span>
          <i className="bi bi-person me-2" />
          {t('Training|Username')}
        </span>
      ),
      render: ({ row }) => (
        <CopyTooltip id={`username-tooltip-${row.id}`} copyValue={row.id}>
          {row.username}
        </CopyTooltip>
      ),
    },
    {
      title: (
        <span>
          <i className="bi bi-envelope me-2" />
          {t('Training|Email')}
        </span>
      ),
      render: ({ row }) => <CopyClip value={row.email} />,
    },
    {
      title: (
        <span>
          <i className="bi bi-geo-alt me-2" />
          {t('Training|Address')}
        </span>
      ),
      render: ({ row }) => row.address,
    },
    {
      title: (
        <span>
          <i className="bi bi-calendar-plus me-2" />
          {t('Training|Created')}
        </span>
      ),
      render: ({ row }) => <DateTime value={row.created} />,
    },
    {
      title: (
        <span>
          <i className="bi bi-box-arrow-in-right me-2" />
          {t('Training|Last sign in')}
        </span>
      ),
      render: ({ row }) => <DateTime value={row.last_sign_in} />,
    },
    {
      thStyle: { width: '60px', textAlign: 'center' },
      tdStyle: { textAlign: 'center' },
      render: ({ row }) => (
        <button
          className="btn btn-sm btn-outline-secondary"
          title={t('Training|View detail')}
          onClick={() => navigate(`/detail/${row.id}`)}
        >
          <i className="bi bi-eye" />
        </button>
      ),
    },
  ];

  return (
    <DataTableCard2
      columns={userTableColumns}
      loader={userTableLoader}
      header={
        <span>
          <i className="bi bi-table me-2" />
          {t('Training|Table')}
        </span>
      }
      className="h-100"
    />
  );
}
