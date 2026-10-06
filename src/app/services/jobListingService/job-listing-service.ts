import { Service } from '@angular/core';
import { JobListing } from '../../models/job-listing';

@Service()
export class JobListingService {
    private jobs: JobListing[] = [
        {  
            number: 1,
            jobTitle: 'UI/UX',
            jobDescription: 'blahblah',
            jobType: 'Full-time',
            jobSetup: 'Online',
            jobSalary: 25000
        },
        {  
            number: 2,
            jobTitle: 'Database Manager',
            jobDescription: 'blahblah',
            jobType: 'Full-time',
            jobSetup: 'Hybrid',
            jobSalary: 15000
        },
        {  
            number: 3,
            jobTitle: 'Graphic Designer',
            jobDescription: 'blahblah',
            jobType: 'Part-time',
            jobSetup: 'Hybrid',
        },
        {  
            number: 4,
            jobTitle: 'Marketing',
            jobDescription: 'blahblah',
            jobType: 'Part-time',
            jobSetup: 'Onsite',
            jobSalary: 10000
        },
        {  
            number: 5,
            jobTitle: 'Game Developer',
            jobDescription: 'blahblah',
            jobType: 'Prpoject-based',
            jobSetup: 'Hybrid',
            jobSalary: 30000
        },
    ];

    getAllJob(): JobListing[] {
        return this.jobs;
    }

    getJobById(id: number): JobListing | undefined {
        return this.jobs.find(p => p.number === id)
    } 
}
