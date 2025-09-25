import { Component, AfterViewInit, ElementRef, ViewChild, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  animations: [
    // Fade & slide the entire section
    trigger('fadeSlide', [
      state('hidden', style({ opacity: 0, transform: 'translateY(300px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('800ms ease-out')),
      transition('visible => hidden', animate('600ms ease-in')),
    ]),



    // Slide text
    trigger('slideText', [
      state('hidden', style({ opacity: 0, transform: 'translateX(700px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('1000ms 600ms ease-out')), // 600ms delay
      transition('visible => hidden', animate('800ms ease-in')),
    ]),

    // Slide image (outer container if needed)
    trigger('slideImage', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('1000ms ease-out')),
      transition('visible => hidden', animate('800ms ease-in')),
    ]),
  ]
})
export class About implements OnInit, AfterViewInit {
  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;

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
    if (!this.aboutSection) return;

    const element = this.aboutSection.nativeElement;
    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    this.isVisible = inView; // triggers all animations
  }
}
