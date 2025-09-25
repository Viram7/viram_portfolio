import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { BgImage } from "../bg-image/bg-image";
import { map } from 'rxjs';
import { TypewriterService } from '../../services/typewriter-service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [BgImage,AsyncPipe,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  isSidebarOpen: boolean = false;

titles = ['FULL', 'STACK', 'DEVELOPER'];
classes = ['text-danger', 'text-white', 'text-primary']; // different colors
tags = ['span', 'span', 'span']; // can be different tags if you want

typewriterService = inject(TypewriterService);

typedWords$ = this.typewriterService.getTypewriterEffectWithColors(this.titles);

  @ViewChild('sidebar_id') sidebar !: ElementRef<HTMLDivElement>;




  openSidebar(): void {
    this.isSidebarOpen = true;
  setTimeout(() => {
    this.sidebar.nativeElement.focus();
  }, 0);

  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
    console.log("Sidebar closed");
  }

  // toggleSidebar(): void {
  //   this.isSidebarOpen = !this.isSidebarOpen;
  // }
}
