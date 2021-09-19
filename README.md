# Turing Practice Tests

### Problem 1: Baseball Game

You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
At the beginning of the game, you start with an empty record. Youy are given a list of strings `ops`, where `ops[i]` is the `ith` operation you must apply to the record and is one of the following:
* An integer `x` - Record a new score of `x`.
* "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
* "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
* "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

Return the sum of all the scores on the record.

#### Constraints
* 1 <= ops.length <= 1000.
* ops[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
* For operation "+", there will always be at least two previous scores on the record.
* For operations "C" and "D", there will always be at least one previous score on the record.
<br>
<br>
___

<br>

### Problem 2

Given an integer array `arr`, count how many elements `x` there are, such that `x + 1` is also in `arr`.
If there're duplicates in `arr`, count them separately.
 
