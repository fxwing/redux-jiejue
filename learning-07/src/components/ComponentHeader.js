import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {test} from '../store/actions/test'
import {logOut} from '../store/actions/user'

@connect(
  (state) => ({ number: state.test.number, userInfo: state.user.userInfo}),
  { test,logOut}
)class ComponentHeader extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  componentDidMount(){
    this.props.test({number:10000})
    this.props.logOut()
  }
  render(){
    return (
      <header>
        <h1>这里是头部{this.props.number}</h1>
        <p>userinfo{this.props.userInfo}</p>
      </header>
    )
  }
}
export default ComponentHeader