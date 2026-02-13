import { Product } from './types';

// Helper function to generate products
const generateProducts = (): Product[] => {
  const categories = [
    {
      name: 'Men',
      brands: ['Roadster', 'HRX', 'Nike', 'Puma', 'Levi\'s', 'Zara', 'H&M', 'Highlander', 'Raymond', 'Jack & Jones'],
      items: [
        { title: 'Slim Fit Cotton Shirt', basePrice: 899, image: 'https://images.unsplash.com/photo-1598033129133-e170f6f5f929?auto=format&fit=crop&w=800&q=80' },
        { title: 'Tapered Fit Jeans', basePrice: 2499, image: 'https://images.unsplash.com/photo-1542272454315-5c0fa491e920?auto=format&fit=crop&w=800&q=80' },
        { title: 'Oversized T-Shirt', basePrice: 699, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80' },
        { title: 'Bomber Jacket', basePrice: 3290, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80' },
        { title: 'Casual Chinos', basePrice: 1299, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80' },
        { title: 'Formal Blazer', basePrice: 4999, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80' },
        { title: 'Striped Polo', basePrice: 999, image: 'https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?auto=format&fit=crop&w=800&q=80' },
        { title: 'Denim Jacket', basePrice: 2999, image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80' },
        { title: 'Printed Kurta', basePrice: 1499, image: 'https://images.unsplash.com/photo-1631631480669-535cc43f2327?auto=format&fit=crop&w=800&q=80' },
        { title: 'Cargo Shorts', basePrice: 1199, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      name: 'Women',
      brands: ['Anouk', 'W', 'Biba', 'Mango', 'H&M', 'Forever 21', 'Zara', 'Levis', 'Only', 'Vero Moda'],
      items: [
        { title: 'Floral Maxi Dress', basePrice: 2299, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80' },
        { title: 'Silk Saree', basePrice: 4500, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80' },
        { title: 'Crop Top', basePrice: 799, image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80' },
        { title: 'High-Waist Jeans', basePrice: 2190, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80' },
        { title: 'Office Blazer', basePrice: 3999, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80' },
        { title: 'Boho Skirt', basePrice: 1499, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80' },
        { title: 'Cocktail Dress', basePrice: 3499, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80' },
        { title: 'Embroidered Kurta', basePrice: 1899, image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80' },
        { title: 'Denim Shorts', basePrice: 1299, image: 'https://images.unsplash.com/photo-1545959675-209e11479132?auto=format&fit=crop&w=800&q=80' },
        { title: 'Winter Coat', basePrice: 5999, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      name: 'Kids',
      brands: ['Mothercare', 'Gap Kids', 'Allen Solly', 'Pepe Jeans', 'H&M Kids', 'Gini & Jony', 'United Colors of Benetton'],
      items: [
        { title: 'Cotton T-Shirt', basePrice: 499, image: 'https://images.unsplash.com/photo-1519238263496-6361937a643f?auto=format&fit=crop&w=800&q=80' },
        { title: 'Denim Dungarees', basePrice: 1499, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80' },
        { title: 'Party Frock', basePrice: 1899, image: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?auto=format&fit=crop&w=800&q=80' },
        { title: 'Winter Hoodie', basePrice: 1100, image: 'https://images.unsplash.com/photo-1519278409-1f56fdda7e70?auto=format&fit=crop&w=800&q=80' },
        { title: 'Summer Shorts', basePrice: 699, image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80' },
        { title: 'Printed Pajamas', basePrice: 899, image: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&w=800&q=80' },
        { title: 'Floral Dress', basePrice: 1299, image: 'https://images.unsplash.com/photo-1503919545889-aef6d7a51462?auto=format&fit=crop&w=800&q=80' },
        { title: 'Casual Shirt', basePrice: 999, image: 'https://images.unsplash.com/photo-1622290319146-7b63df48a635?auto=format&fit=crop&w=800&q=80' },
        { title: 'Puffer Jacket', basePrice: 2499, image: 'https://images.unsplash.com/photo-1606411165552-9c95fb446a32?auto=format&fit=crop&w=800&q=80' },
        { title: 'School Bag', basePrice: 1599, image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      name: 'Home & Living',
      brands: ['Bombay Dyeing', 'Home Centre', 'Chumbak', 'IKEA', 'Spaces', 'Good Earth', 'FabIndia'],
      items: [
        { title: 'Cotton Bedsheet', basePrice: 1499, image: 'https://images.unsplash.com/photo-1522771753035-4850d32f5d18?auto=format&fit=crop&w=800&q=80' },
        { title: 'Ceramic Lamp', basePrice: 1899, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80' },
        { title: 'Wall Art Set', basePrice: 2100, image: 'https://images.unsplash.com/photo-1582201968431-9b17199038db?auto=format&fit=crop&w=800&q=80' },
        { title: 'Scented Candle', basePrice: 599, image: 'https://images.unsplash.com/photo-1602825539529-e8335c9a4347?auto=format&fit=crop&w=800&q=80' },
        { title: 'Indoor Planter', basePrice: 899, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80' },
        { title: 'Cushion Cover', basePrice: 399, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&w=800&q=80' },
        { title: 'Floor Rug', basePrice: 3499, image: 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=800&q=80' },
        { title: 'Bath Towel Set', basePrice: 1299, image: 'https://images.unsplash.com/photo-1583312946807-dfd2604coe9b?auto=format&fit=crop&w=800&q=80' },
        { title: 'Table Runner', basePrice: 799, image: 'https://images.unsplash.com/photo-1598414471981-0e236c3c0500?auto=format&fit=crop&w=800&q=80' },
        { title: 'Vase', basePrice: 999, image: 'https://images.unsplash.com/photo-1581783342308-f792ca438902?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      name: 'Beauty',
      brands: ['M.A.C', 'Lakme', 'Maybelline', 'L\'Oreal', 'Estee Lauder', 'Clinique', 'Forest Essentials'],
      items: [
        { title: 'Matte Lipstick', basePrice: 1900, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80' },
        { title: 'Face Serum', basePrice: 799, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80' },
        { title: 'Luxury Perfume', basePrice: 12500, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80' },
        { title: 'Eye Palette', basePrice: 3500, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80' },
        { title: 'Moisturizer', basePrice: 1200, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&w=800&q=80' },
        { title: 'Hair Oil', basePrice: 599, image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80' },
        { title: 'Nail Polish', basePrice: 299, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80' },
        { title: 'Sunscreen', basePrice: 650, image: 'https://images.unsplash.com/photo-1556228852-6d35a585d566?auto=format&fit=crop&w=800&q=80' },
        { title: 'Makeup Brush Set', basePrice: 1500, image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&w=800&q=80' },
        { title: 'Face Mask', basePrice: 150, image: 'https://images.unsplash.com/photo-1594616838951-c155d8d99328?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      name: 'Footwear',
      brands: ['Nike', 'Adidas', 'Puma', 'Reebok', 'Bata', 'Clarks', 'Red Tape', 'Crocs'],
      items: [
        { title: 'Running Shoes', basePrice: 3495, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
        { title: 'Canvas Sneakers', basePrice: 2999, image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80' },
        { title: 'Formal Loafers', basePrice: 3999, image: 'https://images.unsplash.com/photo-1614252369475-531ebe835ce9?auto=format&fit=crop&w=800&q=80' },
        { title: 'Block Heels', basePrice: 1599, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80' },
        { title: 'Sports Sandals', basePrice: 1299, image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80' },
        { title: 'Leather Boots', basePrice: 4500, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80' },
        { title: 'Flip Flops', basePrice: 499, image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80' },
        { title: 'Walking Shoes', basePrice: 2199, image: 'https://images.unsplash.com/photo-1560769629-975e13f0d471?auto=format&fit=crop&w=800&q=80' },
        { title: 'Stilettos', basePrice: 2999, image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80' },
        { title: 'Casual Slip-ons', basePrice: 1499, image: 'https://images.unsplash.com/photo-1616406432452-07bc593175d4?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      name: 'Accessories',
      brands: ['Fossil', 'Casio', 'Ray-Ban', 'Fastrack', 'Titan', 'Baggit', 'Lavie', 'Tommy Hilfiger'],
      items: [
        { title: 'Leather Bag', basePrice: 1890, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80' },
        { title: 'Aviator Sunglasses', basePrice: 6500, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80' },
        { title: 'Digital Watch', basePrice: 3995, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80' },
        { title: 'Leather Belt', basePrice: 1499, image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80' },
        { title: 'Backpack', basePrice: 2299, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80' },
        { title: 'Gold Earrings', basePrice: 5499, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80' },
        { title: 'Smart Watch', basePrice: 4999, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80' },
        { title: 'Wallet', basePrice: 999, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80' },
        { title: 'Cap', basePrice: 699, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80' },
        { title: 'Scarf', basePrice: 799, image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=800&q=80' }
      ]
    }
  ];

  const allProducts: Product[] = [];
  let idCounter = 1;

  // Generate 40 items for each category by iterating through the base items 4 times
  // and adding slight variations to make them distinct
  categories.forEach(cat => {
    for (let i = 0; i < 40; i++) {
      // Cycle through base items
      const baseItem = cat.items[i % cat.items.length];
      // Cycle through brands
      const brand = cat.brands[i % cat.brands.length];
      
      // Create variations
      const variationType = Math.floor(i / 10); // 0, 1, 2, 3
      let title = baseItem.title;
      let priceMultiplier = 1;
      
      if (variationType === 1) {
        title = `Premium ${title}`;
        priceMultiplier = 1.2;
      } else if (variationType === 2) {
        title = `Classic ${title}`;
        priceMultiplier = 0.9;
      } else if (variationType === 3) {
        title = `Urban ${title}`;
        priceMultiplier = 1.1;
      }

      const price = Math.floor(baseItem.basePrice * priceMultiplier);
      const discount = [10, 20, 30, 40, 50, 0][Math.floor(Math.random() * 6)];
      const originalPrice = Math.floor(price * (100 / (100 - (discount || 5))));

      allProducts.push({
        id: idCounter++,
        title: title,
        brand: brand,
        price: price,
        originalPrice: originalPrice,
        discount: discount,
        rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
        reviews: Math.floor(Math.random() * 500) + 50,
        image: baseItem.image,
        category: cat.name,
        description: `Experience the best of fashion with this ${title} from ${brand}. Crafted for comfort and style, perfect for any occasion.`,
        sizes: cat.name === 'Accessories' || cat.name === 'Beauty' || cat.name === 'Home & Living' ? ['One Size'] : ['S', 'M', 'L', 'XL', 'XXL']
      });
    }
  });

  return allProducts;
};

export const PRODUCTS: Product[] = generateProducts();