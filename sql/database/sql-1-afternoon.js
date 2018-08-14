
// ••• Table - People •••

/*
1. Create a table called Person that records a person's ID, Name, Age, Height ( in cm ), City, FavoriteColor.
   • ID should be an auto-incrementing id/primary key - Use type: INTEGER PRIMARY KEY AUTOINCREMENT
2. Add 5 different people into the Person database.
   • Remember to not include the ID because it should auto-increment.
3. List all the people in the Person table by Height from tallest to shortest.
4. List all the people in the Person table by Height from shortest to tallest.
5. List all the people in the Person table by Age from oldest to youngest.
6. List all the people in the Person table older than age 20.
7. List all the people in the Person table that are exactly 18.
8. List all the people in the Person table that are less than 20 and older than 30.
9. List all the people in the Person table that are not 27 (Use not equals).
10. List all the people in the Person table where their favorite color is not red.
11. List all the people in the Person table where their favorite color is not red and is not blue.
12. List all the people in the Person table where their favorite color is orange or green.
13. List all the people in the Person table where their favorite color is orange, green or blue (use IN).
14. List all the people in the Person table where their favorite color is yellow or purple (use IN).
*/

// code
/* 1.CREATE TABLE Person ( 
  ID INTEGER PRIMARY KEY AUTOINCREMENT, 
  Name string, 
  Age integer, 
  Height integer, 
  City string, 
  FavoriteColor string 
); mean => make the table */

/* 2. INSERT INTO  Person( Name, Age, Height, City, FavoriteColor)
VALUES ('Tim', 30, 177, 'Riverton', 'white')    
mean => put values in the person table */

/* 3. SELECT * FROM Person
ORDER BY Height DESC    mean => height tallest to shortest */

/* 4. SELECT * FROM Person
ORDER BY Height ASC   mean => height shortest to tallest */

/* 5. SELECT * FROM Person
ORDER BY Age DESC  mean => age oldest to youngest */

/* 6. SELECT * FROM Person
WHERE Age > 20  mean => age older than 20 */

/* 7. SELECT * FROM Person
WHERE Age = 18  mean => age exactly 18 */

/* 8. SELECT * FROM Person
 WHERE Age < 20 or Age > 30  mean => age less than 20 and older than 30 */

/* 9. SELECT * FROM Person
 WHERE Age != 27   mean => age not equals 27 */

/* 10. SELECT * FROM Person
 WHERE FavoriteColor != "Red"  mean => favoriteColor not equal to "Red" */

/* 11. SELECT * FROM Person
 WHERE FavoriteColor != "Red" and FavoriteColor != "Blue"
 mean => FavoriteColor not equals to "Red" and "Blue" */

/* 12. SELECT * FROM Person
 WHERE FavoriteColor = "Orange" or FavoriteColor = "Green"
 mean => either "Orange" or "Green" will return */

/* 13. SELECT * FROM Person
 WHERE FavoriteColor IN("Orange", "Green", "Blue")
 mean => the values of "Orange", "Green", "Blue" in FavoriteColor */

/* 14. SELECT * FROM Person
 WHERE FavoriteColor IN("Yellow", "Purple") 
 mean => the values of "Yellow", "Purple" in FavoriteColor */






 // ••• Table - Orders ••• 

/*
1. Create a table called Orders that records: PersonID, ProductName, ProductPrice, Quantity.
2. Add 5 Orders to the Orders table.
  • Make orders for at least two different people.
  • PersonID should be different for different people.
3. Select all the records from the Orders table.
4. Calculate the total number of products ordered.
5. Calculate the total order price.
6. Calculate the total order price by a single PersonID.
*/

// code
 /* 1. CREATE TABLE Orders ( 
  PersonID INTEGER, 
  ProductName string, 
  ProductPrice float, 
  Quantity integer
);  */

/* 2. INSERT INTO Orders ( PersonID, ProductName, ProductPrice, Quantity ) 
VALUES ( 5, "Tv", 5000.99, 500 );  create the values one by one*/

/* 3. SELECT * FROM Orders */

/* 4. SELECT SUM(Quantity) 
 FROM Orders */

/* 5. SELECT SUM(ProductPrice * Quantity) 
 FROM Orders  */

/* 6. SELECT SUM(ProductPrice * Quantity) 
 FROM Orders
 WHERE PersonID = 2 */






// ••• Table - Artist •••

/*
1. Add 3 new Artists to the Artist table. ( It's already created )
2. Select 10 artists in reverse alphabetical order.
3. Select 5 artists in alphabetical order.
4. Select all artists that start with the word "Black".
5. Select all artists that contain the word "Black".
*/

// code
/* 1. INSERT INTO Artist( Name )
 VALUES ('Don') */

/* 2. SELECT * FROM Artist
 ORDER BY name DESC  // => unorder
 LIMIT 10  */

/* 3. SELECT * FROM Artist
 ORDER BY name ASC // => order
 LIMIT 5  */

/* 4. SELECT * FROM Artist
WHERE Name like "Black%" start with the word "Black"*/

/* 5. SELECT * FROM Artist
WHERE Name like "%Black%"  all that contain the word "Black"*/






// ••• Table - Employees •••

/*
1. List all Employee first and last names only that live in Calgary.
2. Find the first and last name and birthdate for the youngest employee.
3. Find the first and last name and birthdate for the oldest employee.
4. Find everyone that reports to Nancy Edwards (Use the ReportsTo column).
  • You will need to query the employee table to find the Id for Nancy Edwards
5. Count how many people live in Lethbridge.
*/

// code

/* 1. SELECT  FirstName, LastName 
FROM Employee 
WHERE City = "Calgary"; */

/* 2. SELECT FirstName, LastName, Max(BirthDate) // Max => youngest 
 FROM Employee */

/* 3. SELECT FirstName, LastName, Min(BirthDate) // Min => oldest
 FROM Employee */

/*  SELECT * FROM Employee  => Do this first to see who is ReportsTo (Edwards Nancy Sales Manager)*/
/* 4. SELECT * FROM Employee
 WHERE  ReportsTo = 2 */

/* 5. SELECT COUNT (*)
FROM Employee
WHERE City = "Lethbridge" */



// ••• Table - Invoice •••


/*
1. Count how many orders were made from the USA.
2. Find the largest order total amount.
3. Find the smallest order total amount.
4. Find all orders bigger than $5.
5. Count how many orders were smaller than $5.
6. Count how many orders were in CA, TX, or AZ (use IN).
7. Get the average total of the orders.
8. Get the total sum of the orders.
*/

// code

/* 1. SELECT Count(*) FROM Invoice 
WHERE BillingCountry = 'USA' */

/* 2. SELECT Max(total) FROM Invoice */

/* 3. SELECT Min(total) FROM Invoice */

/* 4. SELECT * FROM Invoice 
WHERE Total > 5 */

/* 5. SELECT COUNT(*) FROM Invoice 
WHERE Total < 5 */

/* 6. SELECT Count(*) FROM Invoice 
WHERE BillingState in ('CA', 'TX', 'AZ') */

/* 7. SELECT AVG(Total) FROM Invoice */

/* 8. SELECT SUM(Total) FROM Invoice */
