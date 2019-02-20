import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[
        {id:1,name:'test1'},
        {id:2,name:'test2'},
        {id:3,name:'test3'},
        {id:4,name:'test4'},
        {id:5,name:'test5'},
      ]
    }
  }
  

  render() {
    var items = this.state.items;
    return (
      <div className="items-panel">
        <ul>
          <FlipMove>
          {
            items.map((item,index) =>(
              <li key={item.id} className='list-group-item'>
                <div className='name'>{item.name}</div>
              
                <div className='btn-group'>
                  {index>0?<button className='btn btn-primary'onClick={() => this.sortUp(index)}>UP</button>:null}
                  {index<items.length -1 ?<button className='btn btn-dark'onClick={() => this.sortDown(index)}>Down</button>:null}
                </div>

              </li>
            ))
          }
          </FlipMove>
        </ul>
      </div>
    );
  }





  sortUp(index){
    this.resort(index,-1);
  }
  sortDown(index){
    this.resort(index,1);
  }
  resort(index,diff){
    var items = this.state.items;
    var item = items[index];
    items.splice(index,1);
    items.splice(index + diff,0,item);
    this.setState({items:items});
  }
}





export default App;
