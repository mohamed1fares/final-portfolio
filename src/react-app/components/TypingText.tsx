import { useTypingAnimation } from '@/react-app/hooks/useTypingAnimation';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
}

export default function TypingText({ 
  text, 
  className = '', 
  speed = 100, 
  delay = 0, 
  showCursor = true 
}: TypingTextProps) {
  const { displayText, isComplete } = useTypingAnimation(text, speed, delay);

  return (
    <span className={`${className} font-mono`}>
      {displayText}
      {showCursor && (
        <span className={`ml-1 ${isComplete ? 'animate-pulse' : 'animate-pulse'} text-blue-500`}>
          |
        </span>
      )}
    </span>
  );
}
