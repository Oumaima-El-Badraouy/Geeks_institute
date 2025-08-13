# Exercise 1 : Call History
class Phone():
    def __init__(self,phone_number,messages):
        self.phone_number=phone_number
        self.call_history = []
        self.messages = []

    def call(self,other_phone):
        res=print(f"Calling {other_phone} from {self.phone_number}")
        self.call_history.append(other_phone)
        return res
    def show_call_history(self):
        for phone in self.call_history:
            print(phone)
    def send_message(self,other_phone,content):
        for phone in self.call_history:
             res={"from":self.phone_number,"to":other_phone,"content":content}
        self.messages.append((other_phone, res))
        return res
    def show_outgoing_messages(self):
        for phone, message in self.messages:
            if message["from"] == self.phone_number:
                print(message)
    def show_incoming_messages(self):
        for phone, message in self.messages:
            if message["to"] == self.phone_number:
                print(message)
    def show_messages_from(self,other_phone):
        for phone, message in self.messages:
            if message["from"] == other_phone:
                print(message)
obj1=Phone("123-456-7890",[])
obj2=Phone("987-654-3210",[])
obj1.call(obj2.phone_number)
obj1.send_message(obj2.phone_number,"Hello!")
obj1.show_call_history()
obj1.show_outgoing_messages()
obj1.show_incoming_messages()
obj1.show_messages_from(obj2.phone_number)