import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Request,
  addRequest,
  delRequest,
  getSingleRequest,
  updateRequest,
} from "../Action/Action";
import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { ActionIcon, Box, Menu } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const User = () => {
  const [addData, setaddData] = useState({
    title: "",
    description: "",
  });
  const [update_, setUpdate] = useState(false);
  const ref = useSelector((y) => y.user.data);
  const singleRef = useSelector((y) => y.user.singleData);
  const isRefresh = useSelector((y) => y.user.addRefresh);
  const dis = useDispatch();

  const reference = useRef();

  const handleDelete = (id) => {
    dis(delRequest(id));
  };

  const handleChanger = (e) => {
    setaddData({ ...addData, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    setUpdate(true);
    dis(getSingleRequest(e));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!addData.title) return;
    const b_Text = reference.current.textContent;

    b_Text === "Save" ? dis(addRequest(addData)) : dis(updateRequest(addData));
    setaddData({
      title: "",
      description: "",
    });

    e.target.reset();
  };

  const data = ref ? ref : [];

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableRowActions: true,
    positionActionsColumn: "last",
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
        <ActionIcon color="blue" onClick={() => handleEdit(row.original.id)}>
          <IconEdit />
        </ActionIcon>
        <ActionIcon color="red" onClick={() => handleDelete(row.original.id)}>
          <IconTrash />
        </ActionIcon>
      </Box>
    ),
  });

  useEffect(() => {
    dis(Request());
  }, [isRefresh]);


  useEffect(() => {
    setaddData(singleRef);
  }, [singleRef]);
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="title"
          value={addData.title || ""}
          name="title"
          onChange={handleChanger}
        />
        <input
          type="description"
          value={addData.description || ""}
          name="description"
          onChange={handleChanger}
        />
        <button ref={reference} type="submit">
          {update_ ? "Update" : "Save"}
        </button>
      </form>
      <MantineReactTable table={table} />;
    </>
  );
};

export default User;
