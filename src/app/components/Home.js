import React from 'react';


export class Home extends React.Component{

    constructor(props){
        super();
         this.age = props.age;
    }

    onMakemeOlder(){
        this.age +=20;
        console.log(this.age);
    }
    render(){
        return(
            <div>
                <p>Name is {this.props.name}</p>
                <p>Age is {this.age}</p>
                <hr/>
                <button className="btn btn-primary" onClick={()=>this.onMakemeOlder()}>Make me older</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name : React.PropTypes.string,
    age : React.PropTypes.number
};

