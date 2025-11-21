import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('پیام شما با موفقیت ارسال شد!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-l from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">تماس با ما</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            سوالات، نظرات و پیشنهادات خود را با ما در میان بگذارید. ما همیشه آماده شنیدن صدای شما هستیم
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3">تلفن تماس</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="tel:02112345678" className="block hover:text-primary transition-colors">
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </a>
                <a href="tel:09121234567" className="block hover:text-primary transition-colors">
                  ۰۹۱۲-۱۲۳۴۵۶۷
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3">ایمیل</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="mailto:info@fabi.shop" className="block hover:text-primary transition-colors">
                  info@fabi.shop
                </a>
                <a href="mailto:support@fabi.shop" className="block hover:text-primary transition-colors">
                  support@fabi.shop
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3">آدرس</h3>
              <p className="text-sm text-muted-foreground">
                تهران، خیابان ولیعصر، پلاک ۱۲۳
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3">ساعات کاری</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>شنبه تا چهارشنبه: ۹ صبح - ۶ عصر</p>
                <p>پنجشنبه: ۹ صبح - ۱ ظهر</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="mb-3">شبکه‌های اجتماعی</h3>
              <p className="text-sm opacity-90 mb-4">
                ما را در شبکه‌های اجتماعی دنبال کنید
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <Send className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h2 className="text-2xl mb-2">پیام خود را ارسال کنید</h2>
              <p className="text-muted-foreground mb-8">
                فرم زیر را تکمیل کنید تا در اسرع وقت با شما تماس بگیریم
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">نام و نام خانوادگی</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="نام خود را وارد کنید"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره تماس</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">پیام شما</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="پیام خود را اینجا بنویسید..."
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  ارسال پیام
                  <Send className="mr-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden h-[400px] bg-slate-200 flex items-center justify-center border border-slate-300">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-3" />
              <p>نقشه موقعیت فروشگاه</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
