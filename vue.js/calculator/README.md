## Steps to consider when building a Calculator

1. Define the required features.

- 1. Input numbers
- 2. Input operators
- 3. When number + operator + number are eready, calculate when = is pressed
- 4. Clear when C is pressed
- 5. Show result

2. You need to remember what user is typing.
   in data() :
   output
   prev
   curr
   operator
   operatorActions : functions for calculation

3. What user types in may be numbers or operators. Write a big function that branches this logic.

4. If user's input is the first input, store in this.cur. If not first, append it to the this.prev.
   Always store in this.output for display

5. Make a function for clearing all input.

6. Core logic of calculation

- No number but operator clicked -> block
- Operator clicked continuously -> block
- Equals clicked repeatedly -> block
- Normal case:
  -
