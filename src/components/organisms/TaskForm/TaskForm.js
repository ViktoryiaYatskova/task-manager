import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'components/atoms';
import { AppModes } from 'constants/general';
import { findTasksAndSubTasksAction, taskCreateAction } from 'reducers/tasksReducer/actions';
import { setAppModeAction } from 'reducers/appReducer/actions';
import { isSearchModeSelector } from 'reducers/appReducer/selectors';
import { TaskFormContainer } from './TaskForm.styles';

const TaskForm = ({ title: initialTitle }) => {
  const [title, setTitle] = useState(initialTitle);
  const dispatch = useDispatch();
  const isSearchMode = useSelector(isSearchModeSelector);
  const onCreate = useCallback(() => {
    dispatch(taskCreateAction({ title }));
    setTitle('');
  }, [title, dispatch]);

  // UseCallback is redundant here
  const onToggleSearchMode = useCallback(() => {
    // Clear inbox on leaving search-mode
    if (isSearchMode) setTitle('');

    dispatch(setAppModeAction(isSearchMode ? AppModes.VIEW : AppModes.SEARCH));
  }, [dispatch, isSearchMode]);

  const onTitleChange = useCallback(
    value => {
      setTitle(value);
      if (isSearchMode) dispatch(findTasksAndSubTasksAction(value));
      // TODO: too many if-s => consider to split the component into to
    },
    [isSearchMode, dispatch, title],
  );

  return (
    <TaskFormContainer>
      <TextInput value={title} placeholder="task title" onValueChange={onTitleChange} />
      {!isSearchMode && <Button onClick={onCreate}>Create</Button>}
      <Button onClick={onToggleSearchMode}>{isSearchMode ? 'Exit Search' : 'Start Search'}</Button>
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
