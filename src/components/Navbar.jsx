import React from 'react'
import{auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import LogOut from './LogOut';

const Style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={Style.nav}>
        <h1 className={Style.heading}>Chat App</h1>
        {user ? <LogOut /> : <SignIn/>}

    </div>
  );
};

export default Navbar;