
function NavBar() {
    return (
        //<!-- Navbar -->
    
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><h3>Me</h3></a>
          <div style={{width: "60%"}}>

          </div>          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>    
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>  
              {/*<li className="nav-item">
                <button type="button" className="btn btn-light">Login</button>
                </li>*/}
            </ul>
          </div>
        </div>
    </nav>

    );
}