module.exports = function longestConsecutiveLength(array) {

   if(array.length === 0) return 0;
   if(array.length === 1) return 1;

  const arr = array.sort((a,b) => (a-b));
  
  let maxLength = 0;
  let count = 1;
  
  for(let i = 1; i < arr.length-1; i++){
    if(arr[i] === arr[i-1]){
      continue;
    }else if(arr[i] === arr[i-1]+1){
      count++;
    }else{
      if(count > maxLength){
        maxLength = count;
      }
      count = 1;
    }
  }

  return maxLength > count ? maxLength : count;
}
