import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { HelpCircle, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

export function FAQ() {
  const faqs = [
    {
      question: 'چگونه می‌توانم سفارش دهم؟',
      answer:
        'برای ثبت سفارش، کافی است محصول مورد نظر خود را انتخاب کنید، به سبد خرید اضافه کنید و سپس مراحل پرداخت را تکمیل نمایید. همه مراحل ساده و کاربرپسند طراحی شده‌اند.',
    },
    {
      question: 'هزینه ارسال چقدر است؟',
      answer:
        'برای سفارش‌های بالای ۵۰۰ هزار تومان، ارسال کاملاً رایگان است. برای سفارش‌های زیر این مبلغ، هزینه ارسال ۵۰ هزار تومان محاسبه می‌شود.',
    },
    {
      question: 'مدت زمان ارسال چقدر است؟',
      answer:
        'سفارش‌ها در تهران ظرف ۲۴ تا ۴۸ ساعت و در شهرستان‌ها ظرف ۳ تا ۵ روز کاری ارسال می‌شوند. در مواقع خاص مانند ایام تعطیل، ممکن است زمان ارسال کمی بیشتر شود.',
    },
    {
      question: 'آیا امکان پرداخت در محل وجود دارد؟',
      answer:
        'بله، شما می‌توانید هنگام دریافت سفارش، هزینه را نقداً یا با کارت‌خوان به پیک پرداخت کنید. همچنین پرداخت آنلاین از طریق درگاه بانکی نیز امکان‌پذیر است.',
    },
    {
      question: 'آیا می‌توانم کالا را مرجوع کنم؟',
      answer:
        'بله، شما می‌توانید تا ۷ روز پس از دریافت کالا، در صورتی که محصول دست نخورده و در بسته‌بندی اصلی باشد، آن را مرجوع کنید. کافی است با پشتیبانی ما تماس بگیرید.',
    },
    {
      question: 'چگونه از اصالت محصولات مطمئن شوم؟',
      answer:
        'تمامی محصولات فابی دارای ضمانت اصالت و کیفیت هستند. ما مستقیماً با تولیدکنندگان معتبر همکاری می‌کنیم و تمام محصولات قبل از ارسال، کنترل کیفیت می‌شوند.',
    },
    {
      question: 'آیا امکان خرید عمده وجود دارد؟',
      answer:
        'بله، برای خرید عمده و همکاری‌های تجاری می‌توانید از طریق صفحه تماس با ما، با بخش فروش ویژه ارتباط برقرار کنید. تخفیف‌های ویژه‌ای برای خریدهای عمده در نظر گرفته شده است.',
    },
    {
      question: 'روش‌های پرداخت چیست؟',
      answer:
        'شما می‌توانید از کارت‌های عضو شتاب، پرداخت اینترنتی و یا پرداخت در محل (پس از دریافت کالا) استفاده کنید. تمامی پرداخت‌های آنلاین از طریق درگاه امن بانکی انجام می‌شود.',
    },
    {
      question: 'اگر سایز مناسب نبود چه کنم؟',
      answer:
        'در صورتی که سایز محصول مناسب نباشد، می‌توانید آن را تا ۷ روز با ما تعویض کنید. کافی است با پشتیبانی تماس بگیرید تا فرآیند تعویض را برای شما انجام دهیم.',
    },
    {
      question: 'چگونه از تخفیف‌ها مطلع شوم؟',
      answer:
        'با عضویت در خبرنامه فابی از طریق صفحه اصلی یا تماس با ما، از جدیدترین تخفیف‌ها، محصولات جدید و پیشنهادات ویژه باخبر می‌شوید. همچنین می‌توانید ما را در شبکه‌های اجتماعی دنبال کنید.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-l from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">سوالات متداول</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            پاسخ سوالات رایج را اینجا بیابید. اگر سوال دیگری دارید، با ما تماس بگیرید
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-6 border border-slate-200 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-right">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-l from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl mb-4">سوال دیگری دارید؟</h2>
              <p className="text-lg mb-8 opacity-90">
                تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    <Mail className="ml-2 h-5 w-5" />
                    تماس با ما
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white" asChild>
                  <a href="tel:02112345678">
                    <Phone className="ml-2 h-5 w-5" />
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
