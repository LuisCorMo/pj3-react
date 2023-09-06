const Pagination = ({
  pages,
  setCurrentPage,
  currentPage,
  totalPages,
  INITIAL_PAGE,
}) => {
  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= totalPages) return nextPage;
      return prevState;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= INITIAL_PAGE) return newPage;
      return prevPage;
    });
  };

  return (
    <ul className="mt-10 mb-8 text-center flex  justify-center items-center gap-4">
      {currentPage >= 2 && (
        <li
          className="text-lg font-bold grid content-center cursor-pointer"
          onClick={handlePrevPage}
        >
          {"<"}
        </li>
      )}
      {pages.map((page) => (
        <li
          className={`cursor-pointer h-[35px] grid items-center aspect-square border border-teal-950 ${
            currentPage == page && "bg-teal-950"
          }`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
      {currentPage > 1 && (
        <li
          className="text-lg font-bold grid content-center cursor-pointer"
          onClick={handleNextPage}
        >
          {">"}
        </li>
      )}
    </ul>
  );
};
export default Pagination;
