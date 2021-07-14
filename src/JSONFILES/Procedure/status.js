export const ProcStatus = () => [
  {
    Code: "preparation",
    Display: "Preparation",
    Definition:
      "The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.",
    "Canonical Status": "~planned",
  },
  {
    Code: "in-progress",
    Display: "In Progress",
    Definition: "The event is currently occurring.",
    "Canonical Status": "~active",
  },
  {
    Code: "not-done",
    Display: "Not Done",
    Definition:
      "The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.",
    "Canonical Status": "~abandoned",
  },
  {
    Code: "on-hold",
    Display: "On Hold",
    Definition:
      "The event has been temporarily stopped but is expected to resume in the future.",
    "Canonical Status": "~suspended",
  },
  {
    Code: "stopped",
    Display: "Stopped",
    Definition:
      "The event was terminated prior to the full completion of the intended activity but after at least some of the 'main' activity (beyond preparation) has occurred.",
    "Canonical Status": "~failed",
  },
  {
    Code: "completed",
    Display: "Completed",
    Definition: "The event has now concluded.",
    "Canonical Status": "~complete",
  },
  {
    Code: "entered-in-error",
    Display: "Entered in Error",
    Definition:
      'This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).',
    "Canonical Status": "~error",
  },
  {
    Code: "unknown",
    Display: "Unknown",
    Definition:
      'The authoring/source system does not know which of the status values currently applies for this event.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.',
    "Canonical Status": "~unknown",
  },
];
