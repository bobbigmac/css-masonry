Package.describe({
  name: 'bobbigmac:css-masonry',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple css-only masonry package. No javascript, no messing about.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bobbigmac/css-masonry.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('css-masonry.css', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bobbigmac:css-masonry');
  api.addFiles('css-masonry-tests.js');
});
