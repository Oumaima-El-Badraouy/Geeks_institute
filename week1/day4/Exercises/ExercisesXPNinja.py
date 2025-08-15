# Exercise 1 : Conway’s Game of Life
class Cell:
    def __init__(self, is_alive=False):
        self.is_alive = is_alive

    def __str__(self):
        return 'O' if self.is_alive else '.'
class GameOfLife:
    def __init__(self, grid):
        self.grid = grid
        self.columns = len(grid[0]) if grid else 0
        self.rows = len(grid) if grid else 0
    def display(self):
        pass
    def next_generation(self):
        pass
    def count_live_neighbors(self):
        pass
    def run(self):
        pass