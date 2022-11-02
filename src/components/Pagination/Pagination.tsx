import { useState } from 'react';
import './Pagination.scss'

interface PaginationProps {
  totalUsers: number;
  usersPerPage: number;
  setUsersPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ totalUsers, usersPerPage, setUsersPerPage, currentPage, setCurrentPage }) => {

  const [pageNumbersLimit, setPageNumbersLimit] = useState<number>(5);
  const [minPageNumbersLimit, setMinPageNumbersLimit] = useState<number>(0);
  const [maxPageNumbersLimit, setMaxPageNumbersLimit] = useState<number>(5);
  

  const pageNumbers = [];

  for(let i:number = 1; i <= Math.ceil(totalUsers/usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const onUserPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsersPerPage(Number(e.target.value))
  }

  const paginate = (num: number) => {
    setCurrentPage(num);
  }

  const renderPageNumbers = pageNumbers.map(num => {
    if(num > minPageNumbersLimit && num < maxPageNumbersLimit+1) {
      return <li className={`pagination__controls__page-number ${(currentPage === num) ? 'active' : ''}`} key={num} onClick={() => paginate(num)}>{num}</li>
    } else {
      return null;
    }
  })


  const onPrevButtonClick = () => {
    setCurrentPage(currentPage - 1);

    if((currentPage - 1) % pageNumbersLimit === 0) {
      setMaxPageNumbersLimit(maxPageNumbersLimit - pageNumbersLimit);
      setMinPageNumbersLimit(minPageNumbersLimit - pageNumbersLimit);
    }
  }

  const onNextButtonClick = () => {
    setCurrentPage(currentPage + 1);

    if(currentPage + 1 > maxPageNumbersLimit) {
      setMaxPageNumbersLimit(maxPageNumbersLimit + pageNumbersLimit);
      setMinPageNumbersLimit(minPageNumbersLimit + pageNumbersLimit);
    }
  }

  return (
    <div className='pagination'>
      <div className='pagination__table-context__wrapper'>
        <p className='pagination__table-context__text'>Showing 
        <span className='pagination__table-context__users-per-page_input_wrapper'>
          <input type='number' name='users per page' value={usersPerPage} onChange={onUserPerPageChange} className='pagination__table-context__users-per-page_input' />
        </span> out of {totalUsers}</p>
      </div>
      <ul className='pagination__controls__wrapper'>
        <button id='left_button' className={`pagination__controls__button ${(currentPage === pageNumbers[0]) ? 'disabled' : ''}`} disabled={(currentPage === pageNumbers[0]) ? true : false} onClick={() => onPrevButtonClick()}><img src={process.env.PUBLIC_URL + '/icons/left-arrow-icon.svg'} alt='icon'  className='pagination__controls__button_icon'/></button>
        <ul className='pagination__controls__page-number__wrapper'>
          { renderPageNumbers }
        </ul>
        <button id='right_button' className={`pagination__controls__button ${(currentPage === pageNumbers.length) ? 'disabled' : ''}`} disabled={(currentPage === pageNumbers.length) ? true : false} onClick={() => onNextButtonClick() }><img src={process.env.PUBLIC_URL + '/icons/right-arrow-icon.svg'} alt='icon'  className='pagination__controls__button_icon'/></button>
      </ul>
      
    </div>
  )
}

export default Pagination;