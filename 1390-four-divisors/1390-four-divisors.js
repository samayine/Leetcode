/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    
    let totalSum = 0;

    for(let num of nums){
        let count = 0;
        let sum = 0;

        for(let i=1; i*i <= num; i++){
            if(num % i === 0){
                count++;
                sum += i;
                
                if(i*i !== num){
                    count++;
                    sum += Math.floor(num/i);
                }
            }
            
        }
        if(count === 4){
            totalSum += sum;
        }
    }
    return totalSum;
    
};