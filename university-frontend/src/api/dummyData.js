// Dummy data for departments
export const departments = [
  {
    id: 1,
    name: "Computer Science",
    description:
      "Our Computer Science department is at the forefront of technological innovation, offering cutting-edge programs in software engineering, artificial intelligence, and data science. We prepare students for careers in the rapidly evolving tech industry.",
    phone: "(555) 123-4567",
    email: "cs@university.edu",
    location: "Science Building, Room 301",
    facultyCount: 12,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Mathematics",
    description:
      "The Mathematics Department provides a rigorous foundation in both pure and applied mathematics. Our faculty conduct research in areas ranging from abstract algebra to mathematical modeling.",
    phone: "(555) 123-4568",
    email: "math@university.edu",
    location: "Science Building, Room 205",
    facultyCount: 8,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Physics",
    description:
      "Our Physics Department explores the fundamental laws of nature through cutting-edge research and innovative teaching methods. We offer programs in theoretical and experimental physics.",
    phone: "(555) 123-4569",
    email: "physics@university.edu",
    location: "Science Building, Room 401",
    facultyCount: 10,
    image:
      "https://images.unsplash.com/photo-1506318137071-a8e063a4d0ea?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "English Literature",
    description:
      "The English Literature Department fosters critical thinking and creative expression through the study of literature, language, and culture. We explore diverse literary traditions and contemporary works.",
    phone: "(555) 123-4570",
    email: "english@university.edu",
    location: "Humanities Building, Room 101",
    facultyCount: 6,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Biology",
    description:
      "The Biology Department offers comprehensive programs in molecular biology, ecology, and biomedical sciences. Our research spans from cellular mechanisms to ecosystem dynamics.",
    phone: "(555) 123-4571",
    email: "biology@university.edu",
    location: "Science Building, Room 501",
    facultyCount: 15,
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f7?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Chemistry",
    description:
      "Our Chemistry Department combines theoretical knowledge with hands-on laboratory experience. We focus on organic chemistry, inorganic chemistry, and biochemistry.",
    phone: "(555) 123-4572",
    email: "chemistry@university.edu",
    location: "Science Building, Room 601",
    facultyCount: 9,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  }
];

// Dummy data for faculty
export const faculty = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Associate Professor",
    department: "Computer Science",
    departmentId: 1,
    phone: "(555) 123-4567",
    email: "sarah.johnson@university.edu",
    office: "Science Building, Room 305",
    bio: "Dr. Sarah Johnson is an Associate Professor in the Computer Science Department with over 10 years of experience in software engineering and artificial intelligence. Her research focuses on machine learning algorithms and their applications in healthcare technology. She has published over 50 peer-reviewed papers and received several prestigious awards for her contributions to the field.",
    researchAreas: [
      "Machine Learning",
      "Artificial Intelligence",
      "Healthcare Technology",
      "Software Engineering"
    ],
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    education: "Ph.D. Computer Science, Stanford University",
    publications: 50,
    awards: ["NSF Career Award", "Best Paper Award, ICML 2020"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Professor",
    department: "Computer Science",
    departmentId: 1,
    phone: "(555) 123-4568",
    email: "michael.chen@university.edu",
    office: "Science Building, Room 307",
    bio: "Dr. Michael Chen is a Professor and the Director of the Computer Science Department. His research interests include distributed systems, cloud computing, and cybersecurity. He has led numerous industry collaborations and serves on several editorial boards.",
    researchAreas: [
      "Distributed Systems",
      "Cloud Computing",
      "Cybersecurity",
      "Database Systems"
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    education: "Ph.D. Computer Science, MIT",
    publications: 75,
    awards: ["IEEE Fellow", "Distinguished Scientist Award"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Assistant Professor",
    department: "Mathematics",
    departmentId: 2,
    phone: "(555) 123-4569",
    email: "emily.rodriguez@university.edu",
    office: "Science Building, Room 207",
    bio: "Dr. Emily Rodriguez specializes in applied mathematics and mathematical modeling. Her work focuses on developing mathematical models for complex biological systems and environmental processes.",
    researchAreas: [
      "Applied Mathematics",
      "Mathematical Modeling",
      "Biological Systems",
      "Environmental Science"
    ],
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    education: "Ph.D. Applied Mathematics, UC Berkeley",
    publications: 25,
    awards: ["Young Investigator Award", "NSF Graduate Fellowship"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Professor",
    department: "Physics",
    departmentId: 3,
    phone: "(555) 123-4570",
    email: "james.wilson@university.edu",
    office: "Science Building, Room 403",
    bio: "Dr. James Wilson is a Professor of Physics specializing in quantum mechanics and particle physics. He has conducted research at CERN and published extensively in leading physics journals.",
    researchAreas: [
      "Quantum Mechanics",
      "Particle Physics",
      "Theoretical Physics",
      "Quantum Computing"
    ],
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    education: "Ph.D. Physics, Caltech",
    publications: 60,
    awards: ["APS Fellow", "CERN Distinguished Researcher"]
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    title: "Associate Professor",
    department: "English Literature",
    departmentId: 4,
    phone: "(555) 123-4571",
    email: "lisa.thompson@university.edu",
    office: "Humanities Building, Room 103",
    bio: "Dr. Lisa Thompson is an Associate Professor specializing in 19th-century British literature and feminist literary theory. Her research explores the intersection of gender, class, and narrative form.",
    researchAreas: [
      "19th-Century Literature",
      "Feminist Theory",
      "British Literature",
      "Literary Criticism"
    ],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    education: "Ph.D. English Literature, Yale University",
    publications: 35,
    awards: ["MLA Book Award", "Fulbright Scholar"]
  },
  {
    id: 6,
    name: "Dr. David Kim",
    title: "Assistant Professor",
    department: "Computer Science",
    departmentId: 1,
    phone: "(555) 123-4572",
    email: "david.kim@university.edu",
    office: "Science Building, Room 309",
    bio: "Dr. David Kim focuses on human-computer interaction and user experience design. His research explores how technology can be made more accessible and intuitive for diverse user populations.",
    researchAreas: [
      "Human-Computer Interaction",
      "User Experience Design",
      "Accessibility",
      "User Interface Design"
    ],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    education: "Ph.D. Human-Computer Interaction, Carnegie Mellon",
    publications: 20,
    awards: ["CHI Best Paper Award", "Google Faculty Research Award"]
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    title: "Professor",
    department: "Biology",
    departmentId: 5,
    phone: "(555) 123-4573",
    email: "maria.garcia@university.edu",
    office: "Science Building, Room 503",
    bio: "Dr. Maria Garcia is a Professor of Biology specializing in molecular biology and genetics. Her research focuses on understanding cellular mechanisms and their role in disease development.",
    researchAreas: [
      "Molecular Biology",
      "Genetics",
      "Cell Biology",
      "Disease Mechanisms"
    ],
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?w=300&h=300&fit=crop&crop=face",
    education: "Ph.D. Molecular Biology, Harvard University",
    publications: 80,
    awards: ["HHMI Investigator", "National Academy of Sciences Member"]
  },
  {
    id: 8,
    name: "Dr. Robert Brown",
    title: "Associate Professor",
    department: "Chemistry",
    departmentId: 6,
    phone: "(555) 123-4574",
    email: "robert.brown@university.edu",
    office: "Science Building, Room 603",
    bio: "Dr. Robert Brown specializes in organic chemistry and drug discovery. His research focuses on developing new synthetic methods and discovering novel therapeutic compounds.",
    researchAreas: [
      "Organic Chemistry",
      "Drug Discovery",
      "Synthetic Methods",
      "Medicinal Chemistry"
    ],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    education: "Ph.D. Chemistry, UC San Diego",
    publications: 45,
    awards: ["ACS Young Investigator Award", "NIH R01 Grant"]
  }
];
