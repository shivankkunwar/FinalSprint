import { FlashcardView } from "@/components/flashcards/FlashCardView"

export default function FlashcardsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">DSA Flashcards</h1>
          <p className="text-muted-foreground text-lg">
            Master Data Structures and Algorithms with our interactive flashcards
          </p>
        </div>
        <FlashcardView />
      </div>
    </div>
  )
}

