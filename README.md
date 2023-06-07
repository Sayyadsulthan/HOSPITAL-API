# HOSPITAL-API

To use this api
Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status

while using POSTMAN :

1) in doctors/register -> method will be post and in BODY section use x-www-form-urlencoded
                          and in body need to pass name and password
                  
2) in doctors/login -> same as doctors/register method will be post 
                        and it will give JWT token 
 
 3)in patients/register -> method POST and in body need to pass name and phone (name and phone) are key 
                            USE JWT Token in Authorization use (Bearer Token) and in Headers 
                            
 4) in patients/:id/create_report -> method POST use JWT TOKENS, in body key(name, phone, status)
 5) in patients/:id/all_report -> Method GET use JWT Tokens, in params id will be patients id.
 
 6) in /reports/:status -> Method will GET No need to pass the body. And status will be either 
                          [ Negative , Travelled-Quarantine , Symptoms-Quarantine , Positive-Admit ] 
 

                          
