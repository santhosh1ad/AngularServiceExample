import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css',
  providers: [StudentServiceService],
})
export class StudentDataComponent {
  s1: StudentServiceService;
  constructor( s1:StudentServiceService)
  {
    this.s1=s1;
  }
}
