'use client';

import { useState } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaTelegram, FaLink } from 'react-icons/fa';

interface SocialShareProps {
  url?: string;
  title?: string;
  // description?: string;
  className?: string;
}

export default function SocialShare({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = "Dinas ESDM Sumatera Barat",
  // description = "Portal resmi Dinas Energi dan Sumber Daya Mineral Provinsi Sumatera Barat",
  className = ""
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
  };

  const handleShare = (platform: string) => {
    const shareUrl = shareData[platform as keyof typeof shareData];
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        Bagikan:
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleShare('facebook')}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          title="Bagikan ke Facebook"
          aria-label="Bagikan ke Facebook"
        >
          <FaFacebook className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleShare('twitter')}
          className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors duration-200"
          title="Bagikan ke Twitter"
          aria-label="Bagikan ke Twitter"
        >
          <FaTwitter className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleShare('whatsapp')}
          className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
          title="Bagikan ke WhatsApp"
          aria-label="Bagikan ke WhatsApp"
        >
          <FaWhatsapp className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleShare('linkedin')}
          className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-200"
          title="Bagikan ke LinkedIn"
          aria-label="Bagikan ke LinkedIn"
        >
          <FaLinkedin className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleShare('telegram')}
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
          title="Bagikan ke Telegram"
          aria-label="Bagikan ke Telegram"
        >
          <FaTelegram className="w-4 h-4" />
        </button>

        <button
          onClick={copyToClipboard}
          className="p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-200 relative"
          title="Salin Link"
          aria-label="Salin Link"
        >
          <FaLink className="w-4 h-4" />
          {copied && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Link disalin!
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
