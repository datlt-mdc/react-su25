'use client'
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getAllStudents } from "../api/student";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function DataList() {
  const [ studentList, setStudentList ] = useState();
  const dataList = [
    {
      id: 1,
      name: "Cơ bản",
      description:
        "Theo dõi các biểu đồ tăng trưởng. Xem các blog về thai sản.",
      price: 0,
      duration: 4000,
    },
    {
      id: 2,
      name: "tiện ích",
      description:
        "Bao gồm quyền lợi các gói cơ bản. Đặt nhắc nhở các lịch hẹn",
      price: 300000,
      duration: 120,
    },
    {
      id: 5,
      name: "cao cấp",
      description:
        "Bao gồm quyền lợi các gói tiện ích.  Tham gia cộng đồng mẹ bầu.",
      price: 500000,
      duration: 120,
    },
  ];
  
  // khi moi tao trang, keo api
  useEffect(() => {
    async function fetchData() {
      
      const fetchList = await getAllStudents(); // goi ham keo api
      
      console.log("Fetched List from api: ", fetchList)
      setStudentList(fetchList);
    }

    fetchData();
  },[])

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap:"6px",
        justifyContent: "space-around",
      }}
    >
      <Link to={"/"}> Go to home page </Link>
      {studentList ? studentList.map((x) => {
        return (
          // <div>
          //   {x.id} - {x.name} - {x.campus} 
          // </div>
          <DataCard item={x} header={"abc"}  />
        );
      }) : (<div>No data</div>)}
    </div>
  );
}
 // ({item, header})

function DataCard({item, header}) {
  console.log("item",item)
  console.log("header2",header)
  return (
    // <div style={{
    //   backgroundColor: "pink",
    //   margin:"4px"
    // }}>{data.header} - {data.item.name}</div>
    <Card
      hoverable
      style={{ width: 240, backgroundColor: "pink", border:"1px solid black" }}
      cover={
        <img
          alt="example"
          src={item.avatar}
        />
      }
    >
      <Meta
        title={header}
        description={
          <div>
            <div>{item.name} - {item.campus}</div>
            <div><AiOutlineShoppingCart /></div>
          </div>
        }
      />
    </Card>
  );
}
