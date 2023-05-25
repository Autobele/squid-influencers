export interface Post {
  _id:         string;
  obtidoEm:    Date;
  origem:      string;
  uid:         string;
  tags:        string[];
  link:        string;
  tipo:        string;
  upvotes:     number;
  comentarios: number;
  criadoEm:    Date;
  legenda:     string;
  usuario:     Usuario;
  localizacao: null;
  imagens:     Imagens;
  metadados:   Metadados;
  referencias: Referencia[];
  lastUpdate:  Date;
}

export interface Imagens {
  resolucaoPadrao: ResolucaoMedia;
  resolucaoMedia:  ResolucaoMedia;
  thumbnail:       ResolucaoMedia;
}

export interface ResolucaoMedia {
  url:    string;
  width:  number;
  height: number;
}

export interface Metadados {
  filter:         string;
  users_in_photo: UserInPhoto[];
  engagement:     number;
  impressions:    number;
  reach:          number;
  saved:          number;
}

export interface Referencia {
  status:        string;
  id:            string;
  isInfluencer?: boolean;
  type?:         string;
  oldId?:        string;
  tipo?:         string;
}

export interface Usuario {
  id:       string;
  username: string;
  foto:     string;
  nome:     string;
}


export interface UserInPhoto {
  user:     User;
  position: Position;
}

export interface Position {
  x: number;
  y: number;
}

export interface User {
  username: string;
}
