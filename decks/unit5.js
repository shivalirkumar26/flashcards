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
  }

]
