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
 },
 
 {
   "tag": "6.6",
   "question": "Why did virtual DWHAs emerge?",
   "answer": "Traditional and relational DWHs cannot adapt rapidly to changes that occur in the business environment. For example, if a DWH was not built specifically for real-time processing or streaming, it cannot effectively provide real-time decision support capabilities. Virtual DWHAs emerged to provide real-time analytical processing and decision support capabilities by applying data virtualization techniques."
 },
 {
   "tag": "6.6",
   "question": "What is a virtual DWH, and how does it work?",
   "answer": "A virtual DWH is essentially a logical DWH that allows users to access operational data directly via middleware tools. The operational data are therefore used for analytical purposes as well. Middleware software provides an interface between the operational systems, databases, and front-end tools. It uses table views, where necessary and applicable, to provide analytical capabilities."
 },
 {
   "tag": "6.6",
   "question": "What is data virtualization?",
   "answer": "Data virtualization means that various and diverse data sources are presented to users as one integrated source; however, the data sources are not physically integrated. Operational data sources are manipulated and analyzed using limited data integration functions to offer a unified view of the data to users. This may lead to performance problems in the operational systems."
 },
 {
   "tag": "6.6",
   "question": "What technical details does data virtualization hide from users?",
   "answer": "Virtualization hides the technical complexity without the user needing to concern themselves with technical details. The user is unaware of the physical storage location of data, the database platform languages applicable, the API used, and that data are accessed from various data stores."
 },
 {
   "tag": "6.6",
   "question": "MCQ: What is the key structural difference between the virtual DWHA and the federated DWHA?\nA) The virtual DWHA physically integrates data from distributed systems; the federated DWHA does not\nB) The federated DWHA accesses operational source systems directly via table views; the virtual DWHA hides connections to other DWHs\nC) The virtual DWHA accesses operational source systems directly via middleware/table views; the federated DWHA hides virtual connections to other DWHs or parts of them\nD) Both access data in the same way but differ only in the number of data sources used",
   "answer": "C) In the virtual DWH, there is no access to other distributed systems — instead, there is direct access to the operational source systems via table views. In the federated DWH, the user's access hides virtual connections to other DWHs or parts of them."
 },
 {
   "tag": "6.6",
   "question": "Name the three ways to implement the data virtualization layer.",
   "answer": "(1) A dedicated data virtualization server — multiple data stores appear as if they all reside in a single data store to users. (2) An enterprise service bus — a layer of services that offer standardized access to data and hide the technical details of how and where data are stored from front-end users. (3) A cloud storage solution — the DWH is stored in the cloud and users access data through the cloud API; however, cloud solutions may pose a data security risk and there may be latency issues when accessing data in the cloud."
 },
 {
   "tag": "6.6",
   "question": "MCQ: Which implementation of the data virtualization layer develops a layer of services that offer standardized access to data and hide technical storage details from front-end users?\nA) A dedicated data virtualization server\nB) An enterprise service bus\nC) A cloud storage solution\nD) A middleware table view",
   "answer": "B) An enterprise service bus — it is implemented to develop a layer of services that offer standardized access to data and hide the technical details of how and where data are stored from front-end users."
 },
 {
   "tag": "6.6",
   "question": "What data security and performance risks are associated with using a cloud storage solution for data virtualization?",
   "answer": "Cloud solutions may pose a data security risk. There may also be latency issues when accessing data in the cloud."
 },
 {
   "tag": "6.6",
   "question": "Name four vendors that offer complete cloud DWH solutions.",
   "answer": "AWS Redshift, Microsoft Azure, Google BigQuery, and Snowflake."
 },
 {
   "tag": "6.6",
   "question": "For what type of organization is a virtual DWH useful?",
   "answer": "A virtual DWH is useful for an organization that does not want to redesign and change its existing underlying infrastructure, or when it has raw data in a standardized form and does not require complex analytics to be performed on the data."
 },
 {
   "tag": "6.6",
   "question": "What are the three drawbacks of the virtual DWHA?",
   "answer": "(1) Multiple databases may potentially need continuous and expensive maintenance. (2) Complex queries may take a long time to execute in cases where it is necessary to fetch the data from several separate databases. (3) Transformation software may still be needed to make data digestible for end users and reporting tools."
 },
 {
   "tag": "6.6",
   "question": "MCQ: Which of the following is NOT a drawback of the virtual DWHA?\nA) Multiple databases may need continuous and expensive maintenance\nB) Complex queries may take a long time to execute when fetching from several separate databases\nC) Data are physically integrated, creating redundancy across systems\nD) Transformation software may still be needed to make data digestible for end users",
   "answer": "C) Data are not physically integrated in a virtual DWHA — the data sources remain in their original locations and are presented as one unified source via data virtualization. Physical integration and redundancy are not drawbacks of the virtual DWHA."
 },
 {
   "tag": "6.6",
   "question": "Long Answer: Explain Section 6.6 in full — why virtual DWHAs emerged, what a virtual DWH is, what data virtualization means and what it hides, how it differs from the federated DWHA, the three implementation options for the data virtualization layer, when it is useful, and its three drawbacks.",
   "answer": "Traditional and relational DWHs cannot adapt rapidly to changes in the business environment — for example, if a DWH was not built for real-time processing or streaming, it cannot provide real-time decision support. Virtual DWHAs emerged to provide real-time analytical processing and decision support capabilities by applying data virtualization techniques. A virtual DWH is essentially a logical DWH that allows users to access operational data directly via middleware tools — operational data are therefore used for analytical purposes as well. Middleware software provides an interface between the operational systems, databases, and front-end tools, using table views to provide analytical capabilities. This differs from the federated DWHA: in the federated DWH, the user's access hides virtual connections to other DWHs or parts of them; in the virtual DWH, there is no access to other distributed systems — instead, there is direct access to the operational source systems via table views. Data virtualization means various and diverse data sources are presented to users as one integrated source, but the sources are not physically integrated — operational data sources are manipulated and analyzed using limited data integration functions to offer a unified view. Virtualization hides the physical storage location of data, the database platform languages, the API used, and that data are accessed from various stores. Three implementation options exist: (1) a dedicated data virtualization server — multiple data stores appear as one to users; (2) an enterprise service bus — a layer of services offering standardized access while hiding technical storage details; (3) a cloud storage solution — users access data via the cloud API, though this may pose security risks and latency issues. Named vendors include AWS Redshift, Microsoft Azure, Google BigQuery, and Snowflake. A virtual DWH is useful for organizations that do not want to redesign existing infrastructure, or that have standardized raw data and do not require complex analytics. Drawbacks include: multiple databases requiring continuous and expensive maintenance; complex queries taking long to execute when fetching from several separate databases; and transformation software potentially still being needed to make data digestible for end users and reporting tools."
 },
 
 {
   "tag": "6.7",
   "question": "What is a distributed DWHA?",
   "answer": "A distributed DWHA entails various distributed DWHs that work in parallel. The DWHs can, for example, be built on multi-node cloud computing platforms. The topology entails various DWHs that are connected via a network."
 },
 {
   "tag": "6.7",
   "question": "What are the two structural options for a distributed DWHA?",
   "answer": "(1) Various DWHs connected via a network, all working in parallel. (2) Distributed data marts that are logically integrated — each data mart addresses a specific departmental business problem. However, the data marts must adhere to predefined enterprise data and metadata models so that they can still be shared between business processes and departments at a later stage."
 },
 {
   "tag": "6.7",
   "question": "What requirement must distributed data marts meet in a distributed DWHA, and why?",
   "answer": "The data marts must adhere to predefined enterprise data and metadata models. In this way, the data marts can still be shared between business processes and departments at a later stage."
 },
 {
   "tag": "6.7",
   "question": "How are data processed and physically stored in a distributed DWH?",
   "answer": "Data in a distributed DWH can be pre-processed based on a predefined schema. The data are physically distributed in relational database management systems (RDBMSs) that are structured according to the predefined schema. Partitioning algorithms are applied to fragment the DWH schema and allocate the fragments over computing nodes. The fragments can then be duplicated and stored in different computing nodes to increase performance, since data can be accessed faster."
 },
 {
   "tag": "6.7",
   "question": "MCQ: What is the purpose of applying partitioning algorithms in a distributed DWHA?\nA) To normalize data into 3NF across all distributed nodes\nB) To fragment the DWH schema and allocate the fragments over computing nodes, then duplicate them to increase performance\nC) To integrate data on demand in real time at the user's request\nD) To create conformed dimensions across distributed data marts",
   "answer": "B) Partitioning algorithms are applied to fragment the DWH schema and allocate the fragments over computing nodes. The fragments can then be duplicated and stored in different computing nodes to increase performance, since data can be accessed faster."
 },
 {
   "tag": "6.7",
   "question": "What does a distributed DWH look like from the user's perspective, despite the physical fragmentation?",
   "answer": "Regardless of the fragmentation, it will appear as if the data are stored in a single central enterprise DWH from a user's perspective."
 },
 {
   "tag": "6.7",
   "question": "What are the advantages of a distributed DWHA?",
   "answer": "Distributed DWHs offer rapid build time. Furthermore, they are economical and inexpensive. They provide a good return on investment while being relatively low risk. In addition, they are expandable and adapt easily when the business needs change."
 },
 {
   "tag": "6.7",
   "question": "MCQ: Which of the following is the key limitation of the distributed DWHA?\nA) It cannot be built on cloud computing platforms\nB) It is only suitable for organizations with light data loads\nC) It does not allow data marts to be shared between departments\nD) It requires all data to be stored in a single central DWH",
   "answer": "B) A distributed DWHA is only suitable for organizations with light data loads."
 },
 {
   "tag": "6.7",
   "question": "What is the key structural difference between the distributed DWHA and the federated DWHA?",
   "answer": "In a federated DWHA, existing decision support structures are left as they are — data stores are autonomous and heterogeneous, and data are integrated on demand and on-the-fly while remaining in their original locations. In a distributed DWHA, multiple DWHs work in parallel and are connected via a network, with data physically distributed across RDBMSs according to a predefined schema and logically integrated — users see one central enterprise DWH rather than distributed stores."
 },
 {
   "tag": "6.7",
   "question": "What is the key structural difference between the distributed DWHA and the independent DWHA?",
   "answer": "The independent DWHA consists of standalone systems that may not be linked at all and execute analyses entirely independently, with no enterprise data or metadata model governing them. The distributed DWHA consists of multiple DWHs or data marts working in parallel and connected via a network, with data marts required to adhere to predefined enterprise data and metadata models so they can be shared later."
 },
 {
   "tag": "6.7",
   "question": "Long Answer: Explain Section 6.7 in full — what a distributed DWHA is, its two structural options, how data are pre-processed and stored using partitioning algorithms, what users experience, its advantages, and its key limitation.",
   "answer": "A distributed DWHA entails various distributed DWHs that work in parallel, built for example on multi-node cloud computing platforms. The topology entails various DWHs connected via a network. It can be structured in two ways: (1) multiple DWHs connected via a network working in parallel, or (2) distributed data marts that are logically integrated, each addressing a specific departmental business problem — however, the data marts must adhere to predefined enterprise data and metadata models so they can be shared between business processes and departments at a later stage. Data in a distributed DWH can be pre-processed based on a predefined schema — the data are physically distributed in RDBMSs structured according to that schema. Partitioning algorithms are applied to fragment the DWH schema and allocate the fragments over computing nodes; the fragments can then be duplicated and stored in different computing nodes to increase performance since data can be accessed faster. Regardless of the fragmentation, from the user's perspective it will appear as if the data are stored in a single central enterprise DWH. Advantages include: rapid build time; it is economical and inexpensive; it provides a good return on investment while being relatively low risk; and it is expandable and adapts easily when business needs change. However, a distributed DWHA is only suitable for organizations with light data loads — this is its key limitation."
 },
 
 {
   "tag": "6.8",
   "question": "What is the big DWHA, and what type of data is it used for?",
   "answer": "The big DWHA is used for big data — data that are semi-structured or unstructured. It is implemented on a platform such as Hadoop and applies a distributed file system, such as HDFS, to store data. MapReduce is used to process the data. Complementary tools such as Spark and Hive can also be used to analyze the data and provide reporting mechanisms."
 },
 {
   "tag": "6.8",
   "question": "MCQ: Which DWHA is recommended to manage unstructured data?\nA) Hub-and-spoke DWHA\nB) Centralized DWHA\nC) Distributed DWHA\nD) Big data DWHA",
   "answer": "D) Big data DWHA — it is used for big data (i.e., data that are semi-structured or unstructured), implemented on a platform such as Hadoop using HDFS for storage and MapReduce for processing."
 },
 {
   "tag": "6.8",
   "question": "Describe the two implementation approaches for a big DWHA.",
   "answer": "(1) Hadoop to RDBMS: Hadoop ingests all types of data (unstructured, semi-structured, and structured), then processes and distributes all the data to an RDBMS-type environment. The BI tools (the consumption environment) are populated from the RDBMS. (2) Parallel Hadoop and RDBMS: A Hadoop system is used in parallel with the RDBMS environment — both operate simultaneously rather than one feeding into the other."
 },
 {
   "tag": "6.8",
   "question": "MCQ: In the 'Hadoop to RDBMS' big DWHA approach, where are the BI tools (consumption environment) populated from?\nA) Directly from HDFS\nB) From the Hadoop cluster\nC) From the RDBMS-type environment\nD) From HBase",
   "answer": "C) The BI tools (the consumption environment) are populated from the RDBMS-type environment, which receives all processed data from Hadoop."
 },
 {
   "tag": "6.8",
   "question": "How is big data stored in a big DWHA, and how many copies does HDFS keep by default?",
   "answer": "Big data are stored in HDFS in a Hadoop cluster. HDFS automatically replicates data across the nodes in the cluster and keeps three copies of the data by default."
 },
 {
   "tag": "6.8",
   "question": "What role does HBase play in the big DWHA?",
   "answer": "HBase is a non-relational, distributed, wide-column store and another component of the Hadoop ecosystem useful for optimizing data storage. It runs on top of HDFS and provides compression, in-memory operations, indexing, and transactional capabilities."
 },
 {
   "tag": "6.8",
   "question": "How did the introduction of YARN change data processing in the big DWHA?",
   "answer": "Initially, MapReduce jobs had to be programmed using languages such as Java and Python since data had to be processed using the MapReduce processing model. With the introduction of YARN, it became possible to use other data processing models such as Spark and Hive. Hive is typically used to process batches of data, while Spark is used to process real-time data streams."
 },
 {
   "tag": "6.8",
   "question": "How does Hive enable Hadoop to function as a DWH-type system?",
   "answer": "The formal query capabilities that HiveQL offers mean that Hadoop can be used as a DWH-type system. Hive facilitates the summarization of data, ad-hoc queries, and the analysis of data in both HDFS and HBase. It also enables easy integration with BI and data visualization tools."
 },
 {
   "tag": "6.8",
   "question": "Why is integrating big data architectures with Data Vault 2.0 increasingly popular?",
   "answer": "Integrating big data architectures with Data Vault 2.0 to create big data DWHAs is becoming increasingly popular because a Data Vault DWH is flexible and scalable."
 },
 {
   "tag": "6.8",
   "question": "What is Azure Synapse, and how is its data organized?",
   "answer": "Azure Synapse is a massively parallel processing (MPP) database system, consisting of synapse instances that store data in columnar formats — this enables distributed querying capabilities that suit the performance of OLAP workloads. The data in the instances are dispersed across 60 underlying databases called distributions. It is necessary to organize the data so that queries are handled quickly and efficiently."
 },
 {
   "tag": "6.8",
   "question": "Define 'synapse instances' as used in this section.",
   "answer": "Synapse instances are data stores that store data in columnar formats; this enables distributed querying capabilities that suit the performance of online analytical processing (OLAP) workloads better."
 },
 {
   "tag": "6.8",
   "question": "Define 'deterministic algorithm' as used in this section.",
   "answer": "A deterministic algorithm is an algorithm that always produces the same output when given a specific input."
 },
 {
   "tag": "6.8",
   "question": "Name and describe the three Azure data distribution methods.",
   "answer": "(1) Round robin: the default method used when no strategy is specified; distributes data sequentially and equally among underlying distributions; provides fast performance for the staging phase of ETL. (2) Hash: uses a hash function and a deterministic algorithm to assign a row to a distribution; provides good query performance for large tables containing joins and aggregations. (3) Replicated tables: caches a complete copy of each compute node; uses additional storage and overheads, so it is impractical when working with large tables; useful for small tables such as lookup tables."
 },
 {
   "tag": "6.8",
   "question": "MCQ: Which Azure distribution method is the default when no strategy is specified, and provides fast performance for the ETL staging phase?\nA) Hash\nB) Replicated tables\nC) Round robin\nD) Partitioned distribution",
   "answer": "C) Round robin — it is the default method used when no strategy is specified; it distributes data sequentially and equally among underlying distributions and provides fast performance for the staging phase of ETL."
 },
 {
   "tag": "6.8",
   "question": "MCQ: Which Azure distribution method uses a deterministic algorithm to assign rows to distributions and provides good query performance for large tables with joins and aggregations?\nA) Round robin\nB) Replicated tables\nC) Hash\nD) Columnar distribution",
   "answer": "C) Hash — it uses a hash function and a deterministic algorithm to assign a row to a distribution, providing good query performance for large tables containing joins and aggregations."
 },
 {
   "tag": "6.8",
   "question": "When is the replicated tables Azure distribution method useful, and when is it impractical?",
   "answer": "Replicated tables cache a complete copy of each compute node. It uses additional storage and overheads, so it is impractical when working with large tables. However, it is useful for small tables, such as lookup tables."
 },
 {
   "tag": "6.8",
   "question": "What is a Hadoop distribution, and what does it include?",
   "answer": "When Hadoop-related technologies are used, a Hadoop distribution is used to assemble and create the required technologies. It entails more than the distribution of data — it includes the complete setup of tools and technologies as well. Cloudera CDH and Hortonworks HDP are examples of popular Hadoop distributions."
 },
 {
   "tag": "6.8",
   "question": "What proprietary components does Cloudera offer in addition to open-source Hadoop components, and what does each do?",
   "answer": "Cloudera offers vendor-specific proprietary software on top of open-source components: Cloudera Manager (used to manage the suite of products), Impala (provides an interface that can process SQL queries quickly), and Cloudera Search (provides real-time access to products). Cloudera claims to be an enterprise data hub — it is therefore not necessary to purchase and employ additional DWH software with a Cloudera distribution."
 },
 {
   "tag": "6.8",
   "question": "What open-source software does Hortonworks HDP use, and how does it provide DWH capabilities?",
   "answer": "Hortonworks offers a fully open-source distribution using: Ambari (used to manage the suite), Stinger (used to handle queries), and Apache Solr (used to search for data). However, additional proprietary software is used for data warehousing — Hortonworks partners with Teradata to provide specific DWH capabilities."
 },
 {
   "tag": "6.8",
   "question": "MCQ: Which Hadoop distribution claims to be an enterprise data hub, making it unnecessary to purchase additional DWH software?\nA) Hortonworks HDP\nB) Apache Hadoop\nC) Cloudera CDH\nD) Azure Synapse",
   "answer": "C) Cloudera CDH — Cloudera claims to be an enterprise data hub; it is therefore not necessary to purchase and employ additional DWH software with a Cloudera distribution."
 },
 {
   "tag": "6.8",
   "question": "Long Answer: Explain Section 6.8 in full — what the big DWHA is, its two implementation approaches, how big data is stored and processed, HBase's role, how YARN expanded processing options, the role of Hive and HiveQL, Data Vault 2.0 integration, Azure Synapse and its three distribution methods, and the two Hadoop distributions (Cloudera and Hortonworks) with their components.",
   "answer": "The big DWHA is used for big data — semi-structured or unstructured data — implemented on a platform such as Hadoop using HDFS for storage and MapReduce for processing. Complementary tools such as Spark and Hive can also analyze data and provide reporting. It can be implemented in two ways: (1) Hadoop to RDBMS — Hadoop ingests all types of data, processes and distributes them to an RDBMS-type environment, and BI tools are populated from the RDBMS; (2) Parallel Hadoop and RDBMS — a Hadoop system runs in parallel alongside the RDBMS environment. Big data are stored in HDFS in a Hadoop cluster, which automatically replicates data across nodes, keeping three copies by default. HBase is a non-relational, distributed, wide-column store running on top of HDFS, providing compression, in-memory operations, indexing, and transactional capabilities for optimized storage. Initially, MapReduce jobs required Java or Python; with YARN, other models became possible — Hive (for batch processing) and Spark (for real-time streams). HiveQL's formal query capabilities mean Hadoop can function as a DWH-type system, facilitating summarization, ad-hoc queries, and analysis in HDFS and HBase, with easy BI integration. Integrating big data architectures with Data Vault 2.0 is increasingly popular due to its flexibility and scalability. Azure Synapse is an MPP database system with synapse instances (columnar data stores enabling OLAP querying) dispersed across 60 underlying distributions. Azure distributes data via: round robin (default; sequential, equal distribution; fast ETL staging performance), hash (deterministic algorithm assigns rows to distributions; good for large tables with joins and aggregations), and replicated tables (caches a full copy per compute node; impractical for large tables; useful for small lookup tables). Hadoop distributions include the complete setup of tools and technologies. Cloudera CDH uses open-source components plus proprietary tools — Cloudera Manager (suite management), Impala (fast SQL queries), Cloudera Search (real-time access) — and claims to be an enterprise data hub requiring no additional DWH software. Hortonworks HDP is fully open-source — Ambari (suite management), Stinger (query handling), Apache Solr (data search) — but partners with Teradata for DWH capabilities."
 },

 {
   "tag": "6.9",
   "question": "What must the DWHA documentation include to ensure successful DWH implementation?",
   "answer": "The DWHA must be documented clearly at the beginning of the DWH project. This documentation must unambiguously describe the structure of the DWH, including all applicable guidelines, standards, and services that link the organization's strategic data requirements with all integrated systems and applications used to achieve business goals. It must also ensure that analytical information is consistently and accurately derived from operational data."
 },
 {
   "tag": "6.9",
   "question": "What is the purpose of the DWH data model in the DWHA, and what does it encapsulate?",
   "answer": "The DWHA should include a DWH data model that documents the organization's data elements used to inform decisions. The data elements encapsulate the company's key performance indicators (KPIs), so at any point in time they can be used to get an indication of how well the organization is performing."
 },
 {
   "tag": "6.9",
   "question": "What requirements must be met for each key data entity in the DWHA documentation?",
   "answer": "Every key data entity should be clearly and unambiguously defined, meaning it must include a description of how and where each data entity is used. In addition, the formulas and methods used to derive, aggregate, and summarize data must be defined."
 },
 {
   "tag": "6.9",
   "question": "What ETL-related items must be specified in the DWHA documentation?",
   "answer": "The ETL processes to cleanse, transform, and integrate data must be specified. Data sources, types, and formats should be examined and defined to ensure that ETL logic and interfaces are developed correctly."
 },
 {
   "tag": "6.9",
   "question": "What are the two types of metadata in a DWHA, and what is the purpose of each?",
   "answer": "Structural metadata are useful to manage and control the creation of a DWH — they describe the structure and content of the DWH. Access metadata are used to regulate access to the DWH — they are vital to ensure quality and keep data secure."
 },
 {
   "tag": "6.9",
   "question": "MCQ: Which type of metadata describes the structure and content of a DWH and is used to manage and control its creation?\nA) Access metadata\nB) Operational metadata\nC) Structural metadata\nD) ETL metadata",
   "answer": "C) Structural metadata — they are useful to manage and control the creation of a DWH and describe its structure and content."
 },
 {
   "tag": "6.9",
   "question": "MCQ: Which type of metadata is vital to ensure quality and keep DWH data secure by regulating access?\nA) Structural metadata\nB) Access metadata\nC) Descriptive metadata\nD) Technical metadata",
   "answer": "B) Access metadata — they are used to regulate access to the DWH and are vital to ensure quality and keep data secure."
 },
 {
   "tag": "6.9",
   "question": "Which DWHA uses a top-down approach, builds the central DWH first in 3NF, adds dependent data marts iteratively, and is suitable for a relational enterprise-wide DWH with structured data?",
   "answer": "The hub-and-spoke DWHA (also referred to as the Corporate Information Factory, CIF), corresponding with the Inmon (2006) approach."
 },
 {
   "tag": "6.9",
   "question": "Which DWHA uses a bottom-up approach, builds business process-oriented data marts incrementally, uses a bus matrix and conformed dimensions for enterprise-wide cohesion, and corresponds with the Kimball approach?",
   "answer": "The data mart bus DWHA."
 },
 {
   "tag": "6.9",
   "question": "Which DWHA has no dependent data marts, applies one shared data model to serve all business units, stores both atomic and summarized data in presentation-ready format, and is suitable for fragmented environments wanting integration?",
   "answer": "The centralized DWHA."
 },
 {
   "tag": "6.9",
   "question": "Which DWHA consists of standalone systems developed using a bottom-up approach, has no central DWH or ODS, may have unlinked components, and is created when a solution is needed in a very short space of time?",
   "answer": "The independent DWHA."
 },
 {
   "tag": "6.9",
   "question": "Which DWHA leaves existing decision support structures as they are, stores data in autonomous and heterogeneous data stores, integrates data on demand and on-the-fly, and is suitable for complex organizations such as merged companies?",
   "answer": "The federated DWHA."
 },
 {
   "tag": "6.9",
   "question": "Which DWHA applies data virtualization techniques, provides users with direct access to operational source systems via middleware and table views without physical integration, and is useful for organizations that do not want to redesign their existing infrastructure?",
   "answer": "The virtual DWHA."
 },
 {
   "tag": "6.9",
   "question": "Which DWHA consists of multiple DWHs working in parallel connected via a network, uses partitioning algorithms to fragment and allocate data across computing nodes, and is only suitable for organizations with light data loads?",
   "answer": "The distributed DWHA."
 },
 {
   "tag": "6.9",
   "question": "Which DWHA is used for semi-structured and unstructured big data, is implemented on platforms such as Hadoop using HDFS for storage and MapReduce for processing, and can be implemented via Hadoop to RDBMS or parallel Hadoop and RDBMS?",
   "answer": "The big data DWHA."
 },
 {
   "tag": "6.9",
   "question": "MCQ: Which DWHA uses on-demand, on-the-fly integration while source data remain in their original locations, serving users as if all data reside in a single integrated store?\nA) Virtual DWHA\nB) Distributed DWHA\nC) Independent DWHA\nD) Federated DWHA",
   "answer": "D) Federated DWHA — data are integrated on demand in real time at the user's request, with data from autonomous stores accessed and on-the-fly integrated while source data remain in their original location and format."
 },
 {
   "tag": "6.9",
   "question": "MCQ: Which DWHA provides users with access to operational data directly via middleware, hiding technical complexity such as data storage locations and APIs, without physically integrating the data sources?\nA) Federated DWHA\nB) Virtual DWHA\nC) Distributed DWHA\nD) Centralized DWHA",
   "answer": "B) Virtual DWHA — it applies data virtualization techniques, allowing users to access operational data directly via middleware tools, presenting diverse data sources as one integrated source without physically integrating them."
 },
 {
   "tag": "6.9",
   "question": "Compare the hub-and-spoke DWHA and the data mart bus DWHA across six dimensions: approach, starting point, what it is based on, central component, data mart content, and how enterprise-wide view is achieved.",
   "answer": "Approach: hub-and-spoke is top-down; data mart bus is bottom-up. Starting point: hub-and-spoke starts with the central DWH; data mart bus starts with one specific business process. Based on: hub-and-spoke is based on the organization's data; data mart bus is based on business processes. Central component: hub-and-spoke has a central DWH storing 3NF normalized atomic data; data mart bus has a central bus matrix (no single central DWH). Data mart content: hub-and-spoke data marts can be normalized, denormalized, summarized, or aggregated; data mart bus data marts contain denormalized data in dimension tables with fact tables true to a declared grain. Enterprise-wide view: hub-and-spoke achieves it via the central DWH; data mart bus achieves it via the bus matrix and conformed dimensions."
 },
 {
   "tag": "6.9",
   "question": "Long Answer: Explain Section 6.9 in full — what the DWHA documentation must include, the two types of metadata and their purposes, and a comparative overview of all eight DWHAs distinguishing each by approach, structure, integration method, and suitability.",
   "answer": "The DWHA must be documented clearly at the beginning of the DWH project — the documentation must unambiguously describe the DWH's structure, guidelines, standards, and services linking strategic data requirements with systems and applications to achieve business goals, and must ensure analytical information is consistently derived from operational data. The documentation must include: a DWH data model documenting data elements and KPIs (with each key data entity clearly defined, including how and where it is used); the formulas and methods used to derive, aggregate, and summarize data; specified ETL processes for cleansing, transforming, and integrating data; and examined data sources, types, and formats to ensure correct ETL logic and interfaces. Metadata is a key aspect: structural metadata manage and control DWH creation by describing its structure and content; access metadata regulate access to ensure quality and data security. The eight DWHAs are: (1) Hub-and-spoke (CIF, Inmon) — top-down; central DWH in 3NF built first; dependent data marts added iteratively; enterprise view via central DWH; suitable for relational enterprise DWH with structured data. (2) Data mart bus (Kimball) — bottom-up; business process-oriented data marts built incrementally; central bus matrix with conformed dimensions; enterprise view via bus matrix and conformed dimensions; suitable for incremental, process-driven build. (3) Centralized — top-down; one shared data model serving all business units; no dependent data marts; both atomic and summarized data in presentation-ready format; suitable for fragmented environments wanting integration; advantages: economies of scale, centralized management. (4) Independent — bottom-up; standalone systems, no central DWH or ODS; may be unlinked; created when a solution is needed quickly; drawbacks: data redundancy and limited scalability. (5) Federated — existing structures left as-is; autonomous, heterogeneous data stores; on-demand, on-the-fly integration; source data remain in original location; suitable for complex merged organizations. (6) Virtual — data virtualization via middleware/table views; no physical integration; direct access to operational source systems; hides technical complexity; suitable for organizations avoiding infrastructure redesign. (7) Distributed — multiple DWHs working in parallel via a network; partitioning algorithms fragment and allocate data across computing nodes; users see one central DWH; advantages: rapid build, economical, expandable; limitation: light data loads only. (8) Big data — for semi-structured and unstructured data; implemented on Hadoop using HDFS and MapReduce; Spark and Hive as complementary tools; two approaches: Hadoop to RDBMS or parallel Hadoop and RDBMS."
 }

]
