import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import { createContext } from "react";
import useFetchJobs from "../hooks/useFetchJobs";
import type { TypeFilters, TypeFilterContext } from "../types/types";

export const FilterContext = createContext<TypeFilterContext | null>(null);

type Props = {
  children: ReactNode;
};

export default function FilterProvider({ children }: Props) {
  const { data } = useFetchJobs();

  const [filters, setFilters] = useState<TypeFilters>({
    role: "",
    level: "",
    tools: [],
    languages: [],
  });

  const currentFilters: string[] = [];

  const filteredJobs = useMemo(() => {
    return data.filter((jobs) => {
      const matchesRole =
        filters.role === "" ||
        jobs.role.toLowerCase().includes(filters.role.toLowerCase());

      const matchesLevel =
        filters.level === "" ||
        jobs.level.toLowerCase().includes(filters.level.toLowerCase());

      // los filtros del usuario coinciden con algunas de las herramientas del empleo
      const matchesTools =
        filters.tools.length === 0 ||
        filters.tools.every((tool) => {
          return jobs.tools
            .map((t) => t.toLowerCase())
            .includes(tool.toLowerCase());
        });

      const matchesLanguages =
        filters.languages.length === 0 ||
        filters.languages.every((language) => {
          return jobs.languages
            .map((l) => l.toLowerCase())
            .includes(language.toLowerCase());
        });

      return matchesRole && matchesLevel && matchesTools && matchesLanguages;
    });
  }, [filters]);

  return (
    <FilterContext.Provider
      value={{ currentFilters, setFilters, filteredJobs }}
    >
      {children}
    </FilterContext.Provider>
  );
}
