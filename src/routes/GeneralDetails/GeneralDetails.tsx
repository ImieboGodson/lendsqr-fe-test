import { formatCurrency } from '../../utils/formatCurrency';
import { useAppSelector } from '../../utils/hooks';
import './GeneralDetails.scss';

const GeneralDetails = () => {

    const { user, loading } = useAppSelector(state => state.user);
    console.log('in general_details', user);


  return (
    <div className='general-details'>
        <div className='general-details__sections'>
            <div className='general-details__sections__header'>
                <p className='general-details__sections__header-text'>Personal Information</p>
            </div>
            <ul className='general-details__sections__body'>
                {
                    (loading) ?
                    (
                        <>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                        </>
                    )
                    :
                    (
                        <>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>FULL NAME</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.profile.firstName} {user?.profile.lastName}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>PHONE NUMBER</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.phoneNumber}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>EMAIL ADDRESS</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.email}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>BVN</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.profile.bvn}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>GENDER</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.profile.gender}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>MARITAL STATUS</p>
                                <p className='general-details__sections__body__items_user-details-text'>NA</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>CHILDREN</p>
                                <p className='general-details__sections__body__items_user-details-text'>None</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>TYPE OF RESIDENCE</p>
                                <p className='general-details__sections__body__items_user-details-text'>NA</p>
                            </li>
                        </>
                    )
                }
            </ul>
        </div>
        <div className='general-details__sections'>
            <div className='general-details__sections__header'>
                <p className='general-details__sections__header-text'>Education and Employment</p>
            </div>
            <ul className='general-details__sections__body'>
                {
                    (loading) ?
                    (
                        <>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                        </>
                    )
                    :
                    (
                        <>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>LEVEL OF EDUCATION</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.education.level}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>EMPLOYMENT STATUS</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.education.employmentStatus}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>SECTOR OF EMPLOYMENT</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.education.sector}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>DURATION OF EMPLOYMENT</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.education.duration}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>OFFICE EMAIL</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.education.officeEmail}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>MONTHLY INCOME</p>
                                <p className='general-details__sections__body__items_user-details-text'>{`${formatCurrency(Number(user?.education.monthlyIncome[0]))} - ${formatCurrency(Number(user?.education.monthlyIncome[1]))}`}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>LOAN REPAYMENT</p>
                                <p className='general-details__sections__body__items_user-details-text'>{formatCurrency(Number(user?.education.loanRepayment))}</p>
                            </li>
                        </>
                    )
                }
            </ul>
        </div>
        <div className='general-details__sections'>
            <div className='general-details__sections__header'>
                <p className='general-details__sections__header-text'>Socials</p>
            </div>
            <ul className='general-details__sections__body'>
                {
                    (loading) ?
                    (
                        <>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                        </>
                    )
                    :
                    (
                        <>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>TWITTER</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.socials.twitter}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>FACEBOOK</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.socials.facebook}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>INSTAGRAM</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.socials.instagram}</p>
                            </li>
                        </>
                    )
                }
            </ul>
        </div>
        <div className='general-details__sections'>
            <div className='general-details__sections__header'>
                <p className='general-details__sections__header-text'>Guarantor</p>
            </div>
            <ul className='general-details__sections__body'>
                {
                    (loading) ?
                    (
                        <>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                                <span className='general-details__sections__body__items__skeleton-loader skeleton'></span>
                            </li>
                        </>
                    )
                    :
                    (
                        <>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>FULL NAME</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.guarantor.firstName} {user?.guarantor.lastName}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>GENDER</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.guarantor.gender}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>PHONE NUMBER</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.guarantor.phoneNumber}</p>
                            </li>
                            <li className='general-details__sections__body__items'>
                                <p className='general-details__sections__body__items_title-text'>ADDRESS</p>
                                <p className='general-details__sections__body__items_user-details-text'>{user?.guarantor.address}</p>
                            </li>
                        </>
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default GeneralDetails;