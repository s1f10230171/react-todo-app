import React, { useState } from 'react'
import {Link} from "react-router-dom";

function Header() {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleContents = () => {
    //         setIsOpen(!isOpen);
    // }
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand">ToDo管理アプリ</a>
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id="navbarContent">
                <ul className='navbar-nav mb-2'>
                    <li className='nav-item'>
                        <Link to="/" className="text-white text-decoration-none nav-link-hover">ホーム</Link>
                    </li>
                </ul>
                <ul className='navbar-nav mb-2'>
                    <li className='nav-item'>
                        <Link to="/history" className="text-white text-decoration-none nav-link-hover">履歴</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    // <div>
    //     <div className="App-title row">
    //         <div className="col-10">
    //             <h2 className='ms-3'>ToDo管理アプリ</h2>
    //         </div>
    //         <div className="col-2">
    //         <button onClick={toggleContents}>{isOpen ? <i className="bi bi-x-lg"></i>: <i className="bi bi-list"></i>}</button>
    //         </div>
    //     </div>
    // {isOpen &&(
    // <header>
    //     <nav>
    //         <ul>
    //             <li>
    //                 <Link to="/">ホーム</Link>
    //             </li>
    //             <li>
    //                 <Link to="/history">履歴</Link>
    //             </li>
    //         </ul>
    //     </nav>
    // </header>
//   )}
//     </div>
  )
};

export default Header;