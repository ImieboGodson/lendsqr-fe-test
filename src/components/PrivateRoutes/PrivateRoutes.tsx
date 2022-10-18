import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    const isAuth: boolean = JSON.parse(localStorage.getItem('isAuth')!);

    console.log(isAuth);

    // useEffect(() => {
       
    // }, [])
    
    

    return (
        isAuth ? <Outlet/> : <Navigate to='/signin'/>
    )
}

export default PrivateRoutes;