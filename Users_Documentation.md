
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

**Sample Requests and Responses**:

*Request*:
```json
{
  "email": "student@example.com",
  "user_type": "student",
  "student_id": "S12345",
  "password": "password123"
}
```

*Response*:
```json
{
  "success": "User registered successfully"
}
```

*Request*:
```json
{
  "email": "lecturer@example.com",
  "user_type": "lecturer",
  "employee_id": "E54321",
  "password": "password123"
}
```

*Response*:
```json
{
  "success": "User registered successfully"
}
```

*Error Response*:
```json
{
  "error": "Missing required fields"
}
```

### 2. Student Login API

**Endpoint**: `/api/users/login/student/`

**Method**: POST

**Description**: Authenticates a student using either their registration number or email and password, and returns the student's profile information.

**Request Parameters**:
- `registration_number` (string, optional): The registration number of the student.
- `email` (string, optional): The email address of the student.
- `password` (string): The password for the user.

**Response**:
- On success:
  ```json
  {
    "success": {
      "id": 1,
      "user": 1,
      "first_name": "John",
      "last_name": "Doe",
      "registration_number": "S12345",
      "department": "Computer Science",
      "course": "BSc Computer Science",
      "year_of_study": 3,
      "semester": 2,
      "phone_number": "1234567890"
    }
  }
  ```
- On error:
  ```json
  {
    "error": "Detailed error message"
  }
  ```

**Sample Requests and Responses**:

*Request*:
```json
{
  "registration_number": "S12345",
  "password": "password123"
}
```

*Response*:
```json
{
  "success": {
    "id": 1,
    "user": 1,
    "first_name": "John",
    "last_name": "Doe",
    "registration_number": "S12345",
    "department": "Computer Science",
    "course": "BSc Computer Science",
    "year_of_study": 3,
    "semester": 2,
    "phone_number": "1234567890"
  }
}
```

*Request*:
```json
{
  "email": "student@example.com",
  "password": "password123"
}
```

*Response*:
```json
{
  "success": {
    "id": 1,
    "user": 1,
    "first_name": "John",
    "last_name": "Doe",
    "registration_number": "S12345",
    "department": "Computer Science",
    "course": "BSc Computer Science",
    "year_of_study": 3,
    "semester": 2,
    "phone_number": "1234567890"
  }
}
```

*Error Response*:
```json
{
  "error": "Invalid credentials or user is not a student"
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
      "id": 1,
      "user": 1,
      "first_name": "Jane",
      "last_name": "Smith",
      "employee_number": "E54321",
      "departments": "Mathematics",
      "courses": "Calculus, Algebra",
      "units": "Unit 1, Unit 2",
      "phone_number": "0987654321"
    }
  }
  ```
- On error:
  ```json
  {
    "error": "Detailed error message"
  }
  ```

**Sample Requests and Responses**:

*Request*:
```json
{
  "employee_id": "E54321",
  "password": "password123"
}
```

*Response*:
```json
{
  "success": {
    "id": 1,
    "user": 1,
    "first_name": "Jane",
    "last_name": "Smith",
    "employee_number": "E54321",
    "departments": "Mathematics",
    "courses": "Calculus, Algebra",
    "units": "Unit 1, Unit 2",
    "phone_number": "0987654321"
  }
}
```

*Error Response*:
```json
{
  "error": "Invalid credentials or user is a student"
}
```