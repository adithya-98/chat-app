// import React, {useState} from 'react';
// import {auth, db} from '../firebase';
// import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

// const style = {
//     form: `absolute h-14 w-full max-w-[728px] flex text-xl button-0`,
//     input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
//     button: `w-[20%] bg-green-500`
// }
// const SendMessage = ({scroll}) => {
//     const [input, setInput] = useState('');
    
//     const SendMessage = async (e) => {
//         e.preventDefault()
//         if (input === '') {
//             alert('Please enter a valid message')
//             return
//         }
//         const {uid, displayName} =auth.currentUser
//         await addDoc(collection(db, 'messages'),{
//             text: input,
//             name: displayName,
//             uid,
//             timestamp: serverTimestamp()
//         })
//         setInput('')
//         scroll.current.scrollIntoView({behavior: 'smooth'})
//     }
    
//       return (
//           <form onSubmit={SendMessage} className={style.form}>
//               <input 
//                 value ={input} 
//                 onChange={(e) => setInput(e.target.value)} 
//                 className={style.input} 
//                 type="text" 
//                 placeholder='Message' 
//               />
//               <button className={style.button} type="submit">Send</button>
//           </form>
//       );
//     };
    
//     export default SendMessage;


//     const SendMessage = () => {
//   return (
//     <form className={style.form}>
//         <input className={style.input} type="text" placeholder='Message' />
//         <button className={style.button} type="submit">Send</button>
    
//     </form>
//   )
// }

// export default SendMessage



import React, { useState } from 'react';
import {auth, db} from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const style = {
    formContainer: 'fixed bottom-10 left-0 w-full', // Adjust the bottom value as needed
    form: 'h-14 max-w-[728px] flex text-xl mx-auto',
    input: 'w-full text-xl p-3 bg-gray-900 text-white outline-none border-none',
    button: 'w-[20%] bg-green-500'
};

const SendMessage = ({scroll}) => {
const [input, setInput] = useState('');

const SendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} =auth.currentUser
    await addDoc(collection(db, 'messages'),{
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
}

  return (
    <div className={style.formContainer}>
      <form onSubmit={SendMessage} className={style.form}>
          <input 
            value ={input} 
            onChange={(e) => setInput(e.target.value)} 
            className={style.input} 
            type="text" 
            placeholder='Message' 
          />
          <button className={style.button} type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;

