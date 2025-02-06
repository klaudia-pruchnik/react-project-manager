import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onCancel, onSave }) {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleFormData = () => {
    const formData = {
      id: Math.random(),
      title: titleRef.current.value.trim(),
      description: descriptionRef.current.value.trim(),
      dueDate: dueDateRef.current.value.trim(),
    };

    if (Object.values(formData).some((value) => value === "")) {
      modal.current.open();
      return;
    }

    onSave(formData);
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <form className="max-w-[35rem] mt-16">
        <div id="buttons" className="flex justify-end my-4">
          <button
            type="button"
            className="text-stone-900 py-2 px-4"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-stone-800 hover:bg-stone-950 text-stone-50 py-2 px-6 rounded"
            onClick={handleFormData}
          >
            Save
          </button>
        </div>
        <Input type="text" label="Title" ref={titleRef} />
        <Input
          type="textarea"
          tag="textarea"
          label="Desription"
          ref={descriptionRef}
        />
        <Input type="date" label="Due Date" ref={dueDateRef} />
      </form>
    </>
  );
}

export default NewProject;
