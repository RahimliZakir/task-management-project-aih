import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import { DonutChartProps } from "../../../types/interfaces/DonutChart.type";

const DonutChart = ({ dataSeries, content }: DonutChartProps) => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    stroke: {
      width: 0,
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: true,
    },
    colors: ["#456CD8", "#839BE5", "#6ACEBC", "#A03E5F"],
    fill: {
      colors: ["#456CD8", "#839BE5", "#6ACEBC", "#A03E5F"],
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["icradadır", "başlamayıb", "icra edilmişdir", "gecikir"],
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "",
            },
            value: {
              offsetY: -12,
              fontSize: "14px",
              fontWeight: "600",
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="flex flex-col items-center">
      <Chart options={options} series={dataSeries} type="donut" height={170} />
      <p className="text-gull-gray text-[14px] font-semibold text-center">
        {content}
      </p>
    </div>
  );
};

export default DonutChart;
