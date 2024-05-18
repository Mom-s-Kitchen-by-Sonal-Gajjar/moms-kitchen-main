import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface ChefImageProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export const ChefImage = ({ imgSrc, dark = false, ...props }: ChefImageProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        
      )}
      {...props}
      style={{
        width: 'auto', // Auto width to maintain aspect ratio
        height: '100%', // Full height of the container
        maxWidth: '300px', // Set max-width to avoid overflow
        overflow: 'hidden' // Ensure the image does not overflow the div
      }}
    >
      <img
        src={imgSrc}
        className='pointer-events-none z-50 select-none object-cover w-full h-full'
        alt="Chef"
      />
    </div>
  );
};
