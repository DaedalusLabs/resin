export default defineI18nConfig(() => ({
   legacy: false,
   fallbackLocale: "en-US",
   messages: {
      "en-US": {
         buyHomeWithoutBank: "Buy a home without the bank",
         getStarted: "Get started",
         signIn: "Sign in",
         checkCountryAvailability: "Check country availability",
         propertyType: "What kind of property are you looking for?",
         propertyTypes: {
            shortToMediumTermStay: {
               title: "Short to medium term stay",
               description:
                  "Ideal for digital nomads or expats needing temporary housing.",
            },
            longerTermResidentialHouse: {
               title: "A longer term residential house",
               description:
                  "Suitable for families or those looking for a permanent home.",
            },
            commercialProperty: {
               title: "Commercial property",
               description:
                  "Perfect for buying office buildings or retail spaces for business.",
            },
         },
         chooseLocation: "Choose location",
         skip: "Skip",
         fetching: "Fetching Nostr...",
      },
      "nl-NL": {
         buyHomeWithoutBank: "Koop een huis zonder de bank",
         getStarted: "Aan de slag",
         signIn: "Inloggen",
         checkCountryAvailability: "Controleer landbeschikbaarheid",
         propertyType: "Wat voor soort woning zoek je?",
         propertyTypes: {
            shortToMediumTermStay: {
               title: "Korte tot middellange termijn verblijf",
               description:
                  "Ideaal voor digitale nomaden of expats die tijdelijke huisvesting nodig hebben.",
            },
            longerTermResidentialHouse: {
               title: "Een langer termijn woonhuis",
               description:
                  "Geschikt voor gezinnen of mensen die op zoek zijn naar een permanent huis.",
            },
            commercialProperty: {
               title: "Commercieel vastgoed",
               description:
                  "Perfect voor het kopen van kantoorgebouwen of winkelruimtes voor bedrijven.",
            },
         },
         chooseLocation: "Kies locatie",
         skip: "Overslaan",
         fetching: "Nostr ophalen...",
      },
   },
}));
