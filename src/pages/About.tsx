import React from 'react';
import { Heart, Award, Users, TrendingUp, Target, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-l from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span>درباره فابی</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              ما رویای شما را
              <br />
              <span className="text-primary">به واقعیت تبدیل می‌کنیم</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              فابی با ارائه بهترین محصولات پوشاک مذهبی و مدرن، تلاش می‌کند تا شما را در
              انتخاب‌های خود همراهی کند. کیفیت، تنوع و رضایت شما، اولویت ماست.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-sm text-primary mb-4">
                <Target className="h-4 w-4" />
                <span>داستان ما</span>
              </div>
              <h2 className="text-3xl mb-6">سفری که با یک رویا آغاز شد</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  فابی در سال ۱۳۹۸ با هدف ارائه محصولات با کیفیت و متنوع در حوزه پوشاک زنانه،
                  به ویژه شال، روسری و مانتو آغاز به کار کرد. ما با درک نیازهای بانوان ایرانی و
                  توجه به استانداردهای مد روز، محصولاتی را ارائه می‌دهیم که هم زیبایی و هم
                  راحتی را به ارمغان می‌آورند.
                </p>
                <p>
                  تیم ما از طراحان و متخصصان با تجربه تشکیل شده است که با دقت و علاقه، هر
                  محصول را انتخاب و ارائه می‌کنند. ما معتقدیم که پوشش مناسب می‌تواند اعتماد به
                  نفس و زیبایی درونی شما را به نمایش بگذارد.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1668028554854-245f8ccae15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlc3QlMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzNzQ2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About Us"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">ارزش‌های ما</h2>
            <p className="text-muted-foreground">
              اصولی که ما را در مسیر موفقیت همراهی می‌کنند
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3">کیفیت برتر</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                بهترین مواد اولیه و بالاترین استانداردهای کیفی
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3">رضایت مشتری</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                خوشحالی و رضایت شما، هدف اصلی ماست
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3">مد روز</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                همیشه با جدیدترین ترندهای مد همراه هستیم
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3">خانواده فابی</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                شما عضوی از خانواده بزرگ ما هستید
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-primary mb-2">۵+</div>
              <p className="text-muted-foreground">سال تجربه</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-primary mb-2">۱۰۰۰+</div>
              <p className="text-muted-foreground">محصول متنوع</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-primary mb-2">۵۰۰۰+</div>
              <p className="text-muted-foreground">مشتری راضی</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-primary mb-2">۱۰۰٪</div>
              <p className="text-muted-foreground">رضایت مشتری</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-l from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">مأموریت ما</h2>
            <p className="text-lg leading-relaxed opacity-90">
              فراهم کردن تجربه خرید آسان و لذت‌بخش برای بانوان ایرانی با ارائه محصولات با
              کیفیت، متنوع و مناسب که هم با فرهنگ و ارزش‌های ما همخوانی داشته باشد و هم با مد
              روز دنیا همگام باشد. ما می‌خواهیم هر روز به شما کمک کنیم تا زیباتر و با اعتماد به
              نفس بیشتر باشید.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
