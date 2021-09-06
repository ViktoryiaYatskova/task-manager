import React, { useState } from 'react'
import { TaskShape } from '../../molecules/Task/Task'
import LabelsInput from '../../molecules/LabelsInput/LabelsInput'
import { Button } from '../../atoms'
import TextInput from '../../atoms/TextInput/TextInput'
import { taskCreateAction } from '../../../reducers/tasksReducer/actions'
import { useDispatch } from 'react-redux'

const TaskForm = ({ title: initialTitle = '', labels: initialLabels = []}) => {
  const [title, setTitle] = useState(initialTitle);
  const [labels, setLabels] = useState(initialLabels);
  const dispatch = useDispatch();

  return (<div>
    <TextInput value={title} placeholder='task title' onValueChange={setTitle}/>
    <LabelsInput labels={labels} onValueChange={setLabels}/>
    <Button onClick={() => dispatch(taskCreateAction({ title, labels }))}>Create</Button>
  </div>);
};

TaskForm.PropTypes = TaskShape;

export default TaskForm;