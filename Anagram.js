// Anagram in two strings
 function isAnagram(a, b)
 {
    //If both length is not equal means they are not same
     if(a.length!==b.length)return false;
     
     let obj={}
     for(let i=0;i<a.length;i++)
     {
         if(obj[a[i]]) // If key is present then increase value
         {
            obj[a[i]]+=1
        }else{
             obj[a[i]]=1 // If key not present make one with initial value 1
         }
     }

     // obj = { h:1, e:1, l:2, o:1}
     
     for(let i=0;i<b.length;i++)
     {
         if(obj[b[i]]) // If any key value becomes 0 like {h:0} it ignore and go to else cond. 
         {
             obj[b[i]]-=1; // If key is present value decrease by 1
         }else{
             return false; // if key is not present means they are not same
         }
     }
     
     return true;      
 }
