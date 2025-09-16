import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const discount = Math.round(product.discountPercentage);
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.55, 1.4]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 border-0 h-full">
        <div className="relative overflow-hidden">
          <Link to={`/product/${product.id}`}>
            <div className="aspect-square overflow-hidden">
              <motion.img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </Link>
          
          {discount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="absolute top-3 left-3 bg-gradient-secondary text-secondary-foreground border-0 font-semibold">
                -{discount}%
              </Badge>
            </motion.div>
          )}

          <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{product.rating.toFixed(1)}</span>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-3">
            <div>
              <Badge variant="outline" className="text-xs mb-2">
                {product.category}
              </Badge>
              <Link to={`/product/${product.id}`}>
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {product.title}
                </h3>
              </Link>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                {discount > 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">
                      ${discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-lg font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                )}
                <p className="text-xs text-muted-foreground">
                  {product.stock} in stock
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="sm" className="bg-gradient-primary text-primary-foreground border-0 shadow-sm">
                  <ShoppingBag className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};