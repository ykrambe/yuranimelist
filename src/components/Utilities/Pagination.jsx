const Pagination = ({ page, totalPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = async() => {
    scrollTop();
    await setPage((prevState) => prevState + 1);
  };

  const handlePrevPage = async() => {
    scrollTop();
    await setPage((prevState) => prevState - 1);
  };

  const goToFirstPage = async() => {
    scrollTop();
    await setPage((prevState) => prevState = 1)
  }

  const goToLastPage = async () => {
    scrollTop();
    await setPage((prevState) => (prevState = totalPage));
  };



  return (
    <div className="flex justify-center text-2xl items-center py-4 px-2 gap-4 text-color-primary">
      {page <= 1 ? null : (
        <>
          <button
            className="transition-all hover:text-color-accent"
            onClick={goToFirstPage}
          >
            {"<<"}
          </button>
          <button
            className="transition-all hover:text-color-accent"
            onClick={handlePrevPage}
          >
            Prev
          </button>
        </>
      )}

      <p>
        {page} of {totalPage}
      </p>
      {page >= totalPage ? null : (
        <>
        <button
          className="transition-all hover:text-color-accent"
          onClick={handleNextPage}
        >
          Next
        </button>
        <button
          className="transition-all hover:text-color-accent"
          onClick={goToLastPage}
        >
          {">>"}
        </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
