const unit1Deck = [

/* =======================
   SECTION 1.1 – DATA INGESTION & INTEGRATION
   ======================= */

{
  tag: "1.1",
  question: "What is data ingestion in the context of the data processing lifecycle?",
  answer: "Data ingestion is the process of collecting and importing data from various data sources into a data system so that it can be stored, processed, and analyzed in later phases of the data processing lifecycle."
},
{
  tag: "1.1",
  question: "What is meant by data integration, and why is it needed?",
  answer: "Data integration refers to the process of combining data from heterogeneous sources into a unified and consistent format. It is needed because data sources often differ in structure, format, semantics, and quality."
},
{
  tag: "1.1",
  question: "What does ETL stand for in the context of data ingestion and integration?",
  answer: "ETL stands for Extract, Transform, Load."
},
{
  tag: "1.1",
  question: "What is the role of the transform step in ETL?",
  answer: "The transform step cleans, restructures, standardizes, harmonizes, and converts data formats so that the data fits the target data model and resolves heterogeneity issues before loading."
},
{
  tag: "1.1",
  question: "Which of the following best describes the relationship between data ingestion and data integration?",
  answer: "Data ingestion collects data, while data integration harmonizes heterogeneous data into a unified format."
},
{
  tag: "1.1",
  question: "Why is data ingestion and integration considered a critical first phase of the data processing lifecycle?",
  answer: "Because all subsequent phases depend on the availability, consistency, and quality of ingested data. Poor ingestion or integration leads to incorrect storage, faulty analysis, and unreliable reporting."
},
{
  tag: "1.1",
  question: "Which three types of data are typically handled during data ingestion according to the IU course?",
  answer: "Structured data, semi-structured data, and unstructured data."
},
{
  tag: "1.1",
  question: "What is structured data? Give examples.",
  answer: "Structured data follows a predefined schema and is typically stored using schema-on-write. Examples include relational databases, CSV files, and Excel spreadsheets."
},
{
  tag: "1.1",
  question: "What is semi-structured data? Give examples.",
  answer: "Semi-structured data has a flexible, self-describing structure, often using tags or key–value pairs. Examples include JSON, XML, and HTML."
},
{
  tag: "1.1",
  question: "What is unstructured data?",
  answer: "Unstructured data does not follow any predefined schema and does not have schema-on-write. Examples include text documents, images, audio files, and videos."
},
{
  tag: "1.1",
  question: "What does no schema on write mean, and where is it commonly used?",
  answer: "No schema on write means data can be stored without enforcing a predefined schema. It is commonly used for semi-structured and unstructured data in NoSQL databases, file systems, and data lakes."
},
{
  tag: "1.1",
  question: "Which type of data typically follows schema-on-write?",
  answer: "Structured data typically follows schema-on-write."
},
{
  tag: "1.1",
  question: "Which storage option is most suitable for unstructured data according to the IU material?",
  answer: "File systems or BLOB storage are most suitable for unstructured data."
},

/* =======================
   SECTION 1.2 – DATA PROCESSING
   ======================= */

{
  tag: "1.2",
  question: "What is the key principle that enables modern data processing frameworks to scale?",
  answer: "The distribution of storage and processing over several nodes, allowing parallel execution."
},
{
  tag: "1.2",
  question: "What is a Directed Acyclic Graph (DAG) in data processing?",
  answer: "A DAG is a processing model where data transformations are organized as tasks with defined inputs and outputs, connected by directed edges, without feedback loops."
},
{
  tag: "1.2",
  question: "Which of the following is a characteristic of a DAG-based data processing pipeline?",
  answer: "Dependencies between tasks are clearly defined."
},
{
  tag: "1.2",
  question: "What is the role of an orchestrator in a data processing pipeline?",
  answer: "An orchestrator supervises execution using a scheduler, an executor, and a metadata component."
},
{
  tag: "1.2",
  question: "How is batch processing defined in the context of ETL?",
  answer: "Batch processing collects raw data at fixed time intervals, transforms it, and loads it into a centralized storage system using scheduled jobs."
},
{
  tag: "1.2",
  question: "Give an example of a typical batch processing job.",
  answer: "Collecting all customer orders for the last month and generating a monthly report."
},
{
  tag: "1.2",
  question: "What is streaming data ingestion?",
  answer: "Streaming data ingestion processes data in real time or near real time, handling events as soon as they become available in an event-driven manner."
},
{
  tag: "1.2",
  question: "Name some use cases where streaming data ingestion is applied.",
  answer: "Smart home applications, IoT infrastructure monitoring, logistics, health monitoring, and retail monitoring."
},
{
  tag: "1.2",
  question: "Which factor mainly led to the rise of streaming data ingestion?",
  answer: "Connected devices, social media, and mobile applications."
},
{
  tag: "1.2",
  question: "What is the difference between batch processing and stream processing in data processing frameworks?",
  answer: "Batch processing handles bounded data collected over time and processed periodically, while stream processing handles unbounded data continuously."
},
{
  tag: "1.2",
  question: "What is the fundamental conceptual difference between batch and stream processing according to IU?",
  answer: "Batch data is bounded, while streaming data is unbounded."
},
{
  tag: "1.2",
  question: "Which layers does the Lambda architecture consist of?",
  answer: "Batch layer, speed (stream) layer, and serving layer."
},
{
  tag: "1.2",
  question: "What is the function of the serving layer in Lambda architecture?",
  answer: "It combines batch and stream results into a unified data view that can be queried."
},
{
  tag: "1.2",
  question: "What is the objective of the Lambda architecture?",
  answer: "To combine batch and stream processing to leverage analytical accuracy and low latency."
},
{
  tag: "1.2",
  question: "Why is the Kappa architecture considered easier to implement than Lambda?",
  answer: "Because it integrates batch and stream processing into a single processing layer, reducing complexity and maintenance effort."
},
{
  tag: "1.2",
  question: "Name three open-source data processing frameworks mentioned in Section 1.2.",
  answer: "MapReduce, Spark, and Kafka."
},
{
  tag: "1.2",
  question: "Which Azure services are commonly used for batch processing?",
  answer: "Azure Synapse, Azure Data Lake Analytics, HDInsight, and Databricks."
},
{
  tag: "1.2",
  question: "Name some Azure services that support stream processing.",
  answer: "Azure Stream Analytics, Databricks, HDInsight with Spark Streaming or Storm, Azure Functions, IoT Hubs, and Event Hubs."
},
{
  tag: "1.2",
  question: "In the AWS Lambda architecture example, what is the role of the batch layer?",
  answer: "The batch layer processes historical sensor data using AWS Glue and stores results in Amazon S3."
},
{
  tag: "1.2",
  question: "What is the role of the speed layer in the AWS Lambda example?",
  answer: "The speed layer analyzes data in near real time using Kinesis Analytics."
},
{
  tag: "1.2",
  question: "Which AWS services are used for storage and reporting in the Lambda architecture example?",
  answer: "Amazon Athena and Amazon QuickSight."
},

/* =======================
   SECTION 1.3 – DATA STORAGE
   ======================= */

{
  tag: "1.3",
  question: "What is meant by data storage in the data processing lifecycle?",
  answer: "Data storage refers to persisting data on physical hardware devices so that it can be retained and accessed later."
},
{
  tag: "1.3",
  question: "What is the difference between primary storage and secondary storage?",
  answer: "Primary storage is volatile and used during execution, while secondary storage is non-volatile and persists data for later use."
},
{
  tag: "1.3",
  question: "What is direct attached storage (DAS)?",
  answer: "Direct attached storage is a storage device that is directly connected to a computer, such as an internal hard drive or an external USB drive."
},
{
  tag: "1.3",
  question: "How do file systems organize stored data?",
  answer: "File systems organize data hierarchically using directories, subdirectories, and files."
},
{
  tag: "1.3",
  question: "What is serialization and deserialization?",
  answer: "Serialization converts human-readable data into binary data, while deserialization converts binary data back into human-readable form."
},
{
  tag: "1.3",
  question: "What is serialization and deserialization, and why are they important for data storage?",
  answer: "They enable efficient storage, compression, and fast access while allowing human-readable interaction when needed."
},
{
  tag: "1.3",
  question: "Explain the difference between text files and binary files.",
  answer: "Text files are human-readable but larger and slower, while binary files are machine-optimized, compressed, and faster but not human-readable."
},
{
  tag: "1.3",
  question: "Which is an advantage of binary storage over text storage?",
  answer: "Better compression and faster access."
},
{
  tag: "1.3",
  question: "What are the five fundamental data storage categories according to IU?",
  answer: "File systems, data lakes, relational databases, data warehouses, and NoSQL databases."
},
{
  tag: "1.3",
  question: "What is a data lake?",
  answer: "A data lake is a large storage repository that stores raw structured, semi-structured, and unstructured data using schema-on-read."
},
{
  tag: "1.3",
  question: "What are the bronze, silver, and gold stages in a data lake?",
  answer: "Bronze stores raw data, silver stores cleaned data, and gold stores analytics-ready data."
},
{
  tag: "1.3",
  question: "Explain the difference between a data lake and a data warehouse.",
  answer: "A data lake stores raw data using schema-on-read, while a data warehouse stores structured, curated data using schema-on-write."
},
{
  tag: "1.3",
  question: "What are relational databases (RDBMS) and what are their main characteristics?",
  answer: "They store structured data in tables, enforce schema-on-write, support SQL queries, and guarantee ACID properties."
},
{
  tag: "1.3",
  question: "What is the main difference between relational and NoSQL databases?",
  answer: "Relational databases enforce schema-on-write, while NoSQL databases typically use schema-on-read."
},
{
  tag: "1.3",
  question: "Why are joins less efficient in NoSQL databases compared to relational databases?",
  answer: "Because NoSQL databases lack strict schemas and referential integrity, requiring full scans instead of indexed joins."
},
{
  tag: "1.3",
  question: "Describe the four main types of NoSQL databases.",
  answer: "Key-value, document-oriented, column-oriented, and graph-oriented databases."
},
{
  tag: "1.3",
  question: "Give an example of a multi-model database.",
  answer: "Azure Cosmos DB."
}

];
