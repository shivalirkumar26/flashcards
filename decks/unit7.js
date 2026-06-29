const unit7Deck = [
 {
   "tag": "7.1",
   "question": "What are the three main approaches to DWH design discussed in Unit 7, and who is associated with each?",
   "answer": "The top-down approach, associated with Inmon's Corporate Information Factory (CIF); the bottom-up approach, associated with the Kimball Lifecycle methodology (Kimball and Ross, 2013); and the hybrid approach, associated with Linstedt's Data Vault (DV) methodology."
 },
 {
   "tag": "7.1",
   "question": "How is the CIF described in terms of its orientation, data model, and complexity?",
   "answer": "The CIF is a data-oriented (rather than business-driven) method. It uses a normalized (3NF) data model that is designed first. It does not explicitly consider specific business requirements and processes before loading all the organization's data into the central DWH. Because it stores analytical data for the entire organization, it is complex and takes a long time to design and implement."
 },
 {
   "tag": "7.1",
   "question": "What does Inmon mean when he describes the CIF as a physical embodiment of the company's 'information ecosystem'?",
   "answer": "Each CIF is uniquely dimensionally shaped by the specific company's business, culture, economics, and technology. It is therefore a generic structure that is implemented differently by different organizations, making it a physical embodiment of the company's 'information ecosystem.'"
 },
 {
   "tag": "7.1",
   "question": "What type of organization is the CIF most suitable for, and what does it require?",
   "answer": "The CIF generally takes a long time to design and is most suitable for large and complex organizations. It is also expensive to implement, so the organization must have a large budget for the DWH project."
 },
 {
   "tag": "7.1",
   "question": "How is the Kimball Lifecycle methodology described in terms of its orientation and data modeling approach?",
   "answer": "The Kimball Lifecycle methodology is a business process-oriented (rather than data-driven) approach. Dimensional modeling principles are applied to model data in a denormalized format. The DWH comprises consistent departmental data marts based on conformed dimensions, associated with fact tables."
 },
 {
   "tag": "7.1",
   "question": "List the activities included in the Kimball Lifecycle methodology framework.",
   "answer": "(1) Gathering business requirements, (2) technical architecture design, (3) logical design (i.e., dimensional modeling), (4) designing the physical databases, (5) designing and developing the ETL architecture and system, (6) designing and developing BI applications, and (7) the deployment, growth, and maintenance of the DWH/BI system."
 },
 {
   "tag": "7.1",
   "question": "What type of organization and situation is the data mart bus (Kimball) approach most suitable for?",
   "answer": "The data mart bus method focuses on quick wins. The development of single, individual data marts is less expensive. It is therefore suitable for implementations that must be completed relatively fast and at a lower cost. It will also be the preferred approach where local optimization is a key consideration."
 },
 {
   "tag": "7.1",
   "question": "MCQ: Which DWH is developed using a bottom-up approach?\nA) The independent DWH\nB) The Corporate Information Factory (CIF)\nC) The centralized DWH\nD) The data mart bus DWH",
   "answer": "D) The data mart bus DWH — it is a bottom-up approach prescribed by Kimball and Ross (2013), also known as the Kimball Lifecycle methodology."
 },
 {
   "tag": "7.1",
   "question": "What is the Data Vault (DV) hybrid approach, and what is its latest version?",
   "answer": "The Data Vault is a hybrid approach that combines a top-down architecture with a bottom-up design. It encompasses the best features of the 3NF CIF DWH and Kimball's data mart bus DWH (dimensional star schema modeling). The latest version is called Data Vault 2.0."
 },
 {
   "tag": "7.1",
   "question": "What are the three key advantages of the Data Vault loading process?",
   "answer": "(1) Several tables can be loaded simultaneously, so data can be loaded quickly. (2) Dependencies between tables are decreased during the load process. (3) The ingestion process is simplified by leveraging inserts only — they load more quickly than updates/inserts or merges."
 },
 {
   "tag": "7.1",
   "question": "How does the Data Vault separate structural and descriptive information, and why?",
   "answer": "A DV design separates the structural information (in an enterprise DWH) and descriptive information (in a business DWH) to ensure flexibility in the event of organizational changes. The data are not processed in a DV, so data sources can be traced and historical data remain intact."
 },
 {
   "tag": "7.1",
   "question": "What are the four major activities in a Data Vault project?",
   "answer": "Project planning, project execution, review, and improvement."
 },
 {
   "tag": "7.1",
   "question": "What methodologies are combined during the Data Vault project execution phase?",
   "answer": "Aspects of the traditional software development life cycle (SDLC) approach and the modern (Agile) Scrum methodology are combined. A short iteration of an SDLC is executed within Scrum sprints."
 },
 {
   "tag": "7.1",
   "question": "What is the purpose of the Data Vault review and improvement phase, and what principles does it incorporate?",
   "answer": "The review and improvement phase aims to determine whether the product meets all expectations and documented requirements. Core principles from process improvement and quality control fields — such as Six Sigma and Total Quality Management (TQM) — are incorporated to reduce costs, increase profits, and improve customer satisfaction. TQM principles are applied to ensure the quality of data in the DV and the quality of the overall DWH structure."
 },
 {
   "tag": "7.1",
   "question": "What factors determine whether a top-down or bottom-up approach is best suited for an organization?",
   "answer": "The choice is determined by the organizational business objectives, the nature of the business, the time and cost that can be spent, the complexity of the business, and the dependencies that exist between various organizational functions."
 },
 {
   "tag": "7.1",
   "question": "How are new transactional data included in the CIF and data mart bus DWH?",
   "answer": "In both the CIF and data mart bus DWH, new transactional data are included in scheduled batches that typically run during off-peak times. The schedule can be, for example, daily, weekly, or monthly."
 },
 {
   "tag": "7.1",
   "question": "How are dimension tables updated in the data mart bus DWH?",
   "answer": "Dimension tables in the data mart bus DWH are updated based on business events — for example, if data entries require updating due to a changed client address or new product. Dimension tables are updated using pre-defined, slowly changing dimension (SCD) functions that are defined as part of the ETL process."
 },
 {
   "tag": "7.1",
   "question": "Name and describe the three types of slowly changing dimension (SCD) methods.",
   "answer": "Type 1 — Overwrite an attribute value: overwrites the old value with a new value; changes are not tracked and the old value is not preserved (e.g., a customer's mobile number changes). Type 2 — Add a row in the dimension table: creates a new row to capture new values of a changed attribute; each row includes 'valid_from' and 'valid_to' timestamps; the previous row's 'valid_to' is updated to the 'valid_from' of the new row; historical data remain associated with the old row (e.g., a bus route changes). Type 3 — Add a column in the dimension table: widens the table by adding a new column to track additional attributes not previously included (e.g., tracking email addresses in addition to postal addresses)."
 },
 {
   "tag": "7.1",
   "question": "MCQ: Which slowly changing dimension (SCD) type creates a new row in the dimension table with 'valid_from' and 'valid_to' timestamps, preserving historical data associated with the previous attribute values?\nA) Type 1\nB) Type 2\nC) Type 3\nD) Type 4",
   "answer": "B) Type 2 — Add a row in the dimension table: creates a new row to capture the new values of a changed attribute; each row includes two timestamps (valid_from and valid_to); historical entries remain associated with the previous row."
 },
 {
   "tag": "7.1",
   "question": "MCQ: Which slowly changing dimension (SCD) type overwrites the old value with a new value without tracking or preserving the old value?\nA) Type 1\nB) Type 2\nC) Type 3\nD) Type 0",
   "answer": "A) Type 1 — Overwrite an attribute value: this overwrites an old value with a new value; changes are not tracked and the old value is not preserved."
 },
 {
   "tag": "7.1",
   "question": "MCQ: Which slowly changing dimension (SCD) type adds a new column to the dimension table to track additional attributes not previously included?\nA) Type 1\nB) Type 2\nC) Type 3\nD) Type 4",
   "answer": "C) Type 3 — Add a column in the dimension table: this changes the table by widening it; an additional column is added to keep track of additional attributes not previously included."
 },
 {
   "tag": "7.1",
   "question": "Compare the CIF and data mart bus approaches across six dimensions: approach, orientation, data model, complexity/time, suitability, and how enterprise-wide view is achieved.",
   "answer": "Approach: CIF is top-down; data mart bus is bottom-up. Orientation: CIF is data-driven; data mart bus is business process-oriented. Data model: CIF uses a normalized 3NF model designed first with ERDs; data mart bus uses denormalized dimensional modeling. Complexity/time: CIF is complex and takes a long time to design; data mart bus has a relatively straightforward modeling process and can be implemented in a relatively short period. Suitability: CIF is most suitable for large, complex organizations with large budgets; data mart bus is suitable for fast, lower-cost implementations where local optimization is a key consideration. Enterprise-wide view: CIF achieves it via the central DWH; data mart bus achieves it via the bus matrix and conformed dimensions."
 },
 {
   "tag": "7.1",
   "question": "Long Answer: Explain Section 7.1 in full — the three DWH approaches (CIF, Kimball, Data Vault) and their key characteristics, how data are updated in the CIF and data mart bus, and the three slowly changing dimension types with examples.",
   "answer": "Three main DWH approaches exist. The CIF (Inmon, 2006) is top-down and data-driven — it uses a normalized 3NF data model designed first using ERDs; does not explicitly consider business requirements before loading all organizational data into the central DWH; stores all atomic data centrally with data marts and OLAP cubes distinctly separated; is complex and time-consuming; each CIF is uniquely shaped by the company's business, culture, economics, and technology (a physical embodiment of the 'information ecosystem'); most suitable for large, complex organizations with large budgets. The Kimball Lifecycle methodology (bottom-up, business process-oriented) applies dimensional modeling in a denormalized format; comprises consistent data marts based on conformed dimensions and fact tables; follows a framework of activities: gathering business requirements, technical architecture design, logical design, physical database design, ETL architecture, BI application development, and deployment/growth/maintenance; achieves enterprise-wide cohesion via the bus matrix; focuses on quick wins, is less expensive, and suits fast/lower-cost implementations. The Data Vault (Linstedt) is a hybrid combining a top-down architecture with a bottom-up design; its advantages include simultaneous table loading (faster), reduced dependencies during loading, and insert-only ingestion; separates structural information (enterprise DWH) from descriptive information (business DWH) for flexibility; data not processed, so sources traceable and historical data intact; employs a three-tier architecture; project activities are planning, execution (combining SDLC and Agile Scrum), and review/improvement (applying Six Sigma and TQM). Choosing between approaches depends on business objectives, nature of business, time/cost available, complexity, and dependencies. New transactional data are loaded in scheduled batches (daily/weekly/monthly) during off-peak times in both CIF and data mart bus. Dimension tables in the data mart bus are updated using slowly changing dimension (SCD) functions: Type 1 (overwrite) replaces old values with new ones — changes not tracked, old value lost (e.g., mobile number change); Type 2 (add a row) creates a new row with valid_from/valid_to timestamps — previous row's valid_to updated to new row's valid_from, preserving historical associations (e.g., bus route change); Type 3 (add a column) widens the table to track additional attributes not previously included (e.g., adding email addresses alongside postal addresses)."
 },

 {
   "tag": "7.2",
   "question": "What problem do real-time, closed-loop, and active DWHs aim to solve?",
   "answer": "Traditional DWHs load data in scheduled batches, creating latency — a time delay between when an event occurs in the real world and when it appears in the DWH. Real-time, closed-loop, and active DWHs aim to overcome these latency issues and shortcomings of traditional DWHs."
 },
 {
   "tag": "7.2",
   "question": "What is a real-time DWH, and what is its latency threshold?",
   "answer": "A real-time DWH has a relatively low latency — the time delay between the occurrence of an event and importing the data that describe the event into the DWH is relatively short, usually below a minute. It is not updated according to a schedule or in batches. Instead, triggers in the operational systems are used to initiate real-time updates in the DWH."
 },
 {
   "tag": "7.2",
   "question": "How does data flow into a real-time DWH?",
   "answer": "Data associated with business activities are captured at the time they occur, and data of completed business activities flow directly into the DWH."
 },
 {
   "tag": "7.2",
   "question": "What are the two direct advantages of a real-time DWH?",
   "answer": "Operational data are available immediately for analysis purposes. Furthermore, the DWH reflects the most current (real-time) situation, so the answer to a query always reflects the actual and current state of the entity at the time of running the query."
 },
 {
   "tag": "7.2",
   "question": "MCQ: How is a real-time DWH updated, as opposed to a traditional DWH?\nA) Via scheduled batch loads that run during off-peak times\nB) Via triggers in the operational systems that initiate real-time updates\nC) Via ETL processes that run weekly or monthly\nD) Via manual data extraction processes that limit operational overhead",
   "answer": "B) A real-time DWH is not updated according to a schedule or in batches — instead, triggers in the operational systems are used to initiate real-time updates in the DWH."
 },
 {
   "tag": "7.2",
   "question": "List the benefits of real-time data warehousing as described in the coursebook.",
   "answer": "It minimizes operational overhead by limiting manual data extraction. It offers instant decision-making to support the business. It improves governance and data security because real-time data integration means fewer updates and reconciliations. Costs are reduced through predictive analytic capabilities and automated diagnostic reporting. Manual processing errors are reduced because they are detected early and resolved. It increases operational efficiency because data can be retrieved fast. Faster response times result in higher customer satisfaction. The flexibility of the architecture leads to increased competitiveness and lower capital expenditures since the infrastructure is utilized efficiently. Business agility is enhanced and business resilience increased because the organization is less dependent on manual processing."
 },
 {
   "tag": "7.3",
   "question": "What is a closed-loop DWH, and what makes it different from a traditional DWH?",
   "answer": "Traditional DWHs generally have a one-way relationship with the operational systems that supply them with data. The closed-loop DWH involves a bidirectional process — it is also referred to as an integrated DWH. Triggers in the operational systems initiate immediate updating of the DWH (like a real-time DWH). In addition, the DWH updates the operational systems as well — operational systems are updated with the relevant changes that occurred in the DWH."
 },
 {
   "tag": "7.3",
   "question": "What is the purpose of the bidirectional process in a closed-loop DWH?",
   "answer": "The closed-loop DWH involves a bidirectional process to optimize transactional processing — the data that the operational systems receive from the DWH are applied to optimize the operational environment."
 },
 {
   "tag": "7.3",
   "question": "Define 'tactical queries' as used in this section.",
   "answer": "Tactical queries are short queries aimed at enabling quick action-taking and/or decision-making in time-sensitive environments."
 },
 {
   "tag": "7.3",
   "question": "MCQ: Which DWH is also referred to as an integrated DWH and involves a bidirectional process where both the DWH and the operational systems are updated?\nA) Real-time DWH\nB) Active DWH\nC) Closed-loop DWH\nD) Federated DWH",
   "answer": "C) Closed-loop DWH — it is also referred to as an integrated DWH and involves a bidirectional process: triggers initiate real-time DWH updates, and the DWH also updates the operational systems with relevant changes."
 },
 {
   "tag": "7.3",
   "question": "Why is the closed-loop DWH challenging and expensive to implement?",
   "answer": "Three reasons: (1) The various and diverse operational systems and APIs in an organization are rarely integrated, so they may have difficulty communicating with each other. (2) The level of detail in the DWH may differ from the level of detail in the operational systems — a DWH can contain summarized and/or aggregated data, causing structural problems when writing data back. (3) ERP systems are tightly integrated with business processes and may not be compatible with summarized or aggregated DWH data — this may introduce logical errors that are difficult or impossible to fix if original data in source systems have been overwritten with DWH data."
 },
 {
   "tag": "7.3",
   "question": "MCQ: What specific problem arises when a closed-loop DWH writes summarized or aggregated data back to ERP systems?\nA) The ETL process cannot identify which data to overwrite in the DWH\nB) ERP systems may not be compatible with the summarized or aggregated data from the DWH, potentially introducing logical errors that are difficult or impossible to fix if original source data have been overwritten\nC) The real-time triggers in the operational systems stop functioning when bidirectional updates are enabled\nD) The DWH loses its historical data because it is overwritten by operational system updates",
   "answer": "B) ERP systems are tightly integrated with business processes and may not be compatible with summarized or aggregated data from the DWH — this may introduce logical errors that are difficult or impossible to fix if the original data in the source systems have been overwritten with data from the DWH."
 },
 {
   "tag": "7.3",
   "question": "Compare the real-time DWH and the closed-loop DWH across three dimensions: how the DWH is updated, whether operational systems are updated, and implementation complexity.",
   "answer": "How DWH is updated: both use triggers in operational systems to initiate real-time updates — neither uses scheduled batch loads. Whether operational systems are updated: the real-time DWH does NOT update operational systems (one-way relationship); the closed-loop DWH DOES update operational systems bidirectionally. Implementation complexity: the real-time DWH is simpler to implement; the closed-loop DWH is challenging and expensive to implement due to rarely integrated operational systems and APIs, differences in data granularity, and ERP system compatibility issues."
 },
 {
   "tag": "7.3",
   "question": "Long Answer: Explain Sections 7.2 and 7.3 in full — why real-time, closed-loop, and active DWHs emerged, what a real-time DWH is and its benefits, what a closed-loop DWH is and how it differs from both traditional and real-time DWHs, and why it is challenging to implement.",
   "answer": "Traditional DWHs load data in scheduled batches, creating latency between real-world events and their appearance in the DWH. Real-time, closed-loop, and active DWHs emerged to overcome these latency issues. A real-time DWH has a relatively low latency — usually below a minute — and is not updated on a schedule; instead, triggers in operational systems initiate real-time updates, with data of completed business activities flowing directly into the DWH. Its advantages include: immediate availability of operational data for analysis; the DWH always reflects the current, real-time state. Broader benefits include minimizing operational overhead, instant decision-making, improved governance and data security, cost reduction through predictive analytics and automated diagnostic reporting, early detection of manual errors, increased operational efficiency and customer satisfaction, lower capital expenditures, and enhanced business agility and resilience. The closed-loop DWH (also called the integrated DWH) goes a step further — like the real-time DWH, triggers initiate immediate updating of the DWH; however, additionally, the DWH also updates the operational systems, creating a bidirectional process to optimize transactional processing. This is challenging and expensive to implement for three reasons: (1) diverse operational systems and APIs are rarely integrated and may struggle to communicate; (2) the DWH may contain summarized or aggregated data while operational systems hold more granular data, causing structural problems when writing data back; (3) ERP systems tightly integrated with business processes may not be compatible with summarized DWH data, potentially introducing logical errors that are difficult or impossible to fix if original source data have been overwritten. The key differentiator: a real-time DWH is one-way (operational → DWH); a closed-loop DWH is bidirectional (operational ↔ DWH)."
 },

 {
   "tag": "7.4",
   "question": "What is the formal definition of an active DWH, and who coined the term?",
   "answer": "The active DWH is defined as 'a logically consistent store of detailed data available for strategic, tactical, and event-driven business decision making' through the provision of 'a single up-to-date view of the enterprise' (Teradata, 2014). The term 'active DWH' was coined by Teradata in 2001."
 },
 {
   "tag": "7.4",
   "question": "How does the active DWH handle real-time updates, and what makes it different from both the real-time and closed-loop DWH?",
   "answer": "The active DWH allows the capturing of transaction details at the exact moment they occur or change, with updates to critical data happening very close to real-time. Unlike the real-time DWH, it also automatically exports operational decisions to OLTP systems. Unlike the closed-loop DWH, it additionally enables the automation of routine tasks and decisions. Scheduled batch and cycle refreshes are also maintained and continue to run."
 },
 {
   "tag": "7.4",
   "question": "What types of queries does the active DWH support, and how?",
   "answer": "The active DWH supports both tactical queries — which should be returned within seconds — alongside traditional, strategic decision support. Scheduled batch and cycle refreshes are maintained and therefore continue to run, enabling both types."
 },
 {
   "tag": "7.4",
   "question": "MCQ: Which of the following best distinguishes the active DWH from the closed-loop DWH?\nA) The active DWH uses triggers to update the DWH; the closed-loop DWH uses scheduled batch loads\nB) The active DWH enables the automation of routine tasks and decisions and exports operational decisions to OLTP systems; the closed-loop DWH does not automate decisions\nC) The active DWH has a one-way relationship with operational systems; the closed-loop DWH is bidirectional\nD) The active DWH was proposed by Inmon; the closed-loop DWH was proposed by Kimball",
   "answer": "B) The active DWH enables the automation of routine tasks and decisions and automatically exports operational decisions to OLTP systems — the closed-loop DWH facilitates bidirectional updates but does not automate decisions."
 },
 {
   "tag": "7.4",
   "question": "Name the six functionalities of the active DWH.",
   "answer": "Active load, active access, active events, active workload management, active enterprise integration, and active availability."
 },
 {
   "tag": "7.4",
   "question": "What is active load?",
   "answer": "Active load entails the active loading of data in a non-disruptive way while continuing to process other workloads at the same time."
 },
 {
   "tag": "7.4",
   "question": "What is active access?",
   "answer": "Active access facilitates the processing of tactical queries to access analytical information quickly and consistently. It provides recurring decision support information for operational business processes."
 },
 {
   "tag": "7.4",
   "question": "What is active events, and how can operational actions be initiated?",
   "answer": "Active events enables the automatic detection of a business event, followed by the appropriate application of business rules to update both current and historical data. Applicable operational actions can then be initiated — either automatically by applying business rules, or by presenting different options to users for manual review so that users can choose the actions to implement."
 },
 {
   "tag": "7.4",
   "question": "What is active workload management?",
   "answer": "Active workload management facilitates the real-time management of mixed workloads to dynamically optimize the utilization of system resources."
 },
 {
   "tag": "7.4",
   "question": "What is active enterprise integration?",
   "answer": "Active enterprise integration simplifies the coordination of applications and business processes on an enterprise level."
 },
 {
   "tag": "7.4",
   "question": "What is active availability?",
   "answer": "Active availability considers the effect of enterprise-wide downtime and, given that, identifies application-specific requirements in terms of availability, recoverability, and performance."
 },
 {
   "tag": "7.4",
   "question": "MCQ: Which active DWH functionality enables the automatic detection of a business event and the application of business rules to update both current and historical data, with operational actions initiated either automatically or manually?\nA) Active load\nB) Active access\nC) Active workload management\nD) Active events",
   "answer": "D) Active events — it enables the automatic detection of a business event, followed by the application of business rules to update current and historical data; operational actions can be initiated automatically or presented to users for manual selection."
 },
 {
   "tag": "7.4",
   "question": "Long Answer: Explain Section 7.4 in full — what the active DWH is, who coined it, how it handles real-time updates, what makes it distinct from the real-time and closed-loop DWH, what types of queries it supports, and all six of its functionalities.",
   "answer": "The active DWH is defined as 'a logically consistent store of detailed data available for strategic, tactical, and event-driven business decision making' through the provision of 'a single up-to-date view of the enterprise' (Teradata, 2014). The term was coined by Teradata in 2001. It allows the capturing of transaction details at the exact moment they occur or change, with updates to critical data happening very close to real-time. It differs from the real-time DWH by also automatically exporting operational decisions to OLTP systems, and from the closed-loop DWH by enabling the automation of routine tasks and decisions. Scheduled batch and cycle refreshes are maintained and continue to run, so the DWH supports both tactical queries (returned within seconds) and traditional strategic decision support. Its six functionalities are: (1) Active load — loads data non-disruptively while processing other workloads simultaneously. (2) Active access — facilitates processing of tactical queries to access analytical information quickly and consistently; provides recurring decision support for operational processes. (3) Active events — automatically detects business events and applies business rules to update current and historical data; operational actions can be initiated automatically or presented to users for manual selection. (4) Active workload management — real-time management of mixed workloads to dynamically optimize system resource utilization. (5) Active enterprise integration — simplifies coordination of applications and business processes on an enterprise level. (6) Active availability — considers enterprise-wide downtime effects and identifies application-specific requirements for availability, recoverability, and performance."
 },
 {
   "tag": "7.5",
   "question": "What key trend drove digital transformation and impacted DWH implementations?",
   "answer": "Data are at the center of digital transformation and drive digitization processes. Organizations continue to leverage data to improve their core business — for example, improving customer experience, penetrating new markets, and increasing the efficiency of employees and processes. For this, trillions of data items must be stored and analyzed. Many organizations are moving to cloud solutions to store data and enable real-time data analytics. Historical and real-time data are also increasingly injected into business workflows, as in the case of active DWHs."
 },
 {
   "tag": "7.5",
   "question": "Name the six use cases that ensure the continued relevance and value of DWHs.",
   "answer": "(1) Tactical reporting, (2) integration with big data, (3) natural language processing, (4) auditing and compliance, (5) data-mining analytics, and (6) ensuring data quality."
 },
 {
   "tag": "7.5",
   "question": "What is the tactical reporting use case for DWHs?",
   "answer": "Since data are stored in a DWH for reporting purposes and DWHs are optimized for high-performance queries, they should also be ideally suited for ad-hoc reporting. It should be possible to provide instantaneous answers to a wide range of queries."
 },
 {
   "tag": "7.5",
   "question": "What is the integration with big data use case for DWHs?",
   "answer": "The appropriate architecture will enable integration with big data and automate big data analysis."
 },
 {
   "tag": "7.5",
   "question": "What is the natural language processing use case for DWHs?",
   "answer": "Many organizations are implementing basic robotic process automation (RPA) and gathering data through live interactions between chatbots and customers, for example. Collected data must be integrated into existing data related to customer profiles so that they can be analyzed."
 },
 {
   "tag": "7.5",
   "question": "What is the auditing and compliance use case for DWHs?",
   "answer": "Electronic copies of data stored in DWHs ease the tedious task of adhering to regulatory aspects of a business."
 },
 {
   "tag": "7.5",
   "question": "What is the data-mining analytics use case for DWHs?",
   "answer": "Data-mining analytics stores massive amounts of data centrally so that they can be analyzed easily. It provides valuable business insights — for example, by indicating optimal promotional strategies."
 },
 {
   "tag": "7.5",
   "question": "What is the ensuring data quality use case for DWHs?",
   "answer": "Having a DWH enables teams to automate the processes of identifying and correcting errors in their databases."
 },
 {
   "tag": "7.5",
   "question": "MCQ: Which DWH use case involves implementing robotic process automation (RPA) and integrating data gathered from chatbot interactions into existing customer profile data for analysis?\nA) Tactical reporting\nB) Data-mining analytics\nC) Natural language processing\nD) Auditing and compliance",
   "answer": "C) Natural language processing — many organizations implement basic RPA and gather data through live interactions between chatbots and customers; collected data must be integrated into existing customer profile data so they can be analyzed."
 },
 {
   "tag": "7.5",
   "question": "Long Answer: Explain Section 7.5 in full — the key trends that drove DWH implementations and all six use cases that ensure the continued relevance and value of DWHs.",
   "answer": "Data are at the center of digital transformation and drive digitization processes. Organizations continue to leverage data to improve customer experience, penetrate new markets, and increase employee and process efficiency — requiring trillions of data items to be stored and analyzed. Many organizations are moving to cloud solutions for storage and real-time data analytics, with historical and real-time data increasingly injected into business workflows as in active DWHs. Six use cases ensure the continued relevance of DWHs: (1) Tactical reporting — DWHs are optimized for high-performance queries and suited for ad-hoc reporting; instantaneous answers should be possible across a wide range of queries. (2) Integration with big data — the appropriate architecture enables integration with big data and automates big data analysis. (3) Natural language processing — organizations implementing basic RPA gather data through chatbot interactions; collected data must be integrated into existing customer profile data for analysis. (4) Auditing and compliance — electronic copies of data stored in DWHs ease the task of adhering to regulatory requirements. (5) Data-mining analytics — stores massive amounts of data centrally for easy analysis; provides valuable business insights such as optimal promotional strategies. (6) Ensuring data quality — DWHs enable teams to automate the identification and correction of errors in their databases."
 }

]
