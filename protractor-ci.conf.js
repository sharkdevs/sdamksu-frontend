const config = require('.e/protractor.conf').config;
config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--no-sandbox']
  },
  progress: false,
};
exports.config = config;