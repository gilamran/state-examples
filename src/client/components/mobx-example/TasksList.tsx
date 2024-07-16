import { observer } from 'mobx-react';
import React from 'react';
import { TasksStore } from './stores/TasksStore';

interface IProps {
  tasksStore: TasksStore;
}

export const TasksList = observer(function TasksList({ tasksStore }: IProps) {
  return (
    <ul>
      {tasksStore.tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>{task.todo}</span>
          <button onClick={() => task.toggleCompletion()}>{task.isCompleted ? 'Undo' : 'Complete'}</button>
        </li>
      ))}
    </ul>
  );
});
