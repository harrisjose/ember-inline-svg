module.exports = {
  framework: 'qunit',
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: [
    'Firefox'
  ],
  launch_in_dev: [
    'Chrome'
  ],
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: [
        '--no-sandbox',
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=9222',
        '--window-size=1440,900'
      ].filter(Boolean)
    }
  }
};
