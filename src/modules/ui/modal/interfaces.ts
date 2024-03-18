export type MODAL_TYPE = null | "new-lottery" | "lottery-detail" | "join-lottery"

export interface ModalState {
  data: any
  type: MODAL_TYPE
  isOpen: boolean
}
