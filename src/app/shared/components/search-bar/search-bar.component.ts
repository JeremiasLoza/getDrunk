import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkService } from 'src/app/get-drunk/services/drink.service';

@Component({
  selector: 'shared-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  public newTag: string = '';

  constructor(private drinkService: DrinkService, private router: Router) { }

  searchTag() {
    this.newTag = this.tagInput.nativeElement.value;

    if(this.newTag === '') return;

    this.router.navigate(['/search', this.newTag]);

    this.tagInput.nativeElement.value = '';
  }
}
