import React, { useContext } from "react";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";

//internal import
import Status from "@/components/table/Status";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import SelectStatus from "@/components/form/selectOption/SelectStatus";
import { AdminContext } from "@/context/AdminContext";

const CustomerOrderTable = ({ orders }) => {
  const {
    state: { adminInfo },
  } = useContext(AdminContext);

  const filteredOrders = adminInfo.code ? orders.filter((order) => adminInfo.code === order.code) : orders;
  console.log(filteredOrders);
  const { showDateTimeFormat, getNumberTwo, currency } = useUtilsFunction();
  return (
    <>
      <TableBody>
        {filteredOrders?.map((order) => (
          <TableRow key={order._id}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">{order?._id?.substring(20, 24)}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {/* {dayjs(order.createdAt).format("MMM D, YYYY")} */}
                {showDateTimeFormat(order.createdAt)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{order?.user_info?.address}</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm">{order.user_info?.contact}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">{order.paymentMethod}</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm font-semibold">
                {currency}
                {getNumberTwo(order.total)}
              </span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">{order?.code}</span>
            </TableCell>
            <TableCell className="text-center">
              <Status status={order.status} />
            </TableCell>
            <TableCell className="text-right">
              <SelectStatus id={order._id} order={order} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CustomerOrderTable;
