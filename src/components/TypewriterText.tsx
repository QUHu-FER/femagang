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
      speed={typeof speed === 'number' && speed >= 1 && speed <= 99 ? speed as 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99 : 50}
    />
  );
};

export default TypewriterText;
