
import { Product, Category, FilterGroup } from "@/types";

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Smart LED TV 43\" Ultra HD",
    description: "Experience crystal clear visuals with this Smart LED TV featuring Ultra HD resolution and smart capabilities.",
    price: 32999,
    discountPrice: 28999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    category: "Electronics",
    rating: 4.5,
    seller: {
      name: "Electronics Hub",
      id: "s1",
      rating: 4.2
    },
    tags: ["tv", "electronics", "smart tv", "ultra hd"],
    inStock: true
  },
  {
    id: "p2",
    name: "Premium Cotton Bedsheet Set",
    description: "Experience luxury with this premium cotton bedsheet set featuring 2 pillow covers and 1 bedsheet with elegant designs.",
    price: 2499,
    discountPrice: 1999,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    category: "Home",
    rating: 4.3,
    seller: {
      name: "Home Essentials",
      id: "s2",
      rating: 4.5
    },
    tags: ["bedsheet", "cotton", "home decor", "bedding"],
    inStock: true
  },
  {
    id: "p3",
    name: "Wireless Bluetooth Earbuds",
    description: "Enjoy high-quality sound with these wireless Bluetooth earbuds featuring noise cancellation and long battery life.",
    price: 3999,
    discountPrice: 2999,
    image: "https://images.unsplash.com/photo-1655219282830-cf36d5a3af82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Electronics",
    rating: 4.7,
    seller: {
      name: "Tech Accessories",
      id: "s3",
      rating: 4.6
    },
    tags: ["earbuds", "wireless", "bluetooth", "audio"],
    inStock: true
  },
  {
    id: "p4",
    name: "Organic Fresh Vegetables Combo",
    description: "A healthy combination of fresh, organic vegetables delivered directly from farm to your doorstep.",
    price: 599,
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Groceries",
    rating: 4.2,
    seller: {
      name: "Farm Fresh",
      id: "s4",
      rating: 4.8
    },
    tags: ["vegetables", "organic", "fresh", "groceries"],
    inStock: true
  },
  {
    id: "p5",
    name: "Men's Classic Fit Formal Shirt",
    description: "A classic fit formal shirt for men made with premium cotton fabric, perfect for office wear.",
    price: 1499,
    discountPrice: 1199,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    category: "Fashion",
    rating: 4.1,
    seller: {
      name: "Fashion World",
      id: "s5",
      rating: 4.0
    },
    tags: ["shirt", "formal", "men's fashion", "cotton"],
    inStock: false
  },
  {
    id: "p6",
    name: "Ceramic Coffee Mug Set",
    description: "Set of 6 ceramic coffee mugs in assorted colors, perfect for your morning coffee or tea.",
    price: 899,
    discountPrice: 599,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Home",
    rating: 4.6,
    seller: {
      name: "Kitchen Essentials",
      id: "s6",
      rating: 4.3
    },
    tags: ["mug", "ceramic", "coffee", "kitchen"],
    inStock: true
  },
  {
    id: "p7",
    name: "Fitness Tracker Smart Watch",
    description: "Track your fitness goals with this smart watch featuring heart rate monitor, step counter, and more.",
    price: 4999,
    discountPrice: 3499,
    image: "https://images.unsplash.com/photo-1557438159-45bbcc7eee6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Electronics",
    rating: 4.4,
    seller: {
      name: "Gadget World",
      id: "s7",
      rating: 4.1
    },
    tags: ["smartwatch", "fitness", "tracker", "wearable"],
    inStock: true
  },
  {
    id: "p8",
    name: "Children's Educational Building Blocks",
    description: "Colorful building blocks to enhance creativity and cognitive skills in children aged 3-8 years.",
    price: 1299,
    discountPrice: 999,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Toys",
    rating: 4.8,
    seller: {
      name: "Kids Paradise",
      id: "s8",
      rating: 4.7
    },
    tags: ["toys", "blocks", "educational", "children"],
    inStock: true
  }
];

export const popularCategories: Category[] = [
  { id: "c1", name: "Electronics", icon: "📱", count: 152 },
  { id: "c2", name: "Fashion", icon: "👕", count: 327 },
  { id: "c3", name: "Groceries", icon: "🥗", count: 186 },
  { id: "c4", name: "Home", icon: "🏠", count: 243 },
  { id: "c5", name: "Beauty", icon: "💄", count: 197 },
  { id: "c6", name: "Toys", icon: "🧸", count: 86 },
  { id: "c7", name: "Books", icon: "📚", count: 113 },
  { id: "c8", name: "Sports", icon: "⚽", count: 94 }
];

export const filterGroups: FilterGroup[] = [
  {
    name: "Price Range",
    options: [
      { id: "p1", name: "Under ₹500", count: 124 },
      { id: "p2", name: "₹500 - ₹1000", count: 287 },
      { id: "p3", name: "₹1000 - ₹5000", count: 431 },
      { id: "p4", name: "₹5000 - ₹10000", count: 156 },
      { id: "p5", name: "Above ₹10000", count: 92 }
    ]
  },
  {
    name: "Rating",
    options: [
      { id: "r1", name: "4★ & above", count: 332 },
      { id: "r2", name: "3★ & above", count: 641 },
      { id: "r3", name: "2★ & above", count: 842 }
    ]
  },
  {
    name: "Seller",
    options: [
      { id: "s1", name: "Electronics Hub", count: 87 },
      { id: "s2", name: "Home Essentials", count: 124 },
      { id: "s3", name: "Tech Accessories", count: 56 },
      { id: "s4", name: "Farm Fresh", count: 94 },
      { id: "s5", name: "Fashion World", count: 215 }
    ]
  },
  {
    name: "Availability",
    options: [
      { id: "a1", name: "In Stock", count: 876 },
      { id: "a2", name: "Out of Stock", count: 56 }
    ]
  }
];

export const trendingSearches = [
  "smartphones under 15000",
  "organic vegetables",
  "wireless earbuds",
  "cotton bedsheets",
  "smart watches",
  "running shoes",
  "educational toys"
];
