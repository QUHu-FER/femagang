'use client';

import { useState, useEffect } from 'react';
import { FaUsers, FaEye, FaChartLine, FaGlobe } from 'react-icons/fa';
import AnimatedCounter from './AnimatedCounter';

interface VisitorStats {
  online: number;
  todayVisitors: number;
  yesterdayVisitors: number;
  totalVisitors: number;
  totalHits: number;
  userIP: string;
}

interface VisitorStatsProps {
  className?: string;
}

export default function VisitorStats({ className = "" }: VisitorStatsProps) {
  const [stats, setStats] = useState<VisitorStats>({
    online: 0,
    todayVisitors: 0,
    yesterdayVisitors: 0,
    totalVisitors: 0,
    totalHits: 0,
    userIP: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching visitor stats
    const fetchStats = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data (in real app, this would come from analytics API)
        const mockStats: VisitorStats = {
          online: Math.floor(Math.random() * 50) + 10,
          todayVisitors: Math.floor(Math.random() * 500) + 100,
          yesterdayVisitors: Math.floor(Math.random() * 400) + 80,
          totalVisitors: 236020 + Math.floor(Math.random() * 1000),
          totalHits: 712028 + Math.floor(Math.random() * 5000),
          userIP: '114.125.22.143' // Mock IP
        };
        
        setStats(mockStats);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching visitor stats:', error);
        setLoading(false);
      }
    };

    fetchStats();

    // Update online count every 30 seconds
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        online: Math.floor(Math.random() * 50) + 10
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      icon: <FaUsers className="w-5 h-5" />,
      label: 'Online',
      value: stats.online,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: <FaEye className="w-5 h-5" />,
      label: 'Visitor Today',
      value: stats.todayVisitors,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <FaEye className="w-5 h-5" />,
      label: 'Visitor Yesterday',
      value: stats.yesterdayVisitors,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: <FaGlobe className="w-5 h-5" />,
      label: 'All Visitor',
      value: stats.totalVisitors,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: <FaChartLine className="w-5 h-5" />,
      label: 'Total Hits',
      value: stats.totalHits,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    }
  ];

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <FaChartLine className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Statistik Pengunjung
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Data real-time pengunjung website
            </p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
                  <div className="w-24 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="w-16 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {statItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between p-4 rounded-lg ${item.bgColor} hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.label}
                  </span>
                </div>
                <div className={`text-xl font-bold ${item.color}`}>
                  <AnimatedCounter 
                    target={item.value} 
                    duration={2000}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* User IP */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Your IP address</span>
            <span className="font-mono text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {stats.userIP}
            </span>
          </div>
        </div>

        {/* Last Update */}
        <div className="mt-3 text-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Terakhir diperbarui: {new Date().toLocaleTimeString('id-ID')}
          </span>
        </div>
      </div>
    </div>
  );
}
