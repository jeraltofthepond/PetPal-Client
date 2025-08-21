export interface Pet {
  id: number;
  ownerId: number;
  nickname: string;
  species: string;
  nextFeed: Date | null;
  nextVet: Date | null;
  photo: string | null;
}
