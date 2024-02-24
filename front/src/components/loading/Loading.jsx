import Spinner from "react-bootstrap/Spinner";

const styles = {
  spinner: {
    position: "fixed",
    top: "50%",
    left: "50%",
  },
};

function Loading({ loading, children }) {
  if (loading) {
    return (
      <Spinner animation="border" variant="primary" role="status" style={styles.spinner}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return children;
  }
}

export default Loading;