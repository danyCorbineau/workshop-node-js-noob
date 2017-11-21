exports.run = function(input) {
  var fs = require('fs');
  input.showInProgress();
  fs.readdir(input.directory,function (err,files){
      if(err)
      {
          input.showError();
      }
      else
      {
          input.showDone(files.length);
      }
  })
};
