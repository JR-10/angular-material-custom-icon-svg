import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRadioModule,
    MatDialogModule,
    MatCheckboxModule,

    // select autocomplete
    MatAutocompleteModule,

    // fechas
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRadioModule,
    MatDialogModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
})
export class MaterialModule { }
