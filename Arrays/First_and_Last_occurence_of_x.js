// First and last occurrences of x

// Input:
// n=9, x=7
// arr[] = { 1, 3, 5, 5, 5, 5, 7, 123, 125 }
// Output:  6 6 

// Input:
// n=9, x=5
// arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
// Output:  2 5

function  find(arr,n,x){
    let obj={};
    let isFound=false;
    
    for(let i=0;i<n;i++)
    {
      if(arr[i]===x)
      {
          if(isFound===false)
          {
              isFound=true;
              obj.f=i;
              obj.l=i;
          }else{
              obj.l=i;
          }
      }
    }
     
    if(isFound===false) // If isFound is not trigger means we didn't found any occurences
    {
        return [-1,-1];
    }
   
    let ele=[];
    for(let key in obj)
    {
        ele.push(obj[key]);
    }
   
  return ele;
}