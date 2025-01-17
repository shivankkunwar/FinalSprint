'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, RotateCw, ChevronLeft, ChevronRight, Shuffle, Search, Lightbulb, CheckCircle, Flag } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Flashcard, Topic, Difficulty } from '@/types/flashcard'
import { flashcards } from '@/data/flashcards'

export function FlashcardView() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [cards, setCards] = useState<Flashcard[]>(flashcards)
  const [topic, setTopic] = useState<Topic | 'all'>('all')
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null)
  const cardContentRef = useRef<HTMLDivElement>(null)

  const filteredCards = cards.filter(card => {
    const matchesTopic = topic === 'all' || card.topic === topic
    const matchesDifficulty = difficulty === 'all' || card.difficulty === difficulty
    const matchesSearch = card.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         card.solution.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTopic && matchesDifficulty && matchesSearch
  })

  const currentCard = filteredCards[currentIndex]

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === ' ') {
        e.preventDefault()
        setIsFlipped(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, filteredCards.length])

  useEffect(() => {
    if (cardContentRef.current) {
      cardContentRef.current.scrollTop = 0
    }
  }, [currentIndex, isFlipped])

  const goToNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setSlideDirection('left')
      setIsFlipped(false)
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1)
        setSlideDirection(null)
      }, 300)
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSlideDirection('right')
      setIsFlipped(false)
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1)
        setSlideDirection(null)
      }, 300)
    }
  }

  const shuffleCards = () => {
    setCards(prev => [...prev].sort(() => Math.random() - 0.5))
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  const toggleBookmark = () => {
    setCards(prev => prev.map(card => 
      card.id === currentCard.id 
        ? { ...card, isBookmarked: !card.isBookmarked }
        : card
    ))
  }

  const markAsUnderstood = () => {
    setCards(prev => prev.map(card => 
      card.id === currentCard.id 
        ? { ...card, isUnderstood: true }
        : card
    ))
    goToNext()
  }

  const markForReview = () => {
    setCards(prev => prev.map(card => 
      card.id === currentCard.id 
        ? { ...card, needsReview: true }
        : card
    ))
  }

  if (!currentCard) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px]">
        <p className="text-xl text-muted-foreground mb-4">No flashcards match your criteria</p>
        <Button onClick={() => {
          setTopic('all')
          setDifficulty('all')
          setSearchQuery('')
        }}>
          Reset Filters
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 sm:pb-0">
      {/* Filters */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <Input
            placeholder="Search flashcards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
        <Select value={topic} onValueChange={(value) => setTopic(value as Topic | 'all')}>
          <SelectTrigger>
            <SelectValue placeholder="Select Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Topics</SelectItem>
            <SelectItem value="Arrays">Arrays</SelectItem>
            <SelectItem value="Linked Lists">Linked Lists</SelectItem>
            <SelectItem value="Trees">Trees</SelectItem>
            <SelectItem value="Graphs">Graphs</SelectItem>
            <SelectItem value="Dynamic Programming">Dynamic Programming</SelectItem>
          </SelectContent>
        </Select>
        <Select value={difficulty} onValueChange={(value) => setDifficulty(value as Difficulty | 'all')}>
          <SelectTrigger>
            <SelectValue placeholder="Select Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-muted-foreground text-center">
          Card {currentIndex + 1} of {filteredCards.length}
        </div>
      </div>

      {/* Flashcard */}
      <div className="flashcard-slider">
        <div 
          className={cn(
            "flashcard h-[500px] sm:h-[600px] mx-auto cursor-pointer",
            isFlipped && "flipped",
            slideDirection && `slide-${slideDirection}-${slideDirection === 'left' ? 'enter' : 'exit'}-active`
          )}
          onClick={() => setIsFlipped(prev => !prev)}
        >
          {/* Front */}
          <div className="flashcard-face front">
            <div className="h-full p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="space-x-2">
                  <Badge variant={
                    currentCard.difficulty === 'Easy' ? 'default' :
                    currentCard.difficulty === 'Medium' ? 'secondary' :
                    'destructive'
                  }>
                    {currentCard.difficulty}
                  </Badge>
                  <Badge variant="outline">{currentCard.topic}</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleBookmark()
                  }}
                >
                  <Bookmark 
                    className={cn(
                      "h-5 w-5",
                      currentCard.isBookmarked && "fill-primary"
                    )} 
                  />
                </Button>
              </div>
              <div className="text-lg sm:text-xl mb-8 leading-relaxed">
                {currentCard.question}
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-muted-foreground">
                <RotateCw className="w-4 h-4" />
                Tap to flip
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="flashcard-face back">
            <div ref={cardContentRef} className="h-full overflow-auto p-6 sm:p-8">
              <div className="space-y-6">
                <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <code>{currentCard.solution}</code>
                </div>
                <div className="text-muted-foreground">
                  <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Explanation
                  </h3>
                  {currentCard.explanation}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex justify-between items-center">
        <Button
          variant="outline"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="w-[100px] sm:w-auto"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Previous</span>
        </Button>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={shuffleCards}
            className="hidden sm:flex"
          >
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsFlipped(prev => !prev)}
          >
            <RotateCw className="w-4 h-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          onClick={goToNext}
          disabled={currentIndex === filteredCards.length - 1}
          className="w-[100px] sm:w-auto"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Mobile Action Buttons */}
      <div className="sm:hidden mobile-actions">
        <div className="button-group">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              markForReview()
            }}
          >
            <Flag className="w-4 h-4 mr-2" />
            Review
          </Button>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              markAsUnderstood()
            }}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Got It
          </Button>
        </div>
      </div>
    </div>
  )
}

