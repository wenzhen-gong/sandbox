import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { closeSendScoreModal } from "./utils/catchSlice";
import { sendScore } from "./utils/catchSlice";

export default function SendScoreModal() {
  const showSendScoreModal = useSelector(
    (state) => state.myReducers.sendScoreModalOpen
  );
  const score = useSelector((state) => state.myReducers.score);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSendScore = (event) => {
    dispatch(sendScore({event, score})).then(data => {console.log(data)});
    dispatch(closeSendScoreModal());
  };

  return (
    <Modal
      show={showSendScoreModal}
      onHide={() => {
        dispatch(closeSendScoreModal());
      }}
    >
      <Modal.Header className="bg-gray-800 text-red" closeButton>
        <Modal.Title>Send Your Score</Modal.Title>
      </Modal.Header>
      <Form className="bg-gray-800 text-red" onSubmit={handleSendScore}>
        <Modal.Body>
          <Form.Label>Here is your score: {score}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#000000", borderColor: "#000000" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "gray")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#000000")}
            onClick={() => {
              dispatch(closeSendScoreModal());
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={name ? false : true}
            style={{ backgroundColor: "red", borderColor: "red" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6666")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "red")}
          >
            Send
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
