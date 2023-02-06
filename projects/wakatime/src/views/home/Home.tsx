import { useRef } from 'react';
import * as echarts from 'echarts';

function renderEcharts(dom: HTMLElement) {
  let myChart = echarts.init(dom);
  myChart.setOption({
    title: {
      text: 'ECharts示例'
    },
    tooltip: {},
    xAxis: {
      data: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'React']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
}

function Home() {
  const chartRef = useRef(null);
  const updateData = () => {
    console.log('updateData');
    console.log('chartRef: ', chartRef.current);
    if (chartRef.current) {
      renderEcharts(chartRef.current);
    }
  };

  return (
    <div className="w-full">
      <button className="uppercase btn w-64 rounded-full block m-2" onClick={updateData}>
        sync
      </button>
      <div ref={chartRef} className="w-full h-80 bg-blue-50"></div>
    </div>
  );
}

export default Home;
