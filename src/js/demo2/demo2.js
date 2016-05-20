/**
 * Created by specter on 2016/5/20.
 */
import React from 'react';
class Contacts extends React.Component{
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
        let conLi = ["旺串演","牛烘烘","白佐","赵烈"].map(name => (<li>{name}{this.props.aha}</li>));
        return (<ul>{conLi}</ul>);
    }
}

React.render(<Contacts aha="doub"/>,document.body);