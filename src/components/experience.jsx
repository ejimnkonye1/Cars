/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export const Experience = () => {
    const counters = [
        { target: 60, label: "Year Experienced" },
        { target: 1090, label: "Total Cars" },
        { target: 2590, label: "Happy Customers" },
        { target: 67, label: "Total Branches" },
    ];

    return (
        <section className="bg-white relative py-12" id="section-counter">
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {counters.map((counter, index) => (
                        <Counter key={index} target={counter.target} label={counter.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Counter = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const increment = () => {
            setCount(prevCount => {
                if (prevCount < target) {
                    return Math.min(prevCount + Math.ceil(target / 100), target); // Increment by a fraction of the target
                }
                return target; // Stop at the target
            });
        };

        const interval = setInterval(increment, 30); // Adjust the interval time as needed

        return () => clearInterval(interval); // Cleanup on unmount
    }, [target]);

    return (
        <div className="flex justify-center counter-wrap relative"> {/* Added relative positioning */}
            {label === "Year Experienced" && (
                <div className="absolute inset-0 top-0 left-0 bottom-0 opacity-50 bg-[#1089ff] z-0"></div> // Conditional background
            )}
            <div className={`block-18 p-6 rounded-lg ${label === "Year Experienced" ? 'bg-transparent' : 'bg-white'} text-black z-10`}> {/* Inner div with conditional styles */}
                <div className="text text-border flex items-center">
                    <strong className="number  text-[#1089ff] text-[40px] font-[300]">{count}</strong>
                    <span className="block text-lg text-black/70 mb-0 leading-5 pl-4">
                        {label.split(" ")[0]} <br /> {label.split(" ")[1]}
                    </span>
                </div>
            </div>
        </div>
    );
};