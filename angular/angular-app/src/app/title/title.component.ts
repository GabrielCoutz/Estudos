import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() title: string = 'título';

  ngOnDestroy(): void {
    console.log('sumiu');
  }

  ngOnInit(): void {
    console.log('olha ele ae!');
  }
}
