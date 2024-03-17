export type MODAL_TYPE = null | "new-lottery" | "lottery-detail"

export interface ModalState {
  data: any
  type: MODAL_TYPE
  isOpen: boolean
}
