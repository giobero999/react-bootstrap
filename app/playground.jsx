var Message = React.createClass({
	render:function  () {
		return(
			<div id='message'>
			<p className="message-text">message</p>
			<label htmlfor="firstName">First name</label>
			<input name="firstName" type="text" /> <br/>
			<button type="button" className="btn btn-default">button</button>
			</div>
		);
	}
})

var mountNode = document.getElementById('demo')
React.render(<Message/>, mountNode);
