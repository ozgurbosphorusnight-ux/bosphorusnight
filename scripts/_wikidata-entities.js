/**
 * Wikidata entity IDs for Bosphorus tour landmarks and Istanbul places.
 *
 * Used in TouristTrip.itinerary (per-stop @id) and TouristTrip.mentions
 * (cross-reference array) to align our content with Google's Knowledge Graph
 * and AI search systems. AI engines like ChatGPT and Perplexity use these
 * @id links to ground "what is this place?" questions in canonical entities.
 *
 * Only verified, well-known Wikidata IDs are included. Items without a
 * confirmed Q-number (e.g. neighborhood pier sub-locations) are left out
 * — better to ship verified data than guess.
 */

const WD_BASE = 'https://www.wikidata.org/wiki/';

const WIKIDATA = {
  // Geographic
  istanbul: 'Q406',
  bosphorus: 'Q22709',
  turkey: 'Q43',
  marmaraSea: 'Q34925',
  // Itinerary stops
  dolmabahce: 'Q207302',      // Dolmabahçe Palace
  ciragan: 'Q1054851',        // Çırağan Palace
  ortakoyMosque: 'Q1066711',  // Ortaköy Mosque (Büyük Mecidiye)
  bosphorusBridge: 'Q183340', // 15 July Martyrs Bridge (Bosphorus Bridge)
  rumeliFortress: 'Q615395',  // Rumelihisarı
  fsmBridge: 'Q193715',       // Fatih Sultan Mehmet Bridge
  beylerbeyi: 'Q207313',      // Beylerbeyi Palace
  maidensTower: 'Q210115',    // Kız Kulesi (Maiden's Tower)
  // Districts (mentioned in itinerary or landing pages)
  uskudarDistrict: 'Q221390', // Üsküdar district
  beyogluDistrict: 'Q189381', // Beyoğlu district
  // Other Istanbul landmarks (for mentions in landing pages)
  topkapi: 'Q170539',         // Topkapı Palace
  hagiaSophia: 'Q189221',     // Hagia Sophia
  blueMosque: 'Q187721',      // Blue Mosque (Sultan Ahmed Mosque)
  galataTower: 'Q1116296',    // Galata Tower
  basilicaCistern: 'Q645135', // Basilica Cistern
  grandBazaar: 'Q199916',     // Grand Bazaar
  // Authority / accreditation
  tursab: 'Q1142001'          // TÜRSAB (Association of Turkish Travel Agencies)
};

/**
 * Build a schema.org Place node with optional Wikidata @id.
 * Returns a simple object with @type=Place, name, and @id when available.
 */
function placeNode(name, qid) {
  if (!qid) return { '@type': 'Place', name };
  return { '@type': 'Place', '@id': `${WD_BASE}${qid}`, name };
}

/**
 * Bosphorus tour itinerary (11 stops) as schema.org ItemList.
 * Each ListItem contains a Place item with Wikidata @id where available.
 * Returns the full ItemList object ready to drop into TouristTrip.itinerary.
 */
function buildBosphorusItinerary() {
  const stops = [
    { name: 'Kabataş Pier (departure)', qid: null },
    { name: 'Dolmabahçe Palace', qid: WIKIDATA.dolmabahce },
    { name: 'Çırağan Palace', qid: WIKIDATA.ciragan },
    { name: 'Ortaköy Mosque', qid: WIKIDATA.ortakoyMosque },
    { name: 'Bosphorus Bridge', qid: WIKIDATA.bosphorusBridge },
    { name: 'Bebek Bay', qid: null },
    { name: 'Rumeli Fortress', qid: WIKIDATA.rumeliFortress },
    { name: 'Anadolu Fortress', qid: null },
    { name: 'Beylerbeyi Palace', qid: WIKIDATA.beylerbeyi },
    { name: 'Kuzguncuk & Üsküdar', qid: WIKIDATA.uskudarDistrict },
    { name: 'Kabataş Pier (return)', qid: null }
  ];
  return {
    '@type': 'ItemList',
    numberOfItems: stops.length,
    itemListElement: stops.map((stop, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: placeNode(stop.name, stop.qid)
    }))
  };
}

/**
 * Major Bosphorus / Istanbul places mentioned during the cruise.
 * Used in TouristTrip.mentions to give AI search systems a clear list
 * of canonical entities the trip references — independent of itinerary
 * order or per-page content.
 */
function buildBosphorusMentions() {
  return [
    placeNode('Bosphorus', WIKIDATA.bosphorus),
    placeNode('Istanbul', WIKIDATA.istanbul),
    placeNode('Dolmabahçe Palace', WIKIDATA.dolmabahce),
    placeNode('Çırağan Palace', WIKIDATA.ciragan),
    placeNode('Ortaköy Mosque', WIKIDATA.ortakoyMosque),
    placeNode('Bosphorus Bridge', WIKIDATA.bosphorusBridge),
    placeNode('Rumeli Fortress', WIKIDATA.rumeliFortress),
    placeNode('Fatih Sultan Mehmet Bridge', WIKIDATA.fsmBridge),
    placeNode('Beylerbeyi Palace', WIKIDATA.beylerbeyi),
    placeNode('Maiden\'s Tower', WIKIDATA.maidensTower),
    placeNode('Üsküdar', WIKIDATA.uskudarDistrict)
  ];
}

module.exports = {
  WIKIDATA,
  WD_BASE,
  placeNode,
  buildBosphorusItinerary,
  buildBosphorusMentions
};
