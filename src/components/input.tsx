export default function Input(props: React.ComponentProps<"input">) {
  return (
    <input
      className="rounded border border-gray-800 dark:text-gray-800"
      type={props.type || "text"}
      {...props}
    ></input>
  );
}
