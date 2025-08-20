from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n=== Restaurant Menu Manager ===")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")
        choice = input("Choose an option: ").upper()

        if choice == "V":
            view_item()
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        elif choice == "E":
            show_restaurant_menu()
            print("Exiting...")
            break
        else:
            print("Invalid option!")

def add_item_to_menu():
    name = input("Enter item name: ")
    price = int(input("Enter item price: "))
    item = MenuItem(name, price)
    item.save()
    print(f"{name} was added successfully!")

def remove_item_from_menu():
    name = input("Enter the name of the item to delete: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print(f"{name} was deleted successfully!")
    else:
        print("Item not found!")

def update_item_from_menu():
    old_name = input("Enter the name of the item to update: ")
    item = MenuManager.get_by_name(old_name)
    if item:
        new_name = input("Enter new name: ")
        new_price = int(input("Enter new price: "))
        item.update(new_name, new_price)
        print(f"{old_name} was updated successfully!")
    else:
        print("Item not found!")

def view_item():
    name = input("Enter item name to view: ")
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item: {item.name} | Price: {item.price}")
    else:
        print("Item not found!")

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\n=== Restaurant Menu ===")
    for item in items:
        print(f"{item.name} - ${item.price}")
