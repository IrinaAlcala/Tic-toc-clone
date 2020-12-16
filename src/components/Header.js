import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <Link to='/'>
                <div className="logo"></div>

            </Link>
            <div className='upload-container'>
                <div className='section'>
                    <Link to='/upload'>
                        <div className='upload' />

                        
                    </Link>
                    <img className='personal' src="https://imgur.com/VELOkOx.png" />
                </div>
            </div>
        </div>
    )
}

export default Header