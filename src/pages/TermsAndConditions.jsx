import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms and Conditions"} />
      <Breadcrumb title={"Terms and Conditions"} />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
     </>
  );
};

export default TermsAndConditions;
