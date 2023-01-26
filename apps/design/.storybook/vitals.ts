import { Metric, onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

const getConnectionSpeed = () => {
  return 'connection' in navigator &&
    navigator['connection'] &&
    // @ts-ignore
    'effectiveType' in navigator['connection']
    ? navigator['connection']['effectiveType']
    : '';
};

export const sendToVercelAnalytics = (metric: Metric) => {
  const analyticsId = process.env.STORYBOOK_VERCEL_ANALYTICS_ID;

  if (!analyticsId) {
    return;
  }

  const body = {
    dsn: analyticsId,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed()
  };

  // @ts-ignore
  const blob = new Blob([new URLSearchParams(body).toString()], {
    // This content type is necessary for `sendBeacon`
    type: 'application/x-www-form-urlencoded'
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    fetch(vitalsUrl, {
      body: blob,
      method: 'POST',
      credentials: 'omit',
      keepalive: true
    });
};

export const webVitals = () => {
  try {
    onFID(metric => sendToVercelAnalytics(metric));
    onTTFB(metric => sendToVercelAnalytics(metric));
    onLCP(metric => sendToVercelAnalytics(metric));
    onCLS(metric => sendToVercelAnalytics(metric));
    onFCP(metric => sendToVercelAnalytics(metric));
  } catch (err) {
    console.error('[Analytics]', err);
  }
};
