import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { type MODAL_TYPE, type ModalState } from "@/modules/ui/modal/interfaces"

export const initialModalState: ModalState = {
  type: null,
  data: null,
  isOpen: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    clearModalState: () => initialModalState,
    setModalType(state, action: PayloadAction<MODAL_TYPE>) {
      state.type = action.payload
    },
    setModalData(state, action: PayloadAction<any>) {
      state.data = action.payload
    },
    setModalOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
    openModal(
      state,
      action: PayloadAction<{
        type: MODAL_TYPE
        data?: any
      }>
    ) {
      state.type = action.payload.type
      state.data = action.payload.data ?? null
      state.isOpen = true
    },
    closeModal(state) {
      state.type = null
      state.data = null
      state.isOpen = false
    },
  },
})

export const { setModalType, setModalData, clearModalState, setModalOpen, openModal, closeModal } =
  modalSlice.actions

export default modalSlice.reducer
