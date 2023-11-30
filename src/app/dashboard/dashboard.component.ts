import { Component } from '@angular/core';
import { Video } from '../app-types';
import { Observable, filter, map, shareReplay, switchMap } from 'rxjs';
import { VideoDataService } from '../video-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  selectedVideo: Observable<Video | undefined>;
  videoList: Observable<Video[]>;

  constructor(svc: VideoDataService, route: ActivatedRoute) {
    this.videoList = svc.loadVideos();

    this.selectedVideo = route.queryParamMap.pipe(
      map((params) => params.get('videoId') as string),
      filter((id) => !!id),
      switchMap((id) => svc.loadSingleVideo(id)),
      shareReplay(1)
    );
  }
}
