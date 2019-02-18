import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tv-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  constructor() {}
  panelOpenState = false;
  teams: Array<any> = [
    {
      name: 'Commerce',
      productOwners: 'Dana Richards',
      lead: 'Marlon Baskin',
      scrumMaster: 'Alex Styles',
      projects: [
        {
          name: 'TSHQ Commerce Fanwear Site',
          repositoryUrl: 'https://bitbucket.org/bsbdevelopment/tshq-web.git',
          lastUpdated: '2019-02-15',
          lastBuild: {
            builtWith: 'Angular',
            builtWithVersion: '7.20',
            chunkCount: 5,
            maxChunkSizeInMb: 9,
            buildTimestamp: '2019-02-15T00:09:08',
            tests: {
              totalTests: 122,
              passingTests: 100
            }
          },
          stateManagement: 'None'
        }
      ]
    },
    {
      name: 'Registration',
      productOwners: 'Andrea & Brittany',
      lead: 'Davon Cannon',
      scrumMaster: 'Liz/Geoffrey Middleton',
      projects: [
        {
          name: 'TSHQ Registration',
          repositoryUrl:
            'https://bitbucket.org/bsbdevelopment/tshq-registration.git',
          lastUpdated: '2019-02-01',
          lastBuild: {
            builtWith: 'Angular',
            builtWithVersion: '7.20',
            chunkCount: 5,
            maxChunkSizeInMb: 4,
            buildTimestamp: '2019-02-15T00:09:08',
            tests: {
              totalTests: 122,
              passingTests: 100
            }
          },
          stateManagement: 'Ngxs'
        },
        {
          name: 'TSHQ Consumer Registration',
          repositoryUrl:
            'https://bitbucket.org/bsbdevelopment/tshq-consumer-registration.git',
          lastUpdated: '2019-02-15',
          lastBuild: {
            builtWith: 'Angular',
            builtWithVersion: '7.20',
            chunkCount: 5,
            maxChunkSizeInMb: 6,
            buildTimestamp: '2019-02-15T00:09:08',
            tests: {
              totalTests: 122,
              passingTests: 100
            }
          },
          stateManagement: 'Ngxs'
        }
      ]
    }
  ];

  ngOnInit() {}

  get commerceProjects() {
    return this.teams.find(t => t.name === 'Commerce').projects;
  }

  get registrationProjects() {
    return this.teams.find(t => t.name === 'Registration').projects;
  }
}
