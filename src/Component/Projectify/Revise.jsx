import { useContext, useState } from "react";
import { AddTaskContex } from "../../context/contex";
import DeleteSvg from "../../SvgJsx/DeleteSvg";
import EditSvg from "../../SvgJsx/EditSvg";
import SortSvg from "../../SvgJsx/SortSvg";

export default function Revise() {
  const {
    revised,
    addTaskDispatch,
    setAddModal,
    update,
    setUpdate,
    revisedDispatch,
  } = useContext(AddTaskContex);

  /* to-do value start */
  const [order, setOrder] = useState(true);
  /* handel function start */
  const handelSort = () => {
    if (order) {
      setOrder(!order);
      revisedDispatch({
        type: "sort",
        revised,
      });
    } else {
      setOrder(!order);
      revisedDispatch({
        type: "sortReverse",
        revised,
      });
    }
  };
  const handelDelete = (taskDelete) => {
    revisedDispatch({
      type: "delete",
      taskDelete,
      revised,
    });
  };
  /* handel function end */
  /* to-do value end */
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-rose-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{`Revise (${revised.length}))`}</h3>
          <button onClick={handelSort}>
            <SortSvg />
          </button>
        </div>
        {revised.length > 0 ? (
          revised.map((task) => (
            <div className="mb-4 rounded-lg bg-gray-800 p-4" key={task.id}>
              <div className="flex justify-between">
                <h4 className="mb-2 font-semibold text-rose-500 pr-4 brack">
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
              <p className="mb-2 text-sm text-zinc-200 pr-4 brack">
                {task.description}
              </p>

              <p className="mt-6 text-xs text-zinc-400">{task.dueDate}</p>
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
