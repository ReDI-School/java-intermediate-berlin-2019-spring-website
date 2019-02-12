# 07 - Data Structures: Maps

<Teacher name="Juan"></Teacher>

## Goals

- Learn about OOP concepts in General, what is it, why do we use it
- Overview of Classes, Objects, Interfaces, and their properties
- Overview of the Java language in regards to OOP syntax.
- Have a better appreciation for the Java Programming language, on what it attempts to accomplish.
- Use Google to your advantage

## Example 
Example of why to use OOP as an abstraction tool
### Problem: Write a program that finds out the nth prime number and print it on the console.
```java
package somepackage;
public class Application {
    public static void main(String[] args) {
        int someNumber=Integer.parseInt(args[0]);
        int prime;
        String numbEnding=args[0]+"th";
        /* some code */
        System.out.printf("The %s number prime is %s",numbEnding,prime);
    }
}
```
We might start with something like this
Can you figure what it does?


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

```java
```

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/1U1_ie1WHDHufCTCN_r09Ke0fCG5JaFlywYD8yq4trXI/edit?usp=sharing"></GoogleSlides>

## Recap Exercise

Measure if `LinkedList` or `ArrayList` is faster for:

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

::: tip

Write it in a flexible way, so that we can easily add new character with their friends without changing too much code.

:::

## Additional Resources

 - [📖 Java HashMap vs TreeMap](https://www.baeldung.com/java-treemap-vs-hashmap)
