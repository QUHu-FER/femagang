'use client';

import { TypeAnimation } from 'react-type-animation';

interface TypewriterTextProps {
  text?: string;
  sequences?: (string | number)[];
  className?: string;
  speed?: number;
  delay?: number;
}

const TypewriterText = ({ 
  text = "", 
  sequences = [], 
  className = "", 
  speed = 50,
  delay = 1000 
}: TypewriterTextProps) => {
  // Jika text ada, konversi ke sequences
  let finalSequences: (string | number)[];
  
  if (text) {
    finalSequences = [text, delay];
  } else if (sequences.length > 0) {
    finalSequences = sequences;
  } else {
    // Fallback sequences
    finalSequences = [
      'Membangun Kesetaraan Gender',
      2000,
      'Melindungi Hak-Hak Anak', 
      2000,
      'Membangun Keluarga Berkualitas',
      2000,
    ];
  }

  return (
    <TypeAnimation
      sequence={finalSequences}
      wrapper="span"
      cursor={true}
      repeat={text ? 0 : Infinity}
      className={className}
      style={{ display: 'inline-block' }}
      speed={speed as any}
    />
  );
};

export default TypewriterText;
