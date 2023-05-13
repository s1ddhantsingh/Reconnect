import React from 'react';
import Chat from './Chat';
import EnterMessage from './EnterMessage';
const MainContent = () => {
  return (
    <div className="grid content-evenly p-1 py-36 px-10 m-1">
      <Chat />
      <EnterMessage />
    </div>
  );
};

export default MainContent;
