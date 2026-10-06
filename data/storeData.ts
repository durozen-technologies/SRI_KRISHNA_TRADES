export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: string;
  image: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  specs?: string[];
  image: string;
  isPopular?: boolean;
  brand?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Truck' | 'Zap' | 'Headphones' | 'Award' | 'Clock';
  detailedDescription: string;
  points: string[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Truck' | 'ShoppingBag' | 'Compass' | 'CheckCircle';
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  badge?: string;
}

export const CATEGORIES_DATA: Category[] = [
  {
    id: "cat-1",
    name: "Bathroom & Sanitary Ware",
    slug: "bathroom-sanitary",
    description: "Faucets, showers, washbasins, CP fittings, and luxury bathroom accessories.",
    itemCount: "120+ Items",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    features: ["Authorized Santé Dealer", "Brass & Chrome Finish", "Modern Water Closets"]
  },
  {
    id: "cat-2",
    name: "Electrical Goods",
    slug: "electrical-goods",
    description: "Electrical components, modular switches, ISI certified wiring, LEDs, and high-performance fans.",
    itemCount: "250+ Items",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    features: ["Fire-Resistant Cables", "Energy Efficient Fans", "Modular Switch Plates"]
  },
  {
    id: "cat-3",
    name: "Pipes & Plumbing",
    slug: "pipes-plumbing",
    description: "PVC, CPVC, UPVC pipes, drainage systems, brass valves, and high-pressure plumbing connections.",
    itemCount: "180+ Items",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
    features: ["Hot & Cold CPVC", "UV-Resistant PVC", "Leak-Proof Fittings"]
  },
  {
    id: "cat-4",
    name: "Water Storage",
    slug: "water-storage",
    description: "Durable multi-layer overhead water tanks, underground sumps, and automatic level controllers.",
    itemCount: "40+ Sizes",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    features: ["Anti-Bacterial Coating", "3 & 4 Layer Tanks", "UV Stabilized"]
  },
  {
    id: "cat-5",
    name: "Building Materials",
    slug: "building-materials",
    description: "Essential cement additives, waterproofing chemicals, adhesives, tile grout, and construction supplies.",
    itemCount: "90+ Items",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    features: ["Waterproofing Compounds", "Premium Tile Adhesives", "Bonding Agents"]
  },
  {
    id: "cat-6",
    name: "Hardware Essentials",
    slug: "hardware-essentials",
    description: "Quality door hardware, stainless steel hinges, fasteners, power tool accessories, and locks.",
    itemCount: "300+ Items",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
    features: ["SS 304 Grade Hardware", "Heavy Duty Locks", "Precision Fasteners"]
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: "prod-1",
    name: "Santé Luxury Basin Mixer Faucet",
    category: "Bathroom & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Single lever brass basin mixer with ceramic cartridge and mirror chrome finish.",
    specs: ["Solid Brass Body", "Anti-Clog Aerator", "10-Year Warranty Support"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    brand: "Santé Bath Fittings"
  },
  {
    id: "prod-2",
    name: "Multi-Flow Overhead Rain Shower",
    category: "Bathroom & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Stainless steel ultra-slim square overhead shower with silicon self-cleaning nozzles.",
    specs: ["SS 304 Mirror Polish", "High Pressure Flow", "Includes Heavy Swivel Arm"],
    image: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    brand: "Santé Bath Fittings"
  },
  {
    id: "prod-3",
    name: "Designer Ceramic Table Top Wash Basin",
    category: "Bathroom & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Glazed vitreous ceramic countertop basin with stain-resistant nanotech coating.",
    specs: ["Glossy White Finish", "Scratch Resistant", "Standard Drain Cutout"],
    image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    brand: "Premium Sanitary"
  },
  {
    id: "prod-4",
    name: "Heavy-Duty CPVC Hot & Cold Water Pipes",
    category: "Pipes & Plumbing",
    categorySlug: "pipes-plumbing",
    description: "SDR 11 & SDR 13.5 certified CPVC plumbing pipe system for high pressure and hot water lines.",
    specs: ["Up to 93°C Heat Resistance", "Non-Corrosive", "Lead Free & Safe for Drinking Water"],
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    brand: "Plumbing Grade"
  },
  {
    id: "prod-5",
    name: "Rigid PVC Drainage & Conduit Pipes",
    category: "Pipes & Plumbing",
    categorySlug: "pipes-plumbing",
    description: "High impact resistance PVC pipes for rain drainage, soil waste, and electrical conduit lines.",
    specs: ["Smooth Internal Bore", "UV Protected Outer Layer", "Standard 3m & 6m Lengths"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    brand: "Heavy Duty PVC"
  },
  {
    id: "prod-6",
    name: "4-Layer Anti-Bacterial Overhead Water Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    description: "Heavy-duty UV stabilized food-grade virgin plastic water storage tank with thermal insulation.",
    specs: ["500L / 1000L / 2000L Capacities", "Anti-Algae Shield", "Threaded Leak-Proof Lid"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    brand: "AquaGuard Series"
  },
  {
    id: "prod-7",
    name: "FR-LSH Flame Retardant Copper Wiring",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "100% electrolytic grade multi-strand flexible copper conductors with fire-retardant insulation.",
    specs: ["ISI Marked Quality", "0.75 sq mm to 6.0 sq mm", "90m Standard Coils"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    brand: "Industrial Grade"
  },
  {
    id: "prod-8",
    name: "High-Air Delivery Decorative Ceiling Fan",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Aerodynamic wide aluminium blades with high-torque copper motor and silent operation.",
    specs: ["1200mm Sweep", "Energy Saving Motor", "Rust-Proof Powder Coating"],
    image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    brand: "CoolBreeze"
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: "ben-1",
    title: "Quality Products",
    description: "Carefully selected products from trusted brands and certified manufacturers.",
    iconName: "ShieldCheck",
    detailedDescription: "Carefully selected construction and home-improvement products from trusted brands and certified manufacturers.",
    points: [
      "Reliable and quality-tested products",
      "Trusted brands and manufacturers",
      "Suitable for residential and commercial projects",
      "Practical product guidance",
      "Quality-focused sourcing"
    ]
  },
  {
    id: "ben-2",
    title: "On-Site Delivery",
    description: "Convenient delivery directly to your construction site, workshop, or home.",
    iconName: "Truck",
    detailedDescription: "Convenient delivery directly to your construction site, workshop, or home.",
    points: [
      "Direct delivery to your location",
      "Convenient scheduling",
      "Suitable for project and bulk requirements",
      "Safe and reliable handling",
      "Saves time and effort"
    ]
  },
  {
    id: "ben-3",
    title: "Quick Purchase",
    description: "Easy product identification, instant stock check, and fast order fulfillment.",
    iconName: "Zap",
    detailedDescription: "Easy product identification, instant stock checking, and fast order fulfillment.",
    points: [
      "Quick product identification",
      "Fast stock availability checking",
      "Simple ordering process",
      "Faster order fulfillment",
      "Support for urgent project requirements"
    ]
  },
  {
    id: "ben-4",
    title: "Trusted Service",
    description: "Helpful, practical guidance and dedicated support for all your project requirements.",
    iconName: "Headphones",
    detailedDescription: "Helpful, practical guidance and dedicated support for all your project requirements.",
    points: [
      "Friendly customer support",
      "Product selection guidance",
      "Project requirement assistance",
      "Transparent communication",
      "Support before and after purchase"
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "serv-1",
    title: "ON-SITE DELIVERY",
    subtitle: "Direct to your site",
    description: "Need materials at your project location? We coordinate direct, scheduled delivery for construction sites, contractor projects, and home upgrades.",
    iconName: "Truck",
    badge: "Fast & Reliable"
  },
  {
    id: "serv-2",
    title: "QUICK PURCHASE",
    subtitle: "Organized inventory",
    description: "Our organized product selection and knowledgeable staff help customers quickly identify and purchase exactly what they need without delay.",
    iconName: "ShoppingBag",
    badge: "Zero Hassle"
  },
  {
    id: "serv-3",
    title: "PROJECT SUPPORT",
    subtitle: "Practical guidance",
    description: "Get practical product guidance, material estimation, and plumbing/electrical compatibility advice for your home improvement or building project.",
    iconName: "Compass",
    badge: "Expert Advice"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sri Krishna Traders Main Showroom & Store Aisles",
    category: "Store Showroom",
    badge: "Open 7 Days",
    description: "Organized inventory aisles stocked with branded plumbing fixtures, electrical essentials, and premium hardware.",
    image: "/images/store-interior.png"
  },
  {
    id: "gal-2",
    title: "Santé Luxury Bath Fittings & Chrome Showroom",
    category: "Bathroom Fittings",
    badge: "Authorized Santé Dealer",
    description: "Single lever brass mixers, rain showers, designer health faucets, and luxury bath collections on live display.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: "gal-3",
    title: "Heavy-Duty CPVC & High-Pressure Plumbing Lines",
    category: "Pipes & Fittings",
    badge: "ISI Certified",
    description: "Hot & cold SDR-11 CPVC pipes, brass transition fittings, leak-proof ball valves, and industrial drainage systems.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: "gal-4",
    title: "FR-LSH Industrial Copper Wiring & Modular Switch Gear",
    category: "Electrical Goods",
    badge: "Fire Retardant",
    description: "100% electrolytic multi-strand copper cables, circuit breakers, modular switches, and high-performance LED lighting.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: "gal-5",
    title: "Multi-Layer Anti-Bacterial Overhead Water Tanks",
    category: "Water Storage",
    badge: "Ready Dispatch Yard",
    description: "UV-stabilized 4-layer virgin plastic overhead water tanks, underground sumps, and automatic float level controllers.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: "gal-6",
    title: "Designer Ceramic Tabletop Basins & Water Closets",
    category: "Sanitary Ware",
    badge: "Premium Vitreous Glaze",
    description: "Nanotech stain-resistant countertop wash basins, rimless wall-hung closets, and contemporary sanitary suites.",
    image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: "gal-7",
    title: "Stainless Steel Fasteners & Heavy Door Hardware",
    category: "Hardware Essentials",
    badge: "SS 304 Grade",
    description: "High-tensile fasteners, concealed mortise door locks, stainless steel hinges, and professional jobsite tools.",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1920&q=85"
  }
];

export const STORE_INFO = {
  name: "Sri Krishna Traders",
  tagline: "Quality Products • Trusted Service • On-Site Delivery",
  label: "QUALITY • TRUST • VALUE",
  heroHeading: "Quality Products for Every Home",
  heroSubtitle: "Premium bathroom fittings, electrical products, pipes, water storage solutions and essential building materials — all in one trusted place.",
  phone: "+91 98765 43210",
  phoneFormatted: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "contact@srikrishnatraders.example",
  address: "Main Commercial Road, Hardware Market, Sri Krishna Traders Showroom",
  timings: {
    weekdays: "8:00 AM - 9:00 PM",
    sunday: "8:00 AM - 6:30 PM",
    highlight: "Open 7 Days a Week"
  }
};
