import React from 'react';
import './App.css';

const myclass = require('./classes/primary.json');

class App extends React.Component {
  constructor(props)
   {
    super(props);
    this.state = {id:0, class: myclass};
    this.displayJson = this.displayJson.bind(this);
  }


  displayJson()
  {
    this.state.class.db.map(
      (item) => {
        console.log(item.name);


      }
    );
  }


  render()
  {
    return(
      <div id="test-a">
        <ul>
          {this.state.count}
        </ul>
        <button onClick={this.displayJson}>Click</button>
      </div>
    );
  }
}


export default App;
