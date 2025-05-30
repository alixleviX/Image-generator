'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

interface PromptInputProps {
  isGenerating: boolean
  setIsGenerating: (value: boolean) => void
}

export default function PromptInput({ isGenerating, setIsGenerating }: PromptInputProps) {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) {
      toast.error('Please enter a prompt')
      return
    }

    setIsGenerating(true)
    try {
      // Here we would integrate with the AI image generation API
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Image generated successfully!')
    } catch (error) {
      toast.error('Failed to generate image')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to create..."
          className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          disabled={isGenerating}
        />
        <SparklesIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isGenerating}
        className={`
          w-full py-3 px-6 rounded-lg font-medium
          ${isGenerating 
            ? 'bg-gray-600 cursor-not-allowed' 
            : 'bg-primary hover:bg-secondary'}
          transition-colors duration-200
        `}
      >
        {isGenerating ? 'Generating...' : 'Generate Image'}
      </motion.button>
    </form>
  )
} 