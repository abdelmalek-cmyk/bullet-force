export interface GameMap {
  name: string;
  slug: string;
  size: 'Small' | 'Medium' | 'Large';
  bestMode: string;
  description: string;
  bestWeapons: string[];
  tips: string[];
  callouts: string[];
}

export const maps: GameMap[] = [
  {
    name: 'Urban',
    slug: 'urban',
    size: 'Medium',
    bestMode: 'Team Deathmatch · Gun Game',
    description: 'Urban is a dense city-block map packed with tight alleys, apartment buildings, and street-level corridors. Close-quarters combat dominates every lane, making it the most SMG-friendly map in the game. Expect non-stop action from spawn.',
    bestWeapons: ['P90 (SMG)', 'Vector (SMG)', 'AS VAL (AR)'],
    tips: [
      'SMGs and shotguns rule here — swap your AR loadout before entering',
      'Stay off the open street; use building interiors and alley walls as cover',
      'Check every doorway and window — campers thrive in upper-floor apartments',
      'Grenades are highly effective in the narrow corridors connecting buildings',
    ],
    callouts: ['North Alley', 'South Street', 'Apartment Block', 'Corner Store', 'Central Crossroads'],
  },
  {
    name: 'Woods',
    slug: 'woods',
    size: 'Large',
    bestMode: 'Team Deathmatch · Conquest',
    description: 'Woods is a large outdoor map split between a dense forest section and a military supply base. Long sightlines through tree gaps reward snipers while the base interior creates brutal CQC pockets. The river cave is a key flanking route.',
    bestWeapons: ['M40A5 (sniper)', 'MK11 (DMR)', 'M4A1 (AR)'],
    tips: [
      'Snipers: use the tree line for concealment — you see enemies before they see you',
      'The supply base interior heavily favours SMGs; switch loadouts per area',
      'The river cave is an underused flanking route that bypasses the main fight',
      'Conquest: flag A is in the open forest — capture it fast then defend from the trees',
    ],
    callouts: ['Supply Base', 'River Cave', 'Tree Line', 'North Hill', 'Bridge'],
  },
  {
    name: 'Village',
    slug: 'village',
    size: 'Medium',
    bestMode: 'Team Deathmatch · Conquest',
    description: 'Village is a medium-sized outdoor map with stone buildings, open market streets, and organic chokepoints. Multiple viable routes through the village create strategic depth that rewards intelligent positioning and communication.',
    bestWeapons: ['M4A1 (AR)', 'Vector (SMG)', 'AS VAL (AR)'],
    tips: [
      'Control the central market area — it is the highest kill-density zone',
      'Use building interiors to avoid sniper fire from the village outskirts',
      'Conquest mode: rush flags B and C first for positional control',
      'UAV scorestreak is highly effective here due to the compact layout',
    ],
    callouts: ['Market Center', 'North Buildings', 'South Gate', 'Church Tower', 'East Alley'],
  },
  {
    name: 'Outpost',
    slug: 'outpost',
    size: 'Medium',
    bestMode: 'Team Deathmatch',
    description: 'Outpost is a military compound map with open courtyards, fortified buildings, and long external corridors. Snipers thrive on outer lanes while SMG players own the interior rooms. One of the most popular maps in the rotation.',
    bestWeapons: ['M40A5 (sniper)', 'M4A1 (AR)', 'P90 (SMG)'],
    tips: [
      'Control the central courtyard carefully — it is a kill zone from multiple angles',
      'Snipers dominate the outer perimeter path running along the map edge',
      'Interior rooms strongly favour SMGs — switch loadouts based on your route',
      'Use the truck as cover when crossing the open centre — never sprint across open ground',
    ],
    callouts: ['Central Courtyard', 'Perimeter Wall', 'East Building', 'West Gate', 'Sniper Row'],
  },
  {
    name: 'City',
    slug: 'city',
    size: 'Large',
    bestMode: 'Team Deathmatch · Conquest',
    description: 'City is a large urban warfare map with multi-story buildings, street-level corridors, and rooftop access. Multiple engagement distances make it the most versatile map in Bullet Force — every weapon class performs well if positioned correctly.',
    bestWeapons: ['M4A1 (AR)', 'AK-12 (AR)', 'M40A5 (sniper — rooftops)'],
    tips: [
      'Rooftop control equals map control — push high ground immediately at match start',
      'Street-level corridors favour SMGs; rooftops and open plazas favour ARs and snipers',
      'Watch building entrances — they are prime ambush chokepoints',
      'Advanced UAV scorestreak is extremely powerful on City due to wide open sightlines',
    ],
    callouts: ['Rooftop Alpha', 'Main Street', 'Plaza Center', 'Office Building', 'South Alley'],
  },
];
