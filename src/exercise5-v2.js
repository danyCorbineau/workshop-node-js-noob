exports.run =function (input) {
    var fs = require('fs');
    input.showInProgress();
    fs.readdir(input.directory,function (err,files){
        if(err)
        {
            input.showError();
        }
        else
        {
          var nbF=0;
          files.forEach(elem => {
              if(elem.indexOf(".")!=-1&&elem.indexOf(".")!=1)
            {
                nbF++;
                console.log(elem);
            }
          });
  
            input.showDone(nbF);
        }
    })
  };