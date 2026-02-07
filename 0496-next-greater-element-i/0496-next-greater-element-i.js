/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const map = new Map();

    for (let num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            const smaller = stack.pop();
            map.set(smaller, num);
        }
        stack.push(num);
    }

    while (stack.length) {
        map.set(stack.pop(), -1);
    }

    return nums1.map(num => map.get(num));
};
