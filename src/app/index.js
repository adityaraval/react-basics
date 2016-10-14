import React from 'react';
import { render } from 'react-dom';
import {Home} from './components/Home';
import {Header} from './components/Header';

class App extends React.Component{
    render(){
        var user = {
            name:'Adi',
            hobbies:['Cricket','Kabbadi']
        };
        return(
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      <Header/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      <Home name="Adi" age="22" user={user}>
                          <p>this is paragraph</p>
                      </Home>
                  </div>
              </div>
          </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));