import React, { Component } from "react";

// Function(Sateless Functional Component) can be used here instead of Class
// template shortcut: 'sfc'
// Example 1:
// const NavBar = (props) => {
//     return (
//         <nav class="navbar navbar-light bg-light">
//           <a class="navbar-brand" href="#">
//             Navbar
//             <span className="badge badge-pill badge-secondary m-2">
//               {props.totalCounters}
//             </span>
//           </a>
//         </nav>
//       );
// }

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary m-2">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
