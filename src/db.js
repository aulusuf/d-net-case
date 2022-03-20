export const kpi = [
  {
    id: 1,
    name: "Timeline",
    icon: "assets/timeline.png",
    weight: 40,
    description:
      "All tasks and projects that must be done must be in accordance with predetermined deadline",
  },
  {
    id: 2,
    name: "Data Validation",
    icon: "assets/check.png",
    weight: 20,
    description: "Debug source output data with the formula used",
  },
  {
    id: 3,
    name: "Documentation Availability",
    icon: "assets/agreement.png",
    weight: 15,
    description:
      "All project related documents with upload on project.dwp.io with task documentation",
  },
  {
    id: 4,
    name: "Performance Apps",
    icon: "assets/performance.png",
    weight: 10,
    description:
      "Debug featuures assuming a maxiumum of 3 seconds of data processing",
  },
  {
    id: 5,
    name: "Research New Technology",
    icon: "assets/research.png",
    weight: 10,
    description: "Implementation of new technology to existing application",
  },
  {
    id: 6,
    name: "Training",
    icon: "assets/online-learning.png",
    weight: 5,
    description: "The material must be related to work in the DWP group",
  },
];

export const workers = [
  {
    id: 1,
    name: "Katerina Furai",
    position: "Developer",
    indicator: {
      timeline: 79,
      dataValidation: 100,
      documentationAvailability: 96.33,
      performanceApps: 100,
      researchNewTechnology: 100,
      training: 20,
    },
  },
  {
    id: 2,
    name: "Muhammad Yusuf Auliya",
    position: "Project Manager",
    indicator: {
      timeline: 100,
      dataValidation: 90,
      documentationAvailability: 70,
      performanceApps: 30,
      researchNewTechnology: 80,
      training: 100,
    },
  },
];
