import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-devotional-resource',
  templateUrl: './devotional-resource.component.html',
  styleUrls: ['./devotional-resource.component.scss']
})
export class DevotionalResourceComponent implements OnInit {
  @Input() coverImage: string;
  lessonTitle: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }


}
