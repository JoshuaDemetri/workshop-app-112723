import { Component } from '@angular/core';
import { Video } from '../app-types';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.angularbootcamp.com/videos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  selectedVideo: Video | undefined;
  videoList: Video[] = [];

  constructor(http: HttpClient) {
    http.get<Video[]>(apiUrl).subscribe((videos) => {
      this.videoList = videos;
    });
  }

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
