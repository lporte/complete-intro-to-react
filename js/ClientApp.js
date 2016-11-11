var div = React.DOM.div
var h1 = React.DOM.h1
var h2 = React.DOM.h2


var MyTitle = React.createClass({
	// all components need a render method
	// must be 'pure' in that its state shouldn't change
	render() {
		// MUST return a component
		return (
			// this is the first element (always one)
			// first arg is the styling
			div({style: {color: 'red'}},
				// displaying the props, can pass in anything in JS!
				// children elements are second arg
				h1(null, this.props.title),
				h2(null, 'WAT')
			)
		)
	}
})

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
    div(
    	null,
    	// passing in props
    	MyTitleFactory({title: 'Props are cool'}),
    	React.createElement(MyTitle, {title: 'Use props'}),
    	ce(MyTitle, {title: 'Woah props'})
    )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))