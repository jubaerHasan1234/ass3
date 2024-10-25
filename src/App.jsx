import { useReducer, useState } from "react";
import AddTask from "./Component/Projectify/AddTask";
import Projectify from "./Component/Projectify/Projectify";
import Sidebar from "./Component/Sidebar/Sidebar";
import { AddTaskContex } from "./context/contex";
import { addTaskReducer, initialValue } from "./reducer/addTaskReducer";
import doneReducer from "./reducer/doneReducer";
import onProgress from "./reducer/onProgress";
import revicesReducer from "./reducer/reviesReducer";
import { searchReducer } from "./reducer/searchReducer";
import toDoReducer from "./reducer/toDoReducer";
export default function App() {
  const [addModal, setAddModal] = useState(false);
  const [addTask, addTaskDispatch] = useReducer(addTaskReducer, initialValue);
  const [update, setUpdate] = useState(false);
  const [search, searchDispatch] = useReducer(searchReducer, []);
  const [toDo, toDoDispatch] = useReducer(toDoReducer, []);
  const [progress, progressDispatch] = useReducer(onProgress, []);
  const [done, doneDispatch] = useReducer(doneReducer, []);
  const [revised, revisedDispatch] = useReducer(revicesReducer, []);

  /* handle function start */
  const handleAddModal = () => {
    alert("Create new task.");
    setAddModal(true);
    addTaskDispatch({
      type: "blank",
    });
  };
  const handelSearch = (event) => {
    searchDispatch({
      type: "search",
      event,
      allTask: [...toDo, ...progress, ...done, ...revised],
    });
    if (search?.[0]) {
      toDoDispatch({
        type: "filter",
        allTask: [...search],
      });
      progressDispatch({
        type: "filter",
        allTask: [...search],
      });
      doneDispatch({
        type: "filter",
        allTask: [...search],
      });
      revisedDispatch({
        type: "filter",
        allTask: [...search],
      });
    } else {
      toDoDispatch({
        type: "blank",
        allTask: [],
      });
      progressDispatch({
        type: "blank",
        allTask: [],
      });
      doneDispatch({
        type: "blank",
        allTask: [],
      });
      revisedDispatch({
        type: "blank",
        allTask: [],
      });
    }
  };
  function handleSave(event) {
    let id = crypto.randomUUID();
    event.preventDefault();
    addTaskDispatch({
      type: "save",
      onClose: setAddModal,
    });

    if (
      addTask.category === "todo" ||
      addTask.category === "inprogress" ||
      addTask.category === "done" ||
      addTask.category === "revised"
    ) {
      if (addTask.category === "todo") {
        toDoDispatch({
          type: "todo",
          addTask,
          toDo,
          id,
        });
      } else if (addTask.category === "inprogress") {
        progressDispatch({
          type: "inprogress",
          addTask,
          progress,
          id,
        });
      } else if (addTask.category === "done") {
        doneDispatch({
          type: "done",
          addTask,
          done,
          id,
        });
      } else if (addTask.category === "revised") {
        revisedDispatch({
          type: "revised",
          addTask,
          revised,
          id,
        });
      }
    }
  }

  /* handle function end */
  return (
    <AddTaskContex.Provider
      value={{
        toDo,
        addTaskDispatch,
        setAddModal,
        update,
        setUpdate,
        handelSearch,
        search,
        progress,
        done,
        revised,
        toDoDispatch,
        progressDispatch,
        doneDispatch,
        revisedDispatch,
      }}
    >
      {addModal ? (
        <AddTask
          onCloseModal={setAddModal}
          change={addTask}
          onAddChange={addTaskDispatch}
          handleSave={handleSave}
        />
      ) : (
        <div className="flex h-screen">
          <Sidebar />
          <Projectify onAddModal={handleAddModal} />
        </div>
      )}
    </AddTaskContex.Provider>
  );
}
