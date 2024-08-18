import Logo from "./assets/Logo.png";
import Navigation from "./components/Navigation";
import React from 'react';
import Text_Area from "./components/Text_Area";
function App() {
  return (
    <div className="relative flex flex-col h-screen">
      <div className="flex flex-1">
        <Navigation />
        <div className="content flex-1 flex-col space-y-4 space-x-1 items-start bg-gradient-to-l from-blue-700 to-blue-800">
          <img src={Logo} alt="PangutanAI Logo" className="w-14 h-14 rounded-full border-2 border-white m-1 shadow-lg" />
          <Text_Area/>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4">
        <form className="flex items-center justify-center space-x-4">
          <input 
            type='text' 
            className='rounded-xl w-[80%] max-w-[800px] h-12 p-2 bg-gray-700 text-white border border-gray-600' 
            placeholder="Type something..."
          />
          <button type='button' className='rounded-xl border border-blue-400 text-yellow-400 p-2 flex items-center justify-center transition-colors duration-300 hover:bg-blue-400 hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          </button>
          <button type='submit' className='rounded-xl border border-blue-400 text-yellow-400 p-2 flex items-center justify-center transition-colors duration-300 hover:bg-blue-400 hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </footer>
    </div>
  );
}
export default App;
