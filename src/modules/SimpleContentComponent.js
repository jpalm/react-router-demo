import React from 'react'

// create SimpleContentComponent class
export default React.createClass ({

  render() {
  	var divStyle = {
  		border: '1px grey solid',
  		width: '65%',
  		margin: 'auto',
	}
    return (
      <div style={divStyle}>
       	<h3>SimpleContentComponent on {this.props.text}</h3>
     	<p>{this.props.p1content}</p>
      	<p>{this.props.children}</p>
      </div>
    )
  }
}) 