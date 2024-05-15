const socket = io('http://localhost:8002');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

let name = prompt("Enter your name to join");

// Emit 'new-user-joined' event with the provided name
socket.emit('new-user-joined', name
);

// Listen for 'user-joined' event
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right');
});
