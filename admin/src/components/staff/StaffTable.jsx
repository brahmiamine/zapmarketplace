import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiZoomIn } from "react-icons/fi";
import { t } from "i18next";

//internal import

import Status from "@/components/table/Status";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import MainDrawer from "@/components/drawer/MainDrawer";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import StaffDrawer from "@/components/drawer/StaffDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import EditDeleteButton from "@/components/table/EditDeleteButtonThree";
import ActiveInActiveButton from "@/components/table/ActiveInActiveButton";
import { getValidImagePath } from "@/utils/filePath";
import Tooltip from "../tooltip/Tooltip";
import { AdminContext } from "@/context/AdminContext";

const StaffTable = ({ staffs, lang }) => {
  const {
    state: { adminInfo },
  } = useContext(AdminContext);
  console.log(adminInfo);
  const { title, serviceId, handleModalOpen, handleUpdate, isSubmitting, handleResetPassword } = useToggleDrawer();
  const { showDateFormat, showingTranslateValue } = useUtilsFunction();

  return (
    <>
      <DeleteModal id={serviceId} title={title} />

      <MainDrawer>
        <StaffDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {staffs?.map((staff) => (
          <TableRow key={staff._id}>
            <TableCell>
              <div className="flex items-center">
                <Avatar className="hidden mr-3 md:block bg-gray-50" src={getValidImagePath(staff.image)} alt="staff" />
                <div>
                  <h2 className="text-sm font-medium">{showingTranslateValue(staff?.name)}</h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">{staff.email}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm ">{staff.phone}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {/* {dayjs(staff.joiningData).format("DD/MM/YYYY")} */}
                {showDateFormat(staff.joiningData)}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">{staff?.role}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">{staff?.code}</span>
            </TableCell>
            <TableCell className="text-center text-xs">
              <Status status={staff.status} />
            </TableCell>

            <TableCell className="text-center">
              <ActiveInActiveButton id={staff?._id} staff={staff} option="staff" status={staff.status} />
            </TableCell>

            <TableCell>
              <div className="flex justify-end text-right">
                {staff.code && (
                  <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                    {" "}
                    <Link to={`/staff-order/${staff?.code}`}>
                      <Tooltip id="view" Icon={FiZoomIn} title={t("ViewOrder")} bgColor="#34D399" />
                    </Link>
                  </div>
                )}

                {adminInfo?.email != staff?.email && (
                  <EditDeleteButton
                    id={staff._id}
                    staff={staff}
                    isSubmitting={isSubmitting}
                    handleUpdate={handleUpdate}
                    handleModalOpen={handleModalOpen}
                    handleResetPassword={handleResetPassword}
                    title={showingTranslateValue(staff?.name)}
                  />
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default StaffTable;
