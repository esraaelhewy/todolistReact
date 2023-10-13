import TodoItems from "./Component/TodoItems/TodoItems";
import AddItems from "./Component/AddItem/AddItem";
import  React,{ Component } from "react";



class App extends Component {
  state= {
    items :[
      {id:1 , name:'Esraa' , age:21},
      {id:2 , name:'Muhammed' , age:18},
      {id:3 , name:'Laila' , age:30}
    ]
  }
  deleteItems = (id) => {
        let items = this.state.items.filter(item =>{
        return item.id !== id;
    })
        this.setState({items});
  }
  addItem =(item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items:items});
  }

  render(){
    return (
      <div className="App container">
        <h1 className="text-center">ToDo List App</h1>
        <TodoItems items={this.state.items} deleteItems={this.deleteItems}/>
        <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;


/*
2 component ==> add(form) / delete
*/
