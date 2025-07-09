'use client';

import { useState, useEffect } from 'react';
import { FaEye, FaUsers, FaCalendarDay, FaGlobe } from 'react-icons/fa';
import AnimatedCounter from './AnimatedCounter';

export default function VisitorStatsCompact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock data - in real implementation, this would come from analytics API
  const stats = {
    online: Math.floor(Math.random() * 50) + 10,
    today: Math.floor(Math.random() * 500) + 100,
    yesterday: Math.floor(Math.random() * 800) + 200,
    total: Math.floor(Math.random() * 50000) + 10000,
    hits: Math.floor(Math.random() * 100000) + 50000
  };

  if (!mounted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
        <h4 className="text-sm font-semibold text-white mb-3">Statistik Pengunjung</h4>
        <div className="space-y-2">
          <div className="animate-pulse h-4 bg-white/20 rounded"></div>
          <div className="animate-pulse h-4 bg-white/20 rounded"></div>
          <div className="animate-pulse h-4 bg-white/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <FaEye className="w-4 h-4 text-blue-400" />
        Statistik Pengunjung
      </h4>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-300 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Online
          </span>
          <span className="font-semibold text-green-400">
            <AnimatedCounter target={stats.online} duration={1000} />
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300 flex items-center gap-1">
            <FaCalendarDay className="w-3 h-3 text-blue-400" />
            Hari Ini
          </span>
          <span className="font-semibold text-blue-400">
            <AnimatedCounter target={stats.today} duration={1500} />
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300 flex items-center gap-1">
            <FaUsers className="w-3 h-3 text-purple-400" />
            Kemarin
          </span>
          <span className="font-semibold text-purple-400">
            <AnimatedCounter target={stats.yesterday} duration={1500} />
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300 flex items-center gap-1">
            <FaGlobe className="w-3 h-3 text-orange-400" />
            Total
          </span>
          <span className="font-semibold text-orange-400">
            <AnimatedCounter target={stats.total} duration={2000} />
          </span>
        </div>
        
        <div className="flex justify-between items-center pt-1 border-t border-white/20">
          <span className="text-gray-300 text-xs">Total Hits</span>
          <span className="font-semibold text-red-400 text-xs">
            <AnimatedCounter target={stats.hits} duration={2500} />
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-white/20">
        <p className="text-xs text-gray-400 text-center">
          Data real-time pengunjung website
        </p>
      </div>
    </div>
  );
}
