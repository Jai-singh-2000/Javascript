function isPalindrome(S){
    let left=0,right=S.length-1;
    while(left<right)
    {
        if(S[left]!==S[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}