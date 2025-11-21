import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

export function CartPopover() {
  const { items, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -left-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start" dir="rtl">
        <div className="flex items-center justify-between p-4 border-b">
          <h3>سبد خرید</h3>
          <span className="text-sm text-muted-foreground">
            {getTotalItems()} محصول
          </span>
        </div>

        {items.length === 0 ? (
          <div className="p-8 text-center">
            <ShoppingBag className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">سبد خرید شما خالی است</p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[300px]">
              <div className="p-4 space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex gap-3"
                  >
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-slate-100 flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">{item.name}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-primary">
                          {item.price.toLocaleString('fa-IR')} تومان
                        </span>
                        <span className="text-xs text-muted-foreground">
                          تعداد: {item.quantity}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 flex-shrink-0"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span>مجموع:</span>
                <span className="text-primary">
                  {getTotalPrice().toLocaleString('fa-IR')} تومان
                </span>
              </div>
              <Button className="w-full" asChild onClick={() => setOpen(false)}>
                <Link to="/cart">مشاهده سبد خرید</Link>
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
