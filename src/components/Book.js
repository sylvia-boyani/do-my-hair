import './Book.css'
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
// const data = getDatabase(app);

const Book = () => {
    let Hairs = [
        {
            name: "Hairstyle 1",
            price: "100",
            image: "https://renystyles.com/wp-content/uploads/2018/04/06eae38a5834b7c25435c7154c04d6b3.jpg",
        },

        {
            name: "Hairstyle 2",
            price: "200",
            image: "https://renystyles.com/wp-content/uploads/2018/04/fd586d1948d66aeec074c0eca2148944.jpg",
        },
        {
            name: "Hairstyle 3",
            price: "300",
            image: "https://i0.wp.com/www.momoafrica.com/wp-content/uploads/2017/12/hairstyle.jpg?w=425&ssl=1",
        },
        {
            name: "Hairstyle 4",
            price: "400",
            image: "https://i2.wp.com/www.momoafrica.com/wp-content/uploads/2018/02/hairstyle.4.jpg?w=387&ssl=1",
        },
        {
            name: "Hairstyle 5",
            price: "50",
            image: "https://renystyles.com/wp-content/uploads/2018/04/2c2a91f425be2c4e9c8ae44c4fe5df6d-e1564315142924.jpg",
        },
        {
            name: "Hairstyle 6",
            price: "400",
            image: "https://content.latest-hairstyles.com/wp-content/uploads/bright-blonde-box-braids-for-black-ladies.jpg",
        },
        {
            name: "Hairstyle 7",
            price: "400",
            image: "https://content.latest-hairstyles.com/wp-content/uploads/balayage-river-faux-locs-for-black-women.jpg",
        },
    ]
    console.log(Hairs[0].price);
    const bookHtl1 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hairs[0].image;
        nameTarget.innerHTML = Hairs[0].name;
        priceTarget.innerHTML = '$' + Hairs[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        // writeUserData();
        // function writeUserData() {
        //     const db = getDatabase();
        //     set(ref(db, 'booking/'), {
        //     HotelImage: Hotels[0].image,
        //     HotelName: Hotels[0].name,
        //     HotelPrice: '$' + Hotels[0].price,
        //     });
        // }

    }
    const bookHtl2 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hairs[1].image;
        nameTarget.innerHTML = Hairs[1].name;
        priceTarget.innerHTML = '$' + Hairs[1].price;
        cards.style.display = "none";
        request.style.display = "block";

    //     writeUserData();
    //     function writeUserData() {
    //         const db = getDatabase();
    //         set(ref(db, 'booking/'), {
    //         HotelImage: Hotels[1].image,
    //         HotelName: Hotels[1].name,
    //         HotelPrice: '$' + Hotels[1].price,
    //         });
    //     }
    }
    const bookHtl3 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hairs[2].image;
        nameTarget.innerHTML = Hairs[2].name;
        priceTarget.innerHTML = '$' + Hairs[2].price;
        cards.style.display = "none";
        request.style.display = "block";

    //     writeUserData();
    //     function writeUserData() {
    //         const db = getDatabase();
    //         set(ref(db, 'booking/'), {
    //         HotelImage: Hotels[2].image,
    //         HotelName: Hotels[2].name,
    //         HotelPrice: '$' + Hotels[2].price,
    //         });
    //     }
     }
    const bookHtl4 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hairs[3].image;
        nameTarget.innerHTML = Hairs[3].name;
        priceTarget.innerHTML = '$' + Hairs[3].price;
        cards.style.display = "none";
        request.style.display = "block";

        // writeUserData();
        // function writeUserData() {
        //     const db = getDatabase();
        //     set(ref(db, 'booking/'), {
        //     HotelImage: Hotels[3].image,
        //     HotelName: Hotels[3].name,
        //     HotelPrice: '$' + Hotels[3].price,
        //     });
        // }
    }
    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    }
    return (
        <div className="box">
            <div className="content">
                <div className="text">Find  the best hair-style</div>
                <div className="target">
                    <div className="target">
                    <div className="card">
                        <img src="" id='targetImage' alt="" />
                         <div className="hair_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookHtl1}>
                            <img src={Hairs[0].image} alt="hairstyle 1" />
                            <div className="hair_name">{Hairs[0].name}</div>
                            <div className="price">{'$' + Hairs[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHtl2}>
                            <img src={Hairs[1].image} alt="hairstyle 2" />
                            <div className="hair_name">{Hairs[1].name}</div>
                            <div className="price">{'$' + Hairs[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHtl3}>
                            <img src={Hairs[2].image} alt="hairstyle 3" />
                            <div className="hair_name">{Hairs[2].name}</div>
                            <div className="price">{'$' + Hairs[2].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHtl4}>
                            <img src={Hairs[3].image} alt="hairstyle 4" />
                            <div className="hair_name">{Hairs[3].name}</div>
                            <div className="price">{'$' + Hairs[3].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHtl4}>
                            <img src={Hairs[4].image} alt="hairstyle 4" />
                            <div className="hair_name">{Hairs[3].name}</div>
                            <div className="price">{'$' + Hairs[3].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHtl4}>
                            <img src={Hairs[5].image} alt="hairstyle 4" />
                            <div className="hair_name">{Hairs[3].name}</div>
                            <div className="price">{'$' + Hairs[3].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHtl4}>
                            <img src={Hairs[6].image} alt="hairstyle 4" />
                            <div className="hair_name">{Hairs[3].name}</div>
                            <div className="price">{'$' + Hairs[3].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;