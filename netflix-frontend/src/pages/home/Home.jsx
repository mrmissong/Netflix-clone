import React,{useState, useEffect} from 'react'
import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from '../../components/list/List'
import axios from "axios";

const Home = ({type}) => {
  const[lists, setLists]= useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDAzNDFmYmQ4MmNmODg0NDI2MjVmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDc0NjE0NywiZXhwIjoxNjc1MjY0NTQ3fQ.3h23sMTmJajHHay2od1ylXfpQZjXfldCASkxp33odKw",
            },
          }
        );
        console.log(res)
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);


  // useEffect(()=>{
  //   const getRandomLists=()=>{
  //     axios.get(`lists${type ? "?type=" + type : ""}${
  //       genre ? "&genre=" + genre : ""
  //     }`,
  //     {
  //       headers: {
  //         token:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDAzNDFmYmQ4MmNmODg0NDI2MjVmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDc0NDYyNSwiZXhwIjoxNjc1MjYzMDI1fQ.r06J6-u9qDN07S_rLBbIqL8pUdzTvUPiMv1_kGTeLCM"
  //       }
  //     }).then((res)=>{
  //       console.log(res);
  //       setLists(res.data);
  //     }).catch(err=>{
  //       console.log(err)
  //     })
  //   }
    
  //   getRandomLists();

  // },[type, genre]);

  return (
    <div className='home'>
    <Navbar/>
    <Featured type={type} setGenre={setGenre}/>
    {lists.map((list) => (
        <List list={list} />
      ))}
      {/* {lists.length > 0 && lists.map((list) => (
        <List list={list} />
      ))} */}
    </div>
  )
}

export default Home