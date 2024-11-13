import React, { useId } from 'react';

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label htmlFor={id} className="block mb-2 text-teal-700 font-medium">{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-4 py-2 rounded-lg bg-white text-teal-800 border border-teal-300 focus:border-teal-500 outline-none focus:bg-teal-50 duration-200 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default React.forwardRef(Select);