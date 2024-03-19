import Header from "./components/layouts/Header/Index";
import ChartTask from "./components/pages/ChartTask/Index";
import SelectedTask from "./components/pages/SelectedTask/Index";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section id="selected-task-chart-section" className="mt-3">
          <div className="cont">
            <div className="grid grid-cols-4 gap-4">
              <SelectedTask />
              <ChartTask />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
