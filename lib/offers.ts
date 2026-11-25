/** Content of the Angebotsseite — the client's wording from her Miro board (25 Nov), unchanged. */

export type Plan = {
  id: string;
  name: string;
  price: string;
  intro: string[];
  duration: string;
  tagline: string;
  included: { text: string; note?: boolean }[];
  /** how many "Included" lines stay visible on the closed card (layout A) */
  preview: number;
  footnote?: string;
  secret?: { title: string; tagline: string; text: string[] };
  invest: string;
  instalmentLead: string;
  instalments: string[];
  after: string[];
};

const COMPANY =
  "Du möchtest die Begleitung über dein Unternehmen buchen oder von deinem Arbeitgeber finanzieren lassen? Abhängig vom gewünschten Auftrags- und Abstimmungsrahmen gelten individuelle Konditionen. Bitte kontaktiere mich vor der Buchung per E-Mail.";
const START = "Die inhaltliche Zusammenarbeit beginnt mit deiner ersten Session.";

export const PLANS: Plan[] = [
  {
    id: "clarity-intensive",
    name: "Clarity Intensive",
    price: "1.595,- €",
    intro: [
      "Für Klient:innen, die an einem konkreten Punkt stehen, Klarheit brauchen und eine bewusste Entscheidung treffen wollen.",
    ],
    duration: "6 Wochen 1:1 Begleitung",
    tagline: "You & me. One focused shift. For the decision that can’t wait.",
    included: [
      { text: "3 private 1:1 Sessions, jeweils online für 60 Minuten" },
      { text: "3 Telegram Support-Slots" },
      { text: "Mindset & Clarity" },
      { text: "individuelle Analyse der aktuellen Situation" },
      { text: "Perspektivenwechsel und Aufdecken mentaler Begrenzungen" },
      { text: "Decision Making" },
      { text: "klare Ausrichtung auf das, was als Nächstes aufgebaut werden soll" },
      { text: "erste Impulse aus meinem Mental Reconditioning Ansatz" },
      { text: "Clarity Mirror Access zwischen den Sessions" },
    ],
    preview: 9,
    invest: "Investition für Privatzahler:innen: 1.595 €",
    instalmentLead: "Alternativ ist eine Zahlung in zwei Teilbeträgen möglich:",
    instalments: [
      "1.000,- € innerhalb von sieben Kalendertagen nach Rechnungsstellung",
      "595,- € 30 Kalendertage nach Beginn der Begleitung",
    ],
    after: [START, COMPANY],
  },
  {
    id: "ascent",
    name: "Ascent",
    price: "3.095,- €",
    intro: [
      "Du willst nicht nur Klarheit, sondern bist bereit, eine getroffene Entscheidung wirklich durch Veränderung hindurch zu tragen?",
      "Du erkennst nicht nur, was sich verändern muss. Du arbeitest daran, alte Denk- und Reaktionsmuster zu unterbrechen, neue mentale Ausrichtungen aufzubauen und deine Entscheidung zunehmend in deinem Denken, Handeln und Alltag zu verkörpern.",
    ],
    duration: "12 Wochen intensive 1:1 Begleitung",
    tagline: "You & me. Deep transformation. Move what you already know needs to change.",
    included: [
      { text: "6 Private 1:1 Sessions, jeweils online für 75 Minuten" },
      { text: "6 Telegram Support-Slots" },
      { text: "Clarity Mirror Access über die gesamten 12 Wochen" },
      { text: "Mindset & Clarity" },
      { text: "Decision Making" },
      { text: "Conscious Leadership, durch den Change" },
      { text: "Begleitung durch konkrete Veränderungsphasen" },
      { text: "Metacognition" },
      { text: "Deconditioning der in dieser Zusammenarbeit geltenden Limitierungen" },
      { text: "intensives Mental Rehearsal" },
      { text: "Formulierung deiner persönlichen Autosuggestion*" },
      { text: "Suggestion* im Call, auf Wunsch, inkl. Induktionsprozess" },
      { text: "Embodiment" },
      { text: "Beyond the Mental Work: individuelle Impulse aus dem Resilienz Coaching." },
      {
        text: "Erstellung eines individuellen weekly private & business plan, um die Regulation in dein Business zu integrieren",
      },
      { text: "dein persönlicher Women’s Add-on" },
    ],
    preview: 7,
    footnote: "*Autosuggestion: Du suggerierst dir selbst, Suggestion: Ich suggeriere dir.",
    invest: "Investition für Privatzahler:innen: 3.095,- €",
    instalmentLead: "Alternativ ist eine Zahlung in 2 monatlichen Raten à 1.547,50 € möglich:",
    instalments: [
      "erste Rate: innerhalb von 7 Kalendertagen nach Rechnungsstellung",
      "zweite Rate: 30 Kalendertage nach Beginn der Begleitung",
    ],
    after: [START, COMPANY],
  },
  {
    id: "ascendancy",
    name: "Ascendancy",
    price: "8.145,- €",
    intro: [
      "Du suchst nicht nur Klarheit über eine einzelne Entscheidung sondern bist bereit, größere persönliche und berufliche Veränderungen bewusst aufzubauen und langfristig zu verkörpern?",
      "Wir arbeiten 6 Monate mit deiner gesamten Journey: Mindset & Clarity → Decision Making → Conscious Leadership through change with Mental Reconditioning → Embodiment → Ascent",
      "Dabei verbinde ich Consulting, Mentoring & Strategic Advisory individuell mit dem, was du in deiner aktuellen Situation wirklich brauchst.",
    ],
    duration: "6 Monate intensive 1:1 Begleitung",
    tagline: "You and me + a selected circle. Build what you are ready to embody.",
    included: [
      { text: "13 Private 1:1 Sessions, jeweils online für 90 Minuten" },
      { text: "4 Secret Space Group Sessions, jeweils online für 90 Minuten" },
      {
        text: "Deine ersten 5 Sessions gehören ausschließlich dir und deiner individuellen Entwicklung. Ab dem dritten Monat öffnet sich zusätzlich der Secret Space. Deine private 1:1 Begleitung läuft dabei selbstverständlich weiter.",
        note: true,
      },
      { text: "9 Telegram Support-Slots" },
      { text: "Clarity Mirror Access über die gesamten 6 Monate" },
      { text: "tiefgehende Mindset- und Clarity Arbeit" },
      { text: "Decision Making bei persönlichen und beruflichen Entscheidungen" },
      { text: "vollständiger Mental Reconditioning Prozess aus meinen Grafiken" },
      { text: "strategische Perspektivenwechsel & Challenging bestehender Annahmen" },
      { text: "Begleitung durch den Change und größere Veränderungsphasen" },
      { text: "Embodiment & bewusste Self-Leadership" },
      { text: "Im Kontext: intensives Reconditioning" },
      { text: "Beyond the Mental Work: individuelle Impulse aus dem Resilienz Coaching." },
      {
        text: "Erstellung eines individuellen weekly private & business plan, um die Regulation in dein Business zu integrieren",
      },
      { text: "dein persönlicher Women’s Add-on" },
      { text: "Secret Space Access nach deiner individuellen Einstiegsphase" },
    ],
    preview: 5,
    secret: {
      title: "The Secret Space",
      tagline: "Grow individually. Ascend together.",
      text: [
        "Nach deiner 5. privaten Session öffnet sich zusätzlich der Secret Space.",
        "Du triffst dort in regelmäßigen Group Sessions auf weitere ausgewählte Klient:innen. Ihr könnt Fortschritte, Erfahrungen und Herausforderungen teilen, neue Perspektiven gewinnen und durch das Miteinander wachsen.",
        "Wichtig: Die 1:1 Sessions laufen selbstverständlich weiterhin alle zwei Wochen. Der Secret Space ersetzt keine persönliche Session, sondern kommt on top dazu. Du erhältst den Zugang entsprechend dem Ablauf deiner Begleitung.",
      ],
    },
    invest: "Investition für Privatzahler:innen: 8.145,- €",
    instalmentLead: "Alternativ ist eine Zahlung in vier monatlichen Raten à 2.138,75 € möglich:",
    instalments: [
      "erste Rate: innerhalb von sieben Kalendertagen nach Rechnungsstellung",
      "zweite Rate: 30 Kalendertage nach Beginn der Begleitung",
      "dritte Rate: 60 Kalendertage nach Beginn der Begleitung",
      "vierte Rate: 90 Kalendertage nach Beginn der Begleitung",
    ],
    after: [
      START,
      "Der Gesamtpreis bei Ratenzahlung beträgt 8.555,- € inklusive eines Ratenzahlungszuschlags von 410,- €.",
      COMPANY,
    ],
  },
];
