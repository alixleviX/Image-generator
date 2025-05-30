'use client'

import { motion } from 'framer-motion'
import { PhotoIcon } from '@heroicons/react/24/outline'

interface ImageEditorProps {
  selectedImage: string | null
  isGenerating: boolean
}

export default function ImageEditor({ selectedImage, isGenerating }: ImageEditorProps) {
  return (
    <div className="relative aspect-square w-full">
      {selectedImage ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative w-full h-full"
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-cover rounded-lg"
          />
          {isGenerating && (
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          )}
        </motion.div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-surface rounded-lg border-2 border-dashed border-gray-600">
          <div className="text-center">
            <PhotoIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-400">
              Upload or generate an image to get started
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 