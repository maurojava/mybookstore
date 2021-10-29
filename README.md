# Project structure

This template project uses Boundary Control Entity (BCE) pattern. Very good description of this pattern is presented by Adam Bien - [Structuring Java EE 7 Applications](https://www.youtube.com/watch?v=grJC6RFiB58).

# Configuring RDBMS

This template project uses HSQLDB. If you want to use other RDBMS:
* add JDBC driver into libs/lib element of tomee-maven-plugin configuration in pom.xml;
* edit DataSource configuration in src/test/tomee/tomee.xml

# Running HSQLDB instance

```mvn exec:java```

# Running the project

```mvn package tomee:start```

# Shutting down the project

```mvn tomee:stop```

# the project:
```this project use tomee7.1.4plus with hibernate create with tomee maven plugin . The  restclient.html page is a jQuery client for the rest service. Into this page is present also a link for the jsf crud .
The jsf crud is working. But the jQuery not work. i get :               
Caused by: java.lang.ClassCastException: java.util.HashMap cannot be cast to bookstore.entity.Book  ```