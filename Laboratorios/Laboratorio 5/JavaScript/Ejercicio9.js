var radio;
var  pi=3.1416;
function area(radio){
      Areac = pi* Math.pow(radio,2);
      
      if(Areac <= 0){
          return -1;
      }

      return Areac;
}