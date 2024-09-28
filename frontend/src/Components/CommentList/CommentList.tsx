import { ICommentGet } from "../../Models/Comment";
import CommentListItem from "../CommentListItem/CommentListItem";

type Props = {
  comments: ICommentGet[];
};

const CommentList = ({ comments }: Props) => {
  return (
    <div className="space-y-4">
      {comments
        ? comments.map((comment, index) => (
            <CommentListItem key={index} comment={comment} />
          ))
        : ""}
    </div>
  );
};

export default CommentList;
