import React, { useContext } from "react";
import MemberCard from "../../components/MemberCard";
import Loader from "../../components/Loader";
import { allContexts } from "../../Context/AllContexts";

function OtherMember() {
  const { Data, showLoading } = useContext(allContexts);
  console.log(Data?.team[0].img)
  return (
    <>
      {showLoading ? (
        <Loader />
      ) : (
        <div className="bg-secondary p-9 sm:py-7 sm:px-5">
          <h1 className="flex justify-center items-center text-primary text-2xl font-semibold sm:text-2xl">
            Other Team Members:
          </h1>
          <div className="membercards_team_members grid grid-cols-3 gap-7 sm:gap-2 sm:grid-cols-1">
            {
              Data && Data.team && Data.team.map(item => (
                <MemberCard key={item.id} name={item.name} img={item.img} position={item.position} email={item.email} linkedin={item.linkedin} desc={item.desc}/>
              ))
            }
          </div>
        </div >
      )
      }
    </>
  );
}

export default OtherMember;
