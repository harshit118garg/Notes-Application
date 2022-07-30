import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen/MainScreen";
import "./MyNotes.css";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure...?")) {
    }
  };

  const fetchNotes = async () => {
    const response = await fetch("http://localhost:5000/api/notes");
    const data = await response.json();
    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <MainScreen title="Welcome back Harshit Garg">
        <Link to="createNote">
          <Button size="lg" variant="success" className="ms-5 mb-2">
            Create New Note
          </Button>
        </Link>
        <div className="notesList">
          {notes.map((note) => (
            <Accordion key={note._id}>
              <div className="mx-5 my-3 shadow">
                <Accordion.Item eventKey="0">
                  <Card style={{ margin: 20 }}>
                    <Accordion.Header>
                      <Card.Header
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="card-title">{note.title}</span>
                        <div className="btns">
                          <Button
                            href={`/note/${note._id}`}
                            variant="info"
                            className="mx-2"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            className="mx-2"
                            onClick={() => deleteHandler(note._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Header>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card.Body>
                        <h3>
                          <Badge bg="warning">Category - {note.category}</Badge>
                        </h3>
                        <blockquote className="blockquote mb-0">
                          <p>{note.content}</p>
                          <footer className="blockquote-footer">
                            Created on - date
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Accordion.Body>
                  </Card>
                </Accordion.Item>
              </div>
            </Accordion>
          ))}
        </div>
      </MainScreen>
    </>
  );
};

export default MyNotes;
