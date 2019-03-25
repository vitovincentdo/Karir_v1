import ENV from 'karir/config/environment';

export const ROOT = 'routes';
export const SCREEN_HEIGHT = 60;
export const MODEL_PREFIX = 'models';

export const ENVIRONMENT = ENV.environment;
export const HOST = {
  'development' : 'http://localhost:81',
  'test'        : '',
  'production'  : ''
};  

export const REQUEST_TIMEOUT = 15;      // in seconds

export const DELIMITER = '.';
export const DATE_FORMAT = 'YYYY-MM-DD';

export default {
  ROOT,
  MODEL_PREFIX,
  ENVIRONMENT,
  HOST,
  REQUEST_TIMEOUT,
  DELIMITER,
  DATE_FORMAT
}
