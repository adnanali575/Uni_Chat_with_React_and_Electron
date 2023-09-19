import PostCard from "../components/postCard/PostCard";

const HomepageView = () => {
  const posts = [
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon7UXXyxvoxfrD0brWchUB7kIU545JP7QtQ&usqp=CAU",
      userName: "Anonymous",
      date: "Sept 17 2021, 05:27 PM",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa praesentium quia ipsum ipsam tempore nisi incidunt dolor aspernatur est delectus sunt velit cumque, expedita neque dolorem distinctio nesciunt voluptate deserunt. Vero a doloremque nihil ea, facilis atque distinctio non consequatur repellendus quo qui ipsam veritatis.",
      postImageUrl:
        "https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Free-Photoshop-Social-Media-Poster-Design-Template.jpg",
      likeCount: 123445,
      commentCount: 57,
      shareCount: 8,
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU",
      userName: "Pixel Pioneer",
      date: "Dec 06 2023, 12:21 PM",
      description:
        "The sun dipped below the horizon, casting a warm orange glow across the tranquil sea. Seagulls soared, their calls fading into the gentle lapping of waves against the shore. A sense of calm settled in as the day drew to a close, painting the sky with hues of pink and gold.",
      postImageUrl:
        "https://i.pinimg.com/originals/4d/f1/29/4df12992c336d52c8e6199b354051abd.jpg",
      likeCount: 14432,
      commentCount: 76,
      shareCount: 12,
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaY0vxDVdf2br6KAu4YsszWMAgst_5Uj2dg&usqp=CAU",
      userName: "Silent Crafter",
      date: "Feb 27 2022, 04:21 PM",
      description:
        "In the heart of the bustling city, neon lights illuminated the streets, creating a vibrant tapestry of colors. People hurried by, lost in their own worlds, while the hum of traffic and distant chatter formed a backdrop to the urban symphony. Skyscrapers pierced the sky, standing as modern titans of human ambition.",
      postImageUrl:
        "https://img.freepik.com/free-psd/digital-marketing-agency-corporate-social-media-post-template_202595-517.jpg?w=2000",
      likeCount: 1494639,
      commentCount: 98,
      shareCount: 19,
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXArb6ofPPWjp3noQdt3xgk5qYnVdjcSLz7Q&usqp=CAU",
      userName: "Nature Lover",
      date: "Aug 24 2023, 08:27 AM",
      description:
        "The old bookshop was a haven of stories, its shelves lined with tales of forgotten lands and timeless characters. The scent of aged paper filled the air, inviting visitors to wander through its literary treasures. Every book seemed to hold a secret, waiting to be discovered by an eager reader.",
      postImageUrl: "https://wallpaperaccess.com/full/1131217.jpg",
      likeCount: 0,
      commentCount: 0,
      shareCount: 0,
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuOfAusZ6OE4kkvGi-Um-guGD-hXN0acqZQ&usqp=CAU",
      userName: "Pro Gamer",
      date: "March 04 2023, 02:11 PM",
      description:
        "Immerse yourself in intense action and strategy! Join our electrifying live Free Fire stream, where skilled gamers battle for supremacy, showcasing epic moments and interactive gameplay. Don't miss out!",
      postVideoUrl: "",
      postImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQm3sj6S3M8MAFexiYK2OZhg_bDqxNC9aCQ&usqp=CAU",
      likeCount: 1001,
      commentCount: 34,
      shareCount: 0,
    },
    {
      profileImageUrl:
        "https://cdn.pixabay.com/photo/2022/01/04/08/05/public-speaking-6914556_640.jpg",
      userName: "Non Stop Speaker",
      date: "March 04 2023, 11:27 AM",
      description:
        "Among the towering trees of the ancient forest, sunlight filtered through the leaves.",
      postImageUrl:
        "https://social-poster.io/wp-content/uploads/2020/05/SOPO-All-Pfeile-1024x1024-2.png",
      likeCount: 1200,
      commentCount: 0,
      shareCount: 32,
    },
  ];

  // const arr = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // ];

  return (
    <div className="flex justify-between text-9xl">
      <div className="p-4 w-[25%] overflow-hidden hidden lg:flex z-0 fixed left-0 top-[57px] bottom-0">
        <div className="w-full px-4 pe-4 hover:pe-[11px] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto flex flex-col gap-3 rounded-md">
          {/* {arr.map((e,i) => (
            <b
              key={i}
              className="px-9 py-5 bg-white shadow-md hover:scale-110 active:scale-100 transition-default cursor-pointer rounded-md text-center text-5xl"
            >
              {e}
            </b>
          ))} */}
        </div>
      </div>

      <div className="min-h-screen text-base w-full xs:w-11/12 md:w-[80%] lg:w-1/2 mx-auto py-4 flex flex-col gap-3">
        <div className="w-full lg:w-11/12 mx-auto">
          {posts.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>
      </div>

      <div className="p-4 w-[25%] overflow-hidden hidden lg:flex  z-0 fixed right-0 top-[57px] bottom-0">
        <div className="w-full px-4 pe-4 hover:pe-[11px] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto flex flex-col gap-3 rounded-md">
          {/* {arr.map((e) => (
            <b
              key={e}
              className="px-9 py-5 bg-white shadow-md hover:scale-110 active:scale-100 transition-default cursor-pointer rounded-md text-center text-5xl"
            >
              {e}
            </b>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HomepageView;
