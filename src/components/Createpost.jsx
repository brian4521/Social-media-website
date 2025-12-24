import { useContext, useRef } from "react";
import { Postlist } from "../store/postlist-store";

const Createpost = () => {
  const { addPost } = useContext(Postlist);

  const UserIdEle = useRef();
  const postTitleEle = useRef();
  const postContentEle = useRef();
  const postReactionEle = useRef();
  const postTagsEle = useRef();
  const handlesubmitclicked = (event) => {
    event.preventDefault();
    const UserId = UserIdEle.current.value;
    const postTitle = postTitleEle.current.value;
    const postContent = postContentEle.current.value;
    const postReaction = postReactionEle.current.value;
    const postTags = postTagsEle.current.value.split("");
    addPost(UserId, postTitle, postContent, postReaction, postTags);
    UserIdEle.current.value = "";
    postTitleEle.current.value = "";
    postContentEle.current.value = "";
    postReactionEle.current.value = "";
    postTagsEle.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handlesubmitclicked}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          User-Id
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Type your Id"
          ref={UserIdEle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Type Post Title"
          ref={postTitleEle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Describe about your content"
          ref={postContentEle}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactionss" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactionss"
          placeholder="Enter number of reactions"
          ref={postReactionEle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tagss" className="form-label">
          Enter Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tagss"
          placeholder="Type tags in space"
          ref={postTagsEle}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Createpost;
