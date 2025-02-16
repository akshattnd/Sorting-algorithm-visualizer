import React from 'react';
import { motion } from "motion/react"

interface VisualizerProps {
    array: number[];
    highlightedIndices: number[];
}

const Visualizer: React.FC<VisualizerProps> = ({ array, highlightedIndices }) => {
    return (
        <div className="flex items-end justify-center h-64 p-4 gap-1 mb-4">
            {array.map((value, idx) => (
                <motion.div
                    key={idx}
                    className={`flex items-center justify-center min-h-fit bg-blue-500 ${highlightedIndices.includes(idx) ? 'bg-red-500' : 'bg-blue-500'}`}
                    style={{ height: `${value * 3}px`, width: '25px' }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                > {value}</motion.div>
            ))}
        </div>
    );
};

export default Visualizer;
