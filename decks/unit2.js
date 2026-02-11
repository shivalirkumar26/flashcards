// =======================
// UNIT 2 – DATA PROTECTION AND SECURITY
// SECTION 2.1 – ETHICS IN DATA HANDLING
// =======================

const unit2Deck = [
  {
    tag: "2.1",
    question: "Why did ethical concerns in data handling increase with accelerated digitalization?",
    answer: "With accelerated digitalization of everyday life, the collection of personal data has increased significantly. As more personal data is collected, stored, and analyzed, concerns arose regarding the protection of privacy and the possible misuse of personal data. These concerns go beyond technical aspects and affect fundamental individual rights such as privacy, freedom, and autonomy."
  },
  {
    tag: "2.1",
    question: "Why are legislative regulations alone not sufficient for ethical data handling?",
    answer: "Legislative regulations are not sufficient because technological advances often evolve faster than legislation. New challenges related to data collection and analysis may arise that were not considered when the legislation was created. Therefore, ethical principles are required as a foundation to guide responsible data handling beyond what is explicitly regulated by law."
  },
  {
    tag: "2.1",
    question: "What are the three ethical principles for data handling mentioned in the IU course book?",
    answer: "The three ethical principles for data handling are transparency, fairness, and respect. These principles are fundamental to assure proper conduct in data analysis and to protect the privacy, freedom, and autonomy of individuals."
  },
  {
    tag: "2.1",
    question: "What does the ethical principle of transparency mean in data handling?",
    answer: "Transparency means that both the data subject and the data handler are clear about what data is collected, how it is processed, and for which purpose it is used. The collected user content and the intended purpose of data usage must be clearly defined and communicated through transparent and clearly written policies."
  },
  {
    tag: "2.1",
    question: "What technical and organizational measures support transparency according to the IU material?",
    answer: "Transparency is supported by clearly written privacy policies, privacy-respecting default configurations such as restricting cookies to technically necessary ones, and clear explanations of what data is collected when users give consent for additional data processing. Organizations should also follow certification schemes regarding data protection."
  },
  {
    tag: "2.1",
    question: "How does transparency apply to automated decision-making systems?",
    answer: "If decision-making is automated, it should be transparent which ethical aspects are considered in the decision process. This is important to avoid discrimination and to allow individuals to understand how and why certain decisions affecting them are made."
  },
  {
    tag: "2.1",
    question: "What does the ethical principle of fairness focus on?",
    answer: "Fairness focuses on the impact of data handling on individuals and their interests. The use of personal data should be fair to all involved parties, misuse should be avoided, and potential negative impacts of failures should be considered."
  },
  {
    tag: "2.1",
    question: "Which types of personal data must not be used in automated decision-making according to the IU course book?",
    answer: "Sensitive personal data such as race, religion, political preferences, sexual orientation, or disability must not be used in automated decision-making to avoid discrimination."
  },
  {
    tag: "2.1",
    question: "What rights should organizations provide to users under the principle of fairness?",
    answer: "Organizations should ensure that personal data is used only in the context to which the user has given consent and must provide users with the possibility to claim correction of incorrect personal data."
  },
  {
    tag: "2.1",
    question: "What does the ethical principle of respect emphasize?",
    answer: "The principle of respect emphasizes consideration for the persons behind the data. Data managers should prioritize the interests of individuals and their rights before considering the benefits that an organization derives from data collection and analysis."
  },
  {
    tag: "2.1",
    question: "When does data handling become unethical according to the IU material?",
    answer: "Data handling becomes unethical when an individual’s rights are harmed or when the individual loses control over their personal data. This includes collecting or using personal data without proper consent or for purposes not authorized by the data subject."
  },
  {
    tag: "2.1",
    question: "Why are big data applications particularly controversial from an ethical perspective?",
    answer: "Big data applications rely on the collection of massive amounts of data from various sources and their aggregation through data linking. This increases the risk of inappropriate data sharing, loss of control by individuals, and misuse of personal data without proper consent."
  },
  {
    tag: "2.1",
    question: "What is data anonymization and why is it used?",
    answer: "Data anonymization refers to privacy-preserving transformations applied to personal data to remove identifiable information in such a way that individuals cannot be identified by appropriate means. Anonymized data can be used without complying with further personal data protection rules."
  },
  {
    tag: "2.1",
    question: "Why is data anonymization not considered a final solution?",
    answer: "Data anonymization is not a final solution because individuals can sometimes still be identified by combining anonymized data with other characteristics. The IU course book highlights that anonymized datasets may still contain enough information to infer identities."
  },
  {
    tag: "2.1",
    question: "What was the ethical issue demonstrated by the Netflix anonymized data example?",
    answer: "The Netflix dataset, although anonymized, still contained information such as gender, zip code, and age. Researchers demonstrated that these attributes were sufficient to narrow down the identity of customers, leading to concerns about re-identification and the cancellation of the contest."
  },
  {
    tag: "2.1",
    question: "What is profiling according to Schermer (2011)?",
    answer: "Profiling is the process of discovering correlations between data in databases that can be used to identify and represent an individual or group, or applying these profiles to classify individuals as members of certain groups or categories."
  },
  {
    tag: "2.1",
    question: "What is the difference between descriptive and predictive data mining in profiling?",
    answer: "Descriptive data mining discovers groupings and relationships in data and describes the characteristics of these groups. Predictive data mining learns relationships from labeled data to predict with a certain probability whether an individual belongs to a specific group."
  },
  {
    tag: "2.1",
    question: "What are the main risks associated with profiling according to the IU course book?",
    answer: "The main risks associated with profiling are discrimination, de-individualization, and information asymmetries. These risks can lead to unfair treatment, stigmatization, and imbalances of power between organizations and individuals."
  },
  {
    tag: "2.1",
    question: "What are information asymmetries and why are they problematic?",
    answer: "Information asymmetries arise when organizations or governments gain insights about individuals that the individuals themselves do not have. This can shift the balance of power and negatively affect fairness, transparency, and autonomy."
  },
  {
    tag: "2.1",
    question: "Why can automated decision-making algorithms lead to discrimination?",
    answer: "Automated decision-making algorithms can lead to discrimination because they learn patterns from historical data. If the training data contains biases or prejudices, the algorithm will preserve and reproduce these biases in its decisions."
  },
  {
    tag: "2.1",
    question: "What best practices does the IU course book mention to mitigate discrimination by algorithms?",
    answer: "Best practices include using unbiased training data, ensuring class balance, and careful feature selection to avoid discrimination, especially against minority groups."
  },
  {
  tag: "2.2",
  question: "Why is data security mandatory for organizations according to the IU course material?",
  answer: "Data security is mandatory because organizations store and process sensitive information that must be protected from unauthorized access, use, disclosure, modification, or destruction. Without proper data security measures, personal and confidential data may be compromised, leading to violations of individual rights, legal non-compliance, financial loss, and loss of trust. The IU course emphasizes that security principles are essential to protect sensitive information and ensure lawful and trustworthy data handling."
},
{
  tag: "2.2",
  question: "What are the main data security principles mentioned in the IU course material?",
  answer: "The IU course material states that data security is based on several core principles, including confidentiality, availability, integrity, authenticity, non-repudiation, access control, encryption, and disaster recovery. These principles together ensure that data is protected against unauthorized access, loss, manipulation, and misuse while remaining accessible to authorized users when needed."
},
{
  tag: "2.2",
  question: "What does the data security principle of integrity mean?",
  answer: "Integrity ensures that data cannot be altered by unauthorized means. This principle guarantees that information stored in a data system remains correct, complete, and trustworthy. According to the IU course, databases implement mechanisms such as checksums or digital signatures to verify that the data has not been changed without authorization."
},
{
  tag: "2.2",
  question: "How is data integrity technically ensured in information systems?",
  answer: "Data integrity is ensured through technical mechanisms such as checksums, digital signatures, and validation mechanisms implemented in databases. These techniques allow systems to detect unauthorized changes to data and verify that the stored information remains unchanged and reliable."
},
{
  tag: "2.2",
  question: "What does the data security principle of availability mean?",
  answer: "Availability ensures that authorized users can access the data when they need it. The IU course explains that organizations must prepare for network interruptions, hardware failures, or data loss by replicating data, scheduling regular backups, and ensuring reliable infrastructure so that data remains accessible even during failures."
},
{
  tag: "2.2",
  question: "Which measures are commonly used to ensure data availability?",
  answer: "Common measures to ensure data availability include data replication, regular and scheduled backups, redundancy of data stores, and preparation for network interruptions or system failures. These measures ensure that data remains accessible to authorized users even in the event of technical problems."
},
{
  tag: "2.2",
  question: "What does the data security principle of confidentiality mean?",
  answer: "Confidentiality refers to keeping data secret and ensuring that only authorized users have access to it. According to the IU course, confidentiality is achieved by securing data both in transit and at rest, using techniques such as encryption, data masking, and strict access control mechanisms."
},
{
  tag: "2.2",
  question: "What is meant by data in transit and data at rest in the context of confidentiality?",
  answer: "Data in transit refers to data that is being transmitted over networks, such as data sent over the internet. Data at rest refers to data that is stored in databases, file systems, or backups. The IU course emphasizes that both must be protected using encryption and security controls to maintain confidentiality."
},
{
  tag: "2.2",
  question: "What does the data security principle of authenticity mean?",
  answer: "Authenticity ensures that users and applications accessing data are truly who they claim to be. According to the IU course, authenticity is achieved through authentication mechanisms such as passwords, encryption keys, biometric authentication, and multi-factor authentication. It also includes intrusion detection and prevention mechanisms."
},
{
  tag: "2.2",
  question: "What does non-repudiation mean in data security?",
  answer: "Non-repudiation ensures that individuals or applications that create or modify data cannot deny their actions later. The IU course explains that this is achieved by recording transactions using digital signatures, timestamps, and logs that provide traceability and can be used for audits."
},
{
  tag: "2.2",
  question: "How is non-repudiation technically implemented in information systems?",
  answer: "Non-repudiation is implemented using digital signatures, time-stamping mechanisms, and secure logging systems. These logs record who performed which operation and when, allowing auditors to track changes and verify responsibility for data modifications."
},
{
  tag: "2.2",
  question: "What is access control and why is it important?",
  answer: "Access control ensures that data is accessed only by authorized users. The IU course explains that access control systems are often role-based and define which users are allowed to read, write, update, or delete specific data. Access control complements other security mechanisms such as firewalls and authentication systems."
},
{
  tag: "2.2",
  question: "What is encryption and what is its purpose in data security?",
  answer: "Encryption protects sensitive information by enciphering data so that it cannot be understood by unauthorized parties. According to the IU course, encryption is applied to data in transit and data at rest to protect confidentiality even if unauthorized access occurs."
},
{
  tag: "2.2",
  question: "What does the data security principle of disaster recovery include?",
  answer: "Disaster recovery refers to the ability to restore data in case of data loss or disaster. It includes creating regular backups, storing backups in secure locations, and having procedures in place to restore data when needed. The IU course emphasizes that disaster recovery is a crucial part of data security planning."
},
{
  tag: "2.2",
  question: "What is risk management in the context of data security?",
  answer: "Risk management is the process of identifying, assessing, and prioritizing potential security risks and defining appropriate countermeasures. According to the IU course, it ensures that organizations are prepared for undesired events and can mitigate security threats effectively."
},
{
  tag: "2.2",
  question: "What are the five steps of the risk management process according to the IU course?",
  answer: "The risk management process includes: (1) identifying possible risks or threats, (2) estimating the likelihood and potential impact of each threat, (3) designing mitigation strategies for critical risks, (4) monitoring and adapting mitigation strategies over time, and (5) documenting the risk management plan and procedures."
},
{
  tag: "2.2",
  question: "In the online voting system example, what security threats were identified?",
  answer: "The identified threats included lack of encryption for stored personal data, unsecured network transmission of votes, lack of secure logs to detect unauthorized modifications, and the absence of backups leading to potential data loss."
},
{
  tag: "2.2",
  question: "How were threats prioritized in the online voting system example?",
  answer: "Threats were prioritized by assessing both their likelihood of occurrence and their potential impact on the organization. For example, lack of encryption was considered high risk with high likelihood and impact, while data loss had low likelihood but very high impact."
},
{
  tag: "2.2",
  question: "What mitigation strategies were proposed for the online voting system example?",
  answer: "Mitigation strategies included encrypting stored data to ensure confidentiality, using secure transmission protocols such as SSL/TLS and digital signatures to protect data in transit, implementing checksums and secure logs to ensure integrity and non-repudiation, and scheduling automated backups stored in secure external locations."
},
{
  tag: "2.2",
  question: "Why must risk management procedures be continuously monitored and documented?",
  answer: "According to the IU course, security risks evolve over time, so mitigation strategies must be monitored and adapted regularly. Documentation provides evidence that security risks are properly addressed and that the organization complies with data security regulations."
},
/* =======================
   UNIT 2 – SECTION 2.3 – DATA PROTECTION PRINCIPLES (GDPR)
   ======================= */

{
  tag: "2.3",
  question: "What is the GDPR and why is it important for systems handling data of EU citizens?",
  answer: "The General Data Protection Regulation (GDPR), Regulation (EU) 2016/679, became effective in May 2018 and provides a legal framework for the protection and privacy of personal data of EU citizens. It defines rules for the collection, storage, and processing of personal data. The GDPR establishes roles of stakeholders, data protection principles, and rights and obligations of the involved parties. It is crucial for any system handling personal data of EU citizens because it legally mandates compliance with data protection principles and requires organizations to design and operate data systems in accordance with these principles."
},
{
  tag: "2.3",
  question: "What are the roles defined under the GDPR framework?",
  answer: "The GDPR distinguishes three main roles. Data subjects are the individuals from whom personal data is collected. Data controllers are the entities that hold the collected data and determine the purposes and means of processing the data. Data processors collect and process personal data on behalf of and commissioned by the data controllers. These clearly defined roles establish responsibilities and accountability within the data handling process."
},
{
  tag: "2.3",
  question: "Name and explain all the Data Protection Principles under the GDPR.",
  answer: "The GDPR defines several core data protection principles that guide the lawful and ethical processing of personal data. These principles are: Fairness, Lawfulness, and Transparency; Purpose Limitation; Data Minimisation; Accuracy; Storage Limitation; Integrity and Confidentiality; and Accountability. Fairness, Lawfulness, and Transparency require that data is processed on a legal basis, in a fair manner, and that individuals are clearly informed about what data is collected, for which purpose, and for how long. Purpose Limitation means data may only be processed for specified and legitimate purposes. Data Minimisation requires collecting only the data that is necessary and relevant for the intended purpose. Accuracy obliges controllers to ensure that personal data is correct and up to date. Storage Limitation means personal data must not be kept longer than necessary and should be deleted or anonymized once the purpose is fulfilled. Integrity and Confidentiality require appropriate technical and organizational measures to protect personal data against unauthorized access, loss, destruction, or damage. Accountability emphasizes that the data controller is responsible for complying with all these principles and must be able to demonstrate such compliance."
},
{
  tag: "2.3",
  question: "Explain the GDPR principle of Fairness, Lawfulness, and Transparency in detail.",
  answer: "Fairness, lawfulness, and transparency require that personal data must be processed on a legal basis such as consent, public interest, or legitimate interest. Consent must be explicit in the case of sensitive data. Lawfulness ensures that data collection is justified by a valid legal ground. Fairness means that data processing must be reasonable and not harmful from the perspective of the data subject. Transparency requires that organizations clearly inform individuals about what data is collected, for what purpose, who processes it, and how long it will be stored. This information must be communicated in a clear and understandable manner."
},
{
  tag: "2.3",
  question: "What does the principle of Purpose Limitation mean under the GDPR?",
  answer: "Purpose limitation means that personal data must only be collected and processed for clearly specified, explicit, and legitimate purposes. Data must not be used for purposes that are incompatible with the original purpose unless additional consent is obtained. For example, address data collected for shipping products must not be used for marketing or advertisement without explicit additional authorization from the data subject."
},
{
  tag: "2.3",
  question: "Explain the GDPR principle of Data Minimisation.",
  answer: "Data minimisation requires that personal data collected must be appropriate, relevant, and limited to what is necessary for achieving the specified purpose. Before collecting data, organizations must define the minimum quantity of data required. For example, collecting health data from employees is only allowed if it is necessary for a legitimate purpose such as workplace risk assessment. Otherwise, such collection would violate the principle of data minimisation."
},
{
  tag: "2.3",
  question: "What does the Accuracy principle require from data controllers and processors?",
  answer: "The accuracy principle requires that personal data must be correct and up to date. Data controllers and processors are obligated to correct inaccurate data upon request or when changes occur that render the data outdated. This ensures that decisions based on personal data are made using reliable and current information."
},
{
  tag: "2.3",
  question: "Explain the principle of Storage Limitation.",
  answer: "Storage limitation means that personal data must not be stored longer than necessary for the purpose for which it was collected. Organizations must define retention policies specifying how long data is stored and when it is deleted or anonymized. This deletion or anonymization should be technically implemented in the data system to ensure compliance."
},
{
  tag: "2.3",
  question: "What is meant by Integrity and Confidentiality under the GDPR?",
  answer: "Integrity and confidentiality require that personal data be processed securely and protected against unauthorized or unlawful access, processing, accidental loss, destruction, or damage. This includes implementing appropriate technical and organizational measures to safeguard data security and ensure that data remains accurate, complete, and protected from breaches."
},
{
  tag: "2.3",
  question: "What does Accountability mean in the GDPR context?",
  answer: "Accountability emphasizes the responsibility of the data controller to comply with all GDPR principles and to be able to demonstrate compliance. It is not a standalone principle but reinforces that controllers must document, justify, and prove that appropriate data protection measures are implemented."
},
{
  tag: "2.3",
  question: "What rights do data subjects have under the GDPR?",
  answer: "Data subjects have several rights including the right of information about which personal data are collected and processed; the right to know the source of personal data; the right of access to obtain a copy of their personal data; the right to rectification; the right to erasure (right to be forgotten); the right to object to processing; the right to restrict processing; the right to be notified about further processing activities or data breaches; the right to data portability; and the right not to be subject to profiling or automated decision-making without proper safeguards."
},
{
  tag: "2.3",
  question: "What is the right not to be subject to profiling and what must the data controller do before implementing automated decision-making?",
  answer: "The right not to be subject to profiling protects individuals from automated processing that evaluates personal aspects such as performance at work, economic situation, health, personal preferences, reliability, behavior, location, or movements. Before implementing automated decision-making systems, the data controller must conduct a Data Impact Assessment to evaluate privacy risks. The use of such systems requires explicit authorization from the data subject unless authorized by law. Individuals also have the right to obtain explanatory information about the logic behind automated decisions."
},
{
  tag: "2.3",
  question: "Explain the concepts of Data Protection by Design and Data Protection by Default.",
  answer: "Data Protection by Design requires that data protection principles are technically implemented into the architecture of data systems from the earliest stage of development. Data Protection by Default means that the highest possible data protection settings must be selected by default throughout the system lifecycle. These principles ensure that privacy is embedded into systems proactively rather than retroactively."
},
{
  tag: "2.3",
  question: "What is anonymization and what are the different categories of attributes that must be considered?",
  answer: "Anonymization is a technique used to remove Personal Identifiable Information (PII) so that re-identification of individuals is extremely unlikely using appropriate means. There are four categories of attributes: explicit identifiers (direct identifiers like name or email), quasi-identifiers (attributes like zip code, gender, and birth date that may identify a person in combination), sensitive information (health, financial data, political beliefs), and non-sensitive information (data without linkage to individuals). Anonymization techniques include suppression, generalization, permutation, perturbation, k-anonymity, l-diversity, t-closeness, and differential privacy."
},
{
  tag: "2.3",
  question: "What is pseudonymization and how does it differ from anonymization?",
  answer: "Pseudonymization substitutes Personal Identifiable Information with random identifiers using a linkage table that connects the pseudonyms to the original identities. Unlike anonymization, pseudonymized data can be re-identified by the data controller using the linkage table. Therefore, pseudonymization does not completely remove identifiability but reduces privacy risks while maintaining the possibility of controlled re-identification."
},
{
  tag: "2.3",
  question: "How can you easily remember the Data Security Principles and the GDPR Data Protection Principles using memory helpers?",
  answer: "The Data Security Principles can be remembered using the acronym CANAADIE and the sentence: “Crazy Astronauts Never Ask Aliens During Intergalactic Emergencies.” CANAADIE stands for Confidentiality, Availability, Non-repudiation, Authenticity, Access control, Disaster recovery, Integrity, and Encryption. The GDPR Data Protection Principles can be remembered using the acronym FAADPIS and the sentence: “Cool Lawyers Tell People Data Always Stays In Account.” FAADPIS represents Fairness, Lawfulness and Transparency, Purpose limitation, Data minimisation, Accuracy, Storage limitation, Integrity and Confidentiality, and Accountability. The different themes (technical space theme vs legal lawyer theme) help distinguish security from protection principles."
},
/* =======================
   SECTION 2.4 – DATA ENCRYPTION
   ======================= */

{
  tag: "2.4",
  question: "What is data encryption and what is its purpose?",
  answer: "Data encryption is the process of converting readable data into an unreadable format called ciphertext. Ciphertext cannot be understood by unauthorized users and can only be deciphered using a password or secret key held by authorized users. The purpose of encryption is to protect the confidentiality and integrity of data by preventing unauthorized access and preventing data from being read or altered."
},
{
  tag: "2.4",
  question: "What is ciphertext?",
  answer: "Ciphertext is the unreadable format of data that results after encryption. It cannot be interpreted by unauthorized users and requires a secret key or password to be converted back into its original readable form."
},
{
  tag: "2.4",
  question: "What is the difference between encryption at rest and encryption in transit?",
  answer: "Encryption at rest refers to the encryption of stored data, such as archived datasets, database tables, logs, and backups. Its purpose is to protect data if storage systems are accessed by unauthorized users. Encryption in transit refers to the encryption of data while it is being transferred over a network. It protects data during transmission and prevents interception by unauthorized parties."
},
{
  tag: "2.4",
  question: "Which of the following best describes symmetric encryption?\nA. It uses a public key for encryption and a private key for decryption\nB. It uses the same key for encryption and decryption\nC. It produces a fixed-length digital fingerprint\nD. It does not require key management",
  answer: "Correct answer: B. Symmetric encryption uses the same key for encryption and decryption."
},
{
  tag: "2.4",
  question: "Explain symmetric encryption and give examples.",
  answer: "Symmetric encryption uses the same cryptographic key for both encryption and decryption. This means that the sender and receiver must share the same secret key. It is efficient and suitable for encrypting large volumes of data. Examples include DES (Data Encryption Standard), AES (Advanced Encryption Standard), and Blowfish. AES, especially with 256-bit keys, is considered a secure and widely used encryption method."
},
{
  tag: "2.4",
  question: "Which of the following best describes asymmetric encryption?\nA. It uses one shared key for both encryption and decryption\nB. It uses a pair of public and private keys\nC. It cannot be used for secure communication\nD. It is only used for hashing",
  answer: "Correct answer: B. Asymmetric encryption uses a pair of public and private keys."
},
{
  tag: "2.4",
  question: "Explain asymmetric encryption and give examples.",
  answer: "Asymmetric encryption, also referred to as public key cryptography, uses a pair of keys: a public key for encryption and a private key for decryption. The public key can be shared openly, while the private key is kept secret. This method is commonly used for secure communication and key exchange. Examples include RSA, Diffie-Hellman, and Elliptic Curve Cryptography such as ECDSA."
},
{
  tag: "2.4",
  question: "What are hash functions and what are they used for?",
  answer: "Hash functions generate a fixed-length digital fingerprint of data. This fingerprint is unique to the given content and is used for verifying data integrity. If the content changes, the hash value changes as well. Hash functions are one-way functions and cannot be reversed to obtain the original data. Examples include SHA-256 and MD-5."
},
{
  tag: "2.4",
  question: "Why is key length important in encryption?",
  answer: "The robustness of an encryption algorithm is related to the length of the cryptographic key. Longer keys provide greater security because they increase the number of possible combinations that must be computationally verified to break the encryption. For example, AES 256-bit encryption relies on a 256-bit key and is considered secure because of the large number of possible key combinations."
},
{
  tag: "2.4",
  question: "What are Hardware Security Modules (HSM)?",
  answer: "Hardware Security Modules (HSM) are physical devices designed for secure key storage and cryptographic operations. They can range from personal cryptographic chipsets to large hardware modules capable of handling massive cryptographic operations. Their purpose is to securely manage and protect cryptographic keys."
},
{
  tag: "2.4",
  question: "What are cloud-based key stores and give examples.",
  answer: "Cloud-based key stores are centralized key management solutions that provide secure storage and management of cryptographic keys in cloud environments. Examples include Amazon Key Management Service (KMS) and Azure Key Vault."
},
{
  tag: "2.4",
  question: "Explain Transparent Data Encryption (TDE).",
  answer: "Transparent Data Encryption (TDE) is a database encryption approach handled automatically by the Database Management System (DBMS). It transparently encrypts data at rest and in transit without requiring manual intervention by users. Data at rest includes tables, tablespaces, logs, and backups, while data in transit refers to data retrieval over networks."
},
{
  tag: "2.4",
  question: "What is column-level encryption?",
  answer: "Column-level encryption encrypts only specific sensitive data stored in particular columns of a database rather than encrypting the entire database. This approach improves performance by applying encryption only where necessary."
},
{
  tag: "2.4",
  question: "What is file-level encryption?",
  answer: "File-level encryption encrypts individual database files stored on disk, including data files, index files, and backups. This approach is useful for protecting data stored on portable devices such as laptops or cloud-based databases."
},
{
  tag: "2.4",
  question: "What is application-level encryption?",
  answer: "Application-level encryption encrypts data within the application before it is stored in the database. The application is responsible for managing cryptographic keys and performing the encryption process. This method is often used for highly sensitive information."
},
{
  tag: "2.4",
  question: "Which protocol is commonly used for encryption in transit?\nA. FTP\nB. HTTP\nC. SSL/TLS\nD. CSV",
  answer: "Correct answer: C. SSL/TLS."
},
{
  tag: "2.4",
  question: "Explain the role of SSL and TLS in data encryption.",
  answer: "SSL (Secure Socket Layer) and TLS (Transport Layer Security) are protocols used to encrypt data during transmission over a network. They ensure confidentiality and integrity of data in transit. The encryption is transparent to users, meaning that users do not need to manually manage encryption keys during communication."
},
{
  tag: "2.4",
  question: "Give an example of how encryption protects personal information stored in a database.",
  answer: "Sensitive information such as names, addresses, and account details can be encrypted using a symmetric encryption algorithm such as AES. The encryption key is stored securely and separately from the encrypted data. If unauthorized access to the database occurs, the attacker will only see encrypted ciphertext, which cannot be read without the encryption key."
},
{
  tag: "2.4",
  question: "Name and explain the four database encryption approaches mentioned in the IU material.",
  answer: "The four database encryption approaches are Transparent Data Encryption (TDE), which encrypts data at rest and in transit automatically within the DBMS; column-level encryption, which encrypts only specific sensitive columns; file-level encryption, which encrypts database files including data files, index files, and backups; and application-level encryption, which encrypts data within the application before storing it in the database and requires the application to manage keys."
},
/* =======================
   UNIT 2 – SECTION 2.5 – DATA MASKING STRATEGY
   ======================= */

{
  tag: "2.5",
  question: "What is data masking and what is its purpose?",
  answer: "Data masking, also referred to as data sanitization, is a technique that substitutes original values in data with randomized or obfuscated values in order to secure and keep confidential personally identifiable data. The masked data can then be used for analysis, research, or testing without compromising the privacy of personal data. In contrast to encrypted data, masked data is not supposed to be reversed to its original values by reverse engineering or an algorithm."
},
{
  tag: "2.5",
  question: "Explain the difference between data masking and encryption.",
  answer: "Encryption converts data into unreadable ciphertext that can be reversed to its original form using a secret key. Data masking, on the other hand, replaces sensitive values with altered or randomized values and is not meant to be reversed. Encryption is reversible with the correct key, whereas masked data is not supposed to be reconstructed into its original values."
},
{
  tag: "2.5",
  question: "What is shuffling as a data masking technique?",
  answer: "Shuffling changes the values in a column randomly by reordering the values. For example, the place of residence of individuals in a database can be interchanged randomly across records. The values remain valid, but their linkage to the original individual is broken."
},
{
  tag: "2.5",
  question: "What is scrambling in data masking?",
  answer: "Scrambling changes the value of data by reordering its alphanumeric characters. For example, an ID number such as 894264Q can be transformed into 6Q94824. The structure of the value remains similar, but the original content is obfuscated."
},
{
  tag: "2.5",
  question: "What is substitution in data masking?",
  answer: "Substitution replaces the original content of sensitive variables with other values from a set of possible values. The substituted values must satisfy constraints in order to conserve the original characteristics of the data. For example, email records may be replaced with fictive yet valid email addresses to preserve structure while protecting identity."
},
{
  tag: "2.5",
  question: "What are data aging and variance in data masking?",
  answer: "Data aging or variance modifies numerical values. Data aging adds or subtracts a random offset from the original numeric value. Variance adds noise to the original value according to the data distribution. These methods preserve statistical properties while obfuscating individual values."
},
{
  tag: "2.5",
  question: "What is character masking?",
  answer: "Character masking substitutes part of the original value with a given character while leaving only some of the original information visible. For example, all digits of a telephone number may be replaced with * except for the last three digits."
},
{
  tag: "2.5",
  question: "What does nullifying mean in data masking?",
  answer: "Nullifying substitutes the original values with null values. This completely removes the sensitive information from the dataset."
},
{
  tag: "2.5",
  question: "What is static data masking?",
  answer: "Static data masking refers to creating a copy of the original data and obfuscating sensitive fields in that copy. The masked copy is then used for analysis, testing, or demonstration by third parties while preserving the confidentiality of personal data. The production system remains unchanged."
},
{
  tag: "2.5",
  question: "What is dynamic data masking?",
  answer: "Dynamic data masking is applied in production systems and obfuscates sensitive information at the time of access based on role-based policies. For example, administrative staff in a health system may only see appointment information while medical history remains hidden or masked, whereas doctors may access the full information."
},
{
  tag: "2.5",
  question: "Why is dynamic data masking considered more suitable for production systems?",
  answer: "Dynamic data masking provides flexibility by applying masking rules at runtime depending on the user's role. This allows sensitive information to be selectively hidden without modifying the underlying production database, making it more suitable for operational systems."
},
{
  tag: "2.5",
  question: "What are the main challenges associated with data masking?",
  answer: "The process of data masking can become complicated in large databases. It may reduce system performance as masking requires processing resources. Obfuscated data requires maintenance when production systems change. Data integrity can be lost if masking breaks relationships between tables or alters structure. Inadequate masking approaches can also lead to leakage of sensitive information."
},
{
  tag: "2.5",
  question: "How can data integrity be compromised during masking?",
  answer: "Data integrity can be compromised if masking changes the structure or relationships between datasets. For example, scrambling identifier values can break joins with external tables. Subsetting may lead to nonrepresentative results. Improper randomization may alter the meaning of features."
},
{
  tag: "2.5",
  question: "Name examples of database-integrated data masking solutions.",
  answer: "Microsoft SQL Server integrates with Redgate SQL Data Masker. Oracle SQL Server uses the Oracle Data Masking and Subsetting Utility to apply obfuscation methods."
},
{
  tag: "2.5",
  question: "Name examples of standalone data masking applications.",
  answer: "Commercial standalone applications include Delphix Dynamic Platform, Informatica MDM, and IBM Infosphere Data Privacy. Talend Data Masking is an open-source solution. These tools are compatible with on-premise and cloud storage solutions such as AWS S3 and Microsoft Azure Blob Storage."
},
{
  tag: "2.5",
  question: "How does AWS support data masking?",
  answer: "Amazon Web Services offers data masking capabilities integrated with Amazon RedShift Data Management, Amazon S3 Inventory, and Amazon Macie. Amazon Macie automatically discovers sensitive information stored in Amazon S3 and enables automatic protection by obfuscating its values in reports."
},
{
  tag: "2.5",
  question: "How does Microsoft Azure support data masking?",
  answer: "Microsoft Azure provides dynamic data masking solutions in Azure SQL Database and Azure SQL Data Warehouse. The Azure Security Center establishes masking rules and automatically hides sensitive data in reports and logs."
}
  
];
