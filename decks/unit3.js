const unit3Deck = [

  {
    "tag": "3.1",
    "question": "MCQ: What is the primary purpose of a single-layer DWH architecture?\nA) To provide physical separation between operational and analytical systems\nB) To minimize the amount of data stored by removing redundancy\nC) To enable departmental access via data marts\nD) To support large numbers of concurrent users",
    "answer": "B) To minimize the amount of data stored by removing redundancy — a dense set of data is created to reduce the overall volume of data."
  },
  {
    "tag": "3.1",
    "question": "What is the major drawback of the single-layer architecture in terms of transactional and analytical processing?",
    "answer": "Transactional and analytical processing are not separated. The online transaction processing (OLTP) systems that gather detailed raw data from executing the day-to-day business processes are conjoined with online analytical processing (OLAP) applications that support data requirements such as data analytics, trend analysis, data mining, and reporting."
  },
  {
    "tag": "3.1",
    "question": "Why is the single-layer DWH described as having a 'virtual DWH structure'?",
    "answer": "Because the multidimensional view of the organization's operational data is created by means of middleware, rather than through physical separation."
  },
  {
    "tag": "3.1",
    "question": "What are two consequences of the single-layer architecture's virtual DWH structure?",
    "answer": "Query processing speeds can be slow, and DWH queries can adversely affect transactional workloads in the operational systems."
  },
  {
    "tag": "3.1",
    "question": "MCQ: Which DWH architecture is the most basic of all possible DWH designs and excludes a staging area?\nA) Two-layer architecture\nB) Three-layer architecture\nC) Single-layer architecture\nD) Five-layer architecture",
    "answer": "C) Single-layer architecture."
  },
  {
    "tag": "3.1",
    "question": "Define 'staging area' as used in this unit.",
    "answer": "A space where data is processed (i.e., cleansed and transformed) before being loaded into the DWH."
  },
  {
    "tag": "3.1",
    "question": "Define 'data mining' as used in this unit.",
    "answer": "The process whereby patterns, correlations, and anomalies within large data sets are identified."
  },
  {
    "tag": "3.1",
    "question": "Besides slow query processing, what other reporting-related drawbacks does the single-layer architecture have?",
    "answer": "Query results may be 'messy,' in that non-required operational data can be included in the results. It can also be difficult to link effectively to presentation tools, so reporting capabilities may be inadequate. Furthermore, the flexibility and analytical capabilities of the single-layer architecture are limited."
  },
  {
    "tag": "3.1",
    "question": "For what type of business is a single-layer architecture suitable, and for what type is it not suitable?",
    "answer": "It is suitable for a business where all the raw operational data are in a standardized format, which does not require complex analytics, and where business intelligence (BI) is not used systematically. It is not suitable for large organizations and businesses with complex data requirements, as well as organizations that have several data streams."
  },
  {
    "tag": "3.1",
    "question": "Long Answer: Explain the single-layer DWH architecture in full — its purpose, why it is considered a virtual DWH structure, its drawbacks in terms of performance and reporting, and the type of business for which it is and is not suitable.",
    "answer": "A single-layer DWH architecture aims to minimize the amount of data stored by removing redundancy, creating a dense dataset. Its major drawback is that transactional and analytical processing are not separated: OLTP systems gathering detailed raw data from day-to-day business processes are conjoined with OLAP applications supporting data analytics, trend analysis, data mining, and reporting. It is the most basic DWH design and excludes a staging area. It is fundamentally a virtual DWH structure, since the multidimensional view of the organization's operational data is created by means of middleware. Consequently, query processing speeds can be slow, and DWH queries can adversely affect transactional workloads in the operational systems. Query results may also be 'messy,' as non-required operational data can be included, reporting capabilities may be inadequate, and flexibility and analytical capabilities are limited. It is suitable for a business where all the raw operational data are in a standardized format, which does not require complex analytics, and where BI is not used systematically — but it is not suitable for large organizations and businesses with complex data requirements or several data streams."
  },
  {
    "tag": "3.2",
    "question": "How does a two-layer DWH architecture separate the DWH layer from the source systems?",
    "answer": "The separation is physical, as it uses two servers (i.e., a system server and a database server)."
  },
  {
    "tag": "3.2",
    "question": "List the four data flow stages that the two-layer architecture entails.",
    "answer": "(1) The source layer, (2) data staging, (3) the DWH, and (4) a layer that enables analysis."
  },
  {
    "tag": "3.2",
    "question": "What role does the staging area play in the two-layer architecture?",
    "answer": "It is included between the source systems and DWH applications to cleanse and transform the data prior to loading it into the DWH."
  },
  {
    "tag": "3.2",
    "question": "What can be added between the DWH and the BI applications in a two-layer architecture, and what benefit does this provide?",
    "answer": "A data mart level can be added between the DWH and the BI applications that provide the user interface. This way, departmental access can be given to domain-specific information, and the overall DWH security is enhanced."
  },
  {
    "tag": "3.2",
    "question": "MCQ: Compared to the single-layer architecture, what does the two-layer architecture do better?\nA) It supports unlimited users\nB) It scales effectively for organizational growth\nC) It stores, organizes, and manages data more efficiently\nD) It eliminates the need for a staging area",
    "answer": "C) It stores, organizes, and manages data more efficiently."
  },
  {
    "tag": "3.2",
    "question": "What are the two key limitations of the two-layer architecture, even though it is an enhanced design compared to the single-layer architecture?",
    "answer": "A two-layer architecture design is still not very expandable and cannot effectively scale to accommodate organizational growth. In addition, it cannot support many users."
  },
  {
    "tag": "3.2",
    "question": "Long Answer: Explain the two-layer DWH architecture in full — how it separates the DWH from source systems, its four data flow stages, the role of the staging area and data mart level, and its advantages and limitations compared to the single-layer architecture.",
    "answer": "A two-layer DWH architecture separates the DWH layer from the source systems, with the separation being physical, using two servers (a system server and a database server). It entails four data flow stages: (1) the source layer, (2) data staging, (3) the DWH, and (4) a layer that enables analysis. It includes a staging area between the source systems and DWH applications to cleanse and transform the data prior to loading it into the DWH, plus a discrete layer that facilitates analytical processing. A data mart level can also be added between the DWH and the BI applications, giving departmental access to domain-specific information and enhancing overall DWH security. Compared to the single-layer architecture, the two-layer DWH stores, organizes, and manages data more efficiently. However, it is still not very expandable, cannot effectively scale to accommodate organizational growth, and cannot support many users."
  },
  {
    "tag": "3.3",
    "question": "What does a three-layer DWH architecture typically contain?",
    "answer": "Multiple source systems, a reconciled layer, and a DWH system that includes data marts and a multi-dimensional DWH layer (i.e., OLAP cubes are employed)."
  },
  {
    "tag": "3.3",
    "question": "Define 'reconciled layer.'",
    "answer": "The layer between the physical source systems and the DWH that serves as a standardized, enterprise-wide reference data model."
  },
  {
    "tag": "3.3",
    "question": "Name the three tiers of a three-layer DWH architecture, according to Taylor (2023a).",
    "answer": "A top tier, a middle tier, and a bottom tier."
  },
  {
    "tag": "3.3",
    "question": "Describe the bottom tier of a three-layer architecture.",
    "answer": "The bottom tier generally encompasses a relational database system with data that have been cleansed, transformed, and loaded into a staging area. Data transformation and integration in this tier are executed according to an enterprise-wide reference data model (i.e., the reconciled layer). It entails a database server that consists of an abstraction layer used to consolidate and organize the raw data from the various operational and transactional sources, and it fundamentally provides (relational) storage and management."
  },
  {
    "tag": "3.3",
    "question": "Describe the middle tier of a three-layer architecture.",
    "answer": "The middle tier consists of an abstracted view of the analytical database, in the form of an OLAP server, which reworks the data into a structure most suitable for analyses and queries from the business users' perspectives. It can host several data marts to provide departmental and/or business-process-specific analysis and reporting information."
  },
  {
    "tag": "3.3",
    "question": "What does it mean to 'slice' and 'dice' data, and which tier facilitates this?",
    "answer": "The OLAP server in the middle tier presents data intuitively and facilitates the 'slicing' and 'dicing' of data — that is, the ability to separate and combine the data in a DWH in seemingly endless combinations."
  },
  {
    "tag": "3.3",
    "question": "MCQ: In the example OLAP cube given in the coursebook, which three dimensions are used to present data from various perspectives?\nA) Product type, region, and quarter\nB) Product type, country, and year\nC) Customer, store, and date\nD) Department, employee, and revenue",
    "answer": "B) Product type, country, and year."
  },
  {
    "tag": "3.3",
    "question": "Define ROLAP and MOLAP.",
    "answer": "With ROLAP (relational online analytical processing), an extended relational database management system (RDBMS) maps functions on multidimensional data to standard relational operations. With MOLAP (multidimensional online analytical processing), multidimensional information and processes are implemented on a specific multidimensional OLAP server."
  },
  {
    "tag": "3.3",
    "question": "MCQ: Which OLAP implementation maps functions on multidimensional data to standard relational operations, using an extended RDBMS?\nA) MOLAP\nB) ROLAP\nC) HOLAP\nD) NoSQL OLAP",
    "answer": "B) ROLAP."
  },
  {
    "tag": "3.3",
    "question": "According to Kimball et al. (2008), what are the bottom and middle tiers collectively referred to as, and how is this area described?",
    "answer": "Kimball et al. (2008) refer to the bottom and middle tiers collectively as the 'presentation server' — an area that provides 'a single source for analytic data' in the form of 'database platforms where the data is stored for direct querying by business users, reporting systems, and other BI applications.'"
  },
  {
    "tag": "3.3",
    "question": "Describe the top tier of a three-layer architecture, including the tools used.",
    "answer": "The top tier involves the client-facing front-end layer that is used to access the data in the DWH. The client uses various tools and applications — e.g., BI applications and dashboards, query tools, analysis tools, reporting tools, and data mining tools — to interact with the data in the DWH."
  },
  {
    "tag": "3.3",
    "question": "Why is it important for BI applications used in the top tier to meet certain quality standards, and what are those standards?",
    "answer": "It is critical that BI applications are correct, perform well, are easy to use, and are aesthetically pleasing."
  },
  {
    "tag": "3.3",
    "question": "MCQ: Which tier of the three-layer DWH architecture is the client-facing front-end layer used to access data in the DWH?\nA) Bottom tier\nB) Middle tier\nC) Top tier\nD) Reconciled tier",
    "answer": "C) Top tier."
  },
  {
    "tag": "3.3",
    "question": "MCQ: Which layer-based architecture is described as entailing three tiers that physically separate the storage databases, analytical databases, and front-end (client-facing) layer?\nA) Single-layer architecture\nB) Two-layer architecture\nC) Three-layer architecture\nD) Five-layer architecture",
    "answer": "C) Three-layer architecture."
  },
  {
    "tag": "3.3",
    "question": "Why is the three-layer architecture described as the most modern and most used DWH design for large businesses, and what type of organization typically implements it?",
    "answer": "The data flow, from raw operational data to valuable business insights, is well-defined and well-organized. As this architecture is more complex and expensive, it is usually implemented for large and complex organizations."
  },
  {
    "tag": "3.3",
    "question": "Long Answer: Explain the three-layer DWH architecture in full — what it typically contains, the purpose of each of its three tiers (bottom, middle, top), how OLAP/ROLAP/MOLAP fit into the middle tier, what Kimball et al. call the 'presentation server,' and why this architecture suits large organizations.",
    "answer": "The three-layer DWH architecture typically contains multiple source systems, a reconciled layer, and a DWH system that includes data marts and a multi-dimensional DWH layer using OLAP cubes. It entails a bottom, middle, and top tier. The bottom tier encompasses a relational database system with data cleansed, transformed, and loaded into a staging area, with transformation and integration executed according to the reconciled layer, providing relational storage and management. The middle tier is an abstracted view of the analytical database in the form of an OLAP server, hosting data marts and facilitating the 'slicing' and 'dicing' of data; it can be implemented via ROLAP, where an extended RDBMS maps functions on multidimensional data to standard relational operations, or MOLAP, where multidimensional processes run on a dedicated multidimensional OLAP server. Kimball et al. (2008) refer to the bottom and middle tiers collectively as the 'presentation server,' a single source for analytic data queried directly by business users, reporting systems, and BI applications. The top tier is the client-facing front-end layer, where tools such as BI applications, dashboards, query tools, analysis tools, reporting tools, and data mining tools are used to interact with the DWH; these tools must be correct, perform well, be easy to use, and be aesthetically pleasing. Because the data flow from raw operational data to business insights is well-defined and organized, but more complex and expensive to implement, this architecture is usually reserved for large and complex organizations."
  }
]
