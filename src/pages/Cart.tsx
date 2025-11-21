import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl mb-4">سبد خرید شما خالی است</h2>
          <p className="text-muted-foreground mb-6">
            هنوز محصولی به سبد خرید خود اضافه نکرده‌اید
          </p>
          <Button size="lg" asChild>
            <Link to="/shop">شروع خرید</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl mb-8">سبد خرید</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className="bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="text-sm text-muted-foreground mt-1">
                          {item.selectedColor && <span>رنگ: {item.selectedColor}</span>}
                          {item.selectedColor && item.selectedSize && <span> • </span>}
                          {item.selectedSize && <span>سایز: {item.selectedSize}</span>}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="text-left">
                        <p className="text-primary">
                          {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-muted-foreground">
                            {item.price.toLocaleString('fa-IR')} × {item.quantity}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-20">
              <h2 className="text-xl mb-6">خلاصه سفارش</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">مجموع محصولات:</span>
                  <span>{getTotalPrice().toLocaleString('fa-IR')} تومان</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">هزینه ارسال:</span>
                  <span className="text-green-600">رایگان</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span>مجموع:</span>
                    <span className="text-xl text-primary">
                      {getTotalPrice().toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>
              </div>
              <Button className="w-full" size="lg" asChild>
                <Link to="/checkout">ادامه و پرداخت</Link>
              </Button>
              <Button variant="outline" className="w-full mt-3" asChild>
                <Link to="/shop">ادامه خرید</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
