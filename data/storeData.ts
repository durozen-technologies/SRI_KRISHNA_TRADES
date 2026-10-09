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
    id: "brand-havells",
    name: "Havells",
    slug: "havells",
    tagline: "Solar Gate Lights • Stealth Fans • FR-LSH Wires • Fabio Switches • MCB",
    description: "India's premier electrical brand offering solar-powered outdoor gate lights, whisper-quiet Stealth & Festiva ceiling fans, flame-retardant low-smoke (FR-LSH) house wires, Fabio modular switches, and Euro-II MCBs.",
    categories: ["Solar Gate Lights", "Stealth & Festiva BLDC Fans", "FR-LSH Copper Wires", "Fabio Modular Switches", "MCB & Distribution Boxes", "LED Panels"],
    features: [
      "Automatic Dusk-to-Dawn Solar Gate Lights",
      "100% Flame Retardant Low Smoke (FR-LSH) Wires",
      "Stealth BLDC Whisper-Quiet Ceiling Fans",
      "Fabio & Coral Spark-Free Modular Switches"
    ],
    badge: "Authorized Electrical Partner",
    productsSummary: "Solar Gate Lights • Stealth & BLDC Fans • FR-LSH Wires (0.75 - 6.0 sq mm) • Fabio Switches • Euro-II MCB & DB Boxes",
    accentColor: "from-red-600 to-rose-700"
  },
  {
    id: "brand-crompton",
    name: "Crompton",
    slug: "crompton",
    tagline: "Energion BLDC Fans • Aura High-Speed • Laser Ray LED • Exhaust Fans",
    description: "Over 85 years of brand trust delivering superior air delivery, revolutionary 5-Star ActivBLDC motor fans, high-velocity oscillating wall & table fans, kitchen exhaust fans, and Laser Ray LED battens & strip drivers.",
    categories: ["Energion BLDC Fans", "Aura High-Speed Fans", "Table, Wall & Pedestal Fans", "Kitchen Exhaust Fans", "Laser Ray LED Battens & Strip Lights"],
    features: [
      "ActivBLDC Motor - Up to 60% Electricity Savings",
      "High Air Delivery Wall, Table & Pedestal Fans",
      "Heavy-Duty Metal & ABS Ventilation Exhaust Fans",
      "Laser Ray High-Lumen Flicker-Free LED Battens & Drivers"
    ],
    badge: "Authorized Dealership",
    productsSummary: "Energion BLDC Fans • Aura High-Speed • Wall/Table Fans • Exhaust Fans • Laser Ray Battens • LED Strips & Drivers",
    accentColor: "from-blue-600 to-cyan-700"
  },
  {
    id: "brand-luker",
    name: "Luker",
    slug: "luker",
    tagline: "Architectural Gate Lights • BLDC Fans • LED Panels • Strip & Rope Lights",
    description: "Leading designer lighting and lifestyle electrical brand known for premium exterior pillar & gate lights, modern BLDC decorative ceiling fans, ultra-slim recessed LED panels, and waterproof LED strip & rope lighting.",
    categories: ["Outdoor Pillar & Gate Lights", "Decorative BLDC & High-Speed Fans", "Ultra-Slim LED Panels & Spotlights", "Silicone LED Strip & Rope Lights"],
    features: [
      "Architectural Weatherproof Exterior Gate & Pillar Fixtures",
      "Super Silent Energy-Saving BLDC Ceiling Fans",
      "Ultra-Slim Recessed & Surface LED Panels (6W - 24W)",
      "High-Density Waterproof LED Strip & Flexible Rope Lights"
    ],
    badge: "Authorized Dealership",
    productsSummary: "Luker Gate Lights • BLDC & Ceiling Fans • Recessed LED Panels • LED Strip & Waterproof Rope Lights",
    accentColor: "from-amber-600 to-orange-700"
  },
  {
    id: "brand-finolex",
    name: "Finolex",
    slug: "finolex",
    tagline: "CPVC, UPVC, PVC & Conduit Pipes • Flame Retardant (FR) Cables",
    description: "India's highest-trusted manufacturer of premium plumbing pipes, lead-free UPVC, hot & cold CPVC, electrical conduit wiring pipes & bends, SWR drainage systems, and Flame Retardant (FR) multi-strand copper cables.",
    categories: ["CPVC Hot & Cold Water Pipes", "Lead-Free UPVC High-Pressure Pipes", "Rigid PVC Plumbing Pipes & Fittings", "Electrical Conduit Wiring Pipes & Bends", "FR House Wires"],
    features: [
      "100% Lead-Free & NSF Certified Drinking Water Safe",
      "Flame Retardant (FR) High-Grade PVC Cable Insulation",
      "Withstands Hot Water Temperatures up to 93°C",
      "Rigid PVC Electrical Conduit Pipes & Bends"
    ],
    badge: "Authorized Dealer",
    productsSummary: "CPVC & UPVC Pipes • PVC Fittings • Conduit Wiring Pipes & Bends • SWR Drainage • FR Copper Cables",
    accentColor: "from-cyan-600 to-blue-700"
  },
  {
    id: "brand-rr-kabel",
    name: "RR Kābel & RR Electric",
    slug: "rr-kabel",
    tagline: "Superex Green HR+FR Wires • 3L to 25L Electric Water Heaters",
    description: "Pioneers in electrical safety with Heat Guard Technology Superex Green HR+FR wires and energy-efficient RR instant and storage electric water heaters (3L, 5L, 10L, 15L, 25L).",
    categories: ["Superex Green HR+FR Wires", "Instant Water Heaters (3L/5L)", "Storage Geysers (10L/15L/25L)", "Multi-Strand Copper Cables"],
    features: [
      "Heat Guard Technology with High Oxygen Index",
      "100% Electrolytic High-Purity Copper Conductors",
      "Electric Geysers in 3L, 5L, 10L, 15L, 25L Capacities",
      "Dual Layer Insulation for 100% Fire Safety"
    ],
    badge: "Authorized Partner",
    productsSummary: "Superex Green 0.75 - 6.0 sq mm • RR Water Heaters (3L, 5L, 10L, 15L, 25L) • FireX FR Wires",
    accentColor: "from-emerald-600 to-teal-700"
  },
  {
    id: "brand-vguard",
    name: "V-Guard",
    slug: "vguard",
    tagline: "Valco & Victo Instant & Storage Water Heaters (3L, 5L, 10L, 15L, 25L)",
    description: "India's household leader in electric water heating, voltage protection, and home appliances. Engineered with titanium glasslined inner tanks, 8.0 bar high-pressure capability, and multi-tier thermal safety.",
    categories: ["Valco 3L/5L Instant Water Heaters", "Victo Storage Geysers (10L, 15L, 25L)", "Digital Voltage Stabilizers"],
    features: [
      "Complete Range: 3L, 5L, 10L, 15L, 25L Geysers",
      "3000W Fast Element & Titanium Glasslined Inner Tanks",
      "High Pressure Resistance up to 8.0 Bar (High-Rise Ready)",
      "Multi-Function Safety Valve & Auto Thermal Cut-Off"
    ],
    badge: "Authorized Dealer",
    productsSummary: "Valco 3L/5L Instant Geysers • Victo 10L, 15L, 25L Storage Geysers • Voltage Stabilizers",
    accentColor: "from-amber-500 to-yellow-600"
  },
  {
    id: "brand-kundan",
    name: "Kundan Cable",
    slug: "kundan",
    tagline: "FR House Wires • K-Plus 1.1kV Industrial Wires • Multicore Cables",
    description: "ISO 9001:2015 certified manufacturer of heavy-duty PVC insulated house wires, 1100V K-Plus multi-strand pure copper conductors, and flexible multicore shielded industrial cables.",
    categories: ["Kundan FR House Wires", "K-Plus 1100V Industrial Wires", "Flexible Multicore Cables"],
    features: [
      "1100V Heavy-Duty Voltage Grade Rating",
      "Ultra 3-Layer Protection Matrix & High Thermal Stability",
      "100% Electrolytic Grade Bright Annealed Copper",
      "Flexible Multicore 2-Core, 3-Core & 4-Core Cables"
    ],
    badge: "Authorized Partner",
    productsSummary: "Kundan FR Wires • K-Plus 1.0 - 6.0 sq mm (90m Coils) • Multicore Shielded Cables",
    accentColor: "from-blue-700 to-indigo-800"
  },
  {
    id: "brand-cera",
    name: "CERA",
    slug: "cera",
    tagline: "Luxury EWC Western Commodes • Designer Wash Basins • Indian Squatting Pans",
    description: "India's premier sanitaryware leader offering stain-resistant vitreous china tabletop wash basins, one-piece and wall-hung EWC western toilets, and heavy ceramic Indian Orrisa squatting pans.",
    categories: ["Vitreous China Wash Basins", "Luxury EWC Western Commodes", "Indian Orrisa Squatting Pans", "Dual Flush Cisterns"],
    features: [
      "Nanotech Stain-Resistant & Easy-Clean High-Gloss Glaze",
      "Water-Saving Dual Flush Tornado Flushing EWCs",
      "Contemporary Designer Countertop & Tabletop Basins",
      "Heavy Load-Bearing Indian Orrisa Pans"
    ],
    badge: "Sanitaryware Partner",
    productsSummary: "CERA Tabletop Basins • Luxury EWC Commode Sets • Indian Orrisa Pans • Cistern Fittings",
    accentColor: "from-teal-600 to-cyan-700"
  },
  {
    id: "brand-parryware",
    name: "Parryware",
    slug: "parryware",
    tagline: "European Water Closets (EWC) • Ceramic Designer Wash Basins",
    description: "Trusted sanitary pioneer providing ergonomic European Water Closets (EWC) with soft-close hydraulic seat covers, dual flush technology, and designer ceramic wash basins.",
    categories: ["EWC Western Toilet Sets", "Countertop & Wall-Hung Basins", "Soft-Close Seat Covers", "Flush Tanks"],
    features: [
      "High Durability Vitrified Ceramic Body",
      "Soft-Close Anti-Slam Seat Covers",
      "S-Trap & P-Trap Western Commodes",
      "Stain-Proof High Gloss Finish"
    ],
    badge: "Sanitaryware Partner",
    productsSummary: "Parryware EWC Sets • Soft-Close Western Commodes • Designer Wash Basins",
    accentColor: "from-indigo-600 to-purple-700"
  },
  {
    id: "brand-cheran-sharp",
    name: "Cheran & Sharp",
    slug: "cheran-sharp",
    tagline: "Self-Priming Motors • Openwell Submersibles • Monoblocs • Borewell Pumps",
    description: "Heavy-duty agricultural and domestic water pumps and electric motors featuring 100% pure copper windings, forged brass impellers, and superior suction lift.",
    categories: ["Self-Priming Domestic Motors", "Openwell Submersible Motors", "Centrifugal Monobloc Pumps", "Borewell Submersible Pumps"],
    features: [
      "100% Pure Copper Winding & Forged Brass Impeller",
      "High Suction Lift Self-Priming Regenerative Motors",
      "Heavy Openwell Underwater Sump Pumps",
      "Deep Multi-Stage Borewell Submersible Pumps"
    ],
    badge: "Authorized Motor Dealer",
    productsSummary: "Self Priming Motors (0.5 - 1.5 HP) • Openwell Sump Motors • Monoblocs • Cheran Borewell Pumps",
    accentColor: "from-blue-800 to-slate-900"
  },
  {
    id: "brand-supreme",
    name: "Supreme",
    slug: "supreme",
    tagline: "Multi-Layer Anti-Bacterial Water Tanks • Polymer Taps & Bib Cocks",
    description: "India's undisputed leader in polymer technology offering 3-layer & 4-layer antibacterial overhead water tanks and heavy-duty polymer bib cocks and taps.",
    categories: ["Multi-Layer Water Storage Tanks", "Polymer Bathroom Taps & Bib Cocks", "PVC Fittings"],
    features: [
      "Anti-Bacterial Silver-Ion Inner Shield Layer",
      "UV-Stabilized Thermal Insulation Overhead Tanks (500L - 2000L)",
      "Heavy-Duty Leak-Proof Polymer Bib Cocks",
      "100% Virgin Food-Grade Polymer"
    ],
    badge: "Authorized Dealer",
    productsSummary: "Supreme Water Tanks (500L - 2000L) • Polymer Water Taps & Long Body Bib Cocks",
    accentColor: "from-red-700 to-red-900"
  },
  {
    id: "brand-taparia-venus",
    name: "Taparia & Venus",
    slug: "taparia-venus",
    tagline: "Professional Pliers • Spanners • Screwdrivers • Drop-Forged Wrenches",
    description: "India's benchmark brands for hand tools, pipe wrenches, electrical line testers, insulated pliers, spanner sets, and mechanical workshop essentials.",
    categories: ["Taparia Hand Tools & Kits", "Venus Heavy Drop-Forged Wrenches", "Screwdriver & Spanner Sets", "Insulated Electrician Tools"],
    features: [
      "High-Grade Chrome Vanadium & Alloy Steel",
      "Drop-Forged & Heat-Treated Toughness",
      "Heavy Pipe Wrenches & Adjustable Spanners",
      "Insulated Handles for 1000V Electrical Safety"
    ],
    badge: "Tools & Hardware Partner",
    productsSummary: "Taparia Pliers, Spanners, Screwdrivers • Venus Heavy Drop-Forged Pipe Wrenches & Toolkits",
    accentColor: "from-amber-700 to-orange-800"
  }
];

export const CATEGORIES_DATA: Category[] = [
  {
    id: "cat-fans-ventilation",
    name: "Fans & Ventilation",
    slug: "fans-ventilation",
    description: "Havells, Crompton & Luker BLDC 5-star energy saving ceiling fans, high-velocity table/pedestal fans, and kitchen exhaust fans.",
    itemCount: "60+ Models",
    image: "/images/crompton-energion-bldc.jpg",
    features: ["5-Star ActivBLDC & Energy-Saving Fans", "Heavy Oscillating Pedestal & Table Fans", "Kitchen & Commercial Exhaust Fans"]
  },
  {
    id: "cat-lighting-fixtures",
    name: "Lighting & Gate Lights",
    slug: "lighting-fixtures",
    description: "Solar automatic gate lights, Luker pillar lights, Crompton & Orient LED battens, ultra-slim panels, and flexible rope/strip lights.",
    itemCount: "100+ Fixtures",
    image: "/images/store-havells-lighting-wires-rack.jpg",
    features: ["Solar Automatic Dusk-to-Dawn Gate Lights", "Crompton & Orient High-Lumen LED Battens", "Luker Architectural Panels & Rope Lights"]
  },
  {
    id: "cat-wires-cables",
    name: "Wires, Cables & Network",
    slug: "wires-cables",
    description: "Kundan Cable (FR, K-Plus, Multicore), Finolex FR wires, RR Kābel Superex Green HR+FR, Havells FR-LSH, Hills wires & Cat-6 LAN.",
    itemCount: "150+ Varieties",
    image: "/images/havells-cable-range.jpg",
    features: ["Kundan & RR Kābel Fire-Retardant Wires", "Finolex Multi-Strand House Cables", "Hills Submersible & Cat-6 Gigabit LAN"]
  },
  {
    id: "cat-electrical-goods",
    name: "Switches & Electrical Goods",
    slug: "electrical-goods",
    description: "Havells Fabio, HiFi & Lisha modular switches, solid wood concealed boxes, multi-item gang boxes, EB meter boards, and MCBs.",
    itemCount: "200+ Items",
    image: "/images/store-electrical-switches-rack.jpg",
    features: ["Havells, HiFi & Lisha Modular Switches", "Single/3-Phase Solid Wooden Meter Boards", "Euro-II MCB Breakers & Double Door DBs"]
  },
  {
    id: "cat-pipes-plumbing",
    name: "Pipes & Plumbing Fittings",
    slug: "pipes-plumbing",
    description: "Finolex CPVC, UPVC, PVC & conduit wiring pipes, GI heavy pipes, elbows, tees, couplers, and high-pressure solvent connections.",
    itemCount: "180+ Items",
    image: "/images/finolex-pipes-range.jpg",
    features: ["Finolex Hot & Cold CPVC (SDR 11/13.5)", "Lead-Free UPVC Schedule 40/80", "Conduit Wiring Pipes & Heavy GI Fittings"]
  },
  {
    id: "cat-water-heaters",
    name: "Water Heaters & Geysers",
    slug: "water-heaters",
    description: "V-Guard & RR electric water heaters in 3L, 5L, 10L, 15L, and 25L instant and heavy-duty titanium glasslined storage models.",
    itemCount: "20+ Capacities",
    image: "/images/vguard-water-heater.jpg",
    features: ["3L, 5L, 10L, 15L, 25L Instant & Storage", "8.0 Bar High-Rise Pressure Rating", "Titanium Glasslined Inner Tanks"]
  },
  {
    id: "cat-motors-pumps",
    name: "Motors & Submersible Pumps",
    slug: "motors-pumps",
    description: "Cheran & Sharp 100% copper self-priming domestic motors, openwell submersibles, centrifugal monoblocs, and borewell pumps.",
    itemCount: "35+ Pumps",
    image: "/images/store-plumbing-fittings-rack.jpg",
    features: ["Cheran & Sharp 100% Copper Winding", "Openwell Sump & Well Submersibles", "Deep Borewell Multi-Stage Pumps"]
  },
  {
    id: "cat-water-storage",
    name: "Water Storage Tanks",
    slug: "water-storage",
    description: "Supreme, Ganga, Spider, and Avonplast 3-layer and 4-layer antibacterial UV-stabilized overhead and loft water storage tanks.",
    itemCount: "40+ Sizes",
    image: "/images/store-pvc-bends-shelving.jpg",
    features: ["Supreme & Ganga 3/4-Layer Tanks", "Anti-Bacterial Silver Ion Shield", "300L to 2000L Overhead & Loft Tanks"]
  },
  {
    id: "cat-bathroom-sanitary",
    name: "Bathroom, Taps & Sanitary Ware",
    slug: "bathroom-sanitary",
    description: "Parryware & CERA EWCs & wash basins, Gravity & Plato CP taps, Plumtec, Watertec & Supreme PVC taps, and Indian Orrisa pans.",
    itemCount: "120+ Items",
    image: "/images/store-interior.png",
    features: ["Parryware & CERA EWCs & Designer Basins", "Gravity & Plato Chrome Plated (CP) Taps", "Watertec & Plumtec Rust-Free Polymer Taps"]
  },
  {
    id: "cat-hardware-essentials",
    name: "Hardware, Tools & Woodcraft",
    slug: "hardware-essentials",
    description: "Taparia & Venus drop-forged hand tools, teakwood concealed boxes, item gang boxes, electrical meter boards, and fasteners.",
    itemCount: "300+ Items",
    image: "/images/store-interior.png",
    features: ["Taparia & Venus Drop-Forged Hand Tools", "Teak & Hardwood Concealed Switch Boxes", "Fasteners, Hinges & Construction Hardware"]
  }
];

export const PRODUCTS_DATA: Product[] = [
  // ==========================================
  // 1. GATE LIGHTS & OUTDOOR LIGHTING
  // ==========================================
  {
    id: "prod-havells-solar-gate-light",
    name: "Havells Solar Automatic LED Gate Light",
    category: "Lighting & Gate Lights",
    categorySlug: "lighting-fixtures",
    description: "Premium solar-powered outdoor pillar & gate light with high-efficiency monocrystalline solar panel, auto dusk-to-dawn sensor, and IP65 waterproof die-cast casing.",
    specs: [
      "Solar Powered Monocrystalline Panel",
      "Automatic Dusk-to-Dawn Sensor",
      "IP65 Heavy Weatherproof Enclosure",
      "Long-Life High-Capacity Lithium Battery"
    ],
    image: "/images/havells-led-panel-light.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-luker-gate-light",
    name: "Luker Architectural Exterior Pillar & Gate Light",
    category: "Lighting & Gate Lights",
    categorySlug: "lighting-fixtures",
    description: "Modern decorative outdoor gate and boundary pillar light fixture with glare-free 360° illumination and anti-corrosion matte finish.",
    specs: [
      "E27 / B22 Heavy Holder Fitting",
      "UV-Stabilized Acrylic Diffuser",
      "Anti-Rust Powder-Coated Metal Body",
      "Suitable for Gate Pillars & Garden Walls"
    ],
    image: "/images/store-havells-lighting-wires-rack.jpg",
    isPopular: true,
    brand: "Luker",
    brandSlug: "luker"
  },

  // ==========================================
  // 2. TOOLS & HARDWARE
  // ==========================================
  {
    id: "prod-taparia-tools",
    name: "Taparia Professional Hand Tools & Toolkit Range",
    category: "Hardware, Tools & Woodcraft",
    categorySlug: "hardware-essentials",
    description: "Comprehensive range of genuine Taparia hand tools including combination pliers, adjustable spanners, screwdriver sets, line testers, pipe wrenches, and socket sets.",
    specs: [
      "High Grade Chrome Vanadium Steel",
      "Drop Forged & Heat Treated",
      "Insulated Handles for Electrical Safety (1000V)",
      "Lifetime Industrial Durability"
    ],
    image: "/images/store-interior.png",
    isPopular: true,
    brand: "Taparia",
    brandSlug: "taparia-venus"
  },
  {
    id: "prod-venus-tools",
    name: "Venus Heavy-Duty Industrial Tools & Wrenches",
    category: "Hardware, Tools & Woodcraft",
    categorySlug: "hardware-essentials",
    description: "Heavy-duty Venus drop-forged pipe wrenches, ring spanners, open-end spanners, and heavy mechanical workshop hand tools.",
    specs: [
      "Drop-Forged Carbon Alloy Steel",
      "Precision Machined Jaws",
      "Rust-Resistant Black Phosphate & Chrome Finish",
      "Contractor & Plumber Grade"
    ],
    image: "/images/store-interior.png",
    isPopular: false,
    brand: "Venus",
    brandSlug: "taparia-venus"
  },

  // ==========================================
  // 3. PIPES & FITTINGS
  // ==========================================
  {
    id: "prod-finolex-pvc-pipes-fittings",
    name: "Finolex Rigid PVC Pipes & Pressure Fittings",
    category: "Pipes & Plumbing Fittings",
    categorySlug: "pipes-plumbing",
    description: "Premium Finolex rigid PVC pipes and full range of pressure fittings (elbows, tees, couplers, reducers) for agricultural, domestic water supply, and building mains.",
    specs: [
      "Classes: 2.5, 4, 6 & 10 kgf/cm²",
      "ISI Marked IS:4985 Standard",
      "Smooth Bore for Maximum Flow",
      "UV-Stabilized for Long Exterior Life"
    ],
    image: "/images/finolex-pipes-range.jpg",
    isPopular: true,
    brand: "Finolex Pipes",
    brandSlug: "finolex"
  },
  {
    id: "prod-finolex-cpvc-pipes-fittings",
    name: "Finolex Heavy CPVC Hot & Cold Water Pipes & Fittings",
    category: "Pipes & Plumbing Fittings",
    categorySlug: "pipes-plumbing",
    description: "SDR 11 & SDR 13.5 certified Finolex CPVC plumbing pipe system with high chemical resistance, heat tolerance up to 93°C, and 100% lead-free potable water safety.",
    specs: [
      "1/2\" to 2\" (15mm to 50mm) Diameters",
      "Up to 93°C Heat Resistance",
      "100% Lead-Free & Potable Safe",
      "SDR 11 Class 1 High Pressure"
    ],
    image: "/images/finolex-pipes.jpg",
    isPopular: true,
    brand: "Finolex Pipes",
    brandSlug: "finolex"
  },
  {
    id: "prod-finolex-upvc-pipes-fittings",
    name: "Finolex Lead-Free UPVC High-Pressure Pipes & Fittings",
    category: "Pipes & Plumbing Fittings",
    categorySlug: "pipes-plumbing",
    description: "Heavy duty Schedule 40 & Schedule 80 lead-free UPVC pipes for reliable cold water distribution, bathroom mains, and high-rise plumbing.",
    specs: [
      "Schedule 40 & 80 Certified",
      "Smooth Internal Bore - Zero Scaling",
      "UV Protected Outer Layer",
      "Standard 3m & 6m Lengths"
    ],
    image: "/images/store-pvc-bends-shelving.jpg",
    isPopular: true,
    brand: "Finolex Pipes",
    brandSlug: "finolex"
  },
  {
    id: "prod-finolex-conduit-wiring-pipes",
    name: "Finolex Electrical Conduit Wiring Pipes & Bends",
    category: "Pipes & Plumbing Fittings",
    categorySlug: "pipes-plumbing",
    description: "Heavy & medium duty rigid PVC conduit electrical pipes and deep bends for concealed wall wiring and open surface cabling installations.",
    specs: [
      "Available in 20mm, 25mm, 32mm Sizes",
      "High Impact Resistance (FRLS)",
      "Smooth Internal Glaze for Easy Wire Pulling",
      "Flame Retardant & Shock Proof"
    ],
    image: "/images/store-pvc-bends-shelving.jpg",
    isPopular: true,
    brand: "Finolex",
    brandSlug: "finolex"
  },
  {
    id: "prod-gi-pipes-fittings",
    name: "Heavy Galvanized Iron (GI) Pipes & Fittings",
    category: "Pipes & Plumbing Fittings",
    categorySlug: "pipes-plumbing",
    description: "Heavy-gauge hot-dip Galvanized Iron (GI) Class B & C pipes with threaded malleable iron elbows, tees, unions, sockets, and brass gate valves.",
    specs: [
      "Class B (Yellow) & Class C (Red) Available",
      "Hot-Dip Galvanized Zinc Coating",
      "High Tensile & Structural Strength",
      "Standard 1/2\" to 4\" Nominal Bore"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: false,
    brand: "GI Standards",
    brandSlug: "finolex"
  },

  // ==========================================
  // 4. MOTORS & PUMPS
  // ==========================================
  {
    id: "prod-cheran-sharp-self-priming",
    name: "Cheran & Sharp Self-Priming Regenerative Domestic Water Motor",
    category: "Motors & Submersible Pumps",
    categorySlug: "motors-pumps",
    description: "High-efficiency self-priming monobloc pump with 100% copper winding, forged brass impeller, stainless steel shaft, and thermal overload protector (TOP).",
    specs: [
      "0.5 HP / 1.0 HP / 1.5 HP Models",
      "High Suction Lift up to 8 Metres",
      "100% Electrolytic Copper Winding",
      "Forged Brass Impeller for Long Life"
    ],
    image: "/images/store-interior.png",
    isPopular: true,
    brand: "Cheran & Sharp",
    brandSlug: "cheran-sharp"
  },
  {
    id: "prod-cheran-sharp-openwell",
    name: "Cheran & Sharp Openwell Submersible Motor Pump",
    category: "Motors & Submersible Pumps",
    categorySlug: "motors-pumps",
    description: "Heavy water-cooled openwell submersible pump designed for underwater operation in domestic sumps, open wells, and agricultural irrigation.",
    specs: [
      "Single Phase & Three Phase (1.0 HP to 5.0 HP)",
      "Water-Cooled Rewindable Motor",
      "High Grade Cast Iron Body & Gunmetal Impeller",
      "Operates under Low Voltage Fluctuations"
    ],
    image: "/images/store-interior.png",
    isPopular: true,
    brand: "Cheran & Sharp",
    brandSlug: "cheran-sharp"
  },
  {
    id: "prod-cheran-sharp-monobloc",
    name: "Cheran & Sharp Centrifugal Monobloc Water Pump",
    category: "Motors & Submersible Pumps",
    categorySlug: "motors-pumps",
    description: "High-discharge centrifugal monobloc motor engineered for high volume water transfer to multi-story building overhead tanks, commercial complexes, and gardens.",
    specs: [
      "1.0 HP / 2.0 HP High Discharge",
      "Dynamically Balanced Rotor",
      "Class 'F' Insulation with Double Sealed Bearings",
      "Low Power Consumption"
    ],
    image: "/images/store-interior.png",
    isPopular: false,
    brand: "Cheran & Sharp",
    brandSlug: "cheran-sharp"
  },
  {
    id: "prod-cheran-submersible-pump",
    name: "Cheran Multi-Stage Borewell Submersible Pump Set",
    category: "Motors & Submersible Pumps",
    categorySlug: "motors-pumps",
    description: "Precision-engineered 4-inch water-filled stainless steel borewell submersible pump with NORYL impellers for deep groundwater lifting.",
    specs: [
      "Suitable for 100ft to 600ft Borewells",
      "Stainless Steel SS-304 Outer Body",
      "Multi-Stage High Head NORYL Impellers",
      "Anti-Sand Abrasion Resistant Design"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: true,
    brand: "Cheran",
    brandSlug: "cheran-sharp"
  },

  // ==========================================
  // 5. WOODEN BOXES & BOARDS
  // ==========================================
  {
    id: "prod-concealed-wood-box",
    name: "Teakwood / Hardwood Concealed Switch Box",
    category: "Switches & Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Seasoned teakwood and seasoned hardwood concealed electrical wall boxes for secure recessed modular and piano switch installations.",
    specs: [
      "Available in 1, 2, 3, 4, 6, 8 Module Sizes",
      "Seasoned Anti-Termite Treated Wood",
      "Heavy 12mm - 18mm Wall Thickness",
      "Standard Flush Wall Fitting"
    ],
    image: "/images/store-electrical-switches-rack.jpg",
    isPopular: false,
    brand: "Woodcraft",
    brandSlug: "havells"
  },
  {
    id: "prod-item-wood-box",
    name: "Modular Wooden Item Gang Boxes (1-Way to 8-Way)",
    category: "Switches & Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Surface and semi-concealed wooden item switch boxes with pre-drilled cable entries and smooth planed edges.",
    specs: [
      "1 Item to 8 Item Gang Configurations",
      "Kiln Dried Solid Hardwood",
      "Smooth Sanded Finish Ready for Polish/Varnish",
      "Heavy Brass Screws Compatible"
    ],
    image: "/images/store-electrical-switches-rack.jpg",
    isPopular: false,
    brand: "Woodcraft",
    brandSlug: "havells"
  },
  {
    id: "prod-wood-meter-board",
    name: "Heavy Hardwood Single Phase & Three Phase Electrical Meter Board",
    category: "Switches & Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Traditional heavy solid wood electrical service connection boards for mounting EB digital meters, cut-out fuses, and main switch gears.",
    specs: [
      "Sizes: 8x10, 10x12, 12x15, 14x18 Inch",
      "Single Phase & 3-Phase TNEB Compliant",
      "Heavy-Duty 1-Inch Thick Hardwood",
      "Termite & Moisture Resistant Coating"
    ],
    image: "/images/store-electrical-switches-rack.jpg",
    isPopular: true,
    brand: "Woodcraft",
    brandSlug: "havells"
  },

  // ==========================================
  // 6. CP TAPS (CHROME PLATED)
  // ==========================================
  {
    id: "prod-gravity-cp-taps",
    name: "Gravity Premium Chrome Plated (CP) Bathroom Taps & Bib Cocks",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Heavy solid brass CP bathroom bib cocks, pillar taps, two-way taps, and wall mixers with mirror chrome finish and high durability quarter-turn ceramic cartridges.",
    specs: [
      "100% Virgin Brass Ingot Construction",
      "Thick Multi-Layer Nickel Chrome Plating",
      "Quarter-Turn High Flow Ceramic Disc",
      "5-Year Leak-Proof Warranty"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: true,
    brand: "Gravity",
    brandSlug: "cera"
  },
  {
    id: "prod-plato-cp-taps",
    name: "Plato Designer CP Basin Mixers & Wall Taps",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Contemporary angular and swan-neck CP sink taps, basin mixers, and angle valves crafted for luxury modern bathrooms.",
    specs: [
      "Designer Ergonomic Spout",
      "High Performance Aerator - Splash Free Flow",
      "Corrosion Resistant Chrome Mirror Finish",
      "Standard 1/2\" BSP Thread"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: false,
    brand: "Plato",
    brandSlug: "cera"
  },
  {
    id: "prod-kag-cp-taps",
    name: "KAG / KAU CP Bathroom & Kitchen Faucet Taps",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Precision-crafted chrome plated brass bathroom long-body taps, sink cocks, and shower arms with smooth water-flow regulators.",
    specs: [
      "Solid Forged Brass Core",
      "Tested for 500,000 On/Off Cycles",
      "Smooth Foam Flow Water Aerator",
      "High Water Pressure Compatible"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: false,
    brand: "KAG",
    brandSlug: "cera"
  },

  // ==========================================
  // 7. BATHWARE & SANITARYWARE
  // ==========================================
  {
    id: "prod-parryware-ewc",
    name: "Parryware European Water Closet (EWC) Commode Sets",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Premium Parryware ceramic western commode with soft-close seat cover, dual flush cistern mechanism, and rimless hygiene flushing technology.",
    specs: [
      "S-Trap & P-Trap Floor/Wall Mounting",
      "Soft-Close Anti-Slam Seat Cover",
      "Water Saving Dual Flush System",
      "Stain Resistant Vitreous Ceramic"
    ],
    image: "/images/store-interior.png",
    isPopular: true,
    brand: "Parryware",
    brandSlug: "parryware"
  },
  {
    id: "prod-parryware-wash-basin",
    name: "Parryware Ceramic Designer Wash Basins",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Elegant countertop and wall-hung Parryware ceramic wash basins with high-gloss glaze, anti-microbial surface, and overflow protection.",
    specs: [
      "Tabletop & Wall-Hung Models Available",
      "High-Gloss Nanotech Easy-Clean Glaze",
      "Pre-Punched Tap Hole",
      "Compact & Luxury Dimensions"
    ],
    image: "/images/store-interior.png",
    isPopular: true,
    brand: "Parryware",
    brandSlug: "parryware"
  },
  {
    id: "prod-cera-wash-basin",
    name: "CERA Vitreous China Designer Tabletop Wash Basin",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Luxury CERA wash basin featuring deep bowl ergonomics, flawless brilliant white finish, and scratch-resistant porcelain glaze.",
    specs: [
      "Vitreous China Gloss Finish",
      "Countertop Deck & Vanity Mounting",
      "Stain & Chemical Resistant Surface",
      "Contemporary Minimalist Aesthetics"
    ],
    image: "/images/store-interior.png",
    isPopular: true,
    brand: "CERA",
    brandSlug: "cera"
  },
  {
    id: "prod-cera-ewc-set",
    name: "CERA Luxury EWC Western Toilet Closets & Cisterns",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "High-grade CERA one-piece and two-piece European water closets with powerful 360° tornado flush, ergonomic seat contour, and leak-free tank fittings.",
    specs: [
      "One-Piece & Couple Closet Options",
      "Quiet Soft-Close Hydraulic Seat",
      "Tornado Jet 360° Power Flush",
      "Certified Water-Saving Dual Actuator"
    ],
    image: "/images/store-interior.png",
    isPopular: true,
    brand: "CERA",
    brandSlug: "cera"
  },
  {
    id: "prod-cera-indian-basin-pan",
    name: "CERA Indian Orrisa Squatting Pans & Closets",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Heavy vitreous ceramic Indian Orrisa pan (20\" / 23\") with integrated footrests, deep water seal P-trap/S-trap compatibility, and heavy anti-slip texture.",
    specs: [
      "20 Inch & 23 Inch Sizes Available",
      "Integrated Anti-Slip Footrests",
      "Ultra-Smooth High-Velocity Glaze",
      "High Load-Bearing Vitrified Ceramic"
    ],
    image: "/images/store-interior.png",
    isPopular: false,
    brand: "CERA",
    brandSlug: "cera"
  },

  // ==========================================
  // 8. WATER STORAGE TANKS
  // ==========================================
  {
    id: "prod-supreme-water-tank",
    name: "Supreme Multi-Layer Anti-Bacterial Overhead Water Tanks",
    category: "Water Storage Tanks",
    categorySlug: "water-storage",
    description: "100% virgin food-grade polymer Supreme water storage tanks with antibacterial silver-ion inner layer, UV protection, and multi-ribbed structural strength.",
    specs: [
      "500L, 750L, 1000L, 1500L, 2000L Capacities",
      "Multi-Layer Thermal Foam Insulation",
      "UV-Stabilized Anti-Algae Barrier",
      "Heavy Threaded Inspection Lid"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: true,
    brand: "Supreme",
    brandSlug: "supreme"
  },
  {
    id: "prod-ganga-water-tank",
    name: "Ganga Heavy-Duty 3-Layer & 4-Layer Water Storage Tanks",
    category: "Water Storage Tanks",
    categorySlug: "water-storage",
    description: "Heavy-duty Ganga overhead water tanks built with 100% virgin polymer, extra thick wall gauge, and summer heat reflecting outer layer.",
    specs: [
      "3-Layer & 4-Layer Heavy Duty Series",
      "500L to 2000L Storage Capacities",
      "Keeps Water Cooler in High Summer Temperatures",
      "10-Year Manufacturer Guarantee"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: true,
    brand: "Ganga",
    brandSlug: "supreme"
  },
  {
    id: "prod-spider-water-tank",
    name: "Spider UV-Stabilized Triple Layer Water Storage Tanks",
    category: "Water Storage Tanks",
    categorySlug: "water-storage",
    description: "Spider triple-layer rotationally moulded polyethylene water storage tanks with air-tight threaded cover and high crack resistance.",
    specs: [
      "Triple Layer Virgin Plastic",
      "Anti-Fungal & Anti-Bacterial Core",
      "High Impact & Structural Rib Reinforcement",
      "500L, 1000L & 1500L Sizes"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: false,
    brand: "Spider",
    brandSlug: "supreme"
  },
  {
    id: "prod-avonplast-water-tank",
    name: "Avonplast Premium Polymer Overhead Water Tanks",
    category: "Water Storage Tanks",
    categorySlug: "water-storage",
    description: "High quality Avonplast overhead and loft water storage tanks manufactured using computerized rotomoulding technology.",
    specs: [
      "Loft & Overhead Tank Models",
      "Food-Grade FDA Approved Plastic",
      "High Tensile Strength & Seamless Mould",
      "Standard 300L to 2000L"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: false,
    brand: "Avonplast",
    brandSlug: "supreme"
  },

  // ==========================================
  // 9. WIRES & CABLES
  // ==========================================
  {
    id: "prod-kundan-cable-wires",
    name: "Kundan Cable Flame Retardant (FR) House Wires",
    category: "Wires, Cables & Network",
    categorySlug: "wires-cables",
    description: "100% electrolytic annealed high-purity copper conductor house wiring with flame retardant PVC insulation.",
    specs: [
      "Available: 0.75, 1.0, 1.5, 2.5, 4.0, 6.0 sq mm",
      "Flame Retardant (FR) Grade Insulation",
      "90m Standard Sealed Coils",
      "IS:694 Certified Quality"
    ],
    image: "/images/kundan-cable-wires.jpg",
    isPopular: true,
    brand: "Kundan Cable",
    brandSlug: "kundan"
  },
  {
    id: "prod-kundan-kplus",
    name: "Kundan Cable K-Plus 1.1kV Heavy Duty Industrial Wire",
    category: "Wires, Cables & Network",
    categorySlug: "wires-cables",
    description: "1100V grade PVC insulated industrial multi-strand flexible copper conductors with 3-layer protection matrix and high thermal endurance.",
    specs: [
      "1100V Voltage Grade",
      "Available: 1.0, 1.5, 2.5, 4.0, 6.0 sq mm",
      "Ultra 3-Layer Heat Protection",
      "IS:694 Certified Quality"
    ],
    image: "/images/kundan-cable-wires.jpg",
    isPopular: true,
    brand: "Kundan Cable",
    brandSlug: "kundan"
  },
  {
    id: "prod-kundan-multicore",
    name: "Kundan Flexible Multicore Industrial Shielded Cables",
    category: "Wires, Cables & Network",
    categorySlug: "wires-cables",
    description: "Multi-core round flexible PVC insulated and sheathed industrial copper cables (2-Core, 3-Core, 4-Core) for heavy appliances, machinery, and submersible motors.",
    specs: [
      "2-Core, 3-Core & 4-Core Configurations",
      "Heavy Tough Outer Sheathing",
      "High Flexibility for Heavy Industrial Use",
      "100m Length Reels & Custom Cuts"
    ],
    image: "/images/kundan-cable-wires.jpg",
    isPopular: false,
    brand: "Kundan Cable",
    brandSlug: "kundan"
  },
  {
    id: "prod-finolex-fr-wires",
    name: "Finolex Flame Retardant (FR) Multi-Strand House Wires",
    category: "Wires, Cables & Network",
    categorySlug: "wires-cables",
    description: "Multi-strand flexible copper conductors insulated with specially formulated Flame Retardant PVC compound to prevent fire spread.",
    specs: [
      "Available in Red, Green, Blue, Yellow, Black",
      "High Oxygen & Temperature Index",
      "100% High-Conductivity Copper",
      "90m Standard Coils"
    ],
    image: "/images/finolex-fr-cables.jpg",
    isPopular: true,
    brand: "Finolex",
    brandSlug: "finolex"
  },
  {
    id: "prod-rr-kabel-superex-wires",
    name: "RR Kābel Superex Green HR+FR Heat Resistant House Wire",
    category: "Wires, Cables & Network",
    categorySlug: "wires-cables",
    description: "Heat Guard Technology (HR+FR) copper wire designed for high thermal resistance, flame retardancy, and toxic-free domestic & commercial wiring.",
    specs: [
      "0.75, 1.0, 1.5, 2.5, 4.0, 6.0 sq mm (90m Coils)",
      "Heat Guard HR+FR Flame Retardant",
      "Free from 245+ Toxic Chemicals",
      "100% Electrolytic Pure Copper"
    ],
    image: "/images/rr-kabel-superex.jpg",
    isPopular: true,
    brand: "RR Kābel",
    brandSlug: "rr-kabel"
  },
  {
    id: "prod-havells-life-line-wire",
    name: "Havells Life Line Plus S3 FR-LSH Copper Wires Range",
    category: "Wires, Cables & Network",
    categorySlug: "wires-cables",
    description: "100% electrolytic flexible copper conductors with Flame Retardant Low Smoke & Halogen (FR-LSH) high-insulation casing in red, yellow, and green.",
    specs: [
      "Available: 0.75, 1.0, 1.5, 2.5, 4.0, 6.0 sq mm",
      "Flame Retardant Low Smoke (FR-LSH)",
      "90m Certified Coil Boxes",
      "ISI & CE Certified Quality"
    ],
    image: "/images/havells-cable-range.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-hills-wires",
    name: "Hills Heavy-Duty Submersible & Domestic Copper Wires",
    category: "Wires, Cables & Network",
    categorySlug: "wires-cables",
    description: "Heavy flat 3-core submersible cables and PVC insulated single core house wires engineered for high moisture conditions and continuous motor load.",
    specs: [
      "Flat 3-Core Submersible Cable & 1-Core Wires",
      "100% Bright Annealed Copper",
      "Tough Water & Oil Resistant Sheath",
      "Heavy Continuous Current Carrying Capacity"
    ],
    image: "/images/havells-cable-range.jpg",
    isPopular: false,
    brand: "Hills",
    brandSlug: "rr-kabel"
  },
  {
    id: "prod-hills-cat6",
    name: "Hills High-Speed Cat-6 Network & LAN Cables",
    category: "Wires, Cables & Network",
    categorySlug: "wires-cables",
    description: "High-speed Gigabit 4-Pair UTP Cat-6 Ethernet network cables with central cross spline for noise isolation in CCTV, smart homes, and high-speed internet.",
    specs: [
      "Gigabit Ethernet Speed up to 1000 Mbps",
      "23 AWG Solid Pure Bare Copper",
      "Central PE Spine Cross Separator",
      "305 Metre Standard Pull Box"
    ],
    image: "/images/store-havells-lighting-wires-rack.jpg",
    isPopular: true,
    brand: "Hills",
    brandSlug: "rr-kabel"
  },

  // ==========================================
  // 10. SWITCHES & ELECTRICAL ACCESSORIES
  // ==========================================
  {
    id: "prod-havells-modular-switches",
    name: "Havells Fabio & Coral Premium Modular Switches & Sockets",
    category: "Switches & Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Premium modular switches, 6A/16A universal sockets, USB charging ports, and glass/metallic gang plates with soft-clicking mechanism and silver contacts.",
    specs: [
      "1M to 18M Modular Plates & Frame Grids",
      "Dual Shuttered Child Safe Sockets",
      "Silver Inlay Contacts - Spark-Free Switching",
      "Flame Retardant Polycarbonate Body"
    ],
    image: "/images/store-electrical-switches-rack.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-hifi-modular-switches",
    name: "Hi-Fi Premium Modular Switches, Sockets & Faceplates",
    category: "Switches & Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Contemporary styled Hi-Fi modular switches, stepped fan regulators, TV sockets, and bell pushes with glossy white and matte grey finishes.",
    specs: [
      "Ultra-Slim Flat Plate Design",
      "Heavy Brass Contact Terminals",
      "Stepped Electronic Fan Regulators",
      "Tested for 100,000 Mechanical Operations"
    ],
    image: "/images/store-electrical-switches-rack.jpg",
    isPopular: false,
    brand: "Hi-Fi",
    brandSlug: "havells"
  },
  {
    id: "prod-lisha-modular-switches",
    name: "Lisha Designer Modular Electrical Switches & Regulators",
    category: "Switches & Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Elegant Lisha switches and power accessories with smooth ergonomic rocker operation and durable polycarbonate construction.",
    specs: [
      "Modular Grid Plate System",
      "High Conductivity Brass Terminals",
      "Shockproof & Fire-Resistant Housing",
      "Smooth Quiet Rocker Mechanism"
    ],
    image: "/images/store-electrical-switches-rack.jpg",
    isPopular: false,
    brand: "Lisha",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-mcb",
    name: "Havells Euro-II Miniature Circuit Breaker (MCB)",
    category: "Switches & Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Industrial grade C-Curve single pole and double pole circuit breaker with 10kA short circuit breaking capacity.",
    specs: [
      "Single Pole & Double Pole",
      "Rating: 6A, 10A, 16A, 20A, 25A, 32A, 63A",
      "10kA Breaking Capacity",
      "Bi-Connect Terminals for Safe Wiring"
    ],
    image: "/images/havells-mcb-distribution-box.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-db",
    name: "Havells Double Door SPN & TPN MCB Distribution Box",
    category: "Switches & Electrical Goods",
    categorySlug: "electrical-goods",
    description: "Heavy gauge CRCA sheet steel enclosure with powder coated finish, insulated neutral & earth bars.",
    specs: [
      "4-Way, 8-Way, 12-Way SPN & TPN",
      "IP42 / IP43 Protected Double Door",
      "Detachable Gland Plates",
      "Cement Spill Protective Shield"
    ],
    image: "/images/havells-mcb-distribution-box.jpg",
    isPopular: false,
    brand: "Havells",
    brandSlug: "havells"
  },

  // ==========================================
  // 11. PVC TAPS (POLYMERS & PTMT)
  // ==========================================
  {
    id: "prod-plumtec-taps",
    name: "Plumtec Heavy-Duty PVC & PTMT Bathroom Taps",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "High impact PTMT engineering polymer bib cocks, two-in-one taps, and pillar cocks designed for hard water resistance and zero scaling.",
    specs: [
      "PTMT Food Grade Polymer",
      "100% Rust Proof & Scale Resistant",
      "Quarter Turn Ceramic Disc Cartridge",
      "Withstands High Water Pressure"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: true,
    brand: "Plumtec",
    brandSlug: "cera"
  },
  {
    id: "prod-watertec-taps",
    name: "Watertec High-Durability PTMT / PVC Taps & Angle Valves",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Market-leading Watertec bathroom taps, bib cocks, sink mixers, and angle valves tested for 300,000 cycles with zero leakage in harsh water.",
    specs: [
      "Premium Virgin Engineering Polymer",
      "Proven 300,000 Cycle Life",
      "Unbreakable & Corrosion-Free",
      "Available in Classic White & Ivory"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: true,
    brand: "Watertec",
    brandSlug: "cera"
  },
  {
    id: "prod-supreme-pvc-taps",
    name: "Supreme Polymer Water Taps & Long Body Bib Cocks",
    category: "Bathroom, Taps & Sanitary Ware",
    categorySlug: "bathroom-sanitary",
    description: "Heavy-duty Supreme polymer bathroom and utility taps with precision drip-free shut-off and high UV resistance.",
    specs: [
      "Heavy Polymer Body",
      "Smooth Quarter Turn Flow",
      "Leak-Proof High Pressure Seal",
      "Standard 1/2\" Thread Connection"
    ],
    image: "/images/store-plumbing-fittings-rack.jpg",
    isPopular: false,
    brand: "Supreme",
    brandSlug: "supreme"
  },

  // ==========================================
  // 12. FANS & VENTILATION (HAVELLS LOOK UP COLLECTION & MORE)
  // ==========================================
  {
    id: "prod-havells-amaya-bldc",
    name: "Havells Amaya Luxury BLDC+ Ceiling Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Winner of German Design Award 2024 & Good Design Award Japan 2023. Ultra-luxury 3-blade aerodynamic profile with smart Pebble RF remote, silent BLDC motor, and anti-dust liquid paint coating.",
    specs: [
      "German Design Award 2024 & Good Design Award Japan Winner",
      "Sweep: 1200 mm (48 Inch) | 240 m³/min Ultra Air Delivery",
      "28W ActivBLDC Motor - Saves up to 60% Power",
      "Pebble Smart Handheld RF Remote with Timer & Breeze Mode",
      "Liquid Paint Anti-Dust Coating Technology",
      "5-Year On-Site Manufacturer Warranty"
    ],
    image: "/images/havells-ceiling-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-stealth-neo",
    name: "Havells Stealth Neo & Stealth Air BLDC+ Ceiling Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Winner of German Design Award 2025, India Design Mark 2023 & CII Design Excellence. Whisper-quiet contoured aerodynamic blades delivering 245 m³/min high velocity air throw.",
    specs: [
      "German Design Award 2025 & CII Excellence Award Winner",
      "Sweep: 1200 mm & 1400 mm Options",
      "Whisper-Quiet Aerodynamic Contoured 3-Blade Profile",
      "40W Low Power High-Torque Motor (280 RPM)",
      "Available in Royal Espresso Brown & Pearl White",
      "Smart Multi-Speed RF Remote Included"
    ],
    image: "/images/havells-ceiling-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-albus-underlight",
    name: "Havells Albus BLDC+ Underlight Ceiling Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Product of the Year 2024. Integrated 3-color dimmable warm/cool LED chandelier underlight with ultra-quiet 5-star BLDC motor and smart remote control.",
    specs: [
      "Product of the Year 2024 Winner",
      "Integrated 3-Color Dimmable LED Underlight (Warm/Daylight/Cool)",
      "BLDC 5-Star Energy Saver (Consumes Just 32W)",
      "Stepped Light Dimming & Fan Speed via RF Remote",
      "Sweep: 1200 mm (48 Inch) | 230 CMM High Air Delivery",
      "Ideal for Modern Living Rooms & Master Bedrooms"
    ],
    image: "/images/havells-ceiling-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-enticer-elio",
    name: "Havells Enticer & Elio Decorative Ceiling Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Winner of India Design Mark Award (2017 & 2024). Special artistic foil print & dual-tone finish with superior high-velocity 390 RPM air throw.",
    specs: [
      "India Design Mark Award 2024 Winner",
      "Artistic Decorative Foil Trims & Dual-Tone Body",
      "High Speed 390 RPM Air Throw | 235 CMM",
      "Anti-Dust & Scratch-Resistant Outer Finish",
      "Sweep Sizes: 600mm, 900mm, 1200mm, 1400mm",
      "100% Pure Copper Heavy Motor"
    ],
    image: "/images/havells-ceiling-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-efficiencia-neo",
    name: "Havells Efficiencia Neo 26W 5-Star BLDC Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "National Energy Conservation Award Winner. 26W ultra-low power consumption BLDC fan offering up to 65% electricity bill savings with smart remote.",
    specs: [
      "National Energy Conservation Award Winner",
      "Consumes Just 26W at Top Speed (5-Star BEE Rated)",
      "Save up to ₹1,500/year per Fan on Electricity",
      "Runs 3x Longer on Home Inverter Battery Backup",
      "Sweep: 1200 mm | Speed: 350 RPM",
      "Point-Anywhere Smart RF Remote Included"
    ],
    image: "/images/havells-ceiling-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-special-finish",
    name: "Havells Special Finish Hydrographic Woodtone Fans",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Hydrographic natural wood grain and brushed metallic electroplated finish ceiling fans designed for luxury architectural interiors.",
    specs: [
      "Natural Teakwood & Walnut Hydrographic Finish",
      "Electroplated Champagne Gold Canopy & Trims",
      "Aerodynamic Wide-Tip High Airflow Blades",
      "Sweep: 1200 mm (48 Inch) | 380 RPM",
      "Double Ball Bearing Smooth Silent Rotation"
    ],
    image: "/images/havells-ceiling-fan.jpg",
    isPopular: false,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-regular-pacer",
    name: "Havells Pacer / Sprint High-Speed Regular Ceiling Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Rugged 100% copper wire high-speed 400 RPM regular ceiling fan engineered for reliable, continuous heavy-duty domestic and commercial use.",
    specs: [
      "Super High Speed 400 RPM High Velocity",
      "Heavy-Gauge Pure Copper Winding",
      "Corrosion-Resistant Powder Coated Finish",
      "Sweep Sizes: 600mm, 900mm, 1200mm, 1400mm",
      "Low Voltage Operation Capability"
    ],
    image: "/images/havells-ceiling-fan.jpg",
    isPopular: false,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-table-fan",
    name: "Havells High-Speed Oscillating Table Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "High-velocity portable table fan with aerodynamic 3-blade sweep, 90° smooth oscillation, thermal overload protection, and 3-speed rotary switch.",
    specs: [
      "400mm (16\") Sweep / 1350-2000 RPM High Velocity",
      "Smooth 90° Horizontal Jerk-Free Oscillation",
      "Thermal Overload Protection (TOP) Motor",
      "Sturdy Non-Slip Weighted Base with Piano Switches"
    ],
    image: "/images/crompton-wall-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-pedestal-stand-fan",
    name: "Havells Heavy-Duty Telescopic Pedestal Stand Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Heavy-duty pedestal stand fan with telescopic height adjustment, heavy round base, wide oscillation, and high air delivery for halls & verandas.",
    specs: [
      "400mm / 450mm High Airflow Sweep",
      "Telescopic Height Adjustable Pole with Locking Collar",
      "Wide-Angle Horizontal Oscillation & Tilt",
      "Thermal Overload Protected 100% Copper Motor"
    ],
    image: "/images/havells-pedestal-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-wall-fan",
    name: "Havells Dual Pull-Cord Oscillating Wall Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Space-saving wall-mounted fan with dual pull-cord mechanism for speed regulation and oscillation angle control.",
    specs: [
      "Dual Pull Cord for Speed & Oscillation Control",
      "90° Smooth Horizontal Sweep & 15° Vertical Tilt",
      "400mm (16\") Aerodynamic PP Blades",
      "Thermal Overload Protected Motor"
    ],
    image: "/images/crompton-wall-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-personal-desk-fan",
    name: "Havells Personal Multi-Directional Desk & Cabin Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Sleek, ultra-quiet personal cabin fan with multi-directional pivot and tilt for study desks, workstations, and small cabins.",
    specs: [
      "200mm / 300mm Compact Sweep",
      "Multi-Directional Pivot & Vertical Tilt",
      "Ultra-Quiet Low Noise Operation",
      "Portable & Lightweight High-Efficiency Design"
    ],
    image: "/images/crompton-wall-fan.jpg",
    isPopular: false,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-ventilair-exhaust",
    name: "Havells Ventilair Kitchen & Bathroom Exhaust Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Heavy-gauge steel body and automatic ABS gravity shutter Ventilair exhaust fan to clear smoke, steam, and odors rapidly.",
    specs: [
      "Ventilair DB, DX, & Metal Heavy Series",
      "Sizes: 150mm (6\"), 200mm (8\"), 250mm (10\"), 300mm (12\")",
      "Automatic Back-Shutter Gravity Louvers",
      "High Suction Low Noise Copper Motor"
    ],
    image: "/images/store-havells-lighting-wires-rack.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-havells-industrial-air-circulator",
    name: "Havells Industrial Air Circulator & Heavy Duty Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "High-velocity industrial air circulators and heavy-duty exhaust fans for marriage halls, workshops, factories, and warehouses.",
    specs: [
      "Sweep: 450mm (18\"), 600mm (24\"), 750mm (30\")",
      "Heavy Cast Iron Base & Sturdy Column",
      "High CMM Industrial Air Delivery",
      "Class 'F' Insulation for Continuous Extreme Duty"
    ],
    image: "/images/store-interior.png",
    isPopular: false,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-crompton-energion-bldc-fan",
    name: "Crompton Energion 5-Star BLDC Energy Saver Ceiling Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "ActivBLDC motor consumes just 28W at top speed, offering up to 60% power savings with smart RF remote control.",
    specs: [
      "28W Low Power Consumption (5-Star)",
      "Point-Anywhere Smart RF Remote",
      "High Speed 350 RPM / 220 CMM",
      "5-Year Motor Warranty"
    ],
    image: "/images/crompton-energion-bldc.jpg",
    isPopular: true,
    brand: "Crompton",
    brandSlug: "crompton"
  },
  {
    id: "prod-crompton-aura-ceiling-fan",
    name: "Crompton Aura Designer High-Speed Ceiling Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "High-torque 100% copper motor with aerodynamically designed anti-dust ivory gold blades and superior air delivery.",
    specs: [
      "1200mm Sweep",
      "380 RPM Super Fast Air Throw",
      "Anti-Dust Ivory & Gold Finish",
      "2-Year On-Site Warranty"
    ],
    image: "/images/crompton-ceiling-fan.jpg",
    isPopular: true,
    brand: "Crompton",
    brandSlug: "crompton"
  },
  {
    id: "prod-luker-fans-bldc",
    name: "Luker Premium BLDC & High-Speed Decorative Ceiling Fans",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Energy-efficient BLDC motor decorative ceiling fans by Luker with aerodynamically engineered blades, RF smart remote, and modern aesthetic styling.",
    specs: [
      "28W High Efficiency BLDC Motor",
      "Smart Multi-Speed Remote Controller",
      "Anti-Dust Rust-Free Aluminium Blades",
      "Silent Operation with High Air Volume"
    ],
    image: "/images/crompton-energion-bldc.jpg",
    isPopular: true,
    brand: "Luker",
    brandSlug: "luker"
  },
  {
    id: "prod-havells-pedestal-fan",
    name: "Havells High-Speed Oscillating Pedestal Stand Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "Heavy-duty pedestal fan with adjustable telescopic height pole, heavy round base, wide oscillation, and high air delivery.",
    specs: [
      "400mm / 450mm Sweep High Velocity",
      "Telescopic Height Adjustable Pole",
      "Wide-Angle Horizontal Oscillation",
      "Thermal Overload Protected Motor"
    ],
    image: "/images/havells-pedestal-fan.jpg",
    isPopular: true,
    brand: "Havells",
    brandSlug: "havells"
  },
  {
    id: "prod-exhaust-fan-ventilation",
    name: "High-Airflow Heavy-Duty Ventilation & Kitchen Exhaust Fan",
    category: "Fans & Ventilation",
    categorySlug: "fans-ventilation",
    description: "High-speed exhaust fan with rust-proof metal/ABS blades and automatic back-louvers to clear smoke, steam, and odors from kitchens and bathrooms.",
    specs: [
      "Sizes: 150mm (6\"), 200mm (8\"), 250mm (10\"), 300mm (12\")",
      "High RPM Copper Motor",
      "Automatic Back-Shutter Louvers",
      "Low Noise & High Suction Capacity"
    ],
    image: "/images/store-havells-lighting-wires-rack.jpg",
    isPopular: true,
    brand: "Crompton",
    brandSlug: "crompton"
  },

  // ==========================================
  // 13. LIGHTING (LED BATTENS, PANELS, STRIPS & DRIVERS)
  // ==========================================
  {
    id: "prod-crompton-lights-battens",
    name: "Crompton Laser Ray Ultra High-Lumen LED Batten & Downlights",
    category: "Lighting & Gate Lights",
    categorySlug: "lighting-fixtures",
    description: "High efficiency LED tube light batten with glare-free wide angle diffuser and robust aluminium back spine.",
    specs: [
      "20W / 24W / 36W High Output",
      "100+ Lumens per Watt",
      "Flicker-Free Eye Comfort",
      "Surge Protection up to 2.5kV"
    ],
    image: "/images/crompton-led-batten.jpg",
    isPopular: true,
    brand: "Crompton",
    brandSlug: "crompton"
  },
  {
    id: "prod-orient-lights",
    name: "Orient Electric High-Efficiency LED Bulbs, Panels & Battens",
    category: "Lighting & Gate Lights",
    categorySlug: "lighting-fixtures",
    description: "Orient Electric LED lighting solutions featuring EyeLuv technology, high lumen output, energy efficiency, and wide voltage surge tolerance.",
    specs: [
      "9W, 12W, 18W Bulbs & Slim Panels",
      "EyeLuv Low Blue Light Technology",
      "Surge Protection up to 4kV",
      "Up to 85% Electricity Savings"
    ],
    image: "/images/havells-led-panel-light.jpg",
    isPopular: true,
    brand: "Orient",
    brandSlug: "crompton"
  },
  {
    id: "prod-luker-lights",
    name: "Luker Ultra-Slim Recessed LED Panels & Downlights",
    category: "Lighting & Gate Lights",
    categorySlug: "lighting-fixtures",
    description: "Ultra-slim architectural recessed and surface LED panels offering uniform glare-free illumination for false ceilings and modern interiors.",
    specs: [
      "Available in 6W, 12W, 15W, 18W, 24W",
      "Cool White (6500K), Warm White (3000K), Natural (4000K)",
      "Die-Cast Aluminium Heat Sink",
      "High Color Rendering Index (CRI > 85)"
    ],
    image: "/images/havells-led-panel-light.jpg",
    isPopular: true,
    brand: "Luker",
    brandSlug: "luker"
  },
  {
    id: "prod-luker-led-strip-rope",
    name: "Luker Architectural Decorative LED Strip & Waterproof Rope Light",
    category: "Lighting & Gate Lights",
    categorySlug: "lighting-fixtures",
    description: "Flexible 12V/220V high-density LED strip and waterproof exterior silicone rope lights for ceiling cove lighting, cabinet illumination, and exterior decoration.",
    specs: [
      "Warm White, Golden Yellow, Ice Blue, RGB Color Options",
      "High Density 120 / 240 LEDs per Metre",
      "IP65 Waterproof Flexible Silicone Casing",
      "5 Metre & 50 Metre Rolls"
    ],
    image: "/images/store-havells-lighting-wires-rack.jpg",
    isPopular: true,
    brand: "Luker",
    brandSlug: "luker"
  },
  {
    id: "prod-crompton-led-strip-driver",
    name: "Crompton Flexible Architectural LED Strip Light with High-Power Driver",
    category: "Lighting & Gate Lights",
    categorySlug: "lighting-fixtures",
    description: "High-brightness commercial-grade LED strip roll paired with constant voltage insulated SMPS power supply driver for flicker-free cove and profile lighting.",
    specs: [
      "24W / 48W / 72W Heavy Constant Voltage Driver Included",
      "Flicker-Free SMD 2835 High Efficiency Chips",
      "Cuttable Every 5cm for Precise Sizing",
      "3M High-Tack Adhesive Backing"
    ],
    image: "/images/crompton-led-batten.jpg",
    isPopular: true,
    brand: "Crompton",
    brandSlug: "crompton"
  },

  // ==========================================
  // 14. WATER HEATERS & GEYSERS
  // ==========================================
  {
    id: "prod-vguard-water-heaters-all-sizes",
    name: "V-Guard Instant & Storage Water Heaters (3L, 5L, 10L, 15L, 25L)",
    category: "Water Heaters & Geysers",
    categorySlug: "water-heaters",
    description: "Complete range of V-Guard electric geysers from 3L & 5L Valco instant heaters to 10L, 15L, and 25L Victo titanium glasslined storage water heaters.",
    specs: [
      "Available Sizes: 3 Litre, 5 Litre, 10 Litre, 15 Litre, 25 Litre",
      "3000W Fast Element (Instant) / 2000W 5-Star BEE (Storage)",
      "High Pressure Resistance up to 8.0 Bar (High-Rise Ready)",
      "Titanium Enamelled Inner Tank with 5-8 Year Warranty",
      "Multi-Function Safety Valve & Thermal Cut-Off"
    ],
    image: "/images/vguard-water-heater.jpg",
    isPopular: true,
    brand: "V-Guard",
    brandSlug: "vguard"
  },
  {
    id: "prod-rr-water-heaters-all-sizes",
    name: "RR Electric Instant & Storage Water Heaters (3L, 5L, 10L, 15L, 25L)",
    category: "Water Heaters & Geysers",
    categorySlug: "water-heaters",
    description: "Energy-efficient RR electric water heaters available in 3L, 5L instant and 10L, 15L, 25L heavy-duty storage capacities with heavy magnesium anode rod.",
    specs: [
      "Available Sizes: 3 Litre, 5 Litre, 10 Litre, 15 Litre, 25 Litre",
      "Heavy Stainless Steel & Glass-Lined Inner Tanks",
      "High Density PUF Insulation for Long Heat Retention",
      "Suitable for High-Rise Pressure & Hard Water Conditions",
      "Comprehensive On-Site Warranty"
    ],
    image: "/images/vguard-water-heater.jpg",
    isPopular: true,
    brand: "RR Electric",
    brandSlug: "rr-kabel"
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: "ben-1",
    title: "Quality Products",
    description: "Carefully selected products from trusted brands and certified manufacturers.",
    iconName: "ShieldCheck",
    detailedDescription: "Carefully selected construction, electrical, and plumbing products from trusted brands and certified manufacturers.",
    points: [
      "Authorized partner for Havells, Crompton, Luker, Finolex, RR Kābel, V-Guard, Kundan, CERA & Parryware",
      "100% genuine ISI & CE certified electricals, geysers, motors & plumbing",
      "Full manufacturer warranty and on-site support",
      "Suitable for residential, commercial & agricultural projects",
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
      "Direct delivery to your location in Namakkal and surrounding areas",
      "Convenient scheduling for pipes, tanks, and cables",
      "Suitable for contractor and bulk requirements",
      "Safe and reliable material handling",
      "Saves time and project effort"
    ]
  },
  {
    id: "ben-3",
    title: "Quick Purchase",
    description: "Easy product identification, instant stock check, and fast order fulfillment.",
    iconName: "Zap",
    detailedDescription: "Easy product identification, instant stock checking, and fast order fulfillment.",
    points: [
      "Quick product identification across full electrical and plumbing catalog",
      "Instant stock availability checking",
      "Simple transparent ordering process",
      "Faster order fulfillment for urgent site needs",
      "Dedicated counter service"
    ]
  },
  {
    id: "ben-4",
    title: "Trusted Service",
    description: "Helpful, practical guidance and dedicated support for all your project requirements.",
    iconName: "Headphones",
    detailedDescription: "Helpful, practical guidance and dedicated support for all your project requirements.",
    points: [
      "Friendly experienced customer support",
      "Product selection & pipe/cable sizing guidance",
      "Project material list estimation",
      "Transparent wholesale and retail communication",
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
    category: "Fans & Ventilation",
    badge: "380 RPM Super Fast",
    description: "Anti-dust designer ceiling fan with 100% copper motor, 1200mm sweep, and gold accent trims.",
    image: "/images/crompton-ceiling-fan.jpg"
  },
  {
    id: "gal-crompton-bldc",
    title: "Crompton Energion 5-Star BLDC Energy Saver Ceiling Fan",
    category: "Fans & Ventilation",
    badge: "28W ActivBLDC Motor",
    description: "Modern matte finish 3-blade aerodynamic BLDC fan with smart handheld RF remote controller.",
    image: "/images/crompton-energion-bldc.jpg"
  },
  {
    id: "gal-havells-ceiling-fan",
    title: "Havells Stealth Air 1200mm High-Efficiency Ceiling Fan",
    category: "Fans & Ventilation",
    badge: "40W Low Power • 245 m³/min",
    description: "Whisper quiet aerodynamic 3-blade designer ceiling fan with 280 r/min high speed and 1200mm sweep.",
    image: "/images/havells-ceiling-fan.jpg"
  },
  {
    id: "gal-havells-pedestal",
    title: "Havells High-Speed Oscillating Pedestal Stand Fan",
    category: "Fans & Ventilation",
    badge: "Telescopic Height Adjust",
    description: "Heavy-duty stand fan with metallic blades, thermal overload protection, and wide oscillation.",
    image: "/images/havells-pedestal-fan.jpg"
  },
  {
    id: "gal-crompton-wall",
    title: "Crompton High-Air Delivery Oscillating Wall Fan",
    category: "Fans & Ventilation",
    badge: "90° Smooth Sweep",
    description: "Customizable 3-speed wall fan with dual pull cord control and 10° vertical tilt adjustment.",
    image: "/images/crompton-wall-fan.jpg"
  },
  {
    id: "gal-crompton-batten",
    title: "Crompton Laser Ray High-Lumen LED Batten Light",
    category: "Lighting & Gate Lights",
    badge: "Eye Comfort Flicker-Free",
    description: "High-efficiency aluminium spine LED batten with wide angle glare-free diffuser.",
    image: "/images/crompton-led-batten.jpg"
  },
  {
    id: "gal-havells-led",
    title: "Havells Adore Ultra-Slim Recessed LED Panel Light",
    category: "Lighting & Gate Lights",
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
    title: "V-Guard Valco & Victo Water Heaters (3L to 25L)",
    category: "Water Heaters & Geysers",
    badge: "Instant & Storage",
    description: "Stainless steel and titanium glasslined inner tank geysers suitable for multi-story buildings.",
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
    category: "Switches & Electricals",
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
  heroSubtitle: "Premium electrical goods, Havells & Crompton fans, Finolex pipes, V-Guard geysers, water tanks, motors, and sanitaryware — all in one trusted place.",
  phone: "+91 74187 18077",
  phoneFormatted: "+91 74187 18077",
  whatsapp: "+91 74187 18077",
  email: "srikrishnatraders@gmail.com",
  address: "460/7, Tiruchengode Main Road (Near Collector Office), Thummankurichi, Namakkal, Tamil Nadu 637003",
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
