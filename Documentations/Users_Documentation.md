
## API Documentation

### 1. User Registration API

**Base_Url / Host**: http://127.0.0.1:8000


**Endpoint**: `/api/users/register/`

**Method**: POST

**Description**: Registers a new user with the provided email, user type, and password. Depending on the user type, either `student_id` or `employee_id` should be provided.

**Request Parameters**:
- `email` (string): The email address of the user.
- `user_type` (string): The type of user. Valid values are `student`, `lecturer`, `institution_admin`.
- `student_id` (string, optional): Required if the user type is `student`.
- `employee_id` (string, optional): Required if the user type is `lecturer` or `institution_admin`.
- `password` (string): The password for the user.

**Response**:
- On success:
  ```json
  {
    "success": "User registered successfully"
  }
  ```
- On error:
  ```json
  {
    "error": "Detailed error message"
  }
  ```


### 2. Student Login API

**Endpoint**: `/api/users/login/student/`

**Method**: POST

**Description**: Authenticates a student using either their registration number or email and password, and returns the student's profile information.

**Request Parameters**:
- `student_id` (string, optional): The registration number of the student.
- `email` (string, optional): The email address of the student.
- `password` (string): The password for the user.

**Response**:
- On success:
  ```json
  {
    "success": {
        "user_id": "DD7wG6zixmigjZ5",
        "email": "karanur36@gmail.com",
        "is_student": true,
        "is_lecturer": false,
        "institution_admin": false,
        "student_id": "SCT212-0062",
        "employee_id": null
    }
  }
  ```
- Save this data in local storage or session cookie

- On error:
  ```json
  {
    "error": "Detailed error message"
  }
  ```



### 3. Non-Student Login API

**Endpoint**: `/api/users/login/nonstudent/`

**Method**: POST

**Description**: Authenticates a non-student user (lecturer or institution admin) using their employee ID and password, and returns the user's profile information.

**Request Parameters**:
- `employee_id` (string): The employee ID of the user.
- `password` (string): The password for the user.

**Response**:
- On success:
  ```json
  {
     "success": {
        "user_id": "24WfQYJo6aCSoqJ",
        "email": "karanurlec6@gmail.com",
        "is_student": false,
        "is_lecturer": true,
        "institution_admin": false,
        "student_id": null,
        "employee_id": "LEC-T212-0062"
    }
  }
  ```
- On error:
  ```json
  {
    "error": "Detailed error message"
  }
  ```

