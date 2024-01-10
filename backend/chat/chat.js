app.use(cors());

const io = require("./io");
const users = []



const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (receiverId) => {
  return users.find((user) => user.userId === receiverId);
};


const createMessage = ({ senderId, receiverId, messageId, text, images }) => ({
  senderId,
  receiverId,
  messageId,
  text,
  images,
  seen: false,
});



io.on("connection", (socket) => {

  console.log(`a user is connected`);


  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  // send and get message
  const messages = {}; // Object to track messages sent to each user


  socket.on(
    "sendMessage",
    ({ senderId, receiverId, messageId, text, images }) => {
      const message = createMessage({
        senderId,
        receiverId,
        messageId,
        text,
        images,
      });

      console.log(`Receiver Id: ${receiverId}`);

      const user = getUser(receiverId);


      if (!messages[receiverId]) {
        messages[receiverId] = [message];
      } else {
        messages[receiverId].push(message);
      }

      // send the message to the recevier
      io.to(user?.socketId).emit("getMessage", message);
    }
  );

  socket.on("messageSeen", ({ senderId, receiverId, messageId }) => {
    const user = getUser(senderId);



    console.log(messages);
    if (messages[senderId]) {
      const message = messages[senderId].find(
        (message) =>
          message.receiverId === receiverId && message.id === messageId
      );

      if (message) {
        message.seen = true;


        io.to(user?.socketId).emit("messageSeen", {
          senderId,
          receiverId,
          messageId,
        });
      }
    }
  });


  socket.on("updateLastMessage", ({ lastMessage, lastMessagesId }) => {
    io.emit("getLastMessage", {
      lastMessage,
      lastMessagesId,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log(`a user disconnected!`);
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
