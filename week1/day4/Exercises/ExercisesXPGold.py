# Exercise 1: Bank Account
# part1
class BankAccount :
    
    def __init__(self, balance=0):
        
        self.balance = balance
    def deposit(self,number):
        if number > 0:
            try:
                self.balance += number
                return f"Deposit successful. New balance: {self.balance}"
            except Exception as e:
                return f"Error occurred: {e}"
        return "Invalid deposit amount number li 3titina sriir"
    def withdraw(self,number):
        if number < 0:
            try:
                self.balance -= number
                return f"Withdrawal successful. New balance: {self.balance}"
            except Exception as e:
                return f"Error occurred: {e}"
        return "Invalid withdrawal amount number li 3titina sriir"
# part2
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, minimum_balance=0):
        super().__init__(balance)
        self.minimum_balance = minimum_balance
    def withdraw(self):
        if self.balance  > self.minimum_balance :
            try:
               super().withdraw()
            except Exception as e:
                return f"Error occurred: {e}"
        return "Invalid withdrawal amount number li 3titina sriir"
# part3
class BankAccount2 :

    def __init__(self, username, password, authenticated=False,balance=0):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = authenticated
    def deposit(self,number):
        if number > 0:
            try:
                self.balance += number
                return f"Deposit successful. New balance: {self.balance}"
            except Exception as e:
                return f"Error occurred: {e}"
        return "Invalid deposit amount number li 3titina sriir"
    def withdraw(self,number):
        if number < 0:
            try:
                self.balance -= number
                return f"Withdrawal successful. New balance: {self.balance}"
            except Exception as e:
                return f"Error occurred: {e}"
        return "Invalid withdrawal amount number li 3titina sriir"
    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            return "Authentication successful."
        return "Authentication failed."
    def withdraw(self, amount):
        if not self.authenticated:
            return "Authentication required."
        return super().withdraw(amount)
    def deposit(self, amount):
        if not self.authenticated:
            return "Authentication required."
        return super().deposit(amount)
# part 4
class ATM:
    def __init__(self, account_list, try_limit, current_tries = 0):
           if not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("All accounts must be BankAccount or MinimumBalanceAccount instances")
           self.account_list = account_list
           if self.try_limit <= 0:
               raise Exception(" error limit account minimum is 2")
           self.try_limit = 2
           self.current_tries = current_tries
    def show_account_menu(self, account):
            while True:
                print("\n--- Account Menu ---")
                print("1. Deposit")
                print("2. Withdraw")
                print("3. Exit")
                choice = input("Enter choice: ")

                if choice == "1":
                    amount = float(input("Amount to deposit: "))
                    account.deposit(amount)
                elif choice == "2":
                    amount = float(input("Amount to withdraw: "))
                    account.withdraw(amount)
                elif choice == "3":
                    break
                else:
                    print("Invalid choice.")
acc1 = BankAccount("user1", "pass1", 100)
acc2 = BankAccount("user2", "pass2", 200)
atm = ATM([acc1, acc2], 3)
        