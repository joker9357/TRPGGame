import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login-and-register-dialog',
  templateUrl: './login-and-register-dialog.component.html',
  styleUrls: ['./login-and-register-dialog.component.css']
})
export class LoginAndRegisterDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'app-login-dialog.html',
  styleUrls: ['./login-and-register-dialog.component.css']
})
export class LoginDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    public dialog: MatDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.dialog.closeAll();
  }

  openDialog(): void {
    this.onNoClick();
    const registerDialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '400px',
    });

    registerDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-register-dialog',
  templateUrl: 'app-register-dialog.html',
  styleUrls: ['./login-and-register-dialog.component.css']
})
export class RegisterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    this.onNoClick();
    const loginDialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px',
    });

    loginDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialog.closeAll();
  }

}
