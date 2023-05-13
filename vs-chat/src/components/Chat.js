import React from 'react';
import { useRecoilState } from 'recoil';
import { messageState } from '../state/atoms/MessageState';
// const fake_data = [
//   { id: 0, content: 'welcome!', sender: 'bot' },
//   { id: 1, content: 'hello chatgpt', sender: 'user' },
//   { id: 2, content: 'hello user', sender: 'bot' },
//   {
//     id: 3,
//     content:
//       'great, is this working?? asjhbdaskjhbdahj sbdjhasbdjhasbdjkhasb djkhasbdjhasbdjhabsdjhbajshbd jahbsdjhasbdjhabs djhabsdjhbjahsb dajhsbdjha sbdj',
//     sender: 'user',
//   },
//   {
//     id: 4,
//     content: 'As an AI i cannot either confirm not deny this...',
//     sender: 'bot',
//   },
// ];

const BotMessage = (message) => {
  return (
    <div className="flex justify-start flex-wrap">
      <div className="bg-red-500 rounded-lg m-3 p-3 w-1/3 flex-wrap">
        {message.content}
      </div>
    </div>
  );
};

const UserMessage = (message) => {
  return (
    <div className="flex justify-end flex-wrap">
      <div className=" flex justify-end bg-blue-500 rounded-lg m-3 p-3 w-1/3 flex-wrap">
        {message.content}
      </div>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useRecoilState(messageState);
  return (
    <>
      <div className="overflow-auto bg-slate-500 m-5 p-5 rounded-lg h-96 flex-wrap">
        {messages.map((message) =>
          message.sender === 'bot' ? BotMessage(message) : UserMessage(message)
        )}
      </div>
    </>
  );
};

export default Chat;
