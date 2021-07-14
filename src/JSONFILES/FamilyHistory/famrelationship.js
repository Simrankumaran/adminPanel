export const Relationship = () => [
  {
    Lvl: 0,
    Code: "FAMMEMB",
    Display: "family member",
    Definition:
      'A relationship between two people characterizing their "familial" relationship',
  },
  {
    Lvl: 1,
    Code: "CHILD",
    Display: "child",
    Definition: "The player of the role is a child of the scoping entity.",
  },
  {
    Lvl: 2,
    Code: "CHLDADOPT",
    Display: "adopted child",
    Definition:
      "The player of the role is a child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.",
  },
  {
    Lvl: 3,
    Code: "DAUADOPT",
    Display: "adopted daughter",
    Definition:
      "The player of the role is a female child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.",
  },
  {
    Lvl: 3,
    Code: "SONADOPT",
    Display: "adopted son",
    Definition:
      "The player of the role is a male child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.",
  },
  {
    Lvl: 2,
    Code: "CHLDFOST",
    Display: "foster child",
    Definition:
      "The player of the role is a child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.",
  },
  {
    Lvl: 3,
    Code: "DAUFOST",
    Display: "foster daughter",
    Definition:
      "The player of the role is a female child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.",
  },
  {
    Lvl: 3,
    Code: "SONFOST",
    Display: "foster son",
    Definition:
      "The player of the role is a male child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.",
  },
  {
    Lvl: 2,
    Code: "DAUC",
    Display: "daughter",
    Definition:
      "Description: The player of the role is a female child (of any type) of scoping entity (parent)",
  },
  {
    Lvl: 3,
    Code: "DAU",
    Display: "natural daughter",
    Definition:
      "The player of the role is a female offspring of the scoping entity (parent).",
  },
  {
    Lvl: 3,
    Code: "STPDAU",
    Display: "stepdaughter",
    Definition:
      "The player of the role is a daughter of the scoping person's spouse by a previous union.",
  },
  {
    Lvl: 2,
    Code: "NCHILD",
    Display: "natural child",
    Definition:
      "The player of the role is an offspring of the scoping entity as determined by birth.",
  },
  {
    Lvl: 3,
    Code: "SON",
    Display: "natural son",
    Definition:
      "The player of the role is a male offspring of the scoping entity (parent).",
  },
  {
    Lvl: 2,
    Code: "SONC",
    Display: "son",
    Definition:
      "Description: The player of the role is a male child (of any type) of scoping entity (parent)",
  },
  {
    Lvl: 3,
    Code: "STPSON",
    Display: "stepson",
    Definition:
      "The player of the role is a son of the scoping person's spouse by a previous union.",
  },
  {
    Lvl: 2,
    Code: "STPCHLD",
    Display: "step child",
    Definition:
      "The player of the role is a child of the scoping person's spouse by a previous union.",
  },
  {
    Lvl: 1,
    Code: "EXT",
    Display: "extended family member",
    Definition:
      "Description: A family member not having an immediate genetic or legal relationship e.g. Aunt, cousin, great grandparent, grandchild, grandparent, niece, nephew or uncle.",
  },
  {
    Lvl: 2,
    Code: "AUNT",
    Display: "aunt",
    Definition:
      "The player of the role is a sister of the scoping person's mother or father.",
  },
  {
    Lvl: 3,
    Code: "MAUNT",
    Display: "maternal aunt",
    Definition:
      "Description:The player of the role is a biological sister of the scoping person's biological mother.",
  },
  {
    Lvl: 3,
    Code: "PAUNT",
    Display: "paternal aunt",
    Definition:
      "Description:The player of the role is a biological sister of the scoping person's biological father.",
  },
  {
    Lvl: 2,
    Code: "COUSN",
    Display: "cousin",
    Definition:
      "The player of the role is a relative of the scoping person descended from a common ancestor, such as a \tgrandparent, by two or more steps in a diverging line.",
  },
  {
    Lvl: 3,
    Code: "MCOUSN",
    Display: "maternal cousin",
    Definition:
      "Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's mother's side, such as a grandparent, by two or more steps in a diverging line.",
  },
  {
    Lvl: 3,
    Code: "PCOUSN",
    Display: "paternal cousin",
    Definition:
      "Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's father's side, such as a grandparent, by two or more steps in a diverging line.",
  },
  {
    Lvl: 2,
    Code: "GGRPRN",
    Display: "great grandparent",
    Definition:
      "The player of the role is a parent of the scoping person's grandparent.",
  },
  {
    Lvl: 3,
    Code: "GGRFTH",
    Display: "great grandfather",
    Definition:
      "The player of the role is the father of the scoping person's grandparent.",
  },
  {
    Lvl: 4,
    Code: "MGGRFTH",
    Display: "maternal great-grandfather",
    Definition:
      "Description:The player of the role is the biological father of the scoping person's biological mother's parent.",
  },
  {
    Lvl: 4,
    Code: "PGGRFTH",
    Display: "paternal great-grandfather",
    Definition:
      "Description:The player of the role is the biological father of the scoping person's biological father's parent.",
  },
  {
    Lvl: 3,
    Code: "GGRMTH",
    Display: "great grandmother",
    Definition:
      "The player of the role is the mother of the scoping person's grandparent.",
  },
  {
    Lvl: 4,
    Code: "MGGRMTH",
    Display: "maternal great-grandmother",
    Definition:
      "Description:The player of the role is the biological mother of the scoping person's biological mother's parent.",
  },
  {
    Lvl: 4,
    Code: "PGGRMTH",
    Display: "paternal great-grandmother",
    Definition:
      "Description:The player of the role is the biological mother of the scoping person's biological father's parent.",
  },
  {
    Lvl: 3,
    Code: "MGGRPRN",
    Display: "maternal great-grandparent",
    Definition:
      "Description:The player of the role is a biological parent of the scoping person's biological mother's parent.",
  },
  {
    Lvl: 3,
    Code: "PGGRPRN",
    Display: "paternal great-grandparent",
    Definition:
      "Description:The player of the role is a biological parent of the scoping person's biological father's parent.",
  },
  {
    Lvl: 2,
    Code: "GRNDCHILD",
    Display: "grandchild",
    Definition:
      "The player of the role is a child of the scoping person's son or daughter.",
  },
  {
    Lvl: 3,
    Code: "GRNDDAU",
    Display: "granddaughter",
    Definition:
      "The player of the role is a daughter of the scoping person's son or daughter.",
  },
  {
    Lvl: 3,
    Code: "GRNDSON",
    Display: "grandson",
    Definition:
      "The player of the role is a son of the scoping person's son or daughter.",
  },
  {
    Lvl: 2,
    Code: "GRPRN",
    Display: "grandparent",
    Definition:
      "The player of the role is a parent of the scoping person's mother or father.",
  },
  {
    Lvl: 3,
    Code: "GRFTH",
    Display: "grandfather",
    Definition:
      "The player of the role is the father of the scoping person's mother or father.",
  },
  {
    Lvl: 4,
    Code: "MGRFTH",
    Display: "maternal grandfather",
    Definition:
      "Description:The player of the role is the biological father of the scoping person's biological mother.",
  },
  {
    Lvl: 4,
    Code: "PGRFTH",
    Display: "paternal grandfather",
    Definition:
      "Description:The player of the role is the biological father of the scoping person's biological father.",
  },
  {
    Lvl: 3,
    Code: "GRMTH",
    Display: "grandmother",
    Definition:
      "The player of the role is the mother of the scoping person's mother or father.",
  },
  {
    Lvl: 4,
    Code: "MGRMTH",
    Display: "maternal grandmother",
    Definition:
      "Description:The player of the role is the biological mother of the scoping person's biological mother.",
  },
  {
    Lvl: 4,
    Code: "PGRMTH",
    Display: "paternal grandmother",
    Definition:
      "Description:The player of the role is the biological mother of the scoping person's biological father.",
  },
  {
    Lvl: 3,
    Code: "MGRPRN",
    Display: "maternal grandparent",
    Definition:
      "Description:The player of the role is the biological parent of the scoping person's biological mother.",
  },
  {
    Lvl: 3,
    Code: "PGRPRN",
    Display: "paternal grandparent",
    Definition:
      "Description:The player of the role is the biological parent of the scoping person's biological father.",
  },
  {
    Lvl: 2,
    Code: "INLAW",
    Display: "inlaw",
    Definition:
      "A relationship between an individual and a member of their spousal partner's immediate family.",
  },
  {
    Lvl: 3,
    Code: "CHLDINLAW",
    Display: "child-in-law",
    Definition:
      "The player of the role is the spouse of scoping person's child.",
  },
  {
    Lvl: 4,
    Code: "DAUINLAW",
    Display: "daughter in-law",
    Definition: "The player of the role is the wife of scoping person's son.",
  },
  {
    Lvl: 4,
    Code: "SONINLAW",
    Display: "son in-law",
    Definition:
      "The player of the role is the husband of scoping person's daughter.",
  },
  {
    Lvl: 3,
    Code: "PRNINLAW",
    Display: "parent in-law",
    Definition:
      "The player of the role is the parent of scoping person's husband or wife.",
  },
  {
    Lvl: 4,
    Code: "FTHINLAW",
    Display: "father-in-law",
    Definition:
      "The player of the role is the father of the scoping person's husband or wife.",
  },
  {
    Lvl: 4,
    Code: "MTHINLAW",
    Display: "mother-in-law",
    Definition:
      "The player of the role is the mother of the scoping person's husband or wife.",
  },
  {
    Lvl: 3,
    Code: "SIBINLAW",
    Display: "sibling in-law",
    Definition:
      "The player of the role is: (1) a sibling of the scoping person's spouse, or (2) the spouse of the scoping person's sibling, or (3) the spouse of a sibling of the scoping person's spouse.",
  },
  {
    Lvl: 4,
    Code: "BROINLAW",
    Display: "brother-in-law",
    Definition:
      "The player of the role is: (1) a brother of the scoping person's spouse, or (2) the husband of the scoping person's sister, or (3) the husband of a sister of the scoping person's spouse.",
  },
  {
    Lvl: 4,
    Code: "SISINLAW",
    Display: "sister-in-law",
    Definition:
      "The player of the role is: (1) a sister of the scoping person's spouse, or (2) the wife of the scoping person's brother, or (3) the wife of a brother of the scoping person's spouse.",
  },
  {
    Lvl: 2,
    Code: "NIENEPH",
    Display: "niece/nephew",
    Definition:
      "The player of the role is a child of scoping person's brother or sister or of the brother or sister of the \tscoping person's spouse.",
  },
  {
    Lvl: 3,
    Code: "NEPHEW",
    Display: "nephew",
    Definition:
      "The player of the role is a son of the scoping person's brother or sister or of the brother or sister of the \tscoping person's spouse.",
  },
  {
    Lvl: 3,
    Code: "NIECE",
    Display: "niece",
    Definition:
      "The player of the role is a daughter of the scoping person's brother or sister or of the brother or sister of the \tscoping person's spouse.",
  },
  {
    Lvl: 2,
    Code: "UNCLE",
    Display: "uncle",
    Definition:
      "The player of the role is a brother of the scoping person's mother or father.",
  },
  {
    Lvl: 3,
    Code: "MUNCLE",
    Display: "maternal uncle",
    Definition:
      "Description:The player of the role is a biological brother of the scoping person's biological mother.",
  },
  {
    Lvl: 3,
    Code: "PUNCLE",
    Display: "paternal uncle",
    Definition:
      "Description:The player of the role is a biological brother of the scoping person's biological father.",
  },
  {
    Lvl: 1,
    Code: "PRN",
    Display: "parent",
    Definition:
      "The player of the role is one who begets, gives birth to, or nurtures and raises the scoping entity (child).",
  },
  {
    Lvl: 2,
    Code: "ADOPTP",
    Display: "adoptive parent",
    Definition:
      "The player of the role (parent) has taken the scoper (child) into their family through legal means and raises them as his or her own child.",
  },
  {
    Lvl: 3,
    Code: "ADOPTF",
    Display: "adoptive father",
    Definition:
      "The player of the role (father) is a male who has taken the scoper (child) into their family through legal means and raises them as his own child.",
  },
  {
    Lvl: 3,
    Code: "ADOPTM",
    Display: "adoptive mother",
    Definition:
      "The player of the role (father) is a female who has taken the scoper (child) into their family through legal means and raises them as her own child.",
  },
  {
    Lvl: 2,
    Code: "FTH",
    Display: "father",
    Definition:
      "The player of the role is a male who begets or raises or nurtures the scoping entity (child).",
  },
  {
    Lvl: 3,
    Code: "FTHFOST",
    Display: "foster father",
    Definition:
      "The player of the role (parent) who is a male state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.\n\n                        The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.",
  },
  {
    Lvl: 3,
    Code: "NFTH",
    Display: "natural father",
    Definition:
      "The player of the role is a male who begets the scoping entity (child).",
  },
  {
    Lvl: 4,
    Code: "NFTHF",
    Display: "natural father of fetus",
    Definition: "Indicates the biologic male parent of a fetus.",
  },
  {
    Lvl: 3,
    Code: "STPFTH",
    Display: "stepfather",
    Definition:
      "The player of the role is the husband of scoping person's mother and not the scoping person's natural father.",
  },
  {
    Lvl: 2,
    Code: "MTH",
    Display: "mother",
    Definition:
      "The player of the role is a female who conceives, gives birth to, or raises and nurtures the scoping entity (child).",
  },
  {
    Lvl: 3,
    Code: "GESTM",
    Display: "gestational mother",
    Definition:
      "The player is a female whose womb carries the fetus of the scoper.  Generally used when the gestational mother and natural mother are not the same.",
  },
  {
    Lvl: 3,
    Code: "MTHFOST",
    Display: "foster mother",
    Definition:
      "The player of the role (parent) who is a female state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.\n\n                        The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.",
  },
  {
    Lvl: 3,
    Code: "NMTH",
    Display: "natural mother",
    Definition:
      "The player of the role is a female who conceives or gives birth to the scoping entity (child).",
  },
  {
    Lvl: 4,
    Code: "NMTHF",
    Display: "natural mother of fetus",
    Definition:
      "The player is the biologic female parent of the scoping fetus.",
  },
  {
    Lvl: 3,
    Code: "STPMTH",
    Display: "stepmother",
    Definition:
      "The player of the role is the wife of scoping person's father and not the scoping person's natural mother.",
  },
  {
    Lvl: 2,
    Code: "NPRN",
    Display: "natural parent",
    Definition: "natural parent",
  },
  {
    Lvl: 2,
    Code: "PRNFOST",
    Display: "foster parent",
    Definition:
      "The player of the role (parent) who is a state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.\n\n                        The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.",
  },
  {
    Lvl: 2,
    Code: "STPPRN",
    Display: "step parent",
    Definition:
      "The player of the role is the spouse of the scoping person's parent and not the scoping person's natural parent.",
  },
  {
    Lvl: 1,
    Code: "SIB",
    Display: "sibling",
    Definition:
      "The player of the role shares one or both parents in common with the scoping entity.",
  },
  {
    Lvl: 2,
    Code: "BRO",
    Display: "brother",
    Definition:
      "The player of the role is a male sharing one or both parents in common with the scoping entity.",
  },
  {
    Lvl: 3,
    Code: "HBRO",
    Display: "half-brother",
    Definition:
      "The player of the role is a male related to the scoping entity by sharing only one biological parent.",
  },
  {
    Lvl: 3,
    Code: "NBRO",
    Display: "natural brother",
    Definition:
      "The player of the role is a male having the same biological parents as the scoping entity.",
  },
  {
    Lvl: 4,
    Code: "TWINBRO",
    Display: "twin brother",
    Definition:
      "The scoper was carried in the same womb as the male player and shares common biological parents.",
  },
  {
    Lvl: 5,
    Code: "FTWINBRO",
    Display: "fraternal twin brother",
    Definition:
      "The scoper was carried in the same womb as the male player and shares common biological parents but is the product of a distinct egg/sperm pair.",
  },
  {
    Lvl: 5,
    Code: "ITWINBRO",
    Display: "identical twin brother",
    Definition:
      "The male scoper is an offspring of the same egg-sperm pair as the male player.",
  },
  {
    Lvl: 3,
    Code: "STPBRO",
    Display: "stepbrother",
    Definition:
      "The player of the role is a son of the scoping person's stepparent.",
  },
  {
    Lvl: 2,
    Code: "HSIB",
    Display: "half-sibling",
    Definition:
      "The player of the role is related to the scoping entity by sharing only one biological parent.",
  },
  {
    Lvl: 3,
    Code: "HSIS",
    Display: "half-sister",
    Definition:
      "The player of the role is a female related to the scoping entity by sharing only one biological parent.",
  },
  {
    Lvl: 2,
    Code: "NSIB",
    Display: "natural sibling",
    Definition:
      "The player of the role has both biological parents in common with the scoping entity.",
  },
  {
    Lvl: 3,
    Code: "NSIS",
    Display: "natural sister",
    Definition:
      "The player of the role is a female having the same biological parents as the scoping entity.",
  },
  {
    Lvl: 4,
    Code: "TWINSIS",
    Display: "twin sister",
    Definition:
      "The scoper was carried in the same womb as the female player and shares common biological parents.",
  },
  {
    Lvl: 5,
    Code: "FTWINSIS",
    Display: "fraternal twin sister",
    Definition:
      "The scoper was carried in the same womb as the female player and shares common biological parents but is the product of a distinct egg/sperm pair.",
  },
  {
    Lvl: 5,
    Code: "ITWINSIS",
    Display: "identical twin sister",
    Definition:
      "The female scoper is an offspring of the same egg-sperm pair as the female player.",
  },
  {
    Lvl: 3,
    Code: "TWIN",
    Display: "twin",
    Definition:
      "The scoper and player were carried in the same womb and shared common biological parents.",
  },
  {
    Lvl: 4,
    Code: "FTWIN",
    Display: "fraternal twin",
    Definition:
      "The scoper and player were carried in the same womb and share common biological parents but are the product of distinct egg/sperm pairs.",
  },
  {
    Lvl: 4,
    Code: "ITWIN",
    Display: "identical twin",
    Definition:
      "The scoper and player are offspring of the same egg-sperm pair.",
  },
  {
    Lvl: 2,
    Code: "SIS",
    Display: "sister",
    Definition:
      "The player of the role is a female sharing one or both parents in common with the scoping entity.",
  },
  {
    Lvl: 3,
    Code: "STPSIS",
    Display: "stepsister",
    Definition:
      "The player of the role is a daughter of the scoping person's stepparent.",
  },
  {
    Lvl: 2,
    Code: "STPSIB",
    Display: "step sibling",
    Definition:
      "The player of the role is a child of the scoping person's stepparent.",
  },
  {
    Lvl: 1,
    Code: "SIGOTHR",
    Display: "significant other",
    Definition:
      "A person who is important to one's well being; especially a spouse or one in a similar relationship.  (The player is the one who is important)",
  },
  {
    Lvl: 2,
    Code: "DOMPART",
    Display: "domestic partner",
    Definition:
      "The player of the role cohabits with the scoping person but is not the scoping person's spouse.",
  },
  {
    Lvl: 2,
    Code: "FMRSPS",
    Display: "former spouse",
    Definition:
      "Player of the role was previously joined to the scoping person in marriage and this marriage is now dissolved and inactive.\n\n                        \n                           Usage Note: This is significant to indicate as some jurisdictions have different legal requirements for former spouse to access the patient's record, from a general friend.",
  },
  {
    Lvl: 2,
    Code: "SPS",
    Display: "spouse",
    Definition:
      "The player of the role is a marriage partner of the scoping person.",
  },
  {
    Lvl: 3,
    Code: "HUSB",
    Display: "husband",
    Definition:
      "The player of the role is a man joined to a woman (scoping person) in marriage.",
  },
  {
    Lvl: 3,
    Code: "WIFE",
    Display: "wife",
    Definition:
      "The player of the role is a woman joined to a man (scoping person) in marriage.",
  },
];
