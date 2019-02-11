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

## Slides

**TBD**

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

<ResponsiveImage src="/people-map.jpg"></ResponsiveImage>

Write a program that creates a map of students and the country they are from. Add 10 students from our class to this map.

- use `HashMap`
- what are the data types for key and value?

1. Print to the console where is `Elena` from (using apropriate `Map` method)
2. Print each entry in a format `name: country`
3. Print all unique country names.


### Exercise 2

Write a method that acts as a english-german dictionary. It takes one parameter - english word - and returns german translation. If word is not found it returns "Sorry, I don't know such word".

### Exercise 3

Write a method program that contains a pizza menu - we are interested only in pizza name and it's price. For simplification we can assume that all pizzas are sold in the same size and price is an `Integer`. Write a method that takes how much money there is in your wallet and it returns `Map` of pizzas and their prices, that you can afford.

### Exercise 4

Write a program that calculates average price of a second hand car based on the list of prices found on EBay:

```java
Map<String, List<Integer>> carPrices = new HashMap<>();
carPrices.put("toyota", Arrays.asList(10000, 25000, 13000))
...
```

The method should return a new map where key is a car name and value is a average price:

```java
Map<String, Integer> averagePrices(Map<String, List<Integer> carPrices) {
    ...
}
```

### Exercise 5

<ResponsiveImage src="/peppa1.jpg"></ResponsiveImage>

Peppa Pig has following friends: Suzy Sheep, Emily Elephant, Rebecca Rabbit, Danny Dog, Pedro Pony. 
Zoe Zebra has following friends: Freddy Fox, Rebecca Rabbit, Gabriella Goat, Kylie Kangaroo, Danny Dog

Write a method that prints their common friends.

::: tip

Write it in a flexible way, so that we can easily add new character with their friends without changing too much code.

:::

Use following template:

```java

class MyClass {
    // replace .... with appropriate data types
    private static Map<...,...> friendships = new HashMap<...,...>();

    public static void main(String ... args) {
        addFriendships("Pepa Pig", ...);
        addFriendships("Zoe Zebra", ...);

        System.out.println("Common friends: " + commonFriends("Pepa Pig", "Zoe Zebra"));
    }

    static void addFriendships(..., ...) {
        ...
    }

    ... commonFriends(String name1, String name2) {
        ...
    }
}
```

## Additional Resources

 **TBD**