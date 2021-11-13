function arrayAnalysis(arr){
    function average(arr){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum / arr.length;
    }

    function min(arr){
        var min = arr[0];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }

    function max(arr){
        var max = arr[0];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }
    var result = {};
    result.average = average(arr);
    result.min = min(arr);
    result.max = max(arr);
    result.length = arr.length;
    return result;
}

module.exports = arrayAnalysis;