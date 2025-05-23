export const generateChartData = (isPositive: boolean) => {
  const points = 20;
  const result = [];

  for (let i = 0; i < points; i++) {
    let value;

    if (isPositive) {

      value = 10 + Math.sin(i / 3) * 3 + (i / points) * 5 + Math.random() * 2;
    } else {
     
      value = 20 - Math.sin(i / 3) * 3 - (i / points) * 5 + Math.random() * 2;
    }

    result.push({ value });
  }

  return result;
};

export const generateCandlestickData = (count = 100, startPrice = 720000) => {
    const data = [];
    let currentPrice = startPrice;

    for (let i = 0; i < count; i++) {
        const volatilityFactor =
            (i > 30 && i < 35) || (i > 60 && i < 65) ? 2.5 :
                (i > 15 && i < 20) || (i > 45 && i < 50) || (i > 75 && i < 80) ? 2 : 1;

        const change = (Math.random() - 0.5) * 1500 * volatilityFactor;
        const close = Math.max(currentPrice + change, 710000);

        const wickSize = Math.random() * 1500 * volatilityFactor;
        const high = close + (Math.random() * wickSize);
        const low = Math.max(close - (Math.random() * wickSize), 705000);

        const open: any = i === 0 ? currentPrice : data[i - 1].close;
        const volume = Math.floor(Math.random() * 80 + 20) * volatilityFactor;

        const hour = Math.floor(i / 8) % 9;
        const minute = (i % 8) * 7.5;
        const formattedTime = `${String(hour).padStart(2, '0')}:${String(Math.floor(minute)).padStart(2, '0')}`;

        let color = '#facc15'; // yellow
        if (close > open) color = '#9D7FFE'; // green
        else if (close < open) color = '#39D3EC'; // red

        data.push({ time: formattedTime, open, close, high, low, volume, color });
        currentPrice = close;
    }

    return data;
};