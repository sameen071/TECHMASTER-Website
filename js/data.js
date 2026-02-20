// Products scraped from mskcomputers.lk to match user request
const initialProducts = [
  { id: 'MSK-001', name: 'USED 24INCH IPS MONITOR WITH HDMI (MIX BRAND)', category: 'Monitors', price: 15000, condition: 'Used/Refurbished', warranty: 'Checking Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/499fc5f58cdc6c40e1004ef32f12c8d2.jpg', brand: 'Various' },
  { id: 'MSK-002', name: 'USED 17INCH MONITOR (MIX BRANDS)', category: 'Monitors', price: 6800, condition: 'Used/Refurbished', warranty: 'Checking Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/47fe05a924707ee6fb085012f37a356c.jpg', brand: 'Various' },
  { id: 'MSK-003', name: 'USED GTX660 2GB VGA', category: 'Graphic Cards', price: 13500, condition: 'Used/Refurbished', warranty: 'Checking Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/9c5fb5d1a96d99e7b6742e1503c293fb.jpg', brand: 'NVIDIA' },
  { id: 'MSK-004', name: 'MSK 6 PIN 02 BLACK FAN', category: 'Cooling', price: 1500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/646453924e9641c91a2b351ce5080e1f.jpg', brand: 'MSK' },
  { id: 'MSK-005', name: 'LOVINGCOOL MSK PWM03 BLACK FAN', category: 'Cooling', price: 1800, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/3d218340009539ada7f27a7fcca1f379.jpg', brand: 'Lovingcool' },
  { id: 'MSK-006', name: 'LOVINGCOOL ARGB 3PIN REVERSE FAN WITH BLACK BLADES', category: 'Cooling', price: 2000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/76e623686ac2812e04ad3c1566b61e45.jpg', brand: 'Lovingcool' },
  { id: 'MSK-007', name: 'LOVINGCOOL ARGB 3PIN REVERSE FAN WITH WHITE BLADES', category: 'Cooling', price: 2000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/a0b53553144401b5f760be6135605a9b.jpg', brand: 'Lovingcool' },
  { id: 'MSK-008', name: 'GALAXY V2 BLACK FAN WITH DISPLAY', category: 'Cooling', price: 5900, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/d1d12b791206aa211c4dbb683a4584db.jpg', brand: 'Galaxy' },
  { id: 'MSK-009', name: 'EPSON LQ-310 ORIGINAL RIBBON', category: 'Printers', price: 2000, condition: 'Brand New', warranty: 'Checking Warranty', stockStatus: 'In Stock', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400', brand: 'Epson' },
  { id: 'MSK-010', name: 'NVME HEATSINK', category: 'Accessories', price: 2500, condition: 'Brand New', warranty: 'Checking Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/c18697ded7a1cc074c04b4f253e0d08c.jpg', brand: 'Generic' },
  { id: 'MSK-011', name: 'CORSAIR MP600 PRO NH 1TB PCLE GEN4 M.2 NVME SSD', category: 'Storage', price: 46000, condition: 'Brand New', warranty: '3 Years Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/28dd6cb9b6c18c97445e406398d1a40c.png', brand: 'Corsair' },
  { id: 'MSK-012', name: 'VIEWSONIC VA221A H 21.5INCH IPS FHD 120HZ MONITOR', category: 'Monitors', price: 26000, condition: 'Brand New', warranty: '3 Years Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/3a38496ad2755551d864765293800d2c.png', brand: 'ViewSonic' },
  { id: 'MSK-013', name: 'ANTEC VX320 CASING ( WITH 04 ARGB FANS )', category: 'Casings', price: 13000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/b82076a022ded04624f95c2457475dd5.png', brand: 'Antec' },
  { id: 'MSK-014', name: 'BIAZE HDMI TO DVI ADAPTER', category: 'Cables & Converters', price: 1500, condition: 'Brand New', warranty: 'Checking Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/015d8e44b8ed65ead173107e122038a1.jpg', brand: 'Biaze' },
  { id: 'MSK-015', name: 'LEXAR DDR4 8GB 3200MHZ DESKTOP RAM', category: 'Memory (RAM)', price: 15750, condition: 'Brand New', warranty: 'Lifetime Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/744342e9c2219cba4f19487345c07eaa.png', brand: 'Lexar' },
  { id: 'MSK-016', name: 'LOVINGCOOL DP-240-01 BLACK LIQUID COOLER', category: 'Cooling', price: 23500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/4be6d08e190b56cb300489d30fc71554.jpg', brand: 'Lovingcool' },
  { id: 'MSK-017', name: 'LOVINGCOOL AP-400 WHITE AIR COOLER', category: 'Cooling', price: 9000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/7ea7bbd35b02cfed5eff83d3644f4692.jpg', brand: 'Lovingcool' },
  { id: 'MSK-018', name: 'LOVINGCOOL AP-400 BLACK AIR COOLER', category: 'Cooling', price: 8500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/0168b76319dbc8b516bf584f6f256f8f.jpg', brand: 'Lovingcool' },
  { id: 'MSK-019', name: 'LOVINGCOOL AP-600 BLACK AIR COOLER', category: 'Cooling', price: 10000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/093b5bc523db410af746f906c1017e42.jpg', brand: 'Lovingcool' },
  { id: 'MSK-020', name: 'LOVINGCOOL AP-600 WHITE AIR COOLER', category: 'Cooling', price: 10500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/948d6033905b56920f5d665e903e127b.jpg', brand: 'Lovingcool' },
  { id: 'MSK-021', name: 'LOVINGCOOL LC-D400 BLACK AIR COOLER', category: 'Cooling', price: 8500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/0007b95c526cb390bb8b0e6f0a216497.jpg', brand: 'Lovingcool' },
  { id: 'MSK-022', name: 'LOVINGCOOL LC-D400 WHITE AIR COOLER', category: 'Cooling', price: 8500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/e89674a0956f7c08a6469788c6d58814.png', brand: 'Lovingcool' },
  { id: 'MSK-023', name: 'FANTECH K515 KEYBOARD', category: 'Keyboard & Mouse', price: 4500, condition: 'Brand New', warranty: '6 Months Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/2983da48d651f11a09d52f45e2795f9d.jpg', brand: 'Fantech' },
  { id: 'MSK-024', name: 'LOVINGCOOL DP-360-02 BLACK LIQUID COOLER WITH IPS DISPLAY', category: 'Cooling', price: 30000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/282ae92a7cf5457cb6907c0e4c0b0f00.jpg', brand: 'Lovingcool' },
  { id: 'MSK-025', name: 'LOVINGCOOL 8PATH BLACK LUMINOUS ARGB STRIP', category: 'Cooling', price: 2500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/060f13102f89a819095903c06f597a26.jpg', brand: 'Lovingcool' },
  { id: 'MSK-026', name: 'HIKSEMI DDR5 16GB 5600MHZ RAM ( PC BULID ONLY )', category: 'Memory (RAM)', price: 48500, condition: 'Brand New', warranty: 'Lifetime Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/bd534b128424d86a21b348fffaa6b6d7.png', brand: 'HIKSEMI' },
  { id: 'MSK-027', name: 'ANTEC VX310 CASING ( WITH 4 ARGB FANS )', category: 'Casings', price: 9500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/bdf9765237f8d9a540839c93f3266478.png', brand: 'Antec' },
  { id: 'MSK-028', name: 'USED 22INCH IPS FRAMELESS MONITOR', category: 'Monitors', price: 15500, condition: 'Used/Refurbished', warranty: 'Checking Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/859e782efc6dd97324bb816bddc48f3e.jpg', brand: 'Various' },
  { id: 'MSK-029', name: 'TWINMOS DDR5 16GB 5600MHZ RAM', category: 'Memory (RAM)', price: 67500, condition: 'Brand New', warranty: 'Lifetime Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/29e53778a0af3e76cfef24f6dbbdf61a.png', brand: 'TwinMOS' },
  { id: 'MSK-030', name: 'AZUZ EY120 ARGB BLACK FAN KIT', category: 'Cooling', price: 8000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/24940280334ba0d7bb91a32455424cc0.jpeg', brand: 'Azuz' },
  { id: 'MSK-031', name: 'BIAZE 1.5M VGA CABLE', category: 'Cables & Converters', price: 700, condition: 'Brand New', warranty: 'Checking Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/3ddd3662fad534de56175da5a4888533.jpg', brand: 'Biaze' },
  { id: 'MSK-032', name: 'M.2/NVME ENCLOSURE', category: 'Storage', price: 3000, condition: 'Brand New', warranty: '6 Months Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/43ad3a3260ae84fb3d7d4c6f363066ba.jpg', brand: 'Generic' },
  { id: 'MSK-033', name: 'RGB GAMING CHAIR', category: 'Accessories', price: 55000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/75fc46173f53582d99b1f86560859185.jpeg', brand: 'Generic' },
  { id: 'MSK-034', name: 'MEETION M100 MOUSE', category: 'Keyboard & Mouse', price: 1200, condition: 'Brand New', warranty: '6 Months Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/864c5e3bb0dfaed20209984babae427c.png', brand: 'Meetion' },
  { id: 'MSK-035', name: 'JEDEL S-561 SPEAKER', category: 'Accessories', price: 3500, condition: 'Brand New', warranty: '6 Months Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/49a430226edd9f604e716940d36464f0.jpeg', brand: 'Jedel' },
  { id: 'MSK-036', name: 'JEDEL GH-562 RGB GAMING HEADSET', category: 'Accessories', price: 5800, condition: 'Brand New', warranty: '6 Months Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/7b3abaeb5afbc3d8c8d58504ec18384d.jpeg', brand: 'Jedel' },
  { id: 'MSK-037', name: 'RAPTOR H3203 CASING ( WITH OUT FANS )', category: 'Casings', price: 6000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/d099a9441f98ca312892018d3e13a5a7.jpeg', brand: 'Raptor' },
  { id: 'MSK-038', name: 'FANTECH X9 THOR GAMING MOUSE', category: 'Keyboard & Mouse', price: 3000, condition: 'Brand New', warranty: '6 Months Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/17541f39514f606b0b615fa88a159c2d.jpeg', brand: 'Fantech' },
  { id: 'MSK-039', name: 'LB-LINK AC650 BLUETOOTH & WIFI ADAPTER', category: 'Accessories', price: 2600, condition: 'Brand New', warranty: '6 Months Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/c229cd0675da7a806023bbca59c2c91b.png', brand: 'LB-LINK' },
  { id: 'MSK-040', name: 'MSK MOLEX 01 WHITE FAN', category: 'Cooling', price: 1300, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/db216e3d7410e230d99b8c9a231043d4.jpeg', brand: 'MSK' },
  { id: 'MSK-041', name: 'MSK MOLEX 01 BLACK FAN', category: 'Cooling', price: 1300, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/9e07b11ceb2d1b0b79a11310b2b7ea90.jpg', brand: 'MSK' },
  { id: 'MSK-042', name: 'MSK 6 PIN 01 BLACK FAN', category: 'Cooling', price: 1500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/b0b87d18fd3376118eb8001e3ce90d8a.jpg', brand: 'MSK' },
  { id: 'MSK-043', name: 'MSK PWM01 WHITE FAN', category: 'Cooling', price: 1800, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/d16370c5e63fc2c052a23047c4d57519.jpg', brand: 'MSK' },
  { id: 'MSK-044', name: 'MSK PWM02 BLACK FAN', category: 'Cooling', price: 1800, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/059ee328f93af22bbb9dee9af9f11e75.jpg', brand: 'MSK' },
  { id: 'MSK-045', name: 'MSK PWM01 BLACK FAN', category: 'Cooling', price: 1800, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/ab8af53aa6f5c9c053a8d7f40ac02d2b.jpg', brand: 'MSK' },
  { id: 'MSK-046', name: 'GAMDIAS MARS E4M CASE WITH POWER SUPPLY', category: 'Casings', price: 9500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/69d70173529d8aadf4fe7d620cd74337.png', brand: 'Gamdias' },
  { id: 'MSK-047', name: 'GAMDIAS MARS E5M CASE WITH POWER SUPPLY', category: 'Casings', price: 9500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/1a88c797c60f614041ae854fc3fdf186.png', brand: 'Gamdias' },
  { id: 'MSK-048', name: 'ANTEC DF600 FLUX CASE', category: 'Casings', price: 21500, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/7c195d6008613e021f7ac1d5843ca6aa.png', brand: 'Antec' },
  { id: 'MSK-049', name: 'ANTEC DF700 FLUX CASE', category: 'Casings', price: 23000, condition: 'Brand New', warranty: '1 Year Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/88766617417aa07f7cbcfad8ea3bb261.png', brand: 'Antec' },
  { id: 'MSK-050', name: 'INTEL CORE ULTRA 5 225 PROCESSOR', category: 'Processors', price: 57500, condition: 'Brand New', warranty: '3 Years Warranty', stockStatus: 'In Stock', image: 'https://billing.mskcomputers.lk/assets/uploads/1715421521_ultra5.webp', brand: 'Intel' }
];

class DataStore {
  // Syncs with pos_inventory
  static getProducts() {
    let posInventory = localStorage.getItem('pos_inventory');
    if (posInventory) {
      let parsed = JSON.parse(posInventory);
      if (parsed.length > 0) {
        return parsed.map(item => ({
          id: item.id || 'N/A',
          name: item.name || 'Unnamed Product',
          category: item.category || 'Tech Gadgets',
          price: parseFloat(item.price || item.sellPrice || 0),
          condition: item.condition || 'Brand New',
          warranty: item.warranty || 'Checking Warranty',
          stockStatus: (item.stock > 0 || item.qty > 0) ? 'In Stock' : 'Out of Stock',
          image: item.image || 'https://via.placeholder.com/400x400/12161f/00E5FF?text=Techmaster',
          brand: item.brand || 'Generic'
        }));
      }
    }

    // Fallback to local website DB
    let products = localStorage.getItem('techmaster_products');

    // Check if lengths are different, meaning initial data was likely updated by code but not synced
    if (!products || JSON.parse(products).length < initialProducts.length) {
      localStorage.setItem('techmaster_products', JSON.stringify(initialProducts));
      return initialProducts;
    }
    return JSON.parse(products);
  }

  static saveProducts(products) {
    // Admin panel saves here for demo, but real sync would write to POS too.
    localStorage.setItem('techmaster_products', JSON.stringify(products));
  }

  // Syncs with pos_repairs
  static getRepairs() {
    let posRepairs = localStorage.getItem('pos_repairs');
    let trackerFormatted = {};

    if (posRepairs) {
      let parsed = JSON.parse(posRepairs);
      parsed.forEach(r => {
        trackerFormatted[r.id] = {
          status: r.status,
          device: (r.type ? r.type + ' - ' : '') + r.device,
          issue: r.problem,
          cost: r.estCost ? 'Rs. ' + r.estCost : 'N/A',
          updatedAt: r.date
        };
      });
      return trackerFormatted;
    }

    // Fallback Dummy Data
    return {
      'JOB-5001': {
        status: 'In Progress',
        device: 'Dell Inspiron 3593 Laptop',
        issue: 'Motherboard short circuit repair',
        updatedAt: '2026-02-20'
      }
    };
  }
}

window.DataStore = DataStore;
