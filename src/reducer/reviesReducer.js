export default function revicesReducer(state, action) {
  switch (action?.type) {
    case "revised":
      if (action.addTask.update) {
        return action.revised.map((task) => {
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
        if (task.category === "revised") {
          return task;
        }
      });
    }

    case "blank": {
      return action.allTask;
    }
    case "delete": {
      return action.revised.filter((task) => task.id !== action.taskDelete.id);
    }
    case "sort": {
      return [
        ...action.revised.sort(
          (after, before) => new Date(before.dueDate) - new Date(after.dueDate)
        ),
      ];
    }
    case "sortReverse": {
      return [
        ...action.revised.sort(
          (after, before) => new Date(after.dueDate) - new Date(before.dueDate)
        ),
      ];
    }
    default:
      break;
  }
}
