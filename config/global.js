const util = require('util');

const {
	KEEP_ALIVE = false,
	BACKEND_URL = 'http://localhost:3030/',
	PUBLIC_BACKEND_URL,
	EDITOR_URL = undefined,
	SENTRY_DSN = false,
	SC_DOMAIN = 'localhost',
	SC_THEME = 'default',
	SC_TITLE = 'HPI Schul-Cloud',
	SC_SHORT_TITLE = 'Schul-Cloud',
	DOCUMENT_BASE_DIR = 'https://s3.hidrive.strato.com/schul-cloud-hpi/',
	CONSENT_WITHOUT_PARENTS_MIN_AGE_YEARS,
	REDIS_URI,
	REQUEST_TIMEOUT_MS = 5000, // 5 sec
	NODE_ENV = 'development',
	JWT_SHOW_TIMEOUT_WARNING_SECONDS = 3600, // 60 min
	JWT_TIMEOUT_SECONDS,
	MAXIMUM_ALLOWABLE_TOTAL_ATTACHMENTS_SIZE_BYTE = (5 * 1024 * 1024), // 5MB
	FEATURE_INSIGHTS_ENABLED,
	INSIGHTS_COLLECTOR_URI,
	NOTIFICATION_SERVICE_ENABLED,
	CALENDAR_SERVICE_ENABLED,
	FEATURE_TEAMS_ENABLED,
	LIBRE_OFFICE_CLIENT_URL,
	ROCKET_CHAT_URI,
	ROCKETCHAT_SERVICE_ENABLED,
	ETHERPAD_BASE_URL = 'https://etherpad.schul-cloud.org/p/',
	NEXBOARD_USER_ID,
	NEXBOARD_API_KEY,
	FEATURE_EXTENSIONS_ENABLED,
	SHOW_VERSION,
	SW_ENABLED,
	LOGIN_BLOCK_TIME,
	HOST,
	CORS,
	SECURITY_HEADERS,
	FEATURE_ENTERTHECLOUD,
	FEATURE_JWT_EXTENDED_TIMEOUT_ENABLED,
	FEATURE_CONTACT_FORM_ATTACHMENTS_ENABLED,
	FEATURE_MINT_PAGES_ENABLED,
	FEATURE_NEXBOARD_ENABLED,
	SC_DEMO_USER_PASSWORD = 'Schulcloud1!',
} = process.env;

const exp = {
	KEEP_ALIVE,
	BACKEND_URL,
	PUBLIC_BACKEND_URL,
	EDITOR_URL,
	SENTRY_DSN,
	SC_DOMAIN,
	SC_THEME,
	SC_TITLE,
	SC_SHORT_TITLE,
	DOCUMENT_BASE_DIR,
	CONSENT_WITHOUT_PARENTS_MIN_AGE_YEARS: parseInt(CONSENT_WITHOUT_PARENTS_MIN_AGE_YEARS || 16, 10),
	REDIS_URI,
	REQUEST_TIMEOUT_MS: Number(REQUEST_TIMEOUT_MS),
	NODE_ENV,
	JWT_SHOW_TIMEOUT_WARNING_SECONDS,
	JWT_TIMEOUT_SECONDS,
	MAXIMUM_ALLOWABLE_TOTAL_ATTACHMENTS_SIZE_BYTE,
	FEATURE_INSIGHTS_ENABLED,
	INSIGHTS_COLLECTOR_URI,
	NOTIFICATION_SERVICE_ENABLED,
	CALENDAR_SERVICE_ENABLED,
	FEATURE_TEAMS_ENABLED,
	LIBRE_OFFICE_CLIENT_URL,
	ROCKET_CHAT_URI,
	ROCKETCHAT_SERVICE_ENABLED,
	ETHERPAD_BASE_URL,
	NEXBOARD_USER_ID,
	NEXBOARD_API_KEY,
	FEATURE_EXTENSIONS_ENABLED,
	SHOW_VERSION,
	SW_ENABLED,
	LOGIN_BLOCK_TIME,
	HOST,
	CORS,
	SECURITY_HEADERS,
	FEATURE_ENTERTHECLOUD,
	FEATURE_JWT_EXTENDED_TIMEOUT_ENABLED,
	FEATURE_CONTACT_FORM_ATTACHMENTS_ENABLED,
	FEATURE_MINT_PAGES_ENABLED,
	FEATURE_NEXBOARD_ENABLED,
	SC_DEMO_USER_PASSWORD,
};

// eslint-disable-next-line no-console
console.log(util.inspect(exp, { depth: 1, compact: false }));

module.exports = exp;
