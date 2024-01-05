// Get  to DOM elements

//Variables to maintain the scores of both users and CPU
var userScore=0;
var cpuScore=0;

const gameContainer = document.querySelector(".container"),
  userResult = document.getElementById("user_result1"),
  cpuResult = document.getElementById("cpu_result1"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");
  const backgroundMusic = document.getElementById("myAudio");

  // Play the background music
function playBackgroundMusic() {
  backgroundMusic.play();
}

// Pause the background music
function pauseBackgroundMusic() {
  backgroundMusic.pause();
}

// Adjust the volume (0.0 to 1.0)
function setVolume(volume) {
  backgroundMusic_1.volume = volume;
}



// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = cpuResult.src = "rock.png";
    result.textContent = "Wait...";
    userResult.style.animationPlayState="running"/*This line sets the animationPlayState property of the HTML element with the ID userResult to "running".*/ 
    cpuResult.style.animationPlayState="running"/* this is also simliar to the previous code*/


    // Loop through each option image again3
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });
    
playBackgroundMusic(); // Start playing background music

    // gameContainer.classList.add("start");
  

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      // gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);// why 3 i s used in these
      // Create an array of CPU image options
      let cpuImages = ["rock.png", "paper.png", "scissors.png"];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];
      console.log(cpuValue,userValue)

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };
      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      //Switch statements to update the user and cpu scores
      switch(outComeValue){
        case "User":
          userScore+=1
          break;
        
        case "Cpu":
          cpuScore+=1;
          break;
      }

      // Taking the element from HTML and modifying it.
      
      let cpuSc=document.getElementById("cpu_score");
      let userSc=document.getElementById("user_score");
      cpuSc.innerHTML=`CPU Score:${cpuScore}`;
      userSc.innerHTML=`User Score:${userScore}`;

  
      // Display the result
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
      userResult.style.animationPlayState="paused";
      cpuResult.style.animationPlayState="paused";
    }, 2500);
  });
});






