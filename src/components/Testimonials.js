import React from "react";
import Card from './Card';
import { BiSolidChevronLeftCircle,BiSolidChevronRightCircle } from "react-icons/bi";
import {useState } from "react";

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);
    
    function leftShiftHandler() {
        if(index - 1  < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }
    function rightShiftHandler() {
        if(index + 1 > reviews.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }
    function supriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-lg tracking-wider">
            <Card review = {reviews[index]}></Card>

            <div className="flex text-3xl mt-9 gap-3 text-violet-400 font-bold justify-center ">
                <button
                 onClick={leftShiftHandler}
                  className= " cursor-pointer hover:text-violet-600">
                    <BiSolidChevronLeftCircle/>
                </button>
                <button 
                 onClick={rightShiftHandler}
                className= " cursor-pointer hover:text-violet-600">
                    <BiSolidChevronRightCircle/>
                </button>
            </div>

            <div className= " mt-6 ">
                <button
                onClick={supriseHandler}
                className= 'bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg ' > 
                 Surprise Me
                </button>
            </div>
        </div>
    )
}


export default Testimonials;