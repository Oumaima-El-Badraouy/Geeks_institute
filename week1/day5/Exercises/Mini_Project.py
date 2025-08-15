import random 

class Game:
    def __init__(self, player1, player2):
        self.player1 = player1
        self.player2 = player2
        self.winner = None

    def play(self):
        choice1 = input(f"{self.player1}, choose your move (ROCK, PAPER, SCISSORS): ").lower()
        choice2 = random.choice(['rock', 'paper', 'scissors'])
        
        print(f"{self.player2} chose: {choice2}")
        
        if choice1 == choice2:
            return "ta wahd marb7"
        elif (choice1 == 'rock' and choice2 == 'scissors') or \
             (choice1 == 'scissors' and choice2 == 'paper') or \
             (choice1 == 'paper' and choice2 == 'rock'):
            self.winner = self.player1
            return f"{self.player1} wins!"
        else:
            self.winner = self.player2
            return f"{self.player2} wins!"

object1 = Game("Player 1", "Computer")
print(object1.play())
