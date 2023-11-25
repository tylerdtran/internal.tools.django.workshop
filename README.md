# Daily Bruin Source Manager

The Daily Bruin Source Manager is an internal tool developed by the Internal Tools Team, facilitating the management and organization of sources available for contacting to gather information for articles. Sources can include individuals or entities like UCLA administration members who provide valuable insights and information pertinent to various articles, such as those focusing on future tuition costs.

## Overview

This tool comprises both backend and frontend components, allowing users to access and manipulate sources conveniently.

### Backend

The backend is built using Django and utilizes a database to store source-related data. The backend exposes endpoints that are accessed by the frontend to perform operations on the source data.

#### Running the Backend

To initialize the backend and database containers:

1. Navigate to the `internal.tools.django.workshop` directory.
2. Run the command: `docker-compose up --build`.

Note: For commands requiring `manage.py`, execute them inside the Docker container, as the necessary packages are not installed on the local computer.

To execute commands within the Docker container:

1. Identify the container ID of the container associated with the backend image using `docker ps`.
2. Run: `docker exec -it <container-id> /bin/bash`.
   - For instance: `docker exec -it 357173284027awef /bin/bash` (first 4 characters of the container ID are sufficient).
3. Once in the container, navigate to the `backend` directory.
4. Use `./manage.py` to execute Django commands (e.g., `./manage.py makemigrations`, `./manage.py migrate`).

### Frontend

The frontend, built with React, interacts with the backend to display and manipulate sources. It provides an interface accessible via `localhost:3000`.

#### Setting up the Frontend

1. Change directory into the `frontend` folder.
2. Run `npm install`.
3. Launch the local server on your localhost:3000 using `npm start`.

## Functionality

### Source Management Page

The Source Management Page consolidates all functionalities into a single webpage, offering the following capabilities:

- Listing all sources.
- Fields for each source: name, organization, email, phone, and notes.
- Creating new sources.
- Modifying existing sources.
- Deleting sources.

The backend's database stores all source-related data persistently. Even after stopping the server, closing the browser, and restarting, the stored data remains intact.

## Cloning and Directory Navigation

To access the Internal Tools Workshop and get started:

1. Clone the repository.
2. Navigate to the workshop directory using the terminal or command prompt.

Feel free to refer to the provided backend and frontend setup instructions to initialize and use both components seamlessly.

_Note: Ensure proper caution while handling and managing sources to maintain data accuracy and privacy._

This README serves as a comprehensive guide to set up and utilize the Daily Bruin Source Manager for efficient source management within the Daily Bruin ecosystem.
