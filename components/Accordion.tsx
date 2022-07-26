import { FC, useState } from "react";
import {
    Accordion as MaterialAccordion,
    AccordionHeader,
    AccordionBody
} from "@material-tailwind/react";

interface Props {
    title: string,
    content: string
};

const Accordion: FC<Props>= ({ title, content }) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <MaterialAccordion open={open} onClick={handleToggle}>
            <AccordionHeader className="text-white">{title}</AccordionHeader>
            <AccordionBody className="text-2xl text-white">{content}</AccordionBody>
        </MaterialAccordion>
    );
}

export default Accordion;