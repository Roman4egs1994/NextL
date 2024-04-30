import React from 'react';
import {getLayout} from "../components/Layout/BaseLayout";

const serverNotFound = () => {
    return (
        <div>
            <h1>500 - Server-side error occurred</h1>;
        </div>
    );
};

serverNotFound.getLayout = getLayout
export default serverNotFound;
