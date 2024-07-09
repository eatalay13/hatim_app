"use client";

import { ArrowUp } from "lucide-react";
import { FC, useEffect, useState } from "react";

interface ScrollToTopProps {
    threshold?: number;
    scrollContainerId?: string;
}

const ScrollToTop: FC<ScrollToTopProps> = ({
    threshold = 300,
    scrollContainerId,
}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const scrollContainer = scrollContainerId
            ? document.getElementById(scrollContainerId)
            : window;

        if (!scrollContainer) return;

        const getScrollTop = (element: HTMLElement | Window): number => {
            if (element === window) {
                return (
                    window.scrollY ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop
                );
            }
            return (element as HTMLElement).scrollTop;
        };

        const getScrollHeight = (element: HTMLElement | Window): number => {
            if (element === window) {
                return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                );
            }
            return (element as HTMLElement).scrollHeight;
        };

        const getClientHeight = (element: HTMLElement | Window): number => {
            if (element === window) {
                return (
                    window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight
                );
            }
            return (element as HTMLElement).clientHeight;
        };

        const toggleVisibility = () => {
            const scrollTop = getScrollTop(scrollContainer);
            const scrollHeight = getScrollHeight(scrollContainer);
            const clientHeight = getClientHeight(scrollContainer);

            const scrollPercentage =
                (scrollTop / (scrollHeight - clientHeight)) * 100;
            setProgress(scrollPercentage);

            if (scrollTop > threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        scrollContainer.addEventListener("scroll", toggleVisibility);

        return () =>
            scrollContainer.removeEventListener("scroll", toggleVisibility);
    }, [threshold, scrollContainerId]);

    const scrollToTop = () => {
        const scrollContainer = scrollContainerId
            ? document.getElementById(scrollContainerId)
            : window;

        if (scrollContainer) {
            if (scrollContainer === window) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            } else {
                (scrollContainer as HTMLElement).scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <>
            {isVisible && (
                <div
                    className="fixed bottom-5 right-5 cursor-pointer"
                    onClick={scrollToTop}
                >
                    <div className="relative w-10 h-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                className="text-gray-300"
                                strokeWidth="4"
                                stroke="currentColor"
                                fill="transparent"
                                r="46"
                                cx="50"
                                cy="50"
                            />
                            <circle
                                className="text-yellow-500"
                                strokeWidth="4"
                                stroke="currentColor"
                                fill="transparent"
                                r="46"
                                cx="50"
                                cy="50"
                                strokeDasharray="289.027"
                                strokeDashoffset={289.027 - (progress / 100) * 289.027}
                            />
                        </svg>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <ArrowUp className="text-yellow-500" size={24} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
