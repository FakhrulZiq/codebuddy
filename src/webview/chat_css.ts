export const chatCss: string = `
#chat-container {
    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#chat-title {
    padding: 10px;
    font-weight: bold;
    background-color: #000000;
}

#chat-messages {
    height:700px;
    overflow-y: scroll;
    padding: 10px;
    max-width: 100%;
}

.chat-message-container {
    margin-bottom: 10px;
}

.chat-message-header {
    font-weight: bold;
    color: rgb(97, 175, 239);
}

.chat-message-body {
    margin-top: 5px;
}

#chat-input-container {
    display: flex;
    align-items: center;
    padding-top: 10px;
    width: 100%;
}

#chat-input {
    flex: 1;
    padding: 35px;
    background-color: #0b0b0b;
    color: #fff;
    border: none;
    font-size: 14px;
}

#chat-send {
    margin-top: 10px;
    padding: 15px;
    border: none;
    background-color: #000;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
}

#loading {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
}


.message {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    color: #666;
}



body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: SF Mono;
}


h1 {
color: #569cd6;
font-size: 24px;
margin-bottom: 20px;
}

p {
margin-bottom: 15px;
}

ol {
margin-left: 20px;
margin-bottom: 20px;
}

li {
margin-bottom: 10px;
}

pre {
border-radius: 4px;
padding: 10px;
overflow-x: auto;
background-color: #000;
}

code {
color: rgb(97, 175, 239);
font-size: 14px;
}`;
