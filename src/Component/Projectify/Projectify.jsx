import AddSvg from "../../SvgJsx/AddSvg";
import Done from "./Done";
import Header from "./Header";
import OnProgress from "./OnProgress";
import Revise from "./Revise";
import Todo from "./ToDo";

export default function Projectify({ onAddModal }) {
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden">
      <Header />

      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
              onClick={onAddModal}
            >
              <AddSvg />
              Add
            </button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
          <Todo />

          <OnProgress />

          <Done />

          <Revise />
        </div>
      </div>
    </main>
  );
}
