import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }
private gSnackbar(background:string,message:string,time?:number){
  this.snackBar.open(message, 'بستن', {
    duration:time ? time: 3000, 
    verticalPosition: 'top', // موقعیت عمودی پیغام (top/bottom)
    horizontalPosition: 'end', // موقعیت افقی پیغام (start/end/center)
    panelClass: ['text-white', background, 'text-center'],

  });
  
}
public openSuccess (message:string, time?:number){
  this.gSnackbar('bg-success', message ,time);
}
public openDanger (message:string, time?:number){
  this.gSnackbar('bg-success', message ,time)
}
}
