import axios from "axios";
import proxyConfig from "./proxy";

const request = async (inputText: string, useProxy: boolean = true) => {
    try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4o",
            messages: [{ role: "user", content: inputText }],
            temperature: 1,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
            },
            proxy: proxyConfig
          }
        );
  
        return response.data.choices[0]?.message?.content || "No response";
      } catch (error) {
        console.error("Error:", error);
      }
}

export default request;