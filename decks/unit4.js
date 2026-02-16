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
}

];
