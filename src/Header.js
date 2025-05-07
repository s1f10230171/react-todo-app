import React, { useState } from 'react'
import {Link} from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleContents = () => {
            setIsOpen(!isOpen);
    }
  return (
    <div>
        <div className="App-title row">
            <div className="col-10">
                <h2 className='ms-3'>ToDo管理アプリ</h2>
            </div>
            <div className="col-2">
            <button onClick={toggleContents}>{isOpen ? <i className="bi bi-x-lg"></i>: <i className="bi bi-list"></i>}</button>
            </div>
        </div>
    {isOpen &&(
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                </li>
                <li>
                    <Link to="/history">履歴</Link>
                </li>
            </ul>
        </nav>
    </header>
  )}
    </div>
  )
};

export default Header;