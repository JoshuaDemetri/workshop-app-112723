import { Component, Input } from '@angular/core';
import { Video } from 'src/app/app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  @Input() videos: Video[] = [];
  selectedId: string | undefined;
}
