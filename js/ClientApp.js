var div = React.DOM.div
var h1 = React.DOM.h1

// create a new type element
//  this is called a composite component
var MyTitle = React.createClass({
	render() {
		return (

			div(null,
				h1(null, 'Another thing!'))
		)
	}
})

var MyFirstComponent = (
	// one top lvl element w/ children 
    div(
    	null,
    	// one specific instance of the class
    	React.createElement(MyTitle, null),
    	React.createElement(MyTitle, null),
    	React.createElement(MyTitle, null),
    	React.createElement(MyTitle, null)
    )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))