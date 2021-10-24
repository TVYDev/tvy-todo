import type { FC } from "react";
import "./Divider.css";
import { FaAngleDoubleDown } from "react-icons/fa";

const Divider: FC = () => {
  return (
    <div className="divider">
      <FaAngleDoubleDown />
    </div>
  );
};

export default Divider;
