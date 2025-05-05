import React from 'react';

export type Properties = {
  key: string;
  val: string;
}[];

interface InfoProps {
  info: Properties;
}

const Info: React.FC<InfoProps> = ({ info }) => {
    return (
      <div>
        {info.map((i) => (
          <p
            className="text-slate-600 leading-normal font-light"
            key={`${i.key}/${i.val}`}
          >
            {i.key}: {i.val}
          </p>
        ))}
      </div>
    );
};

export default Info;