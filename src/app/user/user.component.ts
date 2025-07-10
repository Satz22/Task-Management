import {
  Component,
  computed,
  signal,
  Input,
  input,
  Output,
  output,
  EventEmitter,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // // // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // // imagePath = computed(() => 'assets/users/' + this.avatar());

  // // onSelectUser() {
  // //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // // }

  // // For Input decorateor
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  // @Output() select = new EventEmitter();
  // //For input function

  // // avatar = input.required<string>();
  // // name = input.required<string>();
  // // id = input.required<string>();
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  // onSelectUser() {
  //   this.select.emit(this.id);
  // }

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
