import React from 'react';
import { render } from 'react-dom';
import {Home} from './components/Home';
import {Header} from './components/Header';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
          homeLink:"Home"
        };
    }

    onGreet(){
        alert("Hello!");
    }
    onChangeHomeLink(newName){
        this.setState({
            homeLink:newName
        });
    }
    render(){

        return(
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      <Header HomeLink={this.state.homeLink}/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      <Home name="Adi"
                            initialAge={22}
                            greet={this.onGreet}
                            changeLink={this.onChangeHomeLink.bind(this)}
                            initialLinkName={this.state.homeLink}
                      />
                  </div>
              </div>
          </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));