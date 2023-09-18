import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ChildProps {
  isGrow: boolean;
}

const CommentBox: React.FC<ChildProps> = ({ isGrow }) => {
  const comments = [
    {
      userName: "Akram Hussain",
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaY0vxDVdf2br6KAu4YsszWMAgst_5Uj2dg&usqp=CAU",
      date: "Sept 17 2021",
      description: "Golden sunrise: tranquil beauty.",
    },
    {
      userName: "Nawaz Ali",
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXArb6ofPPWjp3noQdt3xgk5qYnVdjcSLz7Q&usqp=CAU",
      date: "Sept 17 2021",
      description:
        "Starlit nights unveil a universe, reminding us of our place in boundless wonder. 🌲🌄",
    },
    {
      userName: "Fayaz Ahmad",
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon7UXXyxvoxfrD0brWchUB7kIU545JP7QtQ&usqp=CAU",
      date: "Sept 17 2021",
      description:
        "Immersed in nature's beauty, finding serenity in every detail. A reminder to cherish and protect our natural world. 🌿🌼🏞️",
    },
    {
      userName: "Unknown Kid",
      profileImageUrl: "https://cdn.wallpapersafari.com/49/37/ukNVfe.jpg",
      date: "Sept 17 2021",
      description:
        "Majestic mountains stand tall, whispering tales of time in their ancient rocky folds.",
    },
  ];

  return (
    <>
      {isGrow && <hr className={`text-gray`} />}
      <div
        className={`text-text-gray transition-all ease-in-out duration-200 ${
          isGrow ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
        }`}
      >
        <div
          className={`comment-box relative px-5 py-2 transition-all duration-3000 max-h-[300px] overflow-x-hidden overflow-y-auto`}
        >
          {comments.map((comment, index) => (
            <div key={index}>
              <div key={index} className={`flex gap-2 py-3 p-2`}>
                <div className="w-[45px] h-[45px] cursor-pointer rounded-full overflow-hidden flex items-center justify-center">
                  <img src={comment.profileImageUrl} />
                </div>
                <div className="max-w-[82%]">
                  <div className={`bg-gray-bg w-fit rounded-3xl p-2`}>
                    <p className="font-semibold"> {comment.userName} </p>
                    <p className="text-sm">{comment.description}</p>
                  </div>
                  <div className={`flex items-center gap-3 px-4 pt-1`}>
                    <p
                      className={`hover:text-black active:text-green-1 text-xs cursor-pointer`}
                    >
                      <FontAwesomeIcon icon="thumbs-up" className="mr-2" />
                      Like
                    </p>
                    <p
                      className={`hover:text-text-gray active:text-green-1 text-xs cursor-pointer`}
                    >
                      <FontAwesomeIcon icon="reply" className="mr-2" />
                      Reply
                    </p>
                    <p
                      className={`bg-gray-1 w-1.5 h-1.5 aspect-square rounded-full`}
                    ></p>
                    <p className="text-xs text-end">{comment.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <hr className={`text-gray`} />
          <div className={`px-4 flex items-center`}>
            <div
              className={`hover:bg-light-green bg-gray-bg mr-1 hover:text-green-1 flex items-center justify-center rounded-full text-md w-[36px] h-[36px] aspect-square ms-1 cursor-pointer transition-default`}
            >
              😉
            </div>
            <input
              placeholder="Write a comment..."
              className={`text-sm focus:bg-greenish-gray bg-gray-bg my-3 px-4 py-2 w-full rounded-3xl transition-default outline-none`}
            />
            <div
              className={`hover:bg-light-green bg-gray-bg hover:text-green-1 flex items-center justify-center rounded-full text-md w-[36px] h-[36px] aspect-square ms-1 cursor-pointer transition-default`}
            >
              <FontAwesomeIcon icon="paper-plane" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentBox;
