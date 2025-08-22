// import restaurant1 from "/img/Restaurant/restaurant1.webp";
// import restaurant2 from "/img/Restaurant/restaurant2.webp";
// import restaurant3 from "/img/Restaurant/restaurant3.webp";
// import restaurant4 from "/img/Restaurant/restaurant4.webp";
// import foodA1 from "/img/Restaurant/foodA1.webp";
// import foodA2 from "/img/Restaurant/foodA2.webp";
// import foodA3 from "/img/Restaurant/foodA3.webp";
// import foodB1 from "/img/Restaurant/foodB1.webp";
// import foodB2 from "/img/Restaurant/foodB2.webp";
// import foodB3 from "/img/Restaurant/foodB3.webp";
// import foodC1 from "/img/Restaurant/foodC1.webp";
// import foodC2 from "/img/Restaurant/foodC2.webp";
// import foodC3 from "/img/Restaurant/foodC3.webp";
// import foodD1 from "/img/Restaurant/foodD1.webp";
// import foodD2 from "/img/Restaurant/foodD2.webp";
// import foodD3 from "/img/Restaurant/foodD3.webp";
// //================================================
// import foodkiosk1 from "/img/FoodKiosk/kiosk1.webp";
// import foodkiosk2 from "/img/FoodKiosk/kiosk2.webp";
// import foodkiosk3 from "/img/FoodKiosk/kiosk3.webp";
// import foodkiosk4 from "/img/FoodKiosk/kiosk4.webp";
// import snacksA1 from "/img/FoodKiosk/snacksA1.webp";
// import snacksA2 from "/img/FoodKiosk/snacksA2.webp";
// import snacksA3 from "/img/FoodKiosk/snacksA3.webp";
// import snacksB1 from "/img/FoodKiosk/snacksB1.webp";
// import snacksB2 from "/img/FoodKiosk/snacksB2.webp";
// import snacksB3 from "/img/FoodKiosk/snacksB3.webp";
// import snacksC1 from "/img/FoodKiosk/snacksC1.webp";
// import snacksC2 from "/img/FoodKiosk/snacksC2.webp";
// import snacksC3 from "/img/FoodKiosk/snacksC3.webp";
// import snacksD1 from "/img/FoodKiosk/snacksD1.webp";
// import snacksD2 from "/img/FoodKiosk/snacksD2.webp";
// import snacksD3 from "/img/FoodKiosk/snacksD3.webp";
// //================================================
// import specialfood1 from "/img/SpecialFood/food1.webp";
// import specialfood2 from "/img/SpecialFood/food2.webp";
// import specialfood3 from "/img/SpecialFood/food3.webp";
// import specialfood4 from "/img/SpecialFood/food4.webp";
// //================================================
// import subscription1 from "/img/subscription/subscription1.webp";
// import subscription2 from "/img/subscription/subscription2.webp";
// import subscription3 from "/img/subscription/subscription3.webp";
export const navlist=[
    {
        id:1,
        text:"home",
        link:"/",
        submenuid:0
    },
    {
        id:2,
        text:"latest news",
        link:"/news",
        submenuid:0
    },
    {
        id:3,
        text:"facilitiese",
        link:"/facilities",
        submenuid:0
    },
     {
        id:4,
        text:"Hotel",
        link:"/Hotel",
        submenuid:1
    },
    {
        id:5,
        text:"tickets",
        link:"/tickets",
        submenuid:0
    },
    {
        id:6,
        text:"restaurant",
        link:"/restaurant",
        submenuid:0
    },
    {
        id:7,
        text:"job openings",
        link:"/job_openings",
        submenuid:0
    },
    {
        id:8,
        text:"shop",
        link:"/onlineshop",
        submenuid:0
    }
];
export const navlist_sub=[
    {
        id:1,
        pid:4,
        text:"hotel rooms",
        link:"/hotel_rooms"
    },
    {
        id:2,
        pid:4,
        text:"hotel dining",
        link:"/hotel_dining"
    },
    {
        id:3,
        pid:4,
        text:"hotel facilities",
        link:"/hotel_facilities"
    },
    {
        id:4,
        pid:4,
        text:"hotel booking",
        link:"/hotel_booking"
    }
];
export const secitonitems=[
    {
        id:1,
        img:'./img/home/attraction_1.webp',
        title:'product1',
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odit!",
        price:1399
    },
     {
        id:2,
        img:'./img/home/attraction_2.webp',
        title:'product2',
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odit!",
        price:2399
    },
     {
        id:3,
        img:'./img/home/attraction_3.webp',
        title:'product3',
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odit!",
        price:3399
    },
     {
        id:4,
        img:'./img/home/attraction_4.webp',
        title:'product4',
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odit!",
        price:3399
    },
];
 export const productlist=[
    {
        id:1,
        img:"./img/onlineshop/products/product01.webp",
        title:'Neon Gear Harness',
        description:"Step into the future with the Neon Gear Harness, a sleek exosuit accessory inspired by Hong Kong's high-tech streets. Crafted with glowing LED strips and lightweight carbon fiber, this harness enhances your park adventure with a cyberpunk edge. Perfect for cosplay or immersive role-play, it features adjustable straps and a holographic badge displaying Cantonese glyphs. Rechargeable via USB, it pulses with neon blues and pinks, mirroring Kowloon’s night markets. Durable yet stylish, it’s a must-have for tech enthusiasts exploring the park’s robotic realms. Embrace the fusion of tradition and tomorrow with every step!",
        price:100,
        size:"large"
    },
    {
        id:2,
        img:"./img/onlineshop/products/product02.webp",
        title:'Cyber Blade Replica',
        description:"Wield the Cyber Blade Replica, a stunning prop from the Cyber Blade Challenge, infused with Hong Kong’s martial arts spirit and cyberpunk flair. This foam-tipped sword glows with embedded LEDs, mimicking the neon-drenched alleys of Kowloon. Crafted for safety and style, it features a retractable design and a hilt engraved with futuristic Chinese characters. Ideal for fans and collectors, it doubles as a light-up display piece. Powered by a compact battery, it’s perfect for park reenactments or home decor, blending tradition with cutting-edge tech in every swing! ",
        price:200,
        size:"small"
    },
    {
        id:3,
        img:"./img/onlineshop/products/product03.webp",
        title:'Holo-Drone Toy',
        description:"Unleash the Holo-Drone Toy, a miniature marvel inspired by the park’s futuristic skies over Hong Kong. This remote-controlled drone projects holographic patterns of neon cityscapes, complete with Cantonese street signs. Made with durable plastic and LED accents, it hovers silently, mimicking the drones of our cyberpunk attractions. Perfect for kids and collectors, it includes a charging dock styled like a Kowloon vendor stall. Fly it through your own neon jungle at home, blending high-tech play with Asian-inspired design for endless fun! ",
        price:300,
        size:"Medium"
    },
    {
        id:4,
        img:"./img/onlineshop/products/product04.webp",
        title:'Quantum Jacket',
        description:"Wrap yourself in the Quantum Jacket, a cutting-edge clothing piece reflecting Hong Kong’s cyberpunk skyline. This jacket features embedded LED threads that pulse in sync with park music, crafted from water-resistant fabric with a holographic logo. Inspired by the Quantum Leap Tower, it blends traditional Chinese embroidery with futuristic design. Adjustable cuffs and a hidden pocket for gadgets make it practical for park explorers. Glow through misty nights, embodying the fusion of East and dystopia in every wearable thread! ",
        price:400,
        size:"Medium"
    },
    {
        id:5,
        img:"./img/onlineshop/products/product05.webp",
        title:'Neon Towel',
        description:"Dry off in style with the Neon Towel, a soft yet vibrant accessory inspired by Hong Kong’s neon-lit streets. Featuring a digital print of robotic vendors and Cantonese characters, this towel glows faintly under UV light, adding a cyberpunk twist. Made from quick-dry microfiber, it’s perfect for park water rides or post-adventure refreshment. Compact and lightweight, it folds into a pouch with a glowing zipper. Bring the park’s futuristic allure home with this functional, eye-catching essential! ",
        price:500,
        size:"Medium"
    },
    {
        id:6,
        img:"./img/onlineshop/products/product06.webp",
        title:'Vortex Water Bottle',
        description:"Stay hydrated with the Vortex Water Bottle, designed after the Neon Vortex Ride’s sleek pods. This insulated stainless-steel bottle features a glowing LED base and a lid etched with Hong Kong-inspired circuitry patterns. Keeping drinks cold for 24 hours or hot for 12, it’s perfect for park thrill-seekers. The ergonomic grip and spill-proof cap reflect cyberpunk utility, while neon accents echo Kowloon’s night glow. A must-have for eco-conscious adventurers in a futuristic world! ",
        price:600,
        size:"Medium"
    },
    {
        id:7,
        img:"./img/onlineshop/products/product07.webp",
        title:'Robo-Glove Gear',
        description:"Enhance your grip with the Robo-Glove Gear, a futuristic accessory inspired by Hong Kong’s robotic workforce. Featuring tactile sensors and LED-lit fingertips, this glove boosts dexterity for park challenges. Made from flexible neoprene with a cyberpunk design, it includes a wrist strap with glowing Chinese motifs. Rechargeable via micro-USB, it’s ideal for interactive exhibits or cosplay. Merge tradition with tech in this stylish, functional addition to your park gear!",
        price:700,
        size:"Medium"
    },
    {
        id:8,
        img:"./img/onlineshop/products/product08.webp",
        title:'Cyber-Pet Toy',
        description:"Adopt the Cyber-Pet Toy, a robotic companion inspired by Hong Kong’s neon streets. This interactive toy features LED eyes and responds to touch with sounds of Cantonese market chatter. Crafted from durable plastic, it walks and glows, mimicking park robots. Perfect for kids, it includes a charging base styled like a Kowloon stall. Blend playtime with cyberpunk charm, creating a loyal friend from a futuristic Asian world! ",
        price:800,
        size:"Medium"
    },
];
export const productbanners=[
    {
        id:1,
        img:'./img/onlineshop/products/productgroup01.webp',
    },
    {
        id:2,
        img:'./img/onlineshop/products/productgroup02.webp',
    },
    {
        id:3,
        img:'./img/onlineshop/products/productgroup03.webp',
    },
    {
        id:4,
        img:'./img/onlineshop/products/productgroup04.webp',
    },
];
export const news=[
    {
        id:1,
        img:'./img/news/news01.webp',
        title:'New Robot Show Launch: "Neon Sentinels Unleashed"',
        description:`Cyberpunk Hong Kong is thrilled to announce the launch of its latest attraction, "Neon Sentinels Unleashed," a groundbreaking robot show debuting this weekend. Featuring state-of-the-art animatronics inspired by Hong Kong's bustling night markets fused with cyberpunk dystopia, the 30-minute spectacle includes holographic battles between towering mechs and agile drone performers. Guests will witness synchronized light displays, laser effects, and interactive elements where audience members can control minor robot actions via AR apps. The show runs daily at 8 PM in the Central Neon Arena, with tickets included in park admission. Park director Elena Wong stated, "This show embodies the fusion of Hong Kong's vibrant energy and futuristic innovation, pushing the boundaries of entertainment."
`
    },
     {
        id:2,
        img:'./img/news/news02.webp',
        title:'New Souvenirs Collaboration: Limited Edition with Street Artist "Glitch Kong"',
        description:`In an exciting partnership, Cyberpunk Hong Kong has teamed up with renowned Hong Kong street artist "Glitch Kong" for a new line of exclusive souvenirs. The collection includes neon-glowing keychains, holographic postcards depicting iconic cyberpunk skyline views of Victoria Harbour, and customizable LED masks inspired by traditional lion dances reimagined in a high-tech style. Available starting next week at the park's Cyber Bazaar, these items blend local cultural motifs with glitch art aesthetics. "Glitch Kong" shared, "It's about capturing the chaotic beauty of Hong Kong's streets in a cyber world." Prices start at HK$50, with limited stock—perfect for collectors and fans alike.`
    },
    {
        id:3,
        img:'./img/news/news03.webp',
        title:'Adverse Weather Arrangement: Enhanced Protocols for Typhoon Season',
        description:`With typhoon season approaching, Cyberpunk Hong Kong has rolled out updated adverse weather arrangements to ensure guest safety and uninterrupted fun. In the event of Signal 8 or higher, outdoor attractions like the Rooftop Neon Chase will shift to indoor holographic simulations, while the Underground Hacker's Lair expands capacity for sheltered experiences. Real-time weather alerts via the park's app will guide visitors to climate-controlled zones featuring augmented reality storm-themed games. Refunds or rain-check tickets are available for affected days. "Our cyber-enhanced systems monitor conditions in real-time, turning potential disruptions into immersive adventures," said safety officer Kai Leung. Check the park website for live updates.`
    },
    {
        id:4,
        img:'./img/news/news04.webp',
        title:'Summer Offers: "Heatwave Hacker Deals" Promotion',
        description:`Beat the summer heat with Cyberpunk Hong Kong's "Heatwave Hacker Deals," running through September! Enjoy 20% off weekday admissions, buy-one-get-one-free on cyber-fusion street food like neon-lit dim sum and glowing bubble tea, and exclusive access to cooling mist zones with AR water battles. Families can snag bundle packages including fast-pass entry to popular rides like the Vertical Velocity Elevator. "This promotion is designed to make your summer escape as electrifying as our neon lights," noted marketing lead Mia Chen. Book online now to secure spots—limited availability during peak hours.`
    },
];
 export const newsdetails=[
    {
      id:1,
      pid:1,
      img:'./img/news/news01/news01_01.webp',
      title:'“Neon Sentinels Unleashed” Premieres, Ushering in a New Era of Robot Entertainment',
      description:`The highly anticipated robot-themed show Neon Sentinels Unleashed launched recently, delivering a thrilling blend of cutting-edge technology and captivating storytelling. Set in a futuristic world, the series follows a team of advanced AI-driven “Neon Sentinels” robots navigating high-stakes missions in a perilous urban landscape. The premiere episode dazzles with stunning visual effects and gripping narratives, exploring the complex interplay between robots and humans while probing the ethical implications of technological advancement. Showcasing breathtaking robot designs, intricate character development, and unexpected plot twists, the series has quickly captured the attention of global tech enthusiasts and sci-fi fans alike.`
    },
    {
        id:2,
        pid:1,
        img:'./img/news/news01/news01_02.webp',
        title:'Innovative Interactive Experience Redefines Audience Engagement',
        description:`Neon Sentinels Unleashed goes beyond traditional television by incorporating groundbreaking interactive features. Through the official app, viewers can influence the storyline by making choices that impact the Neon Sentinels’ mission decisions and unlock exclusive behind-the-scenes content. Partnering with leading tech companies, the show also introduces an AR (augmented reality) experience, allowing fans to “summon” virtual Neon Sentinels and interact with the high-tech settings of the series’ universe. This immersive approach bridges the gap between audience and narrative, marking a revolutionary step in blending robotics with storytelling. The show is poised to continue pushing the boundaries of technology and entertainment in future seasons, promising even more surprises for its global audience.`
    },
    {
        id:3,
        pid:2,
        img:'./img/news/news02/news02_01.webp',
        title:'Limited Edition Souvenirs Unveiled with Street Artist Glitch Kong',
        description:`A thrilling collaboration between renowned street artist Glitch Kong and a leading souvenir brand has just been announced, launching an exclusive line of limited-edition collectibles that fuse urban art with cultural keepsakes. Known for his vibrant, chaotic digital-inspired murals, Glitch Kong brings his signature neon-drenched, pixelated aesthetic to a range of products including enamel pins, T-shirts, and miniature sculptures. Each piece captures the gritty energy of city streets while incorporating iconic souvenir motifs, creating a bold fusion that appeals to both art collectors and casual fans. With only a limited number available, these items are expected to sell out quickly, sparking excitement among street art enthusiasts worldwide.`
    },
    {
        id:4,
        pid:2,
        img:'./img/news/news02/news02_02.webp',
        title:'Interactive Art Meets Collectible Culture',
        description:`The Glitch Kong collaboration goes beyond traditional souvenirs by integrating interactive elements that elevate the fan experience. Select items, such as keychains and posters, feature QR codes that unlock exclusive digital art drops and behind-the-scenes content showcasing Glitch Kong’s creative process. The collection also includes augmented reality (AR) stickers that, when scanned, project dynamic 3D versions of Kong’s artwork into the real world. This innovative blend of physical and digital art not only celebrates Glitch Kong’s boundary-pushing style but also redefines the souvenir industry, offering collectors a multi-dimensional experience that bridges street culture with cutting-edge technology.`
    },
    {
        id:5,
        pid:3,
        img:'./img/news/news03/news03_01.webp',
        title:'Strengthened Safety Measures for Typhoon Season',
        description:`In response to the increasing intensity of typhoon seasons, new enhanced adverse weather protocols have been introduced to ensure public safety and operational resilience. These measures include advanced early warning systems that leverage real-time meteorological data to provide precise updates on typhoon paths and intensities. Local authorities have also implemented mandatory evacuation plans for high-risk coastal and low-lying areas, supported by designated typhoon shelters equipped with emergency supplies. Businesses and schools are now required to conduct regular typhoon preparedness drills, ensuring swift and coordinated responses to minimize disruptions and protect lives during severe weather events.`
    },
    {
        id:6,
        pid:3,
        img:'./img/news/news03/news03_01.webp',
        title:'Infrastructure Upgrades and Community Preparedness',
        description:`To bolster resilience against typhoons, significant infrastructure improvements have been rolled out, including reinforced flood barriers, upgraded drainage systems, and wind-resistant designs for public buildings. Community engagement programs have also been expanded, offering residents free workshops on emergency preparedness, including how to secure homes and create personal typhoon safety kits. Additionally, a new mobile app provides real-time alerts, shelter locations, and safety tips, enabling residents to stay informed and act quickly. These comprehensive protocols reflect a proactive approach to safeguarding communities and infrastructure, setting a new standard for typhoon season readiness.`
    },
    {
        id:7,
        pid:4,
        img:'./img/news/news04/news04_01.webp',
        title:'Sizzling Summer Savings with Heatwave Hacker Deals',
        description:`The "Heatwave Hacker Deals" promotion is set to ignite the summer with unbeatable offers designed to keep consumers cool and connected. Launched by a leading tech retailer, this campaign features steep discounts on cutting-edge gadgets, including portable air conditioners, smart fans, and energy-efficient wearables tailored for summer adventures. Shoppers can also snag exclusive bundles, such as outdoor projectors paired with wireless speakers, perfect for backyard movie nights. Available both online and in-store, these limited-time deals aim to make summer tech accessible, ensuring everyone can beat the heat while staying plugged into the latest innovations.`
    },
    {
        id:8,
        pid:4,
        img:'./img/news/news04/news04_02.webp',
        title:'Interactive Perks and Eco-Friendly Focus',
        description:`Beyond discounts, the Heatwave Hacker Deals promotion introduces interactive perks to enhance the shopping experience. Customers who purchase select items unlock access to a summer-themed app featuring cooling tips, hydration reminders, and virtual scavenger hunts with chances to win additional tech prizes. The campaign also emphasizes sustainability, with many products made from eco-friendly materials and a portion of proceeds supporting renewable energy initiatives. By blending affordability, interactivity, and environmental consciousness, this promotion redefines summer shopping, appealing to tech-savvy consumers who value both innovation and responsibility.`
    },
];

export const zones = [
  {
    name: "Signature Experiences",
    description: "Experience the ultimate fusion of cyberpunk thrills and Hong Kong flair with our iconic rides and experiences.",
    attractions: [
      { name: "Neon Vortex Ride", image: "/img/facilities/coaster00.webp", description: "Step into the heart-pounding world of the Neon Vortex Ride, where the pulsating energy of a cyberpunk Hong Kong comes alive in a whirlwind of speed and spectacle. This state-of-the-art roller coaster is the crown jewel of our theme park, designed to immerse thrill-seekers in a futuristic metropolis inspired by the neon-drenched streets of Kowloon and the high-tech chaos of a dystopian future. As you strap into your sleek, glowing pod—adorned with holographic displays and ergonomic seats that adjust to your body's contours—the anticipation builds like the hum of a revving fusion engine.", thrill: "High", heightReq: "120cm minimum" },
      { name: "Holo-Dome Bumper", image: "/img/facilities/bumper02.webp", description: "Welcome to the Holo-Dome Arena, a revolutionary bumper car experience that catapults classic fun into the cyberpunk era, infused with the chaotic vibrancy of Hong Kong's street life. Enclosed in a massive, translucent dome that shimmers like a holographic bubble under neon skies, this attraction turns bumping into a high-stakes battle royale. Riders pilot customized bumper cars—sleek, hover-capable vehicles with glowing chassis and customizable LED patterns—that glide across a multi-level arena floor, dodging obstacles and opponents in a frenzy of controlled chaos.", thrill: "Medium", heightReq: "120cm minimum" },
      { name: "Blade Challenge", image: "/img/facilities/robots02.webp", description: "Dive into the Cyber Blade Challenge, an immersive robot-related experience that thrusts you into the gritty underbelly of a cyberpunk Hong Kong, where man and machine clash in epic duels. This attraction pits guests against advanced robotic opponents in a controlled arena, wielding cyber blades—safe, foam-tipped swords with embedded LEDs and sensors that light up on impact. Drawing from Hong Kong's martial arts heritage and cyberpunk narratives of augmented warriors, it's like stepping into a Wuxia film fused with robotic rebellion.", thrill: "Medium", heightReq: "No" },
      { name: "Quantum Leap Tower", image: "/img/facilities/tower01.webp", description: "Ascend to new heights in the Quantum Leap Tower, a cyberpunk-related experience that blends heart-stopping drops with mind-bending VR, capturing the essence of Hong Kong's vertical urban sprawl in a dystopian twist. This towering attraction simulates quantum leaps through alternate realities, combining a classic drop tower with immersive virtual overlays. Riders board an open-air elevator pod that climbs 150 meters, offering panoramic views of the park's neon skyline, before plummeting in controlled freefalls that feel like jumping between dimensions.", thrill: "Moderate", heightReq: "No" }
    ]
  },
    {
    name: "Shops",
    description: "Discover futuristic treasures and souvenirs infused with neon-lit Asian charm in our unique park stores.",
    attractions: [
      { name: "Neo Gadgets Shop", image: "/img/facilities/gearshop02.webp", description: "Nestled in the glowing crossroads of our cyberpunk-themed park, the Neon Gadgets Shop is a treasure trove of futuristic tech toys and accessories, echoing the bustling electronics markets of Hong Kong's Sham Shui Po. Step inside this vibrant storefront, where shelves brim with neon-lit gadgets that blend high-tech innovation with playful whimsy. From holographic projectors that cast mini cityscapes on your palm to augmented reality glasses that overlay cyberpunk filters on the real world, every item invites exploration and creativity.", thrill: "Moderate", heightReq: "No" },
      { name: "Cyber Shop", image: "/img/facilities/gearshop03.webp", description: "The Cyber Souvenirs Shop stands as a memento haven in our neon-soaked park, capturing the essence of cyberpunk Hong Kong in collectible form. Modeled after the night markets of Temple Street, this shop offers an array of themed keepsakes, from t-shirts emblazoned with holographic prints of park attractions to keychains shaped like quantum portals or cyber blades.", thrill: "Moderate", heightReq: "No"  },
    ]
  },
      {
    name: "Park Map",
    description: "Navigate our neon-drenched wonderland with this guide to all attractions and shops.",
    attractions: [
      // { name: "Neo Gadgets Shop", image: s1, description: "Nestled in the glowing crossroads of our cyberpunk-themed park, the Neon Gadgets Shop is a treasure trove of futuristic tech toys and accessories, echoing the bustling electronics markets of Hong Kong's Sham Shui Po. Step inside this vibrant storefront, where shelves brim with neon-lit gadgets that blend high-tech innovation with playful whimsy. From holographic projectors that cast mini cityscapes on your palm to augmented reality glasses that overlay cyberpunk filters on the real world, every item invites exploration and creativity."},
      // { name: "Cyber Shop", image: s2, description: "The Cyber Souvenirs Shop stands as a memento haven in our neon-soaked park, capturing the essence of cyberpunk Hong Kong in collectible form. Modeled after the night markets of Temple Street, this shop offers an array of themed keepsakes, from t-shirts emblazoned with holographic prints of park attractions to keychains shaped like quantum portals or cyber blades." },
    ]
  },
];

export const robots = [
  {
    name: 'Neo-Samurai',
    personality: 'Honorable and strategic, embodying the bushido code in a digital age.',
    strengths: 'Masterful swordsmanship, enhanced reflexes for quick parries and strikes.',
    weaknesses: 'Susceptible to electromagnetic pulses that disrupt circuits; limited range in attacks.',
    profilePic: "/img/facilities/samurai02.webp",
  },
  {
    name: 'Shadow Hacker',
    personality: 'Stealthy and cunning, a digital trickster who thrives in shadows and code.',
    strengths: 'Invisibility cloaking, hacking enemy systems mid-battle for disruptions.',
    weaknesses: 'Fragile frame with low physical durability; over-relies on tech that can be jammed.',
    profilePic: "/img/facilities/hacker01.webp", 
  },
  {
    name: 'Quantum Droid',
    personality: 'Unpredictable and innovative, a genius that bends reality with quantum logic.',
    strengths: 'Teleportation abilities, phase-shifting to avoid hits and appear behind foes.',
    weaknesses: 'High energy consumption leading to quick burnout; unstable in prolonged fights.',
    profilePic: "/img/facilities/droid01.webp", 
  },
  {
    name: 'Cyber-Ninja',
    personality: 'Agile and elusive, a silent assassin programmed for precision kills.',
    strengths: 'Extreme speed and acrobatics, dual-wielding blades for rapid combos.',
    weaknesses: 'Low defense against area-of-effect attacks; relies on surprise, weak in open confrontations.',
    profilePic: "/img/facilities/ninja01.webp",
  },
];
/*
export const restaurants = [
    {   
        id: 1,
        image: restaurant1,
        location: "Futuristic land",
        name: "Pixelfood",
        maininfo: "Pixelfood offers a warm and inviting dining experience that celebrates the rich flavors of Western cuisine.",
        itemimage1: foodA1,
        iteminfo1: "Pixel Burger",
        itemprice1: 40,
        itemimage2: foodA2,
        iteminfo2: "Pixel Steak",
        itemprice2: 60,
        itemimage3: foodA3,
        iteminfo3: "Pixel Healthy Set",
        itemprice3: 80,
    },
    {   
        id: 2,
        image: restaurant2,
        location: "Dystopian World",
        name: "Griddiner",
        maininfo: "Welcome to The Griddiner, where culinary abundance meets warm hospitality in a vibrant, family-friendly setting.",
        itemimage1: foodB1,
        iteminfo1: "Chinese Buffet",
        itemprice1: "300 per person",
        itemimage2: foodB2,
        iteminfo2: "Western Buffet",
        itemprice2: "300 per person",
        itemimage3: foodB3,
        iteminfo3: "Fusion Buffet",
        itemprice3: "300 per person",
    },
    {   
        id: 3,
        image: restaurant3,
        location: "High-tech centre",
        name: "Synthfood",
        maininfo: "Savor expertly crafted dishes such as fresh sushi and flavorful ramen, all prepared with high-quality ingredients. ",
        itemimage1: foodC1,
        iteminfo1: "Beef Rice",
        itemprice1: 80,
        itemimage2: foodC2,
        iteminfo2: "Japanese Sushi set",
        itemprice2: 80,
        itemimage3: foodC3,
        iteminfo3: "Deli Ramen",
        itemprice3: 80,
    },
    {
    id: 4,
        image: restaurant4,
        location: "Neon Space",
        name: "Lyonrice",
        maininfo: "Lyonrice is a well-loved restaurant that specializes in serving flavorful and satisfying Filipino-style rice meals.",
        itemimage1: foodD1,
        iteminfo1: "Sinangag",
        itemprice1: 80,
        itemimage2: foodD2,
        iteminfo2: "Sticky Rice Cake",
        itemprice2: 80,
        itemimage3: foodD3,
        iteminfo3: "Yellow Rice",
        itemprice3: 80,
    },
];

export const foodkiosks = [
    {   
        id: 1,
        image: foodkiosk1,
        location: "Futuristic land",
        name: "CYER",
        maininfo: "An accessible place where users can relax while enjoying a coffee or snack in a lively, technology-focused setting.",
        itemimage1: snacksA1,
        iteminfo1: "Ice Coffee",
        itemprice1: 30,
        itemimage2: snacksA2,
        iteminfo2: "Healthy Sandwich",
        itemprice2: 40,
        itemimage3: snacksA3,
        iteminfo3: "Coffee Cake",
        itemprice3: 25,
    },
    {   
        id: 2,
        image: foodkiosk2,
        location: "Neon Space",
        name: "NeonFeast",
        maininfo: "It offers a vibrant experience featuring authentic Thai snacks, prepared with fresh ingredients and bold, aromatic flavors.",
        itemimage1: snacksB1,
        iteminfo1: "Mee Krob",
        itemprice1: 40,
        itemimage2: snacksB2,
        iteminfo2: "Moo Ping",
        itemprice2: 40,
        itemimage3: snacksB3,
        iteminfo3: "Thai Fried Chicken",
        itemprice3: 40,
    },
    {   
        id: 3,
        image: foodkiosk3,
        location: "Dystopian World",
        name: "DigitalBento",
        maininfo: "It offers a casual, accessible way to enjoy Japanese snacks with an emphasis on quality and quick service.",
        itemimage1: snacksC1,
        iteminfo1: "Takoyaki",
        itemprice1: 40,
        itemimage2: snacksC2,
        iteminfo2: "Okonomiyaki",
        itemprice2: 40,
        itemimage3: snacksC3,
        iteminfo3: "Gyoza",
        itemprice3: 40,
    },
    {
        id: 4,
        image: foodkiosk4,
        location: "High-tech centre",
        name: "SweetBytes",
        maininfo: "It offers a fast-paced treat experience featuring a variety of desserts, crafted with fresh ingredients and appealing flavors. ",
        itemimage1: snacksD1,
        iteminfo1: "Icecream",
        itemprice1: 20,
        itemimage2: snacksD2,
        iteminfo2: "Cannoli",
        itemprice2: 20,
        itemimage3: snacksD3,
        iteminfo3: "Egg Waffle",
        itemprice3: 30,
    },
];

export const specialfoods = [
    {  
        id: 1,
        specialfoodsimg: specialfood1, 
        title: "Kids meal",
        description: "Here you can enjoy both adorable kids plates and substantial main dishes. However, you may also send requests to the restaurants by pressing the below button preferably 24 hours in advance. "
    },
    {  
        id: 2,
        specialfoodsimg: specialfood2, 
        title: "Plant-based menu items",
        description: "Plant-based meal is available in the park and at the hotels of the Cyberpunk Hong Kong. However, you may also send requests to the restaurants by pressing the below button preferably 24 hours in advance. "
    },
    {  
        id: 3,
        specialfoodsimg: specialfood3, 
        title: "Halal Cuisine",
        description: "Halal-certified food is available in the park and at the hotels of the Cyberpunk Hong Kong. However, you may send you concerns to the restaurants by pressing the below button preferably 24 hours in advance."
    },
    {  
        id: 4,
        specialfoodsimg: specialfood4, 
        title: "Dietary requirements",
        description: "Many Cyberpunk Hong Kong restaurants can accommodate the common food allergies. However, you may also send requests to the restaurants by pressing the below button preferably 24 hours in advance. "
    },
];

export const subscription = [
        {  
        id: 1,
        image: subscription1, 
        title: "Copper",
        price: "HK$599 per year",
        advantage1:"Unlimited access for all operation weekdays",
        advantage2:"10% off car parking discount",
        advantage3:"10% off shopping discount",
        advantage4:"10% off hotel, food and Beverage discount",
        advantage5:"Birthday offers to celebrate your western birthday date",

    },
    {  
        id: 2,
        image: subscription2, 
        title: "Sliver",
        price: "HK$799 per year",
        advantage1:"Unlimited access for all operations days",
        advantage2:"15% off car parking discount",
        advantage3:"15% off shopping discount",
        advantage4:"15% off hotel, food and Beverage discount",
        advantage5:"Birthday offers to celebrate your birthday month"
    },
    {  
        id: 3,
        image: subscription3, 
        title: "Gold",
        price: "HK$999 per year",
        advantage1:"Unlimited access for all operations days",
        advantage2:"30% off car parking discount",
        advantage3:"30% off shopping discount",
        advantage4:"30% off hotel, food and Beverage discount",
        advantage5:"Birthday offers to celebrate your birthday month"
    },
]*/

//vitor data
export const hotel_rooms = [
    {
        id: 1,
        link: "/hotel_rooms_standard",
        image: "/img/hotel_rooms/hotel_rooms_001.webp", 
        type: "standard room", 
        size_sqf: "2160", 
        size_sqm: "200", 
        view: "cyberpunk city view", 
        beds: "1 queen bed",
        list1: "In-room safe deposit box",
        list2: "Laundry and dry-cleaning services",
        list3: "Double-glazed floor-to-ceiling windows",
        list4: "Complimentary Wi-Fi Internet access",
        list5: "55' 4K UHD Smart TV with local, international channels and screen mirroring options",
        list6: "BALMAIN bathroom amenity collection",
        list7: "Wall-mounted rain shower in all rooms and additional bathtub in king rooms only",
        list8: "Stylish vanity table with illuminated shaving / make-up mirror",
        list9: "Hairdryer and digital bathroom scale",
        list10: "Individual temperature control",
    },
        {
        id: 2,
        link: "/hotel_rooms_deluxe",
        image: "/img/hotel_rooms/hotel_rooms_002.webp", 
        type: "deluxe room", 
        size_sqf: "2700", 
        size_sqm: "250", 
        view: "cyberpunk city view", 
        beds: "1 king bed",
        list1: "In-room safe deposit box",
        list2: "Laundry and dry-cleaning services",
        list3: "Double-glazed floor-to-ceiling windows",
        list4: "Complimentary Wi-Fi Internet access",
        list5: "55' 4K UHD Smart TV with local, international channels and screen mirroring options",
        list6: "BALMAIN bathroom amenity collection",
        list7: "Wall-mounted rain shower in all rooms and additional bathtub in king rooms only",
        list8: "Stylish vanity table with illuminated shaving / make-up mirror",
        list9: "Hairdryer and digital bathroom scale",
        list10: "Individual temperature control",
    },
        {
        id: 3,
        link: "/hotel_rooms_premier",
        image: "/img/hotel_rooms/hotel_rooms_003.webp", 
        type: "premier room", 
        size_sqf: "3240", 
        size_sqm: "300", 
        view: "cyberpunk city view", 
        beds: "1 king bed & 1 queen bed",
        list1: "In-room safe deposit box",
        list2: "Laundry and dry-cleaning services",
        list3: "Double-glazed floor-to-ceiling windows",
        list4: "Complimentary Wi-Fi Internet access",
        list5: "55' 4K UHD Smart TV with local, international channels and screen mirroring options",
        list6: "BALMAIN bathroom amenity collection",
        list7: "Wall-mounted rain shower in all rooms and additional bathtub in king rooms only",
        list8: "Stylish vanity table with illuminated shaving / make-up mirror",
        list9: "Hairdryer and digital bathroom scale",
        list10: "Individual temperature control",
    },
        {
        id: 4,
        link: "/hotel_rooms_grand",
        image: "/img/hotel_rooms/hotel_rooms_004.webp", 
        type: "grand room", 
        size_sqf: "4320", 
        size_sqm: "400", 
        view: "cyberpunk city view", 
        beds: "2 king beds",
        list1: "In-room safe deposit box",
        list2: "Laundry and dry-cleaning services",
        list3: "Double-glazed floor-to-ceiling windows",
        list4: "Complimentary Wi-Fi Internet access",
        list5: "55' 4K UHD Smart TV with local, international channels and screen mirroring options",
        list6: "BALMAIN bathroom amenity collection",
        list7: "Wall-mounted rain shower in all rooms and additional bathtub in king rooms only",
        list8: "Stylish vanity table with illuminated shaving / make-up mirror",
        list9: "Hairdryer and digital bathroom scale",
        list10: "Individual temperature control",
    },
];

export const hotel_dining = [
    {
        id: "1",
        name: "Restaurant A",
        image: "/img/hotel_dining/hotel_dining_restaurant01.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea debitis dolorem ut doloremque, nobis eius! Ullam minima amet quam autem praesentium nobis? Neque, iste? Aliquam necessitatibus fugit porro ducimus.",
        list1: "aaaaaa",
        list2: "bbbbbb",
        list3: "cccccc",
        list4: "dddddd",
    },
    {
        id: "2",
        name: "Restaurant B",
        image: "/img/hotel_dining/hotel_dining_restaurant02.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea debitis dolorem ut doloremque, nobis eius! Ullam minima amet quam autem praesentium nobis? Neque, iste? Aliquam necessitatibus fugit porro ducimus.",
        list1: "aaaaaa",
        list2: "bbbbbb",
        list3: "cccccc",
        list4: "dddddd",
    },
    {
        id: "3",
        name: "Restaurant C",
        image: "/img/hotel_dining/hotel_dining_restaurant03.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea debitis dolorem ut doloremque, nobis eius! Ullam minima amet quam autem praesentium nobis? Neque, iste? Aliquam necessitatibus fugit porro ducimus.",
        list1: "aaaaaa",
        list2: "bbbbbb",
        list3: "cccccc",
        list4: "dddddd",
    },
    {
        id: "4",
        name: "Bar",
        image: "/img/hotel_dining/hotel_dining_bar01.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea debitis dolorem ut doloremque, nobis eius! Ullam minima amet quam autem praesentium nobis? Neque, iste? Aliquam necessitatibus fugit porro ducimus.",
        list1: "aaaaaa",
        list2: "bbbbbb",
        list3: "cccccc",
        list4: "dddddd",
    },
];

export const hotel_facilities = [
    {
        id: "1",
        name: "Swimming Pool",
        image: "/img/hotel_facilities/hotel_facilities_pool.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea debitis dolorem ut doloremque, nobis eius! Ullam minima amet quam autem praesentium nobis? Neque, iste? Aliquam necessitatibus fugit porro ducimus.",
        list1: "aaaaaa",
        list2: "bbbbbb",
        list3: "cccccc",
        list4: "dddddd",
    },
    {
        id: "2",
        name: "GYM",
        image: "/img/hotel_facilities/hotel_facilities_gym.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea debitis dolorem ut doloremque, nobis eius! Ullam minima amet quam autem praesentium nobis? Neque, iste? Aliquam necessitatibus fugit porro ducimus.",
        list1: "aaaaaa",
        list2: "bbbbbb",
        list3: "cccccc",
        list4: "dddddd",
    },
    {
        id: "3",
        name: "SPA",
        image: "/img/hotel_facilities/hotel_facilities_spa.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea debitis dolorem ut doloremque, nobis eius! Ullam minima amet quam autem praesentium nobis? Neque, iste? Aliquam necessitatibus fugit porro ducimus.",
        list1: "aaaaaa",
        list2: "bbbbbb",
        list3: "cccccc",
        list4: "dddddd",
    },
    {
        id: "4",
        name: "Kid's Zone",
        image: "/img/hotel_facilities/hotel_facilities_kidzone.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea debitis dolorem ut doloremque, nobis eius! Ullam minima amet quam autem praesentium nobis? Neque, iste? Aliquam necessitatibus fugit porro ducimus.",
        list1: "aaaaaa",
        list2: "bbbbbb",
        list3: "cccccc",
        list4: "dddddd",
    },
];

export const contact_us_contact_info_table_data = [
    {
        id: "1",
        subject: "General",
        email: "general_cyberpunkhk@gmail.com",
    },
        {
        id: "2",
        subject: "Hotel",
        email: "hotel_cyberpunkhk@gmail.com",
    },
        {
        id: "3",
        subject: "Restaurant",
        email: "restaurant_cyberpunkhk@gmail.com",
    },
        {
        id: "4",
        subject: "Online shop",
        email: "onlineshop_cyberpunkhk@gmail.com",
    },
];

export const contact_us_bus_table_data_hki = [
    {
        id: "1",
        company: "AAA",
        number: "101",
        route: "QQ to WW",
    },
        {
        id: "2",
        company: "BBB",
        number: "670",
        route: "RR to TT",
    },
];

export const contact_us_bus_table_data_kt = [
    {
        id: "1",
        company: "AAA",
        number: "150",
        route: "gg to hh",
    },
        {
        id: "2",
        company: "BBB",
        number: "555",
        route: "UU to BB",
    },
];

export const contact_us_minibus_table_data_nt = [
    {
        id: "1",
        company: "AAA",
        number: "400",
        route: "gg to hh",
    },
        {
        id: "2",
        company: "BBB",
        number: "600",
        route: "UU to BB",
    },
];

export const contact_us_minibus_table_data_hki = [
    {
        id: "1",
        company: "AAA",
        number: "101",
        route: "QQ to WW",
    },
        {
        id: "2",
        company: "BBB",
        number: "670",
        route: "RR to TT",
    },
];

export const contact_us_minibus_table_data_kt = [
    {
        id: "1",
        company: "AAA",
        number: "150",
        route: "gg to hh",
    },
        {
        id: "2",
        company: "BBB",
        number: "555",
        route: "UU to BB",
    },
];

export const contact_us_bus_table_data_nt = [
    {
        id: "1",
        company: "AAA",
        number: "400",
        route: "gg to hh",
    },
        {
        id: "2",
        company: "BBB",
        number: "600",
        route: "UU to BB",
    },
];

export const contact_us_carpark_table_data = [
    {
        id: "1",
        days: "Mon - Fri",
        fee: "$50/hr",
    },
    {
        id: "2",
        days: "Sat - Sun",
        fee: "$70/hr",
    },
];

export const job_openings = [
    {
        id: '1',
        post_date: '15-08-2025',
        job_title: 'Electrical & Mechanical Technician',
        department: 'Rides Maintenance and Ropeway',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '2',
        post_date: '15-08-2025',
        job_title: 'Senior Manager, Risk & Sustainability',
        department: 'Risk & Sustainability',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '3',
        post_date: '15-08-2025',
        job_title: 'Assistant Buying Manager / Senior Buyer (HK$6000 New Joiner Incentive)',
        department: 'ARetail Operations',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '4',
        post_date: '15-08-2025',
        job_title: 'Technical Manager, Ropeway',
        department: 'Rides Maintenance and Ropeway',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '5',
        post_date: '15-08-2025',
        job_title: 'First Aid Supervisor',
        department: 'Space World First Aid',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '6',
        post_date: '15-08-2025',
        job_title: 'Security Operations - Security Guard/Security Guard In-charge/Security Supervisor',
        department: 'Security Operations',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '7',
        post_date: '15-08-2025',
        job_title: 'Short Term / Seasonal Part Time Traffic Attendant ',
        department: 'Transportation Services',
        job_type: 'Part-time / Short-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '8',
        post_date: '15-08-2025',
        job_title: 'Veterinary Intern',
        department: 'Veterinary',
        job_type: 'Part-time / Short-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '9',
        post_date: '15-08-2025',
        job_title: 'Contract Designer',
        department: 'Events & Entertainment',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '10',
        post_date: '15-08-2025',
        job_title: 'Creative Brand Manager (IP Management)',
        department: 'Intellectual Properties Business',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '11',
        post_date: '15-08-2025',
        job_title: 'Ticketing Assistant / Attendant',
        department: 'Main Entrance Operations',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '12',
        post_date: '15-08-2025',
        job_title: 'Technician (Admin/ AV & Lighting)',
        department: 'Events & Entertainment',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '13',
        post_date: '15-08-2025',
        job_title: 'Contract Communications Officer (HK$6000 New Joiner Incentive)',
        department: 'General Services',
        job_type: 'Part-time / Short-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '14',
        post_date: '15-08-2025',
        job_title: 'Food & Beverage - Part Time Job Openings',
        department: 'Food & Beverage',
        job_type: 'Part-time / Short-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '15',
        post_date: '15-08-2025',
        job_title: 'Programme Trainer/ Facilitator',
        department: 'Events & Entertainment',
        job_type: 'Full-time / Long-termSK',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '16',
        post_date: '15-08-2025',
        job_title: 'Parkwide Decoration Assistant',
        department: 'Discovery & Education',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '17',
        post_date: '15-08-2025',
        job_title: 'Field Researcher',
        department: 'Discovery & Education',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '18',
        post_date: '15-08-2025',
        job_title: 'LSO Operator ',
        department: 'Life Support Operations',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '19',
        post_date: '15-08-2025',
        job_title: 'Assistant Clinical Laboratory Manager',
        department: 'Clinical Laboratory',
        job_type: 'Full-time / Long-term',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
        {
        id: '20',
        post_date: '15-08-2025',
        job_title: 'Senior Accounting Assistant',
        department: 'Finance',
        job_type: 'Full-time / Long-termASK',
        link: '#',
        responsibilities1: 'Prepare invoices / vouchers on a daily basis and support the account payables and receivables functions of the Finance Department',
        responsibilities2: 'Perform annual spot check of Fixed Assets',
        responsibilities3: 'Perform monthly surprise stock check and annual stock take',
        responsibilities4: 'Perform ad hoc assignments as and when required',
        requirements1: "Bachelor's Degree in Accounting or at least one year of relevant working experience",
        requirements2: 'Able to work under pressure, and commit to reporting deadlines',
        requirements3: 'Detailed-oriented and with strong sense of responsibilities',
        requirements4: 'Well-organized, and a team player with the ability to work with parties across different departments',
        benefits1: '13-month payment / Gratuity',
        benefits2: 'Medical Insurance (Hospitalization & Outpatient)',
        benefits3: '14 days Paid Leave',
        benefits4: '17 days Public Holiday',
    },
];