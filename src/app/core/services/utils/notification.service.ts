import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}
  /**
   * Display the Snackbar message with a specific background and text
   * @param background -Background Snackbar (CSS class)
   * @param message -Snackbar message text
   * @param time -message display time (optional)
   *
   */
  private gSnackbar(background: string, message: string, time?: number) {
    this.snackBar.open(message, 'بستن', {
      duration: time ? time : 3000,
      verticalPosition: 'top', // موقعیت عمودی پیغام (top/bottom)
      horizontalPosition: 'end', // موقعیت افقی پیغام (start/end/center)
      panelClass: ['text-white', background, 'text-center'],
    });
  }
  /**
   * Display success message with green background
   * @param message -The text of the success message
   * @param time  -message display time
   */
  public openSuccess(message: string, time?: number) {
    this.gSnackbar('bg-green-500', message, time);
  }
  /**
   * Display danger message with red background
   * @param message -the text of the danger message
   * @param time -message display time
   */
  public openDanger(message: string, time?: number) {
    this.gSnackbar('bg-green-500', message, time);
  }
}
