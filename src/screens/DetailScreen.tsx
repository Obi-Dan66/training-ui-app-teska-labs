import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { DateTime, Spinner } from 'asab_webui_components';
import { getUserDetail } from '@/requests/user';
import { UserDetailData } from '@/interfaces/user.interface';
import { CopyClip } from '@/components/CopyClip';

export function DetailScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [data, setData] = useState<UserDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getUserDetail(id);
        setData(result);
      } catch {
        setError(t('Training|Failed to load detail. Please try again.'));
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center align-items-center py-5">
          <Spinner />
        </div>
      );
    }

    if (error) {
      return (
        <div className="alert alert-danger m-3" role="alert">
          <i className="bi bi-exclamation-triangle me-2" />
          {error}
        </div>
      );
    }

    if (!data) {
      return (
        <div className="alert alert-secondary m-3" role="alert">
          <i className="bi bi-inbox me-2" />
          {t('Training|No detail data found.')}
        </div>
      );
    }

    return (
      <Row className="g-3 p-3">
        <Col md={6}>
          <Card className="h-100">
            <CardHeader>
              <h5 className="mb-0">
                <i className="bi bi-person-circle me-2" />
                {t('Training|Basic Info')}
              </h5>
            </CardHeader>
            <CardBody>
              <dl className="mb-0">
                <dt className="text-muted small">{t('Training|ID')}</dt>
                <dd className="font-monospace small">
                  <CopyClip value={data.id} />
                </dd>

                <dt className="text-muted small">{t('Training|Username')}</dt>
                <dd>
                  <CopyClip value={data.username} />
                </dd>

                <dt className="text-muted small">{t('Training|Email')}</dt>
                <dd>
                  <CopyClip value={data.email} />
                </dd>

                <dt className="text-muted small">{t('Training|Created')}</dt>
                <dd>
                  <DateTime value={data.created} />
                </dd>

                <dt className="text-muted small">
                  {t('Training|Last sign in')}
                </dt>
                <dd className="mb-0">
                  <DateTime value={data.last_sign_in} />
                </dd>
              </dl>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100">
            <CardHeader>
              <h5 className="mb-0">
                <i className="bi bi-info-circle me-2" />
                {t('Training|Additional Info')}
              </h5>
            </CardHeader>
            <CardBody>
              <dl className="mb-0">
                <dt className="text-muted small">{t('Training|Address')}</dt>
                <dd>{data.address}</dd>

                <dt className="text-muted small">
                  {t('Training|Phone number')}
                </dt>
                <dd>{data.phone_number}</dd>

                <dt className="text-muted small">{t('Training|IP address')}</dt>
                <dd className="font-monospace">{data.ip_address}</dd>

                <dt className="text-muted small">
                  {t('Training|MAC address')}
                </dt>
                <dd className="font-monospace mb-0">{data.mac_address}</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="d-flex align-items-center gap-2 p-3 border-bottom">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => navigate('/')}
        >
          <i className="bi bi-arrow-left me-1" />
          {t('Training|Back')}
        </button>
        <h4 className="mb-0">
          <i className="bi bi-person-lines-fill me-2" />
          {t('Training|User Detail')}
        </h4>
      </div>

      {renderContent()}
    </div>
  );
}
