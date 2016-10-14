import React from 'react';
import { render } from 'react-dom';
import {Home} from './components/Home';
import {Header} from './components/Header';

class App extends React.Component{
    onGreet(){
        alert("Hello!");
    }
    render(){

        return(
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      <Header HomeLink="Home"/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      <Home name="Adi" initialAge={22} greet={this.onGreet} />
                  </div>
              </div>
          </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));