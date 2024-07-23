
const Button = ({onChange, ...props }: any) => {

  return (

    <button {...props} onClick={onChange} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
  );
};

export default Button;
