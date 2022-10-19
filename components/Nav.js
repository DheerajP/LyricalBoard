import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    // <nav className={navStyles.nav}>
    //     <ul>
    //         <li>
    //             <Link href='/'>Home</Link>
    //         </li>
    //         <li>
    //             <Link href='/about'>About</Link>
    //         </li>
    //     </ul>
    // </nav>

    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          Lyrical Board
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                <a>Lyrics</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" href="/songs">
                <a>Songs</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" href="/writers">
                <a>Writers</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                <a> About us</a>
              </Link>
            </li>
            {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdown01">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
