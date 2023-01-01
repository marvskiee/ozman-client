import React, { useState } from "react";
import { DistrictOneBarangays } from "../../data/DistrictOneBarangays";

const DistrictOne = () => {
  const [barangays, setBarangays] = useState(DistrictOneBarangays);
  return (
    <>
      {barangays.map((barangay) => (
        <option key={barangay.id}>{barangay.name}</option>
      ))}
    </>
  );
};

export default DistrictOne;
