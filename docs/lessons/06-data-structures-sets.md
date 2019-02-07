# 06 - Data Structures: Sets

<Teacher name="Anca"></Teacher>

## Goals

- learn what are sets and math theory behind it
- learn when sets can be used
- how sets are different from the lists
- get familiar with two implementations coming in JDK: `HashSet`, `TreeSet`
- get familiar with the most commonly used methods on sets

## Tips

### How to generate a random number?

To return a random number from range between `0` and `50` (exclusive):

```java

Random r = new Random();
int randomNumber = r.nextInt(50);
```


## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vQ6Ln4aVAC3SEQDE6ZzwnCqSI7pRsVoXKzFsFg8Z920jCjHvSRxxYfWcyzEvjwAaERJ6yhF0HbArHdX/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Exercises

### Exercise 1

In `main` method
1. Create a new HashSet of strings, add `banana`, `apple`, `orange`. 
2. Print content of sets using for loop
3. Clear the set.
4. Add one more element `grapes`.
5. Check if set is empty, and if it’s not empty print “I am not empty!”.
What is the order of elements after adding them to HashSet?


### Exercise 2
Write a static method `randomSet` that will return an `HashSet` containing collection of `n` unique random numbers in range 0-100.
In the main method iterate over the returned Set and print each number multiplied by 2.


```java

HashSet<String> randomSet(int n) {
    ...
}
```

Where `n` is a number of random elements in set.

### Exercise 3

Change data type in previous exercise from HashSet to TreeSet. 
What is the difference?

### Exercise 4

Write a static method `intersection` that will return an intersection of two sets given by parameters. **Note** - sets given by parameters may not be modified.

```java

Set<String> intersection(Set<String> x, Set<String> y) {
    ...
}
```
### Exercise 5

Write a static method `union` that will return an union of two sets given by parameters. **Note** - sets given by parameters may not be modified.

```java

Set<String> union(Set<String> x, Set<String> y) {
    ...
}
```

### Exercise 6

Write a static method `difference` that will return a difference between two sets given by parameters. 
**Note** - sets given by parameters may not be modified.

```java

Set<String> difference(Set<String> x, Set<String> y) {
    ...
}
```

### Exercise 7

Write a static method `symetricDifference` that will return the symetric difference between two sets given by parameters. 
**Note** - sets given by parameters may not be modified.

```java

Set<String> symetricDifference(Set<String> x, Set<String> y) {
    ...
}
```

### Exercise 8

Create a TreeSet containing integers that will maintain descending order of numbers.
Hint: Look at alternative TreeSet constructors.


## Additional Resources

 - [BaseCS: Set Theory: the Method To Database Madness](https://medium.com/basecs/set-theory-the-method-to-database-madness-5ec4b4f05d79)
 - [BaseCS Podcast: S4:E5 - "Sets, sets, everywhere"](https://dev.to/basecspodcast/s4e5--sets-sets-everywhere)
 - [W3 Schools Exercises Set Exercises](https://www.w3resource.com/java-exercises/collection/index.php#hashset)