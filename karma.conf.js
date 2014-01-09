// Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/prismic.io/dist/prismic.io-1.0.5.min.js',
      'bower_components/underscore/underscore.js',
      'src/angularPrismicIo.js',
      'test/*.js'
    ],
    reporters: ['progress'],
    port: 9876,
    runnerPort: 9100,
    color: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    autoWatch: true,
    singleRun: false
  });
};