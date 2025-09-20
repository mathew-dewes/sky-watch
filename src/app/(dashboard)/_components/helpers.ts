export function degreesToCompass(deg: number): string {
  const directions = [
    "N",  "NNE", "NE",  "ENE",
    "E",  "ESE", "SE",  "SSE",
    "S",  "SSW", "SW",  "WSW",
    "W",  "WNW", "NW",  "NNW"
  ];
  const index = Math.round(deg / 22.5) % 16;
  return directions[index];
}

export function hoursBetween(start: number, end: number): { rounded: number; precise: number } {
  const diffSeconds = end - start;

  const precise = diffSeconds / 3600;
  const rounded = Number(precise.toFixed(2)); 

  return { rounded, precise };
}

export function epochToLocal(epoch: number): string {
        const date = new Date(epoch * 1000); 

        return date.toLocaleString("en-NZ", {

            hour: "2-digit",
            minute: "2-digit",
            hour12: false, 
        });
    }


    export function epochToLocalShort(epoch: number): string {
        const date = new Date(epoch * 1000); 

        return date.toLocaleString("en-NZ", {

            hour: "numeric",
            hour12: true, 
        });
    }



    export const locations = [
  "Auckland",
  "Wellington",
  "Christchurch",
  "Hamilton",
  "Tauranga",
  "Napier",
  "Hastings",
  "Dunedin",
  "Palmerston North",
  "Nelson",
  "Rotorua",
  "Whangārei",
  "New Plymouth",
  "Invercargill",
  "Upper Hutt",
  "Whanganui",
  "Gisborne",
  "Porirua",
  "Lower Hutt",
  "Kapiti",
  "Blenheim",
  "Pukekohe",
  "Taupō",
  "Masterton",
  "Cambridge",
  "Levin",
  "Rolleston",
  "Ashburton",
  "Feilding",
  "Timaru",
  "Tokoroa",
  "Richmond",
  "Te Awamutu",
  "Whakatāne",
  "Oamaru",
  "Kerikeri",
  "Huntly",
  "Paraparaumu",
  "Greymouth",
  "Motueka",
  "Waiuku",
  "Cromwell",
  "Wānaka",
  "Queenstown",
  "Te Puke",
  "Balclutha",
  "Kaitaia",
  "Matamata",
  "Kaiapoi",
  "Foxton",
  "Wairoa",
  "Hāwera",
  "Thames",
  "Whitianga",
  "Paeroa",
  "Dargaville",
  "Tūrangi",
  "Waimate",
  "Westport",
  "Rangiora",
  "Lincoln",
  "Helensville",
  "Picton",
  "Ōpōtiki",
  "Ōamaru",
  "Alexandra",
  "Gore",
  "Te Kūiti",
  "Taumarunui",
  "Leeston",
  "Martinborough",
  "Stratford",
  "Darfield",
  "Milton",
  "Winton",
  "Oxford",
  "Ngāruawāhia",
  "Hokitika",
  "Kaikohe",
  "Reefton",
  "Kaikōura",
  "Methven",
  "Te Aroha",
  "Putāruru",
  "Wellsford",
  "Morrinsville",
  "Tīrau",
  "Katikati",
  "Warkworth",
  "Tapanui",
  "Raglan",
  "Whangamatā",
  "Edgecumbe",
  "Te Anau",
  "Murupara",
  "Ōtaki"
]

