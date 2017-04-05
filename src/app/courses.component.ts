import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector : 'courses',
    template : `<ul>
    <li *ngFor="#course of courses">
        {{course}}
    </li>
</ul>`,
    providers : [CourseService]
})

export class CoursesComponent{
    courses : string[];
    constructor(courseService : CourseService){
    this.courses = courseService.getCourse();
  }
}