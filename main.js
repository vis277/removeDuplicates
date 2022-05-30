/**
 * 
 * @param {*} nums 
 */
/**
 *iterate through the first loop to pick an element 
 * iterate through another loop to pick elements to be matched with first elements
 * if they match then maintain the counter and increase the counter
 * splice the matched element
 * return the count and final array
 */

 let  nums1 = [0,0,1,1,1,2,2,2,3,3,4];

var removeDuplicates = function(nums) {
    let n=nums.length;
    let count=0;
    // console.log(nums);
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(nums[i]===nums[j]){
                count++;
                nums.splice(j,1);
                j--;
                n--;
            //   console.log(nums)  
            }
           
        }
    }
    return nums.length;
};
console.log(removeDuplicates(nums1));