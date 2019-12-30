import {Lecture} from '../add-lecture/lecture';

export class User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  profile?: string;
  lectures?: Array<Lecture>;
}
