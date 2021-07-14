export const Status = () => [
  {
    Code: "partial",
    Display: "Partial",
    Definition:
      "Some health information is known and captured, but not complete - see notes for details.",
    "Canonical Status": "~partial",
  },
  {
    Code: "completed",
    Display: "Completed",
    Definition:
      "All available related health information is captured as of the date (and possibly time) when the family member history was taken.",
    "Canonical Status": "~complete",
  },

  {
    Code: "health-unknown",
    Display: "Health Unknown",
    Definition:
      "Health information for this family member is unavailable/unknown.",
    "Canonical Status": "~unknown",
  },
];
