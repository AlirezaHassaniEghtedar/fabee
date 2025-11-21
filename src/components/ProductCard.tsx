import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from '../contexts/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-square overflow-hidden bg-slate-50">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {discountPercent > 0 && (
            <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
              {discountPercent}% تخفیف
            </Badge>
          )}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              onClick={handleAddToCart}
              className="rounded-full shadow-lg"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-primary">
              {product.price.toLocaleString('fa-IR')} تومان
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {product.originalPrice.toLocaleString('fa-IR')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
