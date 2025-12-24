import { createContext, useReducer } from "react";

export const Postlist = createContext({
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postlistreducer = (currentpostlist, action) => {
  if (action.type == "Delete_Post") {
    currentpostlist = currentpostlist.filter(
      (post) => post.id != action.payload.PostID
    );
  } else if (action.type == "Add_Post") {
    currentpostlist = [action.payload, ...currentpostlist];
  }
  return currentpostlist;
};

const PostListProvider = ({ children }) => {
  const [PostList, dispatchPostList] = useReducer(
    postlistreducer,
    DefaultValue
  );

  const addPost = (UserId, postTitle, postContent, postReaction, postTags) => {
    console.log(
      `${UserId} ${postTitle} ${postContent} ${postReaction} ${postTags}`
    );
    dispatchPostList({
      type: "Add_Post",
      payload: {
        id: Math.floor(Math.random() * 100),
        title: postTitle,
        body: postContent,
        reactions: postReaction,
        userId: UserId,
        tags: postTags,
      },
    });
  };

  const deletePost = (PostID) => {
    console.log(`post id is ${PostID}`);
    dispatchPostList({
      type: "Delete_Post",
      payload: {
        PostID,
      },
    });
  };
  return (
    <Postlist.Provider value={{ PostList, addPost, deletePost }}>
      {children}
    </Postlist.Provider>
  );
};
const DefaultValue = [
  {
    id: "1",
    title: "ramailo gardai",
    body: "aja hami yeta hasina simsar tira ramailo gardai. Jado le satayeko awastha so hami bonfire ko maja lidai",
    reactions: "2",
    userId: "",
    tags: ["picnic", "tour", "fun"],
  },
  {
    id: "2",
    title: "having fun at oceanpark",
    body: "we went to oceanpark to quinck our summer hunger. We enjoyed a lot. I also recommend to come here!! ",
    reactions: "12",
    userId: "",
    tags: ["summer", "fun", "swimming"],
  },
];

export default PostListProvider;
