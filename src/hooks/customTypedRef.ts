import { useRef } from "react"

function useMyCustomHook<T extends Element>(){
    const myRef = useRef<T>(null)
    return {ref: myRef}
}

export default useMyCustomHook