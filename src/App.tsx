import React, { useState, useEffect } from 'react';
import Visualizer from './components/Visualizer';
import Header from './components/Header';
import Footer from './components/Footer';
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from './utils/SortingAlog';

const App = () => {
  const [array, setArray] = useState<number[]>([]);
  const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);
  const [speed, setSpeed] = useState(8);
  const [algorithm, setAlgorithm] = useState<string>('bubble');
  const [isSorting, setIsSorting] = useState(false);

  const getArrayLength = () => {
    const width = window.innerWidth;
    if (width < 640) return 10;
    if (width < 1024) return 20;
    return 30;
  };

  const generateArray = () => {
    const length = getArrayLength();
    const arr = Array.from({ length }, () => Math.floor(Math.random() * 70) + 1);
    setArray(arr);
    setHighlightedIndices([]);
  };

  useEffect(() => {
    generateArray();
    window.addEventListener('resize', generateArray);
    return () => window.removeEventListener('resize', generateArray);
  }, []);

  const handleReset = () => {
    generateArray();
    setHighlightedIndices([]);
    setIsSorting(false);
  };

  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => setAlgorithm(e.target.value);
  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => setSpeed(Number(e.target.value));

  const animateSorting = async (animations: number[][]) => {
    setIsSorting(true);
    for (let i = 0; i < animations.length; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          if (animations[i].length > 2) {
            setArray(animations[i] as number[]);
          } else {
            setHighlightedIndices(animations[i]);
          }
          resolve(true);
        }, 800 / speed);
      });
    }
    setIsSorting(false);
    setHighlightedIndices([]);
  };

  const handleStart = () => {
    let animations: number[][] = [];
    switch (algorithm) {
      case 'bubble':
        [, animations] = bubbleSort(array);
        break;
      case 'selection':
        [, animations] = selectionSort(array);
        break;
      case 'insertion':
        [, animations] = insertionSort(array);
        break;
      case 'merge':
        [, animations] = mergeSort(array);
        break;
      case 'quick':
        [, animations] = quickSort(array);
        break;
      default:
        return;
    }
    animateSorting(animations);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header isSorting={isSorting} onAlgorithmChange={handleAlgorithmChange} onStart={handleStart} onReset={handleReset} speed={speed} onSpeedChange={handleSpeedChange} />
      <Visualizer array={array} highlightedIndices={highlightedIndices} />
      <Footer />
    </div>
  );
};

export default App;
