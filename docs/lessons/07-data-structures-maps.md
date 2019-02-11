# 07 - Data Structures: Maps

<Teacher name="Maciej"></Teacher>

## Goals

- learn the purpose of Maps and two most commonly used implementations: `HashMap` and `TreeMap`
- learn how `HashMap` is implemented internally
- **Practice!**

## Tips

### Class Properties

Class can have properties:

```java
class Main {
    private static String name = "Rachel";
}
```

Properties can be accessed from each method of the class:

```java
class Main {
    private static String name = "Rachel";

    static void foo() {
        System.out.println(name);
    }

    static void bar() {
        name = "Monica";
    }
}
```

### How to measure code execution time?

```java
long now = System.currentTimeMillis();
// some code
long end = System.currentTimeMillis();
System.out.println("Adding took: " + (end - now));
```

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vTxfdDCDYSAlLe6MvV2W5pSMXCIQkWYT-TjatrThxFTwoOR_cvndYZdohOYDG5IiGlDoaLCqhqvjv44/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Recap Exercise

Measure what if `LinkedList` or `ArrayList` is faster for:

- adding 1000000 numbers to a List
- getting an item from the middle of this list

## Common Map Operations

```java
// creating new map
Map<String, String> map = new HashMap<>();

// adding new element to the map
map.put("key1", "value1");
map.put("key2", "value2");

// getting element from map
String key = map.get("key2");

// getting all the keys
Set<String> keys = map.keySet();

// getting all the values
Collection<String> values = map.values();

// map size
map.size();

// removing element from map
map.remove("key2");

// iterating over map
for (Map.Entry<String, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ":" + entry.getValue());
}
```

## Exercises

### Exercise 1

Make a Map that associates the following employee IDs with names. Keys and values of Maps can be any Object type, so in real life you would probably have the key be a String and the associated value be a Person or Employee object. To make things simpler on this exercise, you can use String for both the ID and the name, rather than bothering to create a Person or Employee class. The point here is to associate keys with values, then retrieve values later based on keys.

| Id | Name |
|----|------|
| a1234 | Steve Jobs |
| a1235 | Bill Gates |
| a1236 | Jeff Bezos |
| a1237 | Larry Page |
| a1238 | Sergey Brin |

### Exercise 2

Go back to the previous problem and make your lookup method work with keys in any case. For example, both “a1234” and “A1234” should match Steve Jobs. Hint: very easy, so if your solution is complex, you are overlooking the obvious.

### Exercise 3

<ResponsiveImage src="/people-map.jpg"></ResponsiveImage>

Write a program that creates a map of students and the country they are from. Add 10 students from our class to this map.

- use `HashMap`
- what are the data types for key and value?

1. Print to the console where is `Elena` from (using apropriate `Map` method)
2. Print each entry in a format `name: country`
3. Print all unique country names.

### Exercise 4

Write a method that acts as a english-german dictionary. It takes one parameter - english word - and returns german translation. If word is not found it returns "Sorry, I don't know such word".

### Exercise 5

Write a method program that contains a pizza menu - we are interested only in pizza name and it's price. For simplification we can assume that all pizzas are sold in the same size and price is an `Integer`. Write a method that takes how much money there is in your wallet and it returns `Map` of pizzas and their prices, that you can afford.

### Exercise 6

Write a program that calculates average price of a second hand car based on the list of prices found on EBay. Example list:

- Toyota: 10000, 15000, 18000
- BMW: 20000, 23000, 50000
- Audi: 35000, 43000, 18000, 50000

The method should return a map where key is a car name and value is a average price.

### Exercise 7

<ResponsiveImage src="/peppa1.jpg"></ResponsiveImage>

Peppa Pig has following friends: Suzy Sheep, Emily Elephant, Rebecca Rabbit, Danny Dog, Pedro Pony. 
Zoe Zebra has following friends: Freddy Fox, Rebecca Rabbit, Gabriella Goat, Kylie Kangaroo, Danny Dog

Write a method that prints their common friends.

::: tip

Write it in a flexible way, so that we can easily add new character with their friends without changing too much code.

:::

## Additional Resources

 - [📖 Java HashMap vs TreeMap](https://www.baeldung.com/java-treemap-vs-hashmap)