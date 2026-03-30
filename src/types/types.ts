export interface TypeJob {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface TypeFilters {
  role: string;
  level: string;
  tools: string[];
  languages: string[];
}

export interface TypeFilterContext {
  currentFilters: string[];
  setFilters: React.Dispatch<React.SetStateAction<TypeFilters>>;
  filteredJobs: TypeJob[];
}
