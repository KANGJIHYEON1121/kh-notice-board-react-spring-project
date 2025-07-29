import React from "react";
import ModifyComponent from "../../components/post/ModifyComponent";
import { useParams } from "react-router-dom";

const Modifypage = () => {
  const { pno } = useParams();

  return (
    <div>
      <ModifyComponent pno={pno} />
    </div>
  );
};

export default Modifypage;
