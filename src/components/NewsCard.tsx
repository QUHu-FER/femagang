'use client';

import { motion } from 'framer-motion';
import { CalendarDaysIcon, EyeIcon } from '@heroicons/react/24/outline';

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  category: string;
  views: number;
  excerpt: string;
  image?: string;
}

export default function NewsCard({ title, date, category, views, excerpt, image }: NewsCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white text-4xl font-bold opacity-20">
              DP3AP2KB
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <CalendarDaysIcon className="w-4 h-4 mr-1" />
          <span className="mr-4">{date}</span>
          <EyeIcon className="w-4 h-4 mr-1" />
          <span>{views} views</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
          Baca Selengkapnya →
        </button>
      </div>
    </motion.div>
  );
}
