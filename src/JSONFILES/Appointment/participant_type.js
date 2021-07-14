export const PType = () => [
  {
    Code: "ADM",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "admitter",
    Definition:
      "The practitioner who is responsible for admitting a patient to a patient encounter.",
  },
  {
    Code: "ATND",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "attender",
    Definition:
      "The practitioner that has responsibility for overseeing a patient's care during a patient encounter.",
  },
  {
    Code: "CALLBCK",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "callback contact",
    Definition:
      "A person or organization who should be contacted for follow-up questions about the act in place of the author.",
  },
  {
    Code: "CON",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "consultant",
    Definition:
      "An advisor participating in the service by performing evaluations and making recommendations.",
  },
  {
    Code: "DIS",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "discharger",
    Definition:
      "The practitioner who is responsible for the discharge of a patient from a patient encounter.",
  },
  {
    Code: "ESC",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "escort",
    Definition:
      "Only with Transportation services.  A person who escorts the patient.",
  },
  {
    Code: "REF",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "referrer",
    Definition:
      "A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.",
  },
  {
    Code: "SPRF",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "secondary performer",
    Definition:
      "A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.",
  },
  {
    Code: "PPRF",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "primary performer",
    Definition: "The principal or primary performer of the act.",
  },
  {
    Code: "PART",
    System: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    Display: "Participation",
    Definition:
      "Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.",
  },
  {
    Code: "translator",
    System: "http://terminology.hl7.org/CodeSystem/participant-type",
    Display: "Translator",
    Definition:
      "A translator who is facilitating communication with the patient during the encounter.",
  },
  {
    Code: "emergency",
    System: "http://terminology.hl7.org/CodeSystem/participant-type",
    Display: "Emergency",
    Definition:
      "A person to be contacted in case of an emergency during the encounter.",
  },
];
