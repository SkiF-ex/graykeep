import React from "react";
import {createRoot} from "react-dom/client";

const Index = () => {
    return (
        <>
            <div>
                Hello, World!
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Index />);