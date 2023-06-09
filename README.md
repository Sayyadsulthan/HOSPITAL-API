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
                          
           <img width="678" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/b533e8b2-d715-4015-8ff0-00e86ded1cb9">
                  
2) in doctors/login -> same as doctors/register method will be post 
                        and it will give JWT token 
                        <img width="678" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/43b9488d-5a1c-4b6c-9609-3d3c407e8a2f">

 
 3)in patients/register -> method POST and in body need to pass name and phone (name and phone) are key 
                            USE JWT Token in Authorization use (Bearer Token) and in Headers 
                             a) Selecting the Token in Authorization.
                             
                           <img width="670" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/e6ec8162-c512-48c2-913b-6fb9c3dd839a">
                              
                             b) setting up headers and put that token.
                             
                            <img width="673" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/31c2a3fd-a00c-4613-b3dc-08593a64ccae">
                              
                            c)  in body use x-www-form-urlencoded and put name and password.
                            
                            <img width="677" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/5f89fcf4-6ebb-4983-821b-5412b79996be">

 4) in patients/:id/create_report -> method POST use JWT TOKENS, in body key(name, phone, status)
                              <img width="655" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/58b09cc8-51bd-4cba-82c7-b4b1b1e9be65">

 5) in patients/:id/all_report -> Method GET use JWT Tokens, in params id will be patients id.
                                <img width="677" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/5652d758-9108-4ab3-b287-bc5f817cafe4">

                                
 6) in /reports/:status -> Method will GET No need to pass the body. And status will be either 
                          [ Negative , Travelled-Quarantine , Symptoms-Quarantine , Positive-Admit ] 
                                    <img width="672" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/2c208e1b-5ad8-4386-bde3-765177d562b8">
                                    
                                    <img width="626" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/c3abccec-592a-46ef-a85f-496e0a4bc7de">
                                      
                                      <img width="651" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/18f8949a-28de-4b58-b3c9-68caf4a7e41d">
                                    <img width="633" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/2726545a-f35b-4ca4-948a-e9230a0b03fd">
                                              
                                     <img width="660" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/169a3d59-737e-45d6-91cb-b513903b6066">
                                      
                                      <img width="630" alt="image" src="https://github.com/Sayyadsulthan/HOSPITAL-API/assets/105346556/036a1afc-4384-4e05-9f1a-2023474668c0">

  Thankyou..

                          
