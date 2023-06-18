import React from 'react';
import Link from 'next/link'

const Startbutton = () => {
    return (
        <div className="flex justify-center">
            <Link href="/taskState/">
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start
        </button>
        </Link>
        </div>
    );
    }

export default Startbutton;
