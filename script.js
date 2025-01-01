
        function resultDisplay(gameResultCopy){
            const resultVar=document.querySelector('.result');
            resultVar.innerHTML=gameResultCopy;
        }
       
        

        const retriveVal=JSON.parse(localStorage.getItem('setString'));
        console.log(retriveVal);
        let score;
        if(retriveVal){
            score=retriveVal;
        }
        else{
            score={
                win:0,loss:0,tie:0
            };
        }

        
        function pickComputerAction() {
            let computerAction = Math.random();
            let computerChoose = '';

            if (computerAction >= 0 && computerAction < 1/3) {
                computerChoose = 'Rock';
                console.log(`computerChoose:${computerChoose}`);
            } else if (computerAction >= 1/3 && computerAction < 2/3) {
                computerChoose = 'Paper';
                console.log(`computerChoose:${computerChoose}`);

            } else {
                computerChoose = 'Scissor';
                console.log(`computerChoose:${computerChoose}`);

            }

            return computerChoose;
        }
        let ReturnId;
        function autoPlay(){ 
            const autoBtnelem=document.querySelector('.auto');
            autoBtnelem.classList.toggle('js-auto');
            if(autoBtnelem.classList.contains('js-auto')){
                autoBtnelem.innerHTML='Stop'
                ReturnId=setInterval(function(){
                    const storeComMove=pickComputerAction();
                    gamePlay(storeComMove);
                },2000)
            }
            else{
                clearInterval(ReturnId);
                autoBtnelem.innerHTML='Auto play';
                
            }
            
            
        }
       
        function gamePlay(playerChoice) {
            const computerMove = pickComputerAction();
            let gameResult = '';

            if (playerChoice === 'Rock') {
                if (computerMove === 'Rock') {
                    gameResult = 'TIE';
                    score.tie++;
                    console.log(`gameresult:${gameResult}`);

                } else if (computerMove === 'Paper') {
                    gameResult = 'Computer Wins';
                    score.loss++;
                    console.log(`gameresult:${gameResult}`);
                } else if (computerMove === 'Scissor') {
                    gameResult = 'You Win';
                    score.win++;
                    console.log(`gameresult:${gameResult}`);
                }
            } else if (playerChoice === 'Paper') {
                if (computerMove === 'Rock') {
                    gameResult = 'You Win';
                    score.win++;
                    console.log(`gameresult:${gameResult}`);
                } else if (computerMove === 'Paper') {
                    gameResult = 'TIE';
                    score.tie++;
                    console.log(`gameresult:${gameResult}`);
                } else if (computerMove === 'Scissor') {
                    gameResult = 'Computer Wins';
                    score.loss++;
                    console.log(`gameresult:${gameResult}`);
                }
            } else if (playerChoice === 'Scissor') {
                if (computerMove === 'Rock') {
                    gameResult = 'Computer Wins';
                    score.loss++;
                    console.log(`gameresult:${gameResult}`);
                } else if (computerMove === 'Paper') {
                    gameResult = 'You Win';
                    score.win++;
                    console.log(`gameresult:${gameResult}`);
                } else if (computerMove === 'Scissor') {
                    gameResult = 'TIE';
                    score.tie++;
                    console.log(`gameresult:${gameResult}`);
                    
                }
            }

            //alert(`Computer chose: ${computerMove}, You chose: ${playerChoice}, Result: ${gameResult}
            //wins:${score.win}.tie:${score.tie}.loss:${score.loss} `);
            localStorage.setItem('setString', JSON.stringify(score));
            resultDisplay(gameResult);
            const resultVar=document.querySelector('.score-sheet');
            resultVar.innerHTML=`Computer chose: ${computerMove} || You chose: ${playerChoice}`;
            const historyVar=document.querySelector('.history');
            historyVar.innerHTML=`Win:${score.win} | Tie:${score.tie} | Loss:${score.loss} `;
            
            
           
            
            
        }
        function reset(){
            const resetVar=document.querySelector('.reset')
            if(resetVar.innerText==='Reset'){
                resetVar.innerText='Reset Sucessfully';
                        
                
            }setTimeout(() => {
                resetVar.innerText = 'Reset';
            }, 2000);
           
            localStorage.removeItem('setString');
            score={
                win:0,loss:0,tie:0

            };
            document.querySelector('.result').textContent = '';
            document.querySelector('.score-sheet').textContent = '';
            document.querySelector('.history').textContent = '';
        }
    