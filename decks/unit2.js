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
  }
];
