import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {
  cvForm!: FormGroup;
  isEditMode: boolean = false; // To check if it's edit mode
  cvId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cvService: CvService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Initialize the form group
    this.cvForm = this.fb.group({
      name: ['', Validators.required],
      personalInformation: this.fb.group({
        fullName: ['', Validators.required],
        cityName: [''],
        email: ['', [Validators.required, Validators.email]],
        mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      }),
      experienceInformation: this.fb.group({
        companyName: ['', [Validators.required, Validators.maxLength(20)]],
        city: [''],
        companyField: ['']
      })
    });

    // Check if we are in edit mode and load data if needed
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.cvId = +params['id'];
        this.loadCV(this.cvId); // Load existing CV for editing
      }
    });
  }

  // Fetch the CV data by id from the service
  loadCV(id: number): void {
    this.cvService.getCvById(id).subscribe((cv) => {
      // Patch the form with the existing CV data
      this.cvForm.patchValue({
        id: cv.id,
        name: cv.name,
        personalInformation: {
          fullName: cv.personalInformation.fullName,
          cityName: cv.personalInformation.cityName,
          email: cv.personalInformation.email,
          mobileNumber: cv.personalInformation.mobileNumber,
        },
        experienceInformation: {
          companyName: cv.experienceInformation.companyName,
          city: cv.experienceInformation.city,
          companyField: cv.experienceInformation.companyField
        }
      });
    });
  }

  // Handle form submission (create or update based on the mode)
  onSubmit(): void {
    if (this.cvForm.valid) {
      const formData = this.cvForm.value;
       // Ensure the id is included if we are in edit mode
    if (this.isEditMode && !formData.id) {
      formData.id = this.cvId;
    }
      if (this.isEditMode) {
        // Update existing CV
        this.cvService.updateCv(this.cvId!, formData).subscribe(
          (response) => {
            this.toastr.success('CV updated successfully!', 'Success');
            this.router.navigate(['/cv-list']);
          },
          (error) => {
            console.error('Error updating CV:', error);
            alert('Failed to update CV.');
          }
        );
      } else {
        // Create new CV
        this.cvService.createCv(formData).subscribe(
          (response) => {
            this.toastr.success('CV created successfully!', 'Success');
            this.router.navigate(['/cv-list']);
          },
          (error) => {
            console.error('Error creating CV:', error);
            this.toastr.error('Failed to update CV. Please try again later.', 'Error');  
          }
        );
      }
    } else {
      console.error('Form is invalid');
    }
  }

  // Navigate back to the CV list page
  goBack(): void {
    this.router.navigate(['/cv-list']); // Navigate back to the CV list
  }
}
