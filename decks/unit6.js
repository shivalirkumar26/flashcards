const unit6Deck = [

 {
   "tag": "6.1",
   "question": "What is a data warehouse architecture (DWHA)?",
   "answer": "A DWHA describes the structure of a data warehouse. It describes relevant guidelines, standards, and services to effectively link the organization's strategic requirements with its systems and applications in order to achieve business goals. A fitting DWHA ensures that up-to-date and relevant decision support information is consistently and accurately derived from the operational data, promotes efficient and cost-effective sharing of data, and improves organizational productivity."
 },
 {
   "tag": "6.1",
   "question": "What factors dictate the choice of DWHA, and what are the consequences of a wrong architecture choice?",
   "answer": "The organization's requirements, data sources, data types, data formats, and existing systems dictate the choice of DWHA. A wrong architecture choice results in issues such as a lack of scalability and problems with the performance of the DWH."
 },
 {
   "tag": "6.1",
   "question": "Which DWH approach does the hub-and-spoke DWHA correspond with, and what is it also referred to as?",
   "answer": "The hub-and-spoke DWHA corresponds with the DWH approach presented by Inmon (2006). It is also referred to as the Corporate Information Factory (CIF)."
 },
 {
   "tag": "6.1",
   "question": "MCQ: Which of the following best describes the build process of the hub-and-spoke DWHA?\nA) Bottom-up — data marts are built first, then the central DWH is added\nB) Top-down — the central DWH is built first, then data marts are added one by one\nC) Parallel — the central DWH and data marts are built simultaneously\nD) Incremental — only data marts are built; no central DWH is required",
   "answer": "B) Top-down — the DWH is implemented by means of a top-down process; it is developed iteratively, with the central DWH built first before data marts are built and added one by one."
 },
 {
   "tag": "6.1",
   "question": "In what format are the organization's atomic level data maintained in the hub-and-spoke DWHA?",
   "answer": "The organization's atomic level data are maintained in a relational, normalized (3NF) format in the central DWH."
 },
 {
   "tag": "6.1",
   "question": "For what purposes can data marts be created in the hub-and-spoke DWHA?",
   "answer": "Data marts are created and added for the subject and/or functional areas based on the needs of the business users. A data mart can serve a department, a functional business area, or a specialized purpose such as data mining."
 },
 {
   "tag": "6.1",
   "question": "What modeling approaches and visualizations can be used for data marts in the hub-and-spoke DWHA?",
   "answer": "Data marts can be modeled using dimensional modeling as well as entity-relationship diagram (ERD) principles. Data mart models can be visualized by notations such as ADAPT or ERDs, with detail in associated data item sets (DISs) or Multidimensional Entity-Relationship-Models (MERMs)."
 },
 {
   "tag": "6.1",
   "question": "What is the single version of the truth principle in the hub-and-spoke DWHA?",
   "answer": "As the purpose of a DWH is to maintain the single version of the truth, data marts must always source their data from the central DWH, regardless of how they are modeled and visualized."
 },
 {
   "tag": "6.1",
   "question": "In what forms can data be contained in data marts in the hub-and-spoke DWHA?",
   "answer": "Data marts can contain data in various forms — for example, a data mart's data can be normalized, denormalized, summarized, or aggregated."
 },
 {
   "tag": "6.1",
   "question": "MCQ: What type of data and tools is the hub-and-spoke approach suitable for?\nA) Unstructured data using NoSQL and big data tools\nB) Semi-structured data using Hive and Hadoop tools\nC) Structured data using traditional and relational database and DWH tools\nD) Real-time data using streaming and cloud-based tools",
   "answer": "C) The hub-and-spoke approach is suitable for developing a relational enterprise-wide DWH that stores structured data. Traditional and relational database and DWH tools are used."
 },
 {
   "tag": "6.1",
   "question": "What is the critical distinction between the hub-and-spoke DWHA and the centralized DWHA?",
   "answer": "The hub-and-spoke DWHA includes a central DWH surrounded by dependent data marts that are added one by one. The centralized DWHA does not include any dependent data marts — it applies the same data model to serve the needs of various individual business units or departments directly."
 },
 {
   "tag": "6.1",
   "question": "Long Answer: Explain Section 6.1 in full — what a DWHA is, what the hub-and-spoke DWHA is and who it corresponds with, how it is built, how data are stored in the central DWH, how data marts are created and modeled, the single version of the truth principle, what data marts can contain, and what the hub-and-spoke approach is suitable for.",
   "answer": "A DWHA describes the structure of a DWH — it describes relevant guidelines, standards, and services to effectively link the organization's strategic requirements with its systems and applications to achieve business goals. A fitting DWHA ensures that up-to-date and relevant decision support information is consistently and accurately derived from operational data, promotes efficient and cost-effective data sharing, and improves organizational productivity. Selecting a suitable architecture is a key factor influencing the overall success of the DWH project — a wrong choice results in issues such as a lack of scalability and performance problems. The hub-and-spoke DWHA corresponds with the DWH approach presented by Inmon (2006) and is also referred to as the Corporate Information Factory (CIF). It uses a top-down process — the DWH is developed iteratively, with the central DWH built first before data marts are built and added one by one. The organization's atomic level data are maintained in a relational, normalized (3NF) format in the central DWH. Data marts are created and added for subject and/or functional areas based on business user needs — a data mart can serve a department, a functional business area, or a specialized purpose such as data mining. Data marts can be modeled using dimensional modeling as well as ERD principles, visualized via ADAPT or ERDs with DISs or MERMs. Regardless of how they are modeled, data marts must always source their data from the central DWH to maintain the single version of the truth. Data marts can contain normalized, denormalized, summarized, or aggregated data. The hub-and-spoke approach is suitable for developing a relational enterprise-wide DWH that stores structured data, using traditional and relational database and DWH tools."
 },

 {
   "tag": "6.2",
   "question": "Which DWH approach does the data mart bus DWHA represent, and what method does it use?",
   "answer": "The data mart bus DWHA is represented by the Kimball approach to designing a DWH, as detailed in Kimball and Ross (2013). It entails a bottom-up method to develop a DWH, meaning that business-oriented data marts are implemented incrementally and asynchronously."
 },
 {
   "tag": "6.2",
   "question": "What does the data mart bus DWHA include, and what are its data marts based on?",
   "answer": "It includes a central bus matrix that links to several data marts. The data marts are based on organizational business processes. They are implemented to support the stakeholders and participants of business processes."
 },
 {
   "tag": "6.2",
   "question": "How does the build process of the data mart bus DWHA begin?",
   "answer": "The process starts by identifying the business requirements of a specific business process, such as orders, billing, or deliveries. The first data mart is then designed and developed for this business process only. Dimensional modeling principles are used to model the data mart bus DWH."
 },
 {
   "tag": "6.2",
   "question": "MCQ: Which of the following best distinguishes the data mart bus DWHA from the hub-and-spoke DWHA in terms of what it is based on?\nA) The data mart bus is based on the organization's data; hub-and-spoke is based on business processes\nB) The data mart bus is based on the organization's business processes; hub-and-spoke is based on the organization's data\nC) Both are based on the organization's data but use different modeling approaches\nD) Both are based on business processes but differ in their use of conformed dimensions",
   "answer": "B) The data mart bus DWHA is based on the organization's business processes rather than the organization's data — which is the opposite of the hub-and-spoke approach, which is based on the organization's data."
 },
 {
   "tag": "6.2",
   "question": "How are data structured in the data marts of the data mart bus DWHA?",
   "answer": "The data marts contain denormalized data in dimension tables. Tables with transaction data (fact tables) are true to a declared grain. The grain can be granular (with normalized data) or summative (with summarized or aggregated data)."
 },
 {
   "tag": "6.2",
   "question": "What are conformed dimensions, and why must they be developed in the data mart bus DWHA?",
   "answer": "Conformed dimensions entail uniform and agreed-upon descriptions and fields. Where the descriptive information of business processes is common and therefore shared, conformed dimensions must be developed so that the data are maintained in integrated and conformed data marts."
 },
 {
   "tag": "6.2",
   "question": "How is enterprise-wide cohesion achieved in the data mart bus DWHA?",
   "answer": "Enterprise-wide cohesion is achieved through the central bus matrix that indicates all the business processes and conformed dimensions. The bus matrix with the conformed dimensional tables ensures enterprise-wide consistency because the conformed dimensions include detailed descriptors and metrics that are commonly shared among business processes. The bus matrix and conformed dimensions also give an enterprise view of the company's data and ensure that the data marts are logically integrated."
 },
 {
   "tag": "6.2",
   "question": "MCQ: In the data mart bus DWHA, what two elements work together to give an enterprise view of the company's data?\nA) The central DWH and normalized data marts\nB) The bus matrix and conformed dimensions\nC) The ETL pipeline and the staging area\nD) The fact tables and surrogate keys",
   "answer": "B) The bus matrix and conformed dimensions — the bus matrix with the conformed dimensional tables ensures enterprise-wide consistency and gives an enterprise view of the company's data, ensuring that the data marts are logically integrated."
 },
 {
   "tag": "6.2",
   "question": "MCQ: Which DWH is developed using a bottom-up approach?\nA) The independent DWH\nB) The Corporate Information Factory (CIF)\nC) The centralized DWH\nD) The data mart bus DWH",
   "answer": "D) The data mart bus DWH — it entails a bottom-up method to develop a DWH, meaning that business-oriented data marts are implemented incrementally and asynchronously."
 },
 {
   "tag": "6.2",
   "question": "Compare the hub-and-spoke DWHA and the data mart bus DWHA across six dimensions: approach, what it starts with, what it is based on, how the central component differs, how data marts differ, and how enterprise-wide view is achieved.",
   "answer": "Approach: hub-and-spoke is top-down; data mart bus is bottom-up. Starts with: hub-and-spoke starts with the central DWH; data mart bus starts with one specific business process. Based on: hub-and-spoke is based on the organization's data; data mart bus is based on the organization's business processes. Central component: hub-and-spoke has a central DWH holding 3NF normalized atomic data; data mart bus has a central bus matrix linking to several data marts (no single central DWH). Data marts: hub-and-spoke data marts can contain normalized, denormalized, summarized, or aggregated data; data mart bus data marts contain denormalized data in dimension tables with fact tables true to a declared grain. Enterprise-wide view: hub-and-spoke achieves it via the central DWH; data mart bus achieves it via the bus matrix and conformed dimensions. Author: Inmon (hub-and-spoke); Kimball (data mart bus)."
 },
 {
   "tag": "6.2",
   "question": "Long Answer: Explain Section 6.2 in full — what the data mart bus DWHA is, how it is built, how data are structured, what conformed dimensions are and why they are needed, and how enterprise-wide cohesion is achieved.",
   "answer": "The data mart bus DWHA is represented by the Kimball approach to designing a DWH, as detailed in Kimball and Ross (2013). It entails a bottom-up method to develop a DWH, meaning that business-oriented data marts are implemented incrementally and asynchronously. It includes a central bus matrix that links to several data marts. The data marts are based on organizational business processes and are implemented to support the stakeholders and participants of those processes. The process starts by identifying the business requirements of a specific business process — such as orders, billing, or deliveries — and the first data mart is designed and developed for that process only. Dimensional modeling principles are used to model the data mart bus DWH. The data marts contain denormalized data in dimension tables. Fact tables are true to a declared grain — the grain can be granular (with normalized data) or summative (with summarized or aggregated data). Where the descriptive information of business processes is common and shared, conformed dimensions must be developed — these entail uniform and agreed-upon descriptions and fields — so that data are maintained in integrated and conformed data marts. Enterprise-wide cohesion is achieved through the central bus matrix that indicates all the business processes and conformed dimensions. The bus matrix with the conformed dimensional tables ensures enterprise-wide consistency because the conformed dimensions include detailed descriptors and metrics that are commonly shared among business processes. The bus matrix and conformed dimensions also give an enterprise view of the company's data and ensure that the data marts are logically integrated."
 },
  
 {
   "tag": "6.3",
   "question": "What is the defining structural feature of the centralized DWHA?",
   "answer": "The topology of the centralized DWHA is simple — it does not include any dependent data marts."
 },
 {
   "tag": "6.3",
   "question": "How are data gathered and stored in the centralized DWHA?",
   "answer": "Data are gathered from various organizational sources and stored in an enterprise-level, cross-functional information system."
 },
 {
   "tag": "6.3",
   "question": "How does the centralized DWHA serve multiple business units, and what does this require of its data model?",
   "answer": "The centralized DWHA applies the same data model to serve the needs of various individual business units or departments. The data model must therefore extend to take account of the needs of all the multiple business areas."
 },
 {
   "tag": "6.3",
   "question": "MCQ: Which of the following best describes how data are stored in the centralized DWHA?\nA) Data are stored in 3NF normalized format exclusively for transactional processing\nB) Data are stored in denormalized data marts organized by business process\nC) Data are generally stored in a presentation-ready format, with both atomic level and summarized data stored in the DWH\nD) Data are stored only in raw format in a distributed file system",
   "answer": "C) Data in a centralized DWH are generally stored in a presentation-ready format so that they can be used as-is by the business. Both atomic level and summarized data are stored in the DWH, and data can also be made available in a format for further analysis if needed."
 },
 {
   "tag": "6.3",
   "question": "Can data in the centralized DWHA be analyzed further, and what additional views does it include?",
   "answer": "Yes — data can also be made available in a format that can be analyzed further if needed. The centralized DWHA can also include various logical dimensional views."
 },
 {
   "tag": "6.3",
   "question": "What type of organization is the centralized DWHA suitable for, and what are its advantages?",
   "answer": "The centralized DWHA is suitable for an organization that has a fragmented decision support data environment but, at the same time, wants to integrate some of the data. Its advantages include economies of scale and centralized system management capabilities."
 },
 {
   "tag": "6.3",
   "question": "MCQ: Which DWHA is suitable for an organization with a fragmented decision support data environment that wants to integrate some of its data?\nA) Hub-and-spoke DWHA\nB) Data mart bus DWHA\nC) Centralized DWHA\nD) Independent DWHA",
   "answer": "C) Centralized DWHA — it is suitable for an organization that has a fragmented decision support data environment but, at the same time, wants to integrate some of the data. It offers advantages such as economies of scale and centralized system management capabilities."
 },
 {
   "tag": "6.3",
   "question": "What is the critical distinction between the centralized DWHA and the hub-and-spoke DWHA?",
   "answer": "The hub-and-spoke DWHA includes a central DWH surrounded by dependent data marts that are added one by one iteratively; each data mart can have its own model. The centralized DWHA does not include any dependent data marts — it applies one shared data model to serve the needs of all business units or departments directly."
 },
 {
   "tag": "6.3",
   "question": "Long Answer: Explain Section 6.3 in full — what the centralized DWHA is, its defining structural feature, how data are modeled and stored, what it includes, what it is suitable for, its advantages, and how it differs from the hub-and-spoke DWHA.",
   "answer": "The centralized DWHA has a simple topology — it does not include any dependent data marts, which is its single most important distinguishing feature. Data are gathered from various organizational sources and stored in an enterprise-level, cross-functional information system. Unlike hub-and-spoke, which builds separate data marts for different departments, the centralized DWHA applies the same data model to serve the needs of various individual business units or departments — the data model must therefore extend to take account of the needs of all multiple business areas. Data in a centralized DWH are generally stored in a presentation-ready format so they can be used as-is by the business; however, data can also be made available in a format for further analysis if needed. Both atomic level and summarized data are stored in the DWH, and it can also include various logical dimensional views. The centralized DWHA is suitable for an organization that has a fragmented decision support data environment but wants to integrate some of the data. Its advantages include economies of scale and centralized system management capabilities. The key distinction from hub-and-spoke is that hub-and-spoke has dependent data marts added iteratively, each potentially with its own model, while the centralized DWHA has no dependent data marts and uses one shared data model for all business units."
 },

 {
   "tag": "6.4",
   "question": "What is the independent DWHA, and what approach does it use?",
   "answer": "The independent DWHA entails various standalone systems that are developed using a bottom-up approach. Each of the systems draws data directly from source systems. It does not include a central DWH or operational data store (ODS)."
 },
 {
   "tag": "6.4",
   "question": "What components does the independent DWHA typically involve, and how are they linked?",
   "answer": "It typically involves various hybrid and/or loosely coupled components, such as individual DWHs and/or data marts. The data marts and/or different organizational databases and/or DBMSs can be loosely linked. Alternatively, they may not be linked at all, so the individual components and systems operate on their own. The individual structures also execute analyses independently from each other."
 },
 {
   "tag": "6.4",
   "question": "MCQ: Which of the following is NOT a characteristic of the independent DWHA?\nA) It uses a bottom-up approach\nB) It includes a central DWH and an ODS\nC) Individual components may not be linked at all\nD) Each system draws data directly from source systems",
   "answer": "B) The independent DWHA does not include a central DWH or operational data store (ODS) — this is a defining characteristic that distinguishes it from architectures like hub-and-spoke."
 },
 {
   "tag": "6.4",
   "question": "When is the independent DWHA typically created?",
   "answer": "This DWHA is typically created when the organization must have a solution (or solutions) available in a very short space of time."
 },
 {
   "tag": "6.4",
   "question": "What are the two key limitations of the independent DWHA?",
   "answer": "As more data structures are created in an organization, data redundancy will increase over time. The scalability of an independent DWHA is also limited."
 },
 {
   "tag": "6.4",
   "question": "MCQ: Which DWHA is typically created when an organization needs a solution available in a very short space of time, but results in increasing data redundancy and limited scalability over time?\nA) Centralized DWHA\nB) Hub-and-spoke DWHA\nC) Independent DWHA\nD) Federated DWHA",
   "answer": "C) Independent DWHA — it is typically created when an organization must have a solution available in a very short space of time. However, data redundancy increases over time and scalability is limited."
 },
 {
   "tag": "6.4",
   "question": "What is the key structural difference between the independent DWHA and the hub-and-spoke DWHA?",
   "answer": "The hub-and-spoke DWHA includes a central DWH (with atomic 3NF data) and an ODS, with dependent data marts added iteratively — all data marts source from the central DWH. The independent DWHA has no central DWH and no ODS — it consists of standalone systems that draw data directly from source systems and may operate entirely without links to each other."
 },
 {
   "tag": "6.4",
   "question": "Long Answer: Explain Section 6.4 in full — what the independent DWHA is, how it is structured, how components are linked, when it is used, and its two key limitations.",
   "answer": "The independent DWHA entails various standalone systems that are developed using a bottom-up approach. Each of the systems draws data directly from source systems. It does not include a central DWH or operational data store (ODS). It typically involves various hybrid and/or loosely coupled components, such as individual DWHs and/or data marts. The data marts and/or different organizational databases and/or DBMSs can be loosely linked — alternatively, they may not be linked at all, so the individual components and systems operate entirely on their own. The individual structures also execute analyses independently from each other. This DWHA is typically created when the organization must have a solution (or solutions) available in a very short space of time — speed of delivery is the primary driver. However, it has two key limitations: as more data structures are created, data redundancy will increase over time, and the scalability of an independent DWHA is also limited."
 },
 {
   "tag": "6.5",
   "question": "What is a federated DWHA, and what does it leave in place?",
   "answer": "A federated DWHA is a variation of a distributed DWHA, where the global DWH serves as a logical DWH for all local data warehouses. The federated DWHA leaves existing decision support structures — such as data marts, DWHs, and operational systems — as they are. The organization does not attempt to integrate the complex decision support environment that is already in place into a single solution."
 },
 {
   "tag": "6.5",
   "question": "Define 'autonomous data stores' as used in this section.",
   "answer": "Autonomous data stores are data stores that can also be used independently — they can operate outside the scope of the federated data model."
 },
 {
   "tag": "6.5",
   "question": "What does it mean that the data stores in a federated DWHA are heterogeneous?",
   "answer": "The data stores are heterogeneous in nature, meaning they have different storage structures as well as different access languages and application programming interfaces (APIs)."
 },
 {
   "tag": "6.5",
   "question": "MCQ: Which of the following best describes how data are integrated in a federated DWHA?\nA) Data are physically integrated into a central DWH using ETL processes\nB) Data are integrated on demand — in real time and at the user's request — while source data remain in their original location and format\nC) Data are integrated incrementally using conformed dimensions across data marts\nD) Data are integrated once during the initial DWH build and then stored in a shared repository",
   "answer": "B) Federated DWHs do not consist of integrated data. Instead, data are integrated on demand — in real time and at the user's demand — while source data remain in their original location and format."
 },
 {
   "tag": "6.5",
   "question": "What does on-demand integration mean from the user's perspective in a federated DWHA?",
   "answer": "On-demand integration implies that a user views the data as residing in a single, integrated, and homogenous data store. However, based upon requests from users, data from the different autonomous stores are accessed and on-the-fly integrated, while the source data remain in their original location and format. Users can also access the data using a language and API of their choice."
 },
 {
   "tag": "6.5",
   "question": "For what type of organization is the federated DWHA typically used, and why?",
   "answer": "A federated model is typically used by complex organizations — for example, where different companies have merged or organizations have been significantly reorganized. It will therefore be confronted with many political and/or implementation-related challenges upon integration. It is typically used by companies that already have a preexisting, complex decision support environment in place that would not be cost-effective to rebuild fully."
 },
 {
   "tag": "6.5",
   "question": "MCQ: Which of the following best describes the type of organization for which the federated DWHA is most suitable?\nA) A small organization needing a fast, standalone solution\nB) An organization with a fragmented environment that wants to integrate some data using economies of scale\nC) A complex organization with a preexisting decision support environment that would not be cost-effective to rebuild\nD) An organization developing a relational enterprise-wide DWH with structured data from scratch",
   "answer": "C) The federated model is typically used by complex organizations — such as those where companies have merged or been reorganized — that already have a preexisting, complex decision support environment in place that would not be cost-effective to rebuild fully."
 },
 {
   "tag": "6.5",
   "question": "What is the key structural difference between the federated DWHA and the independent DWHA?",
   "answer": "In the independent DWHA, systems may have no connection at all and execute analyses entirely on their own with no overarching integration mechanism. In the federated DWHA, a global DWH acts as a logical umbrella for all local data warehouses — data are integrated on-the-fly when users request it, even though source data remain in their original locations and formats."
 },
 {
   "tag": "6.5",
   "question": "Long Answer: Explain Section 6.5 in full — what the federated DWHA is, how data are stored and why they are described as autonomous and heterogeneous, how on-demand integration works, what users experience, and for what type of organization it is most suitable.",
   "answer": "A federated DWHA is a variation of a distributed DWHA, where the global DWH serves as a logical DWH for all local data warehouses. It leaves existing decision support structures — such as data marts, DWHs, and operational systems — exactly as they are; the organization does not attempt to integrate the complex decision support environment into a single solution. The data in a federated DWH are stored in autonomous data stores — meaning they can operate outside the scope of the federated data model. The data stores are heterogeneous in nature, having different storage structures as well as different access languages and APIs. Federated DWHs do not consist of integrated data. Instead, data are integrated on demand — in real time and at the user's demand. On-demand integration means that a user views the data as residing in a single, integrated, and homogenous data store; however, in reality, data from the different autonomous stores are accessed and on-the-fly integrated based on user requests, while source data remain in their original location and format. Users can also access the data using a language and API of their choice. The federated model is typically used by complex organizations — such as those where different companies have merged or been significantly reorganized — that will be confronted with many political and/or implementation-related challenges upon integration. It is best suited to companies that already have a preexisting, complex decision support environment in place that would not be cost-effective to rebuild fully."
 }


]
