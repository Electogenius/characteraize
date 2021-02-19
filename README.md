# Characteraizer
dummy tries to make ml  not in python

idk how it works or what is unused

Character codes:
have numbers and letters alternating like "a1b1x5z5"

every 2 letters = part of stroke

it's a "turn and move" kinda thing

letter = how much to turn

letter rotation chart idk:
```
  -45  0  45
    e  x  a
     \ | /
-90f ——o—— b 90
     / | \
    g  z  c
 -135 180 135
```
and number is how far to move

1 = 1 unit, 2 = sqrRt(2) units, 5 = 0.5 units

so basically a horizontal line is b1x1x1

change the training data by entering `data = /*whatever data you want*/` in the console

The training data is just a bunch of letters in a string seperated by two continous spaces.