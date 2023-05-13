import React from 'react';
import Chat from './Chat';
import EnterMessage from './EnterMessage';
import FileUpload from './FileUpload';
const MainContent = () => {
  return (
    <div
      style={{ height: '105vh' }}
      className="w-full shadow-xl bg-gray-800 grid content-evenly p-1 px-10 m-1"
    >
      <Chat />
      <EnterMessage />
      {/* <FileUpload /> */}
    </div>
  );
};

export default MainContent;
