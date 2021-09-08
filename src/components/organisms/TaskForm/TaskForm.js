import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '../../atoms';
import TextInput from '../../atoms/TextInput/TextInput';
import { taskCreateAction } from '../../../reducers/tasksReducer/actions';
import { TaskFormContainer } from './TaskForm.styles';

const TaskForm = ({ title: initialTitle }) => {
  const [title, setTitle] = useState(initialTitle);
  const dispatch = useDispatch();
  const onCreate = useCallback(() => {
    dispatch(taskCreateAction({ title }));
    setTitle('');
  }, [title, dispatch]);

  return (
    <TaskFormContainer>
      <TextInput value={title} placeholder="task title" onValueChange={setTitle} />
      <Button onClick={onCreate}>Create</Button>
    </TaskFormContainer>
  );
};

TaskForm.defaultProps = {
  title: '',
};

TaskForm.propTypes = {
  title: PropTypes.string,
};

export default TaskForm;
