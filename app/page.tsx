'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhotoIcon, SparklesIcon } from '@heroicons/react/24/outline'
import ImageUploader from './components/ImageUploader'
import ImageEditor from './components/ImageEditor'
import PromptInput from './components/PromptInput'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            AI Image Creator
          </h1>
          <p className="text-xl text-gray-300">
            Transform your ideas into stunning visuals with AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <PhotoIcon className="w-6 h-6" />
              Upload or Generate
            </h2>
            <ImageUploader onImageSelect={setSelectedImage} />
            <div className="mt-6">
              <PromptInput
                isGenerating={isGenerating}
                setIsGenerating={setIsGenerating}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <SparklesIcon className="w-6 h-6" />
              Edit & Transform
            </h2>
            <ImageEditor
              selectedImage={selectedImage}
              isGenerating={isGenerating}
            />
          </motion.div>
        </div>
      </div>
    </main>
  )
} 