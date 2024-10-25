export function searchReducer(state, action) {
  // console.log(state);
  switch (action.type) {
    case "search": {
      let eventValue = action.event.target.value;

      return action.allTask.filter((task) => {
        return task.taskName?.toLowerCase().includes(eventValue.toLowerCase());
      });
    }
  }
}
