function bubbleSort(arr,type){

    function swap(index){
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    }

    function checkSorted(arr){
        for(let i = 0; i < arr.length - 1; i++){
           if(type === "dsc"){
               if(arr[i] < arr[i + 1]) return false;
           }
           else{
               if(arr[i] > arr[i + 1]) return false;
           }
        }
        return true;
    }

    while(true){
        for(let i = 0; i < arr.length - 1; i++){
            if(i === 0 && checkSorted(arr)) return arr;
            if(type === "dsc"){
                if(arr[i] < arr[i + 1]){
                  swap(i);
                }
            }
            else {
              if(arr[i] > arr[i + 1]){
                  swap(i);
              }
            }
        }
        
    }
    
}


Array.prototype.bubbleSort = function(type){

    function swap(index){
        [this[index], this[index + 1]] = [this[index + 1], this[index]];
    }

    function checkSorted(){
        for(let i = 0; i < this.length - 1; i++){
           if(type === "dsc"){
               if(this[i] < this[i + 1]) return false;
           }
           else{
               if(this[i] > this[i + 1]) return false;
           }
        }
        return true;
    }

    swap = swap.bind(this);
    checkSorted = checkSorted.bind(this);

    while(true){
        for(let i = 0; i < this.length - 1; i++){
            if(i === 0 && checkSorted()) return this;
            if(type === "dsc"){
                if(this[i] < this[i + 1]){
                  swap(i);
                }
            }
            else {
              if(this[i] > this[i + 1]){
                  swap(i);
              }
            }
        }
        
    }
    
}