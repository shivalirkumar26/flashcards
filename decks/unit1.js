const unit1Deck = [

/* =======================
   SECTION 1.1 – DATA INGESTION & INTEGRATION
   ======================= */

{
  tag: "1.1",
  question: "How do file systems organize stored data?",
  answer: "File systems organize data hierarchically using directories, subdirectories, and files."
},
{
  tag: "1.1",
  question: "What does ETL stand for in the context of data ingestion and integration?",
  answer: "ETL stands for Extract, Transform, Load."
},
{
  tag: "1.1",
  question: "Which option correctly expands ETL?",
  answer: "C. Extract, Transform, Load."
},
{
  tag: "1.1",
  question: "What does “no schema on write” mean, and where is it commonly used?",
  answer: "No schema on write means data can be stored without enforcing a predefined schema. It is commonly used for semi-structured and unstructured data in NoSQL databases, file systems, and data lakes."
},
{
  tag: "1.1",
  question: "What is data ingestion in the context of the data processing lifecycle?",
  answer: "Data ingestion is the process of collecting and importing data from various data sources into a data system so that it can be stored, processed, and analyzed in later phases of the data processing lifecycle."
},
{
  tag: "1.1",
  question: "What is meant by data integration, and why is it needed?",
  answer: "Data integration refers to combining data from heterogeneous sources into a unified and consistent format because sources differ in structure, format, semantics, and quality."
},
{
  tag: "1.1",
  question: "Which of the following best describes the relationship between data ingestion and data integration?",
  answer: "C. Data ingestion collects data, while data integration harmonizes heterogeneous data."
},
{
  tag: "1.1",
  question: "Which statement about schema on write is correct?",
  answer: "C. The schema is enforced before data is stored."
},
{
  tag: "1.1",
  question: "Which storage option is most suitable for unstructured data according to the IU material?",
  answer: "C. File systems or BLOB storage."
},
{
  tag: "1.1",
  question: "Which three types of data are typically handled during data ingestion according to the IU course?",
  answer: "Structured data, semi-structured data, and unstructured data."
},
{
  tag: "1.1",
  question: "Why is data ingestion and integration considered a critical first phase of the data processing lifecycle?",
  answer: "Because all subsequent phases depend on the availability, consistency, and quality of ingested data. Poor ingestion leads to faulty analysis and unreliable decision-making."
},
{
  tag: "1.1",
  question: "What is meant by data transformation in the context of ETL?",
  answer: "Data transformation processes raw data so it becomes suitable for storage and analysis, including cleaning, standardisation, harmonisation, and format conversion."
},
{
  tag: "1.1",
  question: "Which type of data typically follows schema-on-write?",
  answer: "Structured data."
},

/* =======================
   SECTION 1.2 – DATA PROCESSING
   ======================= */

{
  tag: "1.2",
  question: "What is the difference between batch processing and stream processing in data processing frameworks?",
  answer: "Batch processing handles bounded data at scheduled intervals, while stream processing handles unbounded data continuously in real or near real time."
},
{
  tag: "1.2",
  question: "What is the key principle that enables modern data processing frameworks to scale?",
  answer: "The distribution of storage and processing over several nodes, enabling parallel execution."
},
{
  tag: "1.2",
  question: "What is a Directed Acyclic Graph (DAG) in data processing?",
  answer: "A DAG organizes tasks with defined inputs and outputs, directed dependencies, and no feedback loops."
},
{
  tag: "1.2",
  question: "Which of the following is a characteristic of a DAG-based data processing pipeline?",
  answer: "C. Dependencies between tasks are clearly defined."
},
{
  tag: "1.2",
  question: "What is the role of an orchestrator in a data processing pipeline?",
  answer: "An orchestrator supervises task execution using a scheduler, executor, and metadata component."
},
{
  tag: "1.2",
  question: "How is batch processing defined in the context of ETL?",
  answer: "Batch processing collects data at fixed time intervals and processes it using scheduled jobs."
},
{
  tag: "1.2",
  question: "What is streaming data ingestion?",
  answer: "Streaming data ingestion processes data in real or near real time in an event-driven manner."
},
{
  tag: "1.2",
  question: "Which factor mainly led to the rise of streaming data ingestion?",
  answer: "C. Connected devices, social media, and mobile applications."
},
{
  tag: "1.2",
  question: "Give an example of a typical batch processing job.",
  answer: "Collecting all customer orders for the last month and generating a monthly report."
},
{
  tag: "1.2",
  question: "Name some use cases where streaming data ingestion is applied.",
  answer: "Smart homes, IoT monitoring, logistics, health monitoring, and retail monitoring."
},
{
  tag: "1.2",
  question: "Which layers does the Lambda architecture consist of?",
  answer: "Batch layer, speed (stream) layer, and serving layer."
},
{
  tag: "1.2",
  question: "What is the function of the serving layer in Lambda architecture?",
  answer: "C. Combine batch and stream results into a unified data view."
},
{
  tag: "1.2",
  question: "What is the objective of the Lambda architecture?",
  answer: "To combine batch and stream processing to achieve accuracy and low latency."
},
{
  tag: "1.2",
  question: "Why is the Kappa architecture considered easier to implement than Lambda?",
  answer: "Because it integrates batch and stream processing into a single layer, reducing complexity and maintenance effort."
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
  answer: "The batch layer processes historical data using AWS Glue and stores results in Amazon S3."
},
{
  tag: "1.2",
  question: "What is the role of the speed layer in the AWS Lambda example?",
  answer: "The speed layer uses Kinesis Analytics to analyze data in near real time."
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
  answer: "Data storage refers to persisting data on physical hardware devices so it can be retained and accessed later."
},
{
  tag: "1.3",
  question: "What is the difference between primary storage and secondary storage?",
  answer: "Primary storage is volatile and used during execution, while secondary storage is non-volatile and persists data."
},
{
  tag: "1.3",
  question: "What is direct attached storage (DAS)?",
  answer: "Direct attached storage is storage directly connected to a computer, such as an internal hard drive or USB drive."
},
{
  tag: "1.3",
  question: "What is serialization and deserialization?",
  answer: "Serialization converts human-readable data into binary form, while deserialization converts binary back into human-readable form."
},
{
  tag: "1.3",
  question: "What is serialization and deserialization, and why are they important for data storage?",
  answer: "They enable efficient storage, compression, and fast access while allowing human-readable interaction."
},
{
  tag: "1.3",
  question: "Explain the difference between text files and binary files.",
  answer: "Text files are human-readable but larger and slower, while binary files are compressed, faster, and not human-readable."
},
{
  tag: "1.3",
  question: "Which is an advantage of binary storage over text storage?",
  answer: "C. Better compression and faster access."
},
{
  tag: "1.3",
  question: "What are the five fundamental data storage categories according to IU?",
  answer: "File systems, data lakes, relational databases, data warehouses, and NoSQL databases."
},
{
  tag: "1.3",
  question: "What is a data lake?",
  answer: "A data lake stores raw structured, semi-structured, and unstructured data using schema-on-read."
},
{
  tag: "1.3",
  question: "What are the bronze, silver, and gold stages in a data lake?",
  answer: "Bronze stores raw data, silver stores refined data, and gold stores analytics-ready data."
},
{
  tag: "1.3",
  question: "Explain the difference between a data lake and a data warehouse.",
  answer: "A data lake stores raw data with schema-on-read, while a data warehouse stores structured data with schema-on-write."
},
{
  tag: "1.3",
  question: "What are relational databases (RDBMS) and what are their main characteristics?",
  answer: "They store structured data in tables, enforce schema-on-write, support SQL, and guarantee ACID properties."
},
{
  tag: "1.3",
  question: "What are the main characteristics of relational databases (RDBMS)?",
  answer: "Predefined schema, SQL queries, structured tables, and ACID properties."
},
{
  tag: "1.3",
  question: "What is the main difference between relational and NoSQL databases?",
  answer: "Relational databases enforce schema-on-write, while NoSQL databases use schema-on-read."
},
{
  tag: "1.3",
  question: "Why are joins less efficient in NoSQL databases compared to relational databases?",
  answer: "Because NoSQL databases lack strict schemas and referential integrity, requiring full scans."
},
{
  tag: "1.3",
  question: "Describe the four main types of NoSQL databases.",
  answer: "Key-value, document-oriented, column-oriented, and graph-oriented databases."
},
{
  tag: "1.3",
  question: "Which NoSQL database type is best suited for highly interconnected data?",
  answer: "D. Graph-oriented databases."
},
{
  tag: "1.3",
  question: "Give an example of a multi-model database.",
  answer: "Azure Cosmos DB."
},
{
  tag: "1.3",
  question: "Which component in Hadoop manages distributed processing resources?",
  answer: "C. YARN."
},
{
  tag: "1.3",
  question: "Why does HDFS support parallel data processing?",
  answer: "Because data is distributed across multiple nodes, allowing tasks to run simultaneously."
},
{
  tag: "1.3",
  question: "Why do organizations prefer managed cloud file systems over self-managed HDFS?",
  answer: "Because managed services reduce setup and maintenance effort while providing scalability and fault tolerance."
},
{
  tag: "1.3",
  question: "Why do many organizations prefer cloud-based data processing services over self-managed solutions?",
  answer: "Because cloud services offer efficient resource allocation and reduce operational overhead."
}

];
