exports.run = function(input) {
  console.log("Exercise #4");

  // YOUR CODE IS WELCOME HERE
  var repeat=function (a,b)
  {
      var chaine=b;
      for(var j=1;j<a;j++)
        chaine+=`, ${b}`;
      return chaine;
  }

  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(3, "Beetlejuice", repeat);
  /** */
};
