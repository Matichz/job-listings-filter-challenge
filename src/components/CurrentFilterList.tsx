import useFilterContext from "../hooks/useFilterContext";

function CurrentFilterList() {
  const { currentFilters } = useFilterContext();

  return (
    <ul className="w-full h-fit flex flex-wrap gap-5">
      {currentFilters.map((filter: string) => (
        <li
          key={filter}
          className="h-8 bg-[#effafa] text-[#5ba4a4] font-bold flex items-center gap-3 pl-3 rounded-sm"
        >
          <span>{filter}</span>
          <button className="bg-[#5ba4a4] h-full px-2 rounded-r-sm">
            <img src="/public/assets/images/icon-remove.svg" alt="" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CurrentFilterList;
