// Find duplicates in an array

// Input:
// N = 5
// a[] = {2,3,1,2,3}
// Output: 2 3 

// Input:
// N = 4
// a[] = {0,3,1,2}
// Output: -1
 
function duplicates(a, n){
    let obj={}; // Make key of all elements with their occurences 
    for(let i=0;i<n;i++)
    {
        if(!obj[a[i]])
        {
            obj[a[i]]=1;
        }else{
            obj[a[i]]+=1;
        }
    }
        
    let arr=[];
    for(let keys in obj)
    {
        // If any value of key occurence more than 1 then push in arr
        if(obj[keys]>1)
        {
            arr.push(keys);
        }
    }

    if(arr.length==0)
    {
        return [-1]; // Return -1 if nothing found
    }
        
    return arr;
}
