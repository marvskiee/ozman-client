import React, { useState } from "react";
import { DistrictTwoBarangays } from "../../data/DistrictTwoBarangays";

const DistrictTwo = () => {
  const [barangays, setBarangays] = useState(DistrictTwoBarangays);
  return (
    <>
      {barangays.map((barangay) => (
        <option key={barangay.id}>{barangay.name}</option>
      ))}
    </>
  );
};

export default DistrictTwo;
