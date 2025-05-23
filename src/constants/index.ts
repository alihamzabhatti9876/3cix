  export const cryptocurrencies = [
    { name: "Bitcoin", symbol: "BTC", icon: '/Bitcoin.svg', price: "¥ 721,882", change: "4.66", changeIsPositive: false, color: "crypto-btc" },
    { name: "Ethereum", symbol: "ETH", icon: '/ETH.svg', price: "¥ 22,370", change: "0.45", changeIsPositive: true, color: "crypto-eth" },
    { name: "NEM", symbol: "XEM", icon: '/XEM.svg', price: "¥ 10.604", change: "1.07", changeIsPositive: false, color: "crypto-xem" },
    { name: "Ripple", symbol: "XRP", icon: '/XRP.svg', price: "¥ 50.839", change: "0.66", changeIsPositive: true, color: "crypto-xrp" }
  ];

   export const colorMap: Record<string, { bg: string, text: string, fill: string }> = {
    'crypto-btc': { bg: 'bg-[#FFC246]', text: 'text-[#FFC246]-600', fill: '#FFDA8E' },
    'crypto-eth': { bg: 'bg-[#5470DE]', text: 'text-[#5470DE]-500', fill: '#5470DE' },
    'crypto-xem': { bg: 'bg-[#47DFCF]', text: 'text-[#47DFCF]-500', fill: '#47DFCF' },
    'crypto-xrp': { bg: 'bg-[#93D7FD]', text: 'text-[#93D7FD]-500', fill: '#93D7FD' },
    'crypto-bch': { bg: 'bg-green-50', text: 'text-green-500', fill: '#22C55E' },
    'crypto-ltc': { bg: 'bg-gray-50', text: 'text-gray-500', fill: '#6B7280' },
    'crypto-etc': { bg: 'bg-purple-50', text: 'text-purple-500', fill: '#8B5CF6' },
    'crypto-fct': { bg: 'bg-orange-50', text: 'text-orange-500', fill: '#F97316' },
    'crypto-lsk': { bg: 'bg-indigo-50', text: 'text-indigo-500', fill: '#6366F1' }
  };

    export  const marketCapData = [
        { symbol: "BTC", icon: '/Bitcoin.svg', name: "Bitcoin", price: "¥ 721,882", change: "-4.66", changeIsPositive: false, color: "crypto-btc" },
        { symbol: "ETH", icon: '/ETH.svg', name: "Ethereum", price: "¥ 22,370", change: "+0.45", changeIsPositive: true, color: "crypto-eth" },
        { symbol: "BCH", icon: '/BCH_O.svg', name: "Bitcoin Cash", price: "¥ 48,676", change: "+0.38", changeIsPositive: true, color: "crypto-bch" },
        { symbol: "LTC", icon: '/Bitcoin.svg', name: "Litecoin", price: "¥ 5,788.5", change: "-0.23", changeIsPositive: false, color: "crypto-ltc" },
        { symbol: "ETC", icon: '/LTC.svg', name: "Ethereum Classic", price: "¥ 1,660.7", change: "-0.09", changeIsPositive: false, color: "crypto-etc" },
        { symbol: "XRP", icon: '/Bitcoin.svg', name: "Ripple", price: "¥ 50.839", change: "+0.66", changeIsPositive: true, color: "crypto-xrp" },
        { symbol: "FCT", icon: '/ETH.svg', name: "Factom", price: "¥ 534.68", change: "+8.47", changeIsPositive: true, color: "crypto-fct" },
        { symbol: "LSK", icon: '/BCH_O.svg', name: "Lisk", price: "¥ 321.14", change: "-0.47", changeIsPositive: false, color: "crypto-lsk" },
        { symbol: "XEM", icon: '/Bitcoin.svg', name: "NEM", price: "¥ 10.604", change: "-1.07", changeIsPositive: false, color: "crypto-xem" },
    ];