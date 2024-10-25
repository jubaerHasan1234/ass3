import { useContext, useState } from "react";
import { AddTaskContex } from "../../context/contex";
import DeleteSvg from "../../SvgJsx/DeleteSvg";
import EditSvg from "../../SvgJsx/EditSvg";
import SortSvg from "../../SvgJsx/SortSvg";

export default function OnProgress() {
  const {
    progress,
    addTaskDispatch,
    setAddModal,
    update,
    setUpdate,
    progressDispatch,
  } = useContext(AddTaskContex);

  /* to-do value start */
  const [order, setOrder] = useState(true);
  /* handel function start */
  const handelSort = () => {
    if (order) {
      setOrder(!order);
      progressDispatch({
        type: "sort",
        progress,
      });
    } else {
      setOrder(!order);
      progressDispatch({
        type: "sortReverse",
        progress,
      });
    }
  };
  const handelDelete = (taskDelete) => {
    progressDispatch({
      type: "delete",
      taskDelete,
      progress,
    });
  };
  /* handel function end */
  /* to-do value end */
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{`On Progress (${progress.length})`}</h3>
          <button onClick={handelSort}>
            <SortSvg />
          </button>
        </div>

        {progress.length > 0 ? (
          progress.map((task) => (
            <div className="mb-4 rounded-lg bg-gray-800 p-4" key={task.id}>
              <div className="flex justify-between">
                <h4 className="mb-2 flex-1 font-semibold text-yellow-500 pr-4 brack">
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
              <p className="mb-2 text-sm text-zinc-200 brack">
                {task.description}
              </p>

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
  );
}
