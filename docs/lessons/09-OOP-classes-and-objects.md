# 09 - OOP - Classes & Objects

<Teacher name="Anca"></Teacher>

## Goals
- Learn the difference berween a Class and an Object
- Learn how to design classes 
- Learn how to create Objects


## Slides


<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vRBvkOhBpCT2nbPCteJ_rtZyiSM7aG2DHzWXGyBJhC_FIn13jswWMMYNysgkWHEo3gIL2QM5b8J6GDm/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

### User sample

```java
public class User {

    public String id;
    public String name;
    private String password;
    public String email;

    public User(String id, String name, String password, String email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public void changePassword(String newPassword) {
        this.password = newPassword;
    }
```

```java
public class Application {

    public static void main(String[] args) {
        User user = new User("id", "Anca", "123", "anca.etodirica@gmail.com");

        System.out.println("Email address is " + user.email);

        user.changePassword("0000");

    }
}
```

## Exercises

### Excercise 1
Create 2 robots named Rob and Bot. Rob is yellow and Bot is blue. Rob weights 10kg while Bot just 8kg. Rob has green eyes and Bot has black eyes. 
Each of the robots should print their attributes when asked to introduce themselves.
Create a class that has all the attributes that Rob and Bot have and a method called `introduce()` that will let the robots tell us all their characteristics, then create Rob and Bot and ask them to introduce themselves. To be able to create Rob and Bot, add to the Robot class a constructor that has all the attributes the robots need.

Example: *My name is Rob. I weight 10kg. I have green eyes.*

### Exercise 2
Add different types of constructors for the `Robot` class
- Default constructor
- Constructor with 1 parameter - the name
- Constructor with 2 paramters - the name and eye color.
Create different robots using all the constructors and let them introduce themselves. Observe what will be the values of the attributes when using different constructors.

### Excercise 3
You work for DHL and you have to drive a truck full of packets. Design the Truck into a java class then create the truck. Add specific truck attributes to the Truck class.

### Excercise 4
You need to drive the truck to the storehouse and pick up some packets to be delivered. Create a `startTruck()` `stopTruck()` method and an `accelerate()` method.  Every time you accelerate, your speed increases with 10km. Use them to drive the truck.

### Excercise 5
You need to load your truck with packets. Design the `Packet` class. The packet should know the details of the sender and be able to print them. Add 3 packets to your truck and print where you need to deliver them. 

## Homework 

### Excercise 6 
You want to go to the bank and open an account. You want to be able to transfer money, deposit money, withdraw money. When you transfer/withdraw the sum you have in your account can never go under 0EUR.
You want to keep track of your transactions as well, to see where your money is going. Whenever a new action is performed, print the current amount of money you have 	
- create an `Account` class with specific account attributes and methods like `deposit`, `withdraw`, `transfer`.
- crete a `Customer` class that will have associated an Account. 
- Create 2 `Customer` objects, one for you, and one for one of your colleagues. 
- deposit some money in the accounts
- transfer some money from your account to your friends account
- withraw some money from your account. 
- after every operation, print how much money you still have in your account.

### Exercise 7
You are working in a shop and you need to make an order to get new supplies. In your order, you need to add multiple products. Design the Java classes in order to be able to create the order for the products you need, then create the order and add the products to the order. 

### Exercise 8
You are a librarian and you just received some books that need to be added on the Library's bookshelves. You need to sort them by Author name and Author country of origin. Design the classes to create the Library that contain Books. Every book has just one Author. Add some books to the Library and print them sorted by the criterias already mentioned.

## Additional Resources
- [📺 OOP Ilustrated](https://www.youtube.com/watch?v=CqlM7JjnAi4)
