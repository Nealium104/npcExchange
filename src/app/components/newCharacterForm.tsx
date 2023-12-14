export default function NewCharacterForm() {
  return (
    <form className="bg-charcoal px-8 shadow-lg py-4 flex flex-col gap-4">
      <div>
        <h3>Name:</h3>
        <input className="text-black rounded text-xl" type="text" />
      </div>
      <div>
        <h3>Description:</h3>
        <input className="text-black rounded text-xl" type="text" />
      </div>
      <div>
        <h3>Mannerisms:</h3>
        <input className="text-black rounded text-xl" type="text" />
      </div>
      <div>
        <h3>Place of Birth:</h3>
        <input className="text-black rounded text-xl" type="text" />
      </div>
      <div>
        <h3>Race:</h3>
        <input className="text-black rounded text-xl" type="text" />
      </div>
      <div>
        <h3>Backstory:</h3>
        <input className="text-black rounded text-xl" type="text" />
      </div>
      <div>
        <h3>Tags:</h3>
        <input className="text-black rounded text-xl" type="text" />
      </div>
      <button className="bg-neon text-black w-24 py-2 place-self-center transition duration-150 hover:bg-white hover:scale-110">
        Submit
      </button>
    </form>
  );
}
