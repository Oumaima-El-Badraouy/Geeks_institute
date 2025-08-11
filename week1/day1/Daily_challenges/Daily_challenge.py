# challenge1
user_input=int(input("Enter a number: "))
user_length=int(input("Enter a length: "))
result=[]
for i in range(1,user_length+1):
    result.append(user_input*i)
print(result)
# challenge2
user_word=input("Enter a word: ")
rss=""
for i in user_word:
    if i not in rss :
        rss+=i
print(rss)