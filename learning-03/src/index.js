var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/ComponentHeader';
import ComponentFooter from './components/ComponentFooter';
import BodyIndex from './components/BodyIndex';

class Index extends React.Component {

  render() {

    return (
      <div>
        <ComponentHeader />
        <BodyIndex userid={1234534346} username={"zero42342"}/>
        <ComponentFooter />
      </div>
    );
  }
}


ReactDOM.render(
  <Index />, document.getElementById('app'));
