import React from 'react';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
  Point
} from 'victory';

import currencyFormatter from './currency-formatter';

const Chart = ({
  clearHighlighted,
  data,
  setHighlighted,
  smallScreen
}) => {
  const axisStyles = {
    axis: {
      stroke: '#667699'
    },
    ticks: {
      stroke: '#667699'
    },
    tickLabels: {
      fontFamily: 'Avenir, sans-serif',
      fill: '#fff',
      fontSize: smallScreen ? 18 : 12
    },
    grid: {
      stroke: '#667699'
    }
  };

  return (
    <div onMouseLeave={ clearHighlighted }>
      <svg className='hide'>
        <defs>
          <linearGradient id="gradientFill"
            x1="0%" y1="0%" x2="100%" y2="0%"
          >
            <stop offset="0%" stopColor="#f55a32"/>
            <stop offset="100%" stopColor="#fa2e5d"/>
          </linearGradient>
        </defs>
      </svg>

      <VictoryChart
        animate={{ duration: 300 }}
        theme={VictoryTheme.material}
        width={smallScreen ? 600 : 900}
        height={400}
        domainPadding={{x: [0, -10]}}
        padding={{
          top: 20,
          right: 0,
          bottom: 40,
          left: smallScreen ? 120 : 80
        }}
        scale={{
          y: 'linear',
          x: 'time'
        }}
        containerComponent={
          <VictoryVoronoiContainer
            dimension="x"
            onActivated={setHighlighted}
            labels={() => ''}
            labelComponent={(
              <VictoryTooltip
                orientation='left'
                flyoutComponent={
                  <Point
                    symbol="circle"
                    size={smallScreen ? 8 : 5}
                    style={{
                      fill: '#fff',
                      stroke: '#ff809b',
                      strokeWidth: 3
                    }}
                  />
                }
              />
            )}
          />
        }
      >
        <VictoryAxis
          style={axisStyles}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={tick => currencyFormatter.format(tick)}
          style={axisStyles}
        />

        <VictoryArea
          interpolation='natural'
          style={{
            data: {
              fill: 'url(#gradientFill)',
              strokeWidth: 2,
              stroke: '#ff809b'
            }
          }}
          data={data}
        />
      </VictoryChart>
    </div>
  );
};

export default Chart;
