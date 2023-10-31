import Skeleton from '@mui/material/Skeleton';

type CardSkeletonProps = {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: number | string;
  height?: number | string;
  animation?: 'pulse' | 'wave' | false;
}

export function CardSkeleton({ variant, width, height, animation }: CardSkeletonProps) {
  return (
    <Skeleton
      variant={variant}
      width={width}
      height={height}
      animation={animation}
    />
  );
}