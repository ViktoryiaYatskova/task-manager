import React from 'react'
import { TaskShape } from '../../molecules/Task/Task'
import LabelsInput from '../../molecules/LabelsInput/LabelsInput'

const TaskForm = ({ title, labels }) => {
  return <div>
    <input type="text" value={title}/>
    <LabelsInput labels={labels}/>
  </div>
};

TaskForm.PropTypes = TaskShape;

export default TaskForm;