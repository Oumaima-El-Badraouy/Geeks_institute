# Exercise 1 : Outputs
# 1/true 2/true 3/False 4/False 5/true 6/False 7/x is True
# y is False a: 5 b: 10
# Exercise 2 : Longest word without a specific character
input_string = input("Enter Longest word without A: ")
longest_word = ""
for word in input_string.split():
    if "A" not in word.upper() and len(word) > len(longest_word):
        longest_word = word
        print(" Congratulation Longest word without A:", longest_word)
        break
# Exercise 3: Working on a paragraph
my_paragraph = "Un paragraphe est une section de texte en prose vouée au développement d'un point particulier souvent au moyen de plusieurs phrases, dans la continuité du précédent et du suivant."
print("Number of letters:", sum(1 for char in my_paragraph if char.isalpha()))

sentences = re.split(r'[.!?]+', paragraph.strip())
sentences = [s for s in sentences if s]  # enlever les vides
sentence_count = len(sentences)

words = re.findall(r'\b\w+\b', paragraph.lower())
word_count = len(words)

unique_words = set(words)
unique_word_count = len(unique_words)

non_whitespace_count = len(re.sub(r'\s+', '', paragraph))
avg_words_per_sentence = word_count / sentence_count if sentence_count > 0 else 0
non_unique_word_count = word_count - unique_word_count
print(f"Nombre de caractères : {char_count}")
print(f"Nombre de phrases : {sentence_count}")
print(f"Nombre de mots : {word_count}")
print(f"Nombre de mots uniques : {unique_word_count}")
print(f"Nombre de caractères non-blancs : {non_whitespace_count}")
print(f"Moyenne de mots par phrase : {avg_words_per_sentence:.2f}")
print(f"Nombre de mots non-uniques : {non_unique_word_count}")
