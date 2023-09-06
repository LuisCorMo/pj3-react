const LocationForm = ({ handleSubmit }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <article className="grid mb-4 border-4 border-[#8EFF8B] w-[340px] sm:w-[420px]">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            className="text-white min-w-[260px] sm:min-w-[340px] px-4 bg-transparent"
            id="newLocation"
            min={1}
            max={126}
            placeholder="Type a location id ..."
            mx
            type="number"
          />
          <button className="p-[10px] px-[14px] bg-[#8EFF8B]/60">Search</button>
        </form>
      </article>
      <h2 className="text-[#8EFF8B]">¡Welcome to the crazy universe!</h2>
    </div>
  );
};
export default LocationForm;
