import React from 'react';

export const Header = (props)=>{
        //stateless component
        return(
          <nav className="navbar navbar-default">
              <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.HomeLink}</a></li>
                        </ul>
                    </div>
              </div>
          </nav>
        );
}