const DATA = 
`Happiness,Collaboration,Trust &_Respect,Creativity &_Innovation,Accountability,Vision &_Purpose,Goals &_Outcomes,Quarterly/_Roadmap,Monthly/_Release,Sprint,Roles &_Expectations,Sustainable_Pace,Self_Organization,Technical_Practices,Testing,Development_Practices,Release and_Deployment,Planning &_Estimating,Planning,Daily_Stand-Up,Review and_Demo,Retrospective,Size &_Skills,Effective_Facilitation,Leadership,Impediment_Management,Leadership,Technical_Expertise,Engagement,Engagement,Backlog_Management,Leadership,Leadership,Develop_People,Process_Improvement,Predictable_Delivery,Mean Time_To Recover,Change Failure_Rate,Test_Automation,Defect_Ratio,Story Cycle_Time,Impediments,Deployment_Frequency,Lead Time to_Deploy/Change,Business_Outcomes,Product Owner_Confidence,Team_Confidence
7,8,8,6,8,8,6,6,6,7,9,6,7,5,2,4,7,4,7,8,6,6,6,2,5,5,7,7,0,6,6,8,8,0,0,9,0,8,1,9,1,7,3,0,9,0,9
6,7,8,6,6,5,3,5,4,6,8,7,7,4,2,2,4,5,7,6,4,4,6,8,7,7,9,7,5,8,7,8,7,8,8,9,0,0,2,0,2,8,6,3,0,8,0
7,8,8,7,9,7,7,8,9,8,8,7,7,7,2,5,4,8,8,6,7,5,6,8,7,7,9,9,9,8,9,6,0,0,0,9,8,8,0,0,0,9,9,4,0,0,6
7,9,9,7,7,9,9,8,8,7,7,8,7,10,2,9,8,9,10,7,8,9,10,6,6,8,8,8,5,7,7,7,3,3,3,9,0,0,1,9,0,6,0,3,0,0,7
8,7,4,8,9,4,4,7,3,8,7,8,9,4,2,5,9,5,8,7,7,6,7,7,5,5,0,0,0,4,7,6,7,8,5,9,0,8,0,7,3,7,4,4,1,0,9
7,6,6,3,8,7,7,8,7,7,7,6,7,0,2,0,0,7,8,8,8,8,7,5,8,7,6,8,8,7,9,6,10,8,8,10,0,0,1,0,1,9,6,2,0,0,10`;

const GROUPS = [[1, 'Happiness'], [1, 'Collaboration'], [1, 'Trust & Respect'], [1, 'Creativity & Innovation'], [1, 'Accountability'], [2, 'Vision'], [3, 'Planning'], [1, 'Roles'], [1, 'Sustainable Pace'], [1, ' Self Organization'], [4, 'Technical Excellence'], [1, 'Planning & Estimating'], [4, 'Effective Meeting'], [1, 'Size & Skills'], [3, 'Team Facilitator'], [3, 'Technical Owner'], [3, 'Product Owner'], [3, 'Management'], [1, 'Predictable Delivery'], [4, 'Quality'], [2, 'Responsiveness'], [2, 'Time to market'], [1, 'Value Delivery'], [2, 'Confidence']];
const CLASSES = [[5, 'CULTURE', '#614d9c'], [3, 'CLARITY', '#da3b31'], [6, 'FOUNDATION', '#3953a0'], [4, 'LEADERSHIP', '#efaa54'], [6, 'PERFORMANCE', '#4f8c4c']];
