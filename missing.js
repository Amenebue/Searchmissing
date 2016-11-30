var mynumbers = new Array(1,2,3,6,9,10);
var missing;

for(var i=1;i<=32;i++)
{    
   if(mynumbers[i-1] != i){
        missing = i;
        alert(missing);
        break;
   }
}
