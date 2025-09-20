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