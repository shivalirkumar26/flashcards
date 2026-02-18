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
}

];
