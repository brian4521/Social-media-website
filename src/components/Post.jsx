import { useContext } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Postlist } from "../store/postlist-store";

const Post = ({ infos }) => {
  const { deletePost } = useContext(Postlist);

  return (
    <div className="card info-card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {infos.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(infos.id);
            }}
          >
            <RiDeleteBack2Fill />
            <span class="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{infos.body}</p>
        {infos.tags.map((tag) => (
          <span class="badge text-bg-success tags-info">{tag}</span>
        ))}
        <div class="alert alert-warning reaction" role="alert">
          Reacted by {infos.reactions} people
        </div>
      </div>
    </div>
  );
};
export default Post;
