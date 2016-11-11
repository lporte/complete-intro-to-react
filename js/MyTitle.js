var React = require('react')

var h1 = React.DOM.h1
var h2 = React.DOM.h2


var MyTitle = React.createClass({
	render() {
		return (
			div({style: {color: 'red'}},
				h1({style: {color: this.props.color}}, this.props.title),
				h2(null, 'WAT')
			)
		)
	}
})

// Gotta have it! not ES6 yet calm down
module.exports = MyTitle