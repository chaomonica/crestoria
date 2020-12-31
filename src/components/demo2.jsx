import React from 'react';

class Demo2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>{this.props.number}</div>
    )
  }
}
export default Demo2;