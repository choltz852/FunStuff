//text chunks and HTML updates
const startAdventure = "You wake up in a room with no memory of who you are or how you ended up where you are.  Laying on a table next to you is a sword and shield. You hear sounds coming from the hallway.";
const WWYD = " What will you do?"
const setPickUpSword = "<button id='pickUpSword' onclick='pickUpSword()'>Pick up sword</button>";
const setPickUpShield = "<button id='pickUpShield' onclick='pickUpShield()'>Pick up shield</button>";
const setPickUpPotion = "<button id='pickUpPotion' onclick='pickUpPotion()'>Pick up potion</button>";

/* const setGoToHut = "<button id='goToHut' onclick='goToHut()'>Go to hut</button>";
const setGoToRiver = "<button id='goToRiver' onclick='goToRiver()'>Go to river</button>";
const setGoToCave = "<button id='goToCave' onclick='goToCave()'>Go to cave</button>";
const setGoToTree = "<button id='goToTree' onclick='goToTree()'>Go to Tree</button>";
const setTalkToWitch = "<button id='talkToWitch' onclick='talkToWitch()'>Talk to witch</button>";
const setAttackWitch = "<button id='attackWitch' onclick='attackWitch()'>Attack witch</button>";
const setStareAtWitch = "<button id='stareAtWitch' onclick='stareAtWitch()'>Stare at witch</button>";
const setReturnToMeadow = "<button id='returnToMeadow' onclick='returnToMeadow()'>Return to meadow</button>";
const setTryToSwim = "<button id='tryToSwim' onclick='tryToSwim()'>Try to swim</button>";
const setThrowStone = "<button id='throwStone' onclick='throwStone()'>Throw stone</button>";
const setUseAmuletAtRiver = "<button id='useAmuletAtRiver' onclick='useAmuletAtRiver()'>Use magical amulet</button>";
const setExploreCave = "<button id='exploreCave' onclick='exploreCave()'>Explore cave</button>";
const setExamineBones = "<button id='examineBones' onclick='examineBones()'>Examine bones</button>";
const setTakeBones = "<button id='takeBones' onclick='takeBones()'>Take bones</button>";
const setTakeANap = "<button id='takeANap' onclick='takeANap()'>Take a nap</button>";
const setAskWhoSpeaks = "<button id='askWhoSpeaks' onclick='askWhoSpeaks()'>Ask who is speaking</button>";
const setShowTreeItems = "<button id='showTreeItems' onclick='showTreeItems()'>Show tree your items</button>";
const setGameOver = "<table style='margin-left:35%;'><tr><td><button id='gameOver' onclick='gameOver()'>Game Over <br> Click to restart</button></td></tr></table>";
const gameWon = "<table style='margin-left:35%;'><tr><td><button id='gameOver' onclick='gameOver()'>You won! <br> Click to restart</button></td></tr></table>";
const maxScore = 46;
const minimumScore = 16;
const gameWonCompletely = "<table style='margin-left:30%;'><tr><td><button id='gameWonComplete' onclick='gameWonComplete()'>You won! <br> Start New Adventure</button></td></tr></table>"; */
const slimeHealth = 7;
const birdHealth = 10;
const skeletonHealth = 15;
const setBeginBattle = "<button id='beginBattle' onclick='beginBattle()'>Begin battle!</button>";
const slime = "slime";
const setAttackSlime = "<button id='attackSlime' onclick='attackSlime()'>Attack slime!</button>";
const setUsePotion = "<button id='usePotion' onclick='usePotion()'>Use potion!</button>";
const setFlee = "<button id='flee' onclick='flee()'>Flee!</button>";
const setEnterHallway1 = "<button id='enterHallway1' onclick='enterHallway1()'>Enter hallway!</button>";

//game state variables; reset on game over
var hasSwordEquipped = false;
var hasShieldEquipped = false;
var charStr = 5;
var maxCharHealth = 10;
var currentCharHealth = 10;
var charDef = 3;
/* var staredAtWitch = false;
var hasAmulet = false;
var hasYeFlask = false;
var stonesThrown = 0;
var riverFrozen = false;
var bonesExamined = 0;
var hasBones = false;
var askedWhoSpoke = false;
var amuletUsedAtRiver = 0;
var score = 0;
var lostPointForFrozenSwim = false;
var lostPointForAsking = false; */
var currentSlimeHealth = 7;
var currentBirdHealth = 10;
var currentSkeletonHealth = 15;
var potionStock = 0;
var pickedUpRoomPotion = false;
var currentEnemy = "";

//stat variables; do not reset on game over


function updateScore() {
    if (score > highScore) {
        highScore = score;
        document.getElementById("highScore").innerHTML = "High Score: " + highScore;
        document.getElementById("score").innerHTML = "Score: " + score;
    } else {
        document.getElementById("highScore").innerHTML = "High Score: " + highScore;
        document.getElementById("score").innerHTML = "Score: " + score;   
    }
}

function beginAdventure() {
    document.getElementById("textArea").innerHTML = startAdventure + WWYD;
    document.getElementById("option1").innerHTML = setPickUpSword;
    document.getElementById("option2").innerHTML = setPickUpShield;
    document.getElementById("option3").innerHTML = setPickUpPotion;
    document.getElementById("option4").innerHTML = setEnterHallway1;
}

function pickUpSword() {
    $("#textArea").html("You pick up the sword and equip it. You know that you know how to use it, though you don't remember where you learned." + WWYD);
    hasSwordEquipped = true;
    $("#option1").hide();
    if (hasShieldEquipped == false) {
        $("#option2").html(setPickUpShield);
    } else {
        $("#option2").hide(); 
    }
    if (pickedUpRoomPotion == false) {
        #("#option3").html(setPickUpPotion);
    } else {
        #("#option3").hide(); 
    }
    $("#option4").html(setEnterHallway1);
}

function pickUpShield() {
    document.getElementById("textArea").innerHTML = "You pick up the shield and equip it. You've heard that the best offense is a good defense. You think the sword seems like a better choice for offense, but having defense is always good." + WWYD;
    hasShieldEquipped = true;
    if (hasSwordEquipped == false) {
        document.getElementById("option1").innerHTML = setPickUpSword;
    } else {
        document.getElementById("option1").innerHTML = ""; 
    }
    document.getElementById("option2").innerHTML = "";
    if (pickedUpRoomPotion == false) {
        document.getElementById("option3").innerHTML = setPickUpPotion;
    } else {
        document.getElementById("option3").innerHTML = ""; 
    }
    document.getElementById("option4").innerHTML = setEnterHallway1;
}

function pickUpPotion() {
    document.getElementById("textArea").innerHTML = "You found a potion! You put the potion in your bag!" + WWYD;
    potionStock = potionStock + 1;
    pickedUpRoomPotion = true;
    if (hasSwordEquipped == false) {
        document.getElementById("option1").innerHTML = setPickUpSword;
    } else {
        document.getElementById("option1").innerHTML = ""; 
    }
    if (hasShieldEquipped == false) {
        document.getElementById("option2").innerHTML = setPickUpShield;
    } else {
        document.getElementById("option2").innerHTML = "";
    }
    document.getElementById("option3").innerHTML = ""; 
    document.getElementById("option4").innerHTML = setEnterHallway1;
}

function enterHallway1() {
    if (hasShieldEquipped == true && hasSwordEquipped == true) {
        document.getElementById("textArea").innerHTML = "You open the door and a " + slime + " stands before you, surprised by the door suddenly opening. It prepares to strike!";
        currentEnemy = slime;
        document.getElementById("option1").innerHTML = "";
        document.getElementById("option2").innerHTML = setBeginBattle;
        document.getElementById("option3").innerHTML = "";
        document.getElementById("option4").innerHTML = "";
    } else {
        document.getElementById("textArea").innerHTML = "You hear sounds coming from the hallway. You think it would be wise to prepare before leaving the room.";
    }
}

function beginBattle() {
    document.getElementById("textArea").innerHTML = "<h1>Battle!</h1>"
    document.getElementById("option1").innerHTML = "";
    document.getElementById("option2").innerHTML = "";
    document.getElementById("option3").innerHTML = "";
    document.getElementById("option4").innerHTML = "";
    document.getElementById("battleOption1").innerHTML = "";
    document.getElementById("battleOption2").innerHTML = setAttackSlime;
    document.getElementById("battleOption3").innerHTML = setUsePotion;
    document.getElementById("battleOption4").innerHTML = setFlee;
}

function attackSlime() {
    document.getElementById("battleTextArea").innerHTML = "<div>You attack the slime!<br>You deal 1 damage to the slime!</div>"
    currentSlimeHealth = currentSlimeHealth - 1;
    if (currentSlimeHealth == 0) {
        document.getElementById("battleTextArea").innerHTML = document.getElementById("battleTextArea").innerHTML + "<br><div>You defeated the slime!</div>"
    } else {
        document.getElementById("battleTextArea").innerHTML = document.getElementById("battleTextArea").innerHTML + "<br><div>The slime attacks!<br>You take 1 damage!</div>"
        currentCharHealth = currentCharHealth - 1;

    }
}

function usePotion() {
       if (potionStock > 0) {
        if (currentCharHealth <= maxCharHealth - 5) {
            currentCharHealth = currentCharHealth + 5;
            document.getElementById("battleTextArea").innerHTML = "<div>You used a potion!<br>You healed 5 health points!</div>";
            potionStock = potionStock - 1;
        } else if (currentCharHealth = maxCharHealth - 4) {
            currentCharHealth = currentCharHealth + 4;
            potionStock = potionStock - 1;
        } else if (currentCharHealth = maxCharHealth - 3) {
            currentCharHealth = currentCharHealth + 3;
            potionStock = potionStock - 1;
        } else if (currentCharHealth = maxCharHealth - 2) {
            currentCharHealth = currentCharHealth + 2;
            potionStock = potionStock - 1;
        } else if (currentCharHealth = maxCharHealth - 1) {
            currentCharHealth = currentCharHealth + 1;
            potionStock = potionStock - 1;
        } else {
            document.getElementById("battleTextArea").innerHTML = "<div>Your hp is full.<br>Could not use a potion!"
        }
    }
}

function flee() {
    if (currentEnemy == slime) {
        document.getElementById("battleTextArea").innerHTML = "You're pretty sure you can take a slime. There's no reason to flee!";
    }
}

function basicAttack() {
    var enemy = document.getElementById("targetedEnemy").innerHTML;
    switch (enemy) {
        case slime: currentSlimeHealth; return;
        case bird: currentBirdHealth = birdHealth; return;
        case skeleton: currentSkeletonHealth = skeletonHealth; return;
    }
}

function updateStats() {
    achievement2();
    achievement3();
    achievement4();
    achievement5();
    achievement1();
}


/* 
function goToHut() {
    document.getElementById("textArea").innerHTML = "You approach the hut and a witch walks out the front door. She stares at you." + WWYD
    document.getElementById("option1").innerHTML = setTalkToWitch;
    document.getElementById("option2").innerHTML = setAttackWitch;
    document.getElementById("option3").innerHTML = setStareAtWitch;
    document.getElementById("option4").innerHTML = setReturnToMeadow;
}

function talkToWitch() {
    if (staredAtWitch == false ) {
        document.getElementById("textArea").innerHTML = "The witch interrupts your attempt to talk to her by turning you into a frog. Good luck finding some flies to eat!";
        document.getElementById("options").innerHTML = setGameOver;
    } else if (hasAmulet == true) {
        document.getElementById("textArea").innerHTML = "The witch tells you her name is Makayla and she's fond of turning people into frogs. You proved yourself worthy by staring at her for an inordinate amount of time, so she has given you the magical amulet." + WWYD;
        score = score + 5;
        updateScore();
    } else {
        document.getElementById("textArea").innerHTML = "The witch is happy to talk after you've proven your worth by staring at her. She chatters the day away and gives you a magical amulet!" + WWYD;
        hasAmulet = true;
        score = score + 1;
        updateScore();
        document.getElementById("option1").innerHTML = setTalkToWitch;
        document.getElementById("option2").innerHTML = setAttackWitch;
        document.getElementById("option3").innerHTML = setStareAtWitch;
        document.getElementById("option4").innerHTML = setReturnToMeadow;
    };
}

function attackWitch() {
   if (hasAmulet == false ) {
    document.getElementById("textArea").innerHTML = "Attacking a witch you just met?  Seems like a really bad idea. Before you are able to do much of anything the witch turns you into a frog. Good luck finding some flies to eat!";
    document.getElementById("options").innerHTML = setGameOver;
   } else {
    document.getElementById("textArea").innerHTML = "What? You think just because you know her now you can attack her? Seems like a really bad idea. Before you are able to do much of anything the witch turns you into a frog. Good luck finding some flies to eat!";
    document.getElementById("options").innerHTML = setGameOver;
   }
}

function stareAtWitch() {
    if (staredAtWitch == false) {
        document.getElementById("textArea").innerHTML = "You stare at the witch. The witch stares back." + WWYD;
        staredAtWitch = true;
        score = score + 1;
        updateScore();
    } else {
        document.getElementById("textArea").innerHTML = "You stare at the witch. The witch stares back." + WWYD;
    }
}

function returnToMeadow() {
    if (hasYeFlask == true && hasAmulet == true) {
        document.getElementById("textArea").innerHTML = beginAdventure + " " + amuletMeadow + " " + riverFrozenMeadow + WWYD;
        document.getElementById("option1").innerHTML = "";
        document.getElementById("option2").innerHTML = "";
        document.getElementById("option3").innerHTML = setGoToCave;
        document.getElementById("option4").innerHTML = setGoToTree;
    } else if (hasAmulet == true ) {
        document.getElementById("textArea").innerHTML = beginAdventure + " " + amuletMeadow + WWYD;
        document.getElementById("option1").innerHTML = "";
        document.getElementById("option2").innerHTML = setGoToRiver;
        document.getElementById("option3").innerHTML = setGoToCave;
        document.getElementById("option4").innerHTML = setGoToTree;
    } else {
        document.getElementById("textArea").innerHTML = beginAdventure + WWYD;
        document.getElementById("option1").innerHTML = setGoToHut;
        document.getElementById("option2").innerHTML = setGoToRiver;
        document.getElementById("option3").innerHTML = setGoToCave;
        document.getElementById("option4").innerHTML = setGoToTree;
    }
}

function goToRiver() {
    if (hasAmulet == true) {
        document.getElementById("textArea").innerHTML = "The mighty river flows unceasingly before you. It is too wide to swim across. You can see ye flask on the other side." + amuletRiver + WWYD;
        document.getElementById("option1").innerHTML = setUseAmuletAtRiver;
        document.getElementById("option2").innerHTML = setTryToSwim;
        document.getElementById("option3").innerHTML = setThrowStone;
        document.getElementById("option4").innerHTML = setReturnToMeadow;
    } else {
        document.getElementById("textArea").innerHTML = "The mighty river flows unceasingly before you. It is too wide to swim across. You can see ye flask on the other side." + WWYD;
        document.getElementById("option1").innerHTML = "";
        document.getElementById("option2").innerHTML = setTryToSwim;
        document.getElementById("option3").innerHTML = setThrowStone;
        document.getElementById("option4").innerHTML = setReturnToMeadow;
    }
}

function tryToSwim() {
    if (riverFrozen == false) {
        document.getElementById("textArea").innerHTML = "You try to swim but the current is too strong and you end up getting carried over a waterfall, probably meeting your demise at the bottom. I tried to warn you.";
        document.getElementById("options").innerHTML = setGameOver;
        swimAttempts = swimAttempts + 1;
        if (swimAttempts >= 3) {
            persistentSwimmer = true;
            achievementUpdate();
        }
    } else {
        document.getElementById("textArea").innerHTML = "The river is magically frozen. You can try to swim all you want, but you surely won't succeed." + WWYD;
        swimAttempts = swimAttempts + 1;
        if (swimAttempts >= 3) {
            persistentSwimmer = true;
            achievementUpdate();
        }
        if (lostPointForFrozenSwim == false) {
            score = score - 1;
            updateScore();
            lostPointForFrozenSwim = true;
        }
    }
}

function throwStone() {
    if (riverFrozen == true ) { 
        if (stonesThrown < 3) {
            document.getElementById("textArea").innerHTML = "You pick up the nearest stone and throw it, but the river is frozen solid so the rock just lands on the ice. What were you expecting to happen, exactly?" + WWYD;
            stonesThrown = stonesThrown + 1;
            score = score + 1;
            updateScore();
        } else {
            document.getElementById("textArea").innerHTML = "You go to pick up your fourth rock, but what you thought was a rock was actually a tiny rock monster. This tiny rock monster does not like being thrown, so before you have the chance to pick it up it attacks you. Surprised, you fall backwards onto the frozen river. Good thing it was frozen or else you likely would've ended up getting carried over a waterfall, probably meeting your demise at the bottom. You probably shouldn't throw anymore stones." + WWYD;
            score = score + 10;
            updateScore();
            document.getElementById("option1").innerHTML = setUseAmuletAtRiver;
            document.getElementById("option2").innerHTML = setTryToSwim;
            document.getElementById("option3").innerHTML = "";
            document.getElementById("option4").innerHTML = setReturnToMeadow;
        }
    }
    else {
        if (stonesThrown < 3) {
            document.getElementById("textArea").innerHTML = "You pick up the nearest stone and throw it, but it falls into the river. I'm telling you, this river is pretty wide." + WWYD
            stonesThrown = stonesThrown + 1;
            score = score + 1;
            updateScore();
        } else {
            document.getElementById("textArea").innerHTML = "You go to pick up your fourth rock, but what you thought was a rock was actually a tiny rock monster. This tiny rock monster does not like being thrown, so before you have the chance to pick it up it attacks you. Surprised, you fall into the river and are swept away by the strong current. You end up getting carried over a waterfall, probably meeting your demise at the bottom. Didn't your mother ever teach you it's not nice to throw stones?";
            document.getElementById("options").innerHTML = setGameOver;
        }
    }
}

function useAmuletAtRiver() {
    if (riverFrozen == false) {
        document.getElementById("textArea").innerHTML = "You hold the amulet up and the river freezes solid. Seizing your opportunity, you cross the frozen river and retrieve ye flask. Having gotten what you came for, you return to where you were on the original side of the river." + WWYD;
        hasYeFlask = true;
        riverFrozen = true;
        amuletUsedAtRiver = amuletUsedAtRiver + 1;
        score = score + 5;
        updateScore();
        document.getElementById("option1").innerHTML = setUseAmuletAtRiver;
        document.getElementById("option2").innerHTML = setTryToSwim;
        document.getElementById("option3").innerHTML = setThrowStone;
        document.getElementById("option4").innerHTML = setReturnToMeadow;
    } else if (riverFrozen == true) {
            if (amuletUsedAtRiver == 1) {
            document.getElementById("textArea").innerHTML = "You already used the amulet. It's only good for freezing the river, not unfreezing it. I hope you can deal with whatever ecological havoc you've caused by freezing an entire river in this part of the country."  + WWYD;
            score = score - 1;
            updateScore();
            amuletUsedAtRiver = amuletUsedAtRiver + 1;
        } else {
            document.getElementById("textArea").innerHTML = "You already used the amulet. It's only good for freezing the river, not unfreezing it. I hope you can deal with whatever ecological havoc you've caused by freezing an entire river in this part of the country."  + WWYD;
        }
    }
}

function goToCave() {
    if (hasAmulet == true) {
        document.getElementById("textArea").innerHTML = "You approach the cave and hear nothing coming from it." + WWYD;
        document.getElementById("option1").innerHTML = "";
        document.getElementById("option2").innerHTML = "";
        document.getElementById("option3").innerHTML = setExploreCave;
        document.getElementById("option4").innerHTML = setReturnToMeadow;
    } else {
        document.getElementById("textArea").innerHTML = "You approach the cave and hear something that sounds like heavy breathing." + WWYD;
        document.getElementById("option1").innerHTML = "";
        document.getElementById("option2").innerHTML = "";
        document.getElementById("option3").innerHTML = setExploreCave;
        document.getElementById("option4").innerHTML = setReturnToMeadow;
    }
}

function exploreCave() {
    if (hasAmulet == true) {
        document.getElementById("textArea").innerHTML = "The cave appears to be empty except for a pile of bones near the back wall." + WWYD;
        document.getElementById("option1").innerHTML = setExamineBones;
        document.getElementById("option2").innerHTML = setTakeBones;
        document.getElementById("option3").innerHTML = setTakeANap;
        document.getElementById("option4").innerHTML = setReturnToMeadow;
    } else {
        document.getElementById("textArea").innerHTML = "You start exploring the cave but make so much noise you quickly discover the source of the heavy breathing. Turns out a bear was sleeping but you woke up it and now get to experience its wrath. Maybe next time you'll try exploring when you don't hear anything, hm?";
        document.getElementById("options").innerHTML = setGameOver;
    }
}

function examineBones() {
    if (bonesExamined < 3) {
        document.getElementById("textArea").innerHTML = "The bones look really gross." + WWYD;
    bonesExamined = bonesExamined + 1;
    score = score + 1;
    updateScore();
    } else if (bonesExamined == 3) {
        document.getElementById("textArea").innerHTML = "After some serious examination you decide the bones appear to be human, so it would probably be a good idea to leave the cave soon." + WWYD;
        bonesExamined = bonesExamined + 1;
        score = score + 5;
        updateScore();
    } else if (bonesExamined > 3) {
        document.getElementById("textArea").innerHTML = "You spend so much time examining the bones that the bear that lives in this cave returns from its wandering. Now you get to experience its wrath. Have you ever heard that curiousity killed the cat?"
        document.getElementById("options").innerHTML = setGameOver;
        isCurious = true;
        achievementUpdate();
    }
}

function takeBones() {
    document.getElementById("textArea").innerHTML = "You gather up some bones in your arms. I'm not sure why you think this is a good idea, but we'll see if it pans out." + WWYD;
    hasBones = true;
    score = score + 1;
    updateScore();
    document.getElementById("option1").innerHTML = "";
    document.getElementById("option2").innerHTML = setExamineBones;
}

function takeANap() {
    document.getElementById("textArea").innerHTML = "You realize how tired you feel and decide to curl up next to the bones in the cave to take a nap. Unfortunately for you, the bear that lives in this cave returns from its wandering. Now you get to experience its wrath. The bones probably should've been a clue that sticking around the cave wouldn't end well.";
    document.getElementById("options").innerHTML = setGameOver;
    napTaken = true;
    achievementUpdate();
}

function goToTree() {
    if (hasBones == false || hasYeFlask == false || hasAmulet == false) {
        document.getElementById("textArea").innerHTML = 'There is a giant tree in front of you. As you walk up, you hear a voice say, "Who dares approach Tree empty handed?"' + WWYD;
        document.getElementById("option1").innerHTML = "";
        document.getElementById("option2").innerHTML = "";
        document.getElementById("option3").innerHTML = setAskWhoSpeaks;
        document.getElementById("option4").innerHTML = setReturnToMeadow;
    } else if (hasBones == true && hasYeFlask == true && hasAmulet == true) {
        document.getElementById("textArea").innerHTML = 'There is a giant tree in front of you. As you walk up, you hear a voice say, "Who dares approach Tree empty handed?"' + WWYD;
        document.getElementById("option1").innerHTML = "";
        document.getElementById("option2").innerHTML = setShowTreeItems;
        document.getElementById("option3").innerHTML = setAskWhoSpeaks;
        document.getElementById("option4").innerHTML = setReturnToMeadow;
    }
}

function askWhoSpeaks() {
    if (askedWhoSpoke == false) {
        document.getElementById("textArea").innerHTML = 'The giant tree shakes and you realize the voice is coming from the tree. "My name is Tree, and I do not appreciate people who come to me empty handed."' + WWYD;
        askedWhoSpoke = true;
        score = score + 2;
        updateScore();
    } else {
        document.getElementById("textArea").innerHTML = 'The giant tree shakes again and says, "My name is Tree, and I also do not appreciate repeating myself."' + WWYD;
        document.getElementById("option3").innerHTML = "";
        if (lostPointForAsking == false) {
            score = score - 1;
            updateScore();
            lostPointForAsking = true;
        }
    }
}

function showTreeItems() {
    document.getElementById("textArea").innerHTML = "The tree admires all the items you've accumulated over your journey. 'So, your hands were not empty after all. You are carrying a magical amulet, ye flask, and some bones. I am impressed!'";
    score = score + 10;
    updateScore();
    document.getElementById("options").innerHTML = gameWon;
    achievement6();
    achievementUpdate();
    if (achievementCollector == false) {
        document.getElementById("gameWon").innerHTML = "<div>You win! Your score this time is " + score + ". Your high score so far is " + highScore + ". Click the button to play again to try for the maximum score and all the achievements!</div>";
    } else {
        document.getElementById("options").innerHTML = gameWonCompletely;
        document.getElementById("gameWon").innerHTML = "<div>You win! Your score this time is " + score + ". Your high score so far is " + highScore + ". Congratulations for obtaining all the achievements! Thanks for playing! Press the button to start a new and different adventure!</div>";
    }
}

function gameOver() {
    document.getElementById("textArea").innerHTML = '<button id="startButton" onclick="returnToMeadow()">Start Adventure!</button>';
    document.getElementById("options").innerHTML = '<table><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td><td id="option4"></td></tr></table>';
    document.getElementById("gameWon").innerHTML = '';
    document.getElementById("score").innerHTML = 'Score: 0';
    staredAtWitch = false;
    hasAmulet = false;
    stonesThrown = 0;
    hasYeFlask = false;
    hasBones = false;
    riverFrozen = false;
    bonesExamined = 0;
    askedWhoSpoke = false;
    score = 0;
    amuletUsedAtRiver = 0;
    lostPointForFrozenSwim = false;
}

function achievementUpdate() {
    achievement2();
    achievement3();
    achievement4();
    achievement5();
    achievement1();
}

function achievement1() { 
    if (isCurious == true && napTaken == true && persistentSwimmer == true && maxScoreObtained == true && minimumScoreObtained == true ) {
        document.getElementById("allAchievements").innerHTML =  "<div title='Obtained by collecting all other achievements'>6. Achievement collector!</div>"
        achievementCollector = true;
        return;
    }
}

function achievement2() {
    if (isCurious == true) {
        document.getElementById("isCurious").innerHTML = "<div title='Obtained by examining stuff too long.'>1. Curiousity killed the cat!</div>";
        return;
    }
}

function achievement3() {
    if (persistentSwimmer == true) {
        document.getElementById("persistentSwimmer").innerHTML = "<div title='Obtained by trying to swim in a frozen river an inordinate number of times.'>3. Persistent swimmer!</div>";
        return;
    }
}

function achievement4() {
    if (highScore == maxScore) {
        document.getElementById("maxScore").innerHTML = "<div title='Obtained by winning the game with the maximum score possible.'>4. Too much time on your hands!</div>";
        maxScoreObtained = true;
        return;
    }
}

function achievement5() {
    if (napTaken == true) {
        document.getElementById("napTaken").innerHTML = "<div title='Obtained by taking a nap at an inopportune time.'>2. Lying down on the job!</div>";
        return;
    }
}

function achievement6() {
    if (score == minimumScore) {
        document.getElementById("minimumScore").innerHTML = "<div title='Obtained by winning the game with the lowest score possible.'>5. If only we were playing golf!</div>";
        minimumScoreObtained = true;
        return;
    }
}

function gameWonComplete() {
    document.getElementById("textArea").innerHTML = '<button id="startAdventure2" onclick="startAdventure2()">Start Adventure!</button>';
    document.getElementById("options").innerHTML = '<table><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td><td id="option4"></td></tr></table>';
    document.getElementById("scriptTest").setAttribute("src", "textAdventure2.js")
} */