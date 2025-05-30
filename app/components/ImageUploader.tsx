'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion } from 'framer-motion'
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'

interface ImageUploaderProps {
  onImageSelect: (imageUrl: string) => void
}

export default function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      onImageSelect(imageUrl)
    }
  }, [onImageSelect])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1
  })

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-600'}
          transition-colors duration-200
          cursor-pointer
        `}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <ArrowUpTrayIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg mb-2">
            {isDragActive ? 'Drop your image here' : 'Drag & drop an image here'}
          </p>
          <p className="text-sm text-gray-400">
            or click to select a file
          </p>
        </div>
      </div>
    </motion.div>
  )
} 