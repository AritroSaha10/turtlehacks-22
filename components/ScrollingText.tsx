import { m, useAnimationControls } from "framer-motion"
import { useEffect, useState } from "react";
import classArrayToString from "@util/styles/classNames";

import transition from "@util/anim/transition"

export default function ScrollingText({ text }: { text: string[] }) {
    const [currIdx, setIdx] = useState(0);
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: {...transition, duraiton: 0.4 } })

        const startLoop = () => {
            setTimeout(async () => {
                // TODO: Is this how it's supposed to even work 💀
                // TODO: Make this cleaner
                await controls.start({ opacity: 0, y: -20, transition: { ...transition, duration: 0.3 } });

                setIdx(prevState => (prevState + 1) % text.length);

                await controls.start({ opacity: 0, y: 30, transition: { duration: 0 } })
                await controls.start({ opacity: 1, y: 0, transition: { ...transition, duration: 0.3 } })

                startLoop();
            }, 2500);
        };

        startLoop();
    }, [text.length, controls]);

    return (
        <div
            className={classArrayToString([
                "flex flex-wrap",
                "justify-center",
                "gap-2",
                "text-2xl lg:text-5xl",
                "font-medium text-white",
                "mb-2"
            ])}
        >
            <m.span animate={controls} initial={{ opacity: 0, y: -30 }}>
                {text[currIdx]}
            </m.span>
        </div>
    )
}