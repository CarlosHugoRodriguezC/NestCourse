import { connectToServer } from './socket-client';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket client</h1>
    <input id="jwt-token" placeholder="Json Web Token" />
    <button id="button-connect">Connect</button>
    <span id="server-status">Offline</span>

    <ul id="clients-ul">
    </ul>

    <form id="message-form">
      <label for="message-input">Message</label>
      <input placeholder="message" id="message-input" name="message" />
    </form>
    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// connectToServer();
const inputJwt = document.querySelector<HTMLInputElement>('#jwt-token')!;
const buttonConnect =
  document.querySelector<HTMLButtonElement>('#button-connect')!;

buttonConnect.addEventListener('click', () => {
  if(inputJwt.value.trim().length === 0) return alert('Enter a valid jwt');
  connectToServer(inputJwt.value.trim());
});

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1MjYxZTU5LTdmZDgtNDIwYy04ZWViLTAxZjRhYzZjNjg4OSIsImlhdCI6MTY2OTk0MTg3NSwiZXhwIjoxNjY5OTQ5MDc1fQ.t0e_VoZhmNd41d6nfOjZYHPhQ65e_kjI3JqFfvtNa7w
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRjOTgzNzI0LTU3N2UtNDdjZi04OTcwLTEzNWIzODg2OWJlOCIsImlhdCI6MTY2OTk0MTkzNiwiZXhwIjoxNjY5OTQ5MTM2fQ.UJnKBvT1Pk27x6ZEC9P8M_hfRAcX7l0bIiZw7_tDOIk
