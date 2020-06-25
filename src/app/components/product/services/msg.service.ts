import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private snackBar:MatSnackBar) { }

 msg(msg:string , isError:boolean = false) :void{
      this.snackBar.open(msg,'',{
        duration:500,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error']: ['msg-success']
      });
  }

}
