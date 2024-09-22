import { ICommentGet } from "../../Models/Comment";
import CommentListItem from "../CommentListItem/CommentListItem";

type Props = {
  comments: ICommentGet[];
};

const CommentList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((comment) => {
            return <CommentListItem comment={comment} />;
          })
        : ""}
    </>
  );
};

export default CommentList;
