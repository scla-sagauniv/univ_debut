import React from 'react';
import Link from 'next/link'

const Startbutton = () => {
    return (
        <div className="flex justify-center">
            <Link href="/taskState/">
        <button  className="bg-[#75533C] hover:bg-[#AF9268] text-white font-bold py-10 px-20 rounded text-6xl">
            Start
        </button>
        </Link>
        </div>
    );
    }

export default Startbutton;
