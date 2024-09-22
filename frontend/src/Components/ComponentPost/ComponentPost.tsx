import { toast } from "react-toastify";
import { ICommentPost } from "../../Models/Comment";
import ComponentPostForm from "../ComponentPostForm/ComponentPostForm";
import { commentAPI } from "../../Services/commentService";

type Props = {
  stockSymbol: string;
};

const ComponentPost = ({ stockSymbol }: Props) => {
  const handlePostComment = (e: ICommentPost) => {
    commentAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment Posted!");
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };
  return (
    <ComponentPostForm
      symbol={stockSymbol}
      handlePostComment={handlePostComment}
    />
  );
};

export default ComponentPost;
