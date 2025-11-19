import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
  
  <img src="assets/taustakuva.jpeg" alt="pic">
  
  <div class="home-container">
    <h1>Welcome to Afterlife</h1>
    <p>Your journey beyond begins here.</p>
    <input class="home-dest-btn" type="button" value="Click here to choose your destination"/>

  </div>
    `,
  styles: [`
    img {
      max-width: 100%;
      height: auto;
      filter: blur(8px);
      -webkit-filter: blur(8px);
    } 
    .home-container {
      background-color: rgb(0,0,0); 
      background-color: rgba(0,0,0, 0.4); 
      color: white;
      font-weight: bold;
      border: 3px solid #f1f1f1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      width: 60%;
      padding: 20px;
      text-align: center;    

  }
  .home-dest-btn {
      background-color: #4CAF50; 
      border: none;
  }
  .home-dest-btn:hover {
  background-color: red;
}

.home-dest-btn:active {
  box-shadow:
    inset -2px -2px 3px rgb(255 255 255 / 60%),
    inset 2px 2px 3px rgb(0 0 0 / 60%);
}    
    `]
  //templateUrl: './home.html',
  //styleUrl: './home.css',
})
export class Home {

}


/*
     filter: blur(8px);
      -webkit-filter: blur(8px);


.home-container {
      background-color: rgb(0,0,0); 
      background-color: rgba(0,0,0, 0.4); 
      color: white;
      font-weight: bold;
      border: 3px solid #f1f1f1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      width: 80%;
      padding: 20px;
      text-align: center;   
    
  }

*/