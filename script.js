"use strict";


/* =================================
   Website Translations
================================= */

const translations = {

    en: {
        pageTitle: "Ghala Bander | AI Engineer",

        brandName: "Ghala Bander",

        heroLabel: "AI Engineering Portfolio",


        name: "Ghala Bander",

        role: "AI Engineer",

        heroDescription:
        "Artificial Intelligence graduate with hands-on experience in machine learning, generative AI, retrieval-augmented generation (RAG), computer vision, and agentic AI, building practical AI applications and intelligent workflows.",

        viewProjects: "View Projects",

        downloadCV: "Download CV",

        availability:
            "Open to AI, data, and technology roles across Saudi Arabia; willing to relocate.",

        profileRole: "AI Engineer",

        profileHeadline:
        "Building practical AI and intelligent systems",

        projectsStat: "Featured Projects",

        gpaStat: "GPA",

        honorsValue: "First Class",

        honorsStat: "Honors",

        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",

        aboutLabel: "Professional Profile",
        aboutTitle: "About Me",
        aboutSubtitle:
            "An overview of my academic background, technical experience, and career focus.",

        aboutHeadline:
        "Building practical AI systems from intelligent models to real applications",

        aboutParagraphOne:
        "Artificial Intelligence graduate from the University of Hail with First Class Honors and a GPA of 3.907 / 4.00. My hands-on experience spans machine learning, generative AI, natural language processing, computer vision, retrieval-augmented generation (RAG), agentic AI, and practical AI application development.",
        aboutParagraphTwo:
        "My portfolio includes RAGOps Agent, a multi-agent system for monitoring and improving RAG retrieval quality; an AI-based hospital crisis training platform; an AI-powered plant care system; and an IoT-enabled smart traffic monitoring dashboard. Through these projects, I have developed experience in retrieval evaluation, intelligent workflows, backend integration, data-driven problem solving, and collaborative AI system development.",
        careerFocusLabel: "Career Focus",

        careerFocusValue:
        "AI Engineering, Machine Learning, RAG, and Agentic AI",
        degreeLabel: "Degree",
        degreeValue: "Bachelor of Artificial Intelligence",

        universityLabel: "University",
        universityValue: "University of Hail",

        aboutGpaLabel: "GPA",

        aboutHonorsLabel: "Academic Honor",
        aboutHonorsValue: "First Class Honors",

        locationLabel: "Location",
        locationValue: "Saudi Arabia",

        relocationLabel: "Relocation",
        relocationValue: "Available",

        educationLabel: "Education",
        educationTitle: "Academic Background",
        graduationYearLabel: "Graduated",

        educationDegree: "Bachelor of Artificial Intelligence",
        educationUniversity: "University of Hail",

        educationCollege:
            "College of Computer Science and Engineering",

        educationGpa: "GPA: 3.907 / 4.00",
        educationHonors: "First Class Honors",

        projectsLabel: "Selected Work",

        projectsTitle: "Featured Projects",

        projectsSubtitle:
        "A selection of AI, agentic AI, machine learning, backend development, RAG, and IoT projects completed through academic work, cooperative training, and professional programs.",

          ragopsType:
        "SDA Agentic AI Engineering Project",

        ragopsSubtitle:
            "Multi-Agent Retrieval QA Optimizer",

        ragopsDescription:
            "A multi-agent RAGOps system designed to improve the retrieval layer behind RAG-based AI assistants rather than act as a chatbot itself. It monitors retrieval quality, diagnoses Top-K, Query Mismatch, and Chunking Quality issues, proposes targeted optimizations, applies Human-in-the-Loop controls to structural changes, and validates improvements using before-and-after retrieval metrics to support more reliable AI responses.",

        ragopsImageAlt:
            "RAGOps Agent overview showing the four-agent retrieval optimization workflow",

        viewLiveDemo:
            "Live Demo",

        crisisType: "Graduation Project",

        crisisSubtitle:
        "AI-Enabled Hospital Crisis Training and Assessment Platform",

        crisisDescription:
        "An intelligent hospital crisis training and assessment platform that enables supervisors to generate emergency scenarios and assessment questions with AI, assign them to staff, and monitor performance. The system automatically scores submitted answers, then uses AI to provide feedback based on each employee’s results.",

        greenCareType:
            "Cooperative Training Project",

        greenCareSubtitle:
        "AI-Powered Plant Care and Health Assessment Platform",

        greenCareDescription:
        "A sustainability-focused AI platform designed to address limited plant-care knowledge. Users upload a plant image and complete a health assessment covering factors such as lighting, leaf condition, and watering frequency. The platform uses AI and computer vision to identify the plant from the uploaded image, assess its condition, and provide personalized care recommendations based on the user’s inputs, location, and weather data.",

        nextrafficType:
            "AI and IoT Bootcamp Project",

        nextrafficSubtitle:
            "Smart Traffic and IoT Monitoring Dashboard",

        nextrafficDescription:
        "A smart traffic and IoT monitoring dashboard built with Cumulocity IoT to track intersections, congestion levels, traffic signal status, weather and road conditions, and real-time alerts for traffic and emergency events.",

        viewGitHub: "View on GitHub",

        projectGalleryLater:
            "Full gallery coming next",

        crisisImageAlt:
            "CrisisTrainer supervisor dashboard showing hospital crisis training management",

        greenCareImageAlt:
            "Green Care dashboard showing plants, health status, AI analysis, and recommendations",

        nextrafficImageAlt:
            "NexTraffic dashboard showing smart mobility data and the city of Hail",

         viewGallery: "View Gallery",

        projectGalleryLabel: "Project Gallery",

        closeGallery: "Close gallery",

        previousImage: "Previous image",

        nextImage: "Next image",

        previousButton: "Previous",

        nextButton: "Next", 

        skillsLabel: "Core Capabilities",

        skillsTitle: "Skills and Technologies",

        skillsSubtitle:
        "Technical and professional capabilities developed through AI projects, professional programs, cooperative training, and independent learning.",

        aiSkillsTitle:
        "Artificial Intelligence, Machine Learning, and Agentic AI",

        aiSkillsDescription:
        "AI methods and intelligent workflows applied across machine learning, generative AI, NLP, computer vision, RAG, and multi-agent systems.",

        programmingSkillsTitle:
        "Programming and Data Analysis",

        programmingSkillsDescription:
        "Programming languages and data tools used for analysis, data preparation, and AI solution development.",

        backendSkillsTitle:
        "Backend Development and Data Systems",

        backendSkillsDescription:
        "Backend technologies used to build REST APIs, integrate AI capabilities into applications, and manage structured data.",

        toolsSkillsTitle:
        "AI Frameworks, Development Tools, and IoT",

        toolsSkillsDescription:
        "Frameworks and tools used for agentic AI workflows, vector retrieval, experimentation, observability, version control, interfaces, and IoT monitoring.",

        professionalSkillsTitle:
            "Professional Skills",

        professionalSkillsDescription:
        "Professional skills that support structured problem solving, clear technical documentation, effective collaboration, and reliable project delivery.",

        problemSolving:
            "Problem Solving",

        analyticalThinking:
            "Analytical Thinking",

        teamwork:
            "Teamwork",

        communication:
            "Communication",

        technicalDocumentation:
            "Technical Documentation",

        navExperience: "Experience",

        experienceLabel: "Applied Experience",

        experienceTitle: "Experience and Training",

        experienceSubtitle:
        "Hands-on training and project experience in agentic AI, AI application development, data organization, technical documentation, and team collaboration.",

        sdaExperienceType:
    "Agentic AI Engineering Program",

        sdaRole:
            "Agentic AI Engineering Trainee",

        sdaOrganization:
            "Saudi Digital Academy (SDA) · In collaboration with WeCloudData",

        sdaDates:
            "Completed October 2026",

        sdaDuration:
            "7-Week Program",

        sdaPointOne:
            "Contributed within a team to the end-to-end development of RAGOps Agent, a multi-agent optimization layer for RAG systems, with a primary focus on retrieval evaluation and diagnosis.",

        sdaPointTwo:
            "Evaluated retrieval performance across 48 queries covering 24 services using Recall@K, Precision@K, and MRR, and diagnosed Top-K, Query Mismatch, and Chunking Quality issues.",

        sdaPointThree:
            "Worked within a LangGraph-orchestrated workflow using LangChain, FAISS, and Human-in-the-Loop controls to support targeted optimization and before-vs-after validation.",

        mewaExperienceType:
            "Cooperative Training",

        mewaRole:
            "Cooperative Training Trainee",

        mewaOrganization:
            "Ministry of Environment, Water and Agriculture",

        mewaDates:
            "June 2025 – January 2026",

        mewaDuration:
            "28 Weeks",

        remoteWork:
            "Online",

       mewaPointOne:
        "Prepared project documentation, reports, and structured Excel updates to support data organization and reporting.",

        mewaPointTwo:
        "Explored selected digital platforms used by the Ministry to understand their key functions and how they operate.",

        mewaPointThree:
        "Contributed to developing a sustainability-focused AI solution for plant health assessment and personalized care recommendations.",

        experienceProjectLabel:
            "Associated Project",

        nitaExperienceType:
            "Professional Bootcamp",

        nitaRole:
            "AI & IoT Bootcamp Trainee",

        nitaOrganization:
            "National Information Technology Academy",

        nitaDuration:
            "3-Month Bootcamp",

        nitaPointOne:
        "Collaborated within a team to develop an IoT-based smart traffic monitoring solution using Cumulocity IoT.",

        nitaPointTwo:
        "Contributed to building dashboards for monitoring intersections, congestion levels, traffic signal status, road conditions, and weather data.",

        nitaPointThree:
        "Configured smart rules and alerts for congestion, wet-road conditions, low visibility, and emergency-related events.",

        navCertifications:
        "Certifications",

        navHonors:
        "Honors",

        certificationsLabel:
            "Continuous Learning",

        certificationsTitle:
            "Certifications and Training",

        certificationsSubtitle:
        "Selected certifications, completed coursework, and professional training across artificial intelligence, cloud computing, data analytics, IoT, and machine learning.",

        cloudCategory:
            "Cloud Computing",

        bootcampCategory:
            "Professional Bootcamp",

        generativeAiCategory:
            "Generative AI",

        dataAnalyticsCategory:
            "Data Analytics",

        tableauCategory:
        "Data Analytics",

        machineLearningCategory:
            "Machine Learning",

        sdaIssuer:
            "Saudi Digital Academy",

        nitaIssuer:
            "National Information Technology Academy",

        tuwaiqIssuer:
        "Tuwaiq Academy",

        doroobIssuer:
            "Doroob",

        awsCompletedDate:
            "Completed in February 2024",

        nitaCompletedDate:
        "3-Month Bootcamp · Completed October 2025",

    tuwaiqCompletedDate:
     "10 Training Hours · Completed August 2026",

        fiveCompletedCourses:
            "5 Completed Courses",

        twoCompletedCourses:
            "2 Completed Courses",

        ibmSeriesDescription:
        "Completed coursework covering generative AI applications, foundation models, prompt engineering, ethical considerations, and business transformation.",

        googleSeriesDescription:
        "Two completed courses covering data foundations and how to frame effective questions for data-driven decision-making.",

        doroobCompletedDate:
        "3 Training Hours · Completed December 2023",

        viewCertificate:
            "View Certificate",

        verifyCertificate:
            "Verify Certificate",

        viewCourses:
            "View Courses",

        certificateSeriesLabel:
            "Professional Learning Series",

        closeCertificatesModal:
    "Close certificates",

        honorsSectionLabel:
            "Academic Recognition",

        honorsSectionTitle:
            "Academic Honors",

        honorsSectionSubtitle:
            "Recognition awarded by the University of Hail for academic excellence and outstanding academic performance.",

        honorCategory:
            "Academic Excellence",

        honor1445Title:
            "Academic Excellence Recognition",

        honor2023Title:
            "Academic Excellence Recognition",

        honorIssuer:
            "University of Hail",

        honor1445Year:
            "Academic Year 1445 AH",

        honor2023Year:
            "Academic Year 2023",

        viewRecognition:
            "View Recognition",

        academicRecognitionLabel:
            "Academic Recognition",

        closeHonorModal:
            "Close academic recognition",

        honor1445ImageAlt:
            "University of Hail Academic Excellence Certificate for academic year 1445 AH",

        honor2023ImageAlt:
            "University of Hail Academic Excellence Certificate for academic year 2023",

        contactLabel:
            "Get in Touch",

        contactTitle:
        "Let’s connect and explore opportunities",

        contactDescription:
        "I’m open to graduate and entry-level opportunities in AI engineering, machine learning, data analysis, and AI application development.",

        contactAvailability:
        "Available across Saudi Arabia and willing to relocate",

        phoneLabel:
            "Phone",

        emailLabel:
            "Email",

        linkedinLabel:
            "LinkedIn",

        githubLabel:
            "GitHub",

       footerDescription:
        "AI Engineer focused on practical AI, machine learning, and data-driven applications.",

        footerNavigationTitle:
            "Navigation",

        footerConnectTitle:
            "Connect",

        footerCopyright:
            "Ghala Bander. All rights reserved.",

        backToTop:
            "Back to top",

        openMenu:
            "Open navigation menu",

        closeMenu:
            "Close navigation menu"

    },


    ar: {
        pageTitle: "غلا بندر | مهندسة ذكاء اصطناعي",

        brandName: "غلا بندر",

        heroLabel: "ملف أعمال هندسة الذكاء الاصطناعي",

        name: "غلا بندر",

        role: "مهندسة ذكاء اصطناعي",

        heroDescription:
        "خريجة ذكاء اصطناعي بخبرة تطبيقية في تعلم الآلة، والذكاء الاصطناعي التوليدي، والاسترجاع المعزز بالتوليد (RAG)، والرؤية الحاسوبية، والذكاء الاصطناعي الوكيل، مع خبرة في بناء تطبيقات وسير عمل ذكية.",
        viewProjects: "استعراض المشاريع",

        downloadCV: "تحميل السيرة الذاتية",

        availability:
        "متاحة لفرص الذكاء الاصطناعي والبيانات والتقنية في المملكة، ومستعدة للانتقال.",
        profileRole: "مهندسة ذكاء اصطناعي",

        profileHeadline:
        "أطوّر أنظمة وحلولًا عملية بالذكاء الاصطناعي",

        projectsStat: "مشاريع مميزة",

        gpaStat: "المعدل",

        honorsValue: "الأولى",

        honorsStat: "مرتبة الشرف",

        navHome: "الرئيسية",
        navAbout: "نبذة عني",
        navProjects: "المشاريع",
        navSkills: "المهارات",
        navContact: "التواصل",

        aboutLabel: "الملف المهني",
        aboutTitle: "نبذة عني",

        aboutSubtitle:
        "نظرة على خلفيتي الأكاديمية وخبرتي التقنية وتوجهي المهني.",
        aboutHeadline:
        "أبني أنظمة ذكاء اصطناعي عملية من النماذج الذكية إلى التطبيقات الفعلية",

        aboutParagraphOne:
        "خريجة بكالوريوس الذكاء الاصطناعي من جامعة حائل بمرتبة الشرف الأولى ومعدل 3.907 من 4.00. تشمل خبرتي التطبيقية تعلم الآلة، والذكاء الاصطناعي التوليدي، ومعالجة اللغة الطبيعية، والرؤية الحاسوبية، والاسترجاع المعزز بالتوليد (RAG)، والذكاء الاصطناعي الوكيل، وتطوير تطبيقات الذكاء الاصطناعي العملية.",

        aboutParagraphTwo:
        "يتضمن ملف مشاريعي RAGOps Agent، وهو نظام متعدد الوكلاء لمراقبة جودة الاسترجاع في أنظمة RAG وتحسينها، بالإضافة إلى منصة لتدريب المستشفيات على الأزمات بالذكاء الاصطناعي، ومنصة ذكية للعناية بالنباتات، ولوحة لمراقبة الحركة المرورية باستخدام إنترنت الأشياء. ومن خلال هذه المشاريع، اكتسبت خبرة في تقييم الاسترجاع، وسير العمل الذكية، وربط أنظمة الذكاء الاصطناعي بالخدمات الخلفية، وحل المشكلات بالاعتماد على البيانات، والعمل ضمن فرق تطوير تقنية.",

        careerFocusLabel: "التوجه المهني",

        careerFocusValue:
        "هندسة الذكاء الاصطناعي، وتعلم الآلة، وRAG، والذكاء الاصطناعي الوكيل",

        degreeLabel: "المؤهل",
        degreeValue: "بكالوريوس في الذكاء الاصطناعي",

        universityLabel: "الجامعة",
        universityValue: "جامعة حائل",

        aboutGpaLabel: "المعدل",

        aboutHonorsLabel: "المرتبة الأكاديمية",
        aboutHonorsValue: "مرتبة الشرف الأولى",

        locationLabel: "الموقع",
        locationValue: "المملكة العربية السعودية",

        relocationLabel: "الانتقال",
        relocationValue: "متاحة للانتقال",

        educationLabel: "التعليم",
        educationTitle: "الخلفية الأكاديمية",
        graduationYearLabel: "سنة التخرج",

        educationDegree: "بكالوريوس في الذكاء الاصطناعي",
        educationUniversity: "جامعة حائل",

        educationCollege:
            "كلية علوم وهندسة الحاسب الآلي",

        educationGpa: "المعدل: 3.907 من 4.00",

        educationHonors: "مرتبة الشرف الأولى",

        projectsLabel: "نماذج من أعمالي",

        projectsTitle: "المشاريع المميزة",

        projectsSubtitle:
        "مجموعة مختارة من مشاريع الذكاء الاصطناعي والذكاء الاصطناعي الوكيل وتعلم الآلة وتطوير الأنظمة الخلفية وRAG وإنترنت الأشياء، أُنجزت من خلال الدراسة الأكاديمية والتدريب التعاوني والبرامج المهنية.",

        ragopsType:
            "مشروع برنامج هندسة الذكاء الاصطناعي الوكيل – SDA",

        ragopsSubtitle:
            "نظام متعدد الوكلاء لتحسين جودة الاسترجاع في أنظمة RAG",

        ragopsDescription:
            "نظام RAGOps متعدد الوكلاء صُمم لتحسين طبقة الاسترجاع التي تعتمد عليها مساعدات الذكاء الاصطناعي المبنية على RAG، وليس ليكون روبوت محادثة بحد ذاته. يراقب جودة الاسترجاع، ويشخّص مشكلات Top-K وQuery Mismatch وChunking Quality، ويقترح تحسينات مستهدفة، ويطبق ضوابط Human-in-the-Loop على التغييرات الهيكلية، ثم يقارن أداء الاسترجاع قبل التحسين وبعده لدعم استجابات ذكاء اصطناعي أكثر موثوقية.",

        ragopsImageAlt:
            "نظرة عامة على RAGOps Agent توضح سير عمل تحسين الاسترجاع باستخدام أربعة وكلاء",

        viewLiveDemo:
            "التجربة المباشرة",

        crisisType: "مشروع التخرج",

        crisisSubtitle:
        "منصة مدعومة بالذكاء الاصطناعي لتدريب المستشفيات على الأزمات وتقييم الأداء",

        crisisDescription:
        "منصة ذكية لتدريب المستشفيات على الأزمات وتقييم الأداء، تمكّن المشرفين من توليد سيناريوهات طوارئ وأسئلة تقييم بالذكاء الاصطناعي، وإسنادها للموظفين، ومتابعة أدائهم. يحتسب النظام درجات الإجابات تلقائيًا، ثم يقدم الذكاء الاصطناعي ملاحظات مبنية على نتائج كل موظف.",

        greenCareType:
            "مشروع التدريب التعاوني",

        greenCareSubtitle:
        "منصة مدعومة بالذكاء الاصطناعي للعناية بالنباتات وتقييم صحتها",

        greenCareDescription:
        "منصة مدعومة بالذكاء الاصطناعي تركز على الاستدامة وتهدف إلى معالجة نقص المعرفة بأساليب العناية بالنباتات. يرفع المستخدم صورة للنبات ويجيب عن أسئلة لتقييم حالته، مثل الإضاءة وحالة الأوراق وعدد مرات الري. تستخدم المنصة الذكاء الاصطناعي والرؤية الحاسوبية للتعرف على النبات من الصورة المرفوعة، وتقييم حالته، ثم تقديم توصيات عناية مخصصة استنادًا إلى مدخلات المستخدم وموقعه وبيانات الطقس.",

        nextrafficType:
            "مشروع معسكر الذكاء الاصطناعي وإنترنت الأشياء",

        nextrafficSubtitle:
            "لوحة ذكية لمراقبة الحركة المرورية وإنترنت الأشياء",

        nextrafficDescription:
        "لوحة ذكية لمراقبة الحركة المرورية وإنترنت الأشياء، مطورة باستخدام Cumulocity IoT لمتابعة التقاطعات ومستويات الازدحام وحالة الإشارات المرورية والطقس وظروف الطريق، وعرض تنبيهات فورية للأحداث المرورية وحالات الطوارئ.",

        viewGitHub: "عرض المشروع على GitHub",

        projectGalleryLater:
            "سنضيف معرض الصور كاملًا في الخطوة التالية",

        crisisImageAlt:
            "لوحة المشرف في نظام كرايسس ترينر لإدارة تدريبات أزمات المستشفيات",

        greenCareImageAlt:
            "لوحة منصة قرين كير لعرض النباتات والحالة الصحية والتحليل والتوصيات",

        nextrafficImageAlt:
            "لوحة نكست ترافيك لعرض بيانات التنقل الذكي في مدينة حائل" ,
            
         viewGallery: "عرض الصور",

        projectGalleryLabel: "معرض المشروع",

        closeGallery: "إغلاق المعرض",

        previousImage: "الصورة السابقة",

        nextImage: "الصورة التالية",

        previousButton: "السابق",

        nextButton: "التالي",

        skillsLabel: "القدرات الأساسية",

        skillsTitle: "المهارات والتقنيات",

        skillsSubtitle:
        "قدرات تقنية ومهنية طورتها من خلال مشاريع الذكاء الاصطناعي والبرامج المهنية والتدريب التعاوني والتعلم المستقل.",

        aiSkillsTitle:
        "الذكاء الاصطناعي وتعلم الآلة والذكاء الاصطناعي الوكيل",

        aiSkillsDescription:
        "أساليب وسير عمل ذكية طبقتها في تعلم الآلة، والذكاء الاصطناعي التوليدي، ومعالجة اللغة الطبيعية، والرؤية الحاسوبية، وRAG، والأنظمة متعددة الوكلاء.",

        programmingSkillsTitle:
        "البرمجة وتحليل البيانات",

        programmingSkillsDescription:
        "لغات برمجية وأدوات بيانات استخدمتها في التحليل، وإعداد البيانات، وتطوير حلول الذكاء الاصطناعي.",

        backendSkillsTitle:
        "تطوير الأنظمة الخلفية وأنظمة البيانات",

        backendSkillsDescription:
        "تقنيات خلفية استخدمتها لبناء واجهات REST API، ودمج قدرات الذكاء الاصطناعي في التطبيقات، وإدارة البيانات المنظمة.",

        toolsSkillsTitle:
        "أطر الذكاء الاصطناعي وأدوات التطوير وإنترنت الأشياء",

        toolsSkillsDescription:
        "أطر وأدوات استخدمتها في سير عمل الذكاء الاصطناعي الوكيل، والاسترجاع المتجهي، والتجارب البرمجية، والمراقبة، وإدارة الإصدارات، والواجهات، ومراقبة إنترنت الأشياء.",

        professionalSkillsTitle:
            "المهارات المهنية",

        professionalSkillsDescription:
        "مهارات مهنية تدعم حل المشكلات بصورة منظمة، والتوثيق التقني الواضح، والتعاون الفعّال، وإنجاز المشاريع بجودة وموثوقية.",

        problemSolving:
            "حل المشكلات",

        analyticalThinking:
            "التفكير التحليلي",

        teamwork:
            "العمل الجماعي",

        communication:
            "التواصل",

        technicalDocumentation:
            "التوثيق التقني",

        navExperience: "الخبرات",

        experienceLabel: "الخبرة التطبيقية",

        experienceTitle: "الخبرات والتدريب",

        experienceSubtitle:
        "خبرات تدريبية وتطبيقية في الذكاء الاصطناعي الوكيل، وتطوير تطبيقات الذكاء الاصطناعي، وتنظيم البيانات، والتوثيق التقني، والتعاون ضمن فرق العمل.",

        sdaExperienceType:
        "برنامج هندسة الذكاء الاصطناعي الوكيل",

        sdaRole:
            "متدربة في هندسة الذكاء الاصطناعي الوكيل",

        sdaOrganization:
            "الأكاديمية السعودية الرقمية (SDA) · بالتعاون مع WeCloudData",

        sdaDates:
            "أُكمل في أكتوبر 2026",

        sdaDuration:
            "برنامج لمدة 7 أسابيع",

        sdaPointOne:
            "ساهمت ضمن فريق في تطوير RAGOps Agent من البداية إلى النهاية كنظام متعدد الوكلاء لتحسين أنظمة RAG، مع تركيز أساسي على تقييم الاسترجاع وتشخيص أسباب الفشل.",

        sdaPointTwo:
            "قيّمت أداء الاسترجاع عبر 48 استعلامًا تغطي 24 خدمة باستخدام Recall@K وPrecision@K وMRR، وشخّصت مشكلات Top-K وQuery Mismatch وChunking Quality.",

        sdaPointThree:
            "عملت ضمن سير عمل منظم باستخدام LangGraph وLangChain وFAISS وضوابط Human-in-the-Loop لدعم التحسينات المستهدفة والتحقق من الأداء قبل التحسين وبعده.",
            

        mewaExperienceType:
            "التدريب التعاوني",

        mewaRole:
            "متدربة تدريب تعاوني",

        mewaOrganization:
            "وزارة البيئة والمياه والزراعة",

        mewaDates:
            "يونيو 2025 – يناير 2026",

        mewaDuration:
            "28 أسبوعًا",

        remoteWork:
            "عن بُعد",

        mewaPointOne:
        "أعددت وثائق المشروع والتقارير، ونظمت تحديثات البيانات باستخدام Excel لدعم تنظيم البيانات وإعداد التقارير.",

        mewaPointTwo:
        "اطلعت على عدد من المنصات الرقمية المستخدمة لدى الوزارة لفهم وظائفها الأساسية وآلية عملها.",

        mewaPointThree:
        "ساهمت في تطوير حل مدعوم بالذكاء الاصطناعي يركز على الاستدامة، لتقييم صحة النباتات وتقديم توصيات عناية مخصصة.",

        experienceProjectLabel:
            "المشروع المرتبط",

        nitaExperienceType:
        "معسكر تدريبي مهني",

        nitaRole:
            "متدربة في معسكر الذكاء الاصطناعي وإنترنت الأشياء",

        nitaOrganization:
            "الأكاديمية الوطنية لتقنية المعلومات",

        nitaDuration:
            "معسكر لمدة 3 أشهر",

        nitaPointOne:
        "تعاونت ضمن فريق لتطوير حل ذكي قائم على إنترنت الأشياء لمراقبة الحركة المرورية باستخدام منصة Cumulocity IoT.",

        nitaPointTwo:
        "ساهمت في بناء لوحات لمراقبة التقاطعات ومستويات الازدحام وحالة الإشارات المرورية وظروف الطرق وبيانات الطقس.",

        nitaPointThree:
        "أعددت قواعد وتنبيهات ذكية للازدحام والطرق المبتلة وانخفاض مستوى الرؤية والأحداث المرتبطة بحالات الطوارئ.",

        navCertifications:
         "الشهادات",

         navHonors:
        "التفوق الأكاديمي",

        certificationsLabel:
            "التعلم المستمر",

        certificationsTitle:
            "الشهادات والبرامج التدريبية",

        certificationsSubtitle:
        "مجموعة مختارة من الشهادات والدورات المكتملة والبرامج التدريبية المهنية في الذكاء الاصطناعي والحوسبة السحابية وتحليل البيانات وإنترنت الأشياء وتعلم الآلة.",

        cloudCategory:
            "الحوسبة السحابية",

        bootcampCategory:
            "معسكر مهني",

        generativeAiCategory:
            "الذكاء الاصطناعي التوليدي",

        dataAnalyticsCategory:
            "تحليل البيانات",

         tableauCategory:
          "تحليل البيانات",

        machineLearningCategory:
            "تعلم الآلة",

        sdaIssuer:
            "الأكاديمية السعودية الرقمية",

        nitaIssuer:
            "الأكاديمية الوطنية لتقنية المعلومات",

        tuwaiqIssuer:
         "أكاديمية طويق",

        doroobIssuer:
            "دروب",

        awsCompletedDate:
            "أُكمل في فبراير 2024",

        nitaCompletedDate:
        "معسكر لمدة 3 أشهر · أُكمل في أكتوبر 2025",

        tuwaiqCompletedDate:
    "10 ساعات تدريبية · أُكمل في أغسطس 2026",

        fiveCompletedCourses:
            "5 دورات مكتملة",

        twoCompletedCourses:
            "دورتان مكتملتان",

        ibmSeriesDescription:
        "دورات مكتملة تغطي تطبيقات الذكاء الاصطناعي التوليدي، والنماذج الأساسية، وهندسة الأوامر، والاعتبارات الأخلاقية، والتحول المؤسسي.",

        googleSeriesDescription:
        "دورتان مكتملتان تغطيان أسس البيانات وصياغة الأسئلة الفعّالة لدعم اتخاذ قرارات مبنية على البيانات.",

        doroobCompletedDate:
            "3 ساعات تدريبية · أُكملت في ديسمبر 2023",

        viewCertificate:
            "عرض الشهادة",

        verifyCertificate:
            "التحقق من الشهادة",

        viewCourses:
            "عرض الدورات",

        certificateSeriesLabel:
            "سلسلة تعلم مهنية",

        closeCertificatesModal:
    "إغلاق نافذة الشهادات",

        honorsSectionLabel:
            "التقدير الأكاديمي",

        honorsSectionTitle:
            "التفوق الأكاديمي",

        honorsSectionSubtitle:
            "تكريم من جامعة حائل تقديرًا للتفوق والتميز في الأداء الأكاديمي.",

        honorCategory:
            "التفوق الأكاديمي",

        honor1445Title:
            "شهادة تفوق أكاديمي",

        honor2023Title:
            "شهادة تفوق أكاديمي",

        honorIssuer:
            "جامعة حائل",

        honor1445Year:
            "العام الجامعي 1445هـ",

        honor2023Year:
            "العام الجامعي 2023",

        viewRecognition:
            "عرض الشهادة",

        academicRecognitionLabel:
            "التقدير الأكاديمي",

        closeHonorModal:
            "إغلاق شهادة التفوق",

        honor1445ImageAlt:
            "شهادة تفوق أكاديمي من جامعة حائل للعام الجامعي 1445هـ",

        honor2023ImageAlt:
            "شهادة تفوق أكاديمي من جامعة حائل للعام الجامعي 2023",

        contactLabel:
            "تواصل معي",

        contactTitle:
        "لنتواصل ونستكشف الفرص المهنية",

        contactDescription:
        "متاحة لبرامج الخريجين والفرص الوظيفية للمستوى المبتدئ في هندسة الذكاء الاصطناعي، وتعلم الآلة، وتحليل البيانات، وتطوير تطبيقات الذكاء الاصطناعي.",

        contactAvailability:
        "متاحة للفرص في مختلف مناطق المملكة ومستعدة للانتقال",

        phoneLabel:
            "رقم الجوال",

        emailLabel:
            "البريد الإلكتروني",

        linkedinLabel:
            "لينكدإن",

        githubLabel:
            "قيت هب",

         footerDescription:
    "مهندسة ذكاء اصطناعي أركز على الحلول العملية، وتعلم الآلة، والتطبيقات القائمة على البيانات.",
    
        footerNavigationTitle:
            "التنقل",

        footerConnectTitle:
            "التواصل",

        footerCopyright:
            "غلا بندر. جميع الحقوق محفوظة.",

        backToTop:
            "العودة للأعلى",

        openMenu:
            "فتح قائمة التنقل",

        closeMenu:
            "إغلاق قائمة التنقل"
      }

};

/* =================================
   Project Gallery Data
================================= */

const projectGalleries = {

"ragops": {

    title: {
        en: "RAGOps Agent",
        ar: "RAGOps Agent"
    },

    images: [

        {
            src:
                "images/ragops/ragops-overview.jpg",

            caption: {
                en: "RAGOps Agent Overview and Four-Agent Optimization Workflow",
                ar: "نظرة عامة على RAGOps وسير عمل التحسين باستخدام أربعة وكلاء"
            }
        },

        {
            src:
                "images/ragops/ragops-hitl-approval.jpg",

            caption: {
                en: "Human-in-the-Loop Approval for High-Impact Structural Optimization",
                ar: "الموافقة البشرية على التغييرات الهيكلية عالية التأثير"
            }
        },

        {
            src:
                "images/ragops/ragops-live-run.jpg",

            caption: {
                en: "Live RAGOps Run with Retrieval Diagnosis, Query Rewriting, and Validation",
                ar: "تشغيل فعلي لـRAGOps يتضمن تشخيص الاسترجاع وإعادة صياغة الاستعلام والتحقق"
            }
        },

        {
            src:
                "images/ragops/ragops-dashboard.jpg",

            caption: {
                en: "Evaluation Dashboard with Retrieval Metrics and Verified Optimization Results",
                ar: "لوحة التقييم التي تعرض مقاييس الاسترجاع ونتائج التحسين المتحققة"
            }
        },

        {
            src:
                "images/ragops/ragops-architecture.jpg",

            caption: {
                en: "Multi-Agent Architecture and Controlled RAG Optimization Workflow",
                ar: "معمارية النظام متعدد الوكلاء وسير عمل تحسين RAG بشكل مضبوط"
            }
        }

    ]
},


"crisistrainer": {

    "crisistrainer": {

        title: {
            en: "CrisisTrainer",
            ar: "كرايسس ترينر"
        },

        images: [
            {
                src:
                    "images/crisistrainer/crisistrainer-supervisor-dashboard.png",

                caption: {
                    en: "Supervisor Dashboard",
                    ar: "لوحة تحكم المشرف"
                }
            },

            {
                src:
                    "images/crisistrainer/crisistrainer-generate-assign-scenario.png",

                caption: {
                    en: "AI Scenario Generation and Assignment",
                    ar: "إنشاء السيناريو وإسناده بالذكاء الاصطناعي"
                }
            },

            {
                src:
                    "images/crisistrainer/crisistrainer-employee-training-dashboard.png",

                caption: {
                    en: "Employee Training Dashboard",
                    ar: "لوحة تدريبات الموظف"
                }
            },

            {
                src:
                    "images/crisistrainer/crisistrainer-training-questions.png",

                caption: {
                    en: "Interactive Training Questions",
                    ar: "أسئلة التدريب التفاعلية"
                }
            },

            {
                src:
                    "images/crisistrainer/crisistrainer-ai-feedback-result.png",

                caption: {
                    en: "AI-Generated Feedback and Evaluation",
                    ar: "التقييم والملاحظات المولدة بالذكاء الاصطناعي"
                }
            },

            {
                src:
                    "images/crisistrainer/crisistrainer-live-training-monitor.png",

                caption: {
                    en: "Live Training Monitoring Dashboard",
                    ar: "لوحة المراقبة المباشرة للتدريب"
                }
            }
        ]
    },


    "green-care": {

    title: {
        en: "Green Care Platform",
        ar: "منصة قرين كير"
    },

    images: [
        {
            src:
                "images/green-care/green-care-home-login.png",

            caption: {
                en: "Home and User Login",
                ar: "الصفحة الرئيسية وتسجيل الدخول"
            }
        },

        {
            src:
                "images/green-care/green-care-plants-dashboard.png",

            caption: {
                en: "Plant Management Dashboard",
                ar: "لوحة إدارة النباتات"
            }
        },

        {
            src:
                "images/green-care/green-care-plant-image-upload.png",

            caption: {
                en: "AI-Based Plant Image Upload",
                ar: "رفع صورة النبات للتعرف عليه بالذكاء الاصطناعي"
            }
        },

        {
            src:
                "images/green-care/green-care-health-assessment.png",

            caption: {
                en: "Interactive Plant Health Assessment",
                ar: "التقييم التفاعلي لصحة النبات"
            }
        },

        {
            src:
                "images/green-care/green-care-ai-recommendations.png",

            caption: {
                en: "AI-Powered Plant Care Recommendations",
                ar: "توصيات العناية بالنبات المدعومة بالذكاء الاصطناعي"
            }
        },

        {
            src:
                "images/green-care/green-care-fastapi-endpoints.png",

            caption: {
                en: "FastAPI Backend and API Documentation",
                ar: "الواجهة الخلفية وتوثيق واجهات FastAPI"
            }
        }
    ]
},


    "nextraffic": {

        title: {
            en: "NexTraffic",
            ar: "نكست ترافيك"
        },

        images: [
            {
                src:
                    "images/nextraffic/nextraffic-hail-smart-mobility-overview.png",

                caption: {
                    en: "Hail Smart Mobility Overview",
                    ar: "نظرة عامة على التنقل الذكي في حائل"
                }
            },

            {
                src:
                    "images/nextraffic/nextraffic-neighborhood-traffic-overview.png",

                caption: {
                    en: "Neighborhood Traffic Overview",
                    ar: "نظرة عامة على حركة المرور في الحي"
                }
            },

            {
                src:
                    "images/nextraffic/nextraffic-intersection-details.png",

                caption: {
                    en: "Intersection Traffic Details",
                    ar: "تفاصيل التقاطع المروري"
                }
            },

            {
                src:
                    "images/nextraffic/nextraffic-signal-congestion-dashboard.png",

                caption: {
                    en: "Signal Congestion Monitoring Dashboard",
                    ar: "لوحة مراقبة ازدحام الإشارات"
                }
            },

            {
                src:
                    "images/nextraffic/nextraffic-environment-metrics.png",

                caption: {
                    en: "Environment and Weather Metrics",
                    ar: "مؤشرات البيئة والطقس"
                }
            },

            {
                src:
                    "images/nextraffic/nextraffic-signal-control-dashboard.png",

                caption: {
                    en: "Adaptive Signal Control Dashboard",
                    ar: "لوحة التحكم التكيفي في الإشارات"
                }
            },

            {
                src:
                    "images/nextraffic/nextraffic-traffic-camera-emergency-detection.png",

                caption: {
                    en: "Traffic Camera and Emergency Vehicle Detection",
                    ar: "كاميرا المرور واكتشاف مركبات الطوارئ"
                }
            }
        ]
    }

}};

/* =================================
   Certificate Series Data
================================= */

const certificateSeriesData = {

    ibm: {

        title: {
            en: "IBM Generative AI Coursework",
            ar: "دورات IBM في الذكاء الاصطناعي التوليدي"
        },

        subtitle: {
            en:
        "Five completed courses authorized by IBM and offered through Coursera.",

        ar:
            "خمس دورات مكتملة مصرّح بها من IBM ومقدمة عبر Coursera."
        },

        courses: [
            {
                number: "01",

                name:
                    "Generative AI: Introduction and Applications",

                issuer:
                    "IBM / Coursera",

                date: {
                    en: "Completed July 27, 2025",
                    ar: "أُكملت في 27 يوليو 2025"
                },

                url:
                    "https://coursera.org/verify/UWMIT793RODT"
            },

            {
                number: "02",

                name:
                    "Generative AI: Foundation Models and Platforms",

                issuer:
                    "IBM / Coursera",

                date: {
                    en: "Completed July 27, 2025",
                    ar: "أُكملت في 27 يوليو 2025"
                },

                url:
                    "https://coursera.org/verify/LQFNK4VG9UD4"
            },

            {
                number: "03",

                name:
                    "Generative AI: Prompt Engineering Basics",

                issuer:
                    "IBM / Coursera",

                date: {
                    en: "Completed July 27, 2025",
                    ar: "أُكملت في 27 يوليو 2025"
                },

                url:
                    "https://coursera.org/verify/PBEO9F9NM9DQ"
            },

            {
                number: "04",

                name:
                    "Generative AI: Impact, Considerations, and Ethical Issues",

                issuer:
                    "IBM / Coursera",

                date: {
                    en: "Completed August 4, 2025",
                    ar: "أُكملت في 4 أغسطس 2025"
                },

                url:
                    "https://coursera.org/verify/F7MD5D9EWCY2"
            },

            {
                number: "05",

                name:
                    "Generative AI: Business Transformation and Career Growth",

                issuer:
                    "IBM / Coursera",

                date: {
                    en: "Completed August 25, 2025",
                    ar: "أُكملت في 25 أغسطس 2025"
                },

                url:
                    "https://coursera.org/verify/4VBAAGW5U13H"
            }
        ]
    },


    google: {

        title: {
            en: "Google Data Analytics Coursework",
            ar: "دورات Google في تحليل البيانات"
        },

        subtitle: {
            en:
                "Two completed Google courses offered through Coursera.",

            ar:
                "دورتان مكتملتان من Google ومقدمتان عبر Coursera."
        },

        courses: [
            {
                number: "01",

                name:
                    "Foundations: Data, Data, Everywhere",

                issuer:
                    "Google / Coursera",

                date: {
                    en: "Completed June 26, 2026",
                    ar: "أُكملت في 26 يونيو 2026"
                },

                url:
                    "https://coursera.org/verify/L5ON1RYZQ1N3"
            },

            {
                number: "02",

                name:
                    "Ask Questions to Make Data-Driven Decisions",

                issuer:
                    "Google / Coursera",

                date: {
                    en: "Completed June 27, 2026",
                    ar: "أُكملت في 27 يونيو 2026"
                },

                url:
                    "https://coursera.org/verify/G7JC6FJY2VXK"
            }
        ]
    }

};

/* =================================
   Website Elements
================================= */

const languageButtons =
    document.querySelectorAll(".language-button");

const translatedElements =
    document.querySelectorAll("[data-i18n]");

    const translatedAltElements =
    document.querySelectorAll("[data-i18n-alt]");

    const cvDownloadLinks =
    document.querySelectorAll("[data-cv-download]");

    const galleryButtons =
    document.querySelectorAll(".gallery-button");

    const galleryModal =
        document.getElementById("gallery-modal");

    const galleryTitle =
        document.getElementById("gallery-title");

    const galleryImage =
        document.getElementById("gallery-image");

    const galleryCaption =
        document.getElementById("gallery-caption");

    const galleryCounter =
        document.getElementById("gallery-counter");

    const galleryPreviousButton =
        document.getElementById("gallery-previous");

    const galleryNextButton =
        document.getElementById("gallery-next");

    const galleryMobilePreviousButton =
        document.getElementById("gallery-mobile-previous");

    const galleryMobileNextButton =
        document.getElementById("gallery-mobile-next");

    const galleryCloseElements =
        document.querySelectorAll("[data-gallery-close]");

    const translatedAriaElements =
        document.querySelectorAll("[data-i18n-aria-label]");

        const certificateSeriesButtons =
    document.querySelectorAll(
        "[data-certificate-series]"
    );

    const certificateSeriesModal =
        document.getElementById(
            "certificate-series-modal"
        );

    const certificateSeriesTitle =
        document.getElementById(
            "certificate-series-title"
        );

    const certificateSeriesSubtitle =
        document.getElementById(
            "certificate-series-subtitle"
        );

    const certificateCoursesList =
        document.getElementById(
            "certificate-courses-list"
        );

    const certificateCloseElements =
        document.querySelectorAll(
            "[data-certificate-close]"
        );

        const honorButtons =
    document.querySelectorAll(
        "[data-honor-image]"
    );

    const honorModal =
        document.getElementById(
            "honor-modal"
        );

    const honorModalTitle =
        document.getElementById(
            "honor-modal-title"
        );

    const honorModalImage =
        document.getElementById(
            "honor-modal-image"
        );

    const honorCloseElements =
        document.querySelectorAll(
            "[data-honor-close]"
        );

        const mobileMenuButton =
    document.getElementById("mobile-menu-button");

    const siteNavigation =
        document.getElementById("site-navigation");

    const navigationLinks =
        document.querySelectorAll(
            ".site-navigation a"
        );

    const backToTopButton =
        document.getElementById(
            "back-to-top-button"
        );

    const footerYear =
        document.getElementById("footer-year");

    /* =================================
    Current Language
    ================================= */

    let currentLanguage =
        localStorage.getItem("portfolioLanguage") || "en";

     let currentGalleryProject = null;
     let currentGalleryIndex = 0;

    let currentCertificateSeries = null;

    let currentHonorTitleKey = null;
    let lastHonorTrigger = null;

    let isMobileMenuOpen = false;


/* =================================
   Change Website Language
================================= */

function setLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }

    currentLanguage = language;

    const isArabic = language === "ar";

    document.documentElement.lang = language;

    document.documentElement.dir =
        isArabic ? "rtl" : "ltr";

    document.title =
        translations[language].pageTitle;

    /*
Change all CV download links
based on the selected language
*/

    const cvFileName = isArabic
        ? "Ghala_Bander_CV_Arabic.pdf"
        : "Ghala_Bander_CV_English.pdf";

    cvDownloadLinks.forEach(function (link) {

        link.href =
            `documents/${cvFileName}`;

        link.setAttribute(
            "download",
            cvFileName
        );

    });


    translatedElements.forEach(function (element) {

        const translationKey =
            element.dataset.i18n;

        const translatedText =
            translations[language][translationKey];

        if (translatedText) {
            element.textContent = translatedText;
        }

    });

        /*
    Translate image alternative text
    */

    translatedAltElements.forEach(function (element) {

        const translationKey =
            element.dataset.i18nAlt;

        const translatedText =
            translations[language][translationKey];

        if (translatedText) {
            element.setAttribute(
                "alt",
                translatedText
            );
        }

    });


    /*
Translate accessibility labels
*/

translatedAriaElements.forEach(function (element) {

    const translationKey =
        element.dataset.i18nAriaLabel;

    const translatedText =
        translations[language][translationKey];

    if (translatedText) {
        element.setAttribute(
            "aria-label",
            translatedText
        );
    }

});


    languageButtons.forEach(function (button) {

        const isActive =
            button.dataset.language === language;

        button.classList.toggle(
            "active",
            isActive
        );

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );

    });


    localStorage.setItem(
        "portfolioLanguage",
        language
    );

        /*
    Refresh the open gallery when language changes
    */

    if (
        galleryModal &&
        !galleryModal.hidden &&
        currentGalleryProject
    ) {
        updateGallery();
    }

    /*
Refresh the certificate modal
when the language changes
*/

if (
    certificateSeriesModal &&
    !certificateSeriesModal.hidden &&
    currentCertificateSeries
) {
    renderCertificateSeries();
}

/*
Refresh the academic honor modal
when the language changes
*/

if (
    honorModal &&
    !honorModal.hidden &&
    currentHonorTitleKey &&
    honorModalTitle
) {
    honorModalTitle.textContent =
        translations[currentLanguage][
            currentHonorTitleKey
        ];
}


/*
Update mobile menu accessibility
when language changes
*/

updateMobileMenuAccessibility();

}


/* =================================
   Language Buttons
================================= */

languageButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const selectedLanguage =
                button.dataset.language;

            setLanguage(selectedLanguage);

        }
    );

});

/* =================================
   Project Gallery
================================= */

function updateGallery() {

    const gallery =
        projectGalleries[currentGalleryProject];

    if (!gallery) {
        return;
    }

    const image =
        gallery.images[currentGalleryIndex];

    galleryTitle.textContent =
        gallery.title[currentLanguage];

    galleryImage.src =
        image.src;

    galleryImage.alt =
        image.caption[currentLanguage];

    galleryCaption.textContent =
        image.caption[currentLanguage];

    galleryCounter.textContent =
        `${currentGalleryIndex + 1} / ${gallery.images.length}`;
}


function openGallery(projectName) {

    if (
        !galleryModal ||
        !projectGalleries[projectName]
    ) {
        return;
    }

    currentGalleryProject =
        projectName;

    currentGalleryIndex = 0;

    updateGallery();

    galleryModal.hidden = false;

    document.body.classList.add(
        "gallery-open"
    );

    const closeButton =
        galleryModal.querySelector(
            ".gallery-close-button"
        );

    if (closeButton) {
        closeButton.focus();
    }
}


function closeGallery() {

    if (!galleryModal) {
        return;
    }

    galleryModal.hidden = true;

    document.body.classList.remove(
        "gallery-open"
    );

    currentGalleryProject = null;
}


function showPreviousImage() {

    const gallery =
        projectGalleries[currentGalleryProject];

    if (!gallery) {
        return;
    }

    currentGalleryIndex =
        (
            currentGalleryIndex -
            1 +
            gallery.images.length
        ) % gallery.images.length;

    updateGallery();
}


function showNextImage() {

    const gallery =
        projectGalleries[currentGalleryProject];

    if (!gallery) {
        return;
    }

    currentGalleryIndex =
        (
            currentGalleryIndex + 1
        ) % gallery.images.length;

    updateGallery();
}


/* Gallery opening buttons */

galleryButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const projectName =
                button.dataset.project;

            openGallery(projectName);
        }
    );

});


/* Gallery closing buttons */

galleryCloseElements.forEach(function (element) {

    element.addEventListener(
        "click",
        closeGallery
    );

});


/* Previous and next buttons */

if (galleryPreviousButton) {
    galleryPreviousButton.addEventListener(
        "click",
        showPreviousImage
    );
}

if (galleryNextButton) {
    galleryNextButton.addEventListener(
        "click",
        showNextImage
    );
}

if (galleryMobilePreviousButton) {
    galleryMobilePreviousButton.addEventListener(
        "click",
        showPreviousImage
    );
}

if (galleryMobileNextButton) {
    galleryMobileNextButton.addEventListener(
        "click",
        showNextImage
    );
}


/* Keyboard controls */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !galleryModal ||
            galleryModal.hidden
        ) {
            return;
        }

        if (event.key === "Escape") {
            closeGallery();
        }

        if (event.key === "ArrowLeft") {

            if (currentLanguage === "ar") {
                showNextImage();
            } else {
                showPreviousImage();
            }
        }

        if (event.key === "ArrowRight") {

            if (currentLanguage === "ar") {
                showPreviousImage();
            } else {
                showNextImage();
            }
        }
    }
);

/* =================================
   Certificate Series Modal
================================= */

function renderCertificateSeries() {

    const series =
        certificateSeriesData[
            currentCertificateSeries
        ];

    if (
        !series ||
        !certificateSeriesTitle ||
        !certificateSeriesSubtitle ||
        !certificateCoursesList
    ) {
        return;
    }

    certificateSeriesTitle.textContent =
        series.title[currentLanguage];

    certificateSeriesSubtitle.textContent =
        series.subtitle[currentLanguage];

    certificateCoursesList.innerHTML =
        series.courses
            .map(function (course) {

                return `
                    <article class="certificate-course-item">

                        <span class="certificate-course-number">
                            ${course.number}
                        </span>

                        <div class="certificate-course-content">

                            <h3>
                                ${course.name}
                            </h3>

                            <p>
                                ${course.issuer}
                            </p>

                            <span>
                                ${course.date[currentLanguage]}
                            </span>

                        </div>

                        <a
                            class="certificate-verify-link"
                            href="${course.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ${translations[currentLanguage].verifyCertificate}
                        </a>

                    </article>
                `;

            })
            .join("");
}


function openCertificateSeries(seriesName) {

    if (
        !certificateSeriesModal ||
        !certificateSeriesData[seriesName]
    ) {
        return;
    }

    currentCertificateSeries =
        seriesName;

    renderCertificateSeries();

    certificateSeriesModal.hidden =
        false;

    document.body.classList.add(
        "certificate-modal-open"
    );

    const closeButton =
        certificateSeriesModal.querySelector(
            ".certificate-series-close"
        );

    if (closeButton) {
        closeButton.focus();
    }
}


function closeCertificateSeries() {

    if (!certificateSeriesModal) {
        return;
    }

    certificateSeriesModal.hidden =
        true;

    document.body.classList.remove(
        "certificate-modal-open"
    );

    currentCertificateSeries =
        null;
}


certificateSeriesButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const seriesName =
                    button.dataset
                        .certificateSeries;

                openCertificateSeries(
                    seriesName
                );
            }
        );

    }
);


certificateCloseElements.forEach(
    function (element) {

        element.addEventListener(
            "click",
            closeCertificateSeries
        );

    }
);


/* Close using Escape */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            certificateSeriesModal &&
            !certificateSeriesModal.hidden
        ) {
            closeCertificateSeries();
        }

    }
);

/* =================================
   Academic Honor Modal
================================= */

function openHonorModal(button) {

    if (
        !honorModal ||
        !honorModalImage ||
        !honorModalTitle ||
        !button
    ) {
        return;
    }

    const imageSource =
        button.dataset.honorImage;

    const titleKey =
        button.dataset.honorTitle;

    if (
        !imageSource ||
        !titleKey
    ) {
        return;
    }

    currentHonorTitleKey =
        titleKey;

    lastHonorTrigger =
        button;

    honorModalImage.src =
        imageSource;

    honorModalTitle.textContent =
        translations[currentLanguage][titleKey];

    const imageAltKey =
    titleKey === "honor1445Title"
        ? "honor1445ImageAlt"
        : "honor2023ImageAlt";

    honorModalImage.alt =
        translations[currentLanguage][
            imageAltKey
        ];

    honorModal.hidden =
        false;

    document.body.classList.add(
        "honor-modal-open"
    );

    const closeButton =
        honorModal.querySelector(
            ".honor-modal-close"
        );

    if (closeButton) {
        closeButton.focus();
    }
}


function closeHonorModal() {

    if (!honorModal) {
        return;
    }

    honorModal.hidden =
        true;

    document.body.classList.remove(
        "honor-modal-open"
    );

    honorModalImage.src =
        "";

    currentHonorTitleKey =
        null;

    if (lastHonorTrigger) {
        lastHonorTrigger.focus();
    }

    lastHonorTrigger =
        null;
}


/* Open academic honor */

honorButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                openHonorModal(
                    button
                );
            }
        );

    }
);


/* Close academic honor */

honorCloseElements.forEach(
    function (element) {

        element.addEventListener(
            "click",
            closeHonorModal
        );

    }
);


/* Close academic honor using Escape */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            honorModal &&
            !honorModal.hidden
        ) {
            closeHonorModal();
        }

    }
);


/* =================================
   Mobile Navigation
================================= */

function updateMobileMenuAccessibility() {

    if (!mobileMenuButton) {
        return;
    }

    const translationKey =
        isMobileMenuOpen
            ? "closeMenu"
            : "openMenu";

    mobileMenuButton.setAttribute(
        "aria-label",
        translations[currentLanguage][translationKey]
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        String(isMobileMenuOpen)
    );
}


function openMobileMenu() {

    if (
        !mobileMenuButton ||
        !siteNavigation
    ) {
        return;
    }

    isMobileMenuOpen = true;

    mobileMenuButton.classList.add("open");
    siteNavigation.classList.add("open");

    updateMobileMenuAccessibility();
}


function closeMobileMenu() {

    if (
        !mobileMenuButton ||
        !siteNavigation
    ) {
        return;
    }

    isMobileMenuOpen = false;

    mobileMenuButton.classList.remove("open");
    siteNavigation.classList.remove("open");

    updateMobileMenuAccessibility();
}


function toggleMobileMenu() {

    if (isMobileMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}


if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            toggleMobileMenu();
        }
    );
}


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        closeMobileMenu
    );
});


document.addEventListener(
    "click",
    function (event) {

        if (
            !isMobileMenuOpen ||
            !siteNavigation ||
            !mobileMenuButton
        ) {
            return;
        }

        const clickedInsideMenu =
            siteNavigation.contains(event.target);

        const clickedButton =
            mobileMenuButton.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedButton
        ) {
            closeMobileMenu();
        }
    }
);


window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 1050) {
            closeMobileMenu();
        }
    }
);

/* =================================
   Footer Year
================================= */

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();
}


/* =================================
   Back to Top Button
================================= */

function updateBackToTopButton() {

    if (!backToTopButton) {
        return;
    }

    backToTopButton.classList.toggle(
        "visible",
        window.scrollY > 600
    );
}


window.addEventListener(
    "scroll",
    updateBackToTopButton
);


if (backToTopButton) {

    backToTopButton.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


updateBackToTopButton();


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            isMobileMenuOpen
        ) {
            closeMobileMenu();
        }
    }
);

/* =================================
   Start Website
================================= */

setLanguage(currentLanguage);

console.log(
    "Ghala Bander portfolio loaded successfully."
);