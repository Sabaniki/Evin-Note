import {Lecture} from '../add-lecture/add-lecture-card/lecture';

export class User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  profile?: string;
  lectures?: Array<Lecture>;
}
