# Instructions: Pagination System

import math


class Pagination :
    def __init__(self, size=10, items_list=None):
        self.items_list = items_list if items_list is not None else []
        self.size = size
        self.current_page = 0
        self.total_pages = math.ceil(len(self.items_list)  / self.size)
    def get_visible_items(self):
        items=self.items_list[self.current_page * self.size : (self.current_page + 1) * self.size]  
        return items
    def go_to_page(self, page_num=0):
        if 0 < page_num < self.total_pages:
            self.current_page = page_num
        else:
            raise ValueError("Invalid page number")
    def first_page(self):
        return self.go_to_page(0)
    def last_page(self):
        return self.go_to_page(self.total_pages - 1)
    def next_page(self):
        return self.go_to_page(self.current_page + 1) if self.current_page < self.total_pages - 1 else None

    def previous_page(self):
        return self.go_to_page(self.current_page - 1) if self.current_page > 0 else None
    # Step 5: Add a Custom __str__() Method
    def __str__(self):
        return "\n".join(str(item) for item in self.get_visible_items())
    
    # test 
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(4, alphabetList)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(5)
print(p.current_page + 1)
# Output: 7

p.go_to_page(1)
# Raises ValueError
