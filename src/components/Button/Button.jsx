import "@/components/Button/Button.css";
const Button = (props) => {
  return (
    <button
      className="border border-transparent box-border px-3 py-2 my-2 border-radius text-white bg-[#4E4900] 
     hover:bg-white hover:text-[#4E4900] hover:border-[#4E4900] w-full h-12"
      onClick={props.link}
    >
      {props.text}
    </button>
  );
};
export default Button;
