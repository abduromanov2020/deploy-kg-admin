import Image from 'next/image';

type Tpagination = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Tpagination) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    // Case when totalPages is less than 4
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage <= 2) {
      // First page, next page, third page, triple dots, last page
      pageNumbers.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 1) {
      // First page, triple dots, second-to-last page, last page
      pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      // First page, triple dots, current page, next page, last page
      pageNumbers.push(1, '...', currentPage, currentPage + 1, totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className='flex items-center justify-center my-4 border border-dark-300 p-2 rounded-md'>
      <button
        className='group p-3 rounded-md hover:bg-primary-500 text-sm border border-dark-300 disabled:bg-white'
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <Image src='/svg/arrow-left.svg' alt='Article Icon' width={7} height={7} className='hover:text-white'/>
      </button>
      <div className='mx-2'>
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-2 border border-dark-300 rounded-md text-sm font-semibold text-neutral-500 ${
              page === currentPage
                ? 'bg-primary-500 text-white'
                : 'hover:bg-primary-500 hover:text-white'
            }`}
            onClick={() => {
              if (typeof page === 'number') {
                handlePageClick(page);
              }
            }}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className='group p-3 rounded-md hover:bg-primary-500 text-sm border text-white border-dark-300 disabled:bg-white'
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <Image src='/svg/arrow-right.svg' alt='Article Icon' width={7} height={7}/>
      </button>
    </div>
  );
};

export default Pagination;
