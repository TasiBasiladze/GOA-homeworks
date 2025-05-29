//JSX is a syntax extension for JavaScript, used with React. It lets you write HTML-like code inside JavaScript.

//when you change something in the code, virtual dom compares changed code to previous, and instead of
//rendering whole code again, it just updates part which we have changed

import React from 'react';
import { createRoot } from 'react-dom/client';

const div = document.getElementById("div");
const root = createRoot(div);

let list = (
    <ol>
        <li>
            1
        </li>
        <li>
            2
        </li>
        <li>
            3
        </li>
        <li>
            4
        </li>
        <li>
            5
        </li>
    </ol>
);

root.render(list);