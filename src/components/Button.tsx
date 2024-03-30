import "../index.css";

interface Props {
  title: string;
  isLoading: boolean;
  onClick: () => void;
}

function Button(props: Props) {
  return (
    <div>
      <button
        className="bg-slate-300 hover:bg-green-400 rounded-full my-2 px-2"
        onClick={props.onClick}
      >
        {props.title}
      </button>
      {props.isLoading && (
            <div className="absolute inset-0 flex items-center justify-center transition-opacity animate-spin">
              <div className="loader"></div>
            </div>
          )}
    </div>
  );
}

export default Button;
