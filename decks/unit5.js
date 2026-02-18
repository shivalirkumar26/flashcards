const unit5Deck = [
{
  tag: "5.1",
  question: "What is the Entity Relationship Model (ERM) and what is it used for?",
  answer: "The Entity Relationship Model (ERM) is a conceptual representation of information based on entities and the relationships between them. It is used in software development and database modeling to define the structure of data and how different entities are connected. ERM helps in designing the database schema before implementation and ensures that the data model reflects real-world objects and their relationships."
},
{
  tag: "5.1",
  question: "What is an entity and how does it relate to a database table?",
  answer: "An entity is an abstraction of a real-world object that has a name and attributes representing its properties. In database modeling, an entity defines a table and its columns. Each attribute of the entity corresponds to a column in the table."
},
{
  tag: "5.1",
  question: "What is the difference between an entity and an entity instance?",
  answer: "An entity defines the structure of a real-world object, including its attributes and data types. An entity instance represents a concrete occurrence of that entity with actual values assigned to its attributes. In a database, an entity instance corresponds to a record stored in a table row."
},
{
  tag: "5.1",
  question: "Explain cardinality in an ER model. What do 1:1, 1:n, and n:m relationships mean?",
  answer: "Cardinality in an ER model refers to the number of instances of one entity that can be associated with instances of another entity. A 1:1 relationship means one instance of an entity is linked to exactly one instance of another entity. A 1:n relationship means one instance of an entity can be linked to many instances of another entity. An n:m relationship means many instances of one entity can be linked to many instances of another entity."
},
{
  tag: "5.1",
  question: "What is a primary key and why is it important in relationship modeling?",
  answer: "A primary key is a field or a combination of fields that uniquely identifies each record in a table. It is essential in relationship modeling because it allows records to be uniquely referenced and connected to other entities. Without a primary key, it would not be possible to establish reliable relationships between tables."
},
{
  tag: "5.1",
  question: "What is a foreign key?",
  answer: "A foreign key is a field in one entity that refers to the primary key of another entity. It is used to establish and enforce relationships between tables by linking records across entities."
},
{
  tag: "5.1",
  question: "Explain the difference between strong (independent) and weak (dependent) entities.",
  answer: "A strong or independent entity can exist in the data model without depending on another entity. Its primary key is not a foreign key. A weak or dependent entity cannot exist without a relationship to another entity. Its primary key is either a foreign key or a composite key including a foreign key, and it depends on another entity for its existence."
},
{
  tag: "5.1",
  question: "What is the purpose of using an association table in ER modeling?",
  answer: "An association table is used to implement relationships, especially many-to-many (n:m) relationships, by creating a separate table that contains foreign keys referencing the related entities. It can also be used for other cardinalities when normalization requirements prevent direct implementation within one of the original tables."
},
{
  tag: "5.1",
  question: "Name several ERD tools and explain their purpose in database modeling.",
  answer: "ERD tools are software applications used to create and manage Entity Relationship Diagrams (ERDs). They help visualize database schemas and often allow exporting SQL scripts to implement the designed schema. Examples include ERDPlus, Lucidchart, MySQL Workbench, Microsoft Visio, SmartDraw, Draw.io, ConceptDraw, and Dia. Many of these tools support automation features to export diagrams and generate SQL scripts for creating database tables, relationships, and constraints."
},
{
  tag: "5.2",
  question: "What is data normalization and why is it necessary?",
  answer: "Data normalization optimizes data storage and consistency by designing a logically linked storage structure, eliminating redundant data, and avoiding anomalies introduced by data modifications. It is necessary because redundant data can lead to update anomalies, insertion anomalies, and deletion anomalies. Normalization improves data consistency, storage efficiency, and processing performance by restructuring large tables into smaller, logically related tables connected by primary and foreign keys."
},
{
  tag: "5.2",
  question: "Explain what update anomaly, insertion anomaly, and deletion anomaly mean in the context of data normalization.",
  answer: "An update anomaly occurs when redundant data exists and a change is not propagated to all relevant records, leading to inconsistency. For example, if a department name changes but not all employee records are updated, the database becomes inconsistent. An insertion anomaly occurs when inserting new data requires additional unrelated information or when outdated related data is inserted unintentionally. A deletion anomaly occurs when deleting a record unintentionally removes additional important information. For example, if all employees of a department are deleted and department information is stored only in the employee table, information about the department head may also be lost."
},
{
  tag: "5.2",
  question: "What are the rules of the First Normal Form (1NF)?",
  answer: "The First Normal Form requires that a table contains only single-value (atomic) attributes, that records are unique, and that column names are unique. Multi-valued attributes must be removed, duplicate rows must be eliminated, and each field must contain only one value. 1NF ensures a basic clean table structure with no repeating groups or duplicate entries."
},
{
  tag: "5.2",
  question: "What is a partial dependency and how is it resolved in the Second Normal Form (2NF)?",
  answer: "A partial dependency occurs when a non-primary attribute depends only on part of a composite primary key instead of the entire composite key. In the Second Normal Form, the table must first comply with 1NF and then eliminate partial dependencies. This is achieved by moving the partially dependent attributes into a separate table where they depend fully on the appropriate primary key. This reduces redundancy and improves data integrity."
},
{
  tag: "5.2",
  question: "What is a transitive dependency and how is it resolved in the Third Normal Form (3NF)?",
  answer: "A transitive dependency occurs when a non-primary attribute depends on another non-primary attribute instead of directly depending on the primary key. In the Third Normal Form, the table must comply with 2NF and must not contain transitive dependencies. To resolve this, the dependent attributes are moved into a separate table, and a foreign key is used to link the related entities. This reduces redundancy and ensures that non-key attributes depend only on the primary key."
},
{
  tag: "5.2",
  question: "What does the Fourth Normal Form (4NF) address and how is it implemented?",
  answer: "The Fourth Normal Form requires compliance with 3NF and the elimination of multi-valued dependencies. It addresses redundancy caused by many-to-many relationships. 4NF is implemented by creating separate entity tables and introducing an association table that contains the foreign keys linking the related entities. This avoids unnecessary repetition of data and ensures a clean many-to-many relationship structure."
},
{
  tag: "5.2",
  question: "Why is normalization often applied only up to 2NF or 3NF in practice?",
  answer: "In practice, normalization is usually applied until the Second or Third Normal Form because further normalization may increase structural complexity without providing proportional benefits. Fully normalized databases contain many tables and relationships, which can become difficult to oversee and maintain. Therefore, many practical systems aim for a compromise between normalization and denormalization depending on the use case."
},
{
  tag: "5.2",
  question: "What are the advantages and disadvantages of normalized databases according to the IU coursebook?",
  answer: "The advantages of normalized databases include improved data consistency, elimination of redundancy, prevention of update, insertion, and deletion anomalies, improved flexibility during data integration, and easier propagation of changes throughout the system. The disadvantages include increased structural complexity, more tables and relationships that are harder to oversee, and potentially reduced performance for certain analytical workloads such as frequent aggregations. In some cases, denormalized structures may provide better performance depending on the application requirements."
},
{
  tag: "5.3",
  question: "What are star and snowflake schemas, and why are they used?",
  answer: "Star and snowflake schemas are multi-dimensional data models used in databases and data warehouses. They are designed to improve the usability and performance of analytical queries. Both schemas are built on fact tables and dimension tables. The star schema connects a central fact table directly to denormalized dimension tables, forming a star-like structure. The snowflake schema extends this structure by further normalizing the dimension tables into subdimension tables, creating a more complex structure."
},
{
  tag: "5.3",
  question: "What is a fact table and what type of information does it contain?",
  answer: "A fact table contains information central to the organization’s core processes, such as shipment records or transactions. Each record includes measures that describe events, typically numeric values, and foreign keys linking to dimension tables. Fact tables are usually designed in a vertical or long format, meaning they contain many records but few attributes. The granularity of the fact table depends on the specific use case."
},
{
  tag: "5.3",
  question: "What is a dimension table and how does it differ structurally from a fact table?",
  answer: "A dimension table contains descriptive background information related to the facts stored in the fact table. It typically stores categorical data such as customer information, product information, or location data. Dimension tables are usually structured horizontally or wide, meaning they contain many attributes but fewer records compared to fact tables. In star schemas, dimension tables are typically denormalized."
},
{
  tag: "5.3",
  question: "Explain the structure of a star schema.",
  answer: "In a star schema, a central fact table is directly connected to multiple dimension tables through foreign keys. The dimension tables are denormalized, meaning that all relevant descriptive attributes are stored in single tables. This design forms a star-like structure and enables simple join operations between the fact table and dimension tables. It improves query performance but increases redundancy."
},
{
  tag: "5.3",
  question: "Explain the structure of a snowflake schema.",
  answer: "A snowflake schema is an extension of the star schema in which dimension tables are normalized and divided into subdimension tables. Instead of storing all descriptive attributes in a single dimension table, the schema separates them into multiple related tables. This reduces redundancy and improves consistency but increases structural complexity and requires more join operations."
},
{
  tag: "5.3",
  question: "Compare star and snowflake schemas in terms of normalization and redundancy.",
  answer: "In a star schema, dimension tables are denormalized, which increases redundancy and disk space usage but simplifies queries and improves performance. In a snowflake schema, dimension tables are normalized, reducing redundancy and improving data consistency. However, this results in more complex joins and a more complicated database structure."
},
{
  tag: "5.3",
  question: "How do star and snowflake schemas differ regarding query complexity and performance?",
  answer: "In a star schema, queries are typically simpler because joins occur directly between the fact table and the dimension tables. This improves analytical performance. In a snowflake schema, queries require multiple joins between fact tables, dimension tables, and subdimension tables, which increases complexity and may impact query performance."
},
{
  tag: "5.3",
  question: "For which use cases are star and snowflake schemas typically applied?",
  answer: "Star and snowflake schemas are commonly used in business intelligence systems, data warehouses, data marts, and OLAP operations on large datasets. Star schemas are particularly suitable for analyzing large volumes of historical data efficiently. Snowflake schemas are beneficial when minimizing redundancy and maintaining consistency are important, especially when integrating new data into normalized structures."
}

];
