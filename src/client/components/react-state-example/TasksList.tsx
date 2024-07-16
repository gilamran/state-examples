import React from 'react';
import { ITask } from './ReactStateExampleRoot';

interface IProps {
  tasks: ITask[];
  projectId: number;
  toggleTaskCompletion: (projectId: number, taskId: number) => void;
}

export function TasksList({ tasks, projectId, toggleTaskCompletion }: IProps) {

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>{task.todo}</span>
          <button onClick={() => toggleTaskCompletion(projectId, task.id)}>
            {task.isCompleted ? 'Undo' : 'Complete'}
          </button>
        </li>
      ))}
    </ul>
  );
}
