export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      officialArtwork: {
        frontDefault: string;
      };
    };
  };
}
