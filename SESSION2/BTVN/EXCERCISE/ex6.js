 //ex 6: failed
 
 let string6 = prompt("Enter your string");
 let width = string6.length;
 let mid;
 let count6 = 0;
 if(width % 2 == 0)
 {
     mid = width / 2;
     for(let i = 1; i < mid; i++)
     {
         if(string6[i] == string6[2*mid-i])
         {
             count6 ++;
             console.log(string6[i]);
         }
     }
     if(count6 == mid)
     console.log("Chuỗi đối xứng");
     else
     console.log("Chuỗi không đối xứng")
 }