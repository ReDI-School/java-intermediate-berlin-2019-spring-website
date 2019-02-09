# 07 - Data Structures: Maps

<Teacher name="Maciej"></Teacher>

## Goals

- learn the purpose of Maps and two most commonly used implementations: `HashMap` and `TreeMap`
- learn how `HashMap` is implemented internally
- **Practice!**

## Tips

### How to measure method execution time?

```java
long before = System.currentTimeMillis();
doMagic();
long now = System.currentTimeMillis();
System.out.println("Seconds elapsed: " + (now-before)/1000F + " seconds." );
```


## Slides

**TBD**

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