import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobListing } from '../models/job-listing';
import { JobListingService } from '../services/jobListingService/job-listing-service';

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.page.html',
  styleUrls: ['./job-overview.page.scss'],
  standalone: false,
})
export class JobOverviewPage implements OnInit {
  job: JobListing | undefined;

  constructor(private route: ActivatedRoute,
    private jobListingService: JobListingService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.jobListingService.getJobById(id);
  }

}
