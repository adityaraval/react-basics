import React from 'react';


export class Home extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <p>Name is {this.props.name}</p>
                <p>Age is {this.props.age}</p>
                <hr/>

            </div>
        );
    }
}

Home.PropTypes = {
    name : React.PropTypes.string,
    age : React.PropTypes.number
};

