import { toast } from "react-toastify";
import { ICommentGet, ICommentPost } from "../../Models/Comment";
import { getCommentAPI, postCommentAPI } from "../../Services/commentService";
import ComponentPostForm from "../CommentPostForm/CommentPostForm";
import CommentList from "../CommentList/CommentList";
import { useEffect, useState } from "react";
import Spinners from "../Spinners/Spinners";

type Props = {
  stockSymbol: string;
};

const CommentPost = ({ stockSymbol }: Props) => {
  const [stockComments, setStockComments] = useState<ICommentGet[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetComment();
  }, []);

  const handlePostComment = (e: ICommentPost) => {
    postCommentAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment Posted!");
          handleGetComment();
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  const handleGetComment = () => {
    setIsLoading(true);
    getCommentAPI(stockSymbol)
      .then((res) => {
        setIsLoading(false);
        setStockComments(res?.data!);
      })
      .catch((e) => {
        toast.warning(e);
      });
  };
  return (
    <div className="flex flex-col">
      {isLoading ? <Spinners /> : <CommentList comments={stockComments!} />}
      <ComponentPostForm
        symbol={stockSymbol}
        handlePostComment={handlePostComment}
      />
    </div>
  );
};

export default CommentPost;
