import React from 'react';
import Tab from './Tab'
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/ }
           
           {props.tabs.map(tab => (
        <Tab
          
          // key={tab.id}
          tab={tab}
        />))}
           
      </div>
    </div>
  )
}

// Make sure to use PropTypes to validate your types!
export default Tabs

// import React from 'react';

// import Todo from './Todo';

// const TodoList = props => {
//   return (
//     <div>
      // {props.todos.map(todo => (
      //   <Todo
      //     handleToggleComplete={props.handleToggleComplete}
      //     key={todo.id}
      //     todo={todo}
      //   />
//       ))}
//     </div>
//   );
// };

// export default TodoList;