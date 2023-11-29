import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss'],
})
export class StatFiltersComponent implements OnDestroy {
  filters: FormGroup<{
    title: FormControl<string | null>;
    author: FormControl<string | null>;
  }>;
  subscriptions: Subscription[] = [];

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['', [Validators.minLength(3), Validators.required]],
      author: ['', [Validators.minLength(3), Validators.required]],
    });

    this.subscriptions.push(
      this.filters.controls.title.valueChanges.subscribe((value) => {
        console.log(value);
      }),
      this.filters.controls.author.valueChanges.subscribe((value) => {
        console.log(value);
      })
    );
  }

  submit() {
    console.log(this.filters.value);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
