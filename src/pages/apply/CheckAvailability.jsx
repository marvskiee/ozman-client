import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";
import Title from "../../components/Title";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useMap } from "react-leaflet/hooks";
import DistrictOne from "../../components/select/DistrictOne";
import DistrictTwo from "../../components/select/DistrictTwo";
import DistrictThree from "../../components/select/DistrictThree";
import SelectPlaceholder from "../../components/select/SelectPlaceholder";
import toast, { Toaster } from "react-hot-toast";
import { delay } from "../../config";

const CheckAvailability = () => {
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [coordinates, setCoordinates] = useState(null);
  const position = [14.65804096243567, 120.9758275401698];
  const navigate = useNavigate();
  let mapResult;

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const handleChangeSelectOption = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleContinue = async () => {
    if (mapResult) {
      mapResult === "outside"
        ? toast.error("Address is outside AIO range")
        : handleSuccess();
    } else {
      toast.error("Please enter address");
    }
  };

  const handleSuccess = async () => {
    toast.success(
      "Address is inside AIO range. You may proceed with your application."
    );
    await delay(3000);
    navigate("/create-account");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const city = document.getElementById("City").value;
    const brgy = document.getElementById("Barangay").value.replace(/ /g, "+");

    const url =
      "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
      brgy +
      "+" +
      city +
      "+city";

    const res = await axiosInstance.get(url);
    setCoordinates([res.data[0].lat, res.data[0].lon]);
  };

  const LocationMarker = () => {
    const map = useMap();
    var circle = L.circle(position, 700);
    var mainMarker = L.marker(position, "myMainMarker")
      .bindPopup("AIO Main Tower")
      .openPopup();

    map.eachLayer((layer) => {
      // Remove all layers except the background (tilelayer)
      // EDIT: and the main marker with the custom property
      if (
        !(layer instanceof L.TileLayer) &&
        layer.options.myCustomProperty != "myMainMarker"
      ) {
        map.removeLayer(layer);
      }
    });

    if (map.hasLayer(circle)) {
      map.removeLayer(circle);
    } else {
      map.addLayer(circle);
      map.addLayer(mainMarker);
    }

    if (coordinates !== null) {
      L.Circle.include({
        contains: function (latLng) {
          return this.getLatLng().distanceTo(latLng) < this.getRadius();
        },
      });

      var result = circle.contains(coordinates) ? "inside" : "outside";
      mapResult = result;
    }

    return coordinates === null ? null : (
      <Marker position={coordinates}>
        <Popup>{"Address is " + result + " AIO range"}</Popup>
      </Marker>
    );
  };

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container min-h-screen px-4">
      <Toaster />
      <header className="py-12 text-center">
        <Title title="Check Availability" />
      </header>
      <form className="mb-20" onSubmit={handleSearch}>
        <header className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
          <section className="flex w-full flex-col">
            <label className="pb-1 text-sm font-semibold" htmlFor="City">
              Municipal/City
            </label>
            <select name="City" id="City" className="cursor-pointer rounded">
              <option value="caloocan" onChange={() => setCity(value)}>
                South Caloocan
              </option>
            </select>
          </section>

          <section className="flex w-full flex-col">
            <label className="pb-1 text-sm font-semibold" htmlFor="Barangay">
              District
            </label>
            <select
              className="cursor-pointer rounded"
              name={selectedDistrict}
              onChange={handleChangeSelectOption}
              defaultValue="1"
            >
              <option>-- CHOOSE A DISTRICT --</option>
              <option value="1">District 1</option>
              <option value="2">District 2</option>
              <option value="3">District 3</option>
            </select>
          </section>
        </header>

        <section className="flex w-full flex-col pt-3">
          <label className="pb-1 text-sm font-semibold" htmlFor="Barangay">
            Barangay
          </label>
          <select
            name="Barangay"
            id="Barangay"
            className="cursor-pointer rounded"
          >
            {selectedDistrict === "1" ? (
              <DistrictOne />
            ) : selectedDistrict === "2" ? (
              <DistrictTwo />
            ) : selectedDistrict === "3" ? (
              <DistrictThree />
            ) : (
              <SelectPlaceholder />
            )}
          </select>
        </section>

        <section className="w-full pt-8 text-center">
          <input type="submit" className="continue-btn w-full md:w-auto" />
        </section>

        <section className="pt-10">
          <MapContainer
            center={position}
            zoom={15}
            style={{
              width: "100%",
              height: "500px",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
          <section className="pt-10 text-center">
            <button
              type="button"
              onClick={handleContinue}
              className="continue-btn w-full disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
            >
              Continue
            </button>
          </section>
        </section>
      </form>
    </section>
  );
};

export default CheckAvailability;
