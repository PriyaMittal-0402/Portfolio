import React from "react";
import socialImg from "../../assets/images/social.svg";

const AddressImg = () => {
  return (
    <div className="address-img-div">
      <img
        src={socialImg}
        alt="Contact Illustration"
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto"
        }}
      />
    </div>
  );
};

export default AddressImg;
