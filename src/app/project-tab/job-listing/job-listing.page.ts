import { Component, OnInit } from '@angular/core';
import { JobListing } from '../../models/job-listing';
import { JobListingService } from '../../services/jobListingService/job-listing-service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.page.html',
  styleUrls: ['./job-listing.page.scss'],
  standalone: false,
})
export class JobListingPage implements OnInit {
  jobs: JobListing[] = [];

  constructor(private jobListingService: JobListingService) { }

  ngOnInit() {
    this.jobs = this.jobListingService.getAllJob();
  }

}
