const fighterjet = [
  {
    id: 1,
    manufacturer: "Lockheed Martin",
    "aircraft.flag_url":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IpjZJ2wM2UqN5EdkEOLp0TheqCapR0Hffw&s",
    model: "F-22 Raptor",
    type: "Fighter",
    generation: "5th",
    max_speed: "Mach 2.25",
    range: "1,840 miles",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/F-22_Raptor_-_100702-F-4815G-217.jpg/330px-F-22_Raptor_-_100702-F-4815G-217.jpg",
    description:
      "The Lockheed Martin F-22 Raptor is a fifth-generation, single-seat, twin-engine, all-weather stealth tactical fighter aircraft developed for the United States Air Force (USAF).",
  },
  {
    id: 2,
    manufacturer: "Lockheed Martin",
    model: "F-35 Lightning II",
    type: "Multirole",
    generation: "5th",
    max_speed: "Mach 1.6",
    range: "1,200 miles",
    image_url:
      "https://www.brighton-science.com/hs-fs/hubfs/images/blog-images/f35-lightning-ii-strike-fighter.jpeg?width=1275&height=744&name=f35-lightning-ii-strike-fighter.jpeg",
    description:
      "The Lockheed Martin F-35 Lightning II is a family of single-seat, single-engine, all-weather stealth multirole fighters designed for ground-attack and air-superiority missions.",
  },
  {
    id: 3,
    manufacturer: "Boeing",
    model: "F/A-18 Hornet",
    type: "Multirole",
    generation: "4.5th",
    max_speed: "Mach 1.8",
    range: "1,089 miles",
    image_url:
      "https://d3lcr32v2pp4l1.cloudfront.net/Pictures/780xany/6/0/4/69604_usnavyfa18fsuperhornetlaunchesfromroyalairforcelakenheathenglandcusn_311899.jpg",
    description:
      "The Boeing F/A-18 Hornet is a twin-engine, supersonic, all-weather carrier-capable multirole combat jet, designed as both a fighter and attack aircraft.",
  },
  {
    id: 4,
    manufacturer: "Eurofighter GmbH",
    model: "Eurofighter Typhoon",
    type: "Multirole",
    generation: "4.5th",
    max_speed: "Mach 2.0",
    range: "1,802 miles",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Eurofighter_Typhoon_AUT.jpg/375px-Eurofighter_Typhoon_AUT.jpg",
    description:
      "The Eurofighter Typhoon is a twin-engine, canard-delta wing, multirole fighter designed and built by a consortium of European aerospace manufacturers.",
  },
  {
    id: 5,
    manufacturer: "Dassault Aviation",
    model: "Dassault Rafale",
    type: "Multirole",
    generation: "4th",
    max_speed: "Mach 1.8",
    range: "1,852 miles",
    image_url:
      "https://images.dassault-aviation.com/f_auto,q_auto,g_center,dpr_auto/wp-auto-upload/2/files/2017/06/DA00030049_S-1.jpg",
    description:
      "The Dassault Rafale is a French twin-engine, canard-delta wing, multirole fighter aircraft designed and built by Dassault Aviation.",
  },
  {
    id: 6,
    manufacturer: "Saab",
    model: "Saab JAS 39 Gripen",
    type: "Multirole",
    generation: "4th",
    max_speed: "Mach 2.0",
    range: "1,400 miles",
    image_url:
      "https://www.edrmagazine.eu/wp-content/uploads/2023/04/GripenC-LDP.jpeg",
    description:
      "The Saab JAS 39 Gripen is a light single-engine multirole fighter aircraft manufactured by the Swedish aerospace company Saab.",
  },
  {
    id: 7,
    manufacturer: "Mikoyan",
    model: "Mikoyan MiG-29",
    type: "Fighter",
    generation: "4th",
    max_speed: "Mach 2.25",
    range: "1,430 miles",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Russian_Air_Force%2C_747%2C_Mikoyan-Gurevich_MiG-29M2.jpg/450px-Russian_Air_Force%2C_747%2C_Mikoyan-Gurevich_MiG-29M2.jpg",
    description:
      "The Mikoyan MiG-29 is a twin-engine jet fighter aircraft designed in the Soviet Union, developed by the Mikoyan design bureau.",
  },
  {
    id: 8,
    manufacturer: "Sukhoi",
    model: "Sukhoi Su-35",
    type: "Multirole",
    generation: "4++",
    max_speed: "Mach 2.25",
    range: "1,940 miles",
    image_url:
      "https://cdn-media.tass.ru/width/1020_b9261fa1/tass/m2/en/uploads/i/20180219/1187927.jpg",
    description:
      "The Sukhoi Su-35 is a Russian twin-engine, supermaneuverable multirole fighter. It is a derivative of the Su-27 'Flanker' and was initially known as the Su-27M.",
  },
  {
    id: 9,
    manufacturer: "Northrop Grumman",
    model: "Northrop YF-23",
    type: "Stealth Fighter",
    generation: "5th",
    max_speed: "Mach 2.0",
    range: "2,400 miles",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Northrop_YF-23_DFRC.jpg/800px-Northrop_YF-23_DFRC.jpg",
    description:
      "The Northrop YF-23 is an American prototype stealth fighter aircraft designed for the United States Air Force.",
  },
  {
    id: 10,
    manufacturer: "Chengdu Aerospace Corporation",
    model: "Chengdu J-20",
    type: "Stealth Fighter",
    generation: "5th",
    max_speed: "Mach 2.0",
    range: "1,200 miles",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/J-20_at_Airshow_China_2016.jpg",
    description:
      "The Chengdu J-20 is a single-seat, twinjet, all-weather, stealth fifth-generation fighter aircraft developed by China's Chengdu Aerospace Corporation for the People's Liberation Army Air Force (PLAAF).",
  },
];
const BusinessJets = [
  {
    id: 1,
    manufacturer: "Gulfstream Aerospace",
    model: "G650",
    seating_capacity: "up to 19 passengers",
    maximum_speed: "Mach 0.925",
    range: "7,000 nautical miles",
    image_url:
      "https://assets.gulfstream.aero/thedotcom/images/aircraft/g650er/d_g650ER_a_mkt_00186_v02r01_web.jpg",
    description:
      "The Gulfstream G650 is a twin-engine business jet known for its long range, luxurious interior, and high-speed performance.",
  },
  {
    id: 2,
    manufacturer: "Bombardier Aerospace",
    model: "Global 7500",
    seating_capacity: "up to 19 passengers",
    maximum_speed: "Mach 0.925",
    range: "7,700 nautical miles",
    image_url:
      "https://i.insider.com/61f17df0e9964700119082ee?width=1000&format=jpeg&auto=webp",
    description:
      "The Bombardier Global 7500 is an ultra-long-range business jet offering spacious cabins, advanced technology, and high-speed performance.",
  },
  {
    id: 3,
    manufacturer: "Dassault Aviation",
    model: "Falcon 8X",
    seating_capacity: "up to 19 passengers",
    maximum_speed: "Mach 0.90",
    range: "6,450 nautical miles",
    image_url:
      "https://assets.skiesmag.com/wp-content/uploads/2016/10/021_Falcon8X_2016USB51_HD-smaller-800x533.jpg",
    description:
      "The Dassault Falcon 8X is a large-cabin, ultra-long-range business jet offering comfort, efficiency, and performance for intercontinental travel.",
  },
  {
    id: 4,
    manufacturer: "Cessna Aircraft Company",
    model: "Citation Longitude",
    seating_capacity: "up to 12 passengers",
    maximum_speed: "Mach 0.86",
    range: "3,500 nautical miles",
    image_url: "https://skyllence.aero/wp-content/uploads/2022/02/TC-RMK2.jpg",
    description:
      "The Cessna Citation Longitude is a super-midsize business jet offering exceptional range, comfort, and advanced avionics for long-distance travel.",
  },
  {
    id: 5,
    manufacturer: "Embraer Executive Jets",
    model: "Praetor 600",
    seating_capacity: "up to 12 passengers",
    maximum_speed: "Mach 0.83",
    range: "4,018 nautical miles",
    image_url:
      "https://altivationaircraft.com/wp-content/uploads/2019/07/Praetor_600_1_small-300x187.jpg",
    description:
      "The Embraer Praetor 600 is a midsize business jet offering spacious cabins, advanced technology, and long-range capabilities for comfortable travel.",
  },
  {
    id: 6,
    manufacturer: "Bombardier Aerospace",
    model: "Challenger 650",
    seating_capacity: "up to 12 passengers",
    maximum_speed: "Mach 0.85",
    range: "4,000 nautical miles",
    image_url:
      "https://bombardier.com/sites/default/files/styles/retina_1400x1240/public/2020-06/Challenger650_Cutting_cost.jpg?itok=IwnoWTvx",
    description:
      "The Bombardier Challenger 650 is a large-cabin business jet known for its comfort, versatility, and impressive range for intercontinental flights.",
  },
  {
    id: 7,
    manufacturer: "Gulfstream Aerospace",
    model: "G550",
    seating_capacity: "up to 19 passengers",
    maximum_speed: "Mach 0.885",
    range: "6,750 nautical miles",
    image_url:
      "https://d36vpv0zv8va20.cloudfront.net/images/Gulfstream%2BSells%2BLast%2BCommercially%2BAvailable%2BG550.jpg",
    description:
      "The Gulfstream G550 is a long-range business jet offering luxurious accommodations, advanced avionics, and exceptional performance for global travel.",
  },
  {
    id: 8,
    manufacturer: "Bombardier Aerospace",
    model: "Challenger 350",
    seating_capacity: "up to 10 passengers",
    maximum_speed: "Mach 0.83",
    range: "3,200 nautical miles",
    image_url:
      "https://images.aircharterservice.com/global/aircraft-guide/private-charter/bombardier-challenger-350.jpg",
    description:
      "The Bombardier Challenger 350 is a super-midsize business jet known for its comfort, performance, and spacious cabin layout for both work and relaxation.",
  },
  {
    id: 9,
    manufacturer: "Embraer Executive Jets",
    model: "Legacy 650E",
    seating_capacity: "up to 13 passengers",
    maximum_speed: "Mach 0.80",
    range: "3,900 nautical miles",
    image_url:
      "https://www.aircharteradvisors.com/wp-content/uploads/2019/03/Embraer-business-jet-charters.jpg",
    description:
      "The Embraer Legacy 650E is a large-cabin business jet offering comfort, reliability, and performance for long-range travel with spacious cabins and advanced avionics.",
  },
  {
    id: 10,
    manufacturer: "Dassault Aviation",
    model: "Falcon 2000LXS",
    seating_capacity: "up to 10 passengers",
    maximum_speed: "Mach 0.86",
    range: "4,000 nautical miles",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrY-x9ezSjiCXaWHo4YZA3fIwV708lBZkng&s",
    description:
      "The Dassault Falcon 2000LXS is a large-cabin business jet offering exceptional comfort, efficiency, and performance for long-range missions with reduced operating costs.",
  },
];
const BomberAircraft = [
  {
    id: 1,
    manufacturer: "Boeing",
    model: "B-52 Stratofortress",
    role: "Strategic Bomber",
    maximum_speed: "650 mph (1,046 km/h)",
    range: "8,800 miles (14,080 km)",
    image_url:
      "https://sanantonioreport.org/wp-content/uploads/2023/06/201121-F-CC297-9077.jpg",
    description:
      "The Boeing B-52 Stratofortress is a long-range, subsonic, strategic bomber designed and built by Boeing.",
  },
  {
    id: 2,
    manufacturer: "Northrop Grumman",
    model: "B-2 Spirit",
    role: "Stealth Bomber",
    maximum_speed: "Mach 0.95",
    range: "6,900 nautical miles (12,800 km)",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/B-2_Spirits_on_Deployment_to_Indo-Asia-Pacific.jpg/450px-B-2_Spirits_on_Deployment_to_Indo-Asia-Pacific.jpg",
    description:
      "The Northrop Grumman B-2 Spirit, also known as the Stealth Bomber, is an American heavy strategic bomber.",
  },
  {
    id: 3,
    manufacturer: "Tupolev",
    model: "Tu-95 Bear",
    role: "Strategic Bomber",
    maximum_speed: "575 mph (925 km/h)",
    range: "9,400 miles (15,150 km)",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Tupolev_Tu-95_over_Moscow_Kustov_%28cropped%29.jpg/450px-Tupolev_Tu-95_over_Moscow_Kustov_%28cropped%29.jpg",
    description:
      "The Tupolev Tu-95 Bear is a large, four-engine turboprop-powered strategic bomber and missile platform.",
  },
  {
    id: 4,
    manufacturer: "Rockwell",
    model: "B-1 Lancer",
    role: "Strategic Bomber",
    maximum_speed: "Mach 1.25",
    range: "6,478 nautical miles (12,000 km)",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/B-1B_air_refueling.jpg/450px-B-1B_air_refueling.jpg",
    description:
      "The Rockwell B-1 Lancer is a supersonic variable-sweep wing, heavy bomber used by the United States Air Force.",
  },
  {
    id: 5,
    manufacturer: "Sukhoi",
    model: "Su-34 Fullback",
    role: "Strike Bomber",
    maximum_speed: "Mach 1.8",
    range: "2,485 miles (4,000 km)",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MAKS2015part1-10_%28cropped%29.jpg/450px-MAKS2015part1-10_%28cropped%29.jpg",
    description:
      "The Sukhoi Su-34 Fullback is a Russian twin-seat, twin-engine, all-weather supersonic medium-range fighter-bomber.",
  },
  {
    id: 6,
    manufacturer: "Avro Canada",
    model: "Avro Vulcan",
    role: "Strategic Bomber",
    maximum_speed: "Mach 0.96",
    range: "4,647 miles (7,478 km)",
    image_url:
      "https://www.forces.net/sites/default/files/styles/cover_image/public/vulcan_0.jpg?itok=9Uj-BcAB",
    description:
      "The Avro Vulcan is a jet-powered delta wing strategic bomber, operated by the Royal Air Force during the Cold War.",
  },
  {
    id: 7,
    manufacturer: "Handley Page",
    model: "Handley Page Victor",
    role: "Strategic Bomber",
    maximum_speed: "Mach 0.93",
    range: "4,480 miles (7,210 km)",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Handley_Page_HP-80_Victor_K2%2C_UK_-_Air_Force_AN1926561.jpg",
    description:
      "The Handley Page Victor is a British jet-powered strategic bomber, originally developed by Handley Page.",
  },
  {
    id: 8,
    manufacturer: "Consolidated Aircraft",
    model: "B-24 Liberator",
    role: "Heavy Bomber",
    maximum_speed: "290 mph (467 km/h)",
    range: "2,850 miles (4,586 km)",
    image_url:
      "https://cdn.britannica.com/23/100823-050-42762762/US-Army-Air-Forces-B-24-Liberator-bombs-March-19-1945.jpg",
    description:
      "The Consolidated B-24 Liberator is an American heavy bomber, designed and manufactured by Consolidated Aircraft.",
  },
  {
    id: 9,
    manufacturer: "Boeing",
    model: "B-29 Superfortress",
    role: "Heavy Bomber",
    maximum_speed: "357 mph (575 km/h)",
    range: "3,250 miles (5,230 km)",
    image_url:
      "https://media.defense.gov/2014/Apr/18/2000858092/2000/2000/0/140418-F-IO108-022.JPG",
    description:
      "The Boeing B-29 Superfortress is a four-engine propeller-driven heavy bomber, flown primarily by the United States during World War II.",
  },
  {
    id: 10,
    manufacturer: "Boeing",
    model: "B-17 Flying Fortress",
    role: "Heavy Bomber",
    maximum_speed: "287 mph (462 km/h)",
    range: "2,000 miles (3,219 km)",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aAw405QcusOc8Z-3aRkIy_CP0W8k0MD6Hw&s",
    description:
      "The Boeing B-17 Flying Fortress is a four-engine heavy bomber aircraft developed in the 1930s for the United States Army Air Corps.",
  },
];
const cargoAircraft = [
  {
    id: 1,
    manufacturer: "Boeing",
    model: "Boeing 747-8F",
    maximum_speed: " 614 mph (988 km/h),",
    maximum_payload: "140 tonnes",
    maximum_range: "4,390 nautical miles",
    image_url:
      "https://images.aircharterservice.com/global/aircraft-guide/cargo-charter/boeing-b747-8f-1.jpg",
    description:
      "The Boeing 747-8F is a wide-body cargo aircraft, the largest in the Boeing 747 family, with a maximum payload of 140 tonnes.",
  },
  {
    id: 2,
    manufacturer: "Airbus",
    model: "Airbus A330-200F",
    maximum_payload: "70 tonnes",
    maximum_speed: " 913 km/h or 493 kn,",
    maximum_range: "4,000 nautical miles",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvwOWyddY48DytAHDX_OkEGpI6WIDMKkHEA&s",
    description:
      "The Airbus A330-200F is a medium-sized wide-body cargo aircraft with a maximum payload capacity of 70 tonnes.",
  },
  {
    id: 3,
    manufacturer: "Boeing",
    model: "Boeing 777F",
    maximum_payload: "103 tonnes",
    maximum_range: "4,900 nautical miles",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Boeing_777-FS2_N886FD_%22Amara%22_Federal_Express.jpg/330px-Boeing_777-FS2_N886FD_%22Amara%22_Federal_Express.jpg",
    description:
      "The Boeing 777F is a long-range wide-body cargo aircraft with a maximum payload capacity of 103 tonnes.",
  },
  {
    id: 4,
    manufacturer: "Antonov",
    model: "Antonov An-124 Ruslan",
    maximum_speed: "865 km/h ",
    maximum_payload: "150 tonnes",
    maximum_range: "8,430 kilometres",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%BE%D0%B2_%D0%90%D0%BD-124_9773054055093%2C_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0_-_%D0%94%D0%BE%D0%BC%D0%BE%D0%B4%D0%B5%D0%B4%D0%BE%D0%B2%D0%BE_RP2297.jpg",
    description:
      "The Antonov An-124 Ruslan is a strategic airlift cargo aircraft, one of the largest ever mass-produced cargo aircraft, with a maximum payload capacity of 150 tonnes.",
  },
  {
    id: 5,
    manufacturer: "Lockheed Martin",
    model: "Lockheed C-5 Galaxy",
    maximum_payload: "127 tonnes",
    maximum_range: "5,500 nautical miles",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/USAF_C-5_Galaxy_in_flight.jpg/450px-USAF_C-5_Galaxy_in_flight.jpg",
    description:
      "The Lockheed C-5 Galaxy is a large military transport aircraft, designed for heavy intercontinental transport with a maximum payload capacity of 127 tonnes.",
  },
  {
    id: 6,
    manufacturer: "Airbus",
    model: "Airbus A400M Atlas",
    maximum_payload: "37 tonnes",
    maximum_speed: "825 km/h",
    maximum_range: "4,800 nautical miles",
    image_url:
      "https://static.wixstatic.com/media/39df73_58434e0644c246e7a9923a3d72982285~mv2.jpg/v1/fill/w_948,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CT03-In-flight-BAF-Pic.jpg ",
    description:
      "The Airbus A400M Atlas is a European four-engine turboprop military transport aircraft, designed for tactical airlift and strategic oversize cargo transport.",
  },
  {
    id: 7,
    manufacturer: "Boeing",
    model: "Boeing C-17 Globemaster III",
    maximum_payload: "77.5 tonnes",
    maximum_speed: "950 km/h",
    maximum_range: "2,420 nautical miles",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/C-17_test_sortie.jpg/1200px-C-17_test_sortie.jpg",
    description:
      "The Boeing C-17 Globemaster III is a large military transport aircraft, developed for rapid strategic airlift of troops and cargo to main operating bases or forward operating bases.",
  },
  {
    id: 8,
    manufacturer: "Ilyushin",
    model: "Ilyushin Il-76",
    maximum_payload: "50 tonnes",
    maximum_range: "2,700 nautical miles",
    image_url:
      "https://cdn.britannica.com/25/124625-004-3A6942CA/Ilyushin-Il-76.jpg",
    description:
      "The Ilyushin Il-76 is a multi-purpose four-engine turbofan strategic airlifter designed by the Ilyushin design bureau and used by Russia and various other countries.",
  },
  {
    id: 9,
    manufacturer: "Lockheed Martin",
    model: "Lockheed C-130 Hercules",
    maximum_speed: "590 km/h",
    maximum_payload: "21 tonnes",
    maximum_range: "2,360 nautical miles",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hMXKI_oJ8z2cDS-HhoJe92O66P4FNR44FQ&s",
    description:
      "The Lockheed C-130 Hercules is a four-engine turboprop military transport aircraft, capable of using unprepared runways for takeoffs and landings.",
  },
  {
    id: 10,
    manufacturer: "Antonov",
    model: "Antonov An-225 Mriya",
    maximum_payload: "250 tonnes",
    maximum_speed: "850 km/h",
    maximum_range: "8,200 nautical miles",
    image_url:
      "https://images.aircharterservice.com/global/aircraft-guide/cargo-charter/antonov-an-225-5.jpg",
    description:
      "The Antonov An-225 Mriya is a strategic airlift cargo aircraft, designed and produced by the Antonov Design Bureau in the Soviet Union and is the heaviest aircraft ever built.",
  },
];

const ExperimentalAircraft = [
  {
    id: 1,
    manufacturer: "Scaled Composites",
    model: "Scaled Composites Stratolaunch",
    maximum_speed: "650 mph (1,046 km/h)",
    maximum_altitude: "35,000 feet (10,668 meters)",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNjmhSPBCHoaT9FSn-5GQyJLgrkfx433k0g&s",
    description:
      "The Scaled Composites Stratolaunch is an experimental aircraft designed for air-launching space launch vehicles. It has the largest wingspan of any aircraft ever flown.",
  },
  {
    id: 2,
    manufacturer: "Lockheed Martin",
    model: "Lockheed Martin X-59 QueSST",
    maximum_speed: "Mach 1.5",
    maximum_altitude: "55,000 feet (16,764 meters)",
    image_url:
      "https://www.lockheedmartin.com/content/dam/lockheed-martin/aero/photo/QueSST/QueSST_Update11-10-17Render_002.jpg",
    description:
      "The Lockheed Martin X-59 QueSST is an experimental aircraft being developed for NASA's Low-Boom Flight Demonstrator program to test quiet supersonic flight technology.",
  },
  {
    id: 3,
    manufacturer: "Boeing",
    model: "Boeing X-32",
    maximum_speed: "1,600 km/h (990 mph)",
    maximum_altitude: "40,000 feet (12,192 meters)",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/USAF_X32B_250.jpg",
    description:
      "The Boeing X-32 is an experimental aircraft developed for the Joint Strike Fighter program. It competed with the Lockheed Martin X-35 for a production contract.",
  },
  {
    id: 4,
    manufacturer: "NASA",
    model: "NASA X-43A",
    maximum_speed: "Mach 9.6 (7,310 mph or 11,750 km/h)",
    maximum_altitude: "110,000 feet (33,500 meters)",
    image_url:
      "https://www.nasa.gov/wp-content/uploads/2023/03/357521main_ED99-45243-01_full.jpg",
    description:
      "The NASA X-43A is an experimental unmanned hypersonic aircraft. It set a world speed record for a jet-powered aircraft in 2004.",
  },
  {
    id: 5,
    manufacturer: "Bell Aircraft Corporation",
    model: "Bell X-1",
    maximum_speed: "Mach 1.06 (700 mph or 1,126 km/h)",
    maximum_altitude: "45,000 feet (13,700 meters)",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUioh90Pyn7t9sWpPpzbar8tN80rejJg3Yw&s",
    description:
      "The Bell X-1 was the first aircraft to exceed the speed of sound in controlled, level flight, piloted by Chuck Yeager in 1947.",
  },
  {
    id: 6,
    manufacturer: "North American Aviation",
    model: "North American X-15",
    maximum_speed: "Mach 6.72 (4,520 mph or 7,274 km/h)",
    maximum_altitude: "354,200 feet (107,960 meters)",
    image_url:
      "https://media.defense.gov/2007/Nov/07/2000432641/-1/-1/0/071107-F-1234S-011.JPG",
    description:
      "The North American X-15 was a hypersonic rocket-powered aircraft operated by the United States Air Force and NASA.",
  },
  {
    id: 7,
    manufacturer: "Lockheed Martin",
    model: "Lockheed Martin X-56A",
    maximum_speed: "Unknown",
    maximum_altitude: "Unknown",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNFJrH15VxEZ1IToOn_Bvxx9fgWo_TH3Q8HQ&s",
    description:
      "The Lockheed Martin X-56A is an experimental unmanned aircraft designed for research in active flutter suppression and gust load alleviation.",
  },
  {
    id: 8,
    manufacturer: "Northrop Corporation",
    model: "Northrop Tacit Blue",
    maximum_speed: "Unknown",
    maximum_altitude: "Unknown",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Tacit_Blue_in_flight.jpg",
    description:
      "The Northrop Tacit Blue was an experimental aircraft designed to demonstrate the feasibility of stealth technology. It was used for research in low-observable techniques.",
  },
  {
    id: 9,
    manufacturer: "NASA",
    model: "NASA X-57 Maxwell",
    maximum_speed: "1800",
    maximum_altitude: "Unknown",
    image_url:
      "https://img.gta5-mods.com/q85-w800/images/boeing-bird-of-prey-add-on/e43501-b.png",
    description:
      "The NASA X-57 Maxwell is an experimental electric aircraft being developed to demonstrate new propulsion technology and advanced airframe designs.",
  },
  {
    id: 10,
    manufacturer: "Boeing",
    model: "Boeing Bird of Prey",
    maximum_speed: "Unknown",
    maximum_altitude: "Unknown",
    image_url:
      "https://media.defense.gov/2005/Dec/26/2000574488/1200/1200/0/050317-F-1234P-056.JPG",
    description:
      "The Boeing Bird of Prey was an experimental aircraft designed to demonstrate stealth technology. It was used for research and development purposes.",
  },
];
function filterAircraft(type = "fighter", clickedButton = null) {
  let aircraftData;
  switch (type) {
    case "fighter":
      aircraftData = fighterjet;
      break;
    case "bomber":
      aircraftData = BomberAircraft;
      break;
    case "cargo":
      aircraftData = cargoAircraft;
      break;
    case "experimental":
      aircraftData = ExperimentalAircraft;
      break;
    case "business":
      aircraftData = BusinessJets;
      break;
    default:
      aircraftData = fighterjet;
  }
  displayAircraft(aircraftData);

  document
    .querySelectorAll("nav button")
    .forEach((btn) => btn.classList.remove("active"));
  if (clickedButton) {
    clickedButton.classList.add("active");
  }
}

function displayAircraft(data) {
  const container = document.getElementById("aircraft-container");
  container.innerHTML = "";
  data.forEach((aircraft) => {
    const card = document.createElement("div");
    card.className = "aircraft-card";

    let additionalInfo = "";
    if (aircraft.role) {
      additionalInfo += `<p><strong>Role:</strong> ${aircraft.role}</p>`;
    }
    if (aircraft.maximum_payload) {
      additionalInfo += `<p><strong>Maximum Payload:</strong> ${aircraft.maximum_payload}</p>`;
    }
    if (aircraft.maximum_altitude) {
      additionalInfo += `<p><strong>Maximum Altitude:</strong> ${aircraft.maximum_altitude}</p>`;
    }
    if (aircraft.seating_capacity) {
      additionalInfo += `<p><strong>Seating Capacity:</strong> ${aircraft.seating_capacity}</p>`;
    }

    card.innerHTML = `
      <img src="${aircraft.image_url}" alt="${aircraft.model}">
      <h3>${aircraft.manufacturer} ${aircraft.model}</h3>
      <p><strong>Range:</strong> ${
        aircraft.range || aircraft.maximum_range || "Unknown"
      }</p>
      <p><strong>Max Speed:</strong> ${
        aircraft.maximum_speed || aircraft.max_speed || "Unknown"
      }</p>
      ${
        aircraft.generation
          ? `<p><strong>Generation:</strong> ${aircraft.generation}</p>`
          : ""
      }
      ${additionalInfo ? `${additionalInfo}` : ""}
      <p>${aircraft.description}</p>
    `;

    container.appendChild(card);
  });
}

document.querySelectorAll("nav button").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("onclick").split("'")[1];
    filterAircraft(type, button);
  });
});

const defaultButton = document.querySelector(
  "nav button[onclick=\"filterAircraft('fighter')\"]"
);
if (defaultButton) {
  filterAircraft("fighter", defaultButton);
  defaultButton.classList.add("active");
}
