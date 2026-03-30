import type { TypeJob } from "../types/types";
import Filters from "./Filters";

type Props = {
  job: TypeJob;
};

function Job({ job }: Props) {
  // const job = Props.job; //-> equivalente a la destructuracion de props

  return (
    <article className="bg-white p-6 relative rounded-lg shadow-lg/15 shadow-[#5ba4a4] flex ">
      {job.featured && (
        <div className="bg-green-400 h-full w-1.5 absolute left-0 top-0 rounded-l-lg"></div>
      )}

      <div>
        <img className="w-13 absolute -top-6" src={job.logo} alt="" />

        <div className="flex flex-col gap-2 mt-5">
          <div className="flex items-center gap-6">
            <h3 className="text-[#5ba4a4] text-base font-bold">
              {job.company}
            </h3>
            <div className="flex gap-2">
              {job.new && (
                <div className="bg-green-400 h-fit flex px-2 pt-1 pb-0.2 rounded-full">
                  <span className="text-sm text-white font-medium uppercase ">
                    new!
                  </span>
                </div>
              )}
              {job.featured && (
                <div className="bg-green-900 h-fit flex items-center px-2 pt-1 pb-0.5 rounded-full">
                  <span className="text-sm text-white font-medium uppercase ">
                    featured
                  </span>
                </div>
              )}
            </div>
          </div>

          <h5 className="text-[#2c3a3a] text-base font-bold">{job.position}</h5>

          <div className="flex gap-2 [&>p]:text-[#7b8e8e] [&>p]:font-medium [&>span]:text-[#7b8e8e]">
            <p>{job.postedAt}</p>
            <span>•</span>
            <p>{job.contract}</p>
            <span>•</span>
            <p>{job.location}</p>
          </div>
        </div>

        <Filters
          typeFilter={{
            role: job.role,
            level: job.level,
            languages: job.languages,
            tools: job.tools,
          }}
        />
      </div>
    </article>
  );
}

export default Job;
