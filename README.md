# Project HILLM (Human Interface of Large Language Models)



## Main Goal

Interact with **LLMs** (Large Language Models, an interactable text-based AI) in a **Open, Adjustable, Manageable** way.



## Key Features

1. Able to configure different **workspaces** where the model remembers (derives information) from other conversations within the same workspace.
2. Chat in an "**open**" way means:
   - real-time token count
   - preview full request fed into the model, including various parameters
   - look into workspace memory and manage them conveniently
   - get warned if exceeding context window
3. Chat in an "**adjustable**" way means:
   - adjust how "memory" is derived in a workspace. [[1]](#1)
   - adjust response length. [[2]](#2)
   - adjust numerous request parameters, like temperature, top K, safety settings for a request/workspace/folder/conversation. [[3]](#3)
4. Chat in a "**manageable**" way means:
   - You can create folders inside workspace, folders inside folders to contain multiple chats; a disposable area can also be selected for a quick reference chat that doesn't need to be stored.
   - Your chat history is stored locally, so you don't have to experience the lag of navigating between different chats in most webapps.
   - You can open different tabs, like in the browser, and navigate between them in no time.
   - You can like a folder / conversation.
   - Custom names for a conversation and only generate titles once you ask.











































## Additional Information

##### [1]

By default, after responding to a request, an additional "remember" request is sent in the background to summarize what we have talked about so far, using a **default summarization prompt**. You can adjust this prompt, or letting the model remember exactly everything we've talked so far, or completely turn off the memory feature. You can turn off memory for a single conversation as well.

##### [2]

Apps like ChatGPT, Gemini usually have a **fixed output limit** for a response. You can adjust it now in our app.

##### [3]

You don't get to adjust the model parameters in ChatGPT, right? Now you can have full-access to a variety of parameters, which means you can generate more creative contents, or even contents that are normally prohibited in public. These parameter settings can be applied to a single request, or within the same conversation, or an entire folder or workspace.

