import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loadable from 'react-loadable';



const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./tabs/dummyTable'),
  loading: Loading,
});

const Chart = Loadable({
  loader: () => import('./tabs/dummyChart'),
  loading: Loading,
});

const List = Loadable({
  loader: () => import('./tabs/dummyList'),
  loading: Loading,
});



class App extends Component {
  constructor() {
    super()


    this.state = {
      tabs: []
  }
}

  componentDidMount() {
    fetch('/users')
      .then(response => response.json())
      .then(tabs => this.setState({tabs}))
  }

  render() {
    return (
        <Router>
          <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dummyTable" component={Home}/>
            <Route path="/dummyChart" component={Chart}/>
            <Route path="/dummyList" component={List}/>
          </Switch>
          <hr/>

          <ul>
            {
              this.state.tabs.map((tab) => {
                return ( 
                <li key={tab.id}><Link to={tab.path.slice(5, -3)}>{tab.title}</Link></li> 
              )
            })}
          </ul>
        </div>
      </Router>
    )
  }
}

export default App;
