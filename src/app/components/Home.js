import React from 'react';


export class Home extends React.Component{

    constructor(props){
        super();
         this.state = {
             age : props.initialAge,
             status : 0,
             homeLink:props.initialLinkName
         };
         console.log("Constructor");
    }

    componentWillMount(){
        console.log("Component will mount");
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("Component will receive props",nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component update",nextProps,nextState);
        if(nextState.status === 1)
        {
            return false;
        }
        return(true);
    }

    componentWillUpdate(nextProps,nextState){
        console.log("Component will update",nextProps,nextState);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Component did update",prevProps,prevState);
    }

    componentWillUnmount(){
        console.log("Component will unmount");
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

