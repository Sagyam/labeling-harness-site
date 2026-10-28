const repo = "https://github.com/Sagyam/labeling-harness"
const docs = `${repo}/blob/master/docs`

export const links = {
  repo,
  guide: `${docs}/harness/guide.md`,
  operations: `${docs}/harness/operations.md`,
  demo: `${docs}/harness/operations.md#the-demo-corpus`,
  architecture: `${docs}/harness/architecture.md`,
  decisions: `${docs}/harness/decisions.md`,
  research: `${docs}/nepanglish/README.md`,
  findings: `${docs}/nepanglish/findings.md`,
  author: "https://sagyamthapa.com.np",
  authorGithub: "https://github.com/Sagyam",
}

export const guideAnchor = (anchor: string) => `${links.guide}#${anchor}`

export const site = {
  name: "Labeling Harness",
  url: "https://labeling-harness.sagyamthapa.com.np",
  tagline: "Listen only where the machines disagree.",
  description:
    "A data-labelling harness that turns YouTube audio into a verified dataset for fine-tuning speech recognition on code-switched speech. Three recognisers draft every clip, the doubtful ones rise to the top, and you check them at keyboard speed.",
}

export const nav = [
  { href: "#how", label: "How it works" },
  { href: "#tour", label: "Tour" },
  { href: "#architecture", label: "Architecture" },
  { href: "#research", label: "Research" },
  { href: "#start", label: "Quick start" },
]
