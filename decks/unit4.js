/* =======================
   UNIT 4 – SECTION 4.1 DATA AND PROCESS INTEGRATION
   ======================= */
const unit4Deck = [
{
  tag: "4.1",
  question: "Why is data integration necessary in modern information systems?",
  answer: "Modern information systems no longer rely on a single data source but integrate data from multiple internal and external systems. These sources often differ in formats, schemas, access technologies, and ownership structures. Data integration is necessary to consolidate heterogeneous data into a unified view so that value can be extracted from it. Without integration, datasets remain isolated, inconsistent, and non-interoperable, which prevents reliable analysis and organizational synergy. Data integration ensures consistency, improves data quality, and enables centralized governance and analytics."
},

{
  tag: "4.1",
  question: "What is data standardization and why is it important during integration?",
  answer: "Data standardization transforms data from different sources into a common format and structure. For example, date formats such as DD/MM/YYYY and MM-DD-YYYY must be converted into a unified ISO format like YYYY-MM-DD. Standardization ensures interoperability across systems, enables correct joins and aggregations, and prevents inconsistencies caused by format mismatches. It is essential for creating a consistent consolidated data model."
},

{
  tag: "4.1",
  question: "What is data reconciliation and which types of inconsistencies does it resolve?",
  answer: "Data reconciliation focuses on ensuring consistency between different data sources or between source systems and the centralized repository. It resolves issues such as missing records, duplicate entries, incorrect values, broken relationships between tables, incomplete transformations, or inconsistencies created during data transfer. For example, integrating an order table from one system and a customer table from another may result in mismatched identifiers or incomplete references. Reconciliation aims to detect and resolve these inconsistencies to maintain logical integrity."
},

{
  tag: "4.1",
  question: "What is data validation and how does it improve data quality?",
  answer: "Data validation assesses the accuracy and completeness of data according to predefined constraints and rules. It checks whether values follow required formats or patterns, such as verifying that email addresses, postal codes, or phone numbers are complete and valid. Validation ensures that only accurate and well-structured data enters the unified data store, preventing the propagation of errors and improving overall data reliability."
},

{
  tag: "4.1",
  question: "Explain data transformation in the context of data integration.",
  answer: "Data transformation converts data into a specified schema or required representation so that it aligns with the centralized data model. For example, temperature readings from different sensors may be recorded in degrees Celsius or Fahrenheit. If the centralized schema requires Celsius, all Fahrenheit values must be converted accordingly. Transformation ensures semantic consistency and structural alignment across integrated datasets."
},

{
  tag: "4.1",
  question: "What is data cleansing and what is gross error detection?",
  answer: "Data cleansing removes inconsistent, duplicate, irrelevant, or incorrect data from integrated datasets. It may involve removing duplicate customer records, correcting incorrect values, or eliminating incomplete records. Cleansing is often applied during gross error detection, which aims to discard erroneous data, especially in sensor measurements where calibration uncertainties or instrument failures may produce abnormal values. Cleansing improves reliability, consistency, and analytical correctness."
},

{
  tag: "4.1",
  question: "What is data enrichment and how does it add value to data integration?",
  answer: "Data enrichment refers to incorporating supplementary data sources to enhance the informational value of the original dataset. For example, a water monitoring system may enrich tank level data with meteorological data such as temperature and precipitation. Enrichment enables forward-looking planning, deeper insights, and more informed decision-making by combining multiple complementary data sources."
},

{
  tag: "4.1",
  question: "Why is privacy an important data integration principle?",
  answer: "Privacy ensures that personal data is protected during integration processes. Sensitive information such as personal or health data must be encrypted or obfuscated to prevent unauthorized access. Data integration must comply with legal frameworks such as GDPR and protect individual rights. Privacy safeguards confidentiality and ensures that integration processes do not violate ethical or legal standards."
},

{
  tag: "4.1",
  question: "Explain the difference between data warehouse, data lake, master data management (MDM), data federation, and data virtualization.",
  answer: "A data warehouse is a centralized repository storing structured data in a standardized format using ETL processes that physically copy the data. A data lake is also centralized but primarily stores raw structured and unstructured data without initial transformation, often using schema-on-read. Master Data Management (MDM) systems store critical organizational data considered the ground truth and updated infrequently. Data federation combines multiple data sources logically into a unified view without physically copying the data. Data virtualization provides a virtual layer offering a unified data view without copying the underlying data and can also be applied to a single source by creating abstraction layers."
},

{
  tag: "4.1",
  question: "What are the core architectural components of Apache NiFi?",
  answer: "Apache NiFi is an open-source ETL tool with a flow-based distributed architecture. Its basic unit of information is the FlowFile, which contains data content as key-value pairs. NiFi uses three repositories: the FlowFile Repository to track metadata and processing state, the Content Repository to store the actual data content, and the Provenance Repository to record the history and lineage of data transfers. A flow controller supervises execution, processor nodes execute ETL operations, and ZooKeeper manages cluster coordination. NiFi supports parallel processing and scalability."
},
/* =======================
   SECTION 4.2 – DATA VIRTUALIZATION
   ======================= */

{
  tag: "4.2",
  question: "What is data virtualization?",
  answer: "Data virtualization is the creation of a logical data layer that integrates data from multiple underlying sources and presents it in a specified unified format without physically copying the data. The data remains stored in its original systems, and the virtualization layer provides a consistent, standardized view that hides the technical complexity of the underlying architecture."
},
{
  tag: "4.2",
  question: "Explain the concept of abstraction in data virtualization.",
  answer: "Abstraction in data virtualization refers to separating the data from its underlying physical sources and presenting it in a consistent and unified format. The abstraction layer hides the diversity of source systems, data models, storage formats, and technical implementations, allowing users and applications to interact with the data without needing to understand how or where it is physically stored."
},
{
  tag: "4.2",
  question: "What is meant by virtual data access in data virtualization?",
  answer: "Virtual data access is the capability to access data from different source systems without physically copying it into a centralized repository. Instead of moving data, the virtualization layer uses logical connections or pointers to retrieve the data in real time from the original sources. This enables unified access while keeping the data in its original storage location."
},
{
  tag: "4.2",
  question: "Explain how data transformation works in data virtualization.",
  answer: "In data virtualization, data transformation is performed on-the-fly when data is requested. The virtualization layer converts data from different formats and schemas into a standardized and clean data view that complies with a defined logical data model. These transformations may include format alignment, schema mapping, filtering, aggregation, and data cleaning. Unlike ETL-based systems, the transformation is not permanently stored but dynamically applied during query execution."
},
{
  tag: "4.2",
  question: "What are the main advantages of data virtualization?",
  answer: "The main advantages of data virtualization include seamless access to data through unified logical views, on-the-fly data integration, faster prototyping of applications because logical views can easily be adapted, expandability to include new data sources without redesigning the physical architecture, and optimization of storage space because no physical copies of the data are created and duplicates are avoided."
},
{
  tag: "4.2",
  question: "What are the main disadvantages of data virtualization?",
  answer: "The main disadvantages of data virtualization include slower response times compared to systems such as data warehouses that precompute and store aggregated data views. Since virtualization retrieves and transforms data in real time from multiple sources, latency may increase. Additionally, virtualization faces challenges in storing historical and versioned data because unified views are derived dynamically and usually represent only snapshots of the underlying systems rather than persistently stored historical states."
},
{
  tag: "4.2",
  question: "Explain the difference between data virtualization and data warehouses.",
  answer: "Data virtualization does not physically copy data into a centralized repository but instead creates a logical layer that provides unified access to distributed data sources in real time. In contrast, data warehouses rely on ETL processes that physically copy, transform, and store data in a centralized storage system. Data warehouses often precompute aggregates and support historical storage, while data virtualization focuses on abstraction, flexibility, and dynamic integration without data duplication."
},
{
  tag: "4.2",
  question: "Explain the difference between data federation and data virtualization.",
  answer: "Data federation refers to combining multiple data sources into a single unified virtual view without copying the data. Data virtualization is a broader concept that includes data federation but can also provide abstraction and unified views over a single data source. Therefore, data federation is one implementation strategy within the broader concept of data virtualization."
},
{
  tag: "4.2",
  question: "Why can response times be slower in data virtualization compared to data warehouses?",
  answer: "Response times in data virtualization can be slower because queries must access and retrieve data from multiple underlying systems in real time. Transformations and integration are applied dynamically during query execution. In contrast, data warehouses store precomputed and aggregated data views, which significantly reduces query processing time. Therefore, virtualization trades storage efficiency and flexibility for potentially higher latency."
},
{
  tag: "4.2",
  question: "Name and explain technical approaches used to implement data virtualization.",
  answer: "Technical approaches to implement data virtualization include data federation, which combines multiple sources into a single logical virtual view; data caching, where data is temporarily loaded into an in-memory or cache layer to improve performance; and data services, which expose standardized data views through API endpoints such as RESTful APIs. These approaches enable unified and consistent access to distributed data without physically consolidating it into a centralized repository."
},
{
  tag: "4.3",
  question: "What is Data as a Service (DaaS)?",
  answer: "Data as a Service (DaaS) refers to a model of offering access to data over a network as a service to data users. It is both a strategic and technical solution to provide data as a value-added service. In a DaaS model, the service provider is responsible for infrastructure maintenance, storage, security, data backups, and data quality management, while the customer concentrates on using the data via APIs or web interfaces. DaaS can be used internally as a data democratization solution or externally as a commercial asset."
},
{
  tag: "4.3",
  question: "What are the main characteristics of Data as a Service (DaaS)?",
  answer: "Data as a Service offers access to high-quality data derived from large integrated data volumes. The service provider is responsible for infrastructure maintenance, storage, security, and backups, while the customer focuses on using the data. The data is typically integrated from multiple sources such as public databases, corporate data, operational databases, data lakes, or social media. DaaS provides scalable solutions, seamless access via APIs, and supports data-driven applications without requiring users to become data management experts."
},
{
  tag: "4.3",
  question: "Explain the advantages of Data as a Service (DaaS).",
  answer: "The advantages of DaaS include simplicity, scalability, maintenance, interoperability, and cost-effectiveness. Simplicity refers to minimal effort required to set up data-intensive applications. Scalability allows dynamic assignment of resources, especially in cloud environments. Maintenance responsibilities, including infrastructure and data quality, are handled by the service provider. Interoperability is achieved by hiding the complexity of origin data systems, allowing broad usability. Cost-effectiveness arises from pay-per-use models that reduce infrastructure and maintenance overhead."
},
{
  tag: "4.3",
  question: "Explain the disadvantages and challenges of Data as a Service (DaaS).",
  answer: "Challenges of DaaS include metadata dependency, limited analytical capabilities, bandwidth constraints, and security risks. Users rely entirely on metadata provided by the service provider, which may be incomplete or ambiguous. Analytical limitations arise because aggregated or abstracted data views may not provide the high-resolution datasets needed for advanced analytics such as machine learning. Bandwidth limitations may restrict access to large datasets over networks. Security risks arise due to data transfer over networks requiring strong encryption and integrity checks."
},
{
  tag: "4.3",
  question: "Describe the architecture of Data as a Service (DaaS).",
  answer: "In a DaaS architecture, data from various sources such as data warehouses, operational databases, data lakes, and external systems are integrated into a unified view using data virtualization. The DaaS provider exposes access to this unified data through standardized APIs. API management, including security, documentation, data quality management, infrastructure maintenance, and orchestration, is the responsibility of the service provider."
},
{
  tag: "4.3",
  question: "How does Data as a Service (DaaS) support data democratization within an organization?",
  answer: "DaaS supports data democratization by aggregating business data from operational databases and other sources into a unified view. By overcoming data silos and isolated datasets, DaaS provides consistent and high-quality data accessible across departments. This enables organization-wide analytics and supports data-driven decision-making without requiring users to understand the underlying technical complexity."
},
{
  tag: "4.3",
  question: "Explain how Data as a Service (DaaS) can be commercialized.",
  answer: "DaaS can be commercialized by collecting data from multiple sources, performing data curation and aggregation, and offering high-quality datasets to customers through data marketplaces. Organizations may monetize data as a corporate asset by providing enriched data, such as verified contact information for commercial leads. However, commercialization can raise privacy and data protection concerns, particularly in cases involving web scraping, social network surveillance, or large-scale data collection."
},
{
  tag: "4.3",
  question: "Why can DaaS limit analytical capabilities in certain use cases?",
  answer: "DaaS may limit analytical capabilities because it often provides aggregated or abstracted data views that hide the complexity of the original datasets. While this abstraction simplifies usage for most applications, advanced analytical methods such as machine learning often require access to detailed, high-resolution raw data. Without access to the full dataset, predictive models may perform worse than they could with complete data access."
},
{
  tag: "4.3",
  question: "Explain the relationship between Data as a Service (DaaS) and data virtualization.",
  answer: "Data as a Service relies heavily on data virtualization to integrate multiple data sources into a unified logical view without physically copying the data. Data virtualization enables abstraction and unified access to heterogeneous data systems, which forms the foundation for exposing standardized APIs in DaaS architectures. Therefore, data virtualization is a key technical enabler of DaaS."
},
{
  tag: "4.3",
  question: "Give examples of DaaS applications and explain their purpose.",
  answer: "Examples of DaaS applications include commercial data services such as Informatica offering verified contact information for commercial use, and non-commercial platforms such as the European Integrated Data Archive (IDEA) providing scientific seismic data, or Copernicus offering earth observation data. These services provide integrated, curated, and high-quality data to users through standardized access mechanisms, enabling analytical applications and supporting data-driven strategies."
}

];
