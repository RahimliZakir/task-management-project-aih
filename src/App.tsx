import Header from "./components/layouts/Header/Index";
import ChartTask from "./components/pages/ChartTask/Index";
import ListTask from "./components/pages/ListTask/Index";
import SelectedTask from "./components/pages/SelectedTask/Index";
import ModalTask from "./components/shared/ModalTask/Index";

const App = () => {
  return (
    <>
      <Header />
      <main className="cont">
        <section id="selected-task-chart-section" className="mt-3">
          <div className="grid grid-cols-4 gap-4">
            <SelectedTask />
            <ChartTask />
          </div>
        </section>
        <ListTask />
        <ModalTask />
      </main>
    </>
  );
};

export default App;
