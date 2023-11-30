import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from './app-types';
import { Observable, map } from 'rxjs';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${apiUrl}/videos`).pipe(
      map((videos) => [
        ...videos,
        {
          title: 'From Map!!',
          author: 'Map',
          id: 'map',
          viewDetails: [],
        },
      ]),
      map((videos) =>
        videos.map((video) => ({ ...video, title: video.title.toUpperCase() }))
      )
    );
  }

  loadSingleVideo(videoId: string): Observable<Video> {
    return this.http.get<Video>(`${apiUrl}/videos/${videoId}`);
  }
}
