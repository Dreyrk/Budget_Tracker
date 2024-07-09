import { Color } from "@/constants/types/items";

export const getAllColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch("https://csscolorsapi.com/api/colors");

    if (res.ok) {
      const data: { colors: Color[] } = await res.json();
      return data.colors.map(({ name, hex }) => ({ name, hex: `#${hex}` }));
    } else {
      console.error(`Cannot fetch colors api`);
      return [{ name: "Noir", hex: "#000000" }];
    }
  } catch (e) {
    throw new Error(`Error in getAllColors: ${(e as Error).message}`);
  }
};
