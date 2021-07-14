export const Status = () => [
  {
    Lvl: 0,
    Code: "active",
    Display: "Active",
    Definition:
      "The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.",
  },
  {
    Lvl: 1,
    Code: "recurrence",
    Display: "Recurrence",
    Definition:
      "The subject is experiencing a re-occurence or repeating of a previously resolved condition, e.g. urinary tract infection, pancreatitis, cholangitis, conjunctivitis.",
  },
  {
    Lvl: 1,
    Code: "relapse",
    Display: "Relapse",
    Definition:
      "The subject is experiencing a return of a condition, or signs and symptoms after a period of improvement or remission, e.g. relapse of cancer, multiple sclerosis, rheumatoid arthritis, systemic lupus erythematosus, bipolar disorder, [psychotic relapse of] schizophrenia, etc.",
  },
  {
    Lvl: 0,
    Code: "inactive",
    Display: "Inactive",
    Definition:
      "The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.",
  },
  {
    Lvl: 1,
    Code: "remission",
    Display: "Remission",
    Definition:
      "The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.",
  },
  {
    Lvl: 1,
    Code: "resolved",
    Display: "Resolved",
    Definition:
      "The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.",
  },
];
