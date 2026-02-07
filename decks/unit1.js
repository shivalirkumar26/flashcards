const unit1Deck = [

/* =======================
   SECTION 1.1 – INGESTION & INTEGRATION
   ======================= */

{
  tag: "1.1",
  question: "How do file systems organize stored data?",
  answer: "File systems organize data hierarchically using directories, subdirectories, and files."
},
{
  tag: "1.1",
  question: "What does ETL stand for in the context of data ingestion and integration?",
  answer: "C. Extract, Transform, Load."
},
{
  tag: "1.1",
  question: "What does “no schema on write” mean, and where is it commonly used?",
  answer: "No schema on write means that data can be stored without enforcing a predefined schema. It is commonly used for semi-structured and unstructured data, such as in NoSQL databases, file systems, and data lakes."
},
{
  tag: "1.1",
  question: "What is data ingestion in the context of the data processing lifecycle?",
  answer: "Data ingestion is the process of collecting and importing data from various data sources into a data system so that it can be stored, processed, and analyzed in later phases of the data processing lifecycle."
},
{
  tag: "1.1",
  question: "Which statement about schema on write is correct? A. The schema is applied when data is queried  B. It is mainly used for unstructured data  C. The schema is enforced before data is stored  D. It eliminates the need for data integration",
  answer: "Correct answer: C."
},
{
  tag: "1.1",
  question: "What is meant by data integration, and why is it needed?",
  answer: "Data integration refers to the process of combining data from heterogeneous sources into a unified and consistent format because data sources differ in structure, format, semantics, and quality."
},
{
  tag: "1.1",
  question: "Which of the following best describes the relationship between data ingestion and data integration?\nA. Data integration happens before data ingestion\nB. Data ingestion and integration are identical processes\nC. Data ingestion collects data, while data integration harmonizes heterogeneous data\nD. Data integration replaces the need for data ingestion",
  answer: "Correct answer: C. Data ingestion collects data, while data integration harmonizes heterogeneous data."
},
{
  tag: "1.1",
  question: "Which statement about schema on write is correct?\nA. The schema is applied when data is queried\nB. It is mainly used for unstructured data\nC. The schema is enforced before data is stored\nD. It eliminates the need for data integration",
  answer: "Correct answer: C. The schema is enforced before data is stored."
},
{
  tag: "1.1",
  question: "Which storage option is most suitable for unstructured data according to the IU material?\nA. Relational databases\nB. Column-oriented NoSQL databases\nC. File systems or BLOB storage\nD. Schema-on-write data warehouses",
  answer: "Correct answer: C. File systems or BLOB storage."
},
{
  tag: "1.1",
  question: "Which three types of data are typically handled during data ingestion according to the IU course?",
  answer: "Structured data, semi-structured data, and unstructured data."
},
{
  tag: "1.1",
  question: "Why are joins less efficient in NoSQL databases compared to relational databases?",
  answer: "Because NoSQL databases do not enforce strict schemas or referential integrity, requiring full scans rather than indexed joins."
},
{
  tag: "1.1",
  question: "Why is data ingestion and integration considered a critical first phase of the data processing lifecycle?",
  answer: "Because all subsequent phases depend on the availability, consistency, and quality of ingested data. Poor ingestion or integration leads to incorrect storage, faulty analysis, and unreliable reporting."
},
{
  tag: "1.1",
  question: "Compare relational databases and NoSQL databases, highlighting all major differences.",
  answer: "Relational databases enforce schema on write, provide strong consistency, referential integrity, and efficient joins. NoSQL databases use schema on read, offer flexible structures, and have less efficient joins. Both can run on distributed architectures."
},
{
  tag: "1.1",
  question: "Describe the four main types of NoSQL databases and give a typical use case for each.",
  answer: "Key-value (sessions, caching, IoT), document-oriented (content management), column-oriented (analytics), graph-oriented (social networks, recommendations)."
},
{
  tag: "1.1",
  question: "What does ETL stand for in the context of data ingestion and integration?\nA. Extract, Transfer, Link\nB. Encode, Transform, Load\nC. Extract, Transform, Load\nD. Evaluate, Transform, Learn",
  answer: "Correct answer: C. Extract, Transform, Load."
},
{
  tag: "1.1",
  question: "Which three types of data are typically handled during data ingestion according to the IU course? Give examples.",
  answer: "Structured data (e.g., tabular data, relational databases), semi-structured data (e.g., JSON, XML, HTML), and unstructured data (e.g., images, audio, video, binary data)."
},
{
  tag: "1.1",
  question: "Which storage option is most suitable for unstructured data according to the IU material?\nA. Relational databases\nB. Column-oriented NoSQL databases\nC. File systems or BLOB storage\nD. Schema-on-write data warehouses",
  answer: "Correct answer: C. File systems or BLOB storage."
},

/* =======================
   SECTION 1.2 – DATA PROCESSING
   ======================= */

{
  tag: "1.2",
  question: "What is the difference between batch processing and stream processing in data processing frameworks?",
  answer: "Batch processing handles bounded data at scheduled intervals, while stream processing handles unbounded data continuously with low latency."
},
{
  tag: "1.2",
  question: "What is the key principle that enables modern data processing frameworks to scale?",
  answer: "The distribution of storage and processing over several nodes, allowing parallel execution."
},
{
  tag: "1.2",
  question: "What is the role of the transform step in ETL?",
  answer: "The transform step cleans, restructures, standardizes, and harmonizes data so that it fits the target data model before loading."
},
{
  tag: "1.2",
  question: "Which layers does the Lambda architecture consist of?",
  answer: "Batch layer, speed (stream) layer, and serving layer."
},
{
  tag: "1.2",
  question: "Give an example of a typical batch processing job.",
  answer: "Collecting all customer orders for the last month and generating a monthly report."
},
{
  tag: "1.2",
  question: "What is streaming data ingestion?",
  answer: "Streaming data ingestion processes data in real time or near real time, handling events as soon as they become available, often in an event-driven manner."
},
{
  tag: "1.2",
  question: "How is batch processing defined in the context of ETL?",
  answer: "Batch processing collects raw data at fixed time intervals, transforms it, and loads it into a centralized storage system."
},
{
  tag: "1.2",
  question: "Name some Azure services that support stream processing.",
  answer: "Azure Stream Analytics, Databricks, HDInsight with Spark Streaming or Storm, Azure Functions, IoT Hubs, and Event Hubs."
},
{
  tag: "1.2",
  question: "Name some use cases where streaming data ingestion is applied.",
  answer: "Smart home applications, IoT infrastructure monitoring, logistics, health monitoring, and retail monitoring."
},
{
  tag: "1.2",
  question: "Name the four main types of NoSQL databases.",
  answer: "Key-value, document-oriented, column-oriented (wide-column), and graph-oriented."
},
{
  tag: "1.2",
  question: "Name three open-source data processing frameworks mentioned in Section 1.2.",
  answer: "MapReduce, Spark, Kafka."
},
{
  tag: "1.2",
  question: "What is a Directed Acyclic Graph (DAG) in data processing?",
  answer: "A DAG is a processing model where tasks have defined inputs and outputs, directed dependencies, and no feedback loops."
},
{
  tag: "1.2",
  question: "What is streaming data ingestion?",
  answer: "Streaming data ingestion processes data in real time or near real time, handling events as soon as they become available."
},
{
  tag: "1.2",
  question: "What is the fundamental conceptual difference between batch and stream processing according to IU?",
  answer: "Batch data are bounded, while streaming data are unbounded."
},
{
  tag: "1.2",
  question: "What is the objective of the Lambda architecture?",
  answer: "The Lambda architecture aims to combine batch and stream processing to leverage analytical accuracy and low latency."
},
{
  tag: "1.2",
  question: "What is the role of an orchestrator in a data processing pipeline?",
  answer: "An orchestrator supervises the correct execution of pipeline tasks and includes a scheduler, executor, and metadata component."
},
{
  tag: "1.2",
  question: "Which factor mainly led to the rise of streaming data ingestion?\nA. Smaller data volumes\nB. Fixed reporting cycles\nC. Connected devices, social media, and mobile applications\nD. Lower storage costs",
  answer: "Correct answer: C. Connected devices, social media, and mobile applications."
},
{
  tag: "1.2",
  question: "Which Azure service provides a distributed data warehouse for advanced analytics?\nA. Azure Stream Analytics\nB. Azure Synapse\nC. Azure Functions\nD. Event Hubs",
  answer: "Correct answer: B. Azure Synapse."
},
{
  tag: "1.2",
  question: "Which Azure services are commonly used for batch processing?",
  answer: "Azure Synapse, Azure Data Lake Analytics, HDInsight, and Databricks."
},
{
  tag: "1.2",
  question: "What is the difference between batch processing and stream processing in data processing frameworks? (detailed explanation)",
  answer: "Batch processing works on bounded datasets collected over time and processed at scheduled intervals, typically with higher latency. Stream processing works on unbounded data, processing events continuously or in near real time with low latency, often in an event-driven manner."
},
{
  tag: "1.2",
  question: "What is the role of the speed layer in the AWS Lambda architecture example?",
  answer: "The speed layer uses Kinesis Analytics to analyze incoming data in near real time for anomaly detection."
},
{
  tag: "1.2",
  question: "Which AWS services are used for storage and reporting in the Lambda architecture example?",
  answer: "Amazon Athena is used as the data warehouse, and Amazon QuickSight is used for reporting and visualization."
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
  question: "What is direct attached storage (DAS)?",
  answer: "Direct attached storage is a storage device that is directly connected to a computer, such as an internal hard drive or USB drive."
},
{
  tag: "1.3",
  question: "What is meant by data transformation in the context of ETL?",
  answer: "Data transformation refers to processing raw data so it becomes suitable for storage and further analysis, including cleaning, standardisation, harmonisation, and format conversion."
},
{
  tag: "1.3",
  question: "What is semi-structured data? Give examples.",
  answer: "Semi-structured data has a flexible, self-describing structure. Examples include HTML, XML, and JSON."
},
{
  tag: "1.3",
  question: "What is serialization and deserialization, and why are they important for data storage?",
  answer: "Serialization converts human-readable data into binary data for efficient storage or transmission, while deserialization converts binary data back into human-readable form."
},
{
  tag: "1.3",
  question: "What is serialization and deserialization?",
  answer: "Serialization converts human-readable data into binary data, while deserialization converts binary data back into human-readable form."
},
{
  tag: "1.3",
  question: "Explain the difference between text files and binary files in data storage. Include examples and advantages of each.",
  answer: "Text files are human-readable (e.g. .txt, .csv) but larger and slower, while binary files (e.g. images, audio, video) are compressed, faster, and not human-readable."
},
{
  tag: "1.3",
  question: "What is the Hadoop Distributed File System (HDFS)?",
  answer: "HDFS is a distributed file system that provides high availability and fault tolerance by storing redundant copies of data across multiple nodes."
},
{
  tag: "1.3",
  question: "What is the difference between primary storage and secondary storage?",
  answer: "Primary storage is volatile and used during execution, while secondary storage is non-volatile and persists data for later use."
},
{
  tag: "1.3",
  question: "What is the difference between text files and binary files?",
  answer: "Text files are human-readable and store characters, while binary files are machine-optimized, not human-readable, and provide better compression and faster access."
},
{
  tag: "1.3",
  question: "What is the function of the serving layer in Lambda architecture?",
  answer: "C. Combine batch and stream results into a unified data view."
},
{
  tag: "1.3",
  question: "What is the main difference between relational and NoSQL databases?",
  answer: "Relational databases enforce schema on write, whereas NoSQL databases typically use schema on read."
},
{
  tag: "1.3",
  question: "What is the main purpose of a data warehouse?",
  answer: "A data warehouse integrates data from multiple sources and is optimized for analytical queries."
},
{
  tag: "1.3",
  question: "What is unstructured data?",
  answer: "Unstructured data does not follow any predefined schema and includes text documents, images, audio, and video."
},
{
  tag: "1.3",
  question: "Which AWS services are used for storage and reporting in the Lambda architecture example?",
  answer: "Amazon Athena (data warehouse) and Amazon QuickSight (reporting and visualization)."
},
{
  tag: "1.3",
  question: "Which NoSQL database type is best suited for highly interconnected data?",
  answer: "Graph-oriented databases."
},
{
  tag: "1.3",
  question: "Which component in Hadoop manages distributed processing resources?\nA. NameNode\nB. DataNode\nC. YARN\nD. ZooKeeper",
  answer: "Correct answer: C. YARN."
},
{
  tag: "1.3",
  question: "Which factor mainly led to the rise of streaming data ingestion?\nA. Smaller data volumes\nB. Fixed reporting cycles\nC. Connected devices, social media, and mobile applications\nD. Lower storage costs",
  answer: "Correct answer: C. Connected devices, social media, and mobile applications."
},
{
  tag: "1.3",
  question: "Which is an advantage of binary storage over text storage?\nA. Easier to read by humans\nB. Larger file size\nC. Better compression and faster access\nD. No need for software to interpret",
  answer: "Correct answer: C. Better compression and faster access."
},
{
  tag: "1.3",
  question: "Which of the following is NOT typically part of the transformation step in ETL?\nA. Data cleaning\nB. Data standardisation\nC. Data harmonisation\nD. Data reporting",
  answer: "Correct answer: D. Data reporting."
},
{
  tag: "1.3",
  question: "Which of the following is a characteristic of a DAG-based data processing pipeline?\nA. Tasks can have circular dependencies\nB. Feedback loops are allowed\nC. Dependencies between tasks are clearly defined\nD. Tasks execute randomly",
  answer: "Correct answer: C. Dependencies between tasks are clearly defined."
},
{
  tag: "1.3",
  question: "Which of the following is an example of secondary storage?\nA. CPU cache\nB. RAM\nC. Solid State Drive (SSD)\nD. CPU registers",
  answer: "Correct answer: C. Solid State Drive (SSD)."
},
{
  tag: "1.3",
  question: "Which statement best describes unstructured data?\nA. It is directly machine-readable without preprocessing\nB. It always follows schema-on-read\nC. It is easily interpreted by humans but requires preprocessing for machines to extract meaningful information\nD. It cannot be analyzed",
  answer: "Correct answer: C. It is easily interpreted by humans but requires preprocessing for machines to extract meaningful information."
},
{
  tag: "1.3",
  question: "Which statement correctly describes streaming data?\nA. The total number of data entries is known in advance\nB. Data is processed once per week\nC. Data is unbounded and processed continuously\nD. Data must be stored before processing",
  answer: "Correct answer: C. Data is unbounded and processed continuously."
},
{
  tag: "1.3",
  question: "Which type of data typically follows schema-on-write?\nA. Unstructured data\nB. Semi-structured data\nC. Structured data\nD. Multimedia data",
  answer: "Correct answer: C. Structured data."
},
{
  tag: "1.3",
  question: "Why do many organizations prefer cloud-based data processing services over self-managed solutions?",
  answer: "Because cloud services provide efficient resource allocation, avoid setup and maintenance overhead, and offer managed, scalable solutions."
},
{
  tag: "1.3",
  question: "Why do organizations prefer managed cloud file systems over self-managed HDFS?",
  answer: "Managed cloud file systems reduce setup and maintenance effort while providing scalable, fault-tolerant distributed storage."
},
{
  tag: "1.3",
  question: "Why does HDFS support parallel data processing?",
  answer: "Because data is distributed across multiple nodes, allowing processing tasks to run simultaneously."
},
{
  tag: "1.3",
  question: "Why is the Kappa architecture considered easier to implement than Lambda?",
  answer: "Because it integrates batch and stream processing into a single processing layer, reducing complexity, maintenance effort, and security attack surface."
},
{
  tag: "1.3",
  question: "Give an example of a multi-model database.",
  answer: "Azure Cosmos DB."
},
{
  tag: "1.3",
  question: "What are the bronze, silver, and gold stages in a data lake?",
  answer: "Bronze stage stores raw data, silver stage stores cleaned and refined data, and gold stage stores fully prepared, analytics-ready data."
},
{
  tag: "1.3",
  question: "What are the five fundamental data storage categories according to IU?",
  answer: "File systems, data lakes, relational databases, data warehouses, and NoSQL databases."
},
{
  tag: "1.3",
  question: "What are relational databases (RDBMS) and what are their main characteristics?",
  answer: "Relational databases store structured data in tables with rows and columns, enforce a predefined schema, support referential integrity and data normalization, guarantee ACID properties, and use SQL for efficient querying."
},
{
  tag: "1.3",
  question: "What is structured data? Give examples.",
  answer: "Structured data follows a predefined schema and is stored in tabular form. Examples include relational databases, column-based NoSQL databases, CSV files, and Excel spreadsheets."
}

];
