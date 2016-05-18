var React = require("react");
var Contacts = React.createClass({
    render : function(){
        var conLi = ["旺串演","牛烘烘","白佐","赵烈"].map(function(str){
            return (<li>{str}</li>);
        });
        return (<ul>{conLi}</ul>);
    }
});

React.render(<Contacts/>,document.body);