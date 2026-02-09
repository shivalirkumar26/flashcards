const unit1Deck = [

/* =======================
   SECTION 1.1 – INGESTION & INTEGRATION
   ======================= */

{
  tag: "1.3",
  question: "How do file systems organize stored data?",
  answer: "File systems organize stored data in a hierarchical structure. At the top level, there is a root directory, which contains directories and subdirectories. These directories can further contain additional subdirectories and files. This hierarchical organization makes it easier to store, locate, access, and manage data on storage devices. File systems also maintain metadata about files, such as file name, size, location, permissions, and timestamps, which helps operating systems efficiently manage stored data."
},
{
  tag: "1.1",
  question: "What does ETL stand for in the context of data ingestion and integration?",
  answer: "ETL stands for Extract, Transform, Load. In the extract step, raw data is collected from various source systems. In the transform step, the extracted data is cleaned, standardized, harmonized, and converted into a suitable format. In the load step, the transformed data is stored in a target system such as a data warehouse or data lake for further analysis."
},
{
  tag: "1.1",
  question: "What does “no schema on write” mean, and where is it commonly used?",
  answer: "No schema on write means that data can be stored without enforcing a predefined schema at the time of storage. The structure of the data is not validated or restricted when it is written to storage. Instead, the schema is applied later when the data is read (schema on read). This approach is commonly used for semi-structured and unstructured data and is typical for NoSQL databases, file systems, and data lakes, where flexibility is required to store heterogeneous data from multiple sources."
},
{
  tag: "1.1",
  question: "What is data ingestion in the context of the data processing lifecycle?",
  answer: "Data ingestion is the first phase of the data processing lifecycle. It refers to the process of collecting, importing, and transferring data from various data sources into a data system. These sources can include operational databases, applications, sensors, files, or external systems. The purpose of data ingestion is to make data available for storage, processing, integration, and analysis in subsequent phases of the lifecycle."
},
{
  tag: "1.1",
  question: "Which statement about schema on write is correct? A. The schema is applied when data is queried  B. It is mainly used for unstructured data  C. The schema is enforced before data is stored  D. It eliminates the need for data integration",
  answer: "Correct answer: C. In schema on write, data must conform to a predefined schema before it is stored. This approach is typical for relational databases and data warehouses, where data quality and consistency are enforced at ingestion time."
},
{
  tag: "1.1",
  question: "What is meant by data integration, and why is it needed?",
  answer: "Data integration refers to the process of combining data from heterogeneous sources into a unified and consistent format. It is needed because data sources often differ in structure, file format, semantics, data types, naming conventions, and data quality. Without data integration, meaningful analysis across multiple data sources would not be possible, as the data would remain fragmented and inconsistent."
},
{
  tag: "1.1",
  question: "Which of the following best describes the relationship between data ingestion and data integration?\nA. Data integration happens before data ingestion\nB. Data ingestion and integration are identical processes\nC. Data ingestion collects data, while data integration harmonizes heterogeneous data\nD. Data integration replaces the need for data ingestion",
  answer: "Correct answer: C. Data ingestion focuses on collecting and importing data from source systems, while data integration addresses heterogeneity by harmonizing, standardizing, and unifying data from different sources into a consistent format."
},
{
  tag: "1.1",
  question: "Which statement about schema on write is correct?\nA. The schema is applied when data is queried\nB. It is mainly used for unstructured data\nC. The schema is enforced before data is stored\nD. It eliminates the need for data integration",
  answer: "Correct answer: C. Schema on write means that data must conform to a predefined schema before it is stored, which is typical for relational databases and data warehouses."
},
{
  tag: "1.1",
  question: "Which storage option is most suitable for unstructured data according to the IU material?\nA. Relational databases\nB. Column-oriented NoSQL databases\nC. File systems or BLOB storage\nD. Schema-on-write data warehouses",
  answer: "Correct answer: C. Unstructured data such as images, audio, video, and text documents is best stored in file systems or BLOB storage, as these systems do not require a predefined schema."
},
{
  tag: "1.1",
  question: "Which three types of data are typically handled during data ingestion according to the IU course?",
  answer: "The three types of data handled during data ingestion are structured data, semi-structured data, and unstructured data. Structured data follows a fixed schema and is typically stored in relational databases. Semi-structured data has a flexible structure, such as JSON or XML. Unstructured data has no predefined structure and includes text, images, audio, video, and binary files."
},
{
  tag: "1.3",
  question: "Why are joins less efficient in NoSQL databases compared to relational databases?",
  answer: "Joins are less efficient in NoSQL databases because they typically do not enforce strict schemas or referential integrity. As a result, relationships between data entities are not explicitly defined, and joins often require full scans of large datasets rather than indexed joins, which are common in relational databases."
},
{
  tag: "1.1",
  question: "Why is data ingestion and integration considered a critical first phase of the data processing lifecycle?",
  answer: "Data ingestion and integration are critical because all subsequent phases of the data processing lifecycle depend on the availability, consistency, and quality of the ingested data. If data is incorrectly ingested or poorly integrated, errors will propagate to storage, processing, analysis, reporting, and decision-making, resulting in unreliable outcomes."
},
{
  tag: "1.3",
  question: "Compare relational databases and NoSQL databases, highlighting all major differences.",
  answer: "Relational databases enforce schema on write, meaning data must conform to a predefined structure before storage. They provide strong consistency, referential integrity, and efficient joins using indexes, making them suitable for transactional systems with structured data. NoSQL databases typically use schema on read, offering flexible data models that support structured, semi-structured, and unstructured data. However, NoSQL databases often sacrifice strict referential integrity and efficient joins. Importantly, both relational and NoSQL databases can be implemented in distributed architectures."
},
{
  tag: "1.3",
  question: "Describe the four main types of NoSQL databases and give a typical use case for each.",
  answer: "The four main types of NoSQL databases are: Key-value databases, which store data as key–value pairs and are commonly used for session management, caching, and IoT data; Document-oriented databases, which store data as JSON, XML, or BSON documents and are used for content management and flexible data models; Column-oriented (wide-column) databases, which store data by columns and are optimized for analytical queries and aggregations; Graph-oriented databases, which store data as nodes and edges and are used for highly interconnected data such as social networks and recommendation systems."
},
{
  tag: "1.1",
  question: "What does ETL stand for in the context of data ingestion and integration?\nA. Extract, Transfer, Link\nB. Encode, Transform, Load\nC. Extract, Transform, Load\nD. Evaluate, Transform, Learn",
  answer: "Correct answer: C. Extract, Transform, Load."
},
{
  tag: "1.1",
  question: "Which three types of data are typically handled during data ingestion according to the IU course? Give examples.",
  answer: "Structured data includes tabular data stored in relational databases. Semi-structured data includes formats such as JSON, XML, and HTML, which have a flexible structure. Unstructured data includes images, audio files, video files, and other binary data that do not follow a predefined schema."
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
  answer: "Batch processing and stream processing differ mainly in how data is collected, processed, and handled over time. In batch processing, data is collected over a defined period and processed together as a batch. The data is bounded, meaning the size and number of records are known before processing starts. Batch jobs typically run at scheduled intervals, such as daily or monthly, and are commonly used for business intelligence, reporting, and historical analysis. Stream processing, on the other hand, processes data continuously as it arrives. The data is unbounded, meaning there is no defined beginning or end. Stream processing is often event-driven and enables real-time or near real-time processing with low latency, making it suitable for use cases such as IoT systems, monitoring, fraud detection, and real-time analytics."
},
{
  tag: "1.2",
  question: "What is the key principle that enables modern data processing frameworks to scale?",
  answer: "The key principle that enables modern data processing frameworks to scale is the distribution of storage and processing across multiple nodes. By distributing data and computation, tasks can be executed in parallel, which significantly improves performance, fault tolerance, and scalability when handling large volumes of data."
},
{
  tag: "1.1",
  question: "What is the role of the transform step in ETL?",
  answer: "The transform step in ETL is responsible for converting raw extracted data into a suitable format for storage and analysis. This includes cleaning incorrect or incomplete data, standardizing formats, harmonizing values across sources, resolving data inconsistencies, converting data types, and applying business rules. The goal of transformation is to ensure that data fits the target data model and can be reliably analyzed."
},
{
  tag: "1.2",
  question: "Which layers does the Lambda architecture consist of?",
  answer: "The Lambda architecture consists of three layers: the batch layer, which processes large volumes of historical data and produces accurate results; the speed (stream) layer, which processes real-time data with low latency; and the serving layer, which combines results from both batch and stream layers into a unified view that can be queried by applications and users."
},
{
  tag: "1.2",
  question: "Give an example of a typical batch processing job.",
  answer: "A typical batch processing job is collecting all customer orders generated over the last month and processing them together to generate a monthly sales report. This job runs at a scheduled time and processes a bounded dataset."
},
{
  tag: "1.2",
  question: "What is streaming data ingestion?",
  answer: "Streaming data ingestion refers to the process of continuously collecting and ingesting data as it is generated by data sources. Data is processed in real time or near real time, often using an event-driven approach. Streaming ingestion is commonly used for scenarios where immediate insights or actions are required, such as monitoring systems, IoT applications, and real-time analytics."
},
{
  tag: "1.2",
  question: "How is batch processing defined in the context of ETL?",
  answer: "In the context of ETL, batch processing is defined as the collection of raw data at fixed time intervals, followed by transformation and loading into a centralized storage system. Batch ETL jobs are typically scheduled and process bounded datasets, such as daily transaction logs or weekly summaries."
},
{
  tag: "1.2",
  question: "Name some Azure services that support stream processing.",
  answer: "Azure services that support stream processing include Azure Stream Analytics, Azure Databricks, HDInsight with Spark Streaming or Storm, Azure Functions, IoT Hubs, and Event Hubs. These services enable real-time or near real-time data ingestion and processing."
},
{
  tag: "1.2",
  question: "Name some use cases where streaming data ingestion is applied.",
  answer: "Streaming data ingestion is applied in use cases such as smart home applications, IoT infrastructure monitoring, logistics tracking, health monitoring systems, retail monitoring, fraud detection, and real-time system monitoring."
},
{
  tag: "1.3",
  question: "Name the four main types of NoSQL databases.",
  answer: "The four main types of NoSQL databases are key-value databases, document-oriented databases, column-oriented (wide-column) databases, and graph-oriented databases."
},
{
  tag: "1.2",
  question: "Name three open-source data processing frameworks mentioned in Section 1.2.",
  answer: "Three open-source data processing frameworks mentioned are MapReduce, Apache Spark, and Apache Kafka."
},
{
  tag: "1.2",
  question: "What is a Directed Acyclic Graph (DAG) in data processing?",
  answer: "A Directed Acyclic Graph (DAG) is a processing model in which data transformations are represented as tasks with defined inputs and outputs. These tasks are connected by directed edges that indicate execution order and dependencies. The graph is acyclic, meaning it does not contain feedback loops, ensuring that tasks execute in a clear and predictable sequence."
},
{
  tag: "1.2",
  question: "What is streaming data ingestion?",
  answer: "Streaming data ingestion is the continuous ingestion and processing of data as it is produced by source systems. Events are processed immediately or with minimal delay, enabling low-latency analytics and real-time insights."
},
{
  tag: "1.2",
  question: "What is the fundamental conceptual difference between batch and stream processing according to IU?",
  answer: "According to IU, the fundamental conceptual difference between batch and stream processing is that batch data is bounded, meaning the size and number of records are known in advance, whereas streaming data is unbounded and continuously generated without a defined end."
},
{
  tag: "1.2",
  question: "What is the objective of the Lambda architecture?",
  answer: "The objective of the Lambda architecture is to combine the strengths of batch processing and stream processing. It aims to achieve high analytical accuracy through batch processing while also providing low-latency results through stream processing."
},
{
  tag: "1.2",
  question: "What is the role of an orchestrator in a data processing pipeline?",
  answer: "An orchestrator supervises and manages the execution of tasks in a data processing pipeline. It coordinates task dependencies, schedules execution, runs tasks in the correct order, and tracks metadata such as execution status and failures. Typical components of an orchestrator include a scheduler, an executor, and a metadata repository."
},
{
  tag: "1.2",
  question: "Which factor mainly led to the rise of streaming data ingestion?\nA. Smaller data volumes\nB. Fixed reporting cycles\nC. Connected devices, social media, and mobile applications\nD. Lower storage costs",
  answer: "Correct answer: C. The rapid growth of connected devices, social media platforms, and mobile applications has led to continuous data generation, making streaming ingestion necessary."
},
{
  tag: "1.2",
  question: "Which Azure service provides a distributed data warehouse for advanced analytics?\nA. Azure Stream Analytics\nB. Azure Synapse\nC. Azure Functions\nD. Event Hubs",
  answer: "Correct answer: B. Azure Synapse provides a distributed data warehouse optimized for large-scale analytical workloads."
},
{
  tag: "1.2",
  question: "Which Azure services are commonly used for batch processing?",
  answer: "Azure services commonly used for batch processing include Azure Synapse, Azure Data Lake Analytics, HDInsight, and Azure Databricks. These services are designed to process large, bounded datasets efficiently."
},
{
  tag: "1.2",
  question: "What is the difference between batch processing and stream processing in data processing frameworks? (detailed explanation)",
  answer: "Batch processing operates on bounded datasets collected over a period of time and processed at scheduled intervals, often resulting in higher latency but high throughput. Stream processing handles unbounded data streams and processes events continuously or near real time, enabling low-latency responses and real-time analytics. The key distinction lies in whether the data is bounded or unbounded."
},
{
  tag: "1.2",
  question: "What is the role of the speed layer in the AWS Lambda architecture example?",
  answer: "In the AWS Lambda architecture example, the speed layer processes incoming data streams in near real time using services such as Kinesis Analytics. Its role is to detect anomalies or generate immediate insights before batch processing results are available."
},
{
  tag: "1.2",
  question: "Which AWS services are used for storage and reporting in the Lambda architecture example?",
  answer: "In the Lambda architecture example, Amazon Athena is used as the data warehouse for querying data, and Amazon QuickSight is used for reporting and data visualization."
},

/* =======================
   SECTION 1.3 – DATA STORAGE
   ======================= */

{
  tag: "1.3",
  question: "What is meant by data storage in the data processing lifecycle?",
  answer: "Data storage refers to the process of persisting data on physical hardware devices so that it can be retained and accessed later. It ensures that data collected and processed during earlier stages of the data processing lifecycle remains available for future processing, analysis, reporting, and decision-making."
},
{
  tag: "1.3",
  question: "What is direct attached storage (DAS)?",
  answer: "Direct attached storage (DAS) is a type of storage that is directly connected to a computer or server without using a network. Examples include internal hard drives, SSDs, and external USB drives. DAS provides fast access to data but lacks scalability and shared access compared to network-based storage systems."
},
{
  tag: "1.1",
  question: "What is meant by data transformation in the context of ETL?",
  answer: "Data transformation in the context of ETL refers to the process of converting raw data into a suitable format for storage and analysis. This includes cleaning data, correcting errors, standardising formats, harmonising values across sources, converting data types, and applying business rules so that the data can be reliably used in downstream systems."
},
{
  tag: "1.1",
  question: "What is semi-structured data? Give examples.",
  answer: "Semi-structured data is data that does not follow a rigid tabular schema but still contains structural elements such as tags or key–value pairs. Examples include HTML, XML, and JSON. This type of data is flexible and often generated by web applications, APIs, and IoT devices."
},
{
  tag: "1.3",
  question: "What is serialization and deserialization, and why are they important for data storage?",
  answer: "Serialization is the process of converting human-readable data into binary data so that it can be efficiently stored or transmitted by computer systems. Deserialization is the reverse process, where binary data is converted back into a human-readable format. These processes are important because binary formats allow better compression, faster access, and more efficient storage, while humans typically interact with readable formats."
},
{
  tag: "1.3",
  question: "What is serialization and deserialization?",
  answer: "Serialization is the process of converting human-readable data into binary data, while deserialization converts binary data back into human-readable form. These processes enable efficient machine processing and storage while still allowing human interpretation when needed."
},
{
  tag: "1.3",
  question: "Explain the difference between text files and binary files in data storage. Include examples and advantages of each.",
  answer: "Text files store data in a human-readable format, where characters can be directly interpreted by users. Examples include .txt and .csv files. Text files are easy to create, inspect, and edit but typically require more storage space and offer slower processing due to limited compression. Binary files store data in a machine-optimized format that is not human-readable. Examples include image, audio, video, and executable files. Binary files offer better compression and faster access but require software to interpret the data."
},
{
  tag: "1.3",
  question: "What is the Hadoop Distributed File System (HDFS)?",
  answer: "The Hadoop Distributed File System (HDFS) is a distributed file system designed to store large volumes of data across multiple machines. It provides fault tolerance and high availability by storing redundant copies of data blocks on different nodes. HDFS enables parallel data processing by allowing computation to be moved close to where the data is stored."
},
{
  tag: "1.3",
  question: "What is the difference between primary storage and secondary storage?",
  answer: "Primary storage is volatile memory used during program execution, such as RAM and CPU caches. It provides fast access but does not persist data when power is lost. Secondary storage is non-volatile and persists data for long-term use, such as hard drives and SSDs."
},
{
  tag: "1.3",
  question: "What is the difference between text files and binary files?",
  answer: "Text files are human-readable and store data as characters, while binary files store data in a machine-optimized format that is not human-readable. Binary files typically offer better compression and faster processing compared to text files."
},
{
  tag: "1.2",
  question: "What is the function of the serving layer in Lambda architecture?\nA. Execute batch jobs\nB. Perform stream ingestion\nC. Combine batch and stream results into a unified data view\nD. Store raw sensor data",
  answer: "Correct answer: C. The serving layer combines results from batch and stream layers into a unified view that can be queried."
},
{
  tag: "1.3",
  question: "What is the main difference between relational and NoSQL databases?",
  answer: "The main difference is that relational databases enforce schema-on-write, meaning data must conform to a predefined structure before storage, while NoSQL databases typically use schema-on-read, allowing more flexible data structures."
},
{
  tag: "1.3",
  question: "What is the main purpose of a data warehouse?",
  answer: "The main purpose of a data warehouse is to integrate data from multiple sources and provide an optimized environment for analytical queries and reporting, rather than transactional processing."
},
{
  tag: "1.1",
  question: "What is unstructured data?",
  answer: "Unstructured data does not follow any predefined schema and does not have a fixed structure when stored. Examples include text documents, images, audio files, and video files."
},
{
  tag: "1.2",
  question: "Which AWS services are used for storage and reporting in the Lambda architecture example?",
  answer: "In the Lambda architecture example, Amazon Athena is used as the data warehouse for querying data, and Amazon QuickSight is used for reporting and visualization."
},
{
  tag: "1.3",
  question: "Which NoSQL database type is best suited for highly interconnected data?\nA. Key-value\nB. Document-oriented\nC. Column-oriented\nD. Graph-oriented",
  answer: "Correct answer: D. Graph-oriented databases are designed for highly interconnected data."
},
{
  tag: "1.3",
  question: "Which component in Hadoop manages distributed processing resources?\nA. NameNode\nB. DataNode\nC. YARN\nD. ZooKeeper",
  answer: "Correct answer: C. YARN manages cluster resources and job scheduling."
},
{
  tag: "1.2",
  question: "Which factor mainly led to the rise of streaming data ingestion?\nA. Smaller data volumes\nB. Fixed reporting cycles\nC. Connected devices, social media, and mobile applications\nD. Lower storage costs",
  answer: "Correct answer: C. Continuous data generation from devices and applications made streaming necessary."
},
{
  tag: "1.3",
  question: "Which is an advantage of binary storage over text storage?\nA. Easier to read by humans\nB. Larger file size\nC. Better compression and faster access\nD. No need for software to interpret",
  answer: "Correct answer: C. Binary storage offers better compression and faster access."
},
{
  tag: "1.1",
  question: "Which of the following is NOT typically part of the transformation step in ETL?\nA. Data cleaning\nB. Data standardisation\nC. Data harmonisation\nD. Data reporting",
  answer: "Correct answer: D. Data reporting is a later phase, not part of transformation."
},
{
  tag: "1.2",
  question: "Which of the following is a characteristic of a DAG-based data processing pipeline?\nA. Tasks can have circular dependencies\nB. Feedback loops are allowed\nC. Dependencies between tasks are clearly defined\nD. Tasks execute randomly",
  answer: "Correct answer: C. DAGs clearly define task dependencies without feedback loops."
},
{
  tag: "1.3",
  question: "Which of the following is an example of secondary storage?\nA. CPU cache\nB. RAM\nC. Solid State Drive (SSD)\nD. CPU registers",
  answer: "Correct answer: C. SSDs are non-volatile secondary storage."
},
{
  tag: "1.3",
  question: "Which statement best describes unstructured data?\nA. It is directly machine-readable without preprocessing\nB. It always follows schema-on-read\nC. It is easily interpreted by humans but requires preprocessing for machines to extract meaningful information\nD. It cannot be analyzed",
  answer: "Correct answer: C. Unstructured data often needs preprocessing for machine analysis."
},
{
  tag: "1.2",
  question: "Which statement correctly describes streaming data?\nA. The total number of data entries is known in advance\nB. Data is processed once per week\nC. Data is unbounded and processed continuously\nD. Data must be stored before processing",
  answer: "Correct answer: C. Streaming data is continuous and unbounded."
},
{
  tag: "1.1",
  question: "Which type of data typically follows schema-on-write?\nA. Unstructured data\nB. Semi-structured data\nC. Structured data\nD. Multimedia data",
  answer: "Correct answer: C. Structured data requires a predefined schema."
},
{
  tag: "1.3",
  question: "Why do many organizations prefer cloud-based data processing services over self-managed solutions?",
  answer: "Organizations prefer cloud-based services because they provide efficient resource allocation, reduce setup and maintenance overhead, and offer managed, scalable solutions that adapt to changing workloads."
},
{
  tag: "1.3",
  question: "Why do organizations prefer managed cloud file systems over self-managed HDFS?",
  answer: "Managed cloud file systems reduce the operational effort required to deploy and maintain distributed storage systems while still providing scalability, fault tolerance, and high availability."
},
{
  tag: "1.3",
  question: "Why does HDFS support parallel data processing?",
  answer: "HDFS supports parallel data processing because data is distributed across multiple nodes, allowing multiple processing tasks to run simultaneously on different parts of the data."
},
{
  tag: "1.2",
  question: "Why is the Kappa architecture considered easier to implement than Lambda?",
  answer: "The Kappa architecture is easier to implement because it uses a single processing layer for both batch and stream data, reducing system complexity, maintenance effort, and operational overhead."
},
{
  tag: "1.3",
  question: "Give an example of a multi-model database.",
  answer: "An example of a multi-model database is Azure Cosmos DB, which supports multiple data models such as document, key-value, graph, and column-family."
},
{
  tag: "1.3",
  question: "What are the bronze, silver, and gold stages in a data lake?",
  answer: "The bronze stage stores raw, unprocessed data. The silver stage stores cleaned and refined data. The gold stage stores fully prepared, high-quality, analytics-ready data used for reporting and advanced analytics."
},
{
  tag: "1.3",
  question: "What are the five fundamental data storage categories according to IU?",
  answer: "The five fundamental data storage categories are file systems, data lakes, relational databases, data warehouses, and NoSQL databases."
},
{
  tag: "1.3",
  question: "What are relational databases (RDBMS) and what are their main characteristics?",
  answer: "Relational databases store structured data in tables with rows and columns, enforce predefined schemas, support referential integrity and normalization, guarantee ACID properties, and use SQL for efficient querying."
},
{
  tag: "1.1",
  question: "What is structured data? Give examples.",
  answer: "Structured data follows a predefined schema and is stored in tabular form. Examples include relational databases, column-based NoSQL databases, CSV files, and Excel spreadsheets."
},

/* =======================
   SECTION 1.4 – DATA ANALYSIS
   ======================= */

{
  tag: "1.4",
  question: "What is the purpose of data analysis in the data processing lifecycle?",
  answer: "The purpose of data analysis is to gain insights, information, and knowledge from stored data. Data storage itself is not the final goal of data management; instead, organizations aim to create added value by analyzing data. Data analysis transforms raw or processed data into meaningful insights that support understanding, prediction, and decision-making within an organization."
},
{
  tag: "1.4",
  question: "Why is data analysis not considered a self-purpose in data management?",
  answer: "Data analysis is not a self-purpose because the ultimate goal of data management is not to store or process data, but to derive insights and support decisions. Without analysis, stored data has no practical value. Data analysis enables organizations to understand past events, anticipate future developments, and choose optimal actions."
},
{
  tag: "1.4",
  question: "What is descriptive data analytics, and what types of insights does it provide?",
  answer: "Descriptive data analytics focuses on explaining past or present events. It analyzes historical data to understand what has happened or what is currently happening. Typical methods include statistical summaries, reports, dashboards, spreadsheets, and visual infographics. Descriptive analytics can also include more advanced techniques such as root-cause analysis to identify the reasons behind observed events, such as system failures."
},
{
  tag: "1.4",
  question: "What is predictive data analytics, and how does it use historical data?",
  answer: "Predictive data analytics aims to forecast future events by learning patterns and correlations from historical data. Data-driven models are trained on past observations and use these learned relationships to predict future outcomes, such as stock prices, customer churn probabilities, or future demand. Predictive analytics projects past behavior into the future using statistical and machine learning models."
},
{
  tag: "1.4",
  question: "What is prescriptive data analytics, and how does it differ from predictive analytics?",
  answer: "Prescriptive data analytics evaluates different future scenarios and recommends actions that lead to the most favorable outcomes. While predictive analytics forecasts what is likely to happen, prescriptive analytics suggests what should be done. It is often used in optimization problems, such as maximizing production efficiency, planning logistics, or analyzing climate impact scenarios."
},
{
  tag: "1.4",
  question: "What is machine learning, and how does it differ from traditional programming?",
  answer: "Machine learning is the ability of programs to automatically extract informative patterns from data without explicit step-by-step instructions. In traditional programming, rules are manually defined by developers. In machine learning, models learn rules and patterns directly from data, making them flexible and capable of adapting to new information."
},
{
  tag: "1.4",
  question: "How are artificial intelligence, machine learning, and deep learning related?",
  answer: "Artificial intelligence is a broad field that aims to create intelligent systems. Machine learning is a subset of artificial intelligence that focuses on learning patterns from data. Deep learning is a specialized subfield of machine learning that uses neural networks with many layers to learn complex representations, particularly from large or non-tabular datasets."
},
{
  tag: "1.4",
  question: "On what type of data is machine learning typically performed in data management systems?",
  answer: "Machine learning is often performed on structured, tabular data stored in data lakes or data warehouses. Each row represents a data point or sample, while columns represent attributes or features. One column may represent the label or target variable that the model aims to predict."
},
{
  tag: "1.4",
  question: "What is data partitioning into training and testing sets, and why is it important?",
  answer: "Data partitioning divides labeled data into a training set and a testing set. The training set is used to build the machine learning model, while the testing set is used to evaluate its prediction quality. This separation is important to assess how well the model generalizes to unseen data and to avoid overfitting."
},
{
  tag: "1.4",
  question: "What is supervised learning, and what role do labels play in it?",
  answer: "Supervised learning uses labeled data, meaning each data point has a known target value. The model learns the relationship between input features and the target variable during the training phase. Labels provide explicit guidance to the learning algorithm, allowing it to make predictions for unseen data during inference."
},
{
  tag: "1.4",
  question: "What is the difference between classification and regression tasks in supervised learning?",
  answer: "Classification tasks predict categorical outcomes, such as whether an email is spam or not. Regression tasks predict numerical values, such as future temperatures or stock prices. Although linear regression is a common regression method, regression tasks are not limited to linear relationships."
},
{
  tag: "1.4",
  question: "What is unsupervised learning, and how does it differ from supervised learning?",
  answer: "Unsupervised learning works on unlabeled data and aims to discover hidden patterns without predefined target variables. Unlike supervised learning, there are no labels guiding the learning process. Instead, the algorithms identify structure, similarity, or anomalies within the data."
},
{
  tag: "1.4",
  question: "What is clustering, and what are typical clustering algorithms?",
  answer: "Clustering assigns data points to groups or clusters that are not known before analysis. The goal is to group similar data points together. Typical clustering algorithms include k-Means, Hierarchical Clustering, and DBSCAN. Clustering is often used for customer segmentation or survey analysis."
},
{
  tag: "1.4",
  question: "What is anomaly detection, and where is it commonly applied?",
  answer: "Anomaly detection identifies data points that deviate significantly from normal patterns. These anomalies may indicate fraud, system failures, or security breaches. Common applications include financial fraud detection, insurance fraud analysis, and intrusion detection in information systems."
},
{
  tag: "1.4",
  question: "What is dimensionality reduction, and why is it useful?",
  answer: "Dimensionality reduction reduces the number of features in a dataset while preserving as much information as possible. It improves interpretability, reduces computational complexity, and helps avoid the curse of dimensionality. Typical techniques include Principal Component Analysis (PCA), t-SNE, and Linear Discriminant Analysis (LDA)."
},
{
  tag: "1.4",
  question: "What are artificial neural networks (ANNs), and what is a perceptron?",
  answer: "Artificial neural networks are inspired by biological neural networks and consist of interconnected nodes called neurons. A perceptron is the basic unit of an ANN. It combines weighted inputs and activates an output if a threshold is exceeded. Perceptrons form the foundation of more complex neural networks."
},
{
  tag: "1.4",
  question: "What is backpropagation, and why is it important in neural networks?",
  answer: "Backpropagation is a training algorithm used in neural networks to adjust weights based on prediction errors. It propagates the error backward through the network to update weights, enabling the model to learn suitable parameter values and improve performance."
},
{
  tag: "1.4",
  question: "What makes deep learning different from traditional machine learning?",
  answer: "Deep learning uses neural networks with many hidden layers, allowing the model to learn complex, nonlinear relationships automatically. It is particularly effective for large datasets and non-tabular data such as images, videos, and text. However, it is not always superior to simpler models, especially for small datasets."
},
{
  tag: "1.4",
  question: "What is time series analysis, and what makes time-indexed data special?",
  answer: "Time series analysis focuses on data indexed by time and aims to forecast future values based on historical observations. The time index is crucial because the order of data points matters. Time series models rely on temporal dependencies and lagged values rather than multiple independent features."
},
{
  tag: "1.4",
  question: "How does time series analysis differ from supervised machine learning?",
  answer: "In supervised machine learning, multiple features are used to predict a target variable. In time series analysis, future values are typically predicted based on a single time-indexed variable and its past values. Although the distinction is becoming blurred, the time index remains a critical aspect of time series data."
},
{
  tag: "1.4",
  question: "What is CRISP-DM, and why is it important in data science projects?",
  answer: "CRISP-DM is the Cross-Industry Standard Process for Data Mining. It provides a structured framework for developing data science and machine learning projects. It emphasizes iterative development, close collaboration between stakeholders, and alignment between business goals and technical solutions."
},
{
  tag: "1.4",
  question: "What are the six phases of the CRISP-DM model?",
  answer: "The six phases of CRISP-DM are business understanding, data understanding, data preparation, modeling, evaluation, and deployment. These phases are iterative and interdependent rather than strictly sequential."
},
{
  tag: "1.4",
  question: "Why is collaboration between data management and machine learning teams important in CRISP-DM?",
  answer: "Many CRISP-DM phases, such as data understanding, data preparation, and deployment, require close collaboration between data management and machine learning teams. High-quality data, proper storage, governance, and deployment infrastructure are essential for building reliable and valuable machine learning models."
},
{
  tag: "1.4",
  question: "Why must data deletion and data protection be considered at the end of the data processing lifecycle?",
  answer: "At the end of the data processing lifecycle, organizations must define when and how data should be deleted to comply with data protection principles such as data minimization and storage limitation. Proper data deletion helps ensure legal compliance and ethical data management."
},
/* =======================
   SECTION 1.5 – REPORTING
   ======================= */

{
  tag: "1.5",
  question: "Why is reporting considered the final phase of the data processing lifecycle?",
  answer: "Reporting is considered the final phase of the data processing lifecycle because it is the stage where the results of all previous phases—data ingestion, storage, processing, and analysis—are presented to users in a comprehensible form. The goal of data processing is not data storage itself but the generation of insights and knowledge that support decision-making. Reporting delivers this added value through visualizations, dashboards, and reports."
},
{
  tag: "1.5",
  question: "What is reporting in the context of the data processing lifecycle?",
  answer: "Reporting provides visualizations, dashboards, and textual reports that allow users to gain insights from aggregated and processed data. It transforms analytical results into an understandable and actionable format."
},
{
  tag: "1.5",
  question: "What is Business Intelligence (BI), and how is it related to reporting?",
  answer: "Business Intelligence refers to the processes and tools used for data analysis to obtain actionable insights about an organization’s operations. Reporting is a core component of BI, as BI tools generate dashboards, visualizations, and reports that support data-driven decision-making."
},
{
  tag: "1.5",
  question: "Why is Business Intelligence not limited to business decisions?",
  answer: "Although called Business Intelligence, BI techniques apply to any data-driven decision-making context. Examples include urban planning, logistics, environmental policies, spatial decision support systems, and other non-business domains where decisions are based on data analysis."
},
{
  tag: "1.5",
  question: "What is the main objective of reporting and BI?",
  answer: "The main objective of reporting and BI is to improve decisions by basing them on information and evidence rather than intuition or traditional rules. Organizations use reporting to understand their operations and optimize outcomes."
},
{
  tag: "1.5",
  question: "What is a Key Performance Indicator (KPI)?",
  answer: "A Key Performance Indicator (KPI) is a meaningful metric that is used to measure the performance of an activity within an organization. KPIs help organizations monitor progress toward their goals and evaluate operational success."
},
{
  tag: "1.5",
  question: "Why are KPIs important in reporting?",
  answer: "KPIs are important because they provide measurable indicators that allow organizations to monitor performance, identify issues, track progress, and support informed decision-making based on data."
},
{
  tag: "1.5",
  question: "Which insights can be gained from Business Intelligence reporting?",
  answer: "BI reporting enables evidence-based decision-making, real-time analytics, detailed insights into organizational processes, discovery of business opportunities, control of planning commitments, and monitoring of operations using KPIs."
},
{
  tag: "1.5",
  question: "Why do BI applications need to integrate data from the entire organization?",
  answer: "BI applications aim to reflect the reality of the organization. To do this accurately, they must integrate information from the entire organization, including different departments and systems, as well as internal and external data sources."
},
{
  tag: "1.5",
  question: "What is an ERP system, and what role does it play in BI reporting?",
  answer: "An ERP (Enterprise Resource Planning) system is an application used to plan and organize a company’s resources. In BI reporting, ERP systems provide internal data such as material costs, financial information, and operational efficiency."
},
{
  tag: "1.5",
  question: "What is a MES system, and how is it relevant for BI reporting?",
  answer: "A MES (Manufacturing Execution System) controls and monitors the manufacturing process from raw materials to finished products. In BI reporting, MES systems provide detailed production data used to analyze operational efficiency and production performance."
},
{
  tag: "1.5",
  question: "Why are external data sources relevant for BI reporting?",
  answer: "External data sources, such as customer reviews or competitor pricing, provide additional context that cannot be obtained from internal systems alone. They help assess competitiveness, market acceptance, and profitability."
},
{
  tag: "1.5",
  question: "Give an example of how internal and external data are combined in BI.",
  answer: "To analyze production costs, BI tools may combine internal ERP and MES data (material costs and operational efficiency) with external data such as competitor prices or customer feedback to evaluate competitiveness and profitability."
},
{
  tag: "1.5",
  question: "What are the main characteristics of modern BI tools?",
  answer: "Modern BI tools are designed to be easy to use, support data integration, provide graphical user interfaces for ETL processes, and enable visual and interactive exploration of data through dashboards and web-based reports."
},
{
  tag: "1.5",
  question: "What role does ETL play in BI tools?",
  answer: "BI tools often include ETL functionality that allows users to integrate data from multiple sources, transform it into a suitable format, and load it into analytical systems using graphical user interfaces."
},
{
  tag: "1.5",
  question: "What types of reports do BI tools typically support?",
  answer: "BI tools typically support dashboards, interactive web-based reports, visual analytics, and textual summaries that allow users to explore and understand data."
},
{
  tag: "1.5",
  question: "Which of the following best describes the goal of BI reporting?\nA. Data storage\nB. Algorithm training\nC. Decision support through insights\nD. Data ingestion",
  answer: "Correct answer: C. Decision support through insights."
},
{
  tag: "1.5",
  question: "Which systems are commonly used as data sources for BI reporting?\nA. ERP systems only\nB. MES systems only\nC. Internal and external systems\nD. Only external data sources",
  answer: "Correct answer: C. Internal and external systems."
},
{
  tag: "1.5",
  question: "Name examples of modern BI tools.",
  answer: "Examples of modern BI tools include Microsoft Power BI, Tableau, and Qlik Sense."
}

];
