import React, { useContext, useState } from "react";
import MemberCard from "../../components/MemberCard";
import Loader from "../../components/Loader";
import { allContexts } from "../../Context/AllContexts";
import { Button, Modal } from 'antd';


function OtherMember() {

  //for the modal:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const { Data, showLoading } = useContext(allContexts);
  console.log(Data?.team[0].img)

  // Sorting the team data based on the "order" key
  const sortedTeam = Data?.team?.slice().sort((a, b) => a.order - b.order);
  return (
    <>
      <Modal
        title={`${selectedMember?.name || 'Member Details'}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
        overflow="scroll"
      >
        {selectedMember && (
          <div className="p-4">
            <div className="flex flex-row md:flex-row gap-6 mb-6 sm:flex-col sm:items-center sm:text-center ">

              <div className="w-48 h-48 mx-auto md:mx-0 flex-shrink-0 flex flex-row ">
                <img
                  src={selectedMember.img || "/placeholder.svg"}
                  alt={selectedMember.name}

                  className="w-full h-full rounded-[50%] object-cover"
                />
              </div>
              <div className=" flex flex-col sm:items-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedMember.name}</h2>
                <p className="text-lg text-secondary mb-4">{selectedMember.position}</p>
                <p className="text-slate-600 leading-relaxed mb-4">{selectedMember.desc}</p>
                <div className="flex gap-3">

                  {selectedMember.linkedin && (
                    <Button type="default" size="small" className="bg-secondary text-primary p-5 text-semibold text-lg">
                      <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className="text-center py-5">
              <h3 className="text-xl font-semibold text-center inline border-b-2 border-tertiary">
                <section className="inline">
                  ⚒️
                </section>
                Contributions</h3>
            </div>
            <div className="">
              {selectedMember?.contributions?.map(contribution => {

                <p className="text-slate-600 leading-relaxed mb-4">
                  {contribution || "No contributions listed."}
                </p>
              }) || <><p className="text-slate-600 leading-relaxed mb-4">No contributions listed.</p></>}
            </div>
          </div>
        )}
      </Modal>

      {showLoading ? (
        <Loader />
      ) : (
        <div className="bg-secondary p-9 px-[5rem] sm:py-7 sm:px-5">
          <h1 className="flex justify-center items-center text-primary text-2xl font-semibold sm:text-2xl">
            Team Members:
          </h1>

          <div className="membercards_team_members grid grid-cols-3 md:grid-cols-2 sm:gap-2 sm:grid-cols-1 gap-[2.5rem] md:gap-[1rem]">
            {sortedTeam &&
              sortedTeam.map((item) => (
                <div key={item.id} onClick={() => { showModal(); setSelectedMember(item); }} className="cursor-pointer">
                  <MemberCard
                    name={item.name}
                    img={item.img}
                    position={item.position}
                    email={item.email}
                    linkedin={item.linkedin}
                    desc={item.desc}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default OtherMember;
