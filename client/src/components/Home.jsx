import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  console.log("🚀 ~ Home ~ data:", data);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/customer`);
        if (response.status === 200) {
          setData(response.data.Message);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAPI();
  }, []);

  return (
    <>
      {data && (
        <div className="  grid grid-cols-2  ">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className=" rounded-xl p-6 bg-white max-w-75  "
              >
                <div>
                  <p className="  font-sourceCodePro font-medium text-[18px] text-black ">
                    {item.f_name}
                  </p>
                  <p className="  font-sourceCodePro font-normal text-[14px] text-[#666666] ">
                    {item.email}
                  </p>
                </div>
                <div className=" mt-6 ">
                  <p>DOB: {item.DOB}</p>
                  <p>Phone: {item.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
