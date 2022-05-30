let  nums1 = [0,0,1,1,1,2,2,2,3,3,4];


var removeDuplicates = function(nums) {
    let num1=[];
    num1.push(nums[0]);
    for(let i=0;i<nums.length;i++){
        if(num1.indexOf(nums[i])==-1){
            num1.push(nums[i]);
           
}
}

    return num1.length;
};
console.log(removeDuplicates(nums1));