import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  },
  elements: {
    point: {
      borderWidth: 0
    }
  }
};
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const data = {
  labels,
  datasets: [
    {
      label: 'Đã tiêm ',
      data: labels.map(() =>
        faker.datatype.number({ min: 400000, max: 2200000 })
      ),
      borderColor: 'darkblue',
      backgroundColor: 'darkblue',
      with: 0,
      pointBackgroundColor: '#EE0033'
    }
  ]
};

const Chart1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  width: 1447px;
  height: 594px;
  margin-top: 40px;
`;

const ContainerChart = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px;
  gap: 4px;
  width: 1368px;
  height: 710px;
  background: #ffffff;
  border: 1px solid rgba(38, 56, 150, 0.14);
  box-shadow: 0px 4px 12px rgba(34, 41, 47, 0.12);
  border-radius: 10px;
  & .chartLine {
    width: 2000px;
    height: 510px;
  }
`;

const ChartOne = () => {
  return (
    <Chart1>
      <ContainerChart>
        <Typography
          sx={{
            width: '199px',
            height: '32px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '160%',
            letterSpacing: '-0.05px',
            color: 'rgba(0, 0, 0, 0.87)'
          }}>
          Dữ liệu tiêm theo ngày
        </Typography>
        <Line className="chartLine" options={options} data={data} />
      </ContainerChart>
    </Chart1>
  );
};

export default ChartOne;
