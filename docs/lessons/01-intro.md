# 01 - Introduction to Intermediate Java Course

**Leading teacher:** Maciej

## Goals

Get familiar with schedule, attendance, teachers, tools
Get to know each other
Course introduction
Install required software
Learn how to create a new project with IntelliJ
Do some basic Java exercises!


- get familiar with schedule, attendance tracking, teachers, rules, tools
- get to know each other
- install all tools we need - [Intellij IDEA CE](https://www.jetbrains.com/idea/download/), Java, Git
- learn how to create a new project in Intellij IDEA
- Java basics recap

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTDkYSGHxcI4nhyfOVz_pYvrJesky7D28KSul5NqcKpqERPR14867LO0C580-b9nu6BNP--oieJW3q3/embed?start=false&loop=false&delayms=3000" frameborder="0" style="max-width:100%; width:100%" height="400" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Java Basics Recap

```java
package com.redi.j2;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World");

        String name = "Memet";
        String profession = "skydiver";
        int age = 40;
        boolean smoking = false;

        someMethod(profession);

        for (int i = 0; i < 10; i++) {
            System.out.println("hey " + i);
        }
    }

    private static void someMethod(String profession) {
        if (profession.equals("skydiver")) {
            System.out.println("Cool");
        } else {
            System.out.println("not cool");
        }
    }
}
```

## Exercises

Same exercises as on slides, copied here for convenience.

### Exercise 1

Write a method that for X and Y given by arguments prints square of each number between X and Y.

```1 - 1
2 - 4
3 - 9
… 
```

### Exercise 2

In Polish language there is a rule that if name ends with “a” it’s a female name, if not it’s a male name.

Write a method that checks if Polish name given by variable is a male or female


For example:
```Krystyna - female
Krysian - male
```

### Exercise 3

Write a method that for X and Y, for each number between X and Y writes a number and if its odd or even.

### Exercise 4

Write a method that for age given by parameter prints if is underage (and then how many years left until becomes an adult), or adult, if can buy a beer.

In Germany you become an adult at 18 but you can buy a beer already when you’re 16.

### Exercise 5

Write a method that calculates how much money stays in the pocket of a freelancer in Poland. 
Each freelancer has to pay 300 EUR insurance and income tax is flat 19%. 

For example, if freelancer made 5000 EUR, in his pocket stays 4700 * 81% = 3807 EUR. 


## Homework

Write a program that for given value of variable “height” will print out right-half of the christmas tree to the console. 

- Tree starts with “I” on the top and ends with “M” on the bottom. 
- Tree is built from “X” and “Y” characters one after another

For example for `height` equals 6 it will print:

```
I
XY
XYX
XYXY
XYXYX
M
```


```java
package com.example.demo;

public class TreeExercise {

    public static void main(String[] args) {
        int height = 8;

        // put your code here
    }
}
```


## Additional Resources

- [Is the use of Java's default package a bad practice?](https://stackoverflow.com/questions/7849421/is-the-use-of-javas-default-package-a-bad-practice)
- [Base CS - Exploring the basics of computer science, every Monday, for a year.](https://medium.com/basecs)
- [Base CS Podcast](https://www.codenewbie.org/basecs)
- [Object Oriented Programming with Java Part 1 - Free Online Course](http://moocfi.github.io/courses/2013/programming-part-1/)
- [W3Schools Java Tutorial](https://www.w3schools.com/java/)