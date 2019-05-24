import React      from 'react';
import logo       from './logo.svg';
import './App.css';
import {Grid}     from "semantic-ui-react";
import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
// import 'semantic-ui-css/semantic.min.css'

function App() {
  return (

    <div className="ui internally celled grid">
      <div className="row">
        <div className="three wide column" id="chroom-panel">
        1</div>
        <div className="ten wide column" id="msg-panel">



        </div>
        <div className="three wide column" id="users-panel">
        3</div>
      </div>
    </div>

  )
}

export default App;
