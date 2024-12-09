import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'personalInfo', 'experienceInfo', 'actions'];
  dataSource = new MatTableDataSource<any>();  // MatTableDataSource to handle pagination
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private cvService: CvService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getCVs();
  }

  getCVs(): void {
    this.cvService.getCvs().subscribe(cvs => {
      this.dataSource.data = cvs;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;  // Link the paginator
      }
    });
  }

  deleteCv(id: number): void {
    if (confirm('Are you sure you want to delete this CV?')) {
      this.cvService.deleteCv(id).subscribe(
        () => {
          this.toastr.success('CV deleted successfully!', 'Success');  // Success notification
          this.getCVs();  // Reload the CV list
        },
        (error) => {
          console.error('Error deleting CV:', error);
          this.toastr.error('Failed to delete CV. Please try again later.', 'Error');  // Error notification
        }
      );
    }
  }
}
