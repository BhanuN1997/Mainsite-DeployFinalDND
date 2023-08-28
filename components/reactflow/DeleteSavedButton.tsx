const DeleteSavedDataButton = () => {
  const handleDelete = () => {
    localStorage.removeItem("graphState");
  };

  return (
    <div>
      <button className="z-30 absolute right-4 top-4 bg-white text-black font-bold py-2 px-3 rounded button" onClick={handleDelete}>
       Reset
      </button>
    </div>
  );
};

export default DeleteSavedDataButton;
