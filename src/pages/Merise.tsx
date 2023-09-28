import Breadcrumb from "../component/Breadcrumb";

const Merise = () => {
  const isMerisePage = window.location.href.includes("Merise");

  return (
    <>
      {isMerisePage ? <Breadcrumb /> : null}
      <div className="container">
        <div>Merise</div>
      </div>
    </>
  );
};

export default Merise;
