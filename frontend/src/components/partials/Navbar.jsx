import React from 'react';

function Navbar({ currentUser }) {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            YelpCamp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="/">
                Home
              </a>
              <a className="nav-link" href="/campgrounds">
                Campgrounds
              </a>
              <a className="nav-link" href="/campgrounds/new">
                New Campground
              </a>
            </div>
            <div className="navbar-nav" style={{ marginLeft: "auto" }}>
              {!currentUser ? (
                <>
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </>
              ) : (
                <a className="nav-link" href="/logout">
                  Logout
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
