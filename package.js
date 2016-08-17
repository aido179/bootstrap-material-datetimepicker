Package.describe({
  name: 'aido179:bootstrap-material-datepicker',
  version: '2.7.1',
  // Brief, one-line summary of the package.
  summary: 'Package wrapper for T00rk/bootstrap-material-datepicker 2.7.1',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stubborncoder/Meteor-bootstrap-material-datepicker.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.use('underscore');
  api.use('momentjs:moment@2.9.0');
  api.use('jquery');
  api.use('fortawesome:fontawesome@4.5.0');

  api.addFiles('css/bootstrap-material-datetimepicker.css', 'client');
  api.addFiles('js/bootstrap-material-datetimepicker.js', 'client');
});
