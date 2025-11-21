import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { products } from '../data/products';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(products.slice(0, 5));
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults(products.slice(0, 5));
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    setSearchResults(filtered.slice(0, 8));
  }, [searchQuery]);

  const handleProductClick = (productId: string) => {
    setOpen(false);
    setSearchQuery('');
    navigate(`/product/${productId}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setOpen(false);
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="hidden sm:flex">
          <Search className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0" align="center" dir="rtl">
        <form onSubmit={handleSearchSubmit} className="p-3 border-b">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی محصولات..."
              className="pr-10 pl-10"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </form>

        <ScrollArea className="h-[400px]">
          <div className="p-2">
            {searchResults.length > 0 ? (
              <>
                <p className="text-xs text-muted-foreground px-2 py-2">
                  {searchQuery ? 'نتایج جستجو' : 'محصولات پیشنهادی'}
                </p>
                <div className="space-y-1">
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors text-right"
                    >
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-slate-100 flex-shrink-0">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                      </div>
                      <span className="text-sm text-primary flex-shrink-0">
                        {product.price.toLocaleString('fa-IR')}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="p-8 text-center">
                <p className="text-sm text-muted-foreground">محصولی یافت نشد</p>
              </div>
            )}
          </div>
        </ScrollArea>

        {searchQuery && searchResults.length > 0 && (
          <div className="border-t p-2">
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => {
                setOpen(false);
                navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
                setSearchQuery('');
              }}
            >
              مشاهده همه نتایج
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
