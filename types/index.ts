export interface IUsers {
  [key: string]: {
    authorNick: string;
    authorsAvatarUrl: string;
    flickr: string;
    twitter: string;
    instagram: string;
    steam: string;
    othersocials: string[];
  };
}
