import React, { useState } from "react";
import DistrictThreeBarangays from "../../data/DistrictThreeBarangays";

const DistrictThree = () => {
  const [barangays, setBarangays] = useState(DistrictThreeBarangays);
  return (
    <>
      {barangays.map((barangay) => (
        <option key={barangay.id}>{barangay.name}</option>
      ))}
    </>
  );
};

export default DistrictThree;
