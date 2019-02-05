# 05 - Data Structures: Sets

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

**TBD**

## Exercises

### Exercise 1

Write a static method `randomSet` that will return an `HashSet` containing collection of `n` unique random numbers in range 0-100.

```java

HashSet<String> randomSet(int n) {
    ...
}
```

Where `n` is a number of random elements in set.

### Exercise 1

Write a static method `intersection` that will return an intersection of two sets given by parameters. **Note** - sets given by parameters may not be modified.

```java

Set<String> intersection(Set<String> x, Set<String> y) {
    ...
}
```
### Exercise 2

Write a static method `union` that will return an union of two sets given by parameters. **Note** - sets given by parameters may not be modified.

```java

Set<String> union(Set<String> x, Set<String> y) {
    ...
}
```

## Exercise 3

How to create a `TreeSet` that will maintain integer number from highest to lowest number.

## Additional Resources

 - [BaseCS: Set Theory: the Method To Database Madness](https://medium.com/basecs/set-theory-the-method-to-database-madness-5ec4b4f05d79)
 - [BaseCS Podcast: S4:E5 - "Sets, sets, everywhere"](https://dev.to/basecspodcast/s4e5--sets-sets-everywhere)
 - [W3 Schools Exercises Set Exercises](https://www.w3resource.com/java-exercises/collection/index.php#hashset)