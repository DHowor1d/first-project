import { useState } from 'react';

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`fixed top-0 left-2 h-full p-3 z-20 transition-all duration-300 ${open ? 'w-1/6' : 'w-2'}`}>
      {/* 사이드바 배경 */}
      <div className="h-full bg-white/40 rounded-lg backdrop-blur-lg shadow-lg border-gray-200 flex flex-col">
        {/* 토글 버튼 */}
        <button
          className="absolute right-2 top-4 w-8 h-8 rounded-full bg-amber-50/50 shadow flex items-center justify-center transition-transform"
          onClick={() => setOpen(x => !x)}
        >
          <span className="text-xl flex items-center mt-[-4px]">{open ? '<' : '>'}</span>
        </button>
        {/* 사이드바 내용 */}
        <div className={`flex-1 flex flex-col items-${open ? 'start' : 'center'} mt-16 px-2 transition-all duration-300`}>
          <div className="w-full">
            <div className={`font-bold text-lg mb-6 transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>UI 테스트</div>
            <ul className="space-y-2 w-full">
              <li className={`p-2 rounded hover:bg-gray-100 cursor-pointer transition-colors ${open ? 'text-base' : 'opacity-0 pointer-events-none'}`}>노트1</li>
              <li className={`p-2 rounded hover:bg-gray-100 cursor-pointer transition-colors ${open ? 'text-base' : 'opacity-0 pointer-events-none'}`}>노트2</li>
              <li className={`p-2 rounded hover:bg-gray-100 cursor-pointer transition-colors ${open ? 'text-base' : 'opacity-0 pointer-events-none'}`}>노트3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
