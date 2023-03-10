var maxArea = function(height) {
    let maximumArea = Number.MIN_SAFE_INTEGER; // this static data property represents the minimum safe integer in JS

    let left = 0;
    let right = height.length - 1;

    while(left < right ){
        let shorterLine = Math.min(height[left],height[right]);
        maximumArea = Math.max(maximumArea , shorterLine * (right-left));

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }

    }
    return maximumArea;



}