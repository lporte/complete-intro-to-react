var React = require('react')

var MyTitle = React.createClass({
	render() {
		return (
			<div >
			// two curly bracces is just an obj inside of an expression
				<h1 style={{color: this.props.color}}>
					{this.props.title}
				</h1>
			</div>
		)
	}
})

// Gotta have it! not ES6 yet calm down
module.exports = MyTitle