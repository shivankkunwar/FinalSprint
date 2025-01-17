export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export type Topic = 
  | 'Arrays' 
  | 'Linked Lists' 
  | 'Trees' 
  | 'Graphs' 
  | 'Dynamic Programming' 
  | 'Sorting' 
  | 'Searching'
  | 'Hash Tables'
  | 'Strings'
  | 'Recursion'

export interface Flashcard {
  id: string
  question: string
  solution: string
  explanation: string
  topic: Topic
  difficulty: Difficulty
  tags: string[]
  isBookmarked?: boolean
  isUnderstood?: boolean
  needsReview?: boolean
}

