import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, Check } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';

export function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('online');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    clearCart();
    setShowSuccess(false);
    navigate('/');
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl mb-8">تکمیل سفارش</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl">اطلاعات ارسال</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">نام</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">نام خانوادگی</Label>
                    <Input id="lastName" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone">شماره تماس</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">آدرس کامل</Label>
                    <Textarea id="address" rows={3} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">شهر</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">کد پستی</Label>
                    <Input id="postalCode" required />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl">روش پرداخت</h2>
                </div>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2 space-x-reverse p-4 border rounded-lg mb-3">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="flex-1 cursor-pointer">
                      <div>پرداخت آنلاین</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        پرداخت امن با کارت‌های بانکی
                      </p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse p-4 border rounded-lg">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <div>پرداخت در محل</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        پرداخت هنگام تحویل کالا
                      </p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-20">
                <h2 className="text-xl mb-6">خلاصه سفارش</h2>
                
                {/* Items */}
                <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                      className="flex justify-between text-sm"
                    >
                      <div className="flex-1">
                        <p>{item.name}</p>
                        <p className="text-muted-foreground">
                          {item.quantity} × {item.price.toLocaleString('fa-IR')}
                        </p>
                      </div>
                      <span>
                        {(item.price * item.quantity).toLocaleString('fa-IR')}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">مجموع:</span>
                    <span>{getTotalPrice().toLocaleString('fa-IR')} تومان</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">هزینه ارسال:</span>
                    <span className="text-green-600">رایگان</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span>مبلغ قابل پرداخت:</span>
                    <span className="text-xl text-primary">
                      {getTotalPrice().toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-6" size="lg">
                  تکمیل خرید
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <AlertDialogTitle className="text-center">
              سفارش شما با موفقیت ثبت شد!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              کد پیگیری سفارش شما: <strong>FI-{Math.floor(Math.random() * 10000)}</strong>
              <br />
              از خرید شما متشکریم. سفارش شما در اسرع وقت ارسال خواهد شد.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={handleSuccessClose} className="w-full">
              بازگشت به صفحه اصلی
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
