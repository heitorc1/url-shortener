import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./App.css";
import { FormEvent, useState } from "react";

import api from "./services/api";
import ShortenedLink from "./components/ShortenedLink";

function App() {
  const [originalLink, setOriginalLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    api.post("/shorten", { originalURL: originalLink }).then(({ data }) => {
      const { shortURL } = data;
      setShortLink(shortURL);
    });
  }

  return (
    <Container className="contentWrapper text-center" fluid>
      <h1 className="d-flex justify-content-center m-3 fs-1 fw-bold">
        URL Shortener
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3">
          <Form.Label className="d-flex justify-content-center fs-3">
            Type your URL
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your URL"
            className="text-center fs-5 mt-1"
            onChange={(event) => setOriginalLink(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 px-5">
          Convert
        </Button>
      </Form>

      {!!shortLink ? <ShortenedLink shortLink={shortLink} /> : null}
    </Container>
  );
}

export default App;
