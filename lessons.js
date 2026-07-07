// Complete ML Notes index data
// To add a new lesson, copy one object in LESSONS and update:
// no, title, file, group, desc, tags, interactive.
// Valid groups are defined in LESSON_GROUPS below.

window.SITE_CONFIG = {
  baseUrl: 'https://beastorm.github.io/Complete-ML/'
};

window.LESSON_GROUPS = [
  { id: 'foundation', label: 'Foundation', accent: '#4f46e5' },
  { id: 'workflow', label: 'Workflow & Roles', accent: '#7c3aed' },
  { id: 'setup', label: 'Setup & Projects', accent: '#0f766e' },
  { id: 'data', label: 'Data Gathering', accent: '#2563eb' },
  { id: 'eda', label: 'EDA', accent: '#f97316' }
];

window.LESSONS = [
  {
    no: '01',
    title: 'What is Machine Learning?',
    file: '01_what_is_machine_learning_easy_notes.html',
    group: 'foundation',
    desc: 'Introduction to ML, traditional programming vs ML, use cases, history, and career motivation.',
    tags: ['ML basics', 'definition', 'use cases']
  },
  {
    no: '02',
    title: 'AI vs ML vs DL',
    file: '02_ai_vs_ml_vs_dl_easy_notes.html',
    group: 'foundation',
    desc: 'Relationship between AI, ML, and DL with rule-based AI, ML, and neural-network examples.',
    tags: ['AI', 'ML', 'DL']
  },
  {
    no: '03',
    title: 'Types of Machine Learning',
    file: '03_types_of_machine_learning_easy_notes.html',
    group: 'foundation',
    desc: 'Supervised, unsupervised, semi-supervised, reinforcement learning, regression, and classification.',
    tags: ['supervised', 'unsupervised', 'RL']
  },
  {
    no: '04',
    title: 'Batch Machine Learning',
    file: '04_batch_machine_learning_easy_notes.html',
    group: 'foundation',
    desc: 'Offline/batch learning, production environment, retraining, and static model limitations.',
    tags: ['batch', 'offline', 'production']
  },
  {
    no: '05',
    title: 'Online Machine Learning',
    file: '05_online_machine_learning_easy_notes.html',
    group: 'foundation',
    desc: 'Incremental learning, real-time data, learning rate, out-of-core learning, and risks.',
    tags: ['online', 'incremental', 'learning rate']
  },
  {
    no: '06',
    title: 'Instance-Based vs Model-Based Learning',
    file: '06_instance_based_vs_model_based_learning_easy_notes.html',
    group: 'foundation',
    desc: 'Memorizing examples vs learning a rule, KNN logic, decision boundary, and differences.',
    tags: ['KNN', 'model-based', 'decision boundary']
  },
  {
    no: '07',
    title: 'Challenges in Machine Learning',
    file: '07_challenges_in_machine_learning_easy_notes.html',
    group: 'workflow',
    desc: 'Data collection, labels, sampling bias, data quality, features, overfitting, deployment, and cost.',
    tags: ['challenges', 'overfitting', 'MLOps']
  },
  {
    no: '08',
    title: 'Applications of Machine Learning',
    file: '08_applications_of_machine_learning_easy_notes.html',
    group: 'workflow',
    desc: 'Retail, banking, transportation, manufacturing, social media, sentiment analysis, and B2B examples.',
    tags: ['applications', 'B2B', 'sentiment']
  },
  {
    no: '09',
    title: 'Machine Learning Development Life Cycle',
    file: '09_machine_learning_development_lifecycle_easy_notes.html',
    group: 'workflow',
    desc: 'MLDLC steps from problem framing to data, features, training, deployment, beta testing, and optimization.',
    tags: ['MLDLC', 'workflow', 'deployment']
  },
  {
    no: '10',
    title: 'Data Science Job Roles',
    file: '10_data_roles_in_data_science_easy_notes.html',
    group: 'workflow',
    desc: 'Data Engineer vs Analyst vs Scientist vs ML Engineer, responsibilities, lifecycle mapping, and skills.',
    tags: ['career', 'roles', 'skills']
  },
  {
    no: '11',
    title: 'What are Tensors?',
    file: '11_what_are_tensors_easy_notes.html',
    group: 'foundation',
    desc: 'Scalars, vectors, matrices, rank, axes, shape, size, and 1D to 5D tensor examples.',
    tags: ['tensors', 'shape', 'rank', 'interactive'],
    interactive: true
  },
  {
    no: '12',
    title: 'Installing Anaconda, Jupyter, Kaggle & Colab',
    file: '12_installing_anaconda_jupyter_colab_easy_notes.html',
    group: 'setup',
    desc: 'Anaconda, Jupyter Notebook, virtual environments, Kaggle notebooks, Colab GPU, and Kaggle API.',
    tags: ['anaconda', 'jupyter', 'colab', 'interactive'],
    interactive: true
  },
  {
    no: '13',
    title: 'End-to-End Toy ML Project',
    file: '13_end_to_end_toy_project_easy_notes.html',
    group: 'setup',
    desc: 'Placement prediction using preprocessing, EDA, train-test split, scaling, Logistic Regression, pickle, and deployment idea.',
    tags: ['project', 'logistic regression', 'interactive'],
    interactive: true
  },
  {
    no: '14',
    title: 'How to Frame a Machine Learning Problem',
    file: '14_framing_machine_learning_problem_easy_notes.html',
    group: 'workflow',
    desc: 'Netflix churn case study: business goal to ML task, data, metrics, online vs batch, assumptions.',
    tags: ['framing', 'churn', 'metrics', 'interactive'],
    interactive: true
  },
  {
    no: '15',
    title: 'Working with CSV Files',
    file: '15_working_with_csv_files_easy_notes.html',
    group: 'data',
    desc: 'pd.read_csv parameters: sep, names, header, usecols, nrows, encoding, bad lines, dates, chunks.',
    tags: ['CSV', 'pandas', 'read_csv', 'interactive'],
    interactive: true
  },
  {
    no: '16',
    title: 'Working with JSON and SQL',
    file: '16_working_with_json_sql_easy_notes.html',
    group: 'data',
    desc: 'JSON, SQL, XAMPP, MySQL connector, read_json, read_sql_query, and DataFrame conversion.',
    tags: ['JSON', 'SQL', 'pandas', 'interactive'],
    interactive: true
  },
  {
    no: '17',
    title: 'Fetching Data From an API',
    file: '17_fetching_data_from_api_easy_notes.html',
    group: 'data',
    desc: 'API concept, TMDB API, requests, JSON parsing, pagination, CSV export, and Kaggle upload.',
    tags: ['API', 'requests', 'pagination', 'interactive'],
    interactive: true
  },
  {
    no: '18',
    title: 'Fetching Data Using Web Scraping',
    file: '18_fetching_data_using_web_scraping_easy_notes.html',
    group: 'data',
    desc: 'Scraping with requests, headers, BeautifulSoup, Inspect Element, containers, and pagination.',
    tags: ['scraping', 'BeautifulSoup', 'HTML', 'interactive'],
    interactive: true
  },
  {
    no: '19',
    title: 'Understanding Your Data',
    file: '19_understanding_your_data_easy_notes.html',
    group: 'eda',
    desc: 'First dataset questions: shape, head/sample, info, missing values, describe, duplicates, and correlation.',
    tags: ['EDA', 'missing values', 'correlation', 'interactive'],
    interactive: true
  },
  {
    no: '20',
    title: 'EDA Using Univariate Analysis',
    file: '20_eda_univariate_analysis_easy_notes.html',
    group: 'eda',
    desc: 'Univariate analysis for categorical and numerical columns: countplot, pie, histogram, KDE, boxplot, skewness.',
    tags: ['univariate', 'histogram', 'boxplot', 'interactive'],
    interactive: true
  }
];
