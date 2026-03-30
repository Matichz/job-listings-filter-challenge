import Header from "./components/Header";
import ListJobs from "./components/ListJobs";
import FilterProvider from "./context/FilterContext";

function App() {
  return (
    <FilterProvider>
      <div>
        <div className="w-full flex flex-col gap-10">
          <Header />
          <main className="w-full flex justify-center">
            <ListJobs />
          </main>
        </div>
      </div>
    </FilterProvider>
  );
}

export default App;
