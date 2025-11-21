export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  colors: string[];
  sizes: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'شال نخی گلدار',
    price: 450000,
    originalPrice: 550000,
    image: 'https://images.unsplash.com/photo-1736342181249-9e81c11737b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhpamabiJTIwc2NhcmZ8ZW58MXx8fHwxNzYzNzQ2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'شال',
    description: 'شال نخی با طرح گل‌های ریز مناسب برای فصل بهار و تابستان. پارچه نرم و راحت با کیفیت بالا.',
    colors: ['مشکی', 'سفید', 'صورتی', 'آبی'],
    sizes: ['یک سایز'],
    featured: true,
  },
  {
    id: '2',
    name: 'روسری ابریشم طرح دار',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1758264839086-2bdecc06d9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2NhcmYlMjBwYXR0ZXJufGVufDF8fHx8MTc2MzY2NjUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'روسری',
    description: 'روسری ابریشمی با طرح‌های مدرن و رنگ‌های متنوع. مناسب برای مهمانی‌ها و مراسم.',
    colors: ['سرمه‌ای', 'زرشکی', 'کرم'],
    sizes: ['یک سایز'],
    featured: true,
  },
  {
    id: '3',
    name: 'مانتو بلند پاییزه',
    price: 1250000,
    originalPrice: 1450000,
    image: 'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlc3QlMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzNzQ2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'مانتو',
    description: 'مانتو بلند با پارچه کرپ مناسب برای فصل پاییز و زمستان. برش مدرن و راحت.',
    colors: ['مشکی', 'خاکستری', 'سورمه‌ای'],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: '4',
    name: 'شال حریر ساده',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1664293797551-2cf5c308d3c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZmFicmljJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjM2NTA3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'شال',
    description: 'شال حریر ساده با رنگ‌های متنوع مناسب برای استفاده روزمره.',
    colors: ['مشکی', 'سفید', 'بژ', 'طوسی'],
    sizes: ['یک سایز'],
  },
  {
    id: '5',
    name: 'روسری نخی طرح دار',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1706960784129-82c983b6d8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBzY2FyZnxlbnwxfHx8fDE3NjM3NDY1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'روسری',
    description: 'روسری نخی با طرح‌های جدید و مدرن. پارچه تنفس‌پذیر و راحت.',
    colors: ['سبز', 'آبی', 'صورتی'],
    sizes: ['یک سایز'],
  },
  {
    id: '6',
    name: 'مانتو کوتاه تابستانه',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1760083545495-b297b1690672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaGlqYWJ8ZW58MXx8fHwxNzYzNzQ2NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'مانتو',
    description: 'مانتو کوتاه با پارچه نازک مناسب برای فصل تابستان.',
    colors: ['کرم', 'سفید', 'آبی روشن'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '7',
    name: 'شال پشمی زمستانه',
    price: 620000,
    image: 'https://images.unsplash.com/photo-1604843206973-fe1e58bf974e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzY2FyZiUyMHdvb2x8ZW58MXx8fHwxNzYzNzQ2NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'شال',
    description: 'شال پشمی گرم و نرم مناسب برای فصل سرما.',
    colors: ['مشکی', 'قهوه‌ای', 'خاکستری'],
    sizes: ['یک سایز'],
  },
  {
    id: '8',
    name: 'روسری ساتن لمه',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1744502671648-7cd2358a193f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaWxrJTIwZmFicmljfGVufDF8fHx8MTc2MzcwMzQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'روسری',
    description: 'روسری ساتن با لمه مناسب برای مجالس و مهمانی‌ها.',
    colors: ['طلایی', 'نقره‌ای', 'برنز'],
    sizes: ['یک سایز'],
  },
];

export const categories = [
  { id: 'all', name: 'همه محصولات' },
  { id: 'شال', name: 'شال' },
  { id: 'روسری', name: 'روسری' },
  { id: 'مانتو', name: 'مانتو' },
];