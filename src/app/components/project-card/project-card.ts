import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard implements OnInit {
      showMore = false;

        screenshot: string[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 24; i++) {
      this.screenshot.push(`Screenshot (${i + 97}).png`);
    }
  }
}
