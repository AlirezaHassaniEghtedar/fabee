import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Heart } from 'lucide-react';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useCart } from '../contexts/CartContext';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">محصول یافت نشد</h2>
          <Button onClick={() => navigate('/shop')}>بازگشت به فروشگاه</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedColor, selectedSize);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">
            خانه
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">
            فروشگاه
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="bg-white rounded-lg p-6 lg:p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discountPercent > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-lg px-3 py-1">
                  {discountPercent}% تخفیف
                </Badge>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-3">
                  {product.category}
                </Badge>
                <h1 className="text-3xl mb-3">{product.name}</h1>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-3xl text-primary">
                  {product.price.toLocaleString('fa-IR')} تومان
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString('fa-IR')}
                  </span>
                )}
              </div>

              {/* Colors */}
              {product.colors.length > 0 && (
                <div>
                  <label className="block mb-3">انتخاب رنگ:</label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        variant={selectedColor === color ? 'default' : 'outline'}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes.length > 0 && (
                <div>
                  <label className="block mb-3">انتخاب سایز:</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? 'default' : 'outline'}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block mb-3">تعداد:</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="ml-2 h-5 w-5" />
                  افزودن به سبد خرید
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="border-t pt-6 space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">دسته‌بندی:</span>
                  <span>{product.category}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">موجودی:</span>
                  <span className="text-green-600">موجود</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl mb-6">محصولات مشابه</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
