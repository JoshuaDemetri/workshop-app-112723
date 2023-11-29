import { Component } from '@angular/core';
import { Video } from '../app-types';
import { Observable } from 'rxjs';
import { VideoDataService } from '../video-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  selectedVideo: Video | undefined;
  videoList: Observable<Video[]>;

  constructor(svc: VideoDataService) {
    this.videoList = svc.loadVideos();
  }

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
