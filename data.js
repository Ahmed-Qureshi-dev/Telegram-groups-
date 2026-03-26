// ===== GROUP DATA =====
const PREMIUM_LINK = "https://t.me/mircrypto0";

const GROUPS_RAW = [
  // #1 — Premium (always first, always hot)
  { name: "Mircrypto Premium Signals", cat: "signals", members: "248K", badge: "hot", desc: "The most premium free crypto trading signals on Telegram. Daily BTC, ETH and altcoin calls with exact entry, TP and SL. Trusted by 248,000+ traders worldwide.", link: PREMIUM_LINK, featured: true },

  // #2–20 — all hot OR free (no "signals" badge alone, must be hot or free)
  { name: "Bitcoin Whale Alerts", cat: "bitcoin", members: "139K", badge: "hot", desc: "Real-time whale wallet movements and Bitcoin on-chain alerts. Catch big BTC moves before the crowd." },
  { name: "Free Crypto Signals Daily", cat: "signals", members: "211K", badge: "free", desc: "100% free crypto trading calls shared every day. Spot and futures signals for Binance, OKX, and Bybit." },
  { name: "Altcoin Gem Hunter", cat: "altcoins", members: "87K", badge: "hot", desc: "Hidden gem altcoin picks with 5x to 100x potential. Community-researched low-caps with free entry signals." },
  { name: "Binance Signals VIP Free", cat: "signals", members: "155K", badge: "free", desc: "Free Binance spot and futures signals updated multiple times daily. High win rate verified calls." },
  { name: "Bitcoin TA Master", cat: "bitcoin", members: "74K", badge: "hot", desc: "Daily Bitcoin technical analysis with support, resistance, trend breakdowns and trade setups." },
  { name: "Airdrop Hunters Network", cat: "defi", members: "312K", badge: "hot", desc: "Free crypto airdrops, testnet tasks, and token distribution alerts every day. Never miss a free drop." },
  { name: "NFT Mint Alert Free", cat: "nft", members: "98K", badge: "hot", desc: "Free NFT mint alerts, whitelist spots, and blue chip collection analysis. Be first to mint." },
  { name: "Futures Signals Free", cat: "futures", members: "171K", badge: "free", desc: "Free crypto futures signals with leverage suggestions, entry levels, and stop losses. Updated daily." },
  { name: "Meme Coin Early Calls", cat: "meme", members: "294K", badge: "hot", desc: "DOGE, SHIB, PEPE and new meme coin calls. Early entries on viral meme coins before they pump." },
  { name: "Crypto News Flash", cat: "news", members: "403K", badge: "hot", desc: "Breaking crypto news, regulatory updates, exchange listings, and market-moving events around the clock." },
  { name: "Crypto For Beginners Free", cat: "education", members: "192K", badge: "free", desc: "Learn crypto from scratch. Wallets, exchanges, DeFi and trading explained simply. Perfect for newcomers." },
  { name: "Pump Alert Network", cat: "pump", members: "348K", badge: "hot", desc: "Early breakout and pump alerts. Be the first to enter before the crowd pushes prices up." },
  { name: "Spot Trading Signals Free", cat: "spot", members: "88K", badge: "free", desc: "Safe spot trading signals for beginners and pros. No leverage, clean entries with risk management." },
  { name: "DeFi Yield Farm Alerts", cat: "defi", members: "44K", badge: "free", desc: "Best DeFi yield farming strategies, liquidity pools, staking opportunities and airdrop alerts." },
  { name: "XRP Ripple Community", cat: "altcoins", members: "167K", badge: "hot", desc: "XRP price analysis, Ripple news, SEC updates and trading signals. The biggest XRP Telegram group." },
  { name: "Ethereum Signals Free", cat: "altcoins", members: "152K", badge: "free", desc: "ETH trading signals, ecosystem news, gas updates and Ethereum staking info for all traders." },
  { name: "Solana Signals & DeFi", cat: "altcoins", members: "131K", badge: "hot", desc: "SOL ecosystem trades, NFT mints, DeFi opportunities and daily Solana price calls." },
  { name: "Bitcoin HODLers United", cat: "bitcoin", members: "176K", badge: "free", desc: "Long-term Bitcoin investors sharing insights, news and conviction plays. Diamond hands community." },
  { name: "TA Academy Free Lessons", cat: "education", members: "97K", badge: "free", desc: "Learn TA — chart patterns, indicators, Wyckoff, Elliott Wave. Free daily lessons for all levels." },

  // #21+ — mix of hot and free
  { name: "Bybit Futures Free Signals", cat: "futures", members: "83K", badge: "free", desc: "Bybit perpetual futures signals with proper risk management. Long and short setups daily." },
  { name: "Moonshot Picks Community", cat: "pump", members: "143K", badge: "hot", desc: "Low market cap coins with explosive upside. Community-vetted moonshot picks with research." },
  { name: "BNB Chain Calls Free", cat: "altcoins", members: "88K", badge: "free", desc: "BNB and BSC token calls, PancakeSwap gems and BNB Chain ecosystem news and trades." },
  { name: "NFT Flip Profits", cat: "nft", members: "52K", badge: "hot", desc: "NFT buy-low-sell-high strategies, floor price alerts and collection analysis for flippers." },
  { name: "Alt Season Radar", cat: "altcoins", members: "143K", badge: "hot", desc: "Alt season tracking, rotation analysis and top altcoin picks for every phase of the market cycle." },
  { name: "Bitcoin On-Chain Data", cat: "bitcoin", members: "42K", badge: "free", desc: "On-chain metrics, whale wallets, exchange inflows and Bitcoin network health data daily." },
  { name: "OKX Signals Free", cat: "futures", members: "79K", badge: "free", desc: "OKX futures and options signals. Scalping and swing trade setups with SL and TP levels." },
  { name: "Crypto Tax & Legal Help", cat: "education", members: "48K", badge: "free", desc: "Crypto tax strategies, legal advice, wallet tracking and country-specific regulation guidance." },
  { name: "Scalping Signals Fast", cat: "spot", members: "79K", badge: "hot", desc: "Fast crypto scalping signals on 5m and 15m timeframes. Quick in-out trades for active traders." },
  { name: "Arb Opportunities Free", cat: "defi", members: "29K", badge: "free", desc: "CEX-DEX arbitrage opportunities, price discrepancies and near risk-free trade setups shared daily." },
  { name: "Exchange Listings Alert", cat: "news", members: "141K", badge: "hot", desc: "Listings, delistings, exchange outages, hacks and major exchange announcements as they happen." },
  { name: "Binance Futures Free", cat: "futures", members: "144K", badge: "free", desc: "Binance perpetual futures signals — long and short setups with clear entry, SL and TP levels." },
  { name: "Low Cap Gems Free", cat: "pump", members: "88K", badge: "free", desc: "Low cap gems with explosive potential. Community-researched projects and early coin discoveries." },
  { name: "Breakout Scanner Pro", cat: "pump", members: "131K", badge: "hot", desc: "Technical breakout patterns and volume surge alerts tracked across 100+ crypto pairs daily." },
  { name: "Bitcoin Mining Hub", cat: "bitcoin", members: "31K", badge: "free", desc: "Mining profitability, hardware discussion, pool comparisons and Bitcoin hashrate news." },
  { name: "Stablecoin Yield Free", cat: "defi", members: "43K", badge: "free", desc: "Best stablecoin yield strategies with low risk. USDC, USDT and DAI farming opportunities." },
  { name: "Layer 2 Gems Early", cat: "altcoins", members: "66K", badge: "hot", desc: "Arbitrum, Optimism, Polygon and other L2 token opportunities, airdrops and ecosystem updates." },
  { name: "Bitcoin DCA Community", cat: "bitcoin", members: "58K", badge: "free", desc: "Bitcoin DCA strategies, stacking sats guidance and Bitcoin savings plan discussions." },
  { name: "NFT Undervalued Picks", cat: "nft", members: "55K", badge: "hot", desc: "Undervalued NFT collections, rarity tools and early project spotting before they go mainstream." },
  { name: "BTC News 24/7", cat: "news", members: "287K", badge: "hot", desc: "Real-time Bitcoin price news and macro events that move the crypto market every single day." },
  { name: "Regulation Watch Crypto", cat: "news", members: "84K", badge: "free", desc: "Government regulations, SEC news, ETF approvals and legal crypto updates from around the world." },
  { name: "Web3 Dev Signals", cat: "education", members: "47K", badge: "free", desc: "Solidity, Rust and Web3 development tutorials and coding projects for aspiring crypto developers." },
  { name: "Swing Trade Setups Free", cat: "spot", members: "77K", badge: "free", desc: "Swing and position trade setups. Multi-week to multi-month crypto plays with solid fundamentals." },
  { name: "Bear Market Shorts", cat: "futures", members: "42K", badge: "hot", desc: "Bear market setups, shorting strategies and bearish trade alerts for futures traders." },
  { name: "Pro Signals Community", cat: "signals", members: "94K", badge: "free", desc: "Professional-grade free trading signals backed by technical analysis and proper risk management." },
  { name: "PEPE Meme Calls", cat: "meme", members: "255K", badge: "hot", desc: "PEPE, FLOKI, BONK and the hottest meme coin signals. Early calls before mainstream attention." },
  { name: "SOL Meme Coins Early", cat: "meme", members: "187K", badge: "hot", desc: "BONK, WIF, POPCAT and new Solana meme launches tracked in real-time with entry alerts." },
  { name: "DeFi Protocol Watch", cat: "defi", members: "48K", badge: "free", desc: "Uniswap, Aave, Compound, Curve and all major DeFi protocol updates, exploits and opportunities." },
  { name: "VC Funding & IDO Alerts", cat: "news", members: "72K", badge: "hot", desc: "Venture capital rounds, token launches, IDOs and new project funding news in the crypto space." },
  { name: "GameFi & P2E Signals", cat: "altcoins", members: "79K", badge: "hot", desc: "Play-to-earn, GameFi tokens and Web3 gaming opportunities with early entry signals daily." },
];

// ===== BUILD FULL 250+ LIST =====
const EXTRA_SUFFIXES = ['Alpha','Pro','Elite','Network','Hub','Plus','Official','Insider','Premium','Global','DAO','Max'];
const EXTRA_MEMBERS  = ['14K','22K','31K','38K','47K','56K','63K','71K','82K','93K','108K'];
const EXTRA_BADGES   = ['hot','free','hot','free','hot','hot','free'];

const ALL_GROUPS = GROUPS_RAW.map((g, i) => ({ ...g, num: i + 1 }));

while (ALL_GROUPS.length < 260) {
  const base = GROUPS_RAW[(ALL_GROUPS.length) % GROUPS_RAW.length];
  const idx  = ALL_GROUPS.length;
  ALL_GROUPS.push({
    ...base,
    num: idx + 1,
    name: base.name + ' ' + EXTRA_SUFFIXES[idx % EXTRA_SUFFIXES.length],
    members: EXTRA_MEMBERS[idx % EXTRA_MEMBERS.length],
    badge: EXTRA_BADGES[idx % EXTRA_BADGES.length],
    link: base.link || 'https://t.me/mircrypto0',
    featured: false,
  });
}

const CAT_NAMES = {
  signals:'Trading Signals', bitcoin:'Bitcoin', altcoins:'Altcoins', defi:'DeFi',
  nft:'NFT', futures:'Futures', spot:'Spot Trading', pump:'Pumps',
  news:'News', education:'Education', meme:'Meme Coins'
};

const BADGE_LABEL = { hot:'HOT', free:'FREE', signals:'SIGNALS', new:'NEW' };

if (typeof module !== 'undefined') module.exports = { ALL_GROUPS, CAT_NAMES, BADGE_LABEL, PREMIUM_LINK };
