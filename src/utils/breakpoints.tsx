import React from 'react';
import Media from 'react-media';

export const OnMobileOnly: React.FC = ({ children }) => {
  return <Media query="(max-width: 640px)" defaultMatches={false} render={() => children} />;
};

export const OnTabletOnly: React.FC = ({ children }) => {
  return <Media query="(min-width: 801px) and (max-width: 991px)" defaultMatches={false} render={() => children} />;
};

export const OnDesktopOnly: React.FC = ({ children }) => {
  return <Media query="(min-width:992px)" defaultMatches={false} render={() => children} />;
};
