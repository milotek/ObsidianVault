
This exercise uses the well known [Northwind sample database](https://arc.net/l/quote/ukrmzlil) on the W3Schools website.

- Answer the following questions by writing out the appropriate SQL queries. This is what you will have to do in the A Level exam.

-----
## Questions
**Write queries to:**
1. Show full details of all the shippers, in alphabetical order of ShipperName.
```sql
SELECT * FROM Shippers 
ORDER BY 1 DESC;  
```

2. Show full details of all the products costing less than $20.
```SQL
SELECT * FROM Products WHERE Price <20;
```

3. Show full details of the all the products whose name starts with a ‘Q’.
```SQL
SELECT * FROM Products WHERE ProductName LIKE 'Q%';
```
4. Show the SupplierID, SupplierName and City of suppliers in Germany.
```SQL
SELECT SupplierID, SupplierName, City
FROM Suppliers
WHERE Country LIKE 'Germany'
```

5. Show the ProductID and ProductName of products where the CategoryID=3
```SQL
SELECT ProductID, ProductName
FROM Products
WHERE CategoryID = 3 
```

6. Show the ProductID and ProductName for all products with SupplierID 7 and CategoryID 3.
```SQL
SELECT ProductID, ProductName
FROM Products
WHERE CategoryID = 3 AND SupplierID = 7
```

7. Show the OrderID of orders for the employees whose IDs are 4 and 7.
```
SELECT OrderID
FROM Orders
WHERE EmployeeID = 4 or EmployeeID = 7
```

8. Show the ContactName and CustomerName of all customers for whom there is no PostalCode stored in the database. (USE ‘IS NULL’)
```SQL
SELECT ContactName, Customername
FROM Customers
WHERE PostalCode IS NULL
```
