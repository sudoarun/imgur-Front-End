/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./model.css";
function Modal() {
  const [modal, setModal] = useState({
    //img: "",
    caption: "",
  });

  const handleInput = (e) => {
    const post = e.target.name;
    const caption = e.target.value;
    setModal((prev) => {
      return { ...prev, [post]: caption };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(modal);
  };
  return (
    <>
      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">
            Close
          </a>
          <h1>New Post</h1>
          <form onSubmit={onSubmit}>
            <div className="Form">
              <label htmlFor="img">Select image: </label>
              <input
                type="file"
                id="img"
                name="img"
                //onChange={handleInput}
                accept="image/*"
              />
              <input
                type={"text"}
                name="caption"
                onChange={handleInput}
                placeholder="Enter Description"
              />
              <button type="submit">Submit</button>
            </div>
          </form>
          <br />
        </div>
      </div>
    </>
  );
}
export default Modal;
