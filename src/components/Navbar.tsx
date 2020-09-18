import React from "react"


export const Navbar:React.FC = () =>(

<div className="container mb-3 mt-2">
    <nav className="nav justify-content-end">  
        <a className="navbar-brand mr-auto" href="#">Logo</a>
        <li className="nav-item nav-link "><a href="/" >Home</a></li>
        <li className="nav-item nav-link"><a href="/" >Shop All</a></li>
        <li className="nav-item nav-link"><a href="/" >About</a></li>
        <li className="nav-item nav-link"><a href="/" className="">Log In</a></li>
        <li className="nav-item nav-link">
        <a href="/" ><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bag"
            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5
             3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"/>
        </svg>
        </a>
        </li>
    </nav>
</div>

)