export const AbsentReason = () => [
  {
    Code: "subject-unknown",
    Display: "Subject Unknown",
    Definition:
      "Patient does not know the subject, e.g. the biological parent of an adopted patient.",
  },
  {
    Code: "withheld",
    Display: "Information Withheld",
    Definition: "The patient withheld or refused to share the information.",
  },
  {
    Code: "unable-to-obtain",
    Display: "Unable To Obtain",
    Definition: "Information cannot be obtained; e.g. unconscious patient.",
  },
  {
    Code: "deferred",
    Display: "Deferred",
    Definition:
      "Patient does not have the information now, but can provide the information at a later date.",
  },
];
