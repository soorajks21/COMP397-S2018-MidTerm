//Name: Sooraj Suresh
//Student Id: 300981570
//Date : 25-06-2018


let app;
(function(app) {
  "use strict";

  // Game Variables
  let stage;
  let canvas;
  let helloLabel;
  let assetManager;
  let startButton;
  let Dice1;  
  // bitmap image created for dice2
  let Dice2;  
   // textblock created for dice 1
  let txtBoxDice1; 
  // textblock created for dice 2
  let txtBoxDice2; 
  let manifest = [
      { id: "1", src: "/Assets/images/1.png" }, 
      { id: "2", src: "/Assets/images/2.png" }, 
      { id: "3", src: "/Assets/images/3.png" }, 
      { id: "4", src: "/Assets/images/4.png" },
      { id: "5", src: "/Assets/images/5.png" },
      { id: "6", src: "/Assets/images/6.png" },
      { id: "blank", src: "/Assets/images/blank.png" },
      { id: "StartButton", src: "/Assets/images/StartButton.png" }
    ];

  function Init() {
      console.log("App Initializing...");
      assetManager = new createjs.LoadQueue();
      assetManager.installPlugin(createjs.Sound);
      assetManager.on("complete", Start);
      assetManager.loadManifest(manifest);
  }
//function to roll the dice
function roll(){
 stage.removeAllChildren();
  stage.addChild(startButton);
  var img1 = (Math.floor(Math.random()*6)+ 1);
  var img2 = (Math.floor(Math.random() * 6) + 1);
  var Diceval1 = assetManager.getResult(img1);
  var Diceval2 = assetManager.getResult(img2);
  Dice1 = new createjs.Bitmap(Diceval1);
  Dice2 = new createjs.Bitmap(Diceval2);
  Dice1.x = 640 - (Dice1.getBounds().width * 2) - 50;
  Dice2.x = 640 - (Dice1.getBounds().width) - 30;
  Dice1.y = 60;
  Dice2.y = 60;
  Diceval1 = new createjs.Text(img1);
  Diceval2 = new createjs.Text(img2);
  Diceval1.x = Dice1.x + (Dice1.getBounds().width * 0.4);
  Diceval2.x = Dice2.x + (Dice2.getBounds().width * 0.4);
  Diceval1.y = 100 + Dice1.getBounds().height + 5;
  Diceval2.y = 100 + Dice2.getBounds().height + 5;

  stage.addChild(Dice1);
  stage.addChild(Dice2);
  stage.addChild(Diceval1);
  stage.addChild(Diceval2);

  if(img1==img2){
    finish();
  }

}

function finish(){
  helloLabel = new createjs.Text("Success", "60px Consolas", "#000000");
    helloLabel.regX = helloLabel.getBounds().width * 0.5;
    helloLabel.regY = helloLabel.getBounds().height * 0.5;
    helloLabel.x = 200;
    helloLabel.y = 20;
    stage.addChild(helloLabel);
}
  /**
   * The Start function initializes the createjs Stage object,
   * sets the framerate and sets up the Main Game Loop to
   * trigger every frame
   *
   */
  function Start() {
    console.log("App Started...");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    Main();
  }

  /**
   * This is the Main Game Loop it runs at 60 fps
   *
   */
  function Update() {
    stage.update();
  }

  /**
   *  This is the main function - place all your code here
   *
   */
  function Main() {
    console.log("Main Function...");

    // hello label
    helloLabel = new createjs.Text("Hello, World!", "60px Consolas", "#000000");
    helloLabel.regX = helloLabel.getBounds().width * 0.5;
    helloLabel.regY = helloLabel.getBounds().height * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 200;
    stage.addChild(helloLabel);

    // start button
    startButton = new createjs.Bitmap(assetManager.getResult("StartButton"));
    startButton.regX = startButton.getBounds().width * 0.5;
    startButton.regY = startButton.getBounds().height * 0.5;
    startButton.x = 320;
    startButton.y = 300;
    stage.addChild(startButton);

    // start button listeners
    startButton.addEventListener("click", function() {
      stage.removeAllChildren();
      startButton = new createjs.Bitmap(assetManager.getResult("StartButton"));
    startButton.regX = startButton.getBounds().width * 0.5;
    startButton.regY = startButton.getBounds().height * 0.5;
    startButton.x = 320;
    startButton.y = 400;
    stage.addChild(startButton);
    startButton.addEventListener("click",roll);

        console.log("Start Button Clicked");
    });

    startButton.addEventListener("mouseover", function(event) {
        event.currentTarget.alpha = 0.7;
    });

    startButton.addEventListener("mouseout", function(event) {
        event.currentTarget.alpha = 1.0;
    });
  }

  window.addEventListener("load", Init);
})(app | (app = {}));
