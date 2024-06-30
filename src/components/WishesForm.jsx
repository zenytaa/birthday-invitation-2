import { useState } from "react";
import styled from "styled-components";
import { fontFamily } from "../assets/styles/font";
import { Button } from "./Button";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const WishBoxForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 10px 0px;
  gap: 20px;

  @media (min-width: 769px) {
    width: 50%;
  }
`;

const WishBoxInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: #f8f8f8;
  color: rgb(142, 142, 142);
  border: none;
  border-radius: 12px;
  padding: 0px 20px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  ${fontFamily.secondary}

  &:focus {
    outline: 1px solid rgb(142, 142, 142);
  }

  &:not(:placeholder-shown) {
    font-weight: 600; /* font weight when typing */
  }
`;

const WishBoxTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: #f8f8f8;
  color: rgb(142, 142, 142);
  border: none;
  border-radius: 12px;
  padding: 20px 20px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  ${fontFamily.secondary}

  &:focus {
    outline: 1px solid rgb(142, 142, 142);
  }

  &:not(:placeholder-shown) {
    font-weight: 600; /* font weight when typing */
  }

  @media (min-width: 769px) {
    height: 200px;
  }
`;

const WishesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("message", formData.message);

    const url = import.meta.env.VITE_GOOGLE_SHEET_LINK;

    const toastId = toast.loading("🚀🚀 Mengirim ...");

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
        muteHttpExceptions: true,
      });

      if (response.ok) {
        setFormData({
          name: "",
          message: "",
        });
        toast.update(toastId, { autoClose: 1, isLoading: false });
        toast("😆 Yeay!! Berhasil terkirim ...");
      } else {
        toast.update(toastId, {
          render: "Hmm ada kesalahan dari kami, coba lagi ya!",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Hmm ada kesalahan dari kami, coba lagi ya!");
    }
  };

  return (
    <WishBoxForm onSubmit={handleSubmit}>
      <WishBoxInput
        type="text"
        name="name"
        placeholder="Isi namamu disini ya ..."
        value={formData.name}
        onChange={handleInputChange}
      />
      <WishBoxTextArea
        name="message"
        placeholder="Taruh harapanmu di sini ..."
        value={formData.message}
        onChange={handleInputChange}
      />
      <Button type="submit">
        <span>Kirim</span>
      </Button>
    </WishBoxForm>
  );
};

export default WishesForm;
