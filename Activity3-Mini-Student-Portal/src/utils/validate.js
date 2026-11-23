const STUDENT_ID_PATTERN = /^\d{4}-\d{4}$/;
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

// Returns one error message per invalid field. An empty object means the form is valid.
// `takenIds` is optional and stops the same Student ID from being registered twice.
export function validate(values, takenIds = []) {
  const errors = {};
  const studentId = values.studentId.trim();
  const email = values.email.trim();

  if (!values.fullName.trim()) {
    errors.fullName = "Enter the student's full name.";
  }

  if (!studentId) {
    errors.studentId = "Enter the Student ID.";
  } else if (!STUDENT_ID_PATTERN.test(studentId)) {
    errors.studentId = "Student ID must use the format ####-#### (e.g. 2024-0123).";
  } else if (takenIds.includes(studentId)) {
    errors.studentId = "This Student ID is already registered.";
  }

  if (!email) {
    errors.email = "Enter an email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address (e.g. name@example.com).";
  }

  if (!values.course) {
    errors.course = "Choose a course.";
  }

  if (!values.yearLevel) {
    errors.yearLevel = "Choose a year level.";
  }

  return errors;
}
