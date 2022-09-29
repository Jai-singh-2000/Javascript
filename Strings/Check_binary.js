function isBinary(str){
    for(let i=0;i<str.length;i++)
    {
        let ch=str[i];
        if(ch!=="0"&&ch!=="1")
        {
            return false;
        }
    }
    return true;
}