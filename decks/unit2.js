const unit2Deck = [
  
  {
    "tag": "2.1",
    "question": "What basic distinction differentiates single-layer, two-layer, and three-layer DWH architectures?",
    "answer": "The names of the layer-based architectures indicate the number of layers used in the DWH architecture. They differentiate between DWH architectures with one single layer that holds all the data, two separate data layers, or three separate data layers."
  },
  {
    "tag": "2.1",
    "question": "Describe the single-layer architecture: what data does it share, where is it stored, and why is it regarded as a real-time system?",
    "answer": "A single-layer architecture shares identical data with an operational source system. The idea is to store all datasets only once and in the same location (hence 'single layer'), so the organization's databases are used simultaneously for business operations and data analytics. It can therefore be regarded as a real-time system, where the analytic data are updated in real time with the operational data."
  },
  {
    "tag": "2.1",
    "question": "Define 'real-time system' using the coursebook's exact definition.",
    "answer": "A real-time system is a system that is updated continuously and at the time when the transactions occur."
  },
  {
    "tag": "2.1",
    "question": "What problem can arise from the single-layer architecture's design?",
    "answer": "Because the same databases are used simultaneously for business operations and data analytics, this could lead to problems if data analysis impacts the performance of the operational transactions negatively, or vice versa."
  },
  {
    "tag": "2.1",
    "question": "MCQ: Which layer-based architecture shares identical data with an operational source system, storing all datasets only once in the same location? A) Two-layer architecture B) Single-layer architecture C) Three-layer architecture D) Five-layer architecture",
    "answer": "B) Single-layer architecture."
  },
  {
    "tag": "2.1",
    "question": "How does a two-layer architecture differ from a single-layer architecture in terms of data and processing separation?",
    "answer": "A two-layer architecture can be implemented in cases where it is required to separate source (operational) data from analytical (historical) data. With a two-layer architecture, the databases are not used concurrently for business operations and data analytics; therefore, an organization's operational and analytical processing are done apart from each other."
  },
  {
    "tag": "2.1",
    "question": "MCQ: Which layer-based architecture is implemented when source (operational) data must be separated from analytical (historical) data, so operational and analytical processing are done apart from each other? A) Single-layer architecture B) Two-layer architecture C) Three-layer architecture D) Five-layer architecture",
    "answer": "B) Two-layer architecture."
  },
  {
    "tag": "2.1",
    "question": "Describe each of the three layers in a three-layer architecture, as introduced in Section 2.1.",
    "answer": "The first layer stores operational (e.g., real-time) data from production and transactional systems. The second layer is the reconciled data layer, containing data being migrated from the operational to the analytical databases to enable cleaning and transformation, resembling the staging area in a reference DWH. The third layer is the derived data layer, storing data that have been thoroughly cleansed and integrated and that are ready to be used by business users for analysis purposes."
  },
  {
    "tag": "2.1",
    "question": "MCQ: In a three-layer architecture, which layer contains data being migrated from operational to analytical databases to enable cleaning and transformation, resembling a staging area? A) The operational data layer B) The reconciled data layer C) The derived data layer D) The presentation layer",
    "answer": "B) The reconciled data layer."
  },
  {
    "tag": "2.1",
    "question": "MCQ: In a three-layer architecture, which layer stores data that have been thoroughly cleansed and integrated, ready for use by business users for analysis purposes? A) The reconciled data layer B) The operational data layer C) The derived data layer D) The staging layer",
    "answer": "C) The derived data layer."
  },
  {
    "tag": "2.1",
    "question": "What does the five-layer DWH reference architecture (Winseman et al., 2012) add, compared to the three-layer model?",
    "answer": "The five-layer model extends to accommodate data analysis in the base database, in addition to analyses that occur within the data mart level. Furthermore, data transformation can take place in other areas (other than the staging area) of the DWH."
  },
  {
    "tag": "2.1",
    "question": "MCQ: According to Winseman et al. (2012), how many layers can a DWH reference architecture extend to in specific instances? A) Two B) Three C) Four D) Five",
    "answer": "D) Five."
  },
  {
    "tag": "2.1",
    "question": "Long Answer: Give a complete account of Section 2.1, covering the single-layer, two-layer, three-layer, and five-layer DWH architectures.",
    "answer": "Layer-based architectures are named according to the number of layers they use to hold DWH data: single-layer, two-layer, or three-layer. A single-layer architecture shares identical data with an operational source system, storing all datasets only once in the same location; the organization's databases are used simultaneously for business operations and data analytics, making it a real-time system (one updated continuously, at the time transactions occur), with analytic data updated in real time alongside operational data. This can cause problems if data analysis negatively impacts operational transaction performance, or vice versa.\n\nA two-layer architecture is more complex and can be implemented where it is necessary to separate source (operational) data from analytical (historical) data. Its databases are not used concurrently for business operations and data analytics, so operational and analytical processing are done apart from each other.\n\nA three-layer architecture consists of three distinct data layers. The first layer stores operational (e.g., real-time) data from production and transactional systems. The second layer is the reconciled data layer, containing data being migrated from operational to analytical databases to enable cleaning and transformation — resembling the staging area in a reference DWH. The third layer is the derived data layer, storing data that have been thoroughly cleansed and integrated and are ready for use by business users and for analysis.\n\nFinally, Winseman et al. (2012) describe a five-layer DWH reference architecture, which extends the model to accommodate data analysis in the base database (in addition to analyses occurring at the data mart level), and allows data transformation to take place in areas of the DWH other than the staging area."
  },
  
  {
    "tag": "2.2",
    "question": "Which three named architectures are classified as component-based in Section 2.2, and what is each also known as / who details it?",
    "answer": "The central DWH architecture with dependent data marts, also known as the corporate information factory (CIF), as detailed by Inmon (2006); the Data Vault (DV) architecture, as explained by Linstedt and Olschimke (2015); and the data mart bus architecture with several dimensional data marts linked to it (also referred to as a bus architecture), also known as the Kimball DWH approach, as detailed by Kimball et al. (2008) and Kimball and Ross (2013)."
  },
  {
    "tag": "2.2",
    "question": "Describe the central architecture: what is it based on, why is it also called an enterprise DWH, and in what order is it built?",
    "answer": "The central architecture is based on the data requirements of an entire organization (an enterprise), which is why it is also known as an enterprise DWH. All the organization's data are maintained in the central DWH, so the central DWH is built first; dependent data marts for business-specific and subject areas are then developed iteratively."
  },
  {
    "tag": "2.2",
    "question": "Even though the central architecture is developed iteratively, what must be maintained throughout its life cycle, and what kind of data does the central DWH typically hold versus the dependent data marts?",
    "answer": "A holistic and enterprise view of the data must be maintained throughout the life cycle of the DWH. The central DWH typically holds atomic (3NF) level data, while the dependent data marts can contain normalized, denormalized, aggregated, or summarized data."
  },
  {
    "tag": "2.2",
    "question": "MCQ: Why is the central architecture also referred to as a 'hub-and-spoke' design? A) Because data marts are built before the central DWH B) Because of its design of a central DWH surrounded by various dependent data marts C) Because it uses hub, link, and satellite entities D) Because it has no central repository",
    "answer": "B) Because of its design of a central DWH that is surrounded by various dependent data marts."
  },
  {
    "tag": "2.2",
    "question": "In the data mart bus architecture, what is identified first, and how does its underlying basis differ from the central architecture's?",
    "answer": "A single business process and its associated business requirements are identified first, and the first mart is then designed and developed for this business process only. This architecture is based on the organization's business processes (business areas) rather than the organization's data, unlike the central architecture."
  },
  {
    "tag": "2.2",
    "question": "In the data mart bus architecture, how are dimension tables and fact tables structured?",
    "answer": "The data marts contain denormalized data in dimension tables. Tables with transaction data (fact tables) are true to a declared grain. The grain can be granular (with normalized data) or summative (with summarized or aggregated data)."
  },
  {
    "tag": "2.2",
    "question": "What are conformed dimensions, why are they needed, and how is the enterprise-wide view achieved in the data mart bus architecture?",
    "answer": "To begin with, only dimensions (descriptive and contextual information) and measures (transaction data) associated with a given business process are used. Where the descriptive information of business processes is common and therefore shared, conformed dimensions must be developed — uniform and agreed-upon descriptions and fields — so the data are maintained in integrated (and conformed) data marts. The enterprise-wide view is achieved and maintained through the development of the Enterprise Data Warehouse Bus Matrix."
  },
  {
    "tag": "2.2",
    "question": "MCQ: In the data mart bus architecture, what ensures that descriptive information shared across multiple business processes remains consistent? A) The central 3NF schema B) Conformed dimensions C) Satellite entities D) The reconciled data layer",
    "answer": "B) Conformed dimensions."
  },
  {
    "tag": "2.2",
    "question": "Describe the Data Vault as positioned in Section 2.2: what kind of approach is it, what modeling does it apply, and what does it keep separate?",
    "answer": "The DV entails a hybrid approach that includes features of both the CIF and the data mart bus architecture. For example, the DV applies 3NF modeling of data, in addition to dimensional modeling principles. Accordingly, in a DV, the structural information used for the design of the DWH is kept separate from the contextual and descriptive business-related information."
  },
  {
    "tag": "2.2",
    "question": "MCQ: Which architecture is described as a hybrid approach combining features of both the CIF and the data mart bus architecture, applying 3NF modeling alongside dimensional modeling principles? A) The central architecture B) The Data Vault C) The big data architecture D) The hub-and-spoke architecture",
    "answer": "B) The Data Vault."
  },
  {
    "tag": "2.2",
    "question": "Why have big data platforms and architectures emerged, and how does the coursebook define 'big data architecture'?",
    "answer": "As big data cannot be effectively managed and analyzed with traditional, relational DWH approaches and systems, big data platforms and architectures have emerged. Big data architecture refers to the logical and physical structures that facilitate the proper ingestion of, processing of, storage of, management of, and access to high volumes of diverse data."
  },
  {
    "tag": "2.2",
    "question": "What does a big data architecture enable, and what can big data analytics tools subsequently do with it?",
    "answer": "It enables the efficient processing of large volumes of semi-structured and unstructured data so that the data can be effectively stored and analyzed to be used for business purposes. Big data analytics tools are subsequently used to extract vital business information from data that would otherwise be viewed as quite ambiguous, and it can effectively analyze and report on petabyte levels of data by means of familiar SQL-like languages."
  },
  {
    "tag": "2.2",
    "question": "List the four broad levels of layers that a big data architecture typically entails.",
    "answer": "(1) A layer of data sources; (2) layers to ingest, manage, and store data; (3) analysis and processing layers; and (4) user-facing presentation (or consumption) layers to present business users with relevant decision support information and business intelligence (BI)."
  },
  {
    "tag": "2.2",
    "question": "MCQ: Which of the following is NOT one of the four broad layers of a big data architecture? A) A layer of data sources B) Layers to ingest, manage, and store data C) A layer of conformed dimensions D) User-facing presentation (consumption) layers",
    "answer": "C) A layer of conformed dimensions — conformed dimensions are a data mart bus architecture concept, not one of the big data architecture's four layers."
  },
  {
    "tag": "2.2",
    "question": "According to Anand (2021), what do big data sources typically include, and via what two methods can data be imported?",
    "answer": "Big data sources typically include a mixture of open-source data and data from commercial (third-party vendor) data providers. Data can be imported in (static) batches or via (near real-time) streams, so data are managed using batch processing and/or real-time processing."
  },
  {
    "tag": "2.2",
    "question": "Where can big data be stored, according to the coursebook's description of a big data architecture?",
    "answer": "The data are stored in either distributed storage, in a relational database management system (RDBMS) on-premise or in a cloud, or in a hybrid set-up."
  },
  {
    "tag": "2.2",
    "question": "What role does a data lake play in a big data architecture, and what data formats does it accommodate?",
    "answer": "Big data are typically stored in data lakes to keep data from various and diverse sources in their native format. This includes structured, semi-structured, and unstructured data."
  },
  {
    "tag": "2.2",
    "question": "What is an 'analytical data store' in the context of a big data architecture, and what is the 'output dimension'?",
    "answer": "An analytical data store generally stores prepared data in an interactive or non-structured query language (NoSQL) DWH so that the data can be analyzed and queried using big data analytics tools. The output dimension of a big data architecture provides users with a customizable user interface and BI capabilities, for example, offering query results to users."
  },
  {
    "tag": "2.2",
    "question": "MCQ: In a big data architecture, where is 'prepared data' generally stored so it can be analyzed and queried using big data analytics tools? A) In a 3NF central DWH B) In an analytical data store, typically a NoSQL DWH C) In a staging area D) In a conformed dimension table",
    "answer": "B) In an analytical data store, typically a NoSQL DWH."
  },
  {
    "tag": "2.2",
    "question": "Long Answer: Give a complete account of Section 2.2, covering the central architecture, the data mart bus architecture, the Data Vault, and the big data architecture and data lake.",
    "answer": "Component-based architectures are classified by their components and relationships. Section 2.2 positions three traditional approaches plus a newer one. The central architecture is based on the data requirements of an entire organization, making it an enterprise DWH; the central DWH is built first, with dependent data marts for business-specific/subject areas developed iteratively, while a holistic, enterprise view is maintained throughout. The central DWH holds atomic (3NF) data, while dependent data marts can be normalized, denormalized, aggregated, or summarized — and because a central DWH sits surrounded by dependent data marts, this design is also called hub-and-spoke.\n\nThe data mart bus architecture (the Kimball approach) instead identifies a single business process first and builds the first data mart for it alone, making it business-process-based rather than data-based. Its data marts hold denormalized dimension tables, while fact tables are true to a declared grain — either granular (normalized) or summative (summarized/aggregated). Initially only the dimensions and measures relevant to that one business process are used; where descriptive information is shared across business processes, conformed dimensions (uniform, agreed-upon descriptions and fields) are developed so data marts stay integrated. The enterprise-wide view is achieved and maintained via the Enterprise Data Warehouse Bus Matrix.\n\nThe Data Vault is a hybrid approach combining features of both the CIF and the data mart bus architecture — applying 3NF modeling alongside dimensional modeling principles — and keeps structural design information separate from contextual/descriptive business information.\n\nFinally, because big data cannot be effectively managed by traditional relational DWH approaches, big data platforms and architectures have emerged. Big data architecture refers to the logical and physical structures enabling ingestion, processing, storage, management, and access for high volumes of diverse data, allowing efficient processing of semi-structured and unstructured data and, via big data analytics tools, the extraction of business information and SQL-like reporting at petabyte scale. It typically comprises four layers: data sources; ingest/manage/store layers; analysis and processing layers; and user-facing presentation/consumption layers. Data sources mix open-source and commercial data, imported as batches or near-real-time streams, and managed via batch and/or real-time processing; storage can be distributed, RDBMS (on-premise or cloud), or hybrid. Data lakes store this data in its native structured, semi-structured, or unstructured format; an analytical data store (typically a NoSQL DWH) holds prepared data for querying by analytics tools; and the output dimension provides a customizable user interface and BI capabilities, such as delivering query results to users."
  }

]
