
var numbers1=[2,4,9,5,3,7,2];
var sum=0;
var promedio=0;
function suma(numbers){
    for(let i=0; i<numbers1.length; i++){
         sum = sum + numbers[i];
    }

     prom = sum/numbers1.length;

    console.log (sum);
    console.log (prom);
}



