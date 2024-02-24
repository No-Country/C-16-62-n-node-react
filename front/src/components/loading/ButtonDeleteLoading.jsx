import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function ButtonDeleteLoading({
  loading,
  children,
  onClick,
  type = "button",
  variant = "danger",
}) {
  return (
    <Button variant={variant} type={type} onClick={onClick} disabled={loading}>
      {loading && <Spinner animation="border" size="sm" />}
      {children}
    </Button>
  );
}

export default ButtonDeleteLoading;