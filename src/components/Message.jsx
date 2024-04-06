import React from 'react'
import {auth} from '../firebase'

const style = {
    message:`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name:`absolute mt-[-4rem] text-gray-600 text-xs`,
    sent:`bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received:`bg-[#e5e5ea] text-black float-left rounded-br-full`
}

// const Message = ({message}) => {

//   const currentUserUID = auth.currentUser?.uid;

//   const messageClass = message.uid === auth.currentUser.uid
//   ? `${style.sent}`
//   : `${style.received}`

//   return (
//     <div>
//         <div className={style.message}>
//             <p className={style.name}>{message.name}</p>
//             <p>{message.text}</p>
//         </div>
//     </div>
//   );
// };

// export default Message;


const Message = ({ message }) => {
    // Check if message is undefined
    if (!message) {
      return null; // Return null or any other fallback UI if message is undefined
    }
  
    // Check if message.text is undefined
    if (!message.text) {
      return (
        <div>
          <div className={style.message}>
            <p className={style.name}>{message.name}</p>
            <p>{message.text}</p> {/* Fallback message */}
          </div>
        </div>
      );
    }

    const messageClass =
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`
  
    // Render the message with the message text
    return (
      <div>
        <div className={style.message}>
          <p className={style.name}>{message.name}</p>
          <p>{message.text}</p>
        </div>
      </div>
    );
  };
  
export default Message
