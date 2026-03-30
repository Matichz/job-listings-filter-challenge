import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilterContext debe usarse dentro del Provider");
  }

  return context;
}

export default useFilterContext;
