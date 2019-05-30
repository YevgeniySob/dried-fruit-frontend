import React from 'react';

const ChatroomList = (props) => {

  return (
    <div onClick={() =>  props.changeChat(props.chat)}>{props.chat.name}</div>
  )

};

export default ChatroomList;
