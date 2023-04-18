var twoSum = function(nums,target){
    var ans = [];
    for(var i =0;i<nums.length-1;++i){
        for(var j =i+1;j <nums.length ; ++j){
            if(nums[i] + nums[j] == target){
                ans[0] = i;
                ans[1] = j;
                break;
            }
        }
    }
    return ans;
}