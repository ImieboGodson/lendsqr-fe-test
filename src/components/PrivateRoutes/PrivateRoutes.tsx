import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks';

const PrivateRoutes = () => {

    const { isAuth, isSession} = useAppSelector(state => state.auth);

    return (
        (isSession || isAuth) ? <Outlet/> : <Navigate to='/signin'/>
    )
}

export default PrivateRoutes;