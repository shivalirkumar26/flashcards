const unit6Deck = [
  {
    "tag": "6.1",
    "question": "What is metadata?",
    "answer": "Metadata is 'data about data'. It describes the context of data assets so that they can be found, accessed, managed, and used effectively."
  },
  {
    "tag": "6.1",
    "question": "Why is metadata management important in data governance?",
    "answer": "Metadata management improves the usability, accessibility, interoperability, and quality of data assets by properly documenting and structuring them."
  },
  {
    "tag": "6.1",
    "question": "Name all main types of metadata (memory helper).",
    "answer": "BODDDDSTAPPU: Business, Operational, Descriptive, Data lineage, Data quality, Data security and protection, Structural, Technical, Administrative, Preservation, Provenance, Usage."
  },
  {
    "tag": "6.1",
    "question": "What does technical metadata describe?",
    "answer": "Technical metadata describes the physical and technical details required to access and manage data sources, including drivers, endpoints, schema information, mapping metadata, and technology details."
  },
  {
    "tag": "6.1",
    "question": "What are the three types of technical metadata models (memory helper)?",
    "answer": "PLC: Physical, Logical, Conceptual."
  },
  {
    "tag": "6.1",
    "question": "What is a conceptual data model?",
    "answer": "A conceptual data model provides a high-level view of the system, showing relationships between entities without detailing attributes, keys, or physical storage."
  },
  {
    "tag": "6.1",
    "question": "What is a logical data model?",
    "answer": "A logical data model provides a detailed view of relationships between entities, attributes, and keys, independent of specific technology."
  },
  {
    "tag": "6.1",
    "question": "What is a physical data model?",
    "answer": "A physical data model describes how data are stored in a specific database or file system, including data types, indexes, constraints, and distribution."
  },
  {
    "tag": "6.1",
    "question": "What does business metadata focus on?",
    "answer": "Business metadata focuses on organizational aspects of data, describing its meaning, structure, ownership, and classification within business processes."
  },
  {
    "tag": "6.1",
    "question": "What are the types of business metadata (memory helper)?",
    "answer": "OCC: Ownership, Classification, Collaboration."
  },
  {
    "tag": "6.1",
    "question": "What is operational metadata?",
    "answer": "Operational metadata documents the creation and transformation of data, including origin, processing, owners, volume, and analysis activities."
  },
  {
    "tag": "6.1",
    "question": "What is descriptive metadata?",
    "answer": "Descriptive metadata includes tags, titles, keywords, dates, and names used to catalog and search data assets."
  },
  {
    "tag": "6.1",
    "question": "What is structural metadata?",
    "answer": "Structural metadata describes the structure or organization of data rather than its content, such as file size or language."
  },
  {
    "tag": "6.1",
    "question": "What is administrative metadata?",
    "answer": "Administrative metadata includes access restrictions, user rights, acquisition information, and policies governing data usage."
  },
  {
    "tag": "6.1",
    "question": "What is preservation metadata?",
    "answer": "Preservation metadata contains information necessary to ensure long-term accessibility and integrity of digital objects, including file format and technical characteristics."
  },
  {
    "tag": "6.1",
    "question": "What is provenance metadata?",
    "answer": "Provenance metadata tracks the history, origin, ownership, and custody of a digital resource to establish authenticity and reliability."
  },
  {
    "tag": "6.1",
    "question": "What is data lineage metadata?",
    "answer": "Data lineage metadata describes the complete data flow throughout the data lifecycle, including movements, transformations, sources, destinations, and tools used."
  },
  {
    "tag": "6.1",
    "question": "What is usage metadata?",
    "answer": "Usage metadata records when and how users access data to analyze usage patterns and support system modifications."
  },
  {
    "tag": "6.1",
    "question": "What is data security and protection metadata?",
    "answer": "Data security and protection metadata includes role definitions, processing purposes, sensitivity levels, authentication methods, and legal ownership information."
  },
  {
    "tag": "6.1",
    "question": "What is data quality metadata?",
    "answer": "Data quality metadata provides information about the accuracy, completeness, consistency, timeliness, and relevancy of datasets."
  },
  [
  {
    "tag": "6.2",
    "question": "What is the purpose of a metadata repository?",
    "answer": "A metadata repository gathers all relevant metadata in one place so that it can be found and used easily by data users. Since metadata itself is data, organizations need a structured way to manage it. A metadata repository stores and manages metadata in a centralized or logically centralized location. It improves data quality, consistency, accessibility, and usability by providing a structured framework for organizing and accessing metadata."
  },
  {
    "tag": "6.2",
    "question": "What is the difference between a metadata repository and a data catalog?",
    "answer": "A metadata repository focuses on managing metadata and is typically used by IT professionals. It serves as the foundational system that stores metadata about data assets. A data catalog, in contrast, provides a searchable and browsable inventory of data assets within an organization. It is often used by data scientists, analysts, and business users. While both provide information about data, metadata repositories focus on managing metadata structures, whereas data catalogs focus on making data assets discoverable and understandable. In practice, data catalogs are often considered a more applied sub-category of metadata repositories."
  },
  {
    "tag": "6.2",
    "question": "Explain centralized metadata repositories.",
    "answer": "A centralized metadata repository stores metadata in one central system. This approach improves maintenance, consistency, and security. For example, metadata concerning data security and protection is often held in a centralized repository, also referred to as consolidated metadata. Centralization helps ensure consistent policies and standards and reduces fragmentation."
  },
  {
    "tag": "6.2",
    "question": "Explain distributed or federated metadata repositories.",
    "answer": "A distributed or federated metadata repository stores metadata in decentralized systems. This approach is suitable for domain-specific metadata that is subject to frequent change and requires expert knowledge. Instead of storing all metadata centrally, different domains maintain their own metadata repositories, allowing flexibility and specialized control."
  },
  {
    "tag": "6.2",
    "question": "Explain hybrid metadata architecture.",
    "answer": "A hybrid metadata architecture combines centralized and federated approaches. Consolidated metadata sets, such as security-related metadata, are stored centrally. Federated metadata remains in decentralized repositories. In this model, only the metadata APIs of federated repositories are registered in the central repository along with consolidated metadata. This approach combines consistency with flexibility."
  },
  {
    "tag": "6.2",
    "question": "What is the search-find-bind approach in metadata systems?",
    "answer": "The search-find-bind approach is commonly implemented in metadata management tools and self-service data portals. It provides a straightforward search engine to find datasets, understand their metadata, and access them via endpoints such as APIs. This approach improves usability and accessibility of organizational data assets."
  },
  {
    "tag": "6.2",
    "question": "Why are metadata repositories important for data governance?",
    "answer": "Metadata repositories are important for data governance because they improve data usability, quality, consistency, and accessibility. By centralizing or logically organizing metadata, organizations can better document data assets, maintain standards, and ensure that data can be found and used efficiently. Metadata repositories support structured documentation and help maximize the value of data assets."
  },
  {
    "tag": "6.2",
    "question": "Give examples of open-source metadata management solutions.",
    "answer": "Examples of open-source metadata management solutions include Apache Atlas, Amundsen, DataHub, Netflix Metacat, Magda, OpenMetadata, Select Star, DKAN, and CKAN. These tools typically provide features such as data visualization, access control, search capabilities, and API support."
  },
  {
    "tag": "6.2",
    "question": "Give examples of commercial metadata management solutions.",
    "answer": "Examples of commercial metadata management solutions include Informatica Data Management Cloud, Informatica Enterprise Data Catalog (EDC), IBM Infosphere, IBM Data Management Platform, Collibra, and Alation. These tools often provide search engines, data lineage tools, data quality features, and additional governance functionalities."
  },
  {
    "tag": "6.2",
    "question": "Name examples of cloud-based metadata catalog services.",
    "answer": "Examples of cloud-based metadata catalog services include Google Data Catalog on Google Cloud Platform, Azure Data Catalog on Microsoft Azure, and AWS Glue Data Catalog on Amazon Web Services. These services integrate closely with other services within their respective cloud ecosystems."
  }
]
  
];
