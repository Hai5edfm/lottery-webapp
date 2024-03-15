export type MODAL_TYPE = null | "new-lottery"

export interface ModalState {
  data: any
  type: MODAL_TYPE
  isOpen: boolean
}
