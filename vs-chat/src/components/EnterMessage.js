import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { messageState } from '../state/atoms/MessageState';
import { idCounter } from '../state/atoms/IdCounter';

// //! ChatGPT components (chatbot components)
// import { OpenAI } from 'langchain/llms/openai';
// import { HumanChatMessage, SystemChatMessage } from 'langchain/schema';

// const chat = new OpenAI({ temperature: 0 });

// const response = await chat.call([
//   new SystemChatMessage(
//     'You are a helpful assistant that translates English to French.'
//   ),
//   new HumanChatMessage('Translate: I love programming.'),
// ]);

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:",
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.0,
//   stop: ["\n"],
// });

// console.log(response);

const EnterMessage = () => {
  const [messages, setMessages] = useRecoilState(messageState);
  const [idIndex, setIdIndex] = useRecoilState(idCounter);
  const [message, setMessage] = useState('');

  const addMessage = () => {
    if (message.trim() === '') return; //! avoid the nonsense strings...
    setIdIndex(idIndex + 1); //! increment the index
    setMessages((prevMessages) => [
      ...prevMessages,
      { key: idIndex, id: idIndex, content: message, sender: 'bot' },
    ]);
    /*
    TODO, use ChatGPT to send a message here...
    */

    setMessage('');
    console.log(messages);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  console.log({ message });

  return (
    // m-5 p-5 flex justify-center items-center bg-slate-500 rounded-lg
    // m-1 p-1 flex justify-center items-center bg-slate-800 rounded-lg
    <div className="m-5 p-5 flex justify-center items-center bg-slate-500 rounded-lg">
      {/*//! input box, where you put in the message */}
      <input
        value={message}
        onChange={handleInputChange}
        type="text"
        id="input"
        className="block 
            shadow-xl
            w-full 
            p-4 
            m-3 
            text-gray-900 
            border 
            border-gray-300 
            rounded-lg 
            bg-gray-50 
            sm:text-md 
            focus:ring-blue-500 
            focus:border-blue-500 
            dark:bg-gray-700 
            dark:border-gray-600 
            dark:placeholder-gray-400 
            dark:text-white
            dark:focus:ring-blue-500 
            dark:focus:border-blue-500"
      />
      {/*//! input box, where you put in the message */}
      <button
        onClick={addMessage}
        className="m-3 p-4
            shadow-xl
            bg-white
            focus:ring-blue-500
            focus:border-blue-500
            dark:focus:ring-blue-500
            dark:focus:border-blue-500 
            border 
            rounded-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default EnterMessage;
