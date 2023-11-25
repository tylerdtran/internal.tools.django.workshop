# internal.tools.django.workshop
Repo for Django Workshop Code: 
Daily Bruin Source Manager
The Daily Bruin Source Manager is an internal tool developed by the Internal Tools Team, facilitating the management and organization of sources available for contacting to gather information for articles. Sources can include individuals or entities like UCLA administration members who provide valuable insights and information pertinent to various articles, such as those focusing on future tuition costs.

Overview
This tool comprises both backend and frontend components, allowing users to access and manipulate sources conveniently.

Backend
The backend is built using Django and utilizes a database to store source-related data. The backend exposes endpoints that are accessed by the frontend to perform operations on the source data.

Running the Backend
To initialize the backend and database containers:

Navigate to the internal.tools.django.workshop directory.
Run the command: docker-compose up --build.
Note: For commands requiring manage.py, execute them inside the Docker container, as the necessary packages are not installed on the local computer.

To execute commands within the Docker container:

Identify the container ID of the container associated with the backend image using docker ps.
Run: docker exec -it <container-id> /bin/bash.
For instance: docker exec -it 357173284027awef /bin/bash (first 4 characters of the container ID are sufficient).
Once in the container, navigate to the backend directory.
Use ./manage.py to execute Django commands (e.g., ./manage.py makemigrations, ./manage.py migrate).
Frontend
The frontend, built with React, interacts with the backend to display and manipulate sources. It provides an interface accessible via localhost:3000.

Setting up the Frontend
Change directory into the frontend folder.
Run npm install.
Launch the local server using npm start.
Functionality
Source Management Page
The Source Management Page consolidates all functionalities into a single webpage, offering the following capabilities:

Listing all sources.
Fields for each source: name, organization, email, phone, and notes.
Creating new sources.
Modifying existing sources.
Deleting sources.
The backend's database stores all source-related data persistently. Even after stopping the server, closing the browser, and restarting, the stored data remains intact.

Cloning and Directory Navigation
To access the Internal Tools Workshop and get started:

Clone the repository.
Navigate to the workshop directory using the terminal or command prompt.
Feel free to refer to the provided backend and frontend setup instructions to initialize and use both components seamlessly.

Note: Ensure proper caution while handling and managing sources to maintain data accuracy and privacy.

This README serves as a comprehensive guide to set up and utilize the Daily Bruin Source Manager for efficient source management within the Daily Bruin ecosystem.
