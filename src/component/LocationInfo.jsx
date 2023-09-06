const LocationInfo = ({ currentLocation }) => {
  console.log(currentLocation);
  return (
    <section className="text-center border-2 border-[#8EFF8B]/60 my-4 h-min bg-gray-500/10">
      <h2 className=" text-center font-bold text-lg pt-3">
        {currentLocation?.name}
      </h2>
      <ul className="grid grid-cols-3 py-2 text-center">
        <li className="p-1">
          <b>Type:</b> <br />
          {currentLocation?.type}
        </li>
        <li className="p-1">
          <b>Dimension:</b> <br />
          {currentLocation?.dimension}
        </li>
        <li className="p-1">
          <b>Population:</b> <br />
          {currentLocation?.residents.length}
        </li>
      </ul>
    </section>
  );
};
export default LocationInfo;
