export default function onProgress(state, action) {
  switch (action?.type) {
    case "inprogress": {
      if (action.addTask.update) {
        return action.progress.map((task) => {
          if (task.id === action.addTask.id) {
            action.addTask.setUpdate(false);
            return action.addTask;
          }
          return task;
        });
      } else {
        return [...state, { ...action.addTask, id: action.id }];
      }
    }
    case "filter": {
      return action.allTask.filter((task) => {
        if (task.category === "inprogress") {
          return task;
        }
      });
    }

    case "blank": {
      return action.allTask;
    }
    case "delete": {
      return action.progress.filter((task) => task.id !== action.taskDelete.id);
    }
    case "sort": {
      return [
        ...action.progress.sort(
          (after, before) => new Date(before.dueDate) - new Date(after.dueDate)
        ),
      ];
    }
    case "sortReverse": {
      return [
        ...action.progress.sort(
          (after, before) => new Date(after.dueDate) - new Date(before.dueDate)
        ),
      ];
    }
    default:
      break;
  }
}
