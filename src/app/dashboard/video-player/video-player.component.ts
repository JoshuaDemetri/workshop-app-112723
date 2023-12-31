import { Component, Input } from '@angular/core';
import { Video } from 'src/app/app-types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  @Input() video: Video | undefined;
}
