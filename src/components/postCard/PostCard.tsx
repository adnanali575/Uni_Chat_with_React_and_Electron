import React, { useEffect, useState } from "react";
import DotsDropDown from "./DotsDropDown";
import CommentBox from "./CommentBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux/es/exports";
import { testAction } from "../../store/usersSlice";

interface PostCardProps {
  post: Posts;
}

interface Posts {
  profileImageUrl: string;
  userName: string;
  date: string;
  description: string;
  postVideoUrl?: string | undefined;
  postImageUrl?: string | undefined;
  likeCount: number;
  commentCount: number;
  shareCount: number;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const descriptionLimit = 130;

  let [isGrow, setIsGrow] = useState(false);
  let [description, setDescription] = useState(post.description);
  let [isLongDescription, setIsLongDescription] = useState(
    post.description.length > descriptionLimit ? true : false
  );

  useEffect(() => {
    sliceDescription(post.description);
  }, [post.description]);

  const sliceDescription = (description: string) => {
    setIsLongDescription(!isLongDescription);
    if (isLongDescription) {
      setDescription(description.substring(0, descriptionLimit));
    } else {
      setDescription(post.description);
    }
  };

  const toggleDescription = () => {
    sliceDescription(post.description);
  };

  const CustomCounts = (count: number) => {
    if (count >= 1000 && count < 1100) {
      return "1K";
    } else if (count >= 1100) {
      const suffixes = ["", "K", "M", "B", "T"];
      let power = 0;

      while (count >= 1000 && power < suffixes.length - 1) {
        count /= 1000;
        power++;
      }

      return count.toFixed(1) + suffixes[power];
    }

    return count;
  };

  const dispatch = useDispatch();
  const test = () => {
    dispatch(testAction());
  };

  return (
    <>
      <div
        className={`bg-white text-text-gray w-full mx-auto my-3 sm:my-5 sm:rounded-md shadow-md overflow-hidden`}
      >
        <div className="flex justify-between px-4 py-4 ">
          <div className="flex cursor-pointer">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center">
              <img className="w-full h-fit" src={post.profileImageUrl} />
            </div>
            <div className="px-2">
              <p className="font-bold">{post.userName}</p>
              <p className="text-xs">{post.date}</p>
            </div>
          </div>
          <DotsDropDown />
        </div>
        <p className="px-4 pb-2 text-[15px]">
          {description}
          {post.description.length > descriptionLimit && (
            <a
              onClick={toggleDescription}
              className={`text-blue cursor-pointer`}
            >
              {isLongDescription ? "...See less" : "...See more"}
            </a>
          )}
        </p>
        <div className="w-full max-h-[600px] overflow-hidden flex justify-center items-center">
          {post.postImageUrl?.length && (
            <img className="w-full" src={post.postImageUrl} />
          )}
          {/* -------------------------------------------------------------------------------------------- */}
          {post.postVideoUrl?.length != null &&
            post.postVideoUrl?.length > 0 && (
              <iframe
                className="w-full h-[400px]"
                src={post.postVideoUrl}
                title="YouTube Video"
                allowFullScreen
              ></iframe>
            )}
        </div>
        {/* -------------------------------------------------------------------------------------------- */}
        {(post.likeCount > 0 ||
          post.commentCount > 0 ||
          post.shareCount > 0) && (
          <div className="grid grid-cols-3 py-2">
            <span>
              {post.likeCount > 0 && (
                <p className="text-center text-sm">
                  {CustomCounts(post.likeCount)} Likes
                </p>
              )}
            </span>
            <span>
              {post.commentCount > 0 && (
                <p className="text-center text-sm">
                  {CustomCounts(post.commentCount)} Comments
                </p>
              )}
            </span>
            <span>
              {post.shareCount > 0 && (
                <p className="text-center text-sm">
                  {CustomCounts(post.shareCount)} Shares
                </p>
              )}
            </span>
          </div>
        )}
        <hr className={`text-gray`} />
        <div className={`grid grid-cols-3 w-full`}>
          <button
            onClick={test}
            className={`active:text-blue active:bg-gray-bg py-2 text-center transition-s hover:scale-110 active:scale-100 duration-200 cursor-pointer`}
          >
            <FontAwesomeIcon icon="thumbs-up" className="mr-2" />
            Like
          </button>
          <button
            onClick={() => setIsGrow(!isGrow)}
            className={`active:text-blue active:bg-gray-bg py-2 text-center transition-s hover:scale-110 active:scale-100 duration-200 cursor-pointer`}
          >
            <FontAwesomeIcon icon="comment" className="mr-2" />
            Comment
          </button>
          <button
            className={`active:text-blue active:bg-gray-bg py-2 text-center transition-s hover:scale-110 active:scale-100 duration-200 cursor-pointer`}
          >
            <FontAwesomeIcon icon="share" className="mr-2" />
            Share
          </button>
        </div>
        <CommentBox isGrow={isGrow} />
      </div>
    </>
  );
};

export default PostCard;
