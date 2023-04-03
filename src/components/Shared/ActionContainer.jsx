const ActionContainer = ({ children }) => {
  return (
    <section className="container shadow-sm text-center bg-body-tertiary p-5 d-grid rounded mb-5">
      {children}
    </section>
  );
};

export default ActionContainer;
