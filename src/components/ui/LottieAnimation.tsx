import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Player from @lottiefiles/react-lottie-player
const Player = dynamic(() =>
  import('@lottiefiles/react-lottie-player').then((mod) => mod.Player), {
    ssr: false, // Disable server-side rendering for the Lottie Player as it requires the browser environment
  }
);

interface LottieAnimationProps {
  animationData: string | object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
}) => {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={animationData}
      className={className}
    />
  );
};

export default LottieAnimation;
