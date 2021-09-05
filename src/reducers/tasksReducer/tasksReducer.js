const initialTasksState = {
  tasksList: [],
};

export default function tasksReducer(state = initialTasksState, action) {
  switch (action.type) {
    case 'tasks/set': {
      return {
        ...state,
        tasksList: action.payload,
      };
    }

    default:
      return state;
  }
}