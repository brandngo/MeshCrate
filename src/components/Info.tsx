import React from 'react';

interface InfoProps {
    info: {key: string, val: string}[]
}

const Info: React.FC<InfoProps> = ({ info }) => {
    return (
        <div>
            {info.map((i) => <p>{i.key}: {i.val}</p>)}
        </div>
    );
};

export default Info;