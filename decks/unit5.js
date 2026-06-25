const unit5Deck = [

  {
    "tag": "5.1",
    "question": "What is Apache Hadoop, and what does it provide?",
    "answer": "Apache Hadoop entails an open-source framework that consists of an ecosystem of technologies. It provides a platform for affordable, open-source, reliable, and scalable data storage and analysis. Since the platform is scalable, it can be easily expanded."
  },
  {
    "tag": "5.1",
    "question": "Who created Hadoop, when was it conceived, and what were they originally working on?",
    "answer": "Hadoop was initially conceived in 2005 by Doug Cutting and Mike Cafarella. At the time, they were working on a technology aimed at effectively distributing Apache Nutch — a web crawler that is extensible and scalable, enables fine-grained configuration, and can accommodate various data acquisition tasks."
  },
  {
    "tag": "5.1",
    "question": "Which two Google technologies were incorporated into Hadoop, and what years were they published?",
    "answer": "The distributed Google File System (GFS), outlined by Ghemawat et al. (2003), and MapReduce, described by Dean and Ghemawat (2004). These form the basis of two core Hadoop components: HDFS and MapReduce."
  },
  {
    "tag": "5.1",
    "question": "Who manages and maintains Hadoop today?",
    "answer": "Hadoop is managed and maintained by a global community of software developers and contributors who collaborate with the non-profit Apache Software Foundation (ASF)."
  },
  {
    "tag": "5.1",
    "question": "Name the four official Hadoop modules included in the Apache Software Foundation project.",
    "answer": "Hadoop Common, Hadoop Distributed File System (HDFS), Hadoop MapReduce, and Hadoop YARN (Yet Another Resource Negotiator)."
  },
  {
    "tag": "5.1",
    "question": "What is Hadoop Common?",
    "answer": "Hadoop Common includes all the commonly shared libraries and utilities in support of the other Hadoop modules."
  },
  {
    "tag": "5.1",
    "question": "MCQ: Which Hadoop module is the collective name for the shared libraries that support all other Hadoop modules?\nA) Hadoop YARN\nB) Hadoop MapReduce\nC) Hadoop Common\nD) Hadoop HDFS",
    "answer": "C) Hadoop Common — it includes all the commonly shared libraries and utilities in support of the other Hadoop modules."
  },
  {
    "tag": "5.1",
    "question": "What problem does HDFS solve, and how does it solve it?",
    "answer": "A key shortcoming of storing large datasets on numerous disks is that disk seek operations result in latency — seek operations are relatively slower than data transfer operations. HDFS solves this by storing very large datasets across clusters of inexpensive commodity machines shared between users, so data can be accessed and processed in parallel, much faster."
  },
  {
    "tag": "5.1",
    "question": "What is the fundamental data processing concept HDFS applies, and what does this make it most suitable for?",
    "answer": "HDFS applies a 'write-once-read-many-times' pattern — data are written once and read many times. This makes HDFS most suitable for the batch processing of data. HDFS does not provide low-latency access to data; instead, it primarily aims to provide high throughput rates."
  },
  {
    "tag": "5.1",
    "question": "How does HDFS provide fault tolerance, and how many copies of data does it keep by default?",
    "answer": "HDFS contains built-in mechanisms to identify and work around hardware failures. Data are replicated and multiple copies are stored automatically, providing a high level of fault tolerance. HDFS keeps three copies of the data by default. Jobs are automatically redirected to other nodes upon node failures, without any noticeable interruptions to users."
  },
  {
    "tag": "5.1",
    "question": "Name the three components of the HDFS architecture.",
    "answer": "Name nodes, data nodes, and blocks (of data)."
  },
  {
    "tag": "5.1",
    "question": "What is a name node in HDFS?",
    "answer": "The name node consists of hardware that contains an operating system and name node software. It acts as a master server to manage the file system, regulate access to files, and execute file system operations. Each name node is associated with a cluster of data nodes."
  },
  {
    "tag": "5.1",
    "question": "What is a data node in HDFS?",
    "answer": "A data node consists of hardware containing an operating system as well as data node software. Data nodes manage the storage of data. They perform read and write operations on the request of the client. They also create, delete, and replicate blocks on the request of the name node, and move blocks of data over the network."
  },
  {
    "tag": "5.1",
    "question": "MCQ: Which HDFS component contains an operating system and acts as a master server to manage the file system and regulate access to files?\nA) Data block\nB) Data node\nC) Name node\nD) Name block",
    "answer": "C) Name node — it consists of hardware that contains an operating system and name node software, acting as a master server to manage the file system, regulate access to files, and execute file system operations."
  },
  {
    "tag": "5.1",
    "question": "MCQ: Which HDFS component performs read and write operations on the request of the client, and creates, deletes, and replicates blocks on the request of the name node?\nA) Name node\nB) Data block\nC) Name block\nD) Data node",
    "answer": "D) Data node — it consists of hardware containing an operating system and data node software; it manages storage, performs read/write operations for clients, and creates, deletes, and replicates blocks on the name node's request."
  },
  {
    "tag": "5.1",
    "question": "What is the default block size in HDFS, and can it be changed?",
    "answer": "The default block size in HDFS is 128 MB. However, block sizes are frequently increased in the HDFS configuration as required by the data being stored and managed."
  },
  {
    "tag": "5.1",
    "question": "What is Hadoop MapReduce, and what concept does it apply?",
    "answer": "MapReduce is essentially a batch query processor and processing system — it runs ad-hoc queries against large datasets and gets results reasonably fast. It runs on top of HDFS, receiving requests and scheduling jobs optimally to minimize network traffic. It applies the concept of 'divide and conquer' to subdivide a problem into multiple individual subtasks so that tasks can be executed faster in parallel."
  },
  {
    "tag": "5.1",
    "question": "Describe the MapReduce process using key-value pairs.",
    "answer": "Both unstructured and semi-structured data are delivered to the 'map' function as a series of key-value pairs. The output of the map function is a set of other key-value pairs. A 'reduce' function then performs aggregation to gather a final set of results."
  },
  {
    "tag": "5.1",
    "question": "MCQ: Which two functional programming functions does MapReduce build upon?\nA) Split and merge\nB) Extract and load\nC) Map and reduce\nD) Divide and conquer",
    "answer": "C) Map and reduce — MapReduce builds upon the functional programming functions 'map' and 'reduce,' as they are applied to lists of input data."
  },
  {
    "tag": "5.1",
    "question": "What is Hadoop YARN, and what key improvement did it bring to Hadoop?",
    "answer": "YARN (Yet Another Resource Negotiator) is a cluster resource management platform. It significantly improves the power of Hadoop clusters by separating the management of resources and the scheduling of jobs into two discrete processes (daemons). Crucially, YARN allows any distributed program — not only MapReduce — to operate on data in a Hadoop cluster. Examples include Apache Spark, Apache Flink, and Amazon Kinesis."
  },
  {
    "tag": "5.1",
    "question": "Define 'daemons' as used in this section.",
    "answer": "Daemons are processes that run in the background when using a platform such as Hadoop."
  },
  {
    "tag": "5.1",
    "question": "What are the two key YARN components, and what does each do?",
    "answer": "A scheduler — allocates tasks to applications. An applications manager — accepts jobs for execution. Users can also specify resources to be reserved to ensure essential jobs are executed first."
  },
  {
    "tag": "5.1",
    "question": "What is the YARN federation feature?",
    "answer": "With the YARN federation feature, multiple YARN sub-clusters can be transparently wired together so that they appear to be a single large cluster, enabling operations at a larger scale."
  },
  {
    "tag": "5.1",
    "question": "MCQ: Which of the following best describes what YARN enables that MapReduce alone could not?\nA) YARN enables HDFS to store data on commodity hardware\nB) YARN enables any distributed program — not only MapReduce — to operate on data in a Hadoop cluster\nC) YARN enables the write-once-read-many-times pattern for batch processing\nD) YARN enables data to be replicated across three nodes by default",
    "answer": "B) YARN enables any distributed program — not only MapReduce — to operate on data in a Hadoop cluster, providing resource management capabilities for scalability and compatibility beyond MapReduce workloads."
  },
  {
    "tag": "5.1",
    "question": "Name the ASF-related projects commonly considered integral parts of the Hadoop platform.",
    "answer": "Apache Pig, Mahout, HBase, Tez, Flume, Spark, Zookeeper, and Hive."
  },
  {
    "tag": "5.1",
    "question": "What is Flume, and how does its pipeline work?",
    "answer": "Flume is a framework used to populate Hadoop with large amounts of data, especially streaming data — it is used to distribute semi-structured and unstructured data. Flume entails a pipeline with sources, channels, and sinks. The Flume source consumes events from an external source (such as a web server) and stores them in a passive storage system called a channel. The channel keeps events until they are consumed by the sink. When the sink consumes events, they are deleted from the channel and delivered to an external target — a distributed file system."
  },
  {
    "tag": "5.1",
    "question": "What is Sqoop, what type of data does it distribute, and what is its current status?",
    "answer": "Sqoop is a platform used to distribute structured data. It transfers bulk quantities of structured data between relational data stores and the distributed file system. It can import data from external relational databases to HDFS and HBase, and export data from a Hadoop cluster to a relational database or DWH. It is used with platforms such as Teradata, Oracle, MySQL, Postgres, Data Vault, and Snowflake. The Apache Sqoop project is officially retired; however, the tool is still widely used for bulk transfers of relational data."
  },
  {
    "tag": "5.1",
    "question": "MCQ: Which tool is used to distribute semi-structured and unstructured data into Hadoop, especially streaming data?\nA) Sqoop\nB) HBase\nC) Flume\nD) YARN",
    "answer": "C) Flume — it is a framework used to populate Hadoop with large amounts of data, especially streaming data, via a pipeline of sources, channels, and sinks."
  },
  {
    "tag": "5.1",
    "question": "What is HBase, and what capabilities does it provide?",
    "answer": "Apache HBase is the Hadoop database — a non-relational, distributed, wide-column store. It runs on top of HDFS and provides compression, in-memory operations, indexing, and transactional capabilities. Multiple large, non-relational tables can be stored distributed beneath HDFS."
  },
  {
    "tag": "5.1",
    "question": "What processing languages and tools can be used to process raw bulk data in HDFS, and what is each used for?",
    "answer": "Initially, MapReduce jobs had to be programmed using languages such as Java and Python. With the introduction of YARN, other data processing models became possible, such as Spark and Hive. Hive is typically used to process batches of data, while Spark is used to process real-time data streams. The formal query capabilities that HiveQL offers mean that Hadoop can be used as a DWH-type system."
  },
  {
    "tag": "5.1",
    "question": "Long Answer: Explain Section 5.1 in full — Hadoop's origin and purpose, its four official modules and what each does, the three HDFS components (name node, data node, blocks), MapReduce's key-value pair process, YARN's role and components, and the key related projects (Flume, Sqoop, HBase).",
    "answer": "Apache Hadoop is an open-source framework that provides a platform for affordable, open-source, reliable, and scalable data storage and analysis. It was conceived in 2005 by Doug Cutting and Mike Cafarella, originally working on distributing Apache Nutch. They incorporated two Google technologies — the Google File System (GFS, 2003) and MapReduce (2004) — forming the basis of Hadoop's two core components. Hadoop is today managed by a global community collaborating with the Apache Software Foundation (ASF). The four official modules are: (1) Hadoop Common — shared libraries and utilities supporting all other modules; (2) Hadoop Distributed File System (HDFS) — stores very large datasets across clusters of inexpensive commodity machines in parallel, applying a write-once-read-many-times pattern for high throughput batch processing; it keeps three copies of data by default for fault tolerance; its architecture consists of name nodes (master servers managing the file system, containing an OS and name node software), data nodes (manage storage, perform read/write operations, create/delete/replicate blocks on name node's request, containing an OS and data node software), and blocks (default 128 MB, frequently increased); (3) Hadoop MapReduce — a batch query processor running ad-hoc queries against large datasets; applies divide and conquer by subdividing problems into parallel subtasks; delivers unstructured and semi-structured data to the map function as key-value pairs, outputs another set of key-value pairs, then the reduce function aggregates them into a final result; (4) Hadoop YARN — a cluster resource management platform that separates resource management and job scheduling into two daemons (a scheduler and an applications manager); crucially, YARN enables any distributed program — not only MapReduce — to run on a Hadoop cluster (e.g., Spark, Flink, Kinesis); its federation feature wires multiple sub-clusters to appear as one large cluster. Related projects integral to the Hadoop platform include: Flume (distributes semi-structured and unstructured data via a source-channel-sink pipeline), Sqoop (distributes structured data between relational databases and HDFS; officially retired but widely used), and HBase (a non-relational, distributed, wide-column store running on top of HDFS providing compression, in-memory operations, indexing, and transactional capabilities)."
  },
  
  {
    "tag": "5.2",
    "question": "What is Apache Hive?",
    "answer": "Apache Hive is a data warehousing software that enables the reading, writing, and management of large and diverse datasets that reside in distributed storage. The big data are queried using a typical SQL syntax."
  },
  {
    "tag": "5.2",
    "question": "What are the five objectives of Hive?",
    "answer": "To maximize scalability, performance, extensibility, fault tolerance, and loose-coupling with input formats."
  },
  {
    "tag": "5.2",
    "question": "Define 'loose-coupling' as used in this section.",
    "answer": "Loose-coupling is an approach to interconnecting components that ensures they are weakly associated so that they have minimal effect on each other. In the context of Hive, it refers to the ability of Hive to handle different data input formats without tightly integrating or depending on the specifics of each format."
  },
  {
    "tag": "5.2",
    "question": "MCQ: Which of the following is NOT one of the five objectives of Hive?\nA) Scalability\nB) Fault tolerance\nC) Normalization\nD) Loose-coupling with input formats",
    "answer": "C) Normalization — the five objectives of Hive are to maximize scalability, performance, extensibility, fault tolerance, and loose-coupling with input formats."
  },
  {
    "tag": "5.2",
    "question": "What features does Hive provide?",
    "answer": "Hive provides easy access to large sets of data via SQL, enabling ETL, reporting, and analysis. It provides a mechanism to impose a structure on various unstructured data formats. It also provides access to files stored in distributed storage systems such as HDFS or HBase, and enables the execution of queries using tools such as Tez, Spark, or MapReduce."
  },
  {
    "tag": "5.2",
    "question": "How is Hive described in terms of its RDBMS-type features, and what is unique about its data storage requirement?",
    "answer": "Hive is described as an interactive platform with typical RDBMS-type features, such as indexes and transactions. However, it is not required for data to be stored in a standardized format. Instead, Hive uses built-in connectors for unstructured and semi-structured files."
  },
  {
    "tag": "5.2",
    "question": "Name the file formats that Hive's built-in connectors support.",
    "answer": "Comma-separated values (CSV) text files, tab-separated values (TSV) text files, Apache ORC, and Apache Parquet, among other formats."
  },
  {
    "tag": "5.2",
    "question": "How do users connect to Hive data, and what query syntax is used?",
    "answer": "Users connect to the data via a command line tool and a Java Database Connectivity (JDBC) driver. Data are queried using a SQL-type syntax called HiveQL, which uses standard SQL functionalities."
  },
  {
    "tag": "5.2",
    "question": "What is HiveQL, and how can it be extended?",
    "answer": "HiveQL is a SQL-type syntax used to query data in Hive, using standard SQL functionalities. HiveQL is extendable through user code and can include user-defined functions (UDFs), user-defined table functions (UDTFs), and user-defined aggregate functions (UDAFs)."
  },
  {
    "tag": "5.2",
    "question": "MCQ: Which three types of user-defined extensions can be included in HiveQL?\nA) UDFs, UDTFs, and UDAFs\nB) UDFs, UDTs, and UDAFs\nC) UDLs, UDTFs, and UDAFs\nD) UDFs, UDTFs, and UDAs",
    "answer": "A) User-defined functions (UDFs), user-defined table functions (UDTFs), and user-defined aggregate functions (UDAFs)."
  },
  {
    "tag": "5.2",
    "question": "What three tools does Hive use to ensure speedy retrieval of queries?",
    "answer": "Hive LLAP (Live Long And Process), YARN, and Slider — an application that allows users to create and run different versions of heterogeneous long-running applications."
  },
  {
    "tag": "5.2",
    "question": "What is Hive LLAP?",
    "answer": "Hive LLAP stands for Live Long And Process — it is one of the tools Hive uses to ensure the speedy retrieval of queries."
  },
  {
    "tag": "5.2",
    "question": "What is HPL SQL in the context of Hive?",
    "answer": "HPL SQL stands for Hive Hybrid Procedural SQL — it is a procedural language tool that Hive enables the implementation of."
  },
  {
    "tag": "5.2",
    "question": "Name the two main components of Hive.",
    "answer": "HCatalog and WebHCat."
  },
  {
    "tag": "5.2",
    "question": "What is HCatalog, and what does it provide?",
    "answer": "HCatalog provides a table and storage management layer. It enables the abstraction of tables so that users are presented with a relational view of the data stored in HDFS, regardless of the format of the data. HCatalog also supports various data processing tools, including Apache Pig and MapReduce, to facilitate the reading and writing of all the data on the grid."
  },
  {
    "tag": "5.2",
    "question": "How do Hive data models represent tables, and what is unique about the relationships between those tables?",
    "answer": "Hive data models represent tables similarly to relational database tables, except that there are no relations between the tables in the model."
  },
  {
    "tag": "5.2",
    "question": "MCQ: Which Hive component provides a table and storage management layer that presents users with a relational view of data stored in HDFS, regardless of the data format?\nA) WebHCat\nB) HiveQL\nC) HCatalog\nD) Slider",
    "answer": "C) HCatalog — it provides a table and storage management layer and enables the abstraction of tables so that users are presented with a relational view of data stored in HDFS, regardless of the format of the data."
  },
  {
    "tag": "5.2",
    "question": "What is WebHCat, what was it formerly known as, and what does it offer?",
    "answer": "WebHCat (formerly known as Templeton) offers HCatalog a REpresentational State Transfer (REST) application programming interface (API). It enables the running of MapReduce (or YARN), Pig, or Hive jobs. It also performs Hive metadata operations through a REST HTTP interface, meaning HTTP requests can be made from within any application to access MapReduce/YARN, Pig, Hive, and HCatalog data definition language (DDL), while the data and code are maintained in HDFS."
  },
  {
    "tag": "5.2",
    "question": "MCQ: What was WebHCat formerly known as?\nA) HCatalog\nB) Templeton\nC) Slider\nD) HiveQL",
    "answer": "B) Templeton — WebHCat was formerly known as Templeton."
  },
  {
    "tag": "5.2",
    "question": "What is the difference between HCatalog and WebHCat in Hive?",
    "answer": "HCatalog provides a table and storage management layer — it abstracts tables and presents users with a relational view of HDFS data regardless of format, and supports tools like Pig and MapReduce. WebHCat offers HCatalog a REST API — it enables running of MapReduce/YARN, Pig, or Hive jobs and performs Hive metadata operations through a REST HTTP interface, allowing HTTP requests from any application while data and code are maintained in HDFS."
  },
  {
    "tag": "5.2",
    "question": "Long Answer: Explain Section 5.2 in full — what Hive is, its five objectives, its key features, how users connect and query (including HiveQL and its extensions), the tools used for speedy query retrieval, HPL SQL, and the two main components HCatalog and WebHCat.",
    "answer": "Apache Hive is a data warehousing software that enables the reading, writing, and management of large and diverse datasets that reside in distributed storage. Data are queried using a typical SQL syntax. The five objectives of Hive are to maximize scalability, performance, extensibility, fault tolerance, and loose-coupling with input formats — loose-coupling means Hive handles different data input formats without tightly integrating with or depending on the specifics of each format. Hive provides easy access to large sets of data via SQL, enabling ETL, reporting, and analysis; a mechanism to impose structure on unstructured data formats; access to files in distributed storage systems such as HDFS or HBase; and execution of queries using tools such as Tez, Spark, or MapReduce. Hive is an interactive platform with typical RDBMS-type features such as indexes and transactions, but data does not need to be stored in a standardized format — built-in connectors handle CSV, TSV, Apache ORC, Apache Parquet, and other formats. Users connect via a command line tool and a JDBC driver. Data are queried using HiveQL — a SQL-type syntax using standard SQL functionalities — which is extendable through user code to include user-defined functions (UDFs), user-defined table functions (UDTFs), and user-defined aggregate functions (UDAFs). Hive ensures speedy query retrieval using Hive LLAP (Live Long And Process), YARN, and Slider (an application for creating and running heterogeneous long-running applications). It also enables the implementation of HPL SQL (Hive Hybrid Procedural SQL). Hive's two main components are: HCatalog — a table and storage management layer that abstracts tables to present users with a relational view of HDFS data regardless of format, and supports tools like Pig and MapReduce; and WebHCat (formerly Templeton) — which offers HCatalog a REST API, enables running of MapReduce/YARN, Pig, or Hive jobs, and performs Hive metadata operations through a REST HTTP interface so that HTTP requests from any application can access MapReduce/YARN, Pig, Hive, and HCatalog DDL while data and code are maintained in HDFS."
  },
  
  {
    "tag": "5.3",
    "question": "Why did data lakes emerge?",
    "answer": "Big data exceeds the capabilities of traditional DWH systems. A hierarchical RDBMS-type DWH cannot effectively collect, store, and process big data within reasonable time frames. As a result, organizations may fail to fully utilize the opportunities big data brings. Data lakes emerged to overcome these challenges."
  },
  {
    "tag": "5.3",
    "question": "Who introduced the concept of a data lake, and how did he define it?",
    "answer": "James Dixon (2010) introduced the concept. He contrasted a data lake with a data mart — which contains cleansed, packaged, and structured data where a subset of attributes are examined and aggregated to answer pre-determined questions. Dixon argued that a data lake holds data from various sources in its 'natural state' and serves various and diverse users."
  },
  {
    "tag": "5.3",
    "question": "How do Sawadogo and Darmont (2021) define a data lake?",
    "answer": "Sawadogo and Darmont (2021) define a data lake as 'a very large data storage, management, and analysis system that handles any data format.'"
  },
  {
    "tag": "5.3",
    "question": "Why is metadata a significant component of data lakes?",
    "answer": "Data must be stored with metadata tags and unique identifiers. Metadata are used to locate and retrieve data from various and diverse locations."
  },
  {
    "tag": "5.3",
    "question": "What are the advantages of data lakes?",
    "answer": "Open object storage is inexpensive. Various users and applications can make use of the data. Data lakes are implemented using a flat architecture, so different data types can be stored as-is. An organization's data can be conveniently consolidated in the original format without having to impose a rigid schema."
  },
  {
    "tag": "5.3",
    "question": "MCQ: Which of the following best describes how data lakes store data differently from traditional DWHs?\nA) Data lakes store only structured data in normalized tables\nB) Data lakes store data in its original format using a flat architecture without imposing a rigid schema\nC) Data lakes store only semi-structured data in distributed RDBMS systems\nD) Data lakes store only cleansed and packaged data ready for pre-determined queries",
    "answer": "B) Data lakes store data in its original format using a flat architecture — different data types can be stored as-is, and data can be consolidated without imposing a rigid schema."
  },
  {
    "tag": "5.3",
    "question": "Using the mnemonic 2I2DPU, expand the six layers of the data lake architecture in order.",
    "answer": "(1) Ingestion layer, (2) Insights layer, (3) Distributed data storage layer, (4) Distillation layer, (5) Processing layer, (6) Unified operations layer."
  },
  {
    "tag": "5.3",
    "question": "MCQ: Using the mnemonic 2I2DPU, which layer of the data lake architecture is described as governing and monitoring systems — managing availability, usability, security, and integrity of the organization's data?\nA) Distillation layer\nB) Processing layer\nC) Insights layer\nD) Unified operations layer",
    "answer": "D) Unified operations layer — it is implemented to govern and monitor systems and involves managing aspects such as the availability, usability, security, and integrity of the organization's data."
  },
  {
    "tag": "5.3",
    "question": "What is the purpose of the ingestion layer in the data lake architecture?",
    "answer": "The ingestion layer links to data sources and enables the loading of data into the data lake. Data can be loaded (ingested) in batches, real-time, and/or using one-time loads."
  },
  {
    "tag": "5.3",
    "question": "What is the purpose of the distillation layer in the data lake architecture?",
    "answer": "The distillation layer is required to provide some structure for the unstructured data, to facilitate easier analysis."
  },
  {
    "tag": "5.3",
    "question": "What is the purpose of the insights layer in the data lake architecture?",
    "answer": "The insights layer offers insights to facilitate the application of data analysis techniques."
  },
  {
    "tag": "5.3",
    "question": "What is the purpose of the distributed data storage layer in the data lake architecture?",
    "answer": "The distributed data storage layer (such as an HDFS layer) must be implemented to provide scalable and cost-effective storage for data."
  },
  {
    "tag": "5.3",
    "question": "Long Answer: Using the mnemonic 2I2DPU, describe all six layers of the data lake architecture in full.",
    "answer": "According to Taylor (2023b), the six-layer data lake architecture consists of: (1) Ingestion layer — links to data sources and enables loading of data in batches, real-time, and/or one-time loads. (2) Insights layer — offers insights to facilitate the application of data analysis techniques. (3) Distributed data storage layer (e.g., HDFS) — provides scalable and cost-effective storage. (4) Distillation layer — provides some structure for unstructured data to facilitate easier analysis. (5) Processing layer — runs algorithms and queries. (6) Unified operations layer — governs and monitors systems, managing aspects such as availability, usability, security, and integrity of the organization's data."
  },
  {
    "tag": "5.3",
    "question": "What is the difference between a pond architecture and a zone architecture in a data lake?",
    "answer": "In a pond architecture, data are divided into different data ponds, each associated with a specialized storage system, specific data processing and conditioning, and an appropriate analysis service. In a zone architecture, data are assigned to a zone based on the degree of refinement of the data."
  },
  {
    "tag": "5.3",
    "question": "Using the mnemonic RAATA, expand the five data pond types in order.",
    "answer": "(1) Raw data pond, (2) Analog data pond, (3) Application data pond, (4) Textual data pond, (5) Archival data pond."
  },
  {
    "tag": "5.3",
    "question": "What is the raw data pond?",
    "answer": "The raw data pond contains raw data that have been newly ingested. The data are conditioned and then transferred from the raw data pond into another pond. A raw data pond is not associated with a metadata system."
  },
  {
    "tag": "5.3",
    "question": "What is the analog data pond?",
    "answer": "The analog data pond usually processes semi-structured data. Data enter this pond with a high velocity — for example, data from social media and the Internet of Things (IoT)."
  },
  {
    "tag": "5.3",
    "question": "What is the application data pond?",
    "answer": "The application data pond contains data that correspond with the data in a DWH — it comprises data that were previously ingested from various other systems such as production and operational applications. The data managed in the application data pond are generally structured, as they come from RDBMSs."
  },
  {
    "tag": "5.3",
    "question": "What is the textual data pond?",
    "answer": "The textual data pond manages unstructured, textual data from big data sources such as call center transcripts. It contains a textual disambiguation process to simplify textual data analysis."
  },
  {
    "tag": "5.3",
    "question": "What is the archival data pond?",
    "answer": "The archival data pond saves data that are not actively being used but may be needed in the future. Data may enter the archival pond from the analog, application, or textual data ponds."
  },
  {
    "tag": "5.3",
    "question": "MCQ: Using the mnemonic RAATA, which data pond is not associated with a metadata system?\nA) Analog data pond\nB) Application data pond\nC) Raw data pond\nD) Archival data pond",
    "answer": "C) Raw data pond — it contains newly ingested raw data that are conditioned and transferred to another pond, and it is not associated with a metadata system."
  },
  {
    "tag": "5.3",
    "question": "Long Answer: Using the mnemonic RAATA, describe all five data pond types in full.",
    "answer": "Inmon (2016) identifies five data pond types: (1) Raw data pond — contains newly ingested raw data; data are conditioned and transferred to another pond; not associated with a metadata system. (2) Analog data pond — usually processes semi-structured data entering at high velocity, such as from social media and IoT. (3) Application data pond — contains data corresponding to DWH data; comprises structured data from RDBMSs previously ingested from production and operational applications. (4) Textual data pond — manages unstructured, textual data from big data sources such as call center transcripts; contains a textual disambiguation process to simplify analysis. (5) Archival data pond — saves data not actively used but potentially needed in future; data may enter from the analog, application, or textual ponds."
  },
  {
    "tag": "5.3",
    "question": "Using the mnemonic TRTDCG, expand the six zones of Zaloni's zone architecture in order.",
    "answer": "(1) Transient loading zone, (2) Raw data zone, (3) Trusted zone, (4) Discovery sandbox, (5) Consumption zone, (6) Governance zone."
  },
  {
    "tag": "5.3",
    "question": "What is the transient loading zone?",
    "answer": "The transient loading zone contains the raw data that are being ingested and performs basic data quality assessments."
  },
  {
    "tag": "5.3",
    "question": "What is the trusted zone?",
    "answer": "The trusted zone is where standardized and cleansed data are transferred. The data stored in this zone are ready to be moved to the next zone."
  },
  {
    "tag": "5.3",
    "question": "What is the discovery sandbox?",
    "answer": "In the discovery sandbox, data are moved from the trusted zone. The data are accessible to data scientists who may apply data wrangling or data discovery operations to access the data."
  },
  {
    "tag": "5.3",
    "question": "What is the consumption zone?",
    "answer": "In the consumption zone, business users can access the data for decision support. Data are accessible through dashboard tools and can be used to run 'what-if' scenarios."
  },
  {
    "tag": "5.3",
    "question": "What is the governance zone?",
    "answer": "The governance zone facilitates management, monitoring, and governance of metadata, and ensures the quality of the data. This zone also maintains a data catalog and ensures the security of the data."
  },
  {
    "tag": "5.3",
    "question": "MCQ: Using the mnemonic TRTDCG, which zone is accessible to data scientists who may apply data wrangling or data discovery operations?\nA) Trusted zone\nB) Consumption zone\nC) Discovery sandbox\nD) Governance zone",
    "answer": "C) Discovery sandbox — data are moved from the trusted zone into this zone, where data scientists may apply data wrangling or data discovery operations."
  },
  {
    "tag": "5.3",
    "question": "Is a transient zone included in all zone architectures?",
    "answer": "No — zone architectures mostly differ in terms of the number of zones incorporated and the specific characteristics of individual zones. A transient zone is not included in all zone architectures."
  },
  {
    "tag": "5.3",
    "question": "Long Answer: Using the mnemonic TRTDCG, describe all six zones of Zaloni's zone architecture in full.",
    "answer": "In a zone architecture, data are assigned to a zone based on the degree of refinement of the data. Zaloni's data lake adopted a six-zone architecture: (1) Transient loading zone — contains raw data being ingested and performs basic data quality assessments. (2) Raw data zone — deals with nearly raw data entering from the transient zone. (3) Trusted zone — standardized and cleansed data are transferred here; data are ready to move to the next zone. (4) Discovery sandbox — data moved from the trusted zone; accessible to data scientists who may apply data wrangling or data discovery operations. (5) Consumption zone — business users access data here for decision support via dashboard tools and 'what-if' scenarios. (6) Governance zone — facilitates management, monitoring, and governance of metadata; ensures data quality; maintains a data catalog and ensures data security. Zone architectures mostly differ in the number of zones and the specific characteristics of individual zones — a transient zone is not included in all zone architectures."
  },
  {
    "tag": "5.3",
    "question": "What is the lambda architecture, and what two processing zones does it include?",
    "answer": "The lambda architecture is a popular zone architecture. It includes two data processing zones: a batch processing zone, where bulk data are processed, and a real-time processing zone, where high-velocity data (such as data from the IoT) are processed."
  },
  {
    "tag": "5.3",
    "question": "What are the advantages of the lambda architecture?",
    "answer": "Lambda provides a good balance in terms of speed, reliability, and scalability. The batch layer provides fault tolerance and distributed storage, so the possibility of errors in the event of a system crash is low. Many data analysis scenarios can be covered since it provides access to both real-time and offline results. Lambda performs well because it offers access to a complete dataset in a batch window. Furthermore, lambda is simple to implement."
  },
  {
    "tag": "5.3",
    "question": "What are the disadvantages of the lambda architecture, and what emerged as a result?",
    "answer": "Lambda results in duplicate modules and coding overhead. It is also difficult to migrate or reorganize a dataset. Because of these drawbacks, the kappa architecture emerged."
  },
  {
    "tag": "5.3",
    "question": "What is the kappa architecture, what problem does it solve, and what is its drawback?",
    "answer": "With kappa, it is not necessary to maintain different code bases for batch and high-velocity data, resolving lambda's redundancy issues. It enables direct read and write to the message queue so batch processing is not needed during ingress. Since all data points are treated as streaming events, it provides the ability to immediately see the state of all the data in the organization, resulting in faster query results. However, kappa is more difficult to implement than lambda."
  },
  {
    "tag": "5.3",
    "question": "MCQ: Which architecture treats all data points as streaming events and provides faster query results by enabling direct read and write to the message queue?\nA) Lambda architecture\nB) Zone architecture\nC) Kappa architecture\nD) Pond architecture",
    "answer": "C) Kappa architecture — it enables direct read and write to the message queue, treats all data points as streaming events, and provides the ability to immediately see the state of all data, resulting in faster query results."
  },
  {
    "tag": "5.3",
    "question": "Long Answer: Explain Section 5.3 in full — why data lakes emerged, Dixon's definition, advantages of data lakes, the role of metadata, the six-layer architecture (2I2DPU), pond architecture with all five pond types (RAATA), zone architecture with Zaloni's six zones (TRTDCG), and the lambda vs kappa architectures.",
    "answer": "Big data exceeds the capabilities of traditional hierarchical RDBMS-type DWHs, which cannot effectively collect, store, and process big data within reasonable time frames. Data lakes emerged to overcome these challenges. James Dixon (2010) introduced the concept, contrasting it with a data mart — while a data mart contains cleansed, packaged, and structured data for pre-determined questions, a data lake holds data from various sources in its 'natural state' and serves various and diverse users. Sawadogo and Darmont (2021) define a data lake as 'a very large data storage, management, and analysis system that handles any data format.' Metadata is a significant component — data must be stored with metadata tags and unique identifiers to locate and retrieve data. Advantages: open object storage is inexpensive; various users and applications can use the data; a flat architecture allows different data types to be stored as-is; and data can be consolidated in original format without a rigid schema. The six-layer data lake architecture (2I2DPU): (1) Ingestion — loads data in batches, real-time, or one-time; (2) Insights — facilitates data analysis techniques; (3) Distributed data storage (e.g., HDFS) — scalable, cost-effective storage; (4) Distillation — provides structure for unstructured data; (5) Processing — runs algorithms and queries; (6) Unified operations — governs and monitors systems, managing availability, usability, security, and integrity. Pond architecture (RAATA — Inmon, 2016): (1) Raw data pond — newly ingested raw data; not associated with metadata; (2) Analog data pond — high-velocity semi-structured data (e.g., IoT, social media); (3) Application data pond — structured data from RDBMSs; (4) Textual data pond — unstructured textual data with disambiguation process; (5) Archival data pond — inactive data for future use. Zone architecture (TRTDCG — Zaloni): (1) Transient loading — raw data ingestion with basic quality assessment; (2) Raw data — nearly raw data from transient zone; (3) Trusted — standardized and cleansed data; (4) Discovery sandbox — accessible to data scientists for wrangling/discovery; (5) Consumption — business users access data for decision support; (6) Governance — manages metadata, data catalog, quality, and security. Lambda architecture has two zones (batch and real-time): it is simple, provides fault tolerance and access to both real-time and offline results, but creates duplicate modules, coding overhead, and is difficult to migrate. Kappa resolves lambda's redundancy by treating all data as streaming events and enabling direct read/write to the message queue for faster results, but is more difficult to implement."
  }


]
