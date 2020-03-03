import { Injectable } from '@angular/core';

import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  emit(notification) {
    this.snackBar.open(notification, 'OK', { duration: 3000 });
  }
}
