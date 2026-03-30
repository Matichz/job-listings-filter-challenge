import FilterButton from "./FilterButton";
import useFilterContext from "../hooks/useFilterContext";

interface Props {
  typeFilter: {
    role: string;
    level: string;
    languages: string[];
    tools: string[];
  };
}

function Filters({ typeFilter }: Props) {
  const { role, level, languages, tools } = typeFilter;
  const { setFilters } = useFilterContext();

  return (
    <ul className="flex flex-wrap gap-5 mt-5 border-t border-[#7b8e8e] pt-5">
      <li>
        <FilterButton
          name={role}
          handleFilter={() => setFilters((prev) => ({ ...prev, role }))}
        />
      </li>

      <li>
        <FilterButton
          name={level}
          handleFilter={() => setFilters((prev) => ({ ...prev, level }))}
        />
      </li>

      {tools.map((tool) => (
        <li key={tool}>
          <FilterButton
            name={tool}
            handleFilter={() => {
              setFilters((prev) => ({ ...prev, tools: [...prev.tools, tool] }));
            }}
          />
        </li>
      ))}

      {languages.map((language) => (
        <li key={language}>
          <FilterButton
            name={language}
            handleFilter={() => {
              setFilters((prev) => ({
                ...prev,
                languages: [...prev.languages, language],
              }));
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default Filters;
