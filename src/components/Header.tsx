import CurrentFilters from "./CurrentFilters";
import useFilterContext from "../hooks/useFilterContext";

function Header() {
  const { currentFilters } = useFilterContext();

  return (
    <header className="bg-[#5ba4a4] w-full h-50 flex items-center justify-center relative ">
      <img
        className="w-full h-full"
        src="/public/assets/images/bg-header-mobile.svg"
        alt=""
      />
      {currentFilters.length !== 0 && <CurrentFilters />}
    </header>
  );
}

export default Header;
