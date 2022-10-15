import './Work-in-progress.scss';

const Error = () => {
  return (
    <div className='work-in-progress'>
        <div className='work-in-progress__center-container'>
            <img src={process.env.PUBLIC_URL + '/images/contruction-worker.gif'} alt='icon'  className='work-in-progress__image'/>
            <div className='work-in-progress__text_wrapper'>
              <p className='work-in-progress__text'>Huh... Work is ongoing here, check back later.</p>
            </div>
        </div>
    </div>
  )
}

export default Error;