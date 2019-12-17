//text chunks and HTML updates
const startAdventure = "You wake up in a room with no memory of who you are or how you ended up where you are.  Laying on a table next to you is a sword and shield. You hear sounds coming from the hallway.";
const WWYD = " What will you do?"
const setPickUpSword = "<button id='pickUpSword' onclick='pickUpSword()'>Pick up sword</button>";
const setPickUpShield = "<button id='pickUpShield' onclick='pickUpShield()'>Pick up shield</button>";
const setPickUpPotion = "<button id='pickUpPotion' onclick='pickUpPotion()'>Pick up potion</button>";
const setClearBattleArea = "<button id='clearBattleArea' onclick='clearBattleArea()'>OK</button>";
const setBasicAttack = "<button id='basicAttack' onclick='basicAttack()'>Basic Attack</button>";
const setOk = "<button id='ok' onclick='ok()'>Ok</button>";

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
const slimeStr = 1;
const slimeDef = 1;
const birdHealth = 10;
const birdStr = 2;
const birdDef = 2;
const skeletonHealth = 15;
const skeletonStr = 3;
const skeletonDef = 3;
const setBeginBattle = "<button id='beginBattle' onclick='beginBattle()'>Begin battle!</button>";
const slime = "slime";
const skeleton = "skeleton";
const bird = "bird";
const setAttackSlime = "<button id='attackSlime' onclick='attackSlime()'>Attack slime!</button>";
const setUsePotion = "<button id='usePotion' onclick='usePotion()'>Use potion!</button>";
const setFlee = "<button id='flee' onclick='flee()'>Flee!</button>";
const setEnterHallway1 = "<button id='enterHallway1' onclick='enterHallway1()'>Enter hallway!</button>";
const firstVictory = "<div>You defeated a slime that stood in your path. The hallway into which you step appears to lead to two doors, one to your left and one to your right.</div>" + WWYD;

//game state variables; reset on game over
var hasSwordEquipped = false;
var hasShieldEquipped = false;
var charStr = 4;
var maxCharHealth = 10;
var currentCharHealth = 10;
var charDef = 2;
var charStrBonus = 0;
var charDefBonus = 0;
var potionStock = 0;
var pickedUpRoomPotion = false;
var currentEnemy = "";
var currentEnemyHP = "";
var currentEnemyDef = "";
var currentEnemyDefBonus = "";
var currentEnemyStr = "";
var currentEnemyStrBonus = "";
var damageDealt = "";
var damageTaken = "";
var currentStoryPoint = "";

//stat variables; do not reset on game over


function updateScore() {
    if (score > highScore) {
        highScore = score;
        $("#highScore").html("High Score: " + highScore);
        $("#score").html("Score: " + score);
    } else {
        $("#highScore").html("High Score: " + highScore);
        $("#score").html("Score: " + score);   
    }
}

function beginAdventure() {
    $("#textArea").html(startAdventure + WWYD);
    $("#option1").html(setPickUpSword);
    $("#option2").html(setPickUpShield);
    $("#option3").html(setPickUpPotion);
    $("#option4").html(setEnterHallway1);
    checkStats();
}

function pickUpSword() {
    $("#textArea").html("You pick up the sword and equip it. You know that you know how to use it, though you don't remember where you learned." + WWYD);
    hasSwordEquipped = true;
    charStrBonus = 1;
    checkStats();
    $("#option1").hide();
    if (hasShieldEquipped == false) {
        $("#option2").show();
        $("#option2").html(setPickUpShield);
    } else {
        $("#option2").hide(); 
    };
    if (pickedUpRoomPotion == false) {
        $("#option3").show();
        $("#option3").html(setPickUpPotion);
    } else {
        $("#option3").hide(); 
    };
    $("#option4").html(setEnterHallway1);
}

function pickUpShield() {
    $("#textArea").html("You pick up the shield and equip it. You've heard that the best offense is a good defense. You think the sword seems like a better choice for offense, but having defense is always good." + WWYD);
    hasShieldEquipped = true;
    charDefBonus = 1;
    checkStats();
    if (hasSwordEquipped == false) {
        $("#option1").show();
        $("#option1").html(setPickUpSword);
    } else {
        $("#option1").hide(); 
    }
    $("#option2").hide();
    if (pickedUpRoomPotion == false) {
        $("#option3").show();
        $("#option3").html(setPickUpPotion);
    } else {
        $("#option3").hide(); 
    }
    $("#option4").html(setEnterHallway1);
}

function pickUpPotion() {
    $("#textArea").html("You found a potion! You put the potion in your bag!" + WWYD);
    potionStock = potionStock + 1;
    checkStats();
    pickedUpRoomPotion = true;
    if (hasSwordEquipped == false) {
        $("#option1").show();
        $("#option1").html(setPickUpSword);
    } else {
        $("#option1").hide(); 
    }
    if (hasShieldEquipped == false) {
        $("#option2").show();
        $("#option2").html(setPickUpShield);
    } else {
        $("#option2").hide();
    }
    $("#option3").hide(); 
    $("#option4").html(setEnterHallway1);
}

function enterHallway1() {
    if (hasShieldEquipped == true && hasSwordEquipped == true) {
        $("#textArea").html("You open the door and a " + skeleton + " stands before you, surprised by the door suddenly opening. It prepares to strike!");
        currentEnemy = skeleton;
        $("#option1").hide();
        $("#option2").html(setBeginBattle).show();
        $("#option3").hide();
        $("#option4").hide();
        currentStoryPoint = firstVictory;
    } else {
        $("#textArea").html("You hear sounds coming from the hallway. You think it would be wise to prepare before leaving the room.");
    }
}

function beginBattle() {
    switch (currentEnemy) {
        case slime:
            currentEnemyHP = slimeHealth;
            currentEnemyDef = slimeDef;
            currentEnemyStr = slimeStr;
            break;
        case bird:
            currentEnemyHP = birdHealth; 
            currentEnemyDef = birdDef;
            currentEnemyStr = birdStr;            
            break;
        case skeleton: 
            currentEnemyHP = skeletonHealth; 
            currentEnemyDef = skeletonDef;
            currentEnemyStr = skeletonStr;
            break;
        default: "This shouldn't happen.";
    }
    $("#textArea").html("<h1>Battle!</h1><br><div id='currentEnemy'></div>");
    $("#currentEnemy").html(currentEnemy + "<br> HP: " + currentEnemyHP);
    $("#option1").hide();
    $("#option2").hide();
    $("#option3").hide();
    $("#option4").hide();
    $("#battleOption1").hide();
    $("#battleOption2").html(setBasicAttack).show();
    $("#battleOption3").html(setUsePotion).show();
    $("#battleOption4").html(setFlee).show();
}

function basicAttack() {
    if (currentEnemyHP > 0) {
        damageDealt = ((charStr + charStrBonus) - (currentEnemyDef + currentEnemyDefBonus));
        if (damageDealt <= 0) {
            damageDealt = 1;
        };
        $("#battleTextArea").html("<div>You attack the " + currentEnemy + "!<br>You deal " + damageDealt + " damage to the " + currentEnemy + "!</div>").show();
        currentEnemyHP = currentEnemyHP - damageDealt;
        if (currentEnemyHP < 0) {
            currentEnemyHP = 0;
        }
        $("#currentEnemy").html(currentEnemy + "<br> HP: " + currentEnemyHP);
        $("#battleOption1").hide();
        $("#battleOption2").hide();
        $("#battleOption3").html(setOk).show();
        $("#battleOption4").hide();
    }
}

function ok() {
    $("#battleOption3").hide();
    if (currentEnemyHP > 0) { 
        takeDamage();
    } else {
        $("#battleTextArea").html("You defeated the " + currentEnemy + "!").show();
        $("#battleOption3").html(setClearBattleArea).show();
    }
}

function takeDamage() {
    damageTaken = ((currentEnemyStr + currentEnemyStrBonus) - (charDef + charDefBonus));
    if (damageTaken <= 0) {
        damageTaken = 1;
    };
    $("#battleTextArea").html("<div>The " + currentEnemy + " attacks!<br>It deals " + damageTaken + " damage!").show();
    currentCharHealth = currentCharHealth - damageTaken;
    setTimeout(setColor, 10);
    setTimeout(setColor, 20);
    setTimeout(setColor, 30);
    setTimeout(stopColor, 40);
    if (currentCharHealth <= 0) {
        currentCharHealth = 0;
    }
    checkStats();
    if (currentCharHealth <= 0) {
        gameOver();
    } else {
        $("#battleOption2").html(setBasicAttack).show();
        $("#battleOption3").html(setUsePotion).show();
        $("#battleOption4").html(setFlee).show();
    }
}

function clearBattleArea() {
    $("#textArea").html(currentStoryPoint).show();
    $("#battleTextArea").html("").hide();
    $("#battleOption1").html("").hide();
    $("#battleOption2").hide();
    $("#battleOption3").hide();
    $("#battleOption4").hide();
}

function attackSlime() {
    $("#battleTextArea").html("<div>You attack the slime!<br>You deal 1 damage to the slime!</div>")
    currentSlimeHealth = currentSlimeHealth - 1;
    if (currentSlimeHealth == 0) {
        $("#battleTextArea").html($("#battleTextArea").html() + "<br><div>You defeated the slime!</div>");
        $("#battleOption1").html("OK");
        $("#battleOption2").hide();
        $("#battleOption3").hide();
        $("#battleOption4").hide();
    } else {
        $("#battleTextArea").html($("#battleTextArea").html() + "<br><div>The slime attacks!<br>You take 1 damage!</div>");
        currentCharHealth = currentCharHealth - 1;
        updateCharHP();
    }
}

function usePotion() {
    if (potionStock > 0) {
        if (currentCharHealth <= maxCharHealth - 5) {
            currentCharHealth = currentCharHealth + 5;
            $("#battleTextArea").html("<div>You used a potion!<br>You healed 5 health points!</div>");
            potionStock = potionStock - 1;
        } else if (currentCharHealth == maxCharHealth - 4) {
            currentCharHealth = currentCharHealth + 4;
            potionStock = potionStock - 1;
            $("#battleTextArea").html("<div>You used a potion!<br>You healed 4 health points!</div>");
        } else if (currentCharHealth == maxCharHealth - 3) {
            currentCharHealth = currentCharHealth + 3;
            potionStock = potionStock - 1;
            $("#battleTextArea").html("<div>You used a potion!<br>You healed 3 health points!</div>");
        } else if (currentCharHealth == maxCharHealth - 2) {
            currentCharHealth = currentCharHealth + 2;
            potionStock = potionStock - 1;
            $("#battleTextArea").html("<div>You used a potion!<br>You healed 2 health points!</div>");
        } else if (currentCharHealth == maxCharHealth - 1) {
            currentCharHealth = currentCharHealth + 1;
            potionStock = potionStock - 1;
            $("#battleTextArea").html("<div>You used a potion!<br>You healed 1 health point!</div>");
        } else {
            $("#battleTextArea").html("<div>Your hp is full.<br>Could not use a potion!")
        }
    } else {
        $("#battleTextArea").html("<div>You have no potions left to use!</div>");
    }
    updateCharHP();
    checkStats();
}

function flee() {
    if (currentEnemy == slime) {
        $("#battleTextArea").html("You're pretty sure you can take a slime. There's no reason to flee!");
    }
}

function updateCharHP() {
    $("#charHP").html('HP: ' + currentCharHealth + '/' + maxCharHealth).show();
}

function checkStats() {
   updateCharHP();
    $("#charStr").html('Str: ' + (charStr + charStrBonus)).show();
    $("#charDef").html('Def: ' + (charDef + charDefBonus)).show();
    $("#potionStock").html('Potions: ' + potionStock).show();
}

function setColor() {
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "red" ? "pink" : "red";
}
 
function stopColor() {
    var x = document.body;
    x.style.backgroundColor = "white";
}