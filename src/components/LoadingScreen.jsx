import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<HelloWorld />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length) {
                clearInterval(interval);
            }

            setTimeout(() => {
                onComplete();
            }, 3000);
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]);

    return(
        <div className="fixed inset-0 z-50 bg-[#121212] flex flex-col items-center justify-center">
            <div className="mb-4 lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-bold text-amber-50">
                {text} <span className="animate-blink ml-1">!</span>
            </div>
            <div className="w-[244px] lg:w-[940px] md:w-[600px] sm:w-[389px] h-[5px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-gradient-to-r from-[#FCD26B] to-[#FFBE5E] shadow-blue-300 animate-loading-bar" ></div>
            </div>
        </div>
    )
}