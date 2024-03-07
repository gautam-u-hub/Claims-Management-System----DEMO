# Claim Management System 

Welcome to Claim Management System! This is a brief description of what my web app does.

## Overview

The Claim Management System provides a centralized platform for managing claims for organizations or insurance companies. It facilitates various functionalities tailored to different user roles:

### Common Functionalities:

- **Add New Claims**: Users can easily create new claims by providing necessary information.
- **Update Existing Claims**: Existing claims can be modified with updated information or status changes.
- **View Claim Details**: Users have access to detailed information about each claim, including its status, policy details, and related documentation.
- **Buy or Apply a policy**: You can buy or apply to a policy

### Insurance Companies:

For insurance companies, the system offers additional functionalities tailored to their requirements:

- **Create New Policy**: Insurance companies can define and create new insurance policies with specific terms and conditions.
- **Reimburse Payments**: Insurance companies can manage payment reimbursements for claims based on policy terms and user eligibility.

### Third Party Administrators (TPAs):

For TPAs handling claims on behalf of insurance companies, the system provides functionalities to streamline their workflow:

- **Check Claim Details**: TPAs can access detailed information about claims they are handling, including policy details and claimant information.
- **Change Claim Status**: TPAs have the authority to update the status of claims, providing transparency and real-time updates to all stakeholders involved.

By providing these tailored functionalities, the Claim Management System aims to enhance efficiency, transparency, and collaboration in managing claims across various entities involved in the process.



## Technologies Used

- **Frontend**: React.js, React Router Dom, Bootstrap, Redux 
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **API Client**: Axios

### Redux

Redux is a predictable state container for JavaScript apps. It helps in managing the application state and makes it easier to track changes over time. With Redux, you can maintain a single source of truth for your application's state, which can be accessed by any component in your application.

## Usage

1. Register for an account if you are a new user.
2. Log in with your credentials.
3. Use the dashboard to navigate through the system features.
4. Add new claims, update existing ones, or view claim details as needed.
5. Logout when you are finished.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone "https://github.com/gautam-u-hub/Claims-Management-System----DEMO/new/master?filename=README.md"
```
2. Install dependencies using npm:

```bash
npm i
```


Now you can configure your config.env file like this:-
| Variable Name | Value                              |
|---------------|------------------------------------|
| PORT          | 4000                               |
| DB_URI        | Your DB URI                        |
| JWT_SECRET    | random                             |
| JWT_EXPIRE    | 1d                                 |
| COOKIE_EXPIRE | 1                                  |


3. To start the development server and run the web app, use the following command:


```bash
npm run dev
```
4. Navigate to the frontend directory
```bash
cd frontend
```

5. Install dependencies
```bash
npm install
```

6. Start the development server
```bash
npm start
```

# Deployment

You can find the deployed version of this application here.

```bash
https://lively-panda-d4bb46.netlify.app/
```


