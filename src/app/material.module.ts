import { NgModule } from "@angular/core";
import{MatToolbarModule} from "@angular/material/toolbar"
import{MatTableModule} from "@angular/material/table"
import{MatCardModule} from "@angular/material/card"
import {MatIconModule} from "@angular/material/icon"
@NgModule({
    exports:[MatToolbarModule,
        MatTableModule,
        MatCardModule,
        MatIconModule
    ]


    
})

export class MaterialModule{}

