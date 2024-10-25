export default function doneReducer(state, action) {
  switch (action?.type) {
    case "done":
      if (action.addTask.update) {
        return action.done.map((task) => {
          if (task.id === action.addTask.id) {
            action.addTask.setUpdate(false);
            return action.addTask;
          }
          return task;
        });
      } else {
        return [...state, { ...action.addTask, id: action.id }];
      }

    case "filter": {
      return action.allTask.filter((task) => {
        if (task.category === "done") {
          return task;
        }
      });
    }

    case "blank": {
      return action.allTask;
    }
    case "delete": {
      return action.done.filter((task) => task.id !== action.taskDelete.id);
    }
    case "sort": {
      return [
        ...action.done.sort(
          (after, before) => new Date(before.dueDate) - new Date(after.dueDate)
        ),
      ];
    }
    case "sortReverse": {
      return [
        ...action.done.sort(
          (after, before) => new Date(after.dueDate) - new Date(before.dueDate)
        ),
      ];
    }
    default:
      break;
  }
}
