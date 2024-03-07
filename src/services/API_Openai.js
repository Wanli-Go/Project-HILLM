import React, { useState } from "react";
import axios from "axios"

const OpenAIComponent = () => {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env);
    if (process.env.REACT_APP_OPENAI_KEY) {
      // Variable exists, you can use it here
      console.log(process.env.REACT_APP_OPENAI_KEY);
    } else {
      // Variable does not exist
      console.log("OPENAI_KEY is not set");
    }
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4-turbo-preview",
          messages: [{ role: "user", content: inputText }],
          temperature: 0.6,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          },
        }
      );

      setResponse(response.data.choices[0]?.message?.content || "No response");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <p>Response:</p>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default OpenAIComponent;
