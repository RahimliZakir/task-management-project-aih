import UrgencyList from "../../shared/UrgencyList/Index";
import DonutChart from "../../shared/DonutChart/Index";
import { useEffect, useRef } from "react";

const ChartTask = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref.current?.clientHeight);
  }, []);

  return (
    <div ref={ref} className="col-span-1 bg-white shadow-default">
      <div className="cont cont-p-v">
        <h5 className="text-[18px] font-bold">Məsələlər</h5>
        <div className="mt-2">
          <UrgencyList />
          <div className="mt-2">
            <DonutChart
              dataSeries={[10, 1, 14, 5]}
              content="Prezidentin tapşırıqları"
            />
            <DonutChart
              dataSeries={[30, 2, 40, 8]}
              content="Baş Nazirin tapşırıqları"
            />
            <DonutChart
              dataSeries={[35, 7, 28, 30]}
              content="Xüsusi tapşırıqlar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTask;
