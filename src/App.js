import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center mt-20">
            <img src="https://picsum.photos/640/360" alt='' onMouseOver={()=>console.log("Hooh Haa!!! Hovered")} className='hover:brightness-50 duration-500' />
            <button className='border shadow-md hover:shadow-lg mt-2 w-20 hover:bg-gray-400 duration-500 rounded-md' onClick={()=>console.log("I'm clicked")}>Click me</button>
        </div>
    </div>
  );
}

export default App;
