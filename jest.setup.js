
require('@testing-library/jest-dom');

// Polyfill TextEncoder for React Router
if (typeof global.TextEncoder === 'undefined') {
	global.TextEncoder = require('util').TextEncoder;
}
