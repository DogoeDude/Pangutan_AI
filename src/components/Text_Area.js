import React from 'react';
import '../components/Text_sug.css';

function Text_Area() {
  return (
    <div className='text_area'>
      <div className='shadow-lg w-98 h-[500px] bg-yellow-200 rounded-xl flex flex-row p-6 space-x-4'>
        <div className='suggestion-box bg-white rounded-xl p-4 shadow-lg mb-4 flex-1 inline-block'>
          <h2 className='font-bold mb-2'>Suggestions</h2>
        </div>
        <div className='suggestion-box bg-white rounded-xl p-4 shadow-lg mb-4 flex-1'>
          <h2 className='font-bold mb-2'>Suggestions</h2>
        </div>
        <div className='suggestion-box bg-white rounded-xl p-4 shadow-lg mb-4 flex-1'>
          <h2 className='font-bold mb-2'>Suggestions</h2>
        </div>
      </div>
    </div>
  );
}

export default Text_Area;
