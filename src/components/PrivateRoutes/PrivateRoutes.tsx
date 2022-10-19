import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks';

const PrivateRoutes = () => {

    const { isAuth, isSession} = useAppSelector(state => state.auth);
    

    console.log('private route-locatstoargae', isSession);
    console.log('private route', isAuth);

    return (
        (isSession || isAuth) ? <Outlet/> : <Navigate to='/signin'/>
    )
}

export default PrivateRoutes;