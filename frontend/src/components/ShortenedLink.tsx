import Container from "react-bootstrap/Container";
import "./ShortenedLink.css";

interface ShortLink {
  shortLink: string;
}

function ShortenedLink(props: ShortLink) {
  const { shortLink } = props;

  return (
    <Container className="mt-3">
      <a href={shortLink} target="_blank">
        {shortLink}
      </a>
    </Container>
  );
}

export default ShortenedLink;
