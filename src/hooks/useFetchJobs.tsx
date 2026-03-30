import { useState, useEffect } from "react";
import type { TypeJob } from "../types/types";

export default function useFetchJobs() {
  const [data, setData] = useState<TypeJob[]>([]);
  const [loading, setLoading] = useState(true); // Empezamos cargando
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/public/mocks/data.json");
        if (!response.ok) {
          throw new Error(
            `Error ${response.status}: No se pudo obtener los empleos`,
          );
        }
        const data = await response.json();
        setData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return { data, loading, error };
}
