exports.run = function(input) {
   var number=0;
   input.forEach(elem => {
      if(elem.multiply)
      {
        if(number==0)
          number=elem.value;
        else
          number*=elem.value;
      }
   });
   return number;
};
