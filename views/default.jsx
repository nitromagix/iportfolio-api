

const React = require('react');
// const Nav = require('react-bootstrap/Nav');
const { trace } = require('../helper');
const { Navbar, NavItem, NavDropdown, MenuItem, Nav } = require('react-bootstrap');


function Default(html) {
   // trace(' | default.jsx')('Default(html)')
   // console.log(html);
   return (
      <html>
         <head>
            <title>REST-Rant</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>

            <link rel="stylesheet" href='/css/style.css'></link>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>

         </head>
         <body>
            <header>
               <nav className="navbar navbar-expand-sm navbar-custom">
                  <a href="/" className="navbar-brand marginLeft20">REST-Rant</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
                     <i className="fa fa-bars fa-lg py-1 text-white"></i>
                  </button>
                  <div className="navbar-collapse justify-content-center" id="navbarCustom">
                     <ul className="navbar-nav">
                        <li className="nav-item active">
                           <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/places">Places</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/places/new">Add Place</a>
                        </li>
                     </ul>
                     <span className="ml-auto navbar-text"></span>
                  </div>
               </nav>

            </header>
            <div className='stickyWrapper'>
               <div>
                  <div className='leftBox'>



                  </div>
                  <div className='mainBox'>
                     {/* <h1><a href='/'>REST-Rant</a></h1> */}
                     {html.children}
                  </div>
                  <div className='rightBox'></div>
               </div>



               <div className="push"></div>
            </div>
            <footer className="footer padAll10">By Martin Prost 2021-{(new Date).getFullYear().toString()}</footer>
         </body>
      </html>
   )
}


module.exports = Default;