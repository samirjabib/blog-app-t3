import { useContext } from "react";
import { Modal } from "../Modal";
import { GlobalContext } from "~/contexts/GlobalContextProvider/context";
import { clsx } from "clsx";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import type { SubmitHandler } from "react-hook-form";

type WriteFormData = {
  title: string;
  description: string;
  body: string;
};

const writeFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().min(30, "Description must be at least 60 characters long"),
  body: z.string().min(60, "Body must be at least 60 characters long"),
});

export default function WriteFormModal() {
  const { setIsWriteModalOpen, isWriteModalOpen } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriteFormData>({
    resolver: zodResolver(writeFormSchema),
  });

  console.log(errors.title?.message);

  const onSubmit: SubmitHandler<WriteFormData> = (data) => {
    console.log(data)
  }

  return (
    <Modal isOpen={isWriteModalOpen} onClose={() => setIsWriteModalOpen}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <p className="mb-10 w-full text-left text-sm text-red-500">
          {errors.title?.message}
        </p>
        <input
          type="text"
          {...register("title")}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Title of the blog"
        />
        <p className="mb-10 w-full text-left text-sm text-red-500">
          {errors.description?.message}
        </p>
        <input
          type="text"
          {...register("description")}
          id="description"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Description of the blog"
        />
        <p className="mb-10 w-full text-left text-sm text-red-500">
          {errors.body?.message}
        </p>
        <textarea
          {...register("body")}
          id="body"
          cols={10}
          rows={10}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="blog main body"
        />
        <div className="flex w-full justify-end">
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
        </div>
      </form>
    </Modal>
  );
}
