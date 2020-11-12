function insertionSort(arr, type){
    
    function backTrack(i){
      for(let j = i; j > 0; j--){
          if(type === "dsc"){
              if(arr[j] > arr[j - 1]){
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
              }
              else {
                  break;
              }
          }
          else {
              if(arr[j] < arr[j - 1]){
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
              }
              else {
                  break;
              }
          }
      }
    }

    for(let i = 0; i < arr.length; i++){
        backTrack(i);
    }

    return arr;
}


Array.prototype.insertionSort = function(type){

    function backTrack(i){
      for(let j = i; j > 0; j--){
          if(type === "dsc"){
              if(this[j] > this[j - 1]){
                [this[j], this[j - 1]] = [this[j - 1], this[j]];
              }
              else {
                  break;
              }
          }
          else {
              if(this[j] < this[j - 1]){
                [this[j], this[j - 1]] = [this[j - 1], this[j]];
              }
              else {
                  break;
              }
          }
      }
    }

    for(let i = 0; i < this.length; i++){
        backTrack(i);
    }

    return this;
}