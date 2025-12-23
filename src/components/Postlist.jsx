import { useContext } from "react";
import Post from "./Post";
import { Postlist as PostListData } from "../store/postlist-store";

const Postlist = () => {
  const { PostList } = useContext(PostListData);
  console.log(PostList);
  return (
    <>
      {PostList.map((infos) => (
        <Post key={infos.id} infos={infos}></Post>
      ))}
    </>
  );
};
export default Postlist;
