inHomepage = false;

aspectRatio = window.screen.height / window.screen.width;
uri = window.location.search;

/*If aspect ration is lower than 1, then
 the device is capable of running an 
 animation(Desktop or medium-high-end phone).
  Otherwise, if it is higher than 1, then, perhaps,
   it is running a device that slows when animations is playing(Phones)*/

if (aspectRatio <= 1 & uri !== "?show=true") {
  /*Elements*/
  introContainer = document.getElementById("introContainer");
  mainContainer = document.getElementById("mainContainer");

  mainContainer.style.display = "none";
  mainContainer.style.opacity = 0;

  /*
  Introduction animation
  */
  introContainer.addEventListener("animationend", function() {
    killIntroElement();
    showMainContainerElement();
    mainContainer.style.animation = "containerfade 2s 1";
  });

  /*
Main container animation
*/
  mainContainer.addEventListener("animationend", function() {
    mainContainer.style.animation = "none";
  });
} else {
  killIntroElement();
  showMainContainerElement();
  mainContainer.style.animation = "none";
}

function showMainContainerElement() {
  mainContainer.style.display = "flex";
  mainContainer.style.opacity = 1;
}

function killIntroElement() {
  introContainer.style.animation = "none";
  introContainer.style.height = 0;
  introContainer.style.opacity = 0;
}

// setTimeout(function() {
//   if (!inHomepage) {
//     setMainPage();
//   }
// }, 10000);
