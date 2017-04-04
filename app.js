// IIFE

  var user, name, localGamer, playerRef, userGames, gamesList;
  gamesList = [];
  var splash = document.getElementById("overlay");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsmX3bGT-UqGRJdoYuzM0LnzbwLLsOewA",
    authDomain: "steves.firebaseapp.com",
    databaseURL: "https://steves.firebaseio.com",
    storageBucket: "firebase-steves.appspot.com",
    messagingSenderId: "726653008276"
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(loggedin) {
  if (loggedin) {
    user = firebase.auth().currentUser;
    name = user.email;
    localGamer = user.uid;
    playerRef = database.ref('users/' + localGamer);
    splash.style.visibility = "hidden";
    userGames(user.uid);
    // User is signed in.
  } else {
    console.log("Please log in.");
    splash.style.visibility = "visible";
    // No user is signed in.
  }
  });
// Initializing variables
  var database = firebase.database();
  var squares = document.getElementsByClassName('squares');
  console.log(squares);
  var turn = 0;
  var player = "Grumpy Cat";
  var player1_wins = 0;
  var player2_wins = 0;
  var self = this;
  var boxes = [];
  document.getElementById("p1wins").textContent = player1_wins;
  document.getElementById("p2wins").textContent = player2_wins;
  var ref = firebase.database().ref();
  // var rootRef = ref.root();
  var users = database.ref('users/');
  var userinfo;
  var gamesSplash = document.getElementById("gamesOverlay");
  var allGames = database.ref('games/');
  var gameRef;
  var playerData;
  var gameData;
  var board;
  var games=[];
  var openGames = [];
  var addGames = function() { for(i = 0; i < gamesList.length; i++) {
      var div = document.createElement('div');
      div.setAttribute('class', 'game');
      div.innerHTML = "<p>" + gamesList[i].name + "</p><p>" + gamesList[i].gamedata.gameID + "</p>";
      document.getElementById('gamesList').appendChild(div);
    }
  };
  gamesSplash.style.visibility = "visible";
  var update = function() {
    for (var i = 0; i < squares.length; i++) {
      console.log(squares[i]);
    }
  };

  var boxesRef = ref.child("boxes");
  // boxesRef.set({ 0: {value: ""},
  //              1: {value: ""},
  //              2: {value: ""},
  //              3: {value: ""},
  //              4: {value: ""},
  //              5: {value: ""},
  //              6: {value: ""},
  //              7: {value: ""},
  //              8: {value: ""}});

    // for(var i = 0; i < squares.length; i++) {
    //   squares[i] = boxes[i];
//   boxesRef.on("value", function(snapshot) {
//   update = snapshot.val();
//   for (var i = 0; i < board.length; i++) {
//     squares[i].setAttribute("pval", board[i]);
//   }
//   console.log(board);
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });
    


  // Adds a point to the winner of the round
function addPoint(){
  if (player == "Grumpy Cat"){
    player1_wins++;
    gameRef.child('p1wins').set(player1_wins);}
  else {player2_wins++;
    gameRef.child('p2wins').set(player2_wins);}
  document.getElementById("p1wins").textContent = player1_wins;
  document.getElementById("p2wins").textContent = player2_wins;
  }

  function playerTurn(){
    if (turn % 2 === 0){
      player = "Grumpy Cat";
      }
    else {
      player = "Piano Cat";
      }
    document.getElementById("pturn").textContent = player + "'s Turn";
        console.log(player);}
 

  playerTurn();
 




(function(){
  // Sets the game to listen for clicks on squares
for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', click);
      console.log(squares[i]);}

})();

function click(){
  var self = this;
  // outer if statement checks if square is open
  if (this.innerHTML === ""){
    // inner if statement checks for player turn
        if (turn % 2 ===0){
          // Place x on x turn and change turn to o
        this.innerHTML = "x";
        this.setAttribute("pval", "0");
        this.className = this.className + " x";
        // this.style.backgroundImage = 'url("assets/images/grumpyCat.jpg")';
        turn++;
        listenForWin();
        playerTurn();
        update();
      }
          // Place o on o turn and change turn to x
        else {this.innerHTML = "o";
              this.setAttribute("pval", "1");
              this.className = this.className + " y";
        turn++;
        // this.style.backgroundImage = 'url("assets/images/pianoCat.jpg")';
        listenForWin();
        playerTurn();
        update();
      }}
        // if square is used do nothing
  else {return;}
   for(var i = 0; i<squares.length;i++){
  boxes.push(squares[i].getAttribute("pval"));
}
  boxesRef.set(boxes);
  gameRef.child('board').set(boxes);
  boxes.splice(0,9);
// console.log(boxes);
}

function listenForWin(){
  // Checks for win combinations, adds point to winner, confirms replay, invokes reset
 if (aa.innerHTML === ab.innerHTML && ac.innerHTML === aa.innerHTML && ac.innerHTML !== ""){
    console.log(player + " wins!");
    addPoint();
    confirm(player + " wins! Play again?");
    reset();}
 else if (ba.innerHTML === bb.innerHTML && bb.innerHTML === bc.innerHTML && ba.innerHTML !== ""){
     console.log(player + " wins!");
     addPoint();
    confirm(player + " wins! Play again?");
    reset();}
 else if (ca.innerHTML === cb.innerHTML && cb.innerHTML === cc.innerHTML && ca.innerHTML !== ""){
     console.log(player + " wins!");
     addPoint();
     confirm(player + " wins! Play again?");
     reset();}
 else if (aa.innerHTML === ba.innerHTML && ca.innerHTML === aa.innerHTML && aa.innerHTML !== ""){
     console.log(player + " wins!");
     addPoint();
     confirm(player + " wins! Play again?");
     reset();}
 else if (ab.innerHTML === bb.innerHTML && cb.innerHTML === ab.innerHTML && ab.innerHTML !== ""){
     console.log(player + " wins!");
     addPoint();
     confirm(player + " wins! Play again?");
     reset();}
 else if (ac.innerHTML === bc.innerHTML && cc.innerHTML === ac.innerHTML && ac.innerHTML !== ""){
     console.log(player + " wins!");
     addPoint();
     confirm(player + " wins! Play again?");
     reset();}
 else if (aa.innerHTML === bb.innerHTML && cc.innerHTML === aa.innerHTML && aa.innerHTML !== ""){
     console.log(player + " wins!");
     addPoint();
     confirm(player + " wins! Play again?");
     reset();}
 else if (ca.innerHTML === bb.innerHTML && ac.innerHTML === ca.innerHTML && ca.innerHTML !== ""){
    console.log(player + " wins!");
    addPoint();
    confirm(player + " wins! Play again?");
    reset();}
 else if (turn === 9){confirm("Cats Game. Play again?");
    reset();}
 else {return;}
}
function reset(){
  for(var i = 0; i<squares.length;i++){
    squares[i].innerHTML = "";
    newclass = squares[i].className;
    initialclass = newclass.replace(/[x-y]/, '');
    squares[i].className = initialclass;
    squares[i].setAttribute("pval", "");
    console.log(squares[i].className);
    // if (document.body.id === "" || document.body.id === "forest"){
    // squares[i].style.backgroundImage = 'url("assets/images/greyScale.jpg")';}
    // else {squares[i].style.backgroundImage = 'none';}
    turn = 0;
    playerTurn();
  }

}



      
  



// var makeUser = function makeUser(x, y) {
//   ref.createUser({
//     email    : x,
//   password : y
// }, function(error, userData) {
//   if (error) {
//     console.log("Error creating user:", error);
//   } else {
//     console.log("Successfully created user account with uid:", userData.uid);
//   }
// });
// };

var usr = "Tim@tim.com";
var pass = "password";
// makeUser(usr, pass);

function login(email, password){
  email = document.getElementById("x").value;
  password = document.getElementById("y").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
    if (errorCode) {
      console.log("Could not log in user due to : " + error);
    }
    else {
      console.log("Authenticated successfully!");
    }
  // ...
});
}
  // ...
//   ref.authWithPassword({
//   email    : user,
//   password : pass
// }, function(error, authData) {
//     if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//     userinfo = authData;
//     playerRef = new Firebase(DATA_LOCATION + 'users/' + userinfo.uid);
//     playerRef.on("value", function(snapshot) {
//       playerData = snapshot.val();
//       if (playerData.games !== undefined) {
//         games = playerData.games;
//       }
//       else {}
//       console.log("Welcome " + playerData.name + '.');
//     }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });
//  overlay();
//   }},  {
//   remember: "sessionOnly"
// });

// login(usr, pass);





// function loggedin(){
//   if (user === true){
//     splash.style.visibility = "hidden";
//   }
//   else {
//     splash.style.visibility = "visible";
//   }
// }



function overlay(){
  splash.style.visibility = (splash.style.visibility == "visible") ? "hidden" : "visible";
}
function gamesOverlay(){
  if (gameData) {
    gamesSplash.style.visibility = "hidden";
  }
  else {
    gamesSplash.style.visibility = "visible";
  }
  // gamesSplash.style.visibility = (gamesSplash.style.visibility == "visible") ? "hidden" : "visible";
}

function createGame(){
  var gameNum = Math.floor((Math.random() * 100000) + 1);
  var newgame = database.ref('games/' + gameNum);
  console.log(users.child(localGamer));
  newgame.set({
    name : "new game"
  });

  newgame.child('p1').set(localGamer);
  gameRef = newgame.child('gamedata');
  gameRef.set({
    board : {
    0 : {pval: ""},
    1 : {pval: ""},
    2 : {pval: ""},
    3 : {pval: ""},
    4 : {pval: ""},
    5 : {pval: ""},
    6 : {pval: ""},
    7 : {pval: ""},
    8 : {pval: ""}
    },
    gameID : gameNum,
    turn : 0,
    p1wins : 0,
    p2wins : 0,
    p1 : localGamer,
  });
  console.log("game created!");
    games.push(gameNum);
    playerRef.child('games').set(games);
  gameRef.on("value", function(snapshot){
  gameData = snapshot.val();
  board = gameData.board;
    for (var i = 0; i < board.length; i++) {
    squares[i].setAttribute("pval", board[i]);
  }
  console.log(board);
  gamesOverlay();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}

function findGame(){
    allGames.orderByChild("p2").endAt(false).once("value")
    .then(function(snapshot){
      snapshot.forEach(function(answer){
        openGames.push(answer.key());
      });
    }).then(
  allGames.orderByChild("p1").equalTo(userinfo.uid).once("value")
   .then(function(snapshot) {
      snapshot.forEach(function(answer){
        var search_term = answer.key();
        for (var i=openGames.length-1; i>=0; i--) {
        if (openGames[i] === search_term) {
        openGames.splice(i, 1);
    }
  }
  });
}));
}


userGames = function(usr){
  allGames.orderByChild("p2").equalTo(usr).on("child_added", function(pTwoGamesSnapshot) {
    // myGamesSnapshot.forEach(gamesList.push);
    console.log(pTwoGamesSnapshot.val());
  });
  allGames.orderByChild("p1").equalTo(usr).on("child_added", function(pOneGamesSnapshot) {
    gamesList.push(pOneGamesSnapshot.val());
    console.log(pOneGamesSnapshot.val());
    addGames();
  });
};


function makeUser(){
  var email = document.getElementById("x").value;
  var password = document.getElementById("y").value;
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error, Data) {
  // Handle Errors here.
  if (error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("Could not Create user due to : " + error.code + error.message);
  }
  else {
    console.log("Successfully create user account!");
    console.log("Successfully logged in!");
    user = userData;
  }
});
//   ref.createUser({
//   email    : user,
//   password : pass
// }, function(error, userData) {
//   if (error) {
//     console.log("Error creating user:", error);
//   } else {
//     console.log("Successfully created user account with uid:", userData.uid);
//     login(user, pass);
//   }
//   users.child(userData.uid).set({
//     name : user,
//   });
//   console.log(userData);
// });
}

// style
function styleChange(value){
    document.body.id = value;

  }
