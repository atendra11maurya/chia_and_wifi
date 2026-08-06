import type { ExperienceItem, TechNodeItem, SkillCategory, ProjectItem, EducationItem, CertificationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Avinash Maurya",
  title: "Staff Engineer, Layout Design",
  company: "Samsung Semiconductor India R&D Centre",
  location: "Bengaluru, Karnataka, India",
  educationDegree: "M.Tech in Microelectronics (BITS Pilani)",
  email: "pine.avinash@gmail.com",
  phone: "+91 9632896202",
  linkedin: "https://www.linkedin.com/in/avinash-maurya",
  summary: `Staff Engineer with 8+ years of dedicated expertise in deep sub-micron standard cell library layout development, custom physical design methodology, and automated physical verification QA. Proven track record across advanced FinFET and planar nodes ranging from 22nm down to sub-5nm (4nm, 5nm, 6nm, 7nm, 8nm, 10nm, 12nm, 22nm). Masterful in Cadence Virtuoso, Synopsys Custom Compiler, ICC II P&R flow, and complex DRC/LVS/DFM/ERC/ICV verification pipelines. Holds a Master of Technology in Microelectronics from BITS Pilani.`,
  yearsOfExperience: "8+",
  nodesMasteredCount: "8",
  shippedProjectsCount: "15+",
  primaryTools: ["Cadence Virtuoso", "Synopsys Custom Compiler", "Calibre DRC/LVS", "ICV & DFM", "ICC II P&R"],
  languages: ["English", "Hindi"]
};

export const TECH_NODES: TechNodeItem[] = [
  {
    id: "4nm",
    node: "4nm",
    name: "Sub-5nm EUV FinFET",
    category: "EUV",
    description: "Next-generation sub-5nm extreme ultraviolet (EUV) standard cell design with tight track rules, sub-resolution assist features (SRAF), and stringent DFM density constraints.",
    transistorDensityRelative: "Highest Density Scaling",
    keyChallenges: [
      "Sub-resolution assist feature placement and metal tip-to-tip DRC compliance",
      "Multi-patterning mask decomposition & pin accessibility optimization",
      "Extreme electromigration (EM) and IR drop limits in cell layout power grids"
    ],
    verificationScope: ["DRC", "LVS", "DFM", "ICV", "ERC"],
    isHighlighted: true
  },
  {
    id: "5nm",
    node: "5nm",
    name: "Advanced FinFET Node",
    category: "FinFET",
    description: "High-density standard cell library optimization for commercial mobile SoCs and server-grade compute units using EUV lithography layers.",
    transistorDensityRelative: "~1.8x scaling vs 7nm",
    keyChallenges: [
      "Strict gate cut placement and continuous diffusion (CNP/CPB) rules",
      "Level shifter and power management layout cell isolation",
      "Pin capacitance minimization for ultra-low voltage performance"
    ],
    verificationScope: ["DRC", "LVS", "DFM", "ERC"],
    isHighlighted: true
  },
  {
    id: "6nm",
    node: "6nm",
    name: "EUV Enhanced Node",
    category: "EUV",
    description: "Design rules optimized for seamless migration from 7nm with EUV mask reduction for critical interconnect layers.",
    transistorDensityRelative: "1.18x scaling vs 7nm",
    keyChallenges: [
      "Track height scaling optimization",
      "Routing congestion management in dense sequential cells",
      "DFM yield ramp check rule compliance"
    ],
    verificationScope: ["DRC", "LVS", "DFM", "ICV"]
  },
  {
    id: "7nm",
    node: "7nm",
    name: "Production FinFET Node",
    category: "FinFET",
    description: "Comprehensive standard cell library layout (logic, sequential, power management, and level shifters) utilizing self-aligned double patterning (SADP).",
    transistorDensityRelative: "~3.3x scaling vs 16nm",
    keyChallenges: [
      "SADP & SAQP color assignment and pitch matching",
      "Electromigration-aware metal width and via stacking in power rails",
      "Custom cell layout exploration for high-frequency clocking"
    ],
    verificationScope: ["DRC", "LVS", "DFM", "ERC", "ICV"],
    isHighlighted: true
  },
  {
    id: "8nm",
    node: "8nm",
    name: "High-Performance FinFET",
    category: "FinFET",
    description: "Refined FinFET process architecture targeted for high-performance computing, automotive electronics, and wireless baseband SoCs.",
    transistorDensityRelative: "Enhanced 10nm scaling",
    keyChallenges: [
      "Boundary cell alignment and ESD robustness",
      "Power rail strap placement for dynamic voltage scaling",
      "Yield-centric antenna and ERC check compliance"
    ],
    verificationScope: ["DRC", "LVS", "DFM", "ERC"]
  },
  {
    id: "10nm",
    node: "10nm",
    name: "Multi-Patterning FinFET",
    category: "FinFET",
    description: "Pioneering multi-patterning lithography implementation with complex DRC rulesets for ultra-low power standard cell topologies.",
    transistorDensityRelative: "2.0x scaling vs 14nm",
    keyChallenges: [
      "Coloring rules verification for Metal 1 and Metal 2 layers",
      "Standard cell abutment and boundary rule integrity",
      "Sub-micron parasitic RC extraction calibration"
    ],
    verificationScope: ["DRC", "LVS", "DFM"]
  },
  {
    id: "12nm",
    node: "12nm",
    name: "Optimized FinFET",
    category: "FinFET",
    description: "Mature high-yield process node utilized for edge AI acceleration, automotive microcontrollers, and IoT compute engines.",
    transistorDensityRelative: "Cost-optimized scaling",
    keyChallenges: [
      "Standard cell library P&R compatibility in Synopsys ICC II",
      "Sub-threshold leakage control via layout channel sizing",
      "LVS netlist extraction for multi-finger devices"
    ],
    verificationScope: ["DRC", "LVS", "ERC"]
  },
  {
    id: "22nm",
    node: "22nm",
    name: "Ultra-Low Power Node",
    category: "Planar",
    description: "Planar process standard cell library layout and physical verification for analog, mixed-signal, and low-power microcontrollers.",
    transistorDensityRelative: "Planar baseline",
    keyChallenges: [
      "Well proximity effect (WPE) and STI stress optimization",
      "Custom analog/mixed-signal cell matching",
      "Full chip place-and-route grid alignment"
    ],
    verificationScope: ["DRC", "LVS", "ERC"]
  }
];

export const TECHNICAL_EXPERTISE: SkillCategory[] = [
  {
    id: "standard-cells",
    title: "Standard Cell Architecture & Layout",
    iconName: "Cpu",
    description: "End-to-end design and physical implementation of ultra-dense Standard Cell Libraries across advanced technology nodes.",
    skills: [
      "Combinational Logic Cells (NAND, NOR, AOI, OAI)",
      "Sequential Cells (Flip-Flops, Latches, Multi-Bit FF)",
      "Power Management Cells (Header/Footer, Retention Latches)",
      "Level Shifter & Isolation Cells",
      "Physical Cells (Tap, Decap, Filler, Endcap, Boundary)"
    ]
  },
  {
    id: "tools-eda",
    title: "EDA Suite & Tool Mastery",
    iconName: "Wrench",
    description: "Deep expertise in industry-standard custom layout design environments and physical verification engines.",
    skills: [
      "Cadence Virtuoso & Virtuoso Layout Editor",
      "Synopsys Custom Compiler",
      "Synopsys ICC II (Place & Route Flow Integration)",
      "Mentor Calibre DRC / LVS Engines",
      "Synopsys ICV (In-Design Verification)"
    ]
  },
  {
    id: "physical-verification",
    title: "Physical Verification & QA Pipeline",
    iconName: "ShieldCheck",
    description: "Comprehensive physical verification methodologies to guarantee silicon zero-defect yield and DFM compliance.",
    skills: [
      "Design Rule Checking (DRC) & Metal Fill DRC",
      "Layout Versus Schematic (LVS) Debugging",
      "Design for Manufacturability (DFM) Yield Rules",
      "Electrical Rule Checking (ERC) & Antenna Rules",
      "ESD & Well Proximity Effect (WPE) Mitigations"
    ]
  },
  {
    id: "submicron-tradeoffs",
    title: "Deep Sub-Micron Physics & Trade-offs",
    iconName: "Layers",
    description: "Architectural exploration and silicon physical trade-offs in sub-7nm FinFET and EUV process technologies.",
    skills: [
      "Electromigration (EM) & IR Drop Mitigation",
      "Pin Accessibility & P&R Routability Optimization",
      "Continuous Diffusion (CNP/CPB) Layout Rules",
      "Parasitic RC Minimization & Matching",
      "Multi-Patterning (Decomposition & Coloring)"
    ]
  },
  {
    id: "automation-scripting",
    title: "Layout Methodology & Automation",
    iconName: "Code2",
    description: "Scripting and automated flow development to accelerate layout execution and quality assurance standard checks.",
    skills: [
      "Shell & Bash Scripting for Automated QA",
      "Tcl Scripting for EDA Tool Customization",
      "Layout Quality Assurance (QA) Checklists",
      "Cell Boundary & P&R Grid Verification Scripts",
      "Cross-Site Team Methodology Standardization"
    ]
  },
  {
    id: "cross-site-lead",
    title: "Technical Collaboration & Methodology",
    iconName: "Users",
    description: "Seamless technical coordination with circuit design, CAD, and cross-site foundry teams.",
    skills: [
      "Architecture Exploration with Circuit Designers",
      "P&R Integration with Digital Implementation Teams",
      "Foundry PDK Rule Deck Review & Analysis",
      "Technical Mentorship of Junior Engineers",
      "Cross-Site R&D Coordination (India & Global)"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "samsung",
    role: "Staff Engineer",
    company: "Samsung Semiconductor India R&D Centre",
    companySlug: "samsung",
    location: "Bengaluru, Karnataka, India",
    period: "April 2022 – Present",
    duration: "4 years 5 months",
    isCurrent: true,
    type: "Full-time",
    summary: "Leading standard cell library layout development and physical design methodology for cutting-edge sub-5nm technology nodes at Samsung's primary semiconductor R&D facility in India.",
    highlights: [
      "Spearhead standard cell library layout development across 4nm and 5nm sub-micron process nodes for next-generation mobile and compute SoCs.",
      "Conduct architecture exploration for standard cell layouts in collaboration with circuit design teams to balance area, speed, and power trade-offs.",
      "Drive rigorous physical verification pipelines including DRC, LVS, DFM, ERC, and ICV to ensure silicon-proven quality standards.",
      "Develop custom cell topologies for high-density logic, power management, level shifters, and sequential elements.",
      "Standardize layout QA methodologies and cross-site engineering guidelines to boost layout team throughput."
    ],
    keyTools: ["Cadence Virtuoso", "Synopsys Custom Compiler", "ICV", "Calibre DRC/LVS", "ICC II"],
    keyNodes: ["4nm", "5nm", "6nm", "7nm"]
  },
  {
    id: "synopsys-engr-2",
    role: "A&MS Layout Design Engineer II",
    company: "Synopsys Inc",
    companySlug: "synopsys",
    location: "Bengaluru, Karnataka, India",
    period: "June 2019 – April 2022",
    duration: "2 years 11 months",
    isCurrent: false,
    type: "Full-time",
    summary: "Managed advanced analog & mixed-signal (A&MS) and standard cell layout design projects in sub-micron FinFET process nodes for global Tier-1 semiconductor customers.",
    highlights: [
      "Executed standard cell layout design and physical verification for 7nm, 8nm, 10nm, and 12nm technology nodes.",
      "Integrated standard cell libraries into Synopsys ICC II P&R flow to ensure 100% routability and zero pin access conflicts.",
      "Analyzed deep sub-micron technology trade-offs including parasitic RC, antenna rules, and electromigration constraints.",
      "Automated standard cell verification jobs using Linux Shell scripting, cutting QA verification turnaround time significantly.",
      "Collaborated with cross-site global design teams to deliver high-yield IP libraries."
    ],
    keyTools: ["Custom Compiler", "Cadence Virtuoso", "Calibre LVS/DRC", "Shell Scripting", "ICC II"],
    keyNodes: ["7nm", "8nm", "10nm", "12nm"]
  },

];

export const CONFIDENTIAL_PROJECTS: ProjectItem[] = [
  {
    id: "proj-4nm-std-cell",
    title: "Sub-5nm Commercial FinFET SoC Standard Cell Library",
    codename: "PROJ-SILICON-4N",
    category: "Standard Cell Library",
    node: "4nm EUV FinFET",
    status: "Silicon Proven / Production",
    overview: "Comprehensive standard cell library development for high-performance flagship mobile application processors. Focused on extreme area scaling, pin access routability, and strict EUV DRC compliance.",
    challenge: "Managing sub-resolution assist feature (SRAF) placement conflicts while maintaining maximum transistor packing density and zero tip-to-tip metal violations.",
    methodology: "Pioneered cell architecture exploration with multi-track layout variants, customized continuous diffusion rules (CNP/CPB), and automated DFM check scripts.",
    impact: "Achieved 14% area reduction over prior 5nm generation cell libraries with 100% P&R routability clean status in ICC II.",
    technologies: ["Cadence Virtuoso", "Synopsys ICV", "Calibre DRC/LVS", "4nm EUV", "Shell Scripting"],
    isConfidential: true
  },
  {
    id: "proj-5nm-power-mgmt",
    title: "High-Density Power Management & Level Shifter Cell Suite",
    codename: "PROJ-PWR-5NM",
    category: "Specialized Physical Cells",
    node: "5nm FinFET",
    status: "Silicon Proven",
    overview: "Physical layout design of complex power-gating cells, retention latches, header/footer switch transistors, and multi-voltage level shifters.",
    challenge: "Ensuring zero latch-up, high ESD immunity, and zero cross-domain voltage leakage across steep potential gradient boundaries.",
    methodology: "Implemented custom guard rings, optimized STI isolation distances, and executed intensive ERC (Electrical Rule Checking) and latchup verification passes.",
    impact: "Delivered zero-failure power-gating cell layout block deployed across multi-rail energy-efficient SoC architecture.",
    technologies: ["Custom Compiler", "Cadence Virtuoso", "ERC", "DFM", "5nm FinFET"],
    isConfidential: true
  },
  {
    id: "proj-layout-qa-automation",
    title: "Automated Layout QA & Physical Verification Flow",
    codename: "FLOW-AUTO-QA",
    category: "Methodology & Automation",
    node: "Cross-Node (4nm - 12nm)",
    status: "Deployed Across R&D",
    overview: "Engineered an automated quality assurance verification pipeline that runs multi-vendor DRC/LVS/DFM checks, boundary alignment checks, and P&R grid compliance.",
    challenge: "Manual layout inspection was prone to minor grid off-alignments and pin boundary mismatches, causing bottleneck delays before tape-out.",
    methodology: "Developed custom Shell & Tcl scripts integrated into EDA environments to parse rule decks, generate automated QA scorecards, and flag violation coordinates automatically.",
    impact: "Reduced layout verification turnaround time by 60% and eliminated human-error boundary violations prior to tape-out.",
    technologies: ["Bash / Shell", "Tcl", "Calibre DRC", "Synopsys ICV", "Virtuoso SKILL"],
    isConfidential: true
  },
  {
    id: "proj-7nm-multibit-ff",
    title: "High-Speed 7nm Multi-Bit Flip-Flop (MBFF) Layout Design",
    codename: "PROJ-MBFF-7NM",
    category: "Sequential Cell Architecture",
    node: "7nm FinFET",
    status: "Silicon Proven",
    overview: "Layout implementation of dual-bit and quad-bit flip-flop structures to optimize dynamic clocking power in digital processing cores.",
    challenge: "Balancing internal clock tree parasitic capacitance while sharing transistor diffusion structures within compact track constraints.",
    methodology: "Utilized common-centroid layout topologies and symmetric internal clock routing to match setup/hold timing skew across all bit paths.",
    impact: "Reduced overall clock network dynamic power consumption by 22% compared to single-bit flip-flop implementations.",
    technologies: ["Cadence Virtuoso", "Synopsys Custom Compiler", "7nm SADP", "StarRC"],
    isConfidential: true
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-bits",
    degree: "Master of Technology (M.Tech)",
    field: "Microelectronics",
    institution: "Birla Institute of Technology and Science (BITS), Pilani",
    location: "Pilani / Distance R&D Work",
    period: "July 2019 – August 2021",
    highlights: [
      "Specialized in VLSI Design, Advanced Semiconductor Devices, and Microelectronics Circuit Architecture.",
      "Completed rigorous academic coursework alongside active industry role at Synopsys Inc.",
      "Focused research on deep sub-micron physical layout trade-offs and sub-10nm CMOS device physics."
    ]
  },
  {
    id: "edu-abes",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Communications Engineering",
    institution: "ABES Engineering College",
    location: "Ghaziabad, Uttar Pradesh, India",
    period: "2012 – 2016",
    highlights: [
      "Graduated with a strong foundation in Semiconductor Devices, Digital Electronics, and Analog Circuits.",
      "Active participant in technical robotics societies and hardware design competitions."
    ]
  },
  {
    id: "edu-cbse-12",
    degree: "Senior Secondary School (Intermediate - 12th)",
    field: "Science Stream (Physics, Chemistry, Mathematics)",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "2009 – 2011",
    highlights: ["Strong quantitative foundation in Physics, Advanced Mathematics, and Chemistry."]
  },
  {
    id: "edu-cbse-10",
    degree: "High School (10th)",
    field: "General Academics",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "2008 – 2009",
    highlights: ["Academic excellence with focus on Science and Mathematics."]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-pine",
    title: "ASIC Full Custom Layout & Design Specialization",
    issuer: "Pine Training Academy",
    date: "2016",
    category: "VLSI / Semiconductor",
    badge: "Specialist"
  },
  {
    id: "cert-amcat-data",
    title: "AMCAT Certified Data Processing Specialist",
    issuer: "Aspiring Minds / AMCAT",
    category: "Analytical & Data",
    badge: "Certified"
  },
  {
    id: "cert-amcat-semi",
    title: "AMCAT Certified Sales Professional - Electronics & Semiconductor Engineering",
    issuer: "Aspiring Minds / AMCAT",
    category: "Semiconductor Domain",
    badge: "Domain Certified"
  },
  {
    id: "cert-amcat-corp",
    title: "AMCAT Certified Corporate Sales Manager",
    issuer: "Aspiring Minds / AMCAT",
    category: "Professional Competency",
    badge: "Certified"
  },
  {
    id: "cert-amcat-tele",
    title: "AMCAT Certified Telesales Professional",
    issuer: "Aspiring Minds / AMCAT",
    category: "Professional Competency",
    badge: "Certified"
  },
  {
    id: "cert-bhel-training",
    title: "Vocational Industrial Engineering Training",
    issuer: "Bharat Heavy Electricals Limited (BHEL)",
    date: "2015",
    category: "Industrial Engineering",
    badge: "Vocational"
  }
];
