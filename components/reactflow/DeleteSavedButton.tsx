const DeleteSavedDataButton = () => {
  const handleDelete = () => {
    localStorage.removeItem("graphState");
  };

  return (
    <div>
      <button className="button" onClick={handleDelete}>
        Delete Saved Data
      </button>
    </div>
  );
};

export default DeleteSavedDataButton;
