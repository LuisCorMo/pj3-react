import { useEffect, useState } from "react";
import "./App.css";
import { randomDimension } from "./utils/random";
import axios from "axios";
import LocationForm from "./component/LocationForm";
import LocationInfo from "./component/LocationInfo";
import ResidentList from "./component/ResidentList";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;

    fetchDimension(newLocation);
    e.target.reset();
  };

  useEffect(() => {
    const getDimension = randomDimension(126);

    fetchDimension(getDimension);
  }, []);

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <main className="min-h-screen grid bg-wallpaper text-white">
      {isLoading ? (
        // Loader

        <div className="grid items-center justify-center">
          <article className="bg-center">
            <img
              className="bg-center grid h-[220px] w-[220px] m-auto animate-spin"
              src="/images/portal.png"
              alt=""
            />
            <img
              className="bg-center p-7 min-w-[220px]"
              src="/images/logo.png"
              alt=""
            />
          </article>
        </div>
      ) : (
        // APP

        <div className="bg-page bg-center bg-no-repeat grid">
          <img src="/images/portalLogo.png" alt="" />
          <LocationForm handleSubmit={handleSubmit} />
          <LocationInfo currentLocation={currentLocation} />
          <ResidentList
            residents={currentLocation?.residents ?? []}
            currentLocation={currentLocation}
          />
        </div>
      )}
    </main>
  );
}

export default App;
