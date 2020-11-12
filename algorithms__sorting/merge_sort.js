function mergeSort(arr, type){

    function merge(a,b){
        let arr = [];

        while(a.length !== 0 && b.length !== 0){
            if(type === "dsc"){
                if(a[0] > b[0]){
                    arr.push(a.shift());
                  }
                  else {
                      arr.push(b.shift());
                  }
            }
            else {
                if(a[0] < b[0]){
                    arr.push(a.shift());
                  }
                  else {
                      arr.push(b.shift());
                  }
            }
        }

        if(a.length > 0) arr = arr.concat(a);
        if(b.length > 0) arr = arr.concat(b);
        return arr;
    }


    function DivideAndConquire(arr){
       if(arr.length === 1) return arr;
       let half = arr.splice(Math.floor(arr.length/2));
       return merge(DivideAndConquire(half), DivideAndConquire(arr))
    }

    return DivideAndConquire(arr);
}