---
type: lesson
title: twoSum
focus: /main.ts
---

# Lesson: Two Sum

## Problem Statement

**Your goal:** Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**

```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Before you scroll down, you should try to solve it.

Below you'l first find hints and after that the solution

# . . . . .

# . . . .

# . . .

# . .

# .

### Hints

1. **Brute Force:** You could try every possible pair of numbers in the array and check if their sum equals the target. However, this approach is inefficient for large input sizes.
2. **Hashmap:** Consider using a hashmap to store the elements you've seen so far and their corresponding indices. As you iterate through the array, check if the complement (target - current number) exists in the hashmap.

### TypeScript Solution

```typescript
function twoSum(nums: number[], target: number): number[] {
  const numMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
}
```

### Explanation

The `twoSum` function takes an array of numbers `nums` and a target value `target` as input. It returns an array containing the indices of the two numbers that add up to the target.

1. **Create a hashmap:** A `numMap` object is created to store number-index pairs.
2. **Iterate through the array:** The function iterates through the `nums` array.
   - For each number, calculate the `complement` (target - current number).
   - Check if the `complement` exists in the `numMap`. If it does, it means we've found the two numbers that add up to the target. Return their indices.
   - If the `complement` doesn't exist, add the current number and its index to the `numMap` for potential future matches.
3. **Return an empty array:** If no solution is found after iterating through the entire array, return an empty array.

The key to this solution is using a hashmap to efficiently store and retrieve number-index pairs. This allows us to check for the complement in constant time, resulting in an overall time complexity of O(n).

## Time Complexity: O(n)

**Explanation:**

- We iterate through the `nums` array once, which takes O(n) time, where n is the length of the array.
- Inside the loop, we perform constant time operations (hashmap lookups and insertions).
- Therefore, the overall time complexity is dominated by the single iteration through the array, resulting in a time complexity of O(n).

**Space Complexity:** O(n)

- The `numMap` hashmap can potentially store all elements of the `nums` array in the worst case scenario, resulting in a space complexity of O(n).
