import { useContext } from "react";
import { Modal } from "../Modal";
import { GlobalContext } from "~/contexts/GlobalContextProvider/context";
import clsx from "clsx";

export default function WriteFormModal() {
  const { setIsWriteModalOpen, isWriteModalOpen } = useContext(GlobalContext);

  return (
    <Modal isOpen={isWriteModalOpen} onClose={() => setIsWriteModalOpen}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <input
          type="text"
          name="title"
          id="title"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Title of the blog"
        />
        <input
          type="text"
          name="shortDescription"
          id="shortDescription"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Description of the blog"
        />
        <textarea
          name="mainBody"
          id="mainBody"
          cols={10}
          rows={10}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="blog main body"
        />
        <button
          className={clsx(
            "flex items-center space-x-3 rounded border",
            "border-gray-200 px-4 py-2",
            "transition hover:border-gray-900 hover:text-gray-900"
          )}
          type="submit"
        >
          Write
        </button>
      </form>
    </Modal>
  );
}
