import React, { useState } from 'react'
import {Link} from "react-router-dom";

const Header = () => {
  return (
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
  )
};

export default Header;