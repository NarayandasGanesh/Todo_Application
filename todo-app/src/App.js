import './App.css';
// import TasksLists from './Components/TasksLists';
// import TaskForm from './Components/TaskForm';
// import TaskEditForm from './Components/TaskEditForm';
// import { useState } from 'react';
import AllRoutes from './Routes/AllRoutes';

function App() {
  // const [selectedTask, setSelectedTask] = useState(null);

  // const handleTaskCreated = (newTask) => {
  //   setSelectedTask(null);
  // };

  // const handleTaskEdited = (editedTask) => {
  //   setSelectedTask(null);
  // };
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <TasksLists onSelectTask={(task) => setSelectedTask(task)} />
      <TaskForm onTaskCreated={handleTaskCreated} />
      {selectedTask && <TaskEditForm task={selectedTask} onTaskEdited={handleTaskEdited} />} */}
      <AllRoutes />
      {/* <Todo /> */}
    </div>
  );
}

export default App;
