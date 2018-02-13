var range = 5, generated = 0, current_attempts = 0, enter = 0, max_attempts = 3,
    total_prise = 0, attempts_prize = 10, prize_sum = 10, play = false;
if (confirm('Do you want to play a game?')) {
    while (true) {
        generated = Math.floor(Math.random() * (range + 1));
        play = false;
        current_attempts = 0;
        while (current_attempts < max_attempts) {
          enter = prompt('Enter a number form 0 to' + range + '\n' + 'Attempts left:' + (current_attempts + 1) + '\n' + 'Total prize:' + total_prise + '$\n' + 'Possible prize on current attempt:' + attempts_prize + '$');
          if(typeof enter !== 'object' && enter !== '') {
            enter = Number(enter);
            if (!isNaN(enter) && (enter % 1 === 0) && (enter >= 0 && enter <= range)) {
                if (enter === generated) {
                    total_prise += attempts_prize;
                    if (confirm('Do you want to continue a game?')) {
                        range *= 2;
                        attempts_prize = (prize_sum *= 3);
                        play = true;
                    }
                    break;
                }
            } else {
              console.log('Data is incorrect!');
            }
          } else {
             console.log('You did not enter data.');
          }
          attempts_prize = Math.floor(attempts_prize/2);
          current_attempts++;
        }
        if (!play) {
            console.log('Thank you for a game. Your prize is: ' + total_prise);
            if(confirm('Do you play again?')) {
                range = 5;
                attempts_prize = 10;
                total_prise = 0;
            } else break;
        }
    }
} else {
    console.log('You did not become a millionaire');
}
