'use client';
import Lottie from 'lottie-react';
import { cn } from '@/utils/cn';
import animationData from '@/public/lottie/auth.json';

export default function LottieAnimation({ ...props }) {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      speed={0.5}
      className={cn('w-full h-full', props.className)}
      {...props}
    />
  );
}
