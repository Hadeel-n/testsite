import React from 'react';
import './App.css';




function App() {
     const miconStyle = {margin:"10px 50px"};
     const piconStyle = {float: "right", margin:"10px -45px"};
     const hiconStyle = {margin:"90px 10px"};
     const wiconStyle = {margin: "0px -550px", padding: "80px 0px"};



  return (



    <div className="App">
<div>

       <ul>
            <img src ={require('../src/Micon.png')} alt = "micon" width ={90} style ={miconStyle}/>
            <li>
                <a href="#profile" > PROFILE </a>
            </li>
           <a href="#profile"><img src ={require('../src/profileIcon.png')} alt = "picon" width={50} style ={piconStyle}/></a>
       </ul>

</div>

        <h1> AMP UP <br/>THOSE DBS </h1>
        <h4> MAKE MUSIC ON THE GO.</h4>
       <a href = "#hitit"> <img src = {require('../src/Hicon.png')} alt = "hicon" width = {200} style = {hiconStyle}/> </a>


        <div className="box">
            <font size={"+2"}> <b>GET PRODUCTION WITH MUSICDB</b> </font>
            <h5>PICK YOUR PREFERED INSTRUMENT</h5>
            <p>PICK THE INSTUMENTS YOU NEED TO COMPOSE YOUR PIECE</p>
            <a href="composing"> <font color = {"red"}> START COMPOSING </font></a>
        </div>

        <div className="box2">



        <img src = {require('../src/Wicon.png')} alt = "wicon" width = {100} style = {wiconStyle}/>
        <ol className="d">

            <a href = "#profile"><font color={ "white"}> <p>PROFILE</p> </font></a>
            <a href = "#signup"><font color={ "white"}> <p>SIGN UP</p> </font> </a>
            <a href = "#music"> <font color={ "white"}> <p>MUSIC</p> </font> </a>

        </ol>

        </div>

        <div className="navbar">
            <a href="#legal" >LEGAL</a>
            <a href="#privacycenter">PRIVACY CENTER</a>
            <a href="#privacypolicy">PRIVACY POLICY</a>
            <a href="#cookies">COOKIES</a>
            <a href="#aboutus">ABOUT US</a>
            <a href="#copyrights">© 2019 MUSICDB</a>
        </div>


    </div>



  );


}

export default App;
