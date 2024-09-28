import { ICommentGet } from "../../Models/Comment";

type Props = {
  comment: ICommentGet;
};

const CommentListItem = ({ comment }: Props) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 w-full border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="text-xl text-lightGreen truncate">{comment.title}</p>
          </div>
          <p className="text-sm text-gray-400">@{comment.createdBy}</p>
        </div>
      </div>
      <p className="text-gray-300">{comment.content}</p>
    </div>
  );
};

export default CommentListItem;
