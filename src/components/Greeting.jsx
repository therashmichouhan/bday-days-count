import { useLocation, useNavigate } from "react-router-dom";

const Greeting = () => {
  const { state } = useLocation();
  const name = state.name;
  const date = state.bday;
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const calculateDaysUntilBirthday = () => {
    let today = new Date();
    let year = today.getFullYear();
    let dob = new Date(date);
    let month = dob.getMonth();
    let day = dob.getDate();
    let birthday = new Date(year + 1, month, day);
    const difference = birthday - today;
    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };
    return timeLeft.days;
  };

  return (
    <div>
      <button
        className='bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded m-4'
        onClick={routeChange}>
        Home
      </button>
      <div
        className='h-screen  flex flex-col 
                    items-center justify-center tracking-tight'>
        <h1 className='mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl'>
          {name},
        </h1>
        <h4 className='text-2xl font-bold dark:text-black'> it is</h4>
        <h2 className='text-4xl font-extrabold dark:text-zinc-700 '>
          {calculateDaysUntilBirthday()}{" "}
          {calculateDaysUntilBirthday() > 1 ? "days" : "day"}
        </h2>

        <p className='text-2xl font-bold dark:text-black '>
          until your birthday!
        </p>
      </div>
    </div>
  );
};

export default Greeting;
