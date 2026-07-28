"use strict";


/* =================================
   Website Translations
================================= */

const translations = {

    en: {
        pageTitle: "Ghala Bander | AI Engineer",

        brandName: "Ghala Bander",

        heroLabel: "Artificial Intelligence Portfolio",

        heroGreeting: "Hello, I'm",

        name: "Ghala Bander",

        role: "AI Engineer",

        heroDescription:
            "Artificial Intelligence graduate with hands-on experience in machine learning, RAG systems, computer vision, IoT, and AI-powered application development.",

        viewProjects: "View Projects",

        downloadCV: "Download CV",

        availability:
            "Open to opportunities and relocation across Saudi Arabia",

        profileRole: "AI Engineer",

        profileHeadline:
            "Building practical AI solutions",

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
            "A brief overview of my background, education, and professional direction.",

        aboutHeadline:
            "Turning artificial intelligence into practical solutions",

        aboutParagraphOne:
            "Artificial Intelligence graduate from the University of Hail with First Class Honors and a GPA of 3.907 out of 4. I focus on building practical solutions using machine learning, retrieval-augmented generation, computer vision, backend APIs, and data-driven problem solving.",

        aboutParagraphTwo:
            "My project experience includes an AI-based hospital crisis training system, an intelligent plant care platform, and an IoT-enabled smart traffic dashboard. I enjoy transforming complex requirements into usable, well-documented solutions and collaborating effectively within teams.",

        careerFocusLabel: "Career Focus",

        careerFocusValue:
            "AI Engineering and AI-Powered Application Development",

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

        educationDegree: "Bachelor of Artificial Intelligence",
        educationUniversity: "University of Hail",

        educationCollege:
            "College of Computer Science and Engineering",

        educationGpa: "GPA: 3.907 / 4.00",
        educationHonors: "First Class Honors",

        projectsLabel: "Selected Work",

        projectsTitle: "Featured Projects",

        projectsSubtitle:
            "A selection of AI, machine learning, backend, and IoT projects developed through academic, training, and team-based experiences.",

        crisisType: "Graduation Project",

        crisisSubtitle:
            "AI-Based Hospital Crisis Training System",

        crisisDescription:
            "An intelligent training platform that generates hospital emergency scenarios, assigns role-based tasks, evaluates employee responses, and provides automated AI feedback.",

        greenCareType:
            "Cooperative Training Project",

        greenCareSubtitle:
            "AI-Powered Plant Health and Care Platform",

        greenCareDescription:
            "A smart plant care platform that identifies plant conditions from uploaded images and provides personalized recommendations using user inputs, location, and weather data.",

        nextrafficType:
            "AI and IoT Bootcamp Project",

        nextrafficSubtitle:
            "Smart Traffic and IoT Monitoring Dashboard",

        nextrafficDescription:
            "A smart mobility dashboard built with Cumulocity IoT to monitor intersections, congestion, signal timing, weather conditions, road status, and intelligent traffic alerts.",

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

        skillsLabel: "Technical Capabilities",

        skillsTitle: "Skills and Technologies",

        skillsSubtitle:
            "Technologies and professional capabilities developed through academic projects, practical training, bootcamps, and independent learning.",

        aiSkillsTitle:
            "Artificial Intelligence",

        aiSkillsDescription:
            "Core artificial intelligence techniques used to build intelligent and data-driven systems.",

        programmingSkillsTitle:
            "Programming and Data",

        programmingSkillsDescription:
            "Programming and data tools used for analysis, development, and implementing AI solutions.",

        backendSkillsTitle:
            "Backend and Databases",

        backendSkillsDescription:
            "Backend technologies used to connect AI models, applications, APIs, and structured data.",

        toolsSkillsTitle:
            "Tools and Web Technologies",

        toolsSkillsDescription:
            "Development, collaboration, web, and IoT tools used throughout my technical projects.",

        professionalSkillsTitle:
            "Professional Skills",

        professionalSkillsDescription:
            "Professional capabilities that support effective technical work, teamwork, and project delivery.",

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

        experienceLabel: "Practical Background",

        experienceTitle: "Experience and Training",

        experienceSubtitle:
            "Practical experiences that strengthened my technical, documentation, teamwork, and project development skills.",

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
            "Remote",

       mewaPointOne:
        "Prepared project documentation, reports, and structured data updates using Excel.",

        mewaPointTwo:
            "Collaborated with the team on project planning, documentation, and presentation preparation.",

        mewaPointThree:
            "Contributed to the development of Green Care, an AI-powered platform for plant health assessment and personalized care recommendations.",
            
        experienceProjectLabel:
            "Associated Project",

        nitaExperienceType:
            "AI and IoT Bootcamp",

        nitaRole:
            "AI and IoT Bootcamp Trainee",

        nitaOrganization:
            "National Information Technology Academy",

        nitaDuration:
            "3-Month Bootcamp",

        nitaPointOne:
            "Collaborated within a team to develop a smart traffic monitoring solution using Cumulocity IoT.",

        nitaPointTwo:
            "Built dashboards for intersections, congestion, signal timing, road conditions, and weather data.",

        nitaPointThree:
            "Applied smart rules and alerts for congestion, wet roads, low visibility, and emergency events.",

        navCertifications:
        "Certifications",

        certificationsLabel:
            "Continuous Learning",

        certificationsTitle:
            "Certifications and Training",

        certificationsSubtitle:
            "Selected certifications and professional training in artificial intelligence, cloud computing, data analytics, IoT, and machine learning.",

        cloudCategory:
            "Cloud Computing",

        bootcampCategory:
            "Professional Bootcamp",

        generativeAiCategory:
            "Generative AI",

        dataAnalyticsCategory:
            "Data Analytics",

        machineLearningCategory:
            "Machine Learning",

        sdaIssuer:
            "Saudi Digital Academy",

        nitaIssuer:
            "National Information Technology Academy",

        doroobIssuer:
            "Doroob",

        awsCompletedDate:
            "Completed in February 2024",

        nitaCompletedDate:
            "Completed in October 2025",

        fiveCompletedCourses:
            "5 Completed Courses",

        twoCompletedCourses:
            "2 Completed Courses",

        ibmSeriesDescription:
            "A focused series covering generative AI applications, foundation models, prompt engineering, responsible AI, and business transformation.",

        googleSeriesDescription:
            "Two completed courses covering data foundations and asking effective questions to support data-driven decisions.",

        doroobCompletedDate:
            "3 Training Hours · Completed in December 2023",

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

        contactLabel:
            "Get in Touch",

        contactTitle:
            "Let’s connect and discuss opportunities",

        contactDescription:
            "I am open to AI engineering, machine learning, and AI-powered application development opportunities across Saudi Arabia.",

        contactAvailability:
            "Available for opportunities and relocation",

        phoneLabel:
            "Phone",

        emailLabel:
            "Email",

        linkedinLabel:
            "LinkedIn",

        githubLabel:
            "GitHub",

       footerDescription:
            "AI Engineer focused on building practical, intelligent, and user-centered solutions.",

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

        heroLabel: "ملف أعمال الذكاء الاصطناعي",

        heroGreeting: "مرحبًا، أنا",

        name: "غلا بندر",

        role: "مهندسة ذكاء اصطناعي",

        heroDescription:
            "خريجة ذكاء اصطناعي تمتلك خبرة عملية في تعلم الآلة، وأنظمة الاسترجاع المعزز بالتوليد، والرؤية الحاسوبية، وإنترنت الأشياء، وتطوير التطبيقات المدعومة بالذكاء الاصطناعي.",

        viewProjects: "استعراض المشاريع",

        downloadCV: "تحميل السيرة الذاتية",

        availability:
            "متاحة للفرص المهنية ومستعدة للانتقال داخل المملكة العربية السعودية",

        profileRole: "مهندسة ذكاء اصطناعي",

        profileHeadline:
            "أطوّر حلول ذكاء اصطناعي عملية",

        projectsStat: "مشاريع مميزة",

        gpaStat: "المعدل",

        honorsValue: "المرتبة الأولى",

        honorsStat: "مرتبة الشرف",

        navHome: "الرئيسية",
        navAbout: "نبذة عني",
        navProjects: "المشاريع",
        navSkills: "المهارات",
        navContact: "التواصل",

        aboutLabel: "الملف المهني",
        aboutTitle: "نبذة عني",

        aboutSubtitle:
            "نظرة مختصرة على خلفيتي الأكاديمية وتوجهي المهني.",

        aboutHeadline:
            "أحوّل تقنيات الذكاء الاصطناعي إلى حلول عملية",

        aboutParagraphOne:
            "خريجة بكالوريوس في الذكاء الاصطناعي من جامعة حائل بمرتبة الشرف الأولى ومعدل 3.907 من 4. أركز على تطوير حلول عملية باستخدام تعلم الآلة، والاسترجاع المعزز بالتوليد، والرؤية الحاسوبية، وواجهات البرمجة الخلفية، وحل المشكلات بالاعتماد على البيانات.",

        aboutParagraphTwo:
            "تشمل خبرتي في المشاريع نظامًا لتدريب المستشفيات على الأزمات باستخدام الذكاء الاصطناعي، ومنصة ذكية للعناية بالنباتات، ولوحة تحكم مرورية تعتمد على إنترنت الأشياء. أستمتع بتحويل المتطلبات المعقدة إلى حلول واضحة وقابلة للاستخدام، مع توثيق العمل والتعاون الفعّال ضمن الفرق.",

        careerFocusLabel: "التوجه المهني",

        careerFocusValue:
            "هندسة الذكاء الاصطناعي وتطوير التطبيقات المدعومة بالذكاء الاصطناعي",

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

        educationDegree: "بكالوريوس في الذكاء الاصطناعي",
        educationUniversity: "جامعة حائل",

        educationCollege:
            "كلية علوم وهندسة الحاسب الآلي",

        educationGpa: "المعدل: 3.907 من 4.00",

        educationHonors: "مرتبة الشرف الأولى",

        projectsLabel: "نماذج من أعمالي",

        projectsTitle: "المشاريع المميزة",

        projectsSubtitle:
            "مجموعة من مشاريع الذكاء الاصطناعي وتعلم الآلة والأنظمة الخلفية وإنترنت الأشياء، طُورت خلال تجارب أكاديمية وتدريبية وعمل جماعي.",

        crisisType: "مشروع التخرج",

        crisisSubtitle:
            "نظام ذكي لتدريب المستشفيات على إدارة الأزمات",

        crisisDescription:
            "منصة تدريب ذكية تنشئ سيناريوهات طوارئ للمستشفيات، وتوزع المهام حسب الأدوار، وتقيّم استجابات الموظفين، وتقدم ملاحظات آلية باستخدام الذكاء الاصطناعي.",

        greenCareType:
            "مشروع التدريب التعاوني",

        greenCareSubtitle:
            "منصة ذكية لصحة النباتات والعناية بها",

        greenCareDescription:
            "منصة ذكية للعناية بالنباتات تتعرف على حالة النبات من الصور المرفوعة، وتقدم توصيات مخصصة بالاعتماد على مدخلات المستخدم والموقع وبيانات الطقس.",

        nextrafficType:
            "مشروع معسكر الذكاء الاصطناعي وإنترنت الأشياء",

        nextrafficSubtitle:
            "لوحة ذكية لمراقبة الحركة المرورية وإنترنت الأشياء",

        nextrafficDescription:
            "لوحة تنقل ذكية مطورة باستخدام منصة Cumulocity IoT لمراقبة التقاطعات والازدحام وتوقيت الإشارات والطقس وحالة الطريق والتنبيهات المرورية الذكية.",

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

        skillsLabel: "القدرات التقنية",

        skillsTitle: "المهارات والتقنيات",

        skillsSubtitle:
            "تقنيات وقدرات مهنية طورتها من خلال المشاريع الأكاديمية والتدريب العملي والمعسكرات والتعلم المستقل.",

        aiSkillsTitle:
            "الذكاء الاصطناعي",

        aiSkillsDescription:
            "تقنيات أساسية في الذكاء الاصطناعي استخدمتها لبناء أنظمة ذكية وحلول تعتمد على البيانات.",

        programmingSkillsTitle:
            "البرمجة والبيانات",

        programmingSkillsDescription:
            "أدوات برمجية وتقنيات بيانات استخدمتها في التحليل والتطوير وتنفيذ حلول الذكاء الاصطناعي.",

        backendSkillsTitle:
            "الأنظمة الخلفية وقواعد البيانات",

        backendSkillsDescription:
            "تقنيات خلفية استخدمتها لربط نماذج الذكاء الاصطناعي بالتطبيقات وواجهات البرمجة والبيانات المنظمة.",

        toolsSkillsTitle:
            "الأدوات وتقنيات الويب",

        toolsSkillsDescription:
            "أدوات للتطوير والتعاون وتقنيات الويب وإنترنت الأشياء استخدمتها في مشاريعي التقنية.",

        professionalSkillsTitle:
            "المهارات المهنية",

        professionalSkillsDescription:
            "قدرات مهنية تدعم العمل التقني الفعّال والتعاون ضمن الفرق وإنجاز المشاريع.",

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

        experienceLabel: "الخلفية العملية",

        experienceTitle: "الخبرات والتدريب",

        experienceSubtitle:
            "تجارب عملية عززت مهاراتي التقنية والتوثيقية والعمل الجماعي وتطوير المشاريع.",

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
        "أعددت وثائق المشروع والتقارير ونفذت تحديثات منظمة للبيانات باستخدام Excel.",

        mewaPointTwo:
            "تعاونت مع الفريق في تخطيط المشروع وتوثيقه وتجهيز العرض التقديمي.",

        mewaPointThree:
            "ساهمت في تطوير منصة قرين كير المدعومة بالذكاء الاصطناعي لتقييم صحة النباتات وتقديم توصيات عناية مخصصة.",
            
        experienceProjectLabel:
            "المشروع المرتبط",

        nitaExperienceType:
            "معسكر الذكاء الاصطناعي وإنترنت الأشياء",

        nitaRole:
            "متدربة في معسكر الذكاء الاصطناعي وإنترنت الأشياء",

        nitaOrganization:
            "الأكاديمية الوطنية لتقنية المعلومات",

        nitaDuration:
            "معسكر لمدة 3 أشهر",

        nitaPointOne:
            "تعاونت ضمن فريق لتطوير حل ذكي لمراقبة الحركة المرورية باستخدام منصة Cumulocity IoT.",

        nitaPointTwo:
            "أنشأت لوحات لمتابعة التقاطعات والازدحام وتوقيت الإشارات وحالة الطرق وبيانات الطقس.",

        nitaPointThree:
            "طبقت قواعد وتنبيهات ذكية للازدحام والطرق المبتلة وانخفاض الرؤية وحالات الطوارئ.",

        navCertifications:
         "الشهادات",

        certificationsLabel:
            "التعلم المستمر",

        certificationsTitle:
            "الشهادات والبرامج التدريبية",

        certificationsSubtitle:
            "مجموعة مختارة من الشهادات والتدريب المهني في الذكاء الاصطناعي والحوسبة السحابية وتحليل البيانات وإنترنت الأشياء وتعلم الآلة.",

        cloudCategory:
            "الحوسبة السحابية",

        bootcampCategory:
            "معسكر مهني",

        generativeAiCategory:
            "الذكاء الاصطناعي التوليدي",

        dataAnalyticsCategory:
            "تحليل البيانات",

        machineLearningCategory:
            "تعلم الآلة",

        sdaIssuer:
            "الأكاديمية السعودية الرقمية",

        nitaIssuer:
            "الأكاديمية الوطنية لتقنية المعلومات",

        doroobIssuer:
            "دروب",

        awsCompletedDate:
            "أُكمل في فبراير 2024",

        nitaCompletedDate:
            "أُكمل في أكتوبر 2025",

        fiveCompletedCourses:
            "5 دورات مكتملة",

        twoCompletedCourses:
            "دورتان مكتملتان",

        ibmSeriesDescription:
            "سلسلة متخصصة تغطي تطبيقات الذكاء الاصطناعي التوليدي والنماذج الأساسية وهندسة الأوامر والذكاء الاصطناعي المسؤول والتحول المؤسسي.",

        googleSeriesDescription:
            "دورتان تغطيان أساسيات البيانات وطرح الأسئلة الفعّالة لدعم القرارات المبنية على البيانات.",

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

         contactLabel:
            "تواصل معي",

        contactTitle:
            "لنتواصل ونناقش الفرص المهنية",

        contactDescription:
            "متاحة لفرص هندسة الذكاء الاصطناعي وتعلم الآلة وتطوير التطبيقات المدعومة بالذكاء الاصطناعي في مختلف مناطق المملكة العربية السعودية.",

        contactAvailability:
            "متاحة للفرص المهنية ومستعدة للانتقال",

        phoneLabel:
            "رقم الجوال",

        emailLabel:
            "البريد الإلكتروني",

        linkedinLabel:
            "لينكدإن",

        githubLabel:
            "قيت هب",

         footerDescription:
            "مهندسة ذكاء اصطناعي أركز على تطوير حلول عملية وذكية تتمحور حول احتياجات المستخدم.",

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

};

/* =================================
   Certificate Series Data
================================= */

const certificateSeriesData = {

    ibm: {

        title: {
            en: "IBM Generative AI Series",
            ar: "سلسلة IBM في الذكاء الاصطناعي التوليدي"
        },

        subtitle: {
            en:
                "Five completed courses authorized by IBM and offered through Coursera.",

            ar:
                "خمس دورات مكتملة ومعتمدة من IBM ومقدمة عبر Coursera."
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

        if (window.innerWidth > 900) {
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