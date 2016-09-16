import React from 'react';
import Lowlight from 'react-lowlight';

export default (languageDefinitions) => {
  Object.keys(languageDefinitions).forEach(language => {
    const definition = languageDefinitions[language];

    Lowlight.registerLanguage(language, definition);
  });

  const Code = ({ className, children, inline }) => (
    <Lowlight language={className.split('-')[1]} value={children[0]} inline={ inline } />
  );
  Code.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  return Code;
};
