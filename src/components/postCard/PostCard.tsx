import React, { useState } from "react";
import DotsDropDown from "./DotsDropDown";
import CommentBox from "./CommentBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux/es/exports";
import { testAction } from "../../store/usersSlice";
import PostDescription from "./PostDescription";
import { PostType } from "../../types";

interface PostCardProps {
  post: PostType;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  let [isGrow, setIsGrow] = useState(false);

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

  // -----------------------------------

  const dateFormat = (date: Date) => {
    // console.log(date)
    const newDate = new Date(date);
    // const month = newDate.getMonth
    // return month.toString()
    return newDate.toString();
  };

  return (
    <>
      <div
        className={`bg-white text-text-gray w-full mx-auto my-3 sm:my-5 sm:rounded-md shadow-md overflow-hidden`}
      >
        <div className="flex justify-between px-4 py-4 ">
          <div className="flex cursor-pointer">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center">
              <img className="w-full h-fit" src={post.ownerProfile} />
            </div>
            <div className="px-2">
              <p className="font-bold">{post.ownerName}</p>
              <p className="text-xs">{dateFormat(post.publishDate as Date)}</p>
            </div>
          </div>
          <DotsDropDown />
        </div>
        <PostDescription post={post} />
        {/* -------------------------------------------------------------------------------------------- */}
        {post.postFiles.length > 0 && post.postFiles.length <= 4 && (
          <div
            className={`${
              post.postFiles.length > 1 && post.postFiles.length <= 4
                ? `grid grid-cols-2 gap-1`
                : `grid justify-center items-center`
            } w-full max-h-[600px] overflow-hidden`}
          >
            {post.postFiles.length > 0 &&
              post.postFiles?.map((file, index) => (
                <div key={index} className="w-fit h-fit">
                  {file.type === "video/mp4" ? (
                    <video
                      controls
                      preload="auto"
                      poster="https://i.ytimg.com/vi/x-LVUk2IxDU/maxresdefault.jpg"
                      src={file.url}
                    ></video>
                  ) : (
                    <img className="w-full" src={file.url} />
                  )}
                </div>
              ))}
          </div>
        )}

        {post.postFiles.length > 4 && (
          <div
            className={`grid grid-cols-2 gap-1 w-full max-h-[600px] overflow-hidden`}
          >
            {post.postFiles.length > 0 &&
              post.postFiles?.map((file, index) => (
                <div key={index}>
                  {file.type === "video/mp4" ? (
                    <video
                      controls
                      preload="auto"
                      poster="https://i.ytimg.com/vi/x-LVUk2IxDU/maxresdefault.jpg"
                      src={file.url}
                    ></video>
                  ) : (
                    <div className="w-full h-full">
                      {index < 3 ? (
                        <img className="w-full" src={file.url} />
                      ) : (
                        <div className="h-full relative">
                          {index === 3 && (
                            <div className="relative">
                              <img src={file.url} />
                              <div className="w-full h-full cursor-pointer absolute bg-black bg-opacity-40 inset-0 active:bg-opacity-50 transition-all duration-200">
                                <p className="text-white w-full h-full flex items-center justify-center text-xl">
                                  +{index}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
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
