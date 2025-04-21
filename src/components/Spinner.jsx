import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-start justify-center h-screen">
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin transition-all" style={{ animationDuration: '2s' }}></div>
        </div>
    );
};

export default Spinner;