import React from 'react';
import { ITask, useStore } from './StoreProvider';

interface IProps {
  tasks: ITask[];
  projectId: number;
}

export function TasksList({ tasks, projectId }: IProps) {
  const { toggleTaskCompletion } = useStore();

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
