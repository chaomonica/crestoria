import React from 'react';
import Demo2 from './demo2.jsx'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [1, 2, 3, 4, 5]
    }

    this.handleClick = this.handleClick.bind(this)
  }

//  handleClick(e) {
//     e.preventDefault();
//     console.log("clicked...")
//   }
//onClick={this.handleClick}

  render () {
    console.log(this)
    return (
      <div>Hi this is demo
        {this.state.arr.map(function(currNum, index){
          return (<div key={index} ><Demo2 number={currNum} /></div>)
        })}
      </div>
    )
  }
}
export default Demo;

