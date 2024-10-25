export default function toDoReducer(state, action) {
  switch (action?.type) {
    case "todo":
      // console.log("ll");
      if (action.addTask.update) {
        return action.toDo.map((task) => {
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
        if (task.category === "todo") {
          return task;
        }
      });
    }

    case "blank": {
      return action.allTask;
    }
    case "delete": {
      return action.toDo.filter((task) => task.id !== action.taskDelete.id);
    }
    case "sort": {
      return [
        ...action.toDo.sort(
          (after, before) => new Date(before.dueDate) - new Date(after.dueDate)
        ),
      ];
    }
    case "sortReverse": {
      return [
        ...action.toDo.sort(
          (after, before) => new Date(after.dueDate) - new Date(before.dueDate)
        ),
      ];
    }
    default:
      break;
  }
}
