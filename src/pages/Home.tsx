import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Shield, Headphones, RefreshCw, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function Home() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1745962978498-13fac949e357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwd29tYW58ZW58MXx8fHwxNzYzNjU1OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center justify-center md:justify-end h-full">
            <div className="text-center md:text-right space-y-6 max-w-xl text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <Sparkles className="h-4 w-4" />
                <span>کلکسیون جدید ۱۴۰۴</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                سبک زندگی
                <br />
                <span className="text-primary">با فابی</span>
              </h1>
              <p className="text-lg text-white/90">
                جدیدترین مدل‌های شال، روسری و مانتو
                <br />
                با طراحی مدرن و کیفیت برتر
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="lg" asChild className="shadow-xl">
                  <Link to="/shop">
                    کاوش در محصولات
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1">ارسال سریع</h3>
              <p className="text-sm text-muted-foreground">ارسال رایگان بالای ۵۰۰ هزار تومان</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1">پرداخت امن</h3>
              <p className="text-sm text-muted-foreground">با درگاه‌های معتبر</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                <RefreshCw className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1">بازگشت آسان</h3>
              <p className="text-sm text-muted-foreground">تا ۷ روز ضمانت بازگشت</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                <Headphones className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1">پشتیبانی ۲۴/۷</h3>
              <p className="text-sm text-muted-foreground">همیشه در کنار شما</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-3">محصولات ویژه</h2>
            <p className="text-muted-foreground">برگزیده‌هایی از جدیدترین محصولات</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/shop">
                مشاهده همه محصولات
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-3">خرید بر اساس دسته‌بندی</h2>
            <p className="text-muted-foreground">انتخاب کنید و خرید کنید</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'شال', image: 'https://images.unsplash.com/photo-1604843206973-fe1e58bf974e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzY2FyZiUyMHdvb2x8ZW58MXx8fHwxNzYzNzQ2NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
              { name: 'روسری', image: 'https://images.unsplash.com/photo-1758264839086-2bdecc06d9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2NhcmYlMjBwYXR0ZXJufGVufDF8fHx8MTc2MzY2NjUwMnww&ixlib=rb-4.1.0&q=80&w=1080' },
              { name: 'مانتو', image: 'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlc3QlMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzNzQ2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
            ].map((category) => (
              <Link
                key={category.name}
                to={`/shop?category=${category.name}`}
                className="group relative h-[350px] rounded-2xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{category.name}</h3>
                  <p className="text-sm text-white/80 flex items-center gap-2">
                    مشاهده محصولات
                    <ArrowLeft className="h-4 w-4" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-l from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">همیشه از جدیدترین‌ها باخبر باشید</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            با عضویت در خبرنامه فابی، از آخرین محصولات، تخفیف‌ها و پیشنهادات ویژه با خبر شوید
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">عضویت در خبرنامه</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
