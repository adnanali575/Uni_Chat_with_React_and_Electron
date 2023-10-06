import React, { useEffect, useState } from "react";
import DotsDropDown from "./DotsDropDown";
import CommentBox from "./CommentBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostDescription from "./PostDescription";
import { PostType } from "../../types";
import {
  db,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "../../firebase/firebaseConfig";
import { dateFormater, timeFormater } from "../../helpers";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: PostType;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isGrow, setIsGrow] = useState<boolean>(false);
  const [isBookMared, setIsBookMarked] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const handleLikes = (id: string, likeCount: number) => {
    const likes = likeCount ? likeCount : 0;
    const cityRef = doc(db, "posts", id);
    setDoc(cityRef, { likeCount: likes + 1 }, { merge: true });
  };

  const handleShare = (id: string, shareCount: number) => {
    const shares = shareCount ? shareCount : 0;
    const cityRef = doc(db, "posts", id);
    setDoc(cityRef, { shareCount: shares + 1 }, { merge: true });
  };

  const removeBookMark = async (): Promise<void> => {
    const userDocRef = doc(db, "users", "zUGyNOLiAhOD4emagvoJ8jH72853");
    const docSnapshot = await getDoc(userDocRef);

    const data = docSnapshot.data()?.bookMarkedPosts;
    const newBookMarks = data.filter((e: string) => e !== post.postId);

    const userRef = doc(db, "users", "zUGyNOLiAhOD4emagvoJ8jH72853");
    await updateDoc(userRef, {
      bookMarkedPosts: newBookMarks,
    });

    await deleteDoc(
      doc(
        db,
        "users/zUGyNOLiAhOD4emagvoJ8jH72853/book_marked_post",
        post.postId
      )
    );
    checkBookMarkStatus();
  };

  const checkBookMarkStatus = async (): Promise<void> => {
    let bookMarkedPosts: string[] = [];
    const userDocRef = doc(db, "users", "zUGyNOLiAhOD4emagvoJ8jH72853");
    const docSnapshot = await getDoc(userDocRef);
    if (docSnapshot.exists()) {
      bookMarkedPosts = docSnapshot.data().bookMarkedPosts;
    }
    setIsBookMarked(bookMarkedPosts.some((e) => e === post.postId));
  };

  useEffect(() => {
    checkBookMarkStatus();
  }, [post]);

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
              <p className="text-xs">
                {dateFormater(post.publishDate)}{" "}
                {timeFormater(post.publishDate)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isBookMared && (
              <FontAwesomeIcon
                onClick={removeBookMark}
                icon="bookmark"
                className="text-blue p-1 hover:text-blue-1 text-xl active:scale-90 cursor-pointer transition-default"
              />
            )}
            <DotsDropDown
              post={post}
              checkBookMarkStatus={checkBookMarkStatus}
            />
          </div>
        </div>
        {post.description && <PostDescription post={post} />}
        {/* -------------------------------------------------------------------------------------------- */}
        {post.postFiles.length > 0 && (
          <div
            className={`${
              post.postFiles.length > 1
                ? `grid grid-cols-2 gap-1`
                : `grid justify-center items-center`
            } w-full max-h-[600px] overflow-hidden`}
          >
            {post.postFiles.length > 0 &&
              post.postFiles?.map((file, index) => (
                <div
                  onClick={() => {
                    if (file.type !== "video/mp4")
                      navigate(`/post/${post.postId}`);
                  }}
                  key={index}
                  className="w-fit h-fit"
                >
                  {file.type === "video/mp4" ? (
                    <video controls poster={file.thumbnail}>
                      <source src={file.url} />
                    </video>
                  ) : (
                    <div className="cursor-pointer">
                      {index < 3 ? (
                        <img className="w-full" src={file.url} />
                      ) : (
                        <>
                          {index === 3 && (
                            <div className="relative">
                              <img src={file.url} />
                              {post.postFiles.length !== 4 && (
                                <div className="w-full h-full cursor-pointer absolute bg-black bg-opacity-40 inset-0 active:bg-opacity-50 transition-all duration-200">
                                  <p className="text-white w-full h-full flex items-center justify-center text-xl">
                                    +{post.postFiles.length - 1 - index}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </>
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
            onClick={() => handleLikes(post.postId, post.likeCount)}
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
            onClick={() => handleShare(post.postId, post.shareCount)}
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
