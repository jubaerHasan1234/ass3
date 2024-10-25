/* add task reducer function start */
function addTaskReducer(state, action) {
  switch (action.type) {
    case "change": {
      const name = action.event.target.name;
      const value = action.event.target.value;

      return { ...state, [name]: value };
    }
    case "save": {
      if (
        state.taskName &&
        state.description &&
        state.dueDate &&
        state.category
      ) {
        action.onClose(false);
        return [state];
      } else {
        alert("Please all fill this field.");
        return state;
      }
    }
    case "blank":
      return initialValue;
    case "edit": {
      return {
        ...action.value,
        update: !action.update,
        setUpdate: action.setUpdate,
      };
    }
  }
}
/* add task reducer function end */

/* initial value start */
const initialValue = {
  taskName: "",
  description: "",
  dueDate: "",
  category: "",
};
/* initial value end */

export { addTaskReducer, initialValue };
