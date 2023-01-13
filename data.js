const DATA = 
`Happiness,Collaboration,Trust &_Respect,Creativity &_Innovation,Accountability,Vision &_Purpose,Goals &_Outcomes,Quarterly/_Roadmap,Monthly/_Release,Weekly/_Sprint,Roles &_Expectations,Sustainable_Pace,Self_Organization,Size &_Skills,Planning &_Estimating,Effective_meetings,Technical_Practices,Testing,Development_Practices,Release and_Deployment,Effective_Facilitation,Leadership,Impediment_Mgmt.,Leadership,Technical_Expertise,Engagement,Engagement,Backlog_Mgmt.,Tech-debt_Mgmt.,Leadership,Leadership,Develop_people,Process_Imp.,Predictable_Delivery,MTTR,CFR,Test_Automation,Defect_Ratio,Story Cycle_Time,Impediments,Deployment_Frequency,UAT Lead_Time,Business_Outcomes,Product_Owner,Team
7,8,8,6,8,8,6,6,6,7,9,6,7,6,4,7,5,2,4,7,4,5,5,7,7,0,6,6,8,6,8,0,0,9,0,8,1,9,1,7,3,0,9,0,9
6,7,8,6,6,5,3,5,4,6,8,7,7,6,5,7,4,2,2,4,7,7,7,9,7,5,8,7,8,8,7,8,8,9,0,0,2,0,2,8,6,3,0,8,0
7,8,8,7,9,7,7,8,9,8,8,7,7,6,8,8,7,2,5,4,8,7,7,9,9,9,8,9,6,0,0,0,0,9,8,8,0,0,0,9,9,4,0,0,6
7,9,9,7,7,9,9,8,8,7,7,8,7,10,9,10,10,2,9,8,3,6,8,8,8,5,7,7,7,6,3,3,3,9,0,0,1,9,0,6,0,3,0,0,7
8,7,4,8,9,4,4,7,3,8,7,8,9,7,5,8,4,2,5,9,5,5,5,0,0,0,4,7,6,6,7,8,5,9,0,8,0,7,3,7,4,4,1,0,9
7,6,6,3,8,7,7,8,7,7,7,6,7,7,7,8,0,2,0,0,5,8,7,6,8,8,7,9,6,7,10,8,8,10,0,0,1,0,1,9,6,2,0,0,10
,,,,,,,,,,,,,,,8,,,,,5,5,6,6,6,7,7,6,6,7,6,6,6,9,6,9,0,8,4,8,6,4,0,0,7
,,,,,,,,,,,,,,,6,,,,,2,,,,,,6,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,6,,,,,8,,,,,,8,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,7,,,,,,,,,,,0,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,7,,,,,,,,,,,6,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,8,,,,,,,,,,,7,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,6,,,,,,,,,,,8,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,4,,,,,,,,,,,6,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,7,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,7,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,6,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,4,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,9,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,6,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`;

const GROUPS = [[5, 'Team Dynamics'], [2, 'Vision'], [3, 'Planning'], [1, 'Roles'], [5, 'Agility'], [4, 'Technical Excellence'], [3, 'Team Facilitator'], [3, 'Technical Owner'], [4, 'Product Owner'], [3, 'Management'], [1, 'Predict._Deliv.'], [4, 'Quality'], [2, 'Response _to change'], [2, 'Time to_market'], [1, "Value_Deliv."], [2, "Confidence"]];
const CLASSES = [[1, 'CULTURE', '#614d9c'], [3, 'CLARITY', '#da3b31'], [2, 'FOUNDATION', '#3953a0'], [4, 'LEADERSHIP', '#efaa54'], [6, 'PERFORMANCE', '#4f8c4c']];
