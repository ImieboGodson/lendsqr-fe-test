import './Pagination.scss'

interface PaginationProps {
  totalUsers: number;
  usersPerPage: number;
  setUsersPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ totalUsers, usersPerPage, setUsersPerPage, currentPage, setCurrentPage }) => {

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

  return (
    <div className='pagination'>
      <div className='pagination__table-context__wrapper'>
        <p className='pagination__table-context__text'>Showing 
        <span className='pagination__table-context__users-per-page_input_wrapper'>
          <input type='number' name='users per page' value={usersPerPage} onChange={onUserPerPageChange} className='pagination__table-context__users-per-page_input' />
        </span> out of {totalUsers}</p>
      </div>
      <ul className='pagination__controls__wrapper'>
        <button id='left_button' className={`pagination__controls__button ${(currentPage === pageNumbers[0]) ? 'disabled' : ''}`} disabled={(currentPage === pageNumbers[0]) ? true : false} onClick={() => setCurrentPage(currentPage - 1)}><img src={process.env.PUBLIC_URL + '/icons/left-arrow-icon.svg'} alt='icon'  className='pagination__controls__button_icon'/></button>
        <ul className='pagination__controls__page-number__wrapper'>
          {
            pageNumbers.map(num => {
              return <li className={`pagination__controls__page-number ${(currentPage === num) ? 'active' : ''}`} key={num} onClick={() => paginate(num)}>{num}</li>
            })
          }
        </ul>
        <button id='right_button' className={`pagination__controls__button ${(currentPage === pageNumbers.length) ? 'disabled' : ''}`} disabled={(currentPage === pageNumbers.length) ? true : false} onClick={() => setCurrentPage(currentPage + 1)}><img src={process.env.PUBLIC_URL + '/icons/right-arrow-icon.svg'} alt='icon'  className='pagination__controls__button_icon'/></button>
      </ul>
      
    </div>
  )
}

export default Pagination;