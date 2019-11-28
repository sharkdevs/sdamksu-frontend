import { Component, OnInit } from '@angular/core';
import { DevotionalService } from '../services/devotional.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  lessonCoverImage: string;
  gcCoverImage: string;
  lessonTitle: string;
  constructor(private devotionalService: DevotionalService) { }

  ngOnInit() {
    this.displayQuaterly();
    this.displayGreatHope();
  }

  displayQuaterly() {
    this.devotionalService.getQuaterly().subscribe((quarterly, ) => {
      const { cover, title } = quarterly[0];
      this.lessonCoverImage = cover;
      this.lessonTitle = title;
    })
  }

  displayGreatHope() {
    this.gcCoverImage = '../../../assets/images/great-hope.svg'
  }
}
