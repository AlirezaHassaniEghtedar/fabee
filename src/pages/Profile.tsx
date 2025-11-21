import React, { useState } from 'react';
import { User, Package, Heart, MapPin, Settings, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Avatar, AvatarFallback } from '../components/ui/avatar';

export function Profile() {
  const [userData, setUserData] = useState({
    firstName: 'نام',
    lastName: 'نام خانوادگی',
    email: 'user@example.com',
    phone: '۰۹۱۲۱۲۳۴۵۶۷',
  });

  const orders = [
    {
      id: 'FI-1234',
      date: '۱۴۰۳/۰۸/۲۵',
      total: 1250000,
      status: 'ارسال شده',
      items: 2,
    },
    {
      id: 'FI-1235',
      date: '۱۴۰۳/۰۸/۲۰',
      total: 850000,
      status: 'تحویل داده شده',
      items: 1,
    },
    {
      id: 'FI-1236',
      date: '۱۴۰۳/۰۸/۱۵',
      total: 2100000,
      status: 'تحویل داده شده',
      items: 3,
    },
  ];

  const addresses = [
    {
      id: 1,
      title: 'خانه',
      address: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
      phone: '۰۲۱۱۲۳۴۵۶۷۸',
      isDefault: true,
    },
    {
      id: 2,
      title: 'محل کار',
      address: 'تهران، خیابان آزادی، پلاک ۴۵۶',
      phone: '۰۲۱۸۷۶۵۴۳۲۱',
      isDefault: false,
    },
  ];

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {userData.firstName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-2xl mb-1">
                {userData.firstName} {userData.lastName}
              </h1>
              <p className="text-muted-foreground mb-4">{userData.email}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div>
                  <span className="text-muted-foreground">تعداد سفارش: </span>
                  <span>{orders.length}</span>
                </div>
                <Separator orientation="vertical" className="h-5" />
                <div>
                  <span className="text-muted-foreground">عضویت از: </span>
                  <span>۱۴۰۲/۰۶/۱۵</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <LogOut className="h-4 w-4" />
              خروج
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="orders" className="gap-2 py-3">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">سفارش‌ها</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="gap-2 py-3">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">آدرس‌ها</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="gap-2 py-3">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">علاقه‌مندی‌ها</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2 py-3">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">تنظیمات</span>
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-base">سفارش #{order.id}</CardTitle>
                      <CardDescription>{order.date}</CardDescription>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          order.status === 'تحویل داده شده'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="text-muted-foreground">تعداد محصولات: </span>
                        <span>{order.items}</span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">مبلغ کل: </span>
                        <span className="text-primary">
                          {order.total.toLocaleString('fa-IR')} تومان
                        </span>
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      جزئیات
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-4">
            {addresses.map((address) => (
              <Card key={address.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base flex items-center gap-2">
                        {address.title}
                        {address.isDefault && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            پیش‌فرض
                          </span>
                        )}
                      </CardTitle>
                    </div>
                    <Button variant="ghost" size="sm">
                      ویرایش
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{address.address}</p>
                  <p className="text-muted-foreground">تلفن: {address.phone}</p>
                </CardContent>
              </Card>
            ))}
            <Button className="w-full" variant="outline">
              افزودن آدرس جدید
            </Button>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardContent className="py-12 text-center">
                <Heart className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-muted-foreground">
                  هنوز محصولی را به لیست علاقه‌مندی‌ها اضافه نکرده‌اید
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>اطلاعات حساب کاربری</CardTitle>
                <CardDescription>اطلاعات خود را ویرایش کنید</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">نام</Label>
                      <Input
                        id="firstName"
                        value={userData.firstName}
                        onChange={(e) =>
                          setUserData({ ...userData, firstName: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">نام خانوادگی</Label>
                      <Input
                        id="lastName"
                        value={userData.lastName}
                        onChange={(e) =>
                          setUserData({ ...userData, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره تماس</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    />
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-base mb-4">تغییر رمز عبور</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">رمز عبور فعلی</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">رمز عبور جدید</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">تکرار رمز عبور جدید</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button type="submit">ذخیره تغییرات</Button>
                    <Button type="button" variant="outline">
                      لغو
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
