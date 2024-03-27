import UrgencyList from "../../shared/UrgencyList/Index";
import DonutChart from "../../shared/DonutChart/Index";

const ChartTask = () => {
  return (
    <div className="col-span-4 lg:col-span-1 bg-white shadow-default">
      <div className="cont cont-p-v">
        <h5 className="text-[18px] font-bold">Tapşırıqlar</h5>
        <div>
          <UrgencyList />
          <div>
            <div className="mt-6">
              <DonutChart
                dataSeries={[10, 1, 14, 5]}
                content="Prezidentin tapşırıqları"
              />
            </div>
            <div className="mt-6">
              <DonutChart
                dataSeries={[30, 2, 40, 8]}
                content="Baş Nazirin tapşırıqları"
              />
            </div>
            <div className="mt-6">
              <DonutChart
                dataSeries={[35, 7, 28, 30]}
                content="Xüsusi tapşırıqlar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTask;
