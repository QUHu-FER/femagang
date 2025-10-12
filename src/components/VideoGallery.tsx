'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, XMarkIcon, EyeIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: number;
  date: string;
  category: string;
}

interface VideoGalleryProps {
  videos: Video[];
  title?: string;
  showCategories?: boolean;
}

export default function VideoGallery({ videos, title = "Galeri Video", showCategories = true }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(videos.map(video => video.category)))];

  // Filter videos by category
  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-red-50 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6">
            <span className="text-red-600 font-semibold text-xs sm:text-sm">🎥 VIDEO DOKUMENTASI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Koleksi video dokumentasi kegiatan dan program Dinas ESDM Sumatera Barat
          </p>
        </motion.div>

        {/* Category Filter */}
        {showCategories && (
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 shadow-md hover:shadow-lg'
                }`}
              >
                {category === 'all' ? 'Semua' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => openVideo(video)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <PlayIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {video.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <EyeIcon className="w-4 h-4" />
                      <span>{video.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>

                {/* Watch Button */}
                <button
                  onClick={() => openVideo(video)}
                  className="mt-4 w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 sm:py-3 rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <PlayIcon className="w-4 h-4" />
                  <span>Tonton Video</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal/Lightbox */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeVideo}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                {/* Close Button */}
                <button
                  onClick={closeVideo}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Video Container */}
                <motion.div
                  className="max-w-4xl w-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Video Player */}
                  <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                    {selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be') ? (
                      <iframe
                        src={selectedVideo.videoUrl.replace('watch?v=', 'embed/')}
                        title={selectedVideo.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={selectedVideo.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full"
                      />
                    )}
                  </div>
                  
                  {/* Video Info */}
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{selectedVideo.title}</h3>
                    <p className="text-gray-200 text-sm sm:text-base mb-3">{selectedVideo.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-1">
                          <EyeIcon className="w-4 h-4" />
                          <span>{selectedVideo.views.toLocaleString()} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{selectedVideo.date}</span>
                        </div>
                      </div>
                      <span className="text-red-300 bg-red-500/20 px-3 py-1 rounded-full text-sm">
                        {selectedVideo.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
