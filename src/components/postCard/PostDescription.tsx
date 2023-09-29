import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostType } from "../../types";

interface PostCardProps {
  post: PostType;
}

const PostDescription: React.FC<PostCardProps> = ({ post }) => {
  const descriptionLimit = 20;
  const words = post.description.split(" ");

  const [isLongDescription, setIsLongDescription] = useState(
    words.length > descriptionLimit
  );

  const [renderedWords, setRenderedWords] = useState<string[]>(
    isLongDescription ? words.slice(0, descriptionLimit) : words
  );

  useEffect(() => {
    if (isLongDescription) {
      setRenderedWords(words.slice(0, descriptionLimit));
    } else {
      setRenderedWords(words);
    }
  }, [post.description, isLongDescription]);

  const toggleDescription = () => {
    setIsLongDescription(!isLongDescription);
  };

  const isTag = (word: string) => word.includes("@");
  const isHashTag = (word: string) => word.includes("#");
  const renderTag = (word: string) => (
    <Link
      className="hover:underline text-blue"
      to={`profile/${word.replace("@", "")}`}
      key={word}
    >
      {word}
    </Link>
  );

  const renderHashTag = (word: string) => (
    <span className="text-[#1976d2]" key={word}>
      {word}
    </span>
  );

  return (
    <p
      onClick={toggleDescription}
      className="cursor-pointer flex flex-wrap px-4 pb-2 text-[15px]"
    >
      {renderedWords.map((word, index) => (
        <React.Fragment key={index}>
          {isTag(word)
            ? renderTag(word)
            : isHashTag(word)
            ? renderHashTag(word)
            : word}{" "}
        </React.Fragment>
      ))}
      {words.length > descriptionLimit && (
        <a className={`text-blue cursor-pointer`}>
          {isLongDescription ? "...See less" : "...See more"}
        </a>
      )}
    </p>
  );
};

export default PostDescription;
