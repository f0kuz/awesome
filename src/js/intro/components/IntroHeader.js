import React from 'react';


const IntroHeader = () => {
    let introQuoteText;
    if (window.innerWidth >= 768) {
        introQuoteText = (
            <h1 className="intro__quote">
                <span className="text-nowrap">Not to make you feel dizzy but</span><br />
                the challenge is worth it. Aim high,<br />
                <span className="text-nowrap">have fun, <span className="intro__quote--be-awesome">be awesome.</span></span>
            </h1>
        )
    } else {
        introQuoteText = (
            <h1 className="intro__quote">
                <span className="text-nowrap">Not to make you feel</span><br />
                <span className="text-nowrap">dizzy but the challenge is </span><br />
                <span className="text-nowrap">worth it. Aim high,</span><br />
                <span className="text-nowrap">have fun, <span className="intro__quote--be-awesome">be awesome.</span></span>
            </h1>
        )
    };
    
    return (
        <header>
            {introQuoteText}
        </header>
    );
};

export default IntroHeader;
