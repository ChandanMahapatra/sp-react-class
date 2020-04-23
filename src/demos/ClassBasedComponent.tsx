import React, { Component } from 'react'

type ClassBasedComponentProps = {
  inputValue: string;
  outputEvent: () => void;
}

type ClassBasedComponentState = {
  customValue: string;
  customNumber: number;
}

export default class ClassBasedComponent extends Component<ClassBasedComponentProps, ClassBasedComponentState> {
  constructor(props: ClassBasedComponentProps) {
    super(props);

    this.state = {
      customValue: 'initial value',
      customNumber: 0
    }

    this.boundHandler = this.boundHandler.bind(this);
  }

  someFn() {
    this.setState({
      customNumber: 5
    });
  }

  unboundHandler() {
    // Sometimes has problems with this
    this.props.outputEvent();

    // someRemoteCall().then(function() { this.props.outputEvent() })
    // someRemoteCall().then(() => { this.props.outputEvent() })
  }

  boundHandler() {
    this.props.outputEvent();
  }

  propHandler = () => {
    this.props.outputEvent();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.outputEvent()}>In line function</button>
        <button onClick={this.props.outputEvent}>Direct binding</button>
        <button onClick={this.unboundHandler}>Unbound Handler</button> {/* Sometimes has problems with 'this' */}
        <button onClick={this.boundHandler}>Bound Handler</button>
        <button onClick={this.propHandler}>Prop Handler</button>
        
      </div>
    )
  }
}
