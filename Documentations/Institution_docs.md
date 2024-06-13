# API Documentation

## Institution APIs

### List Institutions
- **URL**: `/institutions/`
- **Method**: GET
- **Description**: Retrieve a list of all institutions.
- **Response**:
  ```json
  [
      {
          "id": 1,
          "name": "Institution Name",
          "unique_id": "unique_id_123",
          "admin": 1
      },
     
  ]

 ```

### Create Institution
**URL:** `/institutions/`  
**Method:** `POST`  
**Description:** Create a new institution.

**Request Body:**
```json
{
    "name": "Institution Name",
    "admin": 1
}

### Response

{
    "id": 1,
    "name": "Institution Name",
    "unique_id": "unique_id_123",
    "admin": 1
}


### Retrieve Institution
**URL:** `/institutions/{id}/`  
**Method:** `GET`  
**Description:** Retrieve details of a specific institution by ID.

**Response:**
```json
{
    "id": 1,
    "name": "Institution Name",
    "unique_id": "unique_id_123",
    "admin": 1
}


### Update Institution
**URL:** `/institutions/{id}/`  
**Method:** `PUT`/`PATCH`  
**Description:** Update details of a specific institution by ID.

**Request Body:**
```json
{
    "name": "Updated Institution Name",
    "admin": 2
}

### Response 

{
    "id": 1,
    "name": "Updated Institution Name",
    "unique_id": "unique_id_123",
    "admin": 2
}




Delete Institution
URL: /institutions/{id}/
Method: DELETE
Description: Delete a specific institution by ID.
Response:
json
Copy code
{
    "status": "Institution deleted"
}
Add Department to Institution
URL: /institutions/{id}/add_department/
Method: POST
Description: Add a new department to a specific institution.
Request Body:
json
Copy code
{
    "name": "Department Name"
}
Response:
json
Copy code
{
    "status": "department created",
    "department_id": "department_unique_id_123"
}
Department APIs
List Departments
URL: /departments/
Method: GET
Description: Retrieve a list of all departments.
Response:
json
Copy code
[
    {
        "id": 1,
        "institution": 1,
        "name": "Department Name",
        "unique_id": "unique_id_123"
    },
    ...
]
Create Department
URL: /departments/
Method: POST
Description: Create a new department.
Request Body:
json
Copy code
{
    "institution": 1,
    "name": "Department Name"
}
Response:
json
Copy code
{
    "id": 1,
    "institution": 1,
    "name": "Department Name",
    "unique_id": "unique_id_123"
}
Retrieve Department
URL: /departments/{id}/
Method: GET
Description: Retrieve details of a specific department by ID.
Response:
json
Copy code
{
    "id": 1,
    "institution": 1,
    "name": "Department Name",
    "unique_id": "unique_id_123"
}
Update Department
URL: /departments/{id}/
Method: PUT/PATCH
Description: Update details of a specific department by ID.
Request Body:
json
Copy code
{
    "institution": 1,
    "name": "Updated Department Name"
}
Response:
json
Copy code
{
    "id": 1,
    "institution": 1,
    "name": "Updated Department Name",
    "unique_id": "unique_id_123"
}
Delete Department
URL: /departments/{id}/
Method: DELETE
Description: Delete a specific department by ID.
Response:
json
Copy code
{
    "status": "Department deleted"
}
Add Course to Department
URL: /departments/{id}/add_course/
Method: POST
Description: Add a new course to a specific department.
Request Body:
json
Copy code
{
    "name": "Course Name"
}
Response:
json
Copy code
{
    "status": "course created",
    "course_id": "course_unique_id_123"
}
Course APIs
List Courses
URL: /courses/
Method: GET
Description: Retrieve a list of all courses.
Response:
json
Copy code
[
    {
        "id": 1,
        "department": 1,
        "name": "Course Name",
        "unique_id": "unique_id_123"
    },
    ...
]
Create Course
URL: /courses/
Method: POST
Description: Create a new course.
Request Body:
json
Copy code
{
    "department": 1,
    "name": "Course Name"
}
Response:
json
Copy code
{
    "id": 1,
    "department": 1,
    "name": "Course Name",
    "unique_id": "unique_id_123"
}
Retrieve Course
URL: /courses/{id}/
Method: GET
Description: Retrieve details of a specific course by ID.
Response:
json
Copy code
{
    "id": 1,
    "department": 1,
    "name": "Course Name",
    "unique_id": "unique_id_123"
}
Update Course
URL: /courses/{id}/
Method: PUT/PATCH
Description: Update details of a specific course by ID.
Request Body:
json
Copy code
{
    "department": 1,
    "name": "Updated Course Name"
}
Response:
json
Copy code
{
    "id": 1,
    "department": 1,
    "name": "Updated Course Name",
    "unique_id": "unique_id_123"
}
Delete Course
URL: /courses/{id}/
Method: DELETE
Description: Delete a specific course by ID.
Response:
json
Copy code
{
    "status": "Course deleted"
}
Add Unit to Course
URL: /courses/{id}/add_unit/
Method: POST
Description: Add a new unit to a specific course.
Request Body:
json
Copy code
{
    "name": "Unit Name"
}
Response:
json
Copy code
{
    "status": "unit created",
    "unit_id": "unit_unique_id_123"
}
Unit APIs
List Units
URL: /units/
Method: GET
Description: Retrieve a list of all units.
Response:
json
Copy code
[
    {
        "id": 1,
        "course": 1,
        "name": "Unit Name",
        "unique_id": "unique_id_123"
    },
    ...
]
Create Unit
URL: /units/
Method: POST
Description: Create a new unit.
Request Body:
json
Copy code
{
    "course": 1,
    "name": "Unit Name"
}
Response:
json
Copy code
{
    "id": 1,
    "course": 1,
    "name": "Unit Name",
    "unique_id": "unique_id_123"
}
Retrieve Unit
URL: /units/{id}/
Method: GET
Description: Retrieve details of a specific unit by ID.
Response:
json
Copy code
{
    "id": 1,
    "course": 1,
    "name": "Unit Name",
    "unique_id": "unique_id_123"
}
Update Unit
URL: /units/{id}/
Method: PUT/PATCH
Description: Update details of a specific unit by ID.
Request Body:
json
Copy code
{
    "course": 1,
    "name": "Updated Unit Name"
}
Response:
json
Copy code
{
    "id": 1,
    "course": 1,
    "name": "Updated Unit Name",
    "unique_id": "unique_id_123"
}
Delete Unit
URL: /units/{id}/
Method: DELETE
Description: Delete a specific unit by ID.
Response:
json
Copy code
{
    "status": "Unit deleted"
}