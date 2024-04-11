import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("wall-Games", "Interactive Electronic Games", "img/projects/wallgames/wallgamesgif.gif", `
    <div class="paragraph">
        <strong>Interactive Electronic Games</strong> are fascinating to entertainment for peoples indoor playground. 
        Electronic games are fantastic for both children and adults. 
        Electronic Games help children socialize and encourage exercise thereby promoting mental and physical health.
        I developed this project with my friend. I took an active part in the development process of the games.
    </div>

    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Body tracking was done with Python.</li>
        <li>Players only need a camera to play the games.</li>
        <li>Subscription provided through Playfab.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/QfdR_VdQmso?si=3rORusC2c2WeOrW5" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/pAlZ3DLuBm8?si=Sv82gGUVpv5lY9vF" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/sWLJuVNcb6U?si=4eUPPYs_jjzabUp3" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/wallgames/all.png" />
        <img class="pc-screenshot" src="img/projects/wallgames/fruit.png"/>
        <img class="pc-screenshot" src="img/projects/wallgames/runner.png" />
        <img class="pc-screenshot" src="img/projects/wallgames/football.png" />
    </div>
    `, "#BF0000", false, true),

    new ProjectData("slot-game", "Slot Game", "img/projects/slotgame/slotgamegif.gif", `
    <div class="paragraph">
        <strong>Slot game</strong> is a prototype of the casino slot games popular today.
        The project is designer friendly. New paylines and different symbols can be easily added. 
        Symbols and paylines are designed to be easily edited via scriptableobject.
        If desired, all possible paylines on the board can be calculated with the DFS algorithm. 
        In this way, the number of rows and columns of the slot board can be changed as desired.
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>3x5 slot board</li>
        <li>40 different pay lines</li>
        <li>Adjustable payline in the editor</li>
        <li>10 types of standard symbols and 2 types of special symbols</li>
        <li>Different payout amounts for each symbol depending on combinations of 3, 4 and 5 symbols</li>
        <li>The amount of money the player can bet and earn</li>
        <li>Bet increase and decrease</li>
        <li>Free spins</li>
        </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/PiWp6BO38_g?si=mqF1nBniC2NtgcNU" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="notice">
    Source code is available on <a href="https://github.com/mberkayersoy/Slot-Game" target="_blank">GitHub</a>.
    </div>


    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/slotgame/slotgame1.jpg" />
        <img class="pc-screenshot" src="img/projects/slotgame/slotgame2.jpg"/>
        <img class="pc-screenshot" src="img/projects/slotgame/slotgame3.jpg" />
        <img class="pc-screenshot" src="img/projects/slotgame/slotgame4.jpg" />
        <img class="pc-screenshot" src="img/projects/slotgame/slotgame5.jpg" />
        <img class="pc-screenshot" src="img/projects/slotgame/slotgame6.jpg" />
    </div>
    `, "#A020F0", false, true),
    new ProjectData("project-3", "Battle City Remake", "img/projects/battlecity/battlecitygiff.gif", `
    <div class="paragraph">
        <strong>Battle City Remake</strong> is a 3D mobile version of the old arcade game 'Battle City 1990'. 
        You can either play the levels available in the game or create and play your own level as you wish.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/wQF0W298828?si=auUiKuBqigh4ObMK" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>As the AI progresses towards its goal, it also decides whether the best way is to break the wall or not./li>
        <li>A special class was written to create the levels and all levels were created thanks to this class. Prefab was not used for any level.</li>
        <li>The user was offered the opportunity to create, customize and play their own levels.</li>
        <li>Data storage was done with JSON.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://mberkayersoy.itch.io/battle-city-remake-3d" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/mberkayersoy/3D-Battle-City-Remake" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/battlecity/ss1.jpg" alt="ss1 />
        <img class="pc-screenshot" src="img/projects/battlecity/ss2.jpg" alt="ss2" />
        <img class="pc-screenshot" src="img/projects/battlecity/ss3.jpg" alt="ss3" />
        <img class="pc-screenshot" src="img/projects/battlecity/ss4.jpg" alt="ss4" />
        <img class="pc-screenshot" src="img/projects/battlecity/ss5.jpg" alt="ss5" />
    </div>
    `, "#383838", false, true),
    new ProjectData("project-4", "Psycho Bubbles", "img/projects/psycho-bubbles/bubblesgif.gif", `
    <div class="paragraph">
    If you played a lot of web games like me when you were little, you will remember the bubble trouble game. 
    You know, a 2D game where you manage the devil character and destroy them by hitting the balls. 
    <strong> Psycho Bubbles </strong> is exactly such a game, but with 3D and multiplayer.

    <div class="paragraph">
    Main features :
    <ul>
    <li>Developed a captivating 3D multiplayer game using Photon PUN and Firebase technologies.</li>
    <li>Designed gameplay mechanics where striking a large bubble causes it to split into smaller ones.</li>
    <li>Implemented strategically placed power-ups across the map to provide advantageous abilities.</li>
    </ul>
    </div>

    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/_p9ssupBjkk?si=p9AeTNxJJZnAQj-y" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="notice">
    Source code is available on <a href="https://github.com/mberkayersoy/Psycho_Bubbles" target="_blank">GitHub</a>.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/psycho-bubbles/ss1.png"/>
        <img class="pc-screenshot" src="img/projects/psycho-bubbles/ss2.png"/>
        <img class="pc-screenshot" src="img/projects/psycho-bubbles/ss5.png"/>
        <img class="pc-screenshot" src="img/projects/psycho-bubbles/ss6.png"/>
        <img class="pc-screenshot" src="img/projects/psycho-bubbles/ss7.png"/>
        <img class="pc-screenshot" src="img/projects/psycho-bubbles/ss3.png"/>
    </div>
    `, "#e80fb7", false, true),
    new ProjectData("project-1", "MuisQ", "img/projects/musiq/project-1-musiq.gif", 
    `
    <div class="paragraph">
     <strong>MuisQ</strong> is a knowledge game in which you can compete with your friends. MusiQ was made for the music community at my university. There are 5 types of questions in MusiQ. 
        <div class="paragraph">
        These Are:
        <ul>
        <li>Standard Questions</li>
        <li>Visual Questions</li>
        <li>Voice Questions</li>
        <li>Challenge Questions</li>
        <li>Taboo Questions</li>
        </ul>
 </div>

    <div class="paragraph">
    Main features :
    <ul>
    <li>Created an engaging knowledge, taboo, and challenge game with a diverse range of questions.</li>
    <li>Established team-based competition to achieve the predetermined winning score.</li>
    <li>Facilitated user suggestions and question submissions directly within the game.</li>
    </ul>
    </div>

     </div>
    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.SoloGameDev.MusiQ" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    </div>



    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/musiq/ss1.png" alt="ss1" />
        <img class="phone-screenshot" src="img/projects/musiq/ss2.png" alt="ss2"/>
        <img class="phone-screenshot" src="img/projects/musiq/ss3.png" alt="ss3"/>
        <img class="phone-screenshot" src="img/projects/musiq/ss4.png" alt="ss4"/>
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Push Out", "img/projects/pushout/pushoutgif.gif", `
    <div class="paragraph">
        <strong>Push Out</strong> is a game to be the last person standing on the platform by throwing the enemies push on the area.
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Artificial intelligence was developed as the enemies.</li>
        <li>Animated UI's were developed with the DoTween framework.</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Playable in the browser (WebGL) on <a href="https://mberkayersoy.itch.io/push-out" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/mberkayersoy/PushOut" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/pushout/ss1.jpg" alt="pushoutss1" />
    <img class="pc-screenshot" src="img/projects/pushout/ss2.jpg" alt="pushoutss2" />
    <img class="pc-screenshot" src="img/projects/pushout/ss3.jpg" alt="pushoutss3" />
    <img class="pc-screenshot" src="img/projects/pushout/ss4.jpg" alt="pushoutss4" />
    </div>
    `, "#5a78af", true),
    new ProjectData("project-5", "TicTacToe Remastered", "img/projects/tictactoe/tictactoegif.gif", `
    <div class="paragraph">
        <strong>TicTacToe Remastered </strong> is a small tutorial project that I did with my friend to teach him Unity.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Innovated the classic game by introducing 3 unique game modes./li>
        <li>Strategically implemented the disappearance of 3 random cells every 3 moves, adding a new level of strategy.</li>
        <li>Empowered players to selectively eliminate a column or row at predefined intervals in the second mode.</li>
        <li>Introduced a third mode that shuffles the positions of cells, creating an unpredictable game-play experience.</li>
        </ul>
    </div>

    <div class="paragraph center">
    <a href="https://play.google.com/store/apps/details?id=com.SelfMadeGame.tictactoeRemastered" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    </div>
    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://mberkayersoy.itch.io/tictactoe-remastered" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/mberkayersoy/Tic-Tac-Toe_Remastred" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/tictactoe/ss2.png"/>
        <img class="pc-screenshot" src="img/projects/tictactoe/ss5.png"/>
        <img class="pc-screenshot" src="img/projects/tictactoe/ss3.png"/>
        <img class="pc-screenshot" src="img/projects/tictactoe/ss4.png"/>
        <img class="pc-screenshot" src="img/projects/tictactoe/ss1.png"/>
    </div>`, "#e48246", true)
];