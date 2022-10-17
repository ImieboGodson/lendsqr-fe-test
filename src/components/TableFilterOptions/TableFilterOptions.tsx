import { User } from '../../model';
import './TableFilterOptions.scss'

interface TableFilterProps {
  users: User[];
  displayTableFilter: boolean;
  setDisplayTableFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableFilterOptions: React.FC<TableFilterProps> = ({ users, displayTableFilter, setDisplayTableFilter }) => {
  return (
    // <div >
      <form className={`table-filter-options ${displayTableFilter ? 'display' : ''}`}>
        <div className='table-filter-options__input_wrapper'>
          <img src={process.env.PUBLIC_URL + '/icons/dropdown-arrow-icon.svg'} alt='icon'  className='table-filter-options__input_wrapper__select_input-icon'/>
          <label htmlFor='organisation' className='table-filter-options__input_wrapper__label'>Organisation</label>
          <select name="organisation" id="organisations" className='table-filter-options__input_wrapper__input'>
            <option value='' disabled selected hidden>Select</option>
            {
              users.map(user => {
                return <option key={user.id} value={user.orgName}>{user.orgName}</option>
              })
            }
          </select>
        </div>
        <div className='table-filter-options__input_wrapper'>
          <label htmlFor='username' className='table-filter-options__input_wrapper__label'>Username</label>
          <input name='username' type='name' placeholder='username' className='table-filter-options__input_wrapper__input'/>
        </div>
        <div className='table-filter-options__input_wrapper'>
          <label htmlFor='email' className='table-filter-options__input_wrapper__label'>Email</label>
          <input name='email' type='email' placeholder='Email' className='table-filter-options__input_wrapper__input'/>
        </div>
        <div className='table-filter-options__input_wrapper'>
          <label htmlFor='date' id='date_input' className='table-filter-options__input_wrapper__label'>Date</label>
          <input name='date' type='date' placeholder='Date' className='table-filter-options__input_wrapper__input'/>
        </div>
        <div className='table-filter-options__input_wrapper'>
          <label htmlFor='phone number' className='table-filter-options__input_wrapper__label'>Phone Number</label>
          <input name='phone number' type='tel' inputMode='numeric' placeholder='Phone Number' className='table-filter-options__input_wrapper__input'/>
        </div>
        <div className='table-filter-options__input_wrapper'>
          <img src={process.env.PUBLIC_URL + '/icons/dropdown-arrow-icon.svg'} alt='icon'  className='table-filter-options__input_wrapper__select_input-icon'/>
          <label htmlFor='status' className='table-filter-options__input_wrapper__label'>Status</label>
          <select name="status" id="status" className='table-filter-options__input_wrapper__input'>
            <option value='' disabled selected hidden>Select</option>
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
            <option value='pending'>Pending</option>
            <option value='blacklisted'>Blacklisted</option>
          </select>
        </div>
        <div className='table-filter-options__buttons__wrapper'>
          <button className='table-filter-options__buttons table-filter-options__reset-button'>Reset</button>
          <button type='submit' className='table-filter-options__buttons table-filter-options__submit-button'>Filter</button>
        </div>
      </form>
    // </div>
  )
}

export default TableFilterOptions;