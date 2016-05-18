/**
 * Created by specter on 2016/5/18.
 */
import React from 'react';
class Contacts extends React.Component{
    render(){
        let conLi = ["旺串演","牛烘烘","白佐","赵烈"].map(name => (<li>{name}</li>));
        return (<ul>{conLi}</ul>);
    }
}

React.render(<Contacts/>,document.body);