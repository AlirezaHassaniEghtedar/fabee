import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    let filtered = [...products];

    // Filter by search
    if (searchParam) {
      const query = searchParam.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (categoryParam && categoryParam !== 'all') {
      filtered = filtered.filter((p) => p.category === categoryParam);
    } else if (selectedCategory !== 'all' && !searchParam) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name, 'fa'));
        break;
      default:
        // newest - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [searchParams, selectedCategory, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">فروشگاه</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} محصول یافت شد
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="text-sm mb-2 block">دسته‌بندی</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? 'default' : 'outline'}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="md:w-[200px]">
              <label className="text-sm mb-2 block">مرتب‌سازی</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">جدیدترین</SelectItem>
                  <SelectItem value="price-low">ارزان‌ترین</SelectItem>
                  <SelectItem value="price-high">گران‌ترین</SelectItem>
                  <SelectItem value="name">نام محصول</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">محصولی در این دسته‌بندی یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
}