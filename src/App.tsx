import React, { useState } from "react";
import "./App.scss";
import Button from "./common/Button/Button.tsx";
import DropDownField, {
  optionType,
} from "./common/Input/DropDown/DropDownField.tsx";
import { createPortal } from "react-dom";
import ModalContent from "./common/Modal/Modal-content.tsx";
import Table from "./common/table/table.tsx";

function App() {
  const [selected1, setSelected1] = useState<optionType | null>(null);
  const [selected2, setSelected2] = useState<optionType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false); // Trạng thái cho modal

  // Dữ liệu cho dropdown
  const newArr = new Array(15).fill(null);
  const fakeOptions1 = newArr.map((_, index) => ({
    value: `option${index}`,
    label: `Lựa chọn số ${index}`,
  }));
  const fakeOptions2 = newArr.map((_, index) => ({
    value: `option${index}`,
    label: `Option ${index}`,
  }));

  const data = [
    {
      maNV: "123456",
      tenNV: "Phạm Anh Vũ",
      mucLuong: 10000000,
      ngayCong: 22,
      thucNhan: "10.000.000",
    },
    {
      maNV: "654321",
      tenNV: "Nguyễn Văn B",
      mucLuong: 15000000,
      ngayCong: 22,
      thucNhan: "15.000.000",
    },
    {
      maNV: "987654",
      mucLuong: 12000000,
      ngayCong: 20,
      tenNV: "Trần Thị C",
      thucNhan: "12.000.000",
    },
    {
      maNV: "987654",
      tenNV: "Trần Thị C",
      mucLuong: 12000000,
      ngayCong: 20,
      thucNhan: "12.000.000",
    },
    // Có thể thêm nhiều đối tượng hơn
  ];
  const columnNames = {
    maNV: {
      label: "Mã Nhân Viên",
      render: (label: string) => <span style={{ color: "blue" }}>{label}</span>,
    },
    mucLuong: { label: "Mức Lương" },
    ngayCong: { label: "Ngày Công" },
    tenNV: {
      label: "Tên Nhân Viên",
      render: (label: string) => (
        <span
          onClick={() => console.log(label)}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {label}
        </span>
      ),
    },
    thucNhan: { label: "Thực Nhận" },
  };

  return (
    <>
      <div className="App">
        <DropDownField
          options={fakeOptions1}
          onChange={setSelected1}
          selected={selected1?.label}
        />
        <DropDownField
          options={fakeOptions2}
          onChange={setSelected2}
          selected={selected2?.label}
        />

        <Button
          content="Show modal"
          onClick={() => setShowModal(true)}
          disabled={showModal}
        />
        {createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            label="Thêm mới bảng lương"
            isOpen={showModal} // Truyền isOpen vào đây
          />,
          document.body
        )}
      </div>

      <div>
        <h1>Bảng Nhân Viên</h1>

        <Table data={data} columnNames={columnNames} />
      </div>
    </>
  );
}

export default App;
