# Atlan-SQLEditor
Thanks for giving a chance!! Welcome....

# Screenshots of Website
![Screenshot 2022-05-01 at 6 22 24 PM](https://user-images.githubusercontent.com/95274812/166149881-2249e321-44b4-454d-a367-ab5afe467238.png)

# Discription
This is an online SQL view editor built for the frontend task provided by Atlan.

# Tools and Technology used
In this project i had used the following data :
1) React          2) React MUI        3) Bootstrap      4)JSON Server ( As a dummy server)    

# Features
1. User Friendly Interface: For querying the data present in the table, tabs and buttons are provided which increases the beauty of the application and make a smooth user experience.

2. Dynamic Table Views: The data is first fetched from JSON Server and to arrange them in a proper way react datatable is used which provides user a beautiful and smooth experience. React datatables are light weighted and are easy to use.

3. Search Bar: User can easily search the required data from the table, to make it more efficient search input field is provided where user has to type few letters and he is able to get all the records which matches.

4. Sorting: User can also sort the data whenever needed, for this purpose at the end of each column name a button is provided which is visible when you hover on the column name.

5. Delete Records: With the help of json server ( Dummy server ) users are allwed to delete their records also.

6. Alerts: The user will also get alert whenever it is required, like if a user hit delete button then the alert made after deleting the data.

7.Refresh button: At the top right corner of the table refresh button is provided which whenever clicked will refresh the table. 

# Performance Check

GTmetrix
1) The site receives "A" grade.
2) Performance: 100%
3) LCP: 634ms
4) Proof:
![Screenshot 2022-05-01 at 5 00 08 PM](https://user-images.githubusercontent.com/95274812/166150170-432a1a26-ac26-47e0-ba51-cf4be37e28d4.png)
 
 
# Optimisation 
1. First instead of installing bootstrap in our react app we can use CDN link provided and add it in our public index.html file. This make our application lightweight and smooth.

2. Reduced the number of API calls. By using the 'useEffect' hook, I have reduced the number of API call and saved my few seconds.

3. Asynchronous loading which reduces the render blocking and make our application to load on server very fast.

4. Prefer CDN links of images instead of downloading it. This make the user application leightweight and whenever the user use our website he/she can get maximum things on their local machines.

# Avilable Scripts
Here in this project, you can run:

# npm start
This will start the npm server at https://localhost:3000 and open in browser directly.

# npm run json server (Must have to run to start the json server)
This script allows you to start the json server at https://localhost:3004 and this server is allows you to fetch the data so it is necessary to start it before moving further.

# npm run build
This script builds the app for production or deployment on internet, when you hit this script it is going to create a 'Build' folder which is required to deploy your website.


