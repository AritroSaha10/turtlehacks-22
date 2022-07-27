import { FC, useState } from "react";
import {
    Accordion as MaterialAccordion,
    AccordionHeader,
    AccordionBody
} from "@material-tailwind/react";

interface Props {
    title: string,
    content: string,
    keepSeparator?: boolean
};

const Accordion: FC<Props> = ({ title, content, keepSeparator }) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <MaterialAccordion open={open} onClick={handleToggle} className="border-2 border-white/50 px-4 relative mt-[-2px]">
            <AccordionHeader className="text-white text-left">{title}</AccordionHeader>
            <AccordionBody className="text-white mt-[-20px]">{content}</AccordionBody>
        </MaterialAccordion>
    );
}

export default Accordion;