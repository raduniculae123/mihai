import { FC, ReactNode } from "react";
import { BubblyLink } from "react-bubbly-transitions";

type Props = {
    to: string;
    children: ReactNode;
};

export const LinkComponent: FC<Props> = ({ to, children }) => (
    <BubblyLink colorStart="#2563eb" colorEnd="#ffffff" to={to}>
        {children}
    </BubblyLink>
);

export default LinkComponent;