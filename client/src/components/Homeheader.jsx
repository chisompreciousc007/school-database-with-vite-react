import  { Component } from 'react'
import { Link } from "react-router-dom";

export default class Homeheader extends Component {
  render() {
    return (
        <header id="header" className="fixed-top">
        <div className="container d-flex">
          <div className="logo mr-auto">
            <h1 className="text-light">
              <a href="index.html">
                <span>Logo</span>
              </a>
            </h1>
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li className="drop-down">
                <Link to="/portal">Portal</Link>
                <ul>
                  <li>
                    <Link to="/students">Student Database</Link>
                  </li>
                  <li>
                    <Link to="/teachers">Staff Database</Link>
                  </li>
                  <li>
                    <Link to="/students/add">Register New Student</Link>
                  </li>
                  <li>
                    <Link to="/teachers/add">Register New Staff</Link>
                  </li>
                  <li>
                    <Link to="/students">Search Student</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
