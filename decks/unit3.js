// =======================
// UNIT 3 – DISTRIBUTED DATA
// SECTION 3.1 – SYSTEMS' RELIABILITY & DATA REPLICATION
// =======================

const unit3Deck = [
  {
    tag: "3.1",
    question: "What does reliability mean in data-intensive systems?",
    answer: "Reliability in data-intensive systems refers to the capability of the system to carry out its function consistently and without failures of the overall system. A reliable system must continue operating despite internal failures of individual nodes and must implement redundancy, backups, and error-handling mechanisms. It must be able to recover from failures and remain operative even when certain hardware or software components fail."
  },
  {
    tag: "3.1",
    question: "What mechanisms are used to achieve reliability in distributed data systems?",
    answer: "Reliability in distributed data systems is achieved through redundant hardware, data replication, load balancing, data backup and recovery mechanisms, error handling, and monitoring and maintenance. Redundant hardware uses multiple devices to perform the same task. Data replication creates multiple copies of data across nodes. Load balancing distributes workload across components. Backup and recovery ensures restoration after failures. Error handling detects and manages failures automatically. Monitoring and maintenance track system performance to prevent future failures."
  },
  {
    tag: "3.1",
    question: "What is redundant hardware and why is it important for reliability?",
    answer: "Redundant hardware refers to using multiple physical components to carry out the same function. Examples include redundant disks, power supplies, or network interfaces. If one component fails, another can immediately take over. This reduces the risk of single points of failure and increases the overall reliability of the system."
  },
  {
    tag: "3.1",
    question: "What is load balancing and how does it improve system reliability?",
    answer: "Load balancing refers to distributing workload across multiple system components or nodes to enhance availability and performance. Instead of one server handling all requests, the workload is divided and distributed across several machines. This prevents overload, reduces latency, improves availability, and ensures the system remains responsive."
  },
  {
    tag: "3.1",
    question: "What does data backup and recovery involve in distributed systems?",
    answer: "Data backup and recovery involve regularly creating copies of data and storing them in secure and separate locations. A recovery plan defines how backups can be restored in case of failure. This protects against data corruption, accidental deletion, hardware failure, and disaster scenarios. Backups must be scheduled regularly and restoration procedures must be clearly documented."
  },
  {
    tag: "3.1",
    question: "What does error handling mean in distributed data systems?",
    answer: "Error handling refers to the automatic detection and management of failures within a distributed system. This includes automatic retry mechanisms, failure detection, and automatic recovery from node crashes. Error handling ensures that the system can remain operational without requiring manual intervention whenever possible."
  },
  {
    tag: "3.1",
    question: "Explain the CAP theorem and its implications for distributed systems.",
    answer: "The CAP theorem states that in a distributed data system, it is only possible to guarantee two out of the following three properties: Consistency, Availability, and Partition tolerance. Consistency means that after an update, all nodes return the same data. Availability means that the system is always operative and responsive. Partition tolerance means that the system continues functioning even if communication between nodes fails. Since distributed systems must be partition tolerant by definition, system designers must choose between prioritizing consistency or availability."
  },
  {
    tag: "3.1",
    question: "What does consistency mean in the CAP theorem?",
    answer: "Consistency means that after a data update, the data stored in different locations is the same. All nodes return the same data, and there are no outdated copies. Consistency ensures that users always see the most recent version of the data."
  },
  {
    tag: "3.1",
    question: "What does availability mean in the CAP theorem?",
    answer: "Availability means that the system is always operative and responsive. Every request receives a response, even if some nodes have failed. The system remains accessible to users."
  },
  {
    tag: "3.1",
    question: "What does partition tolerance mean in distributed systems?",
    answer: "Partition tolerance means that the system continues functioning even if there is a communication breakdown between nodes or if nodes crash. The system must tolerate network partitions and remain operational despite distributed failures."
  },
  {
    tag: "3.1",
    question: "What is data replication and why is it important?",
    answer: "Data replication is the process of creating multiple copies of data from one location to another location. It increases system availability, reduces the risk of data loss, enables disaster recovery, improves load balancing, and enhances performance through parallel processing. Replication ensures that the system can continue operating even if one copy becomes unavailable."
  },
  {
    tag: "3.1",
    question: "What are the advantages of data replication?",
    answer: "The advantages of data replication include increased availability, improved backup and recovery capabilities, enhanced load balancing, and performance improvement through parallel reads and writes. Multiple copies allow the system to continue operating even if one node fails and enable parallel processing across machines."
  },
  {
    tag: "3.1",
    question: "Explain master-slave replication.",
    answer: "In master-slave replication, one node designated as the master receives all data updates and replicates the data to other nodes defined as slaves. The master handles write operations, and the slaves maintain replicated copies. This strategy simplifies consistency management but introduces a single point of failure if the master node fails."
  },
  {
    tag: "3.1",
    question: "Explain multi-leader replication.",
    answer: "In multi-leader replication, multiple master nodes exist simultaneously, and each master is also a slave to another master. Write operations can occur at multiple nodes. This increases fault tolerance and write scalability but requires mechanisms to resolve potential conflicts between concurrent updates."
  },
  {
    tag: "3.1",
    question: "Explain leaderless replication.",
    answer: "In leaderless replication, every node acts simultaneously as a master and a slave. All nodes accept write operations and replicate data among each other. This strategy provides high fault tolerance but introduces complex challenges regarding data consistency and conflict resolution."
  },
  {
    tag: "3.1",
    question: "How does HDFS implement data replication?",
    answer: "The Hadoop Distributed File System (HDFS) stores data in blocks, typically 128MB in size, and replicates each block to at least three DataNodes within a cluster. The NameNode acts as the master and manages metadata, addresses client requests, and monitors the health of DataNodes. If a DataNode fails, requests are redirected to another node containing a replica. The NameNode schedules new replications to maintain redundancy."
  },
  {
    tag: "3.1",
    question: "What is geographic replication in cloud environments?",
    answer: "Geographic replication creates multiple copies of data in geographically dispersed locations. This provides robustness against disasters affecting a broader region, such as earthquakes, floods, or regional failures."
  },
  {
    tag: "3.1",
    question: "What is cross-region replication?",
    answer: "Cross-region replication distributes data copies across larger geographical regions, such as continents or sub-continents. This improves robustness in case of regional failures and provides low-latency access for users located in different parts of the world."
  },
  {
    tag: "3.1",
    question: "What is zone-redundant replication?",
    answer: "Zone-redundant replication places multiple copies of data in different availability zones within a single cloud region. This protects against failures at the data center or zone level while keeping data within the same broader region."
  },
  {
  tag: "3.2",
  question: "What is data partitioning and why is it important in distributed data systems?",
  answer: "Data partitioning focuses on dividing a large dataset into smaller parts, referred to as partitions. These partitions are then distributed across cluster nodes to improve availability, reliability, scalability, and processing performance. By distributing partitions across nodes, the system can process data in parallel, reduce workload on individual machines, and enhance system robustness. Data partitioning is therefore a key mechanism for enabling horizontal scalability and efficient distributed processing."
},
{
  tag: "3.2",
  question: "Explain the difference between vertical partitioning and horizontal partitioning.",
  answer: "Vertical partitioning splits a data table by attributes (columns) into multiple tables. Each partition contains a subset of the attributes of the original table. Horizontal partitioning, also called sharding, distributes a data table by rows, meaning that some rows are stored on one cluster node and other rows are stored on different nodes. Vertical partitioning divides by columns, while horizontal partitioning divides by rows and is typically used in distributed systems to improve scalability and performance."
},
{
  tag: "3.2",
  question: "What is sharding in distributed systems?",
  answer: "Sharding refers to horizontal partitioning of data in distributed systems. In this strategy, a large table is divided by rows and distributed across multiple cluster nodes. Each node stores a subset of the records. Sharding improves scalability, reliability, and processing performance because operations can be executed in parallel across partitions."
},
{
  tag: "3.2",
  question: "Explain round-robin partitioning, including its strengths and weaknesses.",
  answer: "Round-robin partitioning distributes data evenly across partitions in equal proportion. For example, if there are 50 records and five partitions, each partition will receive ten records. The main strengths of round-robin partitioning are its simplicity and the fact that no additional information is required to create the partitions. It works well when data and access patterns are evenly distributed. However, it performs poorly for skewed data distributions or uneven access patterns because related records may be scattered across partitions, reducing query efficiency."
},
{
  tag: "3.2",
  question: "Explain hash-based partitioning and discuss its advantages and potential weaknesses.",
  answer: "Hash-based partitioning, also called key-based partitioning, distributes data based on hash values computed from one or more attributes. For example, a postal code can be used to calculate a hash value, and records with similar values may be stored in the same partition. This approach is suitable for skewed data distributions because partition sizes can be controlled by adjusting the key distribution. However, hash-based partitioning requires additional information to define the partitioning key, and hash collisions may occur, meaning that different attribute values could be mapped to the same partition."
},
{
  tag: "3.2",
  question: "Explain range-based partitioning and describe when it is most appropriate.",
  answer: "Range-based partitioning distributes data according to sequential key ranges with equal intervals. It is particularly useful for attributes with a natural ordering, such as timestamps. For example, customer orders could be partitioned by time intervals such as weeks or months, making aggregations over time more efficient. However, if the values are unevenly distributed, range-based partitioning may result in imbalanced partitions, which can negatively affect performance."
},
{
  tag: "3.2",
  question: "What is composite partitioning and why is it used?",
  answer: "Composite partitioning combines two or more partitioning strategies to exploit the advantages of each. For example, range-based partitioning might be applied to an age attribute while hash-based partitioning is applied to a postal code. Composite partitioning is suitable for complex data distributions and access patterns. However, it requires more computational resources and more complex logic to determine the appropriate partition for each record."
},
{
  tag: "3.2",
  question: "Discuss the advantages and disadvantages of data partitioning in distributed systems.",
  answer: "Data partitioning enables scalability, reliability, and parallel processing of large datasets by distributing partitions across cluster nodes. It improves system performance and supports horizontal scaling. However, partitioning introduces additional computational and networking overhead to determine and manage partitions. Its implementation is more complex than storing data in a single partition. If poorly designed, partitioning may lead to imbalanced partitions or inefficient queries."
},
{
  tag: "3.2",
  question: "How is data partitioning implemented in cloud environments?",
  answer: "In cloud environments, partitioning is implemented in distributed database and storage systems. For example, Amazon DynamoDB and Amazon Aurora use horizontal partitioning to spread data across cluster nodes. Microsoft Azure Cosmos DB supports partitioning and allows partitions to be located in different geographical regions. Azure SQL Database scales horizontally through partitioning across multiple databases. Partitioning in cloud systems supports both performance optimization and geographic distribution."
},
{
  tag: "3.2",
  question: "Explain directory-based and geospatial partitioning and their relevance in distributed cloud systems.",
  answer: "Directory-based partitioning divides data files into folders in a file hierarchy based on attributes such as the date of creation. It is commonly used in cloud storage systems. Geospatial partitioning distributes data according to geographic location and is appropriate for applications that require low latency by processing data close to its origin. Geospatial partitioning is also relevant for compliance with data protection regulations and data sovereignty requirements. Examples include Azure Blob Storage, Azure Data Lake Storage, and Amazon S3, which use containers, folders, buckets, and prefixes to implement partitioning strategies."
}
  
];
