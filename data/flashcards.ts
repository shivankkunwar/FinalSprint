import { Flashcard } from "@/types/flashcard";


export const flashcards: Flashcard[] = [
  {
    id: '1',
    question: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution.',
    solution: `function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`,
    explanation: 'Use a hash map to store the complement of each number. As we iterate through the array, we check if the current number\'s complement exists in the map. Time complexity: O(n), Space complexity: O(n)',
    topic: 'Arrays',
    difficulty: 'Easy',
    tags: ['Hash Table', 'Commonly Asked']
  },
  {
    id: '2',
    question: 'Given the root of a binary tree, return its maximum depth. A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
    solution: `function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  
  return Math.max(
    maxDepth(root.left),
    maxDepth(root.right)
  ) + 1;
}`,
    explanation: 'Use recursion to traverse the tree. For each node, return the maximum of its left and right subtrees\' depths plus 1. Time complexity: O(n), Space complexity: O(h) where h is the height of the tree.',
    topic: 'Trees',
    difficulty: 'Easy',
    tags: ['Recursion', 'DFS']
  },
  // Add more flashcards as needed
]

