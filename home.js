var InlineEditor = React.createClass({
	getInitialState: function(){
  	return {text: "Change it",show:"hidden text-center"};
  },
  handleChange: function(e){
  	this.setState({text: e.target.value});
  },
  handleClick: function(){
  	if(this.state.show == "show text-center")
  	this.setState({show: "hidden text-center"});
    else
    this.setState({show: "show text-center"});
  },
  render: function(){
  	return <div>
    			<div className={this.state.show}><input type="text" value={this.state.text} onChange={this.handleChange} /></div>
          <button onClick={this.handleClick}>@</button>		
          <p>{this.state.text}</p>
         	</div>;
  }
});

ReactDOM.render(<InlineEditor />,document.getElementById('container'))
