exports.run = function(input) {
    var bignumber=0;
    for(var j=0;j<input.length;j++)
    {
        if(Number(input.charAt(j))>bignumber)
          bignumber=Number(input.charAt(j));
    }
    return bignumber;
};
