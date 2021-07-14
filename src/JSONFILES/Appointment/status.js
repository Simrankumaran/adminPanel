export const Status = () => [
  {
    Code: "proposed",
    Display: "Proposed",
    Definition:
      "None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.",
    "Canonical Status": "",
  },
  {
    Code: "pending",
    Display: "Pending",
    Definition:
      "Some or all of the participant(s) have not finalized their acceptance of the appointment request.",
    "Canonical Status": "~draft",
  },
  {
    Code: "booked",
    Display: "Booked",
    Definition:
      "All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.",
    "Canonical Status": "~accepted",
  },
  {
    Code: "arrived",
    Display: "Arrived",
    Definition:
      "The patient/patients has/have arrived and is/are waiting to be seen.",
    "Canonical Status": "~arrived",
  },
  {
    Code: "fulfilled",
    Display: "Fulfilled",
    Definition:
      "The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.",
    "Canonical Status": "~complete",
  },
  {
    Code: "cancelled",
    Display: "Cancelled",
    Definition: "The appointment has been cancelled.",
    "Canonical Status": "~abandoned",
  },
  {
    Code: "noshow",
    Display: "No Show",
    Definition:
      "Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).",
    "Canonical Status": "~suspended",
  },
  {
    Code: "entered-in-error",
    Display: "Entered in error",
    Definition:
      "This instance should not have been part of this patient's medical record.",
    "Canonical Status": "~error",
  },
  {
    Code: "checked-in",
    Display: "Checked In",
    Definition:
      "When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).",
    "Canonical Status": "~partial",
  },
  {
    Code: "waitlist",
    Display: "Waitlisted",
    Definition:
      "The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available.\nA specific time might or might not be pre-allocated.",
    "Canonical Status": "",
  },
];
