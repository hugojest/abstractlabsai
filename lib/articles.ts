export type Article = {
  slug: string;
  number: string;
  title: string;
  dek: string;
  tag: string;
  readTime: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "culinary-knowledge-ai-evaluation",
    number: "NOTE 01",
    title: "How Culinary Knowledge Can Improve AI Evaluation",
    dek: "Fluent food writing and correct food writing are not the same thing. Most evaluation pipelines are only built to catch the first.",
    tag: "AI Evaluation",
    readTime: "6 min",
    content: [
      "Most people reviewing AI-generated food content are checking for the things general-purpose reviewers are trained to check: clarity, coherence, tone, whether the instructions are internally consistent. Those checks matter, but they don't catch the errors that actually break a recipe or a piece of food guidance in practice. A reduction that's given the wrong time for the stated volume, a leavening ratio that would produce a flat or overly dense result, a food-safety claim that's technically worded correctly but wrong for the ingredient in question — these read as perfectly fluent. They only fail once someone with kitchen experience checks them against how the process actually behaves.",
      "This is the gap that domain-specific evaluation is meant to close. It isn't about having stronger opinions on flavor; it's about having a working, physical model of how food behaves under heat, time, and technique, and using that model to check whether a model's output would survive contact with an actual stove. A rubric built by someone with that background asks different questions: Is this ratio plausible for this method? Would this technique produce the texture being described? Is the safety guidance specific enough to be useful, or so generic it's technically true and practically empty?",
      "In practice, this looks like structured review criteria rather than a simple thumbs up or down. A useful food-evaluation rubric separates plausibility (does this generally sound right), technical correctness (does this hold up against how the physical process works), and safety (is there anything here that could cause harm if followed literally). Reviewers without kitchen background can be trained to flag the first category reasonably well. The second and third categories are where a domain expert earns their place in the pipeline — not replacing general review, but catching what it structurally can't.",
      "The larger point is that food is a physical discipline before it's a language one. Text about food can be well-formed and still wrong in ways that only show up when someone tries to actually cook it. Bringing that practical check into an evaluation process is less about adding another layer of polish and more about adding a layer of reality-testing that a purely linguistic reviewer doesn't have the background to provide.",
    ],
  },
  {
    slug: "sensory-evaluation-and-food-understanding",
    number: "NOTE 02",
    title: "Sensory Evaluation and Food Understanding",
    dek: "Food science has spent decades building precise, testable vocabulary for taste and texture. Most AI-generated food description ignores it in favor of marketing language.",
    tag: "Food Science",
    readTime: "5 min",
    content: [
      "Formal sensory evaluation — the discipline used in food science to assess texture, aroma, and flavor in a structured, repeatable way — was built to solve a specific problem: ordinary descriptive language is too loose to compare products or track changes over time. 'Crispy' and 'crunchy' aren't interchangeable to a trained sensory panel; they describe measurably different mechanical properties, and mixing them up produces inconsistent data. That precision is exactly what's missing from most food description generated casually, including most AI-generated food writing.",
      "The everyday vocabulary used to describe food is largely evaluative rather than descriptive — words like 'delicious,' 'rich,' or 'fresh' communicate a judgment, not an observation. Sensory science vocabulary is built the other way around: it describes what's actually happening — the rate a texture breaks down, whether an aroma is perceived before or after tasting, whether a flavor note fades quickly or lingers — and lets the reader form their own judgment from that description. That distinction matters more than it looks like it should, especially for any system meant to describe food consistently across many examples.",
      "For datasets meant to train or evaluate a model's food descriptions, this is a practical problem, not an academic one. If the reference vocabulary is marketing language, the model learns to sound appealing rather than to describe accurately — and the two goals diverge quickly once you're comparing texture across dozens of similar dishes. Grounding a labeling guideline in actual sensory terminology, even a simplified version of it, gives reviewers a shared, testable vocabulary instead of a set of adjectives that mean something slightly different to everyone using them.",
      "None of this requires running a formal sensory panel for every dataset. It requires borrowing the discipline behind one: define terms before using them, separate description from preference, and be specific about what property is actually being described. That's a small shift in how guidelines are written, and it produces food description that holds up to scrutiny instead of just sounding nice.",
    ],
  },
  {
    slug: "building-knowledge-systems-for-food-expertise",
    number: "NOTE 03",
    title: "Building Knowledge Systems for Food Expertise",
    dek: "Most of what a professional cook knows never gets written down. Turning that into something reusable is a documentation problem before it's an AI problem.",
    tag: "Knowledge Management",
    readTime: "5 min",
    content: [
      "A surprising amount of culinary expertise is tacit — held in hands and habits rather than written anywhere. A cook who's made a sauce a thousand times knows what it should look like a minute before it's ready in a way that's genuinely difficult to put into words. That's fine in a working kitchen, where the knowledge is transmitted by watching and doing. It's a real problem the moment you need that knowledge to be usable outside the person who holds it — for training new staff, for documentation, or for any system that needs a defensible, explicit version of what an expert knows.",
      "Turning tacit knowledge into explicit knowledge is a discipline in its own right. It means breaking a technique down into the specific, checkable cues an expert is actually using — not just 'cook until done,' but the visual, textural, and timing signals that define 'done' for that specific method and ingredient. It means building a shared vocabulary so the same term means the same thing every time it's used. And it means organizing that material so it can be found and reused, rather than living as scattered notes that only make sense to the person who wrote them.",
      "The result, done well, looks less like a recipe collection and more like a reference system: technique documented separately from any single dish, ingredient behavior documented separately from technique, sensory vocabulary defined once and reused consistently. That structure is what makes the knowledge portable — usable by a new cook, a documentation team, or a dataset labeling guideline, without needing the original expert in the room to interpret it.",
      "This is also, not coincidentally, the same structure that makes domain knowledge usable for AI work. A well-organized culinary reference system and a well-organized dataset guideline are solving the same underlying problem: making expert judgment explicit, consistent, and checkable by someone who isn't the expert. Good knowledge management in a kitchen and good knowledge management for AI training data turn out to be closer disciplines than they first appear.",
    ],
  },
  {
    slug: "from-restaurant-operations-to-ai-knowledge-work",
    number: "NOTE 04",
    title: "From Restaurant Operations to AI Knowledge Work",
    dek: "The discipline that keeps a kitchen consistent under pressure is the same discipline that makes a good evaluation rubric hold up under scrutiny.",
    tag: "Hospitality Operations",
    readTime: "5 min",
    content: [
      "A professional kitchen runs on standards that have nothing to do with creativity and everything to do with consistency: the same dish, built the same way, to the same standard, whether it's the first ticket of the night or the two hundredth. That discipline comes from very deliberate operational structure — prep lists, plating guides, timing standards, and a shared understanding of what 'correct' looks like that doesn't depend on which cook is on the line that night.",
      "That structure turns out to transfer more directly to knowledge work than it might seem to at first. An evaluation rubric is, functionally, a plating guide: a shared, explicit standard for what 'correct' looks like, written so that different reviewers arrive at the same judgment independently. A labeling guideline is a prep list: a defined procedure that produces consistent results regardless of who's following it. The goal in both cases is the same — remove ambiguity from a judgment call so the outcome doesn't depend on who happened to be doing it that day.",
      "Hospitality operations also builds a specific comfort with feedback loops under real constraints — service doesn't pause for a mistake to be fully understood, so corrections have to be fast, specific, and actionable in the moment. That same instinct is useful in reviewing AI output: the goal isn't a long essay about what's wrong with a model's answer, it's a specific, actionable flag that someone downstream can act on quickly.",
      "None of this is a metaphor stretched to fit — it's the same underlying skill applied to a different material. Consistency under pressure, explicit standards instead of implicit ones, and fast, specific feedback are exactly what hospitality operations trains, and exactly what's useful in building and reviewing the systems that generate or evaluate food-related AI output.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
