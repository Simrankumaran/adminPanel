export const Status = () => [
  {
    Lvl: 0,
    Code: "active",
    Display: "Active",
    Definition:
      "The subject is currently experiencing, or is at risk of, a reaction to the identified substance.",
    "Canonical Status": "~active",
  },
  {
    Lvl: 1,
    Code: "inactive",
    Display: "Inactive",
    Definition:
      "The subject is no longer at risk of a reaction to the identified substance.",
    "Canonical Status": "~inactive",
  },
  {
    Lvl: 2,
    Code: "resolved",
    Display: "Resolved",
    Definition:
      "A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting.",
    "Canonical Status": "~resolved",
  },
];
