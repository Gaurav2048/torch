import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { v4 } from "uuid";
import AppButton from "../../../components/AppButton";
import { BsDash } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import AppDrawer from "../../../components/Drawer/Drawer";
import useAxios from "../../../hooks/useAxios";
import { ROUTES } from "../../../Constants";
import { useRecoilState, useRecoilValue } from "recoil";
import { orgAtom } from "../../../AppState/state";
import { produce } from "immer";
import { useLocation, useNavigate } from "react-router-dom";
import useNavDisclosure from "../../../hooks/useNavDisclosure";
import { Organisation } from "../../..";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  columns: Yup.array()
    .of(
      Yup.object({
        _id: Yup.string(),
        title: Yup.string().required("Column Name is required"),
      }),
    )
    .required("At least one column is required"),
});

const CreateBoard: React.FC = () => {
  const [org, setOrg] = useRecoilState(orgAtom);
  const { open, goBack } = useNavDisclosure("createboard");

  const { response, fetchData } = useAxios({
    method: "POST",
    url: ROUTES.CREATE_BOARD(org._id),
  });

  useEffect(() => {
    if (response) {
      setOrg(
        produce(org, (draft: Organisation) => {
          draft.boards.push({ _id: response._id, name: response.name });
          return draft;
        }),
      );
    }
  }, [response]);

  const createBoard = async (data: any) => {
    const board = {
      name: data.name,
      tasks: {},
      columns: data.columns.reduce((acc: any, current: any) => {
        acc[current._id] = {
          id: current._id,
          title: current.title,
          taskIds: [],
        };
        return acc;
      }, {}),
      columnOrder: data.columns.map((column: any) => column._id),
    };
    await fetchData(board);
    goBack();
  };

  return (
    <Formik
      initialValues={{ name: "", columns: [{ _id: v4(), title: "" }] }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        createBoard(values);
      }}
    >
      {({ values, submitForm, handleChange }) => (
        <Form>
          <AppDrawer
            title="Create New Board"
            actionTitle="create"
            open={open}
            onClose={goBack}
            submitForm={submitForm}
          >
            <>
              <FormControl mt={4}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  onChange={handleChange}
                  id="name"
                  name="name"
                />
                <ErrorMessage name="name" component="div" />
              </FormControl>
              <FieldArray name="columns">
                {({ push, remove }) => (
                  <div>
                    <Flex gap="8px" marginTop="18px">
                      <Text fontSize="lg" fontWeight={600}>
                        Columns
                      </Text>
                      <AppButton
                        type="button"
                        size="sm"
                        onClick={() => push({ _id: v4(), title: "" })}
                      >
                        <CgAdd />
                      </AppButton>
                    </Flex>
                    {values.columns.map((_, index) => (
                      <Box key={index} alignItems="center">
                        <FormControl mt={4}>
                          <FormLabel htmlFor={`columns.${index}.title`}>
                            Column Name
                          </FormLabel>
                          <Flex gap="8px" alignItems="center">
                            <Input
                              size="sm"
                              type="text"
                              onChange={handleChange}
                              id={`columns.${index}.title`}
                              name={`columns.${index}.title`}
                            />
                            <AppButton
                              type="button"
                              size="sm"
                              onClick={() => remove(index)}
                            >
                              <BsDash />
                            </AppButton>
                          </Flex>
                          <ErrorMessage
                            name={`columns.${index}.title`}
                            component="div"
                          />
                        </FormControl>
                      </Box>
                    ))}
                  </div>
                )}
              </FieldArray>
            </>
          </AppDrawer>
        </Form>
      )}
    </Formik>
  );
};

export default CreateBoard;
