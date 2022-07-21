import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { year: 'Enero', population: 4525 },
  { year: 'Febrero', population: 3018 },
  { year: 'Marzo', population: 5682 },
  { year: 'Abril', population: 4440 },
  { year: 'Mayo', population: 5310 },
  { year: 'Junio', population: 5127 },
  { year: 'Julio', population: 6330 },
];

export default class GraficaSimple extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="Visitas Mensuales" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}