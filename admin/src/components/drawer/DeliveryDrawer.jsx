import { Select } from "@windmill/react-ui";
import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { Scrollbars } from "react-custom-scrollbars-2";

//internal import
import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import LabelArea from "@/components/form/selectOption/LabelArea";
import InputArea from "@/components/form/input/InputArea";
import DrawerButton from "@/components/form/button/DrawerButton";
import TagInputTwo from "@/components/common/TagInputTwo";

import { Input } from "@windmill/react-ui";
import DrawerButtonDelivery from "../form/button/DrawerButtonDelivery";
import useAttributeSubmit from "@/hooks/useAttributeSubmit";

const DeliveryDrawer = ({ id }) => {
  const { handleSubmit, onSubmit, register, errors, variants, addVariant, isSubmitting, removeVariant, handleSelectLanguage } =
    useAttributeSubmit(id);
  const [name, setName] = useState("");
  const [days, setDays] = useState("");
  const [cost, setCost] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {t("Add delivery")}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Delivery name")} />
              <div className="col-span-8 sm:col-span-4">
                <Input onChange={(e) => setName(e.target.value)} type="text" placeholder="delivery name" className="mr-2 h-12 p-2" />
                <Error errorName={errors.name} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label={t("Delivery days")} />
              <div className="col-span-8 sm:col-span-4">
                <Input onChange={(e) => setDays(e.target.value)} type="text" placeholder="delivery days" className="mr-2 h-12 p-2" />
                <Error errorName={errors.days} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label={t("Delivery cost")} />
              <div className="col-span-8 sm:col-span-4">
                <Input onChange={(e) => setCost(e.target.value)} type="text" placeholder="delivery cost" className="mr-2 h-12 p-2" />
                <Error errorName={errors.cost} />
              </div>
            </div>
          </div>

          <DrawerButtonDelivery id={id} title="Delivery" isSubmitting={isSubmitting} name={name} cost={cost} days={days} />
        </form>
      </Scrollbars>
    </>
  );
};

export default DeliveryDrawer;
