# API Documentation

## Endpoints

### Student Profile API

#### Create Student Profile
- **URL**: `/student_profiles/`
- **Method**: `POST`
- **Description**: Create a new student profile.
- **Request Body**:
    ```json
    {
        "user_id": "string",
        "first_name": "string",
        "last_name": "string",
        "registration_number": "string",
        "department": "string",
        "course": "string",
        "year_of_study": "integer",
        "semester": "integer",
        "phone_number": "string"
    }
    ```
- **Response**:
    - **201 Created**: Successfully created the profile.
    - **400 Bad Request**: Invalid data or user is not a student.

#### List Student Profiles
- **URL**: `/student_profiles/`
- **Method**: `GET`
- **Description**: Get a list of all student profiles.
- **Response**:
    - **200 OK**: Successfully retrieved the profiles.

#### Retrieve Student Profile
- **URL**: `/student_profiles/{id}/`
- **Method**: `GET`
- **Description**: Get a specific student profile by ID.
- **Response**:
    - **200 OK**: Successfully retrieved the profile.
    - **404 Not Found**: Profile not found.

#### Update Student Profile
- **URL**: `/student_profiles/{id}/`
- **Method**: `PATCH`
- **Description**: Partially update a student profile by ID.
- **Request Body**:
    ```json
    {
        "first_name": "string",
        "last_name": "string",
        "registration_number": "string",
        "department": "string",
        "course": "string",
        "year_of_study": "integer",
        "semester": "integer",
        "phone_number": "string"
    }
    ```
- **Response**:
    - **200 OK**: Successfully updated the profile.
    - **400 Bad Request**: Invalid data.
    - **404 Not Found**: Profile not found.

#### Delete Student Profile
- **URL**: `/student_profiles/{id}/`
- **Method**: `DELETE`
- **Description**: Delete a specific student profile by ID.
- **Response**:
    - **204 No Content**: Successfully deleted the profile.
    - **404 Not Found**: Profile not found.

### Non-Student Profile API

#### Create Non-Student Profile
- **URL**: `/non_student_profiles/`
- **Method**: `POST`
- **Description**: Create a new non-student profile.
- **Request Body**:
    ```json
    {
        "user_id": "string",
        "first_name": "string",
        "last_name": "string",
        "employee_number": "string",
        "departments": "string",
        "courses": "string",
        "units": "string",
        "phone_number": "string"
    }
    ```
- **Response**:
    - **201 Created**: Successfully created the profile.
    - **400 Bad Request**: Invalid data or user is a student.

#### List Non-Student Profiles
- **URL**: `/non_student_profiles/`
- **Method**: `GET`
- **Description**: Get a list of all non-student profiles.
- **Response**:
    - **200 OK**: Successfully retrieved the profiles.

#### Retrieve Non-Student Profile
- **URL**: `/non_student_profiles/{id}/`
- **Method**: `GET`
- **Description**: Get a specific non-student profile by ID.
- **Response**:
    - **200 OK**: Successfully retrieved the profile.
    - **404 Not Found**: Profile not found.

#### Update Non-Student Profile
- **URL**: `/non_student_profiles/{id}/`
- **Method**: `PATCH`
- **Description**: Partially update a non-student profile by ID.
- **Request Body**:
    ```json
    {
        "first_name": "string",
        "last_name": "string",
        "employee_number": "string",
        "departments": "string",
        "courses": "string",
        "units": "string",
        "phone_number": "string"
    }
    ```
- **Response**:
    - **200 OK**: Successfully updated the profile.
    - **400 Bad Request**: Invalid data.
    - **404 Not Found**: Profile not found.

#### Delete Non-Student Profile
- **URL**: `/non_student_profiles/{id}/`
- **Method**: `DELETE`
- **Description**: Delete a specific non-student profile by ID.
- **Response**:
    - **204 No Content**: Successfully deleted the profile.
    - **404 Not Found**: Profile not found.
