import React, { useEffect, useRef } from 'react';
import { createChart, CandlestickSeries, IChartApi } from 'lightweight-charts';
import { CandlestickType } from '../CandleStick/CandleStickType';

const ChartComponent: React.FC<CandlestickType> = ({ klines }) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        textColor: 'black',
        background: { type: 'solid', color: 'white' },
      },
      height: 760,
    });
    chartRef.current = chart;

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });
    const seriesData = klines.map((kline) => {
      return {
        close: kline.close,
        high: kline.high,
        low: kline.low,
        open: kline.open,
        time: kline.time,
      };
    });
    candlestickSeries.setData(seriesData);
    chart.timeScale().fitContent();

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [klines]);

  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: '700px' }} />
  );
};

export default ChartComponent;
