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
}
];
