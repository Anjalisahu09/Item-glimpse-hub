import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export const ProductGrid = ({ products, loading }: ProductGridProps) => {

  // Responsive column counts (customize as needed)
  const getColumnCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 4; // xl
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 640) return 2;  // sm
    }
    return 1; // mobile
  };
  const colCount = getColumnCount();

  const fullRowProductCount = Math.floor(products.length / colCount) * colCount;
  const fullRows = products.slice(0, fullRowProductCount);
  const lastRow = products.slice(fullRowProductCount);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:justify-items-center lg:justify-items-center">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:justify-items-center lg:justify-items-center"
      >
        {fullRows.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </motion.div>
      {lastRow.length > 0 && (
        <div className="flex justify-center gap-6 mt-6">
          {lastRow.map((product, index) => (
            <ProductCard key={product.id} product={product} index={fullRows.length + index} />
          ))}
        </div>
      )}
    </>
  );

};