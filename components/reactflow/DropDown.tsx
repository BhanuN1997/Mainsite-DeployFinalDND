import RFStore from "@/store/reactFlowStore";

export default function DropDown({
  isOpen,
  id,
}: {
  isOpen: boolean;
  id: string;
}) {
  const { addNode, nodes } = RFStore.getState();

  return isOpen ? (
    <div
      style={{
        position: "absolute",
        transform: "translate(30px, -30px)",
        width: "100px",
      }}
    >
      <div
        style={{
          width: "100px",
          background: "white", // Changed background color to white
          borderBottom: "1px solid lightgray", // Added light gray border
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "background-color 0.3s",
          marginTop: "8px",
          marginBottom: "8px",
        }}
        onClick={(e: any) => {
          addNode(e.target.innerText.toLowerCase(), id);
        }}
        onMouseEnter={(e: any) => (e.target.style.backgroundColor = "purple")}
        onMouseLeave={(e: any) => (e.target.style.backgroundColor = "white")}
      >
        Action
      </div>
      <div
        style={{
          width: "100px",
          background: "white", // Changed background color to white
          borderBottom: "1px solid lightgray", // Added light gray border
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onClick={(e: any) => {
          addNode(e.target.innerText.toLowerCase(), id);
        }}
        onMouseEnter={(e: any) => (e.target.style.backgroundColor = "purple")}
        onMouseLeave={(e: any) => (e.target.style.backgroundColor = "white")}
      >
        LLM
      </div>
    </div>
  ) : (
    <></>
  );
}
