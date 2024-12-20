import React from 'react';

// Button component that takes text and func as props
export default function Button(props) {
    // Destructure text and func from props
    const { text, func } = props;

    // Return a button element with an onClick event and styling
    return (
        <button
            onClick={func}
            className='px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'
        >
            {/* Display the text inside a paragraph element */}
            <p>{text}</p>
        </button>
    );
}
