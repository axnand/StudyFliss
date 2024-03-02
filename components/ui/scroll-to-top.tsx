'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import Button from './Button';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
        };
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        isVisible &&
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
    };

    return (
        <Button
            className={`fixed bottom-4 right-8 p-0 rounded-2xl size-14 border-2 border-primary/50 hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 ease-in-out-sine group ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={scrollToTop}
            variant={'outline'}
        >
            <ChevronUp className="size-8 group-hover:mb-1 transition-all duration-300 ease-in-out-sine" />
            <span className="sr-only">Scroll to top</span>
        </Button>
    );
};

export default ScrollToTopButton;
