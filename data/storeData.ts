export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: string;
  image: string;
  features: string[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  categories: string[];
  features: string[];
  badge: string;
  productsSummary: string;
  logoBgColor?: string;
  accentColor?: string;
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
  brandSlug?: string;
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

export const BRANDS_DATA: Brand[] = [
  {
    id: "brand-crompton",
    name: "Crompton",
    slug: "crompton",
    tagline: "High-Performance Lights, Ceiling Fans & Wall Fans",
    description: "Over 85 years of brand trust delivering superior air delivery, revolutionary 5-Star ActivBLDC motor fans, customizable oscillating wall fans, and eye-friendly high-lumen LED battens.",
    categories: ["ActivBLDC Energy Saver Fans", "High-Air Delivery Wall Fans", "Ventilation & Exhaust Fans", "LED Battens & Downlights"],
    features: [
      "Smooth 90° Horizontal Oscillation & Tilt Adjustment",
      "ActivBLDC Motor - Up to 60% Electricity Savings",
      "Laser Ray High-Lumen Flicker-Free LED Battens",
      "Anti-Dust Aerodynamic Blade Technology"
    ],
    badge: "Authorized Dealership",
    productsSummary: "Energion BLDC Fans • Wall Fans • Aura High-Speed Fans • Laser Ray LED Battens",
    accentColor: "from-blue-600 to-cyan-700"
  },
  {
    id: "brand-havells",
    name: "Havells",
    slug: "havells",
    tagline: "Lights • Wires & Cables • Fans • MCB & MCB Boxes",
    description: "Leading electrical solutions provider known for industrial safety standards, high-durability FR-LSH copper wires, decorative ceiling fans, commercial & home LED lighting, and certified Euro-II MCBs & Distribution Boxes.",
    categories: ["FR-LSH Copper Wires", "Decorative & High-Speed Fans", "Recessed & Surface LED Lights", "MCB & Distribution Boxes"],
    features: [
      "100% Flame Retardant Low Smoke (FR-LSH) Wires",
      "Euro-II C-Curve 10kA High-Breaking MCB & DB Boxes",
      "Energy-Efficient High-CMM Ceiling & Exhaust Fans",
      "Surge Protected Architectural LED Panel Lights"
    ],
    badge: "Authorized Electrical Partner",
    productsSummary: "Wires (0.75 - 6.0 sq mm) • Stealth & Festiva Fans • Adore LED Panels • 6A-63A MCB • SPN/TPN DB Boxes",
    accentColor: "from-red-600 to-rose-700"
  },
  {
    id: "brand-rr-kabel",
    name: "RR Kābel",
    slug: "rr-kabel",
    tagline: "Superex Green HR+FR Heat Resistant & Flame Retardant Wires",
    description: "Pioneers in wire safety with Heat Guard Technology, Superex Green HR+FR insulation, European safety certifications, and free from over 245 harmful chemical substances for smart, sustainable homes.",
    categories: ["Superex Green HR+FR Wires", "Flame Retardant House Wires", "Multi-Strand Copper Cables", "Industrial Grade Wiring"],
    features: [
      "Heat Guard Technology with High Oxygen Index",
      "100% Electrolytic High-Purity Copper Conductors",
      "Free from 245+ Toxic Heavy Metal Substances",
      "Dual Layer Insulation for 100% Fire Safety"
    ],
    badge: "Authorized Cable Partner",
    productsSummary: "Superex Green 1.0, 1.5, 2.5, 4.0 sq mm • FireX FR Wires • Ratguard Cables",
    accentColor: "from-emerald-600 to-teal-700"
  },
  {
    id: "brand-finolex",
    name: "Finolex",
    slug: "finolex",
    tagline: "Pipes & Fittings • Flame Retardant (FR) Industrial Cables",
    description: "India's highest-trusted manufacturer of premium plumbing pipes, SWR drainage systems, and Flame Retardant (FR) PVC insulated multi-strand copper cables.",
    categories: ["CPVC Hot & Cold Water Pipes", "UPVC High-Pressure Plumbing", "SWR Soil & Drainage Pipes", "Flame Retardant (FR) Cables"],
    features: [
      "100% Lead-Free & NSF Certified Drinking Water Safe",
      "Flame Retardant (FR) High-Grade PVC Cable Insulation",
      "Withstands Hot Water Temperatures up to 93°C",
      "Precision Sockets for Zero-Leak Solvent Welding"
    ],
    badge: "Authorized Dealer",
    productsSummary: "CPVC & UPVC Pipes • SWR Drainage • FR Copper Cables (Red, Green, Blue, Yellow)",
    accentColor: "from-cyan-600 to-blue-700"
  },
  {
    id: "brand-vguard",
    name: "V-Guard",
    slug: "vguard",
    tagline: "Valco Instant Geysers • Storage Water Heaters • Stabilizers",
    description: "India's household leader in electric water heating, voltage protection, and home appliances. Engineered with high-strength stainless steel & titanium glasslined inner tanks, 6.5 bar high-pressure capability, and multi-tier thermal safety.",
    categories: ["Valco 3L Instant Water Heaters", "Storage Geysers (6L - 25L)", "Digital Voltage Stabilizers", "Immersion Water Heaters"],
    features: [
      "Valco 3L Instant Heating with 3000W Fast Element",
      "5-Year Replacement Warranty on Inner Stainless Tank",
      "High Pressure Resistance up to 6.5 Bar (High-Rise Ready)",
      "Multi-Function Safety Valve & Auto Thermal Cut-Off"
    ],
    badge: "Authorized Dealer",
    productsSummary: "Valco 3L Instant Geysers • Victo & Pebble Storage Geysers • Voltage Stabilizers",
    accentColor: "from-amber-500 to-yellow-600"
  },
  {
    id: "brand-kundan",
    name: "Kundan Cable",
    slug: "kundan",
    tagline: "K-Plus 1.1kV High Performance Industrial Copper Wires",
    description: "ISO 9001:2015 certified manufacturer of heavy-duty PVC insulated industrial cables, 1100V multi-strand pure copper conductors, and high thermal endurance wiring.",
    categories: ["K-Plus 1100V Industrial Wires", "Multi-Strand Copper Cables", "Commercial Wiring Solutions"],
    features: [
      "1100V Heavy-Duty Voltage Grade Rating",
      "Ultra 3-Layer Protection Matrix & High Thermal Stability",
      "100% Electrolytic Grade Bright Annealed Copper",
      "IS:694 Certified Quality"
    ],
    badge: "Authorized Partner",
    productsSummary: "K-Plus 1.0, 1.5, 2.5, 4.0 sq mm (90m Coils) • Industrial PVC Insulated Wires",
    accentColor: "from-blue-700 to-indigo-800"
  }
];

export const CATEGORIES_DATA: Category[] = [
  {
    id: "cat-2",
    name: "Electrical Goods",
    slug: "electrical-goods",
    description: "Havells & Crompton lights, fans, FR-LSH wires, modular switches, and certified MCB boxes.",
    itemCount: "250+ Items",
    image: "/images/store-havells-lighting-wires-rack.jpg",
    features: ["Havells FR-LSH Wires & MCBs", "Crompton BLDC & High-Speed Fans", "High-Lumen LED Battens & Panels"]
  },
  {
    id: "cat-3",
    name: "Pipes & Plumbing",
    slug: "pipes-plumbing",
    description: "Finolex CPVC, UPVC & SWR pipes, drainage systems, brass valves, and high-pressure plumbing connections.",
    itemCount: "180+ Items",
    image: "/images/finolex-pipes-range.jpg",
    features: ["Finolex Hot & Cold CPVC", "Finolex Lead-Free UPVC", "SWR Ring-Fit Drainage"]
  },
  {
    id: "cat-4",
    name: "Water Storage",
    slug: "water-storage",
    description: "Durable multi-layer overhead water tanks, underground sumps, and automatic level controllers.",
    itemCount: "40+ Sizes",
    image: "/images/store-pvc-bends-shelving.jpg",
    features: ["Anti-Bacterial Coating", "3 & 4 Layer Tanks", "UV Stabilized"]
  },
  {
    id: "cat-5",
    name: "Building Materials",
    slug: "building-materials",
    description: "Essential cement additives, waterproofing chemicals, adhesives, tile grout, and construction supplies.",
    itemCount: "90+ Items",
    image: "/images/store-interior.png",
    features: ["Waterproofing Compounds", "Premium Tile Adhesives", "Bonding Agents"]
  },
  {
    id: "cat-6",
    name: "Hardware Essentials",
    slug: "hardware-essentials",
    description: "Quality door hardware, stainless steel hinges, fasteners, power tool accessories, and locks.",
    itemCount: "300+ Items",
    image: "/images/store-electrical-switches-rack.jpg",
    features: ["SS 304 Grade Hardware", "Heavy Duty Locks", "Precision Fasteners"]
  },
  {
    id: "cat-1",
    name: "Bathroom & Sanitary Ware",
    slug: "bathroom-sanitary",
    description: "Faucets, showers, washbasins, CP fittings, and luxury bathroom accessories.",
    itemCount: "120+ Items",
    image: "/images/vguard-water-heater.jpg",
    features: ["Solid Brass & Chrome Finish", "Designer Tabletop Basins", "Modern European Closets"]
  }
];

export const PRODUCTS_DATA: Product[] = [
  // --- CROMPTON PRODUCTS ---
  {
    id: "prod-crompton-wall-fan",
    name: "Crompton High-Air Delivery Oscillating Wall Fan",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Customizable 3-speed wall mounted fan with 90° smooth horizontal oscillation, 10° vertical tilt adjustment, and dual pull cord control.",
    specs: ["90° Smooth Horizontal Oscillation", "10° Vertical Tilt Adjustment", "Customizable 3-Speed Pull Cord", "High-Torque Aerodynamic Blades"],
    image: "/images/crompton-wall-fan.jpg",
    isPopular: true,
    brand: "Crompton",
    brandSlug: "crompton"
  },
  {
    id: "prod-crompton-fan",
    name: "Crompton Aura Designer High-Speed Ceiling Fan",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "High-torque 100% copper motor with aerodynamically designed anti-dust ivory gold blades and superior air delivery.",
    specs: ["1200mm Sweep", "380 RPM Super Fast Air Throw", "Anti-Dust Ivory & Gold Finish", "2-Year On-Site Warranty"],
    image: "/images/crompton-ceiling-fan.jpg",
    isPopular: true,
    brand: "Crompton",
    brandSlug: "crompton"
  },
  {
    id: "prod-crompton-bldc",
    name: "Crompton Energion BLDC 5-Star Energy Saver Ceiling Fan",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "ActivBLDC motor consumes just 28W at top speed, offering up to 60% power savings with smart RF remote control.",
    specs: ["28W Low Power Consumption (5-Star)", "Point-Anywhere Smart RF Remote", "High Speed 350 RPM / 220 CMM", "5-Year Motor Warranty"],
    image: "/images/crompton-energion-bldc.jpg",
    isPopular: true,
    brand: "Crompton",
    brandSlug: "crompton"
  },
  {
    id: "prod-crompton-light",
    name: "Crompton Laser Ray Ultra High-Lumen LED Batten",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "High efficiency LED tube light batten with glare-free wide angle diffuser and robust aluminium back spine.",
    specs: ["20W / 24W / 36W High Output", "100+ Lumens per Watt", "Flicker-Free Eye Comfort", "Surge Protection up to 2.5kV"],
    image: "/images/crompton-led-batten.jpg",
    isPopular: true,
    brand: "Crompton",
    brandSlug: "crompton"
  },

  // --- HAVELLS PRODUCTS (CEILING FANS & ELECTRICALS) ---
  {
    id: "prod-havells-stealth-ceiling-fan",
    name: "Havells Stealth Air 1200mm High-Efficiency Ceiling Fan",
    category: "Havells Ceiling Fans",
    categorySlug: "havells-ceiling-fans",
    description: "Designed for maximum efficiency with whisper-quiet aerodynamic 3-blade profile, 40W low power input, 280 r/min high speed, and 245 m³/min air delivery.",
    specs: [
      "Sweep: 1200 mm (48 Inch)",
      "Power Input: 40 W Energy Saver",
      "Speed: 280 r/min High Velocity",
      "Air Delivery: 245 m³/min Ultra Flow",
      "Aerodynamic Whisper-Quiet Profile",
      "Havells Authorized Warranty"
    ],
    image: "/images/havells-ceiling-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-wire",
    name: "Havells Life Line Plus S3 FR-LSH Copper Wires Range",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "100% electrolytic flexible copper conductors with Flame Retardant Low Smoke & Halogen (FR-LSH) high-insulation casing in red, yellow, and green.",
    specs: ["Available: 0.75, 1.0, 1.5, 2.5, 4.0, 6.0 sq mm", "Flame Retardant Low Smoke (FR-LSH)", "90m Certified Coil Boxes", "ISI & CE Certified Quality"],
    image: "/images/havells-cable-range.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-pedestal-fan",
    name: "Havells High-Speed Oscillating Pedestal Stand Fan",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Heavy-duty pedestal stand fan with telescopic height adjustment, aerodynamic metallic grey blades, and smooth oscillation.",
    specs: ["400mm Sweep / 1350 RPM High Air Flow", "Telescopic Height Adjustable Pole", "Wide-Angle Horizontal Oscillation", "Thermal Overload Protected Motor"],
    image: "/images/havells-pedestal-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-light",
    name: "Havells LED Panel Lights & Commercial Battens Range",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Glare-free recessed and surface LED lighting panels with wide beam spread, high surge protection, and eye comfort glow.",
    specs: ["6W / 12W / 15W / 18W Available", "Cool White (6500K) / Warm White (3000K)", "High Surge Protection up to 4kV", "Up to 50,000 Burning Hours"],
    image: "/images/havells-led-panel-light.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-mcb",
    name: "Havells Euro-II Miniature Circuit Breaker (MCB)",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Industrial grade C-Curve single pole and double pole circuit breaker with 10kA short circuit breaking capacity.",
    specs: ["Single Pole & Double Pole", "Rating: 6A, 10A, 16A, 20A, 25A, 32A, 63A", "10kA Breaking Capacity", "Bi-Connect Terminals for Safe Wiring"],
    image: "/images/havells-mcb-distribution-box.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-db",
    name: "Havells Double Door SPN & TPN MCB Distribution Box",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Heavy gauge CRCA sheet steel enclosure with powder coated finish, insulated neutral & earth bars.",
    specs: ["4-Way, 8-Way, 12-Way SPN & TPN", "IP42 / IP43 Protected Double Door", "Detachable Gland Plates", "Cement Spill Protective Shield"],
    image: "/images/havells-mcb-distribution-box.jpg",
    isPopular: false,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-electrical-modular-switches",
    name: "Modular Switches, Sockets, Regulators & Fan Plates Stock",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Extensive showroom inventory of modular switches, fan speed regulators, 6A/16A combined sockets, indicator lights, and gang plates.",
    specs: ["Modular 1M to 18M Gang Boxes & Plates", "Flame Retardant Polycarbonate Body", "Smooth Silver-Inlay Contact Switches", "Crompton, Havells & Luker Compatible"],
    image: "/images/store-electrical-switches-rack.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },

  // --- RR KABEL PRODUCTS ---
  {
    id: "prod-rr-kabel-superex",
    name: "RR Kābel Superex Green HR+FR Heat Resistant House Wire",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Heat Guard Technology (HR+FR) copper wire designed for high thermal resistance, flame retardancy, and toxic-free domestic & commercial wiring.",
    specs: ["2.5 sq mm / 90m Standard Coil", "Heat Guard HR+FR Flame Retardant", "Free from 245+ Toxic Chemicals", "100% Electrolytic Pure Copper"],
    image: "/images/rr-kabel-superex.jpg",
    isPopular: true,
    brand: "RR Kābel",
    brandSlug: "rr-kabel"
  },

  // --- KUNDAN CABLE PRODUCTS ---
  {
    id: "prod-kundan-kplus",
    name: "Kundan Cable K-Plus 1.1kV Industrial Copper Wire",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "1100V grade PVC insulated industrial multi-strand flexible copper conductors with 3-layer protection matrix and high thermal endurance.",
    specs: ["1100V Voltage Grade", "2.5 sq mm (90m Coil)", "Ultra 3-Layer Heat Protection", "IS:694 Certified Quality"],
    image: "/images/kundan-cable-wires.jpg",
    isPopular: true,
    brand: "Kundan Cable",
    brandSlug: "kundan"
  },

  // --- FINOLEX CABLES & WIRES ---
  {
    id: "prod-finolex-fr-cables",
    name: "Finolex Flame Retardant (FR) Industrial Cables",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Multi-strand flexible copper conductors insulated with specially formulated Flame Retardant PVC compound to prevent fire spread.",
    specs: ["Available in Red, Green, Blue, Yellow", "High Oxygen & Temperature Index", "100% High-Conductivity Copper", "90m Standard Coils"],
    image: "/images/finolex-fr-cables.jpg",
    isPopular: true,
    brand: "Finolex Cables",
    brandSlug: "finolex"
  },

  // --- V-GUARD PRODUCTS ---
  {
    id: "prod-vguard-valco",
    name: "V-Guard Valco 3L Electric Instant Water Heater (Geyser)",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Instant water heater with 3000W heating element, 3L capacity, 6.5 bar pressure capability for high-rise buildings, and 5-year replacement warranty on inner tank.",
    specs: ["3 Litre Instant Capacity", "3000W Heavy-Duty Element", "6.5 Bar Pressure Resistance", "2-Yr Product + 5-Yr Inner Tank Warranty", "ISI Marked Safety Standard"],
    image: "/images/vguard-water-heater.jpg",
    isPopular: true,
    brand: "V-Guard",
    brandSlug: "vguard"
  },
  {
    id: "prod-vguard-victo",
    name: "V-Guard Victo 15L Storage Water Heater (Geyser)",
    category: "Electrical Goods",
    categorySlug: "electrical-goods",
    description: "5-Star BEE energy efficient storage water heater with extra-thick titanium enamelled glasslined tank and multi-layered safety.",
    specs: ["15 Litre Storage Capacity", "5-Star Energy Saver", "Titanium Enamelled Inner Tank", "Suitable for High-Rise Apartments", "8-Year Inner Tank Warranty"],
    image: "/images/vguard-water-heater.jpg",
    isPopular: false,
    brand: "V-Guard",
    brandSlug: "vguard"
  },

  // --- FINOLEX PIPES & PLUMBING RANGE ---
  {
    id: "prod-finolex-range",
    name: "Finolex Complete CPVC, UPVC & SWR Pipes & Fittings Range",
    category: "Pipes & Plumbing",
    categorySlug: "pipes-plumbing",
    description: "Full organized inventory of Finolex hot & cold CPVC pipes, heavy UPVC plumbing pipes, SWR soil and rainwater drainage pipes, and brass fittings.",
    specs: ["CPVC SDR 11 & 13.5 (1/2\" to 2\")", "UPVC Schedule 40 & 80", "SWR Ring-Fit 75mm to 160mm", "100% Lead-Free & Potable Safe"],
    image: "/images/finolex-pipes-range.jpg",
    isPopular: true,
    brand: "Finolex Pipes",
    brandSlug: "finolex"
  },
  {
    id: "prod-finolex-cpvc",
    name: "Finolex SDR-11 Heavy CPVC Hot & Cold Water Pipes",
    category: "Pipes & Plumbing",
    categorySlug: "pipes-plumbing",
    description: "SDR 11 & SDR 13.5 certified CPVC plumbing pipe system with high chemical resistance, heat tolerance up to 93°C, and 100% lead-free potable water safety.",
    specs: ["1/2\" to 2\" (15mm to 50mm) Diameters", "Up to 93°C Heat Resistance", "100% Lead-Free & Potable Safe", "SDR 11 Class 1 High Pressure"],
    image: "/images/finolex-pipes.jpg",
    isPopular: true,
    brand: "Finolex Pipes",
    brandSlug: "finolex"
  },
  {
    id: "prod-finolex-upvc",
    name: "Finolex High-Pressure UPVC Plumbing Pipes & Fittings",
    category: "Pipes & Plumbing",
    categorySlug: "pipes-plumbing",
    description: "Heavy duty Schedule 40 & Schedule 80 lead-free UPVC pipes for reliable cold water distribution, bathroom mains, and high-rise plumbing.",
    specs: ["Schedule 40 & 80 Certified", "Smooth Internal Bore - Zero Scaling", "UV Protected Outer Layer", "Standard 3m & 6m Lengths"],
    image: "/images/store-pvc-bends-shelving.jpg",
    isPopular: true,
    brand: "Finolex Pipes",
    brandSlug: "finolex"
  },
  {
    id: "prod-finolex-swr",
    name: "Finolex SWR Ring-Fit Drainage & Soil Waste Pipes",
    category: "Pipes & Plumbing",
    categorySlug: "pipes-plumbing",
    description: "High impact resistance PVC SWR pipes for building drainage, rain water harvesting, and waste disposal with leak-proof rubber ring joints.",
    specs: ["75mm, 110mm, 160mm Sizes", "Ring-Fit & Selfit Jointing", "100% Bacteria & Rodent Proof", "IS:13592 Standard Certified"],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: true,
    brand: "Finolex Pipes",
    brandSlug: "finolex"
  },
  {
    id: "prod-6",
    name: "4-Layer Anti-Bacterial Overhead Water Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    description: "Heavy-duty UV stabilized food-grade virgin plastic water storage tank with thermal insulation.",
    specs: ["500L / 1000L / 2000L Capacities", "Anti-Algae Shield", "Threaded Leak-Proof Lid"],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: true,
    brand: "AquaGuard Series"
  },

  // --- BATHROOM & SANITARY WARE ---
  {
    id: "prod-1",
    name: "Designer Ceramic Tabletop Wash Basin",
    category: "Bathroom & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "High-grade vitreous china countertop wash basin with nanotech stain-resistant glaze and modern rounded contours.",
    specs: ["Nanotech Stain-Resistant Glaze", "Vitreous China Gloss Finish", "Countertop Deck Mounting", "Anti-Scratch Surface"],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: true
  },
  {
    id: "prod-2",
    name: "Stainless Steel Overhead Rain Shower",
    category: "Bathroom & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Stainless steel ultra-slim square overhead rain shower with silicon self-cleaning nozzles and high pressure air-injection.",
    specs: ["SS 304 Mirror Polish", "High Pressure Jet Flow", "Includes Heavy Swivel Arm", "Silicon Anti-Clog Nozzles"],
    image: "/images/store-interior.png",
    isPopular: true
  },
  {
    id: "prod-health-faucet",
    name: "Solid Brass Chrome Health Faucet Set",
    category: "Bathroom & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Heavy-duty brass health faucet trigger spray with anti-tangle 1.2m stainless steel flexible hose and wall bracket.",
    specs: ["Heavy Brass Core", "High Pressure Jet", "1.2m Flexible Hose Included", "Chrome Mirror Finish"],
    image: "/images/store-pvc-bends-shelving.jpg",
    isPopular: false
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
      "Authorized partner for Havells, Crompton, V-Guard, Finolex & RR Kābel",
      "100% genuine ISI & CE certified electricals, geysers & plumbing",
      "Full manufacturer warranty and on-site support",
      "Suitable for residential and commercial projects",
      "Practical product & sizing guidance"
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
    id: "gal-store-interior",
    title: "Sri Krishna Traders Main Showroom & Store Aisles",
    category: "Store Showroom",
    badge: "Open 7 Days",
    description: "Organized inventory aisles stocked with branded plumbing fixtures, electrical essentials, and premium hardware.",
    image: "/images/store-interior.png"
  },
  {
    id: "gal-crompton-fan",
    title: "Crompton Aura Ivory Gold High-Speed Ceiling Fan",
    category: "Electrical Goods",
    badge: "380 RPM Super Fast",
    description: "Anti-dust designer ceiling fan with 100% copper motor, 1200mm sweep, and gold accent trims.",
    image: "/images/crompton-ceiling-fan.jpg"
  },
  {
    id: "gal-crompton-bldc",
    title: "Crompton Energion 5-Star BLDC Energy Saver Ceiling Fan",
    category: "Electrical Goods",
    badge: "28W ActivBLDC Motor",
    description: "Modern matte finish 3-blade aerodynamic BLDC fan with smart handheld RF remote controller.",
    image: "/images/crompton-energion-bldc.jpg"
  },
  {
    id: "gal-havells-ceiling-fan",
    title: "Havells Stealth Air 1200mm High-Efficiency Ceiling Fan",
    category: "Electrical Goods",
    badge: "40W Low Power • 245 m³/min",
    description: "Whisper quiet aerodynamic 3-blade designer ceiling fan with 280 r/min high speed and 1200mm sweep.",
    image: "/images/havells-ceiling-fan.jpg"
  },
  {
    id: "gal-havells-pedestal",
    title: "Havells High-Speed Oscillating Pedestal Stand Fan",
    category: "Electrical Goods",
    badge: "Telescopic Height Adjust",
    description: "Heavy-duty stand fan with metallic blades, thermal overload protection, and wide oscillation.",
    image: "/images/havells-pedestal-fan.jpg"
  },
  {
    id: "gal-crompton-wall",
    title: "Crompton High-Air Delivery Oscillating Wall Fan",
    category: "Electrical Goods",
    badge: "90° Smooth Sweep",
    description: "Customizable 3-speed wall fan with dual pull cord control and 10° vertical tilt adjustment.",
    image: "/images/crompton-wall-fan.jpg"
  },
  {
    id: "gal-crompton-batten",
    title: "Crompton Laser Ray High-Lumen LED Batten Light",
    category: "Electrical Goods",
    badge: "Eye Comfort Flicker-Free",
    description: "High-efficiency aluminium spine LED batten with wide angle glare-free diffuser.",
    image: "/images/crompton-led-batten.jpg"
  },
  {
    id: "gal-havells-led",
    title: "Havells Adore Ultra-Slim Recessed LED Panel Light",
    category: "Electrical Goods",
    badge: "4kV Surge Protected",
    description: "Architectural diffuse ceiling LED panel light with uniform glare-free glow.",
    image: "/images/havells-led-panel-light.jpg"
  },
  {
    id: "gal-havells-cables",
    title: "Havells Life Line Plus S3 FR-LSH Copper Wires Range",
    category: "Wires & Cables",
    badge: "FR-LSH Fire Safe",
    description: "100% pure copper conductors in 90m certified coil packaging (Red, Yellow, Green) for safer homes.",
    image: "/images/havells-cable-range.jpg"
  },
  {
    id: "gal-rr-kabel",
    title: "RR Kābel Superex Green HR+FR Heat Resistant Wires",
    category: "Wires & Cables",
    badge: "Heat Guard Technology",
    description: "European certified flame retardant and toxic-free house wiring with high oxygen index.",
    image: "/images/rr-kabel-superex.jpg"
  },
  {
    id: "gal-finolex-cables",
    title: "Finolex Flame Retardant (FR) Industrial Cables",
    category: "Wires & Cables",
    badge: "High Conductivity",
    description: "Multi-strand flexible copper conductors with specially formulated fire retardant PVC insulation.",
    image: "/images/finolex-fr-cables.jpg"
  },
  {
    id: "gal-kundan-cables",
    title: "Kundan Cable K-Plus 1.1kV Industrial Copper Wire",
    category: "Wires & Cables",
    badge: "1100V Heavy Duty",
    description: "Ultra 3-layer protection matrix flexible copper cables for industrial and commercial projects.",
    image: "/images/kundan-cable-wires.jpg"
  },
  {
    id: "gal-finolex-pipes-range",
    title: "Finolex Complete CPVC, UPVC & SWR Pipes Collection",
    category: "Pipes & Fittings",
    badge: "100% Lead-Free",
    description: "Full range of hot & cold CPVC, high-pressure UPVC, and SWR drainage systems in stock.",
    image: "/images/finolex-pipes-range.jpg"
  },
  {
    id: "gal-finolex-pipes-stack",
    title: "Finolex CPVC & UPVC Heavy Plumbing Pipe Inventory",
    category: "Pipes & Fittings",
    badge: "SDR 11 & SCH 40/80",
    description: "Stocked plumbing pipes for residential plumbing, borewell connections, and drainage infrastructure.",
    image: "/images/finolex-pipes.jpg"
  },
  {
    id: "gal-vguard-geyser",
    title: "V-Guard Valco 3L Instant Electric Water Heater (Geyser)",
    category: "Electrical Goods",
    badge: "3000W Fast Heating",
    description: "Stainless steel inner tank with 6.5 bar pressure resistance suitable for multi-story buildings.",
    image: "/images/vguard-water-heater.jpg"
  },
  {
    id: "gal-havells-rack",
    title: "Havells Lighting, BLDC Fans & Wire Coils Showroom Aisle",
    category: "Store Showroom",
    badge: "Authorized Stock",
    description: "Complete live inventory of Havells LED panel lights, BLDC energy-saving fans, Finolex & RR Kabel fire-retardant coils, and safety switchgears.",
    image: "/images/store-havells-lighting-wires-rack.jpg"
  },
  {
    id: "gal-pvc-bends",
    title: "Finolex PVC & CPVC Pipe Bends & Heavy Fittings Shelving",
    category: "Pipes & Fittings",
    badge: "Ready Inventory",
    description: "Stacked inventory of heavy PVC elbows, 45-degree bends, couplers, tees, reducers, and high-pressure plumbing connections.",
    image: "/images/store-pvc-bends-shelving.jpg"
  },
  {
    id: "gal-switches-rack",
    title: "Modular Switches, Gang Boxes, Regulators & Fan Plates",
    category: "Electrical Goods",
    badge: "Full Range Available",
    description: "Extensive rack of modular switch plates, wire spools, ceiling fan boxes, and power tools accessories.",
    image: "/images/store-electrical-switches-rack.jpg"
  },
  {
    id: "gal-plumbing-fittings",
    title: "SWR Soil Waste & Drainage Fittings Stock Room",
    category: "Pipes & Fittings",
    badge: "ISI Certified",
    description: "Organized plumbing room with hanging SWR pipe lengths, multi-diameter couplers, cleaning bends, and Luker lighting stock.",
    image: "/images/store-plumbing-fittings-rack.jpg"
  }
];

export const STORE_INFO = {
  name: "Sri Krishna Traders",
  tagline: "Quality Products • Trusted Service • On-Site Delivery",
  label: "QUALITY • TRUST • VALUE",
  logo: "/images/logo.png",
  heroHeading: "Quality Products for Every Home",
  heroSubtitle: "Premium bathroom fittings, electrical products, pipes, water storage solutions and essential building materials — all in one trusted place.",
  phone: "+91 74187 18077",
  phoneFormatted: "+91 74187 18077",
  whatsapp: "+91 74187 18077",
  email: "srikrishnatraders@gmail.com",
  address: "Aayyampalayam 1-460, Tiruchengode - Namakkal - Trichy Road (Near Collector Office), Thummankurichi, Namakkal, Tamil Nadu 637003",
  coordinates: {
    lat: 11.245278,
    lng: 78.132833,
    dms: "11°14'43.0\"N 78°07'58.2\"E"
  },
  mapUrl: "https://maps.google.com/?q=11.245278,78.132833",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=11.245278,78.132833",
  timings: {
    weekdays: "8:00 AM - 9:00 PM",
    sunday: "8:00 AM - 6:30 PM",
    highlight: "Open 7 Days a Week"
  }
};
