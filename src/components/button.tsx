export default function Button(props: React.ComponentProps<"button">) {
  return (
    <button className="bg-blue-400 px-4 py-2 hover:bg-blue-500" {...props}>
      {props.children}
    </button>
  );
}
