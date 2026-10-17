// Houston matchbox spots. lat/lng are hand-placed estimates (no geocoder was
// reachable when this was built); `approx: true` marks the shakiest ones.
// Pins can be dragged to the right spot in the app and the fix is saved.
// `gone` = date of the latest report that the place was out of matches.
window.PLACES = [
  { id: "all-the-feels", name: "All the Feels", addr: "3223 Milam St.", hood: "Midtown", lat: 29.7447, lng: -95.3817, kind: "Gift shop", note: "Matches with its name for sale", approx: true },
  { id: "angies", name: "Angie’s", addr: "1002 W. 11th St.", hood: "Heights", lat: 29.7907, lng: -95.4062, note: "Matches with its name" },
  { id: "annabelle", name: "Annabelle Brasserie", addr: "811 Buffalo Park Dr.", hood: "Autry Park", lat: 29.7606, lng: -95.3990, note: "Matches with its name, more than one color", gone: "December 2025" },
  { id: "annie", name: "The Annie Cafe & Bar", addr: "1800 Post Oak Blvd", hood: "Uptown / Galleria", lat: 29.7496, lng: -95.4612, note: "Matches with its name" },
  { id: "anvil", name: "Anvil Bar & Refuge", addr: "1424 Westheimer Rd.", hood: "Montrose", lat: 29.7449, lng: -95.3983, note: "Matches with its name" },
  { id: "bb-butchers", name: "B&B Butchers & Restaurant", addr: "1814 Washington Ave.", hood: "Washington Ave", lat: 29.7684, lng: -95.3818, note: "Matches with its name" },
  { id: "balboa", name: "Balboa Surf Club", addr: "1753 Post Oak Blvd", hood: "Uptown / Galleria", lat: 29.7503, lng: -95.4626, note: "Matches with its name" },
  { id: "bar-bludorn", name: "Bar Bludorn", addr: "9061 Gaylord Dr.", hood: "Memorial City", lat: 29.7801, lng: -95.5437, note: "Matches with its name" },
  { id: "bar-doko", name: "Bar Doko", addr: "3737 Cogdell St.", hood: "Montrose", lat: 29.7392, lng: -95.4005, note: "Matches with its name", approx: true },
  { id: "barcelona", name: "Barcelona Wine Bar", addr: "1731 Westheimer Rd.", hood: "Montrose", lat: 29.7438, lng: -95.4029, note: "Matches with its name" },
  { id: "bari", name: "Bari", addr: "4444 Westheimer Rd.", hood: "River Oaks District", lat: 29.7411, lng: -95.4478, note: "Matches with its name" },
  { id: "betelgeuse", name: "Betelgeuse", addr: "2101 Washington Ave.", hood: "Washington Ave", lat: 29.7697, lng: -95.3858, note: "Matches with its name" },
  { id: "brasserie-19", name: "Brasserie 19", addr: "1962 W. Gray St.", hood: "River Oaks", lat: 29.7535, lng: -95.4103, note: "Matches with its name" },
  { id: "buck-mason", name: "Buck Mason", addr: "906 Westheimer Rd.", hood: "Montrose", lat: 29.7471, lng: -95.3926, kind: "Clothing", note: "Matches with its name" },
  { id: "capones", name: "Capone’s Oven & Bar", addr: "2303 Richmond Ave.", hood: "Upper Kirby", lat: 29.7343, lng: -95.4086, note: "Matches with its name", gone: "December 2025", approx: true },
  { id: "foxhearts", name: "Captain Foxheart’s Bad News Bar", addr: "308 Main St.", hood: "Downtown", lat: 29.7629, lng: -95.3613, note: "Matches with its name" },
  { id: "clarks", name: "Clark’s Oyster Bar", addr: "3807 Montrose Blvd.", hood: "Montrose", lat: 29.7386, lng: -95.3912, note: "Matches with its name" },
  { id: "le-colonial", name: "Le Colonial", addr: "4444 Westheimer Rd.", hood: "River Oaks District", lat: 29.7408, lng: -95.4472, note: "Matches with its name" },
  { id: "credence", name: "Credence", addr: "9757 Katy Fwy", hood: "Memorial", lat: 29.7838, lng: -95.5528, note: "Matches with its name", gone: "February 2026" },
  { id: "daily-gather", name: "Daily Gather", addr: "800 Sorella Ct.", hood: "CityCentre", lat: 29.7842, lng: -95.5603, note: "Matches with its name" },
  { id: "hotel-daphne", name: "Hotel Daphne", addr: "347 W. 20th St.", hood: "Heights", lat: 29.8031, lng: -95.4002, note: "Matches with its name" },
  { id: "hypsi", name: "Hypsi", addr: "347 W. 20th St.", hood: "Heights", lat: 29.8028, lng: -95.4006, note: "Matches with its name", inside: "Hotel Daphne" },
  { id: "doris", name: "Doris Metropolitan", addr: "2815 S. Shepherd Dr.", hood: "Upper Kirby", lat: 29.7388, lng: -95.4106, note: "Matches with its name, with two locations" },
  { id: "drakes", name: "Drake’s Hollywood", addr: "1100 Westheimer Rd.", hood: "Montrose", lat: 29.7465, lng: -95.3948, note: "Matches with its name" },
  { id: "eight-row", name: "Eight Row Flint", addr: "1039 Yale St.", hood: "Heights", lat: 29.7897, lng: -95.4026, note: "Matches with its name" },
  { id: "emilias", name: "Emilia’s Havana", addr: "1800 Post Oak Blvd", hood: "Uptown / Galleria", lat: 29.7493, lng: -95.4609, note: "Matches with its name" },
  { id: "genara", name: "Genara", addr: "3618 White Oak Dr.", hood: "Heights", lat: 29.7806, lng: -95.4120, kind: "Gifts & candles", note: "Matches with its name", approx: true },
  { id: "guard-grace", name: "Guard and Grace", addr: "500 Dallas St.", hood: "Downtown", lat: 29.7568, lng: -95.3690, note: "Matches with its name" },
  { id: "home-slice", name: "Home Slice Pizza", addr: "3701 Travis St.", hood: "Midtown", lat: 29.7376, lng: -95.3836, note: "Matches with its name" },
  { id: "johnny-mcelroys", name: "Johnny McElroy’s", addr: "1223 Waugh Dr.", hood: "Montrose", lat: 29.7566, lng: -95.3966, note: "Matches with its name", approx: true },
  { id: "gold-brick", name: "Johnny’s Gold Brick", addr: "2518 Yale St.", hood: "Heights", lat: 29.8072, lng: -95.4026, note: "Matches with its name" },
  { id: "kirkwood", name: "Kirkwood", addr: "11720 Katy Fwy", hood: "Memorial", lat: 29.7815, lng: -95.5850, note: "Matches with its name", gone: "September 2026" },
  { id: "la-carafe", name: "La Carafe", addr: "813 Congress St.", hood: "Downtown", lat: 29.7637, lng: -95.3613, note: "Matches with its name" },
  { id: "colombe-dor", name: "La Colombe d’Or Hotel", addr: "3410 Montrose Blvd", hood: "Montrose", lat: 29.7413, lng: -95.3906, note: "Matches with its name" },
  { id: "la-lucha", name: "La Lucha", addr: "1801 N. Shepherd Dr.", hood: "Heights", lat: 29.8019, lng: -95.4103, note: "Matches with its name", gone: "February 2026" },
  { id: "lazy-lane", name: "Lazy Lane", addr: "923 Wakefield Dr.", hood: "Garden Oaks", lat: 29.8334, lng: -95.4140, note: "Matches with its name", approx: true },
  { id: "leemoo", name: "Leemoo", addr: "2720 Bissonnet St.", hood: "Rice Village", lat: 29.7178, lng: -95.4148, note: "Matches with its name", approx: true },
  { id: "lei-low", name: "Lei Low Bar", addr: "6412 N. Main St.", hood: "Northside", lat: 29.8105, lng: -95.4062, note: "Matches with its name", approx: true },
  { id: "little-dipper", name: "Little Dipper", addr: "304 Main St.", hood: "Downtown", lat: 29.7627, lng: -95.3616, note: "Matches with its name" },
  { id: "littles", name: "Little’s Oyster Bar", addr: "3001 S. Shepherd Dr.", hood: "Upper Kirby", lat: 29.7366, lng: -95.4106, note: "Matches with its name. Last seen by the restrooms" },
  { id: "loro", name: "Loro", addr: "1001 W. 11th St.", hood: "Heights", lat: 29.7903, lng: -95.4058, note: "Matches with its name", gone: "March 2026" },
  { id: "los-tios", name: "Los Tios", addr: "5161 San Felipe St.", hood: "Uptown / Galleria", lat: 29.7497, lng: -95.4718, note: "Matches with its name", gone: "November 2025", approx: true },
  { id: "march", name: "March", addr: "1624 Westheimer Rd.", hood: "Montrose", lat: 29.7443, lng: -95.4008, note: "Matches with its name" },
  { id: "marigold-club", name: "Marigold Club", addr: "2531 Kuester St.", hood: "River Oaks", lat: 29.7432, lng: -95.4166, note: "Matches with its name", approx: true },
  { id: "marigold-salon", name: "Marigold Salon", addr: "1901 N. Shepherd Dr.", hood: "Heights", lat: 29.8034, lng: -95.4103, kind: "Hair salon", note: "Matches with its name. $5, or free with a service" },
  { id: "maximo", name: "Maximo", addr: "6119 Edloe St., West University Place", hood: "West U", lat: 29.7176, lng: -95.4302, note: "Matches with its name" },
  { id: "miltons", name: "Milton’s", addr: "5117 Kelvin Dr.", hood: "Rice Village", lat: 29.7183, lng: -95.4181, note: "Matches with both names (Milton’s and Lee’s)" },
  { id: "lees", name: "Lee’s", addr: "5117 Kelvin Dr.", hood: "Rice Village", lat: 29.7180, lng: -95.4185, note: "Matches with both names (Milton’s and Lee’s)", inside: "Milton’s" },
  { id: "mizzen-main", name: "Mizzen & Main", addr: "707 Yale St.", hood: "Heights", lat: 29.7840, lng: -95.4026, kind: "Menswear", note: "Matches with its name" },
  { id: "monkeys-tail", name: "Monkey’s Tail", addr: "5802 Fulton St.", hood: "Northside", lat: 29.8131, lng: -95.3612, note: "Matches with its name" },
  { id: "montrose-cheese", name: "Montrose Cheese & Wine", addr: "1618 Westheimer Rd.", hood: "Montrose", lat: 29.7445, lng: -95.4003, kind: "Shop", note: "Specialty matches available" },
  { id: "navy-blue", name: "Navy Blue", addr: "2445 Times Blvd", hood: "Rice Village", lat: 29.7164, lng: -95.4152, note: "Matches with its name" },
  { id: "nickel-city", name: "Nickel City", addr: "2910 McKinney St.", hood: "EaDo", lat: 29.7536, lng: -95.3530, note: "Matches with its name" },
  { id: "pappas-bros", name: "Pappas Bros. Steakhouse", addr: "5839 Westheimer Rd.", hood: "Uptown / Galleria", lat: 29.7380, lng: -95.4866, note: "Matches with its name", gone: "February 2026" },
  { id: "pistoleros", name: "Pistolero’s Tequila & Taco Bar", addr: "1517 Westheimer Rd.", hood: "Montrose", lat: 29.7447, lng: -95.3992, note: "Matches with its name" },
  { id: "poison-girl", name: "Poison Girl", addr: "1641 Westheimer Rd.", hood: "Montrose", lat: 29.7440, lng: -95.4014, note: "Matches with its name" },
  { id: "prime-131", name: "Prime 131", addr: "2505 W. 11th St.", hood: "Timbergrove", lat: 29.7907, lng: -95.4255, note: "Matches with its name" },
  { id: "rosie-cannonball", name: "Rosie Cannonball", addr: "1620 Westheimer Rd.", hood: "Montrose", lat: 29.7446, lng: -95.4006, note: "Matches with its name" },
  { id: "saint-augustine", name: "Hotel Saint Augustine", addr: "4110 Loretto Dr.", hood: "Montrose", lat: 29.7370, lng: -95.3988, note: "Matches with its name" },
  { id: "perseid", name: "Perseid", addr: "4110 Loretto Dr.", hood: "Montrose", lat: 29.7367, lng: -95.3992, note: "Matches with its name", inside: "Hotel Saint Augustine" },
  { id: "sante", name: "Sante Lounge", addr: "2309 Richmond Ave.", hood: "Upper Kirby", lat: 29.7341, lng: -95.4092, note: "Matches with its name", approx: true },
  { id: "shay-mcelroys", name: "Shay McElroy’s", addr: "909 Texas Ave.", hood: "Downtown", lat: 29.7616, lng: -95.3612, note: "Matches with its name" },
  { id: "squable", name: "Squable", addr: "632 W. 19th St.", hood: "Heights", lat: 29.8028, lng: -95.4032, note: "Matches with its name", gone: "January 2024" },
  { id: "star-rover", name: "Star Rover", addr: "1801 N. Shepherd Dr.", hood: "Heights", lat: 29.8022, lng: -95.4099, note: "Matches with its name" },
  { id: "starduster", name: "Starduster", addr: "3921 N. Main St.", hood: "Northside", lat: 29.7882, lng: -95.3760, note: "Matches with its name", approx: true },
  { id: "state-of-grace", name: "State of Grace", addr: "3258 Westheimer Rd.", hood: "River Oaks", lat: 29.7423, lng: -95.4278, note: "Matches with its name", url: "https://www.stateofgracetx.com" },
  { id: "tavola", name: "Tavola", addr: "1800 Post Oak Blvd", hood: "Uptown / Galleria", lat: 29.7499, lng: -95.4615, note: "Matches with its name", gone: "February 2026" },
  { id: "tommy-bahama", name: "Tommy Bahama", addr: "5136 W. Alabama St.", hood: "Uptown / Galleria", lat: 29.7369, lng: -95.4636, note: "Matches with its name", approx: true },
  { id: "trattoria-sofia", name: "Trattoria Sofia", addr: "911 W. 11th St.", hood: "Heights", lat: 29.7905, lng: -95.4049, note: "Matchbooks with notepaper and its name" },
  { id: "turners", name: "Turner’s", addr: "1800 Post Oak Blvd", hood: "Uptown / Galleria", lat: 29.7492, lng: -95.4616, note: "Matches with its name" },
  { id: "uchi", name: "Uchi", addr: "904 Westheimer Rd.", hood: "Montrose", lat: 29.7473, lng: -95.3922, note: "Matches with its name" },
  { id: "uchiko", name: "Uchiko", addr: "1801 Post Oak Blvd.", hood: "Uptown / Galleria", lat: 29.7507, lng: -95.4620, note: "Matches with its name" },
  { id: "voodoo-queen", name: "Voodoo Queen", addr: "322 Milby St.", hood: "EaDo", lat: 29.7445, lng: -95.3390, note: "Matches with its name", gone: "December 2025", approx: true },
  { id: "warrens", name: "Warren’s Inn", addr: "307 Travis St.", hood: "Downtown", lat: 29.7632, lng: -95.3606, note: "Matches with its name" },
];

// What kind of place each spot is, from general knowledge of the places (not
// checked against menus). `?` marks a best guess. Each group splits into
// styles; `one` is how a single place of that style is labeled.
(() => {
  const GROUPS = {
    Restaurants: {
      "Steakhouses": ["Steakhouse", "bb-butchers doris guard-grace pappas-bros prime-131"],
      "Seafood": ["Seafood", "balboa bar-bludorn clarks littles navy-blue"],
      "Italian & Pizza": ["Italian & pizza", "bari? capones home-slice rosie-cannonball tavola trattoria-sofia"],
      "Mexican & Latin": ["Mexican & Latin", "emilias los-tios maximo? pistoleros"],
      "Asian": ["Asian", "bar-doko? le-colonial leemoo? loro uchi uchiko"],
      "French & European": ["French & European", "annabelle brasserie-19 marigold-club perseid squable?"],
      "Mediterranean & Spanish": ["Mediterranean & Spanish", "barcelona march"],
      "Southern & Cajun": ["Southern & Cajun", "credence? la-lucha state-of-grace"],
      "American": ["American", "angies? annie daily-gather? kirkwood? miltons? turners"],
    },
    Bars: {
      "Cocktail bars": ["Cocktail bar", "anvil betelgeuse foxhearts gold-brick hypsi? lees? lei-low starduster voodoo-queen?"],
      "Dive & neighborhood": ["Dive bar", "little-dipper lazy-lane? monkeys-tail nickel-city poison-girl star-rover? warrens"],
      "Pubs & icehouses": ["Pub", "eight-row johnny-mcelroys shay-mcelroys"],
      "Wine bars & lounges": ["Lounge", "drakes la-carafe sante"],
    },
    Shops: { "Shops": ["Shop", "all-the-feels buck-mason genara marigold-salon mizzen-main montrose-cheese tommy-bahama"] },
    Hotels: { "Hotels": ["Hotel", "hotel-daphne colombe-dor saint-augustine"] },
  };
  window.GROUPS = Object.fromEntries(Object.entries(GROUPS).map(([g, cats]) => [g, Object.keys(cats)]));
  const byId = Object.fromEntries(window.PLACES.map(p => [p.id, p]));
  for (const [group, cats] of Object.entries(GROUPS)) for (const [cat, [one, ids]] of Object.entries(cats)) for (const raw of ids.split(" ")) {
    const p = byId[raw.replace("?", "")];
    if (!p) throw new Error("Unknown place id in categories: " + raw);
    if (p.cat) throw new Error("Place in two categories: " + raw);
    Object.assign(p, { group, cat, label: p.kind || one, catGuess: raw.endsWith("?") });
  }
  const missing = window.PLACES.filter(p => !p.cat).map(p => p.id);
  if (missing.length) throw new Error("No category for: " + missing.join(", "));
})();
