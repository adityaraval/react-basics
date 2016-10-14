import React from 'react';


export class Home extends React.Component{

    constructor(props){
        super();
         this.state = {
             age : props.initialAge,
             status : 0
         };
    }

    onMakemeOlder(){
        this.setState({
            age:this.state.age + 10,
            status:1
        });
    }
    render(){
        return(
            <div>
                <p>Name is {this.props.name}</p>
                <p>Age is {this.state.age}</p>
                <p> Status is {this.state.status}</p>
                <hr/>
                <button className="btn btn-primary" onClick={()=>this.onMakemeOlder()}>Make me older</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name : React.PropTypes.string,
    initialAge : React.PropTypes.number,
    greet: React.PropTypes.func
};

