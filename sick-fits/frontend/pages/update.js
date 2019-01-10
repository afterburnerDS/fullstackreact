import React from 'react';
import UpdateItem from '../components/UpdateItem';

const update = ({query}) => {
    return (
        <div>
            <UpdateItem id={query.id}></UpdateItem>
        </div>
    );
};

export default update;