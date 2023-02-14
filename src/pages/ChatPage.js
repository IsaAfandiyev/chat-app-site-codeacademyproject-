import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';


function ChatPage() {

  // const [message, setmessage] = useState('');
  // const [socketId, setsocketId] = useState('');

  const [messages, setmessages] = useState([]);

  let socket = io('http://localhost:8088');

  // useEffect(() => {
  //
  //
  //   socket.on('chatmessage2', (data) => {
  //     setmessages([...messages, data]);
  //   })
  //
  // }, []);


  const send = () => {
   // socket.emit('chatmessage', message);
  }



  return (<>
    <div>
      <div>
        <label>Socket Id: </label>
        <input type='text' onChange={setsocketId} />
      </div>

      <label>Message: </label>
      <input type='text' onChange={(e) => setmessage(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
    <div>
      <ul>
        {
          messages && messages.map((item, key) => <li key={key}>{item}</li>)
        }
      </ul>
    </div>
  </>
  )
}

export default ChatPage