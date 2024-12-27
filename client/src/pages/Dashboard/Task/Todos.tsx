import { Box, Checkbox, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { FieldArray, useFormikContext } from "formik";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { RiDraggable } from "react-icons/ri";
import { IoCheckmarkOutline } from "react-icons/io5";
import { v4 } from "uuid";
import { Task, Todo } from "../../..";

const ICON_SIZE = "18px";
const ICON_COLOR_RED = "#f00";

const Todos: React.FC = () => {
  const { values } = useFormikContext<Task>();
  const dummyTodo = () => ({ id: v4(), text: "", completed: false });

  return (
    <FieldArray
      name="todos"
      render={({ push, remove }) => (
        <Box>
          <Flex alignItems="center" onClick={() => push(dummyTodo())}>
            <FormLabel paddingTop="4px">Todos</FormLabel>
            <IoIosAdd size={ICON_SIZE} />
          </Flex>
          {values.todos?.map((todo, index) => (
            <TodoUi {...todo} remove={remove} index={index} key={todo?.id} />
          ))}
        </Box>
      )}
    />
  );
};

export default Todos;

const TodoUi: React.FC<Todo & { index: number; remove: any }> = ({
  id,
  completed,
  text,
  index,
  remove,
}) => {
  const [edit, setEdit] = useState<boolean>(true);
  const { setFieldValue } = useFormikContext();

  const toogleEdit = () => setEdit(!edit);
  // const submitChange = () => setFieldValue(``, )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFieldValue(
      `todos[${index}].${name}`,
      name === "completed" ? checked : value,
    );
  };

  const removeTodo = () => {
    remove(index);
  };

  return (
    <Box marginBottom="4px" display="flex" alignItems="center" gap="8px">
      <Checkbox
        name="completed"
        isChecked={completed}
        onChange={handleChange}
      />
      {edit ? (
        <Input
          size="sx"
          name="text"
          fontSize="sx"
          onChange={handleChange}
          width="60%"
          placeholder="  Work"
        />
      ) : (
        <Text width="60%" fontSize="sx">
          {text}
        </Text>
      )}
      <Box display="flex" alignItems="center" gap="4px">
        {!edit ? (
          <MdOutlineEdit size={ICON_SIZE} onClick={toogleEdit} />
        ) : (
          <IoCheckmarkOutline onClick={toogleEdit} size={ICON_SIZE} />
        )}
        <AiFillDelete
          color={ICON_COLOR_RED}
          size={ICON_SIZE}
          onClick={removeTodo}
        />
        <RiDraggable size={ICON_SIZE} />
      </Box>
    </Box>
  );
};
