import { useContext, useState } from "react";
import { AddTaskContex } from "../../context/contex";
import DeleteSvg from "../../SvgJsx/DeleteSvg";
import EditSvg from "../../SvgJsx/EditSvg";
import SortSvg from "../../SvgJsx/SortSvg";

export default function Todo() {
  const {
    toDo,
    addTaskDispatch,
    setAddModal,
    update,
    setUpdate,

    toDoDispatch,
  } = useContext(AddTaskContex);

  /* to-do value start */

  const [order, setOrder] = useState(true);

  /* handel function start */
  const handelSort = () => {
    if (order) {
      setOrder(!order);
      toDoDispatch({
        type: "sort",
        toDo,
      });
    } else {
      setOrder(!order);
      toDoDispatch({
        type: "sortReverse",
        toDo: toDo,
      });
    }
  };
  const handelDelete = (taskDelete) => {
    toDoDispatch({
      type: "delete",
      taskDelete,
      toDo,
    });
  };
  /* handel function end */
  /* to-do value end */
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{`To-Do (${toDo?.length})`}</h3>
          <button onClick={handelSort}>
            <SortSvg />
          </button>
        </div>
        <div>
          {toDo.length > 0 ? (
            toDo.map((task) => (
              <div className="mb-4 rounded-lg bg-gray-800 p-4" key={task.id}>
                <div className="flex justify-between">
                  <h4 className="mb-2 flex-1 font-semibold text-indigo-500 pr-4 brack">
                    {task.taskName}
                  </h4>

                  <div className="flex gap-2">
                    <button onClick={() => handelDelete(task)}>
                      <DeleteSvg />
                    </button>
                    <button
                      onClick={() => {
                        addTaskDispatch({
                          type: "edit",
                          value: task,
                          update,
                          setUpdate,
                        });
                        setAddModal(true);
                      }}
                    >
                      <EditSvg />
                    </button>
                  </div>
                </div>
                <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

                <p className="mt-6 text-xs text-zinc-400 pr-4 brack">
                  {task.dueDate}
                </p>
              </div>
            ))
          ) : (
            <p className="text-[16px] text-center text-white">
              Task List is empty!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
