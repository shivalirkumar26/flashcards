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
  }
]
