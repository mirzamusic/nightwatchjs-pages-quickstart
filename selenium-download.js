var selenium = require('selenium-download');
selenium.ensure('./bin', function(error) {
   if (error) {
      console.log(error);
   }
});
