# Write a simple function that does the following
# Count the number of paragraphs in data.txt and console.log out the result
# The correct answer is: 5
# Bonus Points: provide a solution in as few lines of code as possible

# read file into a list
data = open('data.txt', encoding='utf8')
# remove elements that are just a line break
data = [l for l in data if l != '\n']
print(len(data))
