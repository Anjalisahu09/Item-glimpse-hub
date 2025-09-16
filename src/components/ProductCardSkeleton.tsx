import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

export const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden bg-gradient-card shadow-card border-0 h-full">
      <div className="aspect-square">
        <Skeleton className="w-full h-full" />
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};