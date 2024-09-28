import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ICommentPost } from "../../Models/Comment";

type Props = {
  symbol: string;
  handlePostComment: (e: ICommentPost) => void;
};

const validation = Yup.object().shape({
  title: Yup.string().required("Title is required."),
  content: Yup.string().required("Comment is required"),
});

const ComponentPostForm = ({ symbol, handlePostComment }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentPost>({ resolver: yupResolver(validation) });
  return (
    <form className="mt-4 ml-4" onSubmit={handleSubmit(handlePostComment)}>
      <input
        type="text"
        id="title"
        className="mb-3 bg-gray-800 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-lightGreen focus:border-lightGreen block w-full p-2.5"
        placeholder="Title"
        {...register("title")}
      />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      <div className="py-2 px-4 mb-4 bg-gray-800 rounded-lg border border-gray-700">
        <label htmlFor="content" className="sr-only">
          Your comment
        </label>
        <textarea
          id="content"
          rows={6}
          className="px-0 w-full text-sm text-white bg-gray-800 border-0 focus:ring-0 focus:outline-none"
          placeholder="Write a comment..."
          {...register("content")}
        ></textarea>
        {errors.content && (
          <p className="text-red-500 mt-2">{errors.content.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-lightGreen rounded-lg hover:bg-lightGreen-dark focus:ring-4 focus:outline-none focus:ring-lightGreen-dark"
      >
        Post Comment
      </button>
    </form>
  );
};

export default ComponentPostForm;
