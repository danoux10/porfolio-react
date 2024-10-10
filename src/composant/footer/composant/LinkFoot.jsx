import React from 'react';

import '../../../style/composant/footer/LinkFoot.css';
const LinkFoot = ({url, icon,label}) => {
  return (
      <a href={url} target={"_blank"}>
        {icon}
        {label && <p>{label}</p>}
      </a>
  );
};

export default LinkFoot;