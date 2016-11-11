var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	render() {
		return (
			div(null,
				// displaying the props, can pass in anything in JS!
				h1(null, this.props.title))
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