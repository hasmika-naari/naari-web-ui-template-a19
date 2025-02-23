import { Component } from '@angular/core';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { TablesOfContentComponent } from './tables-of-content/tables-of-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-l-course-details',
    imports: [TablesOfContentComponent, ReviewsComponent, AboutCourseComponent, AttachmentsComponent, MatCardModule, MatButtonModule],
    templateUrl: './l-course-details.component.html',
    styleUrl: './l-course-details.component.scss'
})
export class LCourseDetailsComponent {}