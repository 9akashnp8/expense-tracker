type Props = {
  content: string;
  onClick: () => void;
};

export default function ActionButton(props: Props) {
  return (
    <button
      style={{
        // position
        position: "absolute",
        bottom: 30,
        right: 30,

        // style
        fontSize: "1rem",
        padding: "1.5rem",
        border: "1px solid black",
        borderRadius: "1rem",
      }}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}
