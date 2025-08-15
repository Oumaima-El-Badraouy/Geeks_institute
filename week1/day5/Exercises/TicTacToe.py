class TicTacToe:
    def __init__(self):
        self.board = [" "] * 9

    def display_board(self):
        for i in range(3):
            print("|".join(self.board[i*3:(i+1)*3]))
            if i < 2:
                print("-----")

    def player_input(self, player):
        while True:
            try:
                pos = int(input(f"{player}, choose a position (1-9): ")) - 1
                if 0 <= pos <= 8 and self.board[pos] == " ":
                    self.board[pos] = "X" if player == "Player 1" else "O"
                    break
                else:
                    print("Invalid position, try again.")
            except ValueError:
                print("Please enter a number between 1 and 9.")

    def check_win(self, symbol):
        win_combinations = [
            [0,1,2], [3,4,5], [6,7,8], 
            [0,3,6], [1,4,7], [2,5,8], 
            [0,4,8], [2,4,6]           
        ]
        for combo in win_combinations:
            if all(self.board[i] == symbol for i in combo):
                return True
        return False

    def play(self):
        current_player = "Player 1"
        for _ in range(9):
            self.display_board()
            self.player_input(current_player)
            symbol = "X" if current_player == "Player 1" else "O"
            if self.check_win(symbol):
                self.display_board()
                print(f"{current_player} wins!")
                return
            current_player = "Player 2" if current_player == "Player 1" else "Player 1"
        self.display_board()
        print("It's a tie!")


game = TicTacToe()
game.play()
