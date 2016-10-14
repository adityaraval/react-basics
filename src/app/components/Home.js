import React from 'react';


export class Home extends React.Component{

    constructor(props){
        super();
         this.state = {
             age : props.initialAge,
             status : 0,
             homeLink:props.initialLinkName
         };
    }

    onMakemeOlder(){
        this.setState({
            age:this.state.age + 10,
            status:1
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event){
        this.setState({
           homeLink:event.target.value
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
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event)=>this.onHandleChange(event)} />
                <button className="btn btn-primary" onClick={()=>this.onChangeLink()}>Change Home Link</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name : React.PropTypes.string,
    initialAge : React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName:React.PropTypes.string
};

