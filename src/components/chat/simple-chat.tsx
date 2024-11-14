import React, { useRef, useState } from "react";
import request from "../../services/api/simple-request";
import LoadingVisual from "../loading";

import "./index.css"

const SimpleChatComponent: React.FC = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // console.log(process.env);
    if (process.env.REACT_APP_OPENAI_KEY) {
      // Variable exists, you can use it here
      console.log(process.env.REACT_APP_OPENAI_KEY);
    } else {
      // Variable does not exist
      console.log("OPENAI_KEY is not set");
      setResponse("Error");
      return;
    }
    setLoading(true);
    const result = await request(inputRef.current?.innerText ?? ' ');
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div
        contentEditable
        ref={inputRef}
      />
      <button
        onClick={handleSubmit}
      >Send</button>
      {
        isLoading && <LoadingVisual/>
      }
      <div>
        <p>Response:</p>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default SimpleChatComponent;
