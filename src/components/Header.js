import React from "react";
const Header = ({ children, onSearch }) => {
  return (
    <div className="ui top menu">
      {/* <div className="header"> */}
      <h2 className="item">Hello World</h2>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => onSearch(e.target.value)}
            />
            <i className="search link icon"></i>
          </div>
          {children}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
