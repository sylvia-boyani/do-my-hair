/* eslint-disable no-unused-vars */
import  './Home.css';
import BookPage from './Book';
import { useState } from 'react';
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD5_v4FdF5LswBMz6sbhVUp5pHV0XXxB78",
//   authDomain: "hair-with-flair-237c8.firebaseapp.com",
//   databaseURL: "https://hair-with-flair-237c8-default-rtdb.firebaseio.com",
//   projectId: "hair-with-flair-237c8",
//   storageBucket: "hair-with-flair-237c8.appspot.com",
//   messagingSenderId: "1084069080219",
//   appId: "1:1084069080219:web:e24018370fbb0c619aea3e",
//   measurementId: "G-8MCPVDTLQH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase(app);


const Home = () => {
    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');
        
        const leave_date = document.getElementById('leave-date');
        const leave_time = document.getElementById('leave-time');

        if(!book_date.value || !book_time.value || !leave_date.value || !leave_time.value){
            alert('Please fill all the fields');
        }else{
        //     writeUserData();
        // function writeUserData() {
        //     const db = getDatabase();
        //     set(ref(db, 'data/'), {
        //     bookingdate: book_date.value,
        //     bookingtime: book_time.value,
        //     leave_date: leave_date.value,
        //     leave_time: leave_time.value,
        //     });
        // }
            alert('Your booking has been made');
            const BookPageDiv = document.querySelector('.box');
            const container = document.querySelector('.container');
            setvalid(!valid + BookPageDiv.classList.add("show"));
            sethide(!hide + container.classList.add("hide"));
        }
    }
  return (
      <>
        <BookPage />
        <div className="container">
      <div className="content">
        <div className="text">Book Your Appointment Now!</div>
        <div className="form2">
          <div className="txt">Date & Time you would like hair done😊😊</div>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputData">
              <input type="date" name="" id="book-date"/>
            </div>
            <div className="inputData">
              <input type="time" name="" id="book-time" />
            </div>
            <div className="txt">Date & Time For a retouch</div>
            <div className="inputData">
              <input type="date" name="" id="leave-date" />
            </div>
            <div className="inputData">
              <input type="time" name="" id="leave-time" />
            </div>
            <div className="book">
                <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </>
  );
};
export default Home;