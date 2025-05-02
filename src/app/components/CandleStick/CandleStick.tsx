import React, { useEffect, useRef } from 'react';
import {
  createChart,
  CandlestickSeries,
  IChartApi,
  CrosshairMode,
} from 'lightweight-charts';
import { CandlestickType } from '../CandleStick/CandleStickType';

const ChartComponent: React.FC<CandlestickType> = ({ klines }) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: { type: 'solid', color: '#ffffff' },
        textColor: '#191919',
        fontSize: 12,
      },
      grid: {
        vertLines: { color: '#eee' },
        horzLines: { color: '#eee' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          color: '#8c8c8c',
          width: 1,
          style: 0,
          labelBackgroundColor: '#f2f2f2',
        },
        horzLine: {
          color: '#8c8c8c',
          width: 1,
          style: 0,
          labelBackgroundColor: '#f2f2f2',
        },
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: false,
      },
    });

    chartRef.current = chart;

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderUpColor: '#26a69a',
      borderDownColor: '#ef5350',
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    candlestickSeries.setData(
      klines.map((kline) => ({
        open: kline.open,
        high: kline.high,
        low: kline.low,
        close: kline.close,
        time: kline.time,
      }))
    );

    chart.timeScale().fitContent();

    const resizeObserver = new ResizeObserver(() => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
        });
        chartRef.current.timeScale().fitContent();
      }
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [klines]);

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: '100%',
        height: '700px',
        position: 'relative',
      }}
    />
  );
};

export default ChartComponent;
