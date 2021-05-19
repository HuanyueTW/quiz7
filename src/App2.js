/**
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


import React from 'react'
import AppList from './AppList.js'
import AppForm from './AppForm.js'
//import AppFooter from './AppFooter.js'

class App2 extends React.Component {
  state = {
      choosevalue : 1,
      data: this.props.data
  }
  
  ChooseValue (id) {
    this.setState({choosevalue:id});
  }

  OnAddTodoItem (newItem) {
    let newdata = this.state.data.concat(newItem);
    this.setState({data : newdata});
  }


  //
  AllChangeComplete (id) {
    let newdata = this.state.data.map((item,index) => {
        if(item.id == id) {
          item.complete = !item.complete;
        }
        return item;
    })
    this.setState({data : newdata});
  }

  AllOnDeleteItem (id) {
    console.log(id);
    let newdata = this.state.data.map(function (item) {
      console.log(item);
      if (item.id == id) {
        item.deleteFlag = true;
      }
      return item
    })
    this.setState({ data: newdata });
  }
  //  

  render () {
    const { data } = this.state; 
    return (
      <div className='ui comments'>
        <h1><font  face="Arial" color = "redblue">CGU Todolist</font></h1>
        <div className='ui divider'></div>
        <AppForm 
          AddTodoItem={this.OnAddTodoItem.bind(this)} />
        <AppList  
          data={this.state.data} 
          choosevalue={this.state.choosevalue} 
          ChangeCompleteTop={this.AllChangeComplete.bind(this)}
          DeleteItemTop={this.AllOnDeleteItem.bind(this)} 
        />
      

      </div>
    )
  }
}

export default App2;