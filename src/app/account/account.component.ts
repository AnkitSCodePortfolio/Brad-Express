import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  providers: [UserService],
})
export class AccountComponent {

}
