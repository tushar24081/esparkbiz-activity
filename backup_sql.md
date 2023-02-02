# Backup of SQL Queries:

1. Self Join on Product Category table:


```SELECT A.category AS Parent, B.category AS Child FROM category_mst A JOIN category_mst B ON A.id = B.cat_id```

2. Inner Join using another Product Table:

```SELECT p.name, c.category FROM product_mst p INNER JOIN category_mst c ON c.id = p.cat_id```


3. Left Join: The Left Join returns all the data from the left hand side of table even if there is no matching query from the right hand side.

```SELECT c.category, p.name from category_mst c LEFT JOIN product_mst p ON c.id = p.cat_id```

here, the table we are writing with "FROM" keyword is known as Left side. So, all the data from category will appear here.


4. Group By Query:

```SELECT City, count(*) from Student.Student_Mst group by City;```

5. Group By with Having Keyword

`SELECT City, count(*) from Student.Student_Mst group by City having count(*) > 15000;`

# SQL Functions

1. ascii(char): gives ASCII value of character.

```SELECT ascii('P') from dual```
output: 80

2. concat(): takes chunks of words as an arguments and combines them. 
SELECT concat("tushar", " ", "rupani") from dual;

3. lpad() & rpad(): this will keep adding "abc" to string "tushar" until it becomes length of 20.
```SELECT lpad("tushar", 20, "abc")```
```SELECT rpad("tushar", 20, "abc")```

4. UPPER(): converts all the characters of string to uppercase.

5. ABS(-3454) : converts this negative value into Positive one.

6. SELECT INSTR("Tushar Rupani", "Rup"): This will return the occurence of "parameter 2" in String
for example: Above example will return 8.

7. LCASE(): converts string to lowercase.

8. ```SELECT REPLACE("XYZ FGH XYZ", "X", "m")```: this will convert all X into m

# Aggregate Functions

### Aggregate functions are largely used with "Group By"

1. avg(): gives average of the data, Let's suppose i have 9 employess and their total salary is 9,00,00 so it will divide 9,00,000 with 9. 
```select avg(id) from product_mst;```

2. sum(): sum of all column 

3. max(): maximum from the column data

4. min(): minimum from the column data

5. count(): counts the total number of rows returned by the SQL

# Join of Three tables
`select u.name, p.name, c.category
FROM user_mst u
JOIN product_mst p
ON u.p_id = p.id
JOIN category_mst c
ON p.cat_id = c.id`

u.name brings the name of the user, p.name brings name of the product that has been purchased by the customer,  and category brings name of category.

All of them are coming based on id of all columns.



# Query for the Assignment Given By Chintan Sir.<!--  -->

```
SELECT p.first_name, p.last_name, p.contact_no, p.address, p.email, p.gender, p.dob,
a.SSC, a.HSC, a.Graduate, a.PostGraduate, a.Board, a.Stream, e.company_name, e.start_date, e.end_date, e.CTC, 
l.Hindi, l.English, l.Spanish, l.Sindhi, l.German, r.name, r.contact_no, r.linkedin_link, t.Node, t.JavaScript, t.Python,
t.Django, t.Java, t.C, c.Current_CTC, c.Expected_CTC, c.Preferred
FROM personal_info p
JOIN Academic a ON a.personal_id = p.id
JOIN Experience e ON e.personal_id = p.id
JOIN Languages_Known l ON l.personal_id = p.id
JOIN Reference_Tab r ON r.personal_id = p.id
JOIN Technologies t ON t.personal_id = p.id
JOIN CTC c ON c.personal_id = p.id
```