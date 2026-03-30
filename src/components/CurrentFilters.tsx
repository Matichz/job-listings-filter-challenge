import CurrentFilterList from "./CurrentFilterList";

function CurrentFilters() {
  return (
    <div className="bg-white w-95 h-fit absolute top-35 rounded-lg shadow-lg/15 shadow-[#5ba4a4] flex justify-between items-center gap-8 p-6">
      <CurrentFilterList />
      <button className="h-fit font-bold text-[#7b8e8e] mr-2">Clear</button>
    </div>
  );
}

export default CurrentFilters;
