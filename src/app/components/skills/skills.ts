import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, inject, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
    animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.icon_', [
          style({ transform: 'scale(0)', opacity: 0 }),
          stagger(150, [
          animate(
            '400ms ease-out',
            keyframes([
              style({ transform: 'scale(0)', opacity: 0, offset: 0 }),
              style({ transform: 'scale(5)', opacity: 0, offset: 0.7 }), // overshoot
              style({ transform: 'scale(1)', opacity: 1, offset: 0.9 }),
            ])
          )
        ])
        ])
      ])
    ])
  ]
})
export class Skills {
      Skills = [
    // Frontend
    { name: 'Angular', icon: 'fa-brands fa-angular', color: 'text-danger' },
    { name: 'TypeScript', icon: 'bi-filetype-tsx', color: 'text-primary' },
    { name: 'Bootstrap', icon: 'bi-bootstrap-fill', color: 'text-purple' },
    { name: 'HTML', icon: 'bi-filetype-html', color: 'text-orange' },
    { name: 'CSS/SCSS', icon: 'bi-filetype-scss', color: 'text-pink' },

    // Backend
    { name: 'Node.js', icon: 'bi-node-plus-fill', color: 'text-success' },
    { name: 'Express.js', icon: 'bi-router-fill', color: 'text-secondary' },
    { name: 'REST APIs', icon: 'bi-arrow-left-right-square', color: 'text-dark' },

    // Database
    { name: 'MongoDB', icon: 'bi-database-fill-check', color: 'text-success' },
    { name: 'SQL', icon: 'bi-database-gear', color: 'text-info' },

    // Languages
    { name: 'C++', icon: 'fa-solid fa-c', color: 'text-primary' },
    { name: 'Java', icon: 'bi-cup-hot-fill', color: 'text-danger' },
    { name: 'JavaScript', icon: 'bi-filetype-js', color: 'text-warning' },

    // Tools & Concepts
    { name: 'Git & GitHub', icon: 'bi-git', color: 'text-dark' },
    { name: 'DSA', icon: 'bi-diagram-3-fill', color: 'text-purple' },
    { name: 'OOP', icon: 'bi-puzzle-fill', color: 'text-info' },
  ];







 @ViewChild('skills', { static: false }) skillsSection!: ElementRef;

  isVisible = false;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.isVisible = false; // initial state
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Check visibility on page load (for direct #link)
    window.addEventListener('load', () => this.checkVisibility());

    // Check visibility when jumping via anchor links
    window.addEventListener('hashchange', () => this.checkVisibility());
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    if (!this.skillsSection) return;

    const element = this.skillsSection.nativeElement;
    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    this.isVisible = inView; // triggers all animations
  }








}



