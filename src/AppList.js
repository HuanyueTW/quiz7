import React from 'react'
import AppTodos from './AppTodos'

class AppList extends React.Component {

    SubmitDelete (id) {
       //console.log(id);
        this.props.DeleteItemTop(id);
      }
    
      ChangeDone (id) {
        this.props.ChangeCompleteTop(id);
      }

  render () { 
    console.log(this.props.data);
    var value = this.props.choosevalue;
    //var deleteFlag = this.props.data["deleteFlag"];
    
    const a = this.props.data.map(({id, text, complete, deleteFlag}, index) => {
        if (value == '1' && deleteFlag !== true) {
            return  (<AppTodos 
                            key={index} 
                            id={id} 
                            text={text} 
                            complete={complete} 
                            ChangeCompleteItem={this.ChangeDone.bind(this)}                         
                            DeleteItem={this.SubmitDelete.bind(this)}
                      />
            )        
        }
  
        if (value == '2' && complete === false && deleteFlag !== true) {
            return  <AppTodos 
                            key={index} 
                            id={id} 
                            text={text} 
                            complete={complete} 
                            ChangeCompleteItem={this.ChangeDone.bind(this)}                         
                            DeleteItem={this.SubmitDelete.bind(this)}
                      />
        }
  
        if (value == '3' && complete === true && deleteFlag !== true) {
            return  <AppTodos 
                            key={index} 
                            id={id} 
                            text={text} 
                            complete={complete} 
                            ChangeCompleteItem={this.ChangeDone.bind(this)}                         
                            DeleteItem={this.SubmitDelete.bind(this)}
                      />
        }
     })
     /**
     var output=[];
     for(let i = 0; i< this.props.data.length; i++){ 
        const key = this.props.data[i]["index"];
        const id = this.props.data[i]["id"];
        const text = this.props.data[i]["text"];
        const complete = this.props.data[i]["complete"];
        const b = <AppTodos id = {id} key={key} text={text} complete={complete} />
        output.push(b)
     }
    */

    return (
      <div> { a } </div>
      
    )
  }
}

export default AppList;