import React from 'react';

interface HeaderProps {
    onAlgorithmChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onStart: () => void;
    onReset: () => void;
    onSpeedChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    speed: number;
    isSorting: boolean;
}

const Header: React.FC<HeaderProps> = ({ onAlgorithmChange, onStart, onReset, speed, onSpeedChange, isSorting }) => {
    return (
        <header className="p-4 bg-blue-600 text-white flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg">
            <h1 className="text-xl sm:text-2xl font-bold text-center md:text-left">Sorting Visualizer</h1>
            <nav className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center md:justify-end">
                <select onChange={onAlgorithmChange} className="p-2 rounded bg-white text-black" disabled={isSorting}>
                    <option value="bubble">Bubble Sort</option>
                    <option value="selection">Selection Sort</option>
                    <option value="insertion">Insertion Sort</option>
                    <option value="merge">Merge Sort</option>
                    <option value="quick">Quick Sort</option>
                </select>
                <div className="flex items-center gap-2">
                    <label className="text-sm">Speed:</label>
                    <input type="range" min="8" max="32" value={speed} onChange={onSpeedChange} className="cursor-pointer w-20 sm:w-32" />
                </div>
                <div className='flex gap-2'>
                    <button onClick={onStart} disabled={isSorting} className={`p-2 text-sm sm:text-base ${isSorting ? 'bg-green-300' : 'bg-green-500 rounded hover:bg-green-600'}`}>Start</button>
                    <button onClick={onReset} disabled={isSorting} className={`p-2 text-sm sm:text-base ${isSorting ? 'bg-red-300' : 'bg-red-500 rounded hover:bg-red-600'}`}>Reset</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
