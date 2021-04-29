import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"; 
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { 
        id: 1,
        text: 'Doctor Appointment',
        day:'Feb 5th at 2:30pm',
        reminder: true,
    }, 
    {
        id: 2,
        text: 'Meeting at School',
        day:'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day:'Feb 6th at 2:30pm',
        reminder: false ,
    }
  ])

  // Delete Task 
  const deleteTask = (id) => {
    //console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id)); 
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :
       'No tasks to show. '}
    </div>
  );
}

export default App;
