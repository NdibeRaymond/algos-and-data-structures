function selectionSort(arr,type){
    function sort(){
      for(let i = 0;i <= arr.length - 1; i++){
          let smallestORLargestItemIndex = i;
        for(let j = i + 1; j <= arr.length - 1; j++){
            if(type === "dsc"){
                if(arr[smallestORLargestItemIndex] < arr[j]){
                    smallestORLargestItemIndex = j;
                }
            }
            else {
                if(arr[smallestORLargestItemIndex] > arr[j]){
                    smallestORLargestItemIndex = j;
                }
            }
        }

        [arr[i], arr[smallestORLargestItemIndex]] = [arr[smallestORLargestItemIndex], arr[i]];
      }

      return arr;
    }

    if(type === "dsc"){
      return sort();
    }
    else {
     return sort();
    }
}


Array.prototype.selectionSort = function(type){
    function sort(){
      for(let i = 0;i <= this.length - 1; i++){
          let smallestORLargestItemIndex = i;
        for(let j = i + 1; j <= this.length - 1; j++){
            if(type === "dsc"){
                if(this[smallestORLargestItemIndex] < this[j]){
                    smallestORLargestItemIndex = j;
                }
            }
            else {
                if(this[smallestORLargestItemIndex] > this[j]){
                    smallestORLargestItemIndex = j;
                }
            }
        }

        [this[i], this[smallestORLargestItemIndex]] = [this[smallestORLargestItemIndex], this[i]];
      }

      return this;
    }

    sort = sort.bind(this);

    if(type === "dsc"){
      return sort();
    }
    else {
     return sort();
    }
}