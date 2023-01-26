import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class MessagesService {

  constructor(private snackBar: MatSnackBar) {}

  public showInfo(message: string) {
    this.snackBar.open(message, 'OK', {
      panelClass: 'mat-snack-bar-info',
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  public showError(message: string) {
    this.snackBar.open(message, 'OK', {
      panelClass: 'mat-snack-bar-error',
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }
}
