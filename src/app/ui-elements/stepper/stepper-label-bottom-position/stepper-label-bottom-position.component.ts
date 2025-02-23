import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';

@Component({
    selector: 'app-stepper-label-bottom-position',
    imports: [
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FeathericonsModule
    ],
    templateUrl: './stepper-label-bottom-position.component.html',
    styleUrl: './stepper-label-bottom-position.component.scss'
})
export class StepperLabelBottomPositionComponent {

    private _formBuilder = inject(FormBuilder);

    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
    });

}