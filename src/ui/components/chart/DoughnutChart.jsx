import { defaults } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import chartData from '../../../data/chartData.json';
import './doughnutChart.css';

defaults.responsive = true;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'center';
defaults.plugins.title.font.size = 18.5;
defaults.plugins.title.color = 'black';
defaults.plugins.title.font.family = 'FuturaPT Light';

export default function DoughnutChart() {
  return (
    <div id='doughnut-chart'>
      <Doughnut
        data = {{
          labels: chartData.map((data) => data.label),
          datasets: [
            {
              label: 'Quantity',
              data: chartData.map((data) => data.value),
              backgroundColor: [
                'rgba(2, 182, 238, 0.75)',
                'rgba(126, 48, 13, 0.75)',
                'rgba(115, 117, 112, 0.75)',
              ],
              borderColor: [
                'rgba(2, 182, 238, 0.33)',
                'rgba(126, 48, 13, 0.33)',
                'rgba(115, 117, 112, 0.33)',
              ],
            },
          ],
        }}
        options = {{
          plugins: {
            title: {
              text: 'Doughnut Chart',
            },
          },
        }}
      />
    </div>
  )
}