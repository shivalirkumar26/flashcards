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
  }
]
