import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="px-4 container-main md:px-10 lg:px-20 2xl:px-40">{children}</div>
    );
}
