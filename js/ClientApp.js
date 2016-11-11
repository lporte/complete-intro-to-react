/* global React ReactDOM */
// for standard you need that syntax above
var React = require('react')
var ReactDOM = require('react-dom')

var MyTitle = require('./MyTitle')

var div = React.DOM.div

// standard 
var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
    div(
    	null,
    	MyTitleFactory({title: 'Props are cool', color: 'rebeccapurple'}),
    	React.createElement(MyTitle, {title: 'Use props', color: 'mediumaquamarine'}),
    	ce(MyTitle, {title: 'Woah props', color: 'papayawhip'})
    )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))