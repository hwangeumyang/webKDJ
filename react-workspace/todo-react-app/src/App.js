import React from 'react';
import Todo from './Todo';
import Todo2 from "./Todo2";
import Mock from "./TodoMock";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        item: [ {id: 0, title: "Hello world 1", done: true},
         {id: 1, title: "Hello world 2", done: false}
        ],
    };

    
  }


  render() {
    // var i= 0 ;
    var output = "";
    
    var mock = [];
    for(var i = 0; i<3; ++i) { 
      // mock[i] = <Mock/>
      mock = mock.concat(<Mock/>);
    }
    
    // console.log(new Mock().render());
    console.log(output);
    console.log((<Mock/>));
    console.log(<div></div>);
    var a = <div><div></div><div></div></div>;
    console.log(a);

		var todos = [];
		for(var i=0; i<2; ++i) {
			todos[i] = <Todo item={this.state.item[i]} />;
		}

    var todoItems = this.state.item.map(
      (item, idx) => (
        <Todo item={item} key={item.id} />
        
      )

    );

    

    // return <div>{todos}</div>;
		return (
			<div className="App">
				{/* {todos} */}
        {todoItems}
			</div>
		);

    

    return (
        <div className="App">
          <Todo item={this.state.item[0]} />
          <Todo item={this.state.item[1]} />
          <Todo item={{id: 0, title: "Hello world 1", done: true}} />
          <Todo2 item={this.state.item} />
          <Mock />
        </div>
    );
  }

}

export default App;
