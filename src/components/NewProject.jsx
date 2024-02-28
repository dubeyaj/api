import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

// good for copilot demo  test uncomment line
//export default function NewProject( onAdd ) {

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show the error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-sl font-bold text-red-700 my-4">
          {" "}
          Invalid Input{" "}
        </h2>
        <p className="text-red-600 mb-4">
          {" "}
          Please enter a valid title, description and due date{" "}
        </p>
        <p className="text-red-600 mb-4">
          {" "}
          Please make sure provide a valid value for every input value{" "}
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-red-800 hover:text-red-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-red-800 text-red-50 hover:bg-red-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Desciption" textarea />
          {/* Copilot demo to add Date */}
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
