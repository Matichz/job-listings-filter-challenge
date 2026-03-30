import useFetchJobs from "../hooks/useFetchJobs.tsx";
import Job from "./Job";
import Loading from "./Loading";
import Error from "./Error";
import useFilterContext from "../hooks/useFilterContext.tsx";

function ListJobs() {
  const { filteredJobs } = useFilterContext();
  const { loading, error } = useFetchJobs();

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (filteredJobs.length === 0) return <p>No hay empleos disponibles</p>;

  return (
    <ul className="w-95 flex flex-col gap-15 mt-25 mb-20">
      {filteredJobs.map((job) => (
        <li key={job.id}>
          <Job job={job} />
        </li>
      ))}
    </ul>
  );
}

export default ListJobs;
