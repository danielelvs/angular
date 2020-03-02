import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
    imports: [ 
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        RouterModule,
        PhotoDetailsModule
    ]
})
export class PhotosModule { }