import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-sm">ف</span>
              </div>
              <h3 className="text-xl">فابی</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              فروشگاه آنلاین لباس، شال و روسری با بهترین کیفیت و جدیدترین مدل‌های روز
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-slate-800 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-slate-800 hover:text-white">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">دسترسی سریع</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-slate-400 hover:text-white transition-colors">
                  فروشگاه
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4">خدمات مشتریان</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  رویه بازگشت کالا
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  شیوه‌های پرداخت
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  راهنمای خرید
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">تماس با ما</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:02112345678" className="hover:text-white transition-colors block">
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@fabi.shop" className="hover:text-white transition-colors">
                  info@fabi.shop
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>تهران، خیابان ولیعصر</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 mt-10 pt-10">
          <div className="max-w-md mx-auto text-center">
            <h3 className="mb-2">عضویت در خبرنامه</h3>
            <p className="text-slate-400 text-sm mb-4">
              از تخفیف‌ها و محصولات جدید با خبر شوید
            </p>
            <div className="flex gap-2" dir="ltr">
              <Input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="bg-slate-800 border-slate-700 text-right"
                dir="rtl"
              />
              <Button>عضویت</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-10 pt-8 text-center text-sm text-slate-400">
          <p>© ۱۴۰۴ فابی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
