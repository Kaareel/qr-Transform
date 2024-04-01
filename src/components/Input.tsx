interface Props {
  value: string;
  isUrl: boolean;
  isInput: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input(props: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="url"
        className={`border p-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
          props.isInput ? "border-red-500" : "border-gray-300"
        }`}
        value={props.value}
        onChange={props.onChange}
      />
      {props.isInput && (
        <p className="text-red-500">The field cannot be empty</p>
      )}
      {props.isUrl && <p className="text-red-500">The url is invalid</p>}
    </div>
  );
}

export default Input;
