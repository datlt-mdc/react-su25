import axios from "axios";

export async function getAllStudents() {
  try {
    // lay token de dinh kem
    const token = localStorage.getItem("token");
    // keo api
    const response = await axios.get(
      "https://682f1828746f8ca4a47fcf36.mockapi.io/students",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Student Data: ", response.data);

    return response.data;
  } catch (ex) {
    console.log("Loi khi keo du lieu tu API");
    console.log(ex);
    return [];
  }
}

export async function createNewStudent(student) {
  try {
    // lay token de dinh kem
    const token = localStorage.getItem("token");
    // keo api
    const response = await axios.post(
      "https://682f1828746f8ca4a47fcf36.mockapi.io/students",
      student,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Student Data after upload: ", response.data);
  } catch (ex) {
    console.log("Loi khi keo du lieu tu API");
    console.log(ex);
  }
}
