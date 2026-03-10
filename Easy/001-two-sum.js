/**
 * Problem: 1. Two Sum
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/two-sum/
 * * Strategy: Using a Hash Map (Object) to store complements for O(n) performance.
 */

var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};

// Time Complexity: O(n)
// Space Complexity: O(n)
