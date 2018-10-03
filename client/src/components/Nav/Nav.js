import React from "react";

const Nav = () => (
  // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

  //   <a className="navbar-brand" href="/">
  //     <img src="ss_logo.png" width="100" height="50" class="d-inline-block align-top" alt="Logo"/>
  //   </a>
  // </nav>
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <a className="navbar-brand" href="/">
      <img src="Insure-app.jpg" width="100" height="50" className="d-inline-block align-top" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/profile">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/automobile">Automobile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/homeowners">Homeowners</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/medical">Medical</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/lifeinsurance">Life Insurance</a>
        </li>
      </ul>
     
    </div>
  </nav>

);

export default Nav;
