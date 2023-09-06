import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const INITIAL_PAGE = 1;

const ResidentList = ({ residents, currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  //Cantidad de residentes por pagina
  const Resident_Per_Page = 20;

  //Cantidad total de paginas
  const totalPages = Math.ceil(residents.length / Resident_Per_Page);

  //Residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage - 1) * Resident_Per_Page;
  const sliceEnd = sliceStart + Resident_Per_Page;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  //Páginas por bloque
  const PAGES_BLOCK = 5;
  const actualBlock = Math.ceil(currentPage / PAGES_BLOCK);

  const maxPage = actualBlock * PAGES_BLOCK;
  const minPages = maxPage - PAGES_BLOCK + 1;

  //Generar arreglo de las paginas que se van mostrando
  const pages = [];
  for (let i = minPages; i <= maxPage; i++) {
    if (i <= totalPages) {
      pages.push(i);
    }
  }

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [currentLocation]);

  return (
    <section>
      <section
        className={`grid justify-center max-w-screen-sm mx-auto sm:${
          residents.length > 1 && "grid-cols-2"
        } gap-12`}
      >
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>

      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
        INITIAL_PAGE={INITIAL_PAGE}
      />
    </section>
  );
};
export default ResidentList;
