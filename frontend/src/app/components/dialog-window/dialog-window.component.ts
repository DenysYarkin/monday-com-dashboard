import {Component, inject} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogActions,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

export interface DialogData {
  itemName: string;
}

@Component({
  selector: 'app-dialog-window',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    FormsModule,
    MatInput,
    MatDialogActions,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './dialog-window.component.html',
  styleUrl: './dialog-window.component.css'
})
export class DialogWindowComponent {

  public dialogRef = inject(MatDialogRef<DialogWindowComponent>)
  public data: DialogData = inject(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.dialogRef.close(this.data.itemName);
  }
}
