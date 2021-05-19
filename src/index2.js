import React from 'react'; 
import ReactDOM from 'react-dom'; 
import TextField from '@material-ui/core/TextField';
import App2 from './App2'

let data = [
  {id: 0, text: '測試A!!!', complete: true, deleteFlag: false},
  {id: 1, text: '測試B!!!', complete: false, deleteFlag: false},
  {id: 2, text: '測試C!!!', complete: true, deleteFlag: false},
 ]

 class Todo extends React.Component{
  render(){
  return(
    ReactDOM.render(
      <App2 data={data}/>,
      document.getElementById('root')


)

  );
  }
  }
  
  export default Todo;

 