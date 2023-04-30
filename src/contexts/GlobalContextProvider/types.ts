import type { Dispatch, SetStateAction } from "react"

export type State = {
    isWriteModalOpen: boolean
    setIsWriteModalOpen:Dispatch<SetStateAction<boolean>>
}