/* global React ReactDOM */
// for standard you need that syntax above
var React = require('react')
var ReactDOM = require('react-dom')

var MyTitle = require('./MyTitle')


// yanking out the render method and just doing this... 
// just a function!!!
// ES6 arrow:
//   MyFirstComponent = () =>
// current JS:
//   MyFirstComponent = function () {
//  ORRRRR Implicit return - thanks coffeescript
// var MyFirstComponent = () => (
// 		<div>
// 			// caps is a composite I made
// 			// closing / means DONE
//     		<MyTitle title='Whatevs' color='rebeccapurple' />
//     	<div>
//     	<input />
// 	)





var MyFirstComponent = function () {
	return (
		<div>
			// caps is a composite I made
			// closing / means DONE
    		<MyTitle title='Whatevs' color='rebeccapurple' />
    	<div>
    	<input />
	)
}
    


ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))