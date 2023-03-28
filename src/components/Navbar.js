import React from "react";

// export class Navbar extends Component {
  // render() {

const Navbar =()=>{
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
              {" "}
              <b> NewsPanda</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a
                    className="nav-link text-light"
                    aria-current="page "
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/Business">
                    {" "}
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/Entertainment">
                    {" "}
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/General">
                    {" "}
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/Health">
                    {" "}
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/Science">
                    {" "}
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/Sports">
                    {" "}
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/Technology">
                    {" "}
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  // }
// }

export default Navbar;
