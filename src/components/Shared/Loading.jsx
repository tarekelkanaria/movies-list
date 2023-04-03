import Spinner from "react-bootstrap/Spinner";
const Loading = () => {
  return (
    <section className="text-center p-5 m-5 bg-body-tertiary">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
    </section>
  );
};
export default Loading;
