import React, { useState } from 'react';
import './RandomQuotes.css';
import { FaXTwitter } from 'react-icons/fa6';
import { IoReloadCircle } from 'react-icons/io5';
import quotes from './quotedb'; // Import the quotes array

function RandomQuotes() {
    const [quote, setQuote] = useState(quotes[0]); // Initialize with the first quote

    const random = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    const twitter = () =>{
        window.open(`https://x.com/intent/post?text=${quote.text} - ${quote.author || "Unknown"}`);
    }
    return (
        <div className='container'>
            <div className="quote"> {quote.text} </div>
            <div>
                <div className="line"></div>
                <div className="buttom">
                    <div className="author"><span>Author:</span> {quote.author || "Unknown"} </div>
                    <div className="icons">
                        <IoReloadCircle onClick={random} className='icon' />
                        <FaXTwitter onClick={twitter} className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RandomQuotes;
