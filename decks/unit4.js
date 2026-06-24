const unit4Deck = [

  {
    "tag": "4.1",
    "question": "MCQ: What is the formal definition of a database as used in this section?\nA) A multidimensional data structure used for OLAP queries\nB) A computerized record keeping system that aims to maintain information and make it available to end-users when required\nC) A staging area used to cleanse and transform data before loading it into the DWH\nD) A cloud-hosted data repository for storing historical organizational data",
    "answer": "B) A computerized record keeping system that aims to maintain information and make it available to end-users when required (Foster & Godbole, 2016)."
  },
  {
    "tag": "4.1",
    "question": "Define 'production databases' as used in this section.",
    "answer": "The databases used in the processing of daily transactions in operational business processes."
  },
  {
    "tag": "4.1",
    "question": "Define 'snapshots' as used in this section.",
    "answer": "Detailed records that reflect a view of the data in the database, as captured at a particular point in time."
  },
  {
    "tag": "4.1",
    "question": "What dual role do OLTP systems play in relation to a DWH?",
    "answer": "The organization's production databases are continuously updated via OLTP systems. In addition, OLTP systems are the source systems that feed the DWH system and applications."
  },
  {
    "tag": "4.1",
    "question": "What OLAP functions does a DWH facilitate?",
    "answer": "A DWH facilitates online analytical processing (OLAP) functions such as analyses, ad-hoc queries, and time-series reporting."
  },
  {
    "tag": "4.1",
    "question": "MCQ: Which of the following best describes the rule governing what data can be loaded into a DWH?\nA) All data extracted from OLTP systems are loaded directly\nB) Only data older than 24 hours can be loaded\nC) Only cleansed data can be loaded into a DWH\nD) Only summarized and aggregated data can be loaded",
    "answer": "C) Only cleansed data can be loaded into a DWH."
  },
  {
    "tag": "4.1",
    "question": "Name the four types of databases a DWH can include.",
    "answer": "Relational databases, analytics databases, DWH applications, and cloud-based databases."
  },
  {
    "tag": "4.1",
    "question": "What are relational databases, and what are three named examples?",
    "answer": "Relational databases entail row-centered databases that store relational data in (two-dimensional) rows and columns. Examples: IBM DB2, SAP, Oracle, and Microsoft SQL Server."
  },
  {
    "tag": "4.1",
    "question": "What are analytics databases, and what are two named examples?",
    "answer": "Analytics databases store multidimensional datasets (typically in the form of OLAP cubes) that are used for analytical purposes. Examples: Greenplum and Teradata."
  },
  {
    "tag": "4.1",
    "question": "MCQ: Which type of DWH database is described as theoretically NOT a storage database, but instead a combination of hardware and software that facilitates storage and management of data?\nA) Relational databases\nB) Analytics databases\nC) Cloud-based databases\nD) DWH applications",
    "answer": "D) DWH applications — theoretically, these are not storage databases. Instead, the applications entail a combination of hardware and software that facilitates the storage and management of data. Examples: Oracle Exadata, IBM Netezza, and SAP Hana."
  },
  {
    "tag": "4.1",
    "question": "What are cloud-based databases, and what are three named examples?",
    "answer": "Cloud-based databases are hosted in the cloud, meaning it is not necessary to procure hardware to host the DWH. Examples: Google BigQuery, Microsoft Azure SQL, and Amazon Redshift."
  },
  {
    "tag": "4.1",
    "question": "Name the three types of relations in a DWH database and describe each.",
    "answer": "Base relations indicate the conceptual schema. Virtual relations, such as logical views, are derived from the base relations and are usually simply referred to as views. Snapshots are physically defined, named, and derived relations that store physical data."
  },
  {
    "tag": "4.1",
    "question": "MCQ: Which type of relation in a DWH database is physically defined, named, and derived, and stores physical data?\nA) Base relations\nB) Virtual relations\nC) Snapshots\nD) Logical views",
    "answer": "C) Snapshots — they are physically defined, named, and derived relations that store physical data."
  },
  {
    "tag": "4.1",
    "question": "How old is the data in a DWH typically, and what factors determine how long data is stored?",
    "answer": "The data are typically at least 24 hours old; however, a DWH may also contain data that are up to a decade old. The length of time that data are stored depends on various legal and regulatory factors."
  },
  {
    "tag": "4.1",
    "question": "What five types of data does a DWH include, according to Inmon (1996)?",
    "answer": "Integrated data, detailed data, summary data, historical data, and metadata."
  },
  {
    "tag": "4.1",
    "question": "Long Answer: Explain Section 4.1 in full — the role of databases in a DWH, the relationship between OLTP and OLAP, the rule governing data entry, all four types of databases a DWH can include with their examples, the three types of relations inside a DWH database, and what a DWH database contains.",
    "answer": "Databases are at the heart of a DWH system. An organization's mission-critical and essential data are stored and managed in a computerized record keeping system that aims to maintain information and make it available to end-users when required (Foster & Godbole, 2016). The organization's production databases are continuously updated via OLTP systems (e.g., product and inventory control systems, payroll, and accounts payable). OLTP systems are also the source systems that feed the DWH system and applications. A DWH stores all the historical data and facilitates OLAP functions such as analyses, ad-hoc queries, and time-series reporting. Data are periodically extracted from OLTP systems, transformed (filtered and cleansed), and only cleansed data can be loaded into a DWH. A DWH can include any or a combination of the following: relational databases (row-centered, storing data in rows and columns; e.g., IBM DB2, SAP, Oracle, Microsoft SQL Server); analytics databases (storing multidimensional datasets, typically OLAP cubes; e.g., Greenplum, Teradata); DWH applications (not storage databases, but combinations of hardware and software facilitating storage and management, sold as off-the-shelf solutions; e.g., Oracle Exadata, IBM Netezza, SAP Hana); and cloud-based databases (hosted in the cloud, no hardware procurement needed; e.g., Google BigQuery, Microsoft Azure SQL, Amazon Redshift). A DWH database typically consists of three types of relations: base relations (indicating the conceptual schema), virtual relations (derived from base relations, usually referred to as views), and snapshots (physically defined, named, and derived relations that store physical data). The databases of the central DWH are kept separate from operational system databases. Data are typically at least 24 hours old but may be up to a decade old, depending on legal and regulatory factors. A DWH also includes integrated data, detailed data, summary data, historical data, and metadata."
  },
  
  {
    "tag": "4.2",
    "question": "What does ETL stand for, and what is its purpose?",
    "answer": "ETL stands for extract, transform, and load. It involves extracting data from various source systems, transforming data into a unified format, and loading data into a DWH so that they can be used for analysis purposes."
  },
  {
    "tag": "4.2",
    "question": "Where is the ETL process executed, and what is that area's purpose?",
    "answer": "The ETL process is executed in a staging area, before loading data into the presentation server of the DWH. The presentation server is a platform where users can query data directly."
  },
  {
    "tag": "4.2",
    "question": "What is the I&T layer in Inmon's CIF model?",
    "answer": "The integration and transformation (I&T) layer is an architectural component made up of programs and applications that capture, transform, and move data from application (transactional) environments to the operational data store (ODS) and DWH environment. Data are integrated and transformed in the I&T layer to become corporate assets, prior to loading them into the DWH."
  },
  {
    "tag": "4.2",
    "question": "How does ETL differ between the Inmon and Kimball models in terms of where data is loaded?",
    "answer": "ETL in the Inmon model loads all the organizational data into a giant DWH. ETL in the Kimball model loads data into a set of smaller databases, also called data marts."
  },
  {
    "tag": "4.2",
    "question": "Why is the I&T interface described as unstable?",
    "answer": "The I&T interface is quite unstable because the set of programs and applications constantly changes. Also, as a DWH is built incrementally, pieces are added over time. The DWH is also built iteratively so the environment is constantly reshaped and retooled as required."
  },
  {
    "tag": "4.2",
    "question": "What role does the logical data model play in Inmon's I&T layer?",
    "answer": "The I&T interface uses a logical data model as a blueprint. The logical model defines how the data should be structured in the CIF. A builder is then used to create the I&T programs according to the specifications. The I&T programs transform the raw source data they receive, and metadata are also created in the I&T layer, providing a reference guide that describes the logic of the transformations that occur."
  },
  {
    "tag": "4.2",
    "question": "MCQ: Which of the following is NOT one of the nine critical requirement areas that must be gathered before building a Kimball ETL architecture?\nA) Data latency\nB) Legacy licenses\nC) Normalization standards\nD) Archiving and lineage",
    "answer": "C) Normalization standards. The nine critical areas are: business needs, compliance, data quality, security, data integration, data latency, archiving and lineage, user delivery interfaces, available skills, and legacy licenses."
  },
  {
    "tag": "4.2",
    "question": "What does 'data latency' mean in the context of Kimball's ETL requirements?",
    "answer": "Data latency describes the speed at which the data collected from source systems can be made available to business users via the DWH."
  },
  {
    "tag": "4.2",
    "question": "What does 'archiving and lineage' mean in the context of Kimball's ETL requirements?",
    "answer": "Archiving and lineage entails a process to ensure that data are successfully staged and archived so that records are not lost. The accompanying metadata must be sufficient to trace the origin of data, as well as all the processing steps of the data, until everything has been loaded effectively into the DWH."
  },
  {
    "tag": "4.2",
    "question": "What does 'data integration' mean in the context of Kimball's ETL requirements?",
    "answer": "Data integration ensures that data are effectively integrated from various distributed data sources. Common dimension attributes are defined for business processes from different departments that share business metrics such as key performance indicators (KPIs)."
  },
  {
    "tag": "4.2",
    "question": "What does 'legacy licenses' mean in the context of Kimball's ETL requirements?",
    "answer": "Legacy licenses involves ensuring a balanced approach in terms of the use of existing legacy licenses versus potentially acquiring new licenses better suited for the current and future ETL environment. Informed decisions must be taken to ensure that the ETL environment will also be suitable and sustainable in the future."
  },
  {
    "tag": "4.2",
    "question": "Name the four major components of Kimball's ETL approach in order.",
    "answer": "(1) Extracting, (2) cleansing and conforming, (3) delivering, and (4) managing."
  },
  {
    "tag": "4.2",
    "question": "MCQ: What are the two main aims of the extraction component in Kimball's ETL approach?\nA) To restructure data and load it into the final data mart tables\nB) To understand the source data and transfer it correctly into the DWH environment\nC) To cleanse data and create conformed dimensions\nD) To manage job schedulers and monitor ETL workflows",
    "answer": "B) To understand the source data and transfer it correctly into the DWH environment."
  },
  {
    "tag": "4.2",
    "question": "Why must data be extracted correctly, and what happens to DWH data once loaded?",
    "answer": "Data must be extracted correctly since the data in the DWH will typically not be updated once they have been loaded."
  },
  {
    "tag": "4.2",
    "question": "Name the three subcomponents of the extraction process in Kimball's ETL approach.",
    "answer": "Data profiling, a change data capture (CDC) system, and data extraction."
  },
  {
    "tag": "4.2",
    "question": "What is data profiling, and what are its aims?",
    "answer": "Data profiling entails an analysis to describe the content, consistency, and structure of the data. The aims include determining which data sources to include in the DWH project and identifying issues that may arise when including source data so that corrective actions can be taken to improve data quality. Data profiling assists the ETL team in determining the scope of the data cleansing effort that must be performed."
  },
  {
    "tag": "4.2",
    "question": "What is the purpose of a change data capture (CDC) system?",
    "answer": "A CDC system must be developed to ensure that new data are imported into the DWH without having to update the historical data. It necessitates proper isolation of the most recent source data."
  },
  {
    "tag": "4.2",
    "question": "Name the five CDC methods and briefly describe each.",
    "answer": "(1) Audit columns: appended columns in source systems that automatically track when records were added or changed, populated by database triggers. (2) Timed extracts: selects rows where the creation or last modification date equals SYSDATE−1; less reliable as it can load duplicate rows when restarting after a stop. (3) Full 'diff compare': compares current day's data record-by-record with a snapshot of the previous day's data using data diffing — very thorough but resource-intensive. (4) Database log scraping: takes a snapshot of the database redo log at a scheduled time and scans it for transactions affecting tables of interest. (5) Message queue monitoring: constantly monitors the queue of a message-based transaction system to identify transactions that affect tables of interest."
  },
  {
    "tag": "4.2",
    "question": "MCQ: Which CDC method is described as 'very thorough' but also 'very resource-intensive'?\nA) Audit columns\nB) Timed extracts\nC) Full 'diff compare'\nD) Database log scraping",
    "answer": "C) Full 'diff compare' — it compares the current day's data with a snapshot of the previous day's data using data diffing, record by record."
  },
  {
    "tag": "4.2",
    "question": "MCQ: Which CDC method is described as less reliable because it can load duplicate rows when restarting after an intermediate stop?\nA) Audit columns\nB) Timed extracts\nC) Database log scraping\nD) Message queue monitoring",
    "answer": "B) Timed extracts — this approach is less reliable since a time-based data selection can load duplicate rows when restarting after an intermediate stop."
  },
  {
    "tag": "4.2",
    "question": "Define 'data diffing' as used in this section.",
    "answer": "Data diffing is the process of identifying the differences between two datasets by comparing them with a tool called a 'differ.'"
  },
  {
    "tag": "4.2",
    "question": "What types of source systems can data be extracted from, and what are the two forms in which data can be extracted?",
    "answer": "Sources may include relational database management systems (RDBMSs), mainframe systems, enterprise resource planning (ERP) systems, web logs, and so forth. Depending on the type of source system, the data can be extracted as a file or a stream."
  },
  {
    "tag": "4.2",
    "question": "Describe the steps for extracting data as a file versus as a stream.",
    "answer": "When extracting as a file: extract the data to a file, move the file to the ETL server, transform the file contents, and load the transformed data into a staging database. When extraction is set up as a stream, it can be constructed as a single process — data flow directly from the source systems through the transformation engine and into the staging database."
  },
  {
    "tag": "4.2",
    "question": "What are the three aims of the cleansing and conforming component?",
    "answer": "To improve the quality of the data, merge source data from two or more sources, and create and enforce conformed dimensions and metrics."
  },
  {
    "tag": "4.2",
    "question": "What role does metadata play in the cleansing and conforming component?",
    "answer": "Metadata are created during the transformation process. Metadata are a crucial aspect of a DWH — they are used throughout the DWH life cycle and are useful to identify problems in source systems so that they can be improved over time."
  },
  {
    "tag": "4.2",
    "question": "Name the three subcomponents of the cleansing and conforming component.",
    "answer": "Data cleansing, an error event schema and audit assembler, and data deduplication and conforming."
  },
  {
    "tag": "4.2",
    "question": "What is an error event schema, and what is an audit assembler?",
    "answer": "An error event schema is useful to identify and resolve errors — it captures and displays errors that have occurred and ensures that all error events are recorded as they happen in the ETL pipeline. An audit assembler is an audit table created to capture the metadata context when metric or measurement tables are created in the ETL pipeline."
  },
  {
    "tag": "4.2",
    "question": "What is survivorship, and why is it needed?",
    "answer": "When data are derived from several sources, the information may contain contradicting records. Survivorship is the process of combining a set of matching records into a unified representation that combines only the highest-quality (or most correct) entries into a conformed row. It involves establishing clear business rules to define the priority sequence for values from different sources to create a row with the attributes that 'survived best.'"
  },
  {
    "tag": "4.2",
    "question": "What does it mean to 'conform' entity/dimension tables, and how is alignment achieved?",
    "answer": "Entity (or dimension) tables shared across divisions should be aligned (conformed) in terms of both columns and content. Alignment is achieved by combining and integrating data from multiple systems in a way 'that it is structurally identical, deduplicated, filtered of invalid data, and standardized in terms of content rows in a conformed image.' Domain mappings are made when metadata captures relationships between values from the source systems that are valid and conformed table values."
  },
  {
    "tag": "4.2",
    "question": "What happens during the delivering component of Kimball's ETL approach?",
    "answer": "During the delivery process, data are physically structured, loaded, and delivered into the target (dimensional) data tables. When the process has been completed, the DWH contains a combination of granular data and multidimensional (OLAP) data. New data are continuously loaded using ETL routines to ensure that newly loaded data are correctly appended, maintaining data integrity and avoiding data redundancy."
  },
  {
    "tag": "4.2",
    "question": "What does managing the ETL environment involve, and what systems must be in place?",
    "answer": "Managing the ETL environment involves the ongoing management and support of the ETL system to ensure it is reliable and that ETL processes run consistently to completion, making trustworthy data available to users in a timely manner. The DWH must consistently meet agreed-upon service levels, be manageable, and evolve gracefully with the business. A suitable backup and recovery process must be in place, a version control and version migration system must be implemented, and a robust job scheduler must be used to ensure that all ETL job streams and workflows are created, managed, and monitored optimally."
  },
  {
    "tag": "4.2",
    "question": "MCQ: Which component of Kimball's ETL approach is described as physically structuring, loading, and delivering data into the target dimensional data tables?\nA) Extracting\nB) Cleansing and conforming\nC) Delivering\nD) Managing",
    "answer": "C) Delivering — during this process, data are physically structured, loaded, and delivered into the target (dimensional) data tables, resulting in the DWH containing a combination of granular and multidimensional (OLAP) data."
  },
  {
    "tag": "4.2",
    "question": "Why is manual coding of ETL not recommended, and what must ETL systems be able to read from?",
    "answer": "Manual coding is not recommended, especially for large companies with multiple source systems and masses of data. ETL systems must be able to read data from numerous different sources, such as Object Linking and Embedding Database (OLE DB), Open Database Connectivity (ODBC), flat files, and various native database drivers."
  },
  {
    "tag": "4.2",
    "question": "What does the chosen ETL tool dictate?",
    "answer": "The chosen ETL tool dictates the time that will be spent on data extraction, the data extraction approaches, the transformation types that can be applied, the simplicity of the transformation, the definition of business rules to validate and cleanse data to optimize analytics, the methods of ensuring data quality in the DWH, and the process of distributing data from the DWH to BI applications."
  },
  {
    "tag": "4.2",
    "question": "Name five benefits of using commercial ETL tools over manual coding.",
    "answer": "(1) Provision of a foundation to capture the metadata of all ETL process steps. (2) Simplified version control in multi-developer environments. (3) Provision of advanced transformation logic. (4) Improvement of the system's performance at lower levels of expertise. (5) Facilitation of self-documentation using graphical tools — hand-coded jobs, on the other hand, involve a complex mixture of staging tables, stored procedures, SQL scripts, and scripts of the operational system."
  },
  {
    "tag": "4.2",
    "question": "Long Answer: Explain Section 4.2 in full — what ETL is, how Inmon's I&T layer works, how Kimball's ETL approach differs, all four major Kimball ETL components with their subcomponents (including all five CDC methods, the three cleansing subcomponents, and the concept of survivorship), and the role and benefits of ETL tools.",
    "answer": "ETL stands for extract, transform, and load. It involves extracting data from various source systems, transforming data into a unified format, and loading data into a DWH for analysis. The ETL process is executed in a staging area before loading data into the presentation server, which is a platform where users can query data directly. Inmon's CIF model applies an integration and transformation (I&T) layer — an architectural component made up of programs and applications that capture, transform, and move data from transactional environments to the ODS and DWH, turning raw data into corporate assets. It uses a logical data model as a blueprint, generates metadata as a reference guide, and is unstable because programs constantly change as the DWH is built incrementally and iteratively. ETL in the Inmon model loads all organizational data into a giant DWH. In contrast, Kimball's ETL loads data into smaller data marts. Before building the ETL architecture, requirements must be gathered across nine critical areas: business needs, compliance, data quality, security, data integration, data latency, archiving and lineage, user delivery interfaces, available skills, and legacy licenses. The Kimball ETL approach has four major components: (1) Extracting: aims to understand source data and transfer it correctly into the DWH without affecting operational systems. Raw data are written to a staging environment without significant restructuring. Subcomponents include data profiling (analyzing content, consistency, and structure to determine which sources to include and identify quality issues), a CDC system (isolating the most recent source data using audit columns, timed extracts, full 'diff compare,' database log scraping, or message queue monitoring), and data extraction itself (as a file or as a stream). (2) Cleansing and conforming: aims to improve data quality, merge source data, and create conformed dimensions and metrics. Metadata are created throughout. Subcomponents include data cleansing (with visual diagnostic filters, error event schema, and audit assembler), error event schema and audit assembler (capturing and resolving ETL errors), and data deduplication and conforming (survivorship — combining conflicting records into a unified conformed row using priority business rules; and alignment of shared dimension tables across departments to be structurally identical, deduplicated, and standardized via domain mappings). (3) Delivering: data are physically structured, loaded, and delivered into target dimensional tables, producing a DWH with a combination of granular and OLAP data; ETL routines append new data while maintaining integrity and avoiding redundancy. (4) Managing: ensures ETL systems run reliably and consistently, the DWH meets service levels, and a backup/recovery process, version control system, and robust job scheduler are in place. ETL is complex and resource-intensive, so appropriate tools are required. ETL systems must read from OLE DB, ODBC, flat files, and native database drivers. Commercial ETL tools provide metadata capture, version control, advanced transformation logic, improved performance, and self-documentation via graphical tools."
  }

]
