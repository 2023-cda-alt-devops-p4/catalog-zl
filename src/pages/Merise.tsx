import Breadcrumb from "../component/Breadcrumb";

const Merise = () => {
  const isMerisePage = window.location.href.includes("Merise");

  return (
    <div className="container">
      {isMerisePage ? <Breadcrumb /> : null}
      <div>Merise</div>
    </div>
  );
};

export default Merise;
