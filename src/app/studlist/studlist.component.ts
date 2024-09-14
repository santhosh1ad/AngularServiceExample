import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-studlist',
  standalone: true,
  imports: [],
  templateUrl: './studlist.component.html',
  styleUrl: './studlist.component.css',
  providers: [StudentServiceService],
})
export class StudlistComponent {
  s2: StudentServiceService;
  constructor(s2: StudentServiceService) {
    this.s2 = s2;
  }
}
