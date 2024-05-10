import { Link } from "react-router-dom";
import "./Page404.css";
import Container from "react-bootstrap/Container";

function Page404() {
  return (
    <div className="Page404 bg-primary text-white d-flex flex-column justify-content-center align-items-center">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">
          We have some not-so-great news... the page you tried to access doesn't exist.
        </p>
        <strong className="error404">404 :</strong>
        <p className="h4 text-center">
          Let's go back {" "}
          <Link to="/" className="text-secondary">
            to the site 
          </Link>{" "}
          to check out a new story!
        </p>
      </Container>
    </div>
  );
}

export default Page404;

