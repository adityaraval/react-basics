import React from 'react';


export class Home extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <p>Name is {this.props.name}</p>
                <p>Age is {this.props.age}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hob,i)=> <li key={i}>{hob}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.PropTypes = {
    name : React.PropTypes.string,
    age : React.PropTypes.number,
    user : React.PropTypes.object,
    children : React.PropTypes.element.isRequired
};

