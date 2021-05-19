import logo from './logo.svg';
import './App.css';
import LockIcon from './LockIcon'
import Enput from './Enput'

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import React from 'react'
import { ContactMailSharp } from '@material-ui/icons';

class App1 extends React.Component {
  render(){
    return(
      <div className = "App1">
      <div>
        { LockIcon() }
      </div>
      <div>
        { Enput() }
      </div>
    </div>
    );
    }
}
/**
function App1() {
  return (
    <div className = "App">
      <div>
        { LockIcon() }
      </div>
      <div>
        { Enput() }
      </div>
    </div>
    );
   }
 */
export default App1; 