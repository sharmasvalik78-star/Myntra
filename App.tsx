import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import AIStylist from './components/AIStylist';
import TrendChart from './components/TrendChart';
import Checkout from './components/Checkout';
import Profile from './components/Profile';
import { PRODUCTS } from './constants';
import { Product, CartItem, Page } from './types';
import { ArrowLeft, Star, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({ name: '', mobile: '' });

  const handleLogin = (mobile: string) => {
      setIsLoggedIn(true);
      setUserProfile({ name: 'Mynther Fan', mobile });
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      setUserProfile({ name: '', mobile: '' });
  };

  const addToCart = (product: Product, size: string) => {
    if (!size && product.sizes[0] !== "One Size") return; 
    
    const finalSize = size || (product.sizes.length === 1 ? product.sizes[0] : '');
    if(!finalSize) return;

    const newItem: CartItem = { ...product, quantity: 1, selectedSize: finalSize };
    setCart([...cart, newItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handlePlaceOrder = () => {
      setCart([]);
      setCurrentPage(Page.HOME);
      setActiveCategory('All');
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(''); 
    setCurrentPage(Page.PRODUCT_DETAILS);
    window.scrollTo(0, 0);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSearchQuery(''); 
    setCurrentPage(Page.HOME);
    window.scrollTo(0, 0);
  };
  
  const handleSearch = (query: string) => {
      setSearchQuery(query);
      if(query.length > 0) {
          setActiveCategory('All'); 
      }
      if(currentPage !== Page.HOME) {
          setCurrentPage(Page.HOME);
      }
  };

  const getFilteredProducts = () => {
    let filtered = PRODUCTS;

    // 1. Global Search Filter (Priority)
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }
    
    // 2. Category Filter
    if (activeCategory !== 'All') {
        filtered = filtered.filter(product => {
             // Strict category match
            if (product.category === activeCategory) return true;
            
            // Fallback: If it's a "Pill" category like "T-Shirts" or "Jeans", search in title/desc
            // This allows the pill buttons to act as quick filters even if not a strict category
            const catLower = activeCategory.toLowerCase();
            if (
                product.title.toLowerCase().includes(catLower) ||
                product.category.toLowerCase().includes(catLower) ||
                product.description.toLowerCase().includes(catLower)
            ) {
                return true;
            }

            return false;
        });
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const renderHome = () => (
    <>
      {/* Hero Banner */}
      {!searchQuery && (
        <div className="relative bg-gray-900 text-white h-[400px] md:h-[500px] overflow-hidden mb-10">
            <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Fashion Banner" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <span className="text-primary font-bold tracking-widest uppercase text-sm md:text-base mb-2 animate-pulse">New Arrivals</span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">SUMMER <br className="md:hidden"/> COLLECTION</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">Unleash your style with our latest curated selection of premium fashion essentials.</p>
            <button 
                onClick={() => handleCategoryClick('All')}
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105"
            >
                Shop Now
            </button>
            </div>
        </div>
      )}

      {/* Quick Filters (Pills) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-8">
         <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {['All', 'Men', 'Women', 'Kids', 'Footwear', 'Home & Living', 'Beauty', 'Accessories', 'Jeans', 'Dresses', 'T-Shirts'].map((cat) => (
                <button 
                    key={cat} 
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        activeCategory === cat 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'
                    }`}
                >
                    {cat}
                </button>
            ))}
         </div>
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {searchQuery 
                ? `Search Results for "${searchQuery}"`
                : (activeCategory === 'All' ? 'Trending Now' : `${activeCategory} Collection`)
            }
          </h2>
          <span className="text-sm text-gray-500">{filteredProducts.length} items</span>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onClick={handleProductClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <button 
              onClick={() => handleCategoryClick('All')} 
              className="mt-4 text-primary font-medium hover:underline"
            >
              View all products
            </button>
          </div>
        )}
      </main>
    </>
  );

  const renderProductDetails = () => {
    if (!selectedProduct) return null;
    
    const isOneSize = selectedProduct.sizes.length === 1 && selectedProduct.sizes[0] === "One Size";
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => setCurrentPage(Page.HOME)}
          className="flex items-center text-gray-500 hover:text-gray-900 mb-6 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Shopping
        </button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
             <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100">
               <img
                 src={selectedProduct.image}
                 alt={selectedProduct.title}
                 className="h-full w-full object-cover object-center"
               />
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                   <img src={selectedProduct.image} className="w-full h-full object-cover" alt="Thumbnail" />
                </div>
                 <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                   <img src={selectedProduct.image} className="w-full h-full object-cover scale-150" alt="Zoom" />
                </div>
             </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-2 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">{selectedProduct.brand}</h1>
            <p className="text-xl text-gray-500 mb-4">{selectedProduct.title}</p>
            
            <div className="flex items-end gap-4 mb-6">
                <p className="text-3xl font-bold text-gray-900">₹{selectedProduct.price}</p>
                <p className="text-lg text-gray-400 line-through pb-1">₹{selectedProduct.originalPrice}</p>
                <p className="text-lg text-orange-500 font-bold pb-1">({selectedProduct.discount}% OFF)</p>
            </div>

            <div className="flex items-center gap-1 mb-6 bg-green-50 w-fit px-3 py-1 rounded">
                <span className="font-bold text-green-700 flex items-center gap-1">
                    {selectedProduct.rating} <Star size={14} fill="currentColor" />
                </span>
                <span className="text-green-700 text-sm border-l border-green-200 pl-2 ml-1">
                    {selectedProduct.reviews} Ratings
                </span>
            </div>

            {/* Sizes */}
            {!isOneSize && (
                <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-6">
                    {selectedProduct.sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`
                        flex items-center justify-center rounded-full border py-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer hover:border-primary transition-colors
                        ${selectedSize === size ? 'border-primary bg-white text-primary ring-1 ring-primary' : 'border-gray-200 bg-white text-gray-900'}
                        `}
                    >
                        {size}
                    </button>
                    ))}
                </div>
                </div>
            )}
            
            {/* Actions */}
            <div className="flex gap-4 mb-10">
                <button
                  onClick={() => addToCart(selectedProduct, isOneSize ? "One Size" : selectedSize)}
                  disabled={!isOneSize && !selectedSize}
                  className={`flex-1 flex items-center justify-center rounded-md border border-transparent px-8 py-4 text-base font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${(!isOneSize && !selectedSize) ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary hover:bg-pink-600'}`}
                >
                  <ShoppingBag className="mr-2" size={20} />
                  ADD TO BAG
                </button>
                <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-4 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                    <span className="text-xs font-bold">WISHLIST</span>
                </button>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
                 <div className="flex items-start gap-3">
                    <Truck className="text-gray-400 mt-1" size={20} />
                    <div>
                        <p className="font-medium text-sm text-gray-900">Free Delivery</p>
                        <p className="text-sm text-gray-500">Enter your Pincode to check delivery time.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <ShieldCheck className="text-gray-400 mt-1" size={20} />
                    <div>
                        <p className="font-medium text-sm text-gray-900">100% Original Products</p>
                        <p className="text-sm text-gray-500">Pay on delivery might be available.</p>
                    </div>
                 </div>
            </div>

            {/* Analytics / AI Insight */}
            <TrendChart />

            <div className="mt-8">
                <h3 className="font-bold text-gray-900 mb-2">Product Details</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        cartCount={cart.length} 
        onNavigate={setCurrentPage} 
        onOpenCart={() => setIsCartOpen(true)}
        onCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
        onSearch={handleSearch}
        searchTerm={searchQuery}
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={removeFromCart} 
        onCheckout={() => {
            setCurrentPage(Page.CHECKOUT);
            setIsCartOpen(false);
            window.scrollTo(0,0);
        }}
      />

      <div className="flex-grow">
        {currentPage === Page.HOME && renderHome()}
        {currentPage === Page.PRODUCT_DETAILS && renderProductDetails()}
        {currentPage === Page.CHECKOUT && (
            <Checkout 
                cartItems={cart} 
                totalAmount={cart.reduce((acc, item) => acc + item.price, 0)} 
                onPlaceOrder={handlePlaceOrder}
            />
        )}
        {currentPage === Page.PROFILE && (
            <Profile 
                isLoggedIn={isLoggedIn} 
                userProfile={userProfile} 
                onLogin={handleLogin} 
                onLogout={handleLogout} 
            />
        )}
      </div>

      <AIStylist />

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <span className="text-2xl font-bold tracking-tighter text-white mb-4 block">
                    Mynther<span className="text-primary">.</span>
                </span>
                <p className="text-gray-400 text-sm">
                    The ultimate destination for fashion and lifestyle, being host to a wide array of merchandise.
                </p>
            </div>
            <div>
                <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Online Shopping</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Home & Living</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Customer Policies</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>T&C</li>
                    <li>Terms Of Use</li>
                    <li>Track Orders</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Experience App</h4>
                <div className="flex gap-2">
                    <div className="h-10 w-32 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400 border border-gray-700">
                        Google Play
                    </div>
                    <div className="h-10 w-32 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400 border border-gray-700">
                        App Store
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;