import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid items-center justify-center mx-auto w-[308px] pt-5">
      <article className="border-4 border-[#8EFF8B]/80 sm:h-[550px]">
        <header className="h-[300px]">
          <img src={residentInfo?.image} alt="" />
          <div className="flex items-center justify-center bg-black/60 border-2 border-[#8EFF8B]/80 w-[120px] p-1 rounded-md gap-2 relative bottom-12 left-24">
            <div
              className={`h-[14px] aspect-square  rounded-full ${
                residentStatus[residentInfo?.status]
              }`}
            ></div>
            {residentInfo?.status}
          </div>
        </header>
        <section>
          <h3 className="font-bold text-2xl p-2 border-[0.5px] border-[#8EFF8B]/20">
            {residentInfo?.name}
          </h3>
          <ul className="p-4">
            <li className="grid grid-cols-[140px,_auto] font-bold">
              <span className="font-semibold text-zinc-500">Specie:</span>{" "}
              {residentInfo?.species}
            </li>
            <li className="grid grid-cols-[140px,_auto] font-bold">
              <span className="font-semibold text-zinc-500">Origin: </span>
              {residentInfo?.origin.name}
            </li>
            <li className="grid grid-cols-[140px,_auto] font-bold">
              <span className="font-semibold text-zinc-500">Time appear: </span>
              {residentInfo?.episode.length} Time
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};
export default ResidentCard;
