import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Auth from '../Auth';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
    }

    login(){
        Auth.authenticate();
        console.log(Auth.getAuth());
    }

    logout(){
        Auth.signout();
    }

    render(){
        
        return(
            <div className='header'>
                {/* <Link to='/' className='link'>Home</Link><br/>
                <Link to='protected' className='link'>Protected</Link><br/>
                <button onClick={this.login} style={{border: '2px solid coral'}}><Link to='protected' className='link'>Login</Link></button><br/>
                <button onClick={this.logout} style={{border: '2px solid coral'}}><Link to='/' className='link'>Logout</Link></button> */}
            </div>
        );
    }
}

export default Header;
