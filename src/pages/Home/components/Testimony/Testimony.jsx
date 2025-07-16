import React from 'react';
import TestimonyCarousel from '../../../../components/TestimonyCarousel';
import TextBlocks from '../../../../components/TextBlocks';

const Testimony = () => {
    return (
        <div className="py-20">
            <TextBlocks 
                eyebrow="WHAT PEOPLE SAY"
                title="Real Stories. Genuine Impact. Trusted by Many."
                description="Discover how our solutions have transformed lives and businesses. Hear directly from the people who experienced the difference."
            />
            <TestimonyCarousel />
        </div>
    );
};

export default Testimony;