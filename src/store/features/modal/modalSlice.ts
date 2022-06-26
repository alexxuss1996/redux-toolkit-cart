import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};


type ModalStateType = {
  isOpen: boolean
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: ModalStateType) => {
      state.isOpen = true;
    },
    closeModal: (state: ModalStateType) => {
      state.isOpen = false;
    },
  },
});

export default modalSlice.reducer;
export const { closeModal, openModal } = modalSlice.actions;
