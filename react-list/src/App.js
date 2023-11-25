import { useEffect, useState } from "react";

function App() {
  let arr = [1,2,3,4,5,6,7,8,9]
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const fetchEmployes = async (page) => {
    try {
      const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=12`);
      const result = await res.json();
      console.log(result.data);
      setData(result.data);
      setTotalPage(result.totalPage)
    } catch (error) {
      console.log(`Error on fetch data`, error)
    }
  }

  useEffect(() => {
    fetchEmployes(page);
  },[page])

  const hendleChange = (newPage) => {
    setPage(newPage);
  }


  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* map through the data*/}
            {data.map((item) => (
              console.log(item),
              <tr>
                <td className="employee-card-name">{item.name}namedn</td>
                <td className="employee-card-department">{item.department}</td>
                <td className="employee-card-image">{item.image}</td>
                <td className="employee-card-gender">{item.gender}</td>
                <td className="employee-card-salary">{item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* add your pagination here */}
      {/* {[].map((item) => {})}       */}
      {Array.from({ length: totalPage },( _, index) => (
        <button
          key={index}
          onClick={() => hendleChange(index + 1)}
          style={{border : index+1 === page ? `1px solid red`:`1px solid #000`}}
          disabled = {index + 1 === page}
        >
          {index + 1}
        </button>
      ))}
      {arr.map((ele,index)=>(
        <button
        key={index}
        onClick={() => hendleChange(index + 1)}
        style={{border : index+1 === page ? `1px solid red`:`1px solid #000`}}
        disabled = {index + 1 === page}
      >
        {index + 1}
      </button>
      ))}
    </div>
  );
}

export default App;
