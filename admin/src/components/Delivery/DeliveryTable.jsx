import { Avatar, Badge, TableBody, TableCell, TableRow } from "@windmill/react-ui";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

//internal import
import useUtilsFunction from "@/hooks/useUtilsFunction";
import CheckBox from "@/components/form/others/CheckBox";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import MainDrawer from "@/components/drawer/MainDrawer";
import CouponDrawer from "@/components/drawer/CouponDrawer";
import ShowHideButton from "@/components/table/ShowHideButton";
import EditDeleteButton from "@/components/table/EditDeleteButtonThree";
import { getValidImagePath } from "@/utils/filePath";
import DeliveryDrawer from "../drawer/DeliveryDrawer";
import EditDeleteButtonThree from "@/components/table/EditDeleteButtonThree";

const DeliveryTable = ({ isCheck, coupons, setIsCheck, data }) => {
  const [updatedCoupons, setUpdatedCoupons] = useState([]);

  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const { currency, showDateFormat, globalSetting, showingTranslateValue } = useUtilsFunction();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      {isCheck.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck.length < 2 && (
        <MainDrawer>
          <DeliveryDrawer id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {data?.map((element, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={element?.title?.en}
                id={element._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(element._id)}
              />
            </TableCell>

            <TableCell>
              {" "}
              <span className="text-sm"> {element.name}</span>{" "}
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm"> {element.days}</span>{" "}
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm"> {element.cost}</span>{" "}
            </TableCell>

            <TableCell className="text-center">
              <ShowHideButton id={element._id} status={element.status} />
            </TableCell>

            <TableCell className="align-middle ">
              {element.status === "hide" ? <Badge type="danger">Hided</Badge> : <Badge type="success">Active</Badge>}
            </TableCell>

            <TableCell>
              <EditDeleteButtonThree
                id={element?._id}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={element?.name}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default DeliveryTable;
