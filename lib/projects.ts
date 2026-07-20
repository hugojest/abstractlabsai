export type Project = {
  title: string;
  tags: string[];
  body: string;
  fields: { k: string; v: string }[];
};

export const projects: Project[] = [
  {
    title: "Food & Beverage Development Research",
    tags: ["Product Development", "Sensory Testing"],
    body: "Applying culinary and sensory principles to the development and testing of food and beverage concepts — from ingredient behavior through to how a dish or drink holds up under real production and service conditions.",
    fields: [
      { k: "Domain", v: "Product development" },
      { k: "Method", v: "Iterative testing + sensory review" },
      { k: "Output", v: "Development notes & tasting protocols" },
      { k: "Status", v: "Ongoing" },
    ],
  },
  {
    title: "Culinary Knowledge Systems",
    tags: ["Knowledge Management", "Taxonomy"],
    body: "Structuring culinary technique, terminology, and ingredient knowledge into reference systems designed for reuse — the same discipline applied to AI-facing documentation and evaluation guidelines.",
    fields: [
      { k: "Domain", v: "Knowledge management" },
      { k: "Method", v: "Taxonomy design + documentation" },
      { k: "Output", v: "Structured reference libraries" },
      { k: "Status", v: "Ongoing" },
    ],
  },
  {
    title: "Fermentation & Ingredient Exploration",
    tags: ["Food Science", "Applied Research"],
    body: "Hands-on exploration of fermentation, preservation, and ingredient transformation — grounding food science concepts in direct, repeatable kitchen practice rather than theory alone.",
    fields: [
      { k: "Domain", v: "Food science" },
      { k: "Method", v: "Applied experimentation" },
      { k: "Output", v: "Technique documentation" },
      { k: "Status", v: "Ongoing" },
    ],
  },
  {
    title: "AI-Assisted Research Workflows",
    tags: ["AI Evaluation", "Methodology"],
    body: "Using AI tools as part of culinary and food-science research — testing where they're reliable, where they need human correction, and how that correction process can be made systematic.",
    fields: [
      { k: "Domain", v: "AI + research methodology" },
      { k: "Method", v: "Applied testing + review" },
      { k: "Output", v: "Workflow documentation" },
      { k: "Status", v: "Ongoing" },
    ],
  },
];
