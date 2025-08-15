import time
from copy import deepcopy

class GameOfLife:
    def __init__(self, rows, cols, initial_live_cells=None):
       
        self.rows = rows
        self.cols = cols
        self.grid = [[0]*cols for _ in range(rows)]
        if initial_live_cells:
            for r, c in initial_live_cells:
                if 0 <= r < rows and 0 <= c < cols:
                    self.grid[r][c] = 1

    def count_neighbors(self, r, c):
        cnt = 0
        for dr in (-1, 0, 1):
            for dc in (-1, 0, 1):
                if dr == 0 and dc == 0:
                    continue
                nr, nc = r + dr, c + dc
                if 0 <= nr < self.rows and 0 <= nc < self.cols:
                    cnt += self.grid[nr][nc]
        return cnt

    def step(self):
        new_grid = deepcopy(self.grid)
        for r in range(self.rows):
            for c in range(self.cols):
                alive = self.grid[r][c] == 1
                neighbors = self.count_neighbors(r, c)
                if alive and neighbors < 2:            # underpopulation
                    new_grid[r][c] = 0
                elif alive and neighbors in (2, 3):    # lives on
                    new_grid[r][c] = 1
                elif alive and neighbors > 3:          # overpopulation
                    new_grid[r][c] = 0
                elif not alive and neighbors == 3:     # reproduction
                    new_grid[r][c] = 1
        self.grid = new_grid

    def display(self):
        for r in range(self.rows):
            line = "".join("█" if self.grid[r][c] else "." for c in range(self.cols))
            print(line)
        print()  
    def is_stable_or_empty(self, prev_grid):
        return self.grid == prev_grid or all(all(x == 0 for x in row) for row in self.grid)

    def run(self, generations=50, delay=0.1, stop_when_stable=True):
        """
        generations: عدد الأجيال القصوى
        delay: مهلة صغيرة لعرض الرسوم
        stop_when_stable: يوقف ملي يوصل لحالة ثابتة أو فراغ
        """
        last = None
        for gen in range(1, generations+1):
            print(f"Generation {gen}")
            self.display()
            prev = deepcopy(self.grid)
            self.step()
            if stop_when_stable and (self.is_stable_or_empty(prev) or self.grid == prev == last):
                # توازن، انقراض، أو تذبذب قصير (محاولة بسيطة لاكتشاف loop of period 2)
                print("Game ended (stable/empty or short cycle).")
                self.display()
                break
            last = prev


def glider(top=1, left=1):
    return [(top, left+1),
            (top+1, left+2),
            (top+2, left), (top+2, left+1), (top+2, left+2)]

def blinker(top=2, left=2):
    # مُذبذب Period-2
    return [(top, left), (top, left+1), (top, left+2)]

def block(top=2, left=2):
    # ثابت Still life
    return [(top, left), (top, left+1), (top+1, left), (top+1, left+1)]


if __name__ == "__main__":
    init = glider(1, 1)
    init = blinker(3, 3)
    # init = block(5, 5)

    game = GameOfLife(rows=20, cols=40, initial_live_cells=init)
    game.run(generations=200, delay=0.03, stop_when_stable=True)
