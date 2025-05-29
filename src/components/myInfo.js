
 function MyInfo() {
  const studentInfo = {
    name: "Dat LT",
    age: 22,
    gpa: 11
  }
  const passStyle = {
    color: "white",
    backgroundColor: "green"
  }

  // background-color
  return (
    <>
      {studentInfo.gpa > 5 ? <div style={{
        color: "white",
        backgroundColor: "green"
      }}>Passed</div> : <div>Not Passed</div>}
      <div>
        Hello, My name is {studentInfo.name.toLowerCase()} dep trai {studentInfo.age + 2}
      </div>
    </>
  )
}

const pi = 3.14;
export { MyInfo, pi } ;