import resolveConfig from "tailwindcss/resolveConfig";

import UrgencyList from "../../shared/UrgencyList/Index";
import DonutChart from "../../shared/DonutChart/Index";

import tailwindConfig from "../../../../tailwind.config";

const ChartTask = () => {
  const {
    theme: { colors },
  } = resolveConfig(tailwindConfig);
  const chartColors = [
    colors["royal-blue"],
    colors["periwinkle-blue"],
    colors.downy,
    colors["light-burgundy"],
  ];

  return (
    <div className="h-[645px] col-span-4 lg:col-span-1 bg-white shadow-default">
      <div className="cont cont-p-v">
        <h5 className="text-[18px] font-bold mb-2">Tapşırıqlar</h5>
        <div>
          <UrgencyList />
          <div>
            <div className="mt-[25px]">
              <DonutChart
                dataSeries={[10, 1, 14, 5]}
                content="Prezidentin tapşırıqları"
                colors={chartColors}
              />
            </div>
            <div className="mt-[25px]">
              <DonutChart
                dataSeries={[30, 2, 40, 8]}
                content="Baş Nazirin tapşırıqları"
                colors={chartColors}
              />
            </div>
            <div className="mt-[25px]">
              <DonutChart
                dataSeries={[35, 7, 28, 30]}
                content="Xüsusi tapşırıqlar"
                colors={chartColors}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTask;
