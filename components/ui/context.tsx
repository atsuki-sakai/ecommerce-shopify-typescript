

import React, { ReactNode, FC, createContext, useContext, useReducer, useEffect, ReactEventHandler } from "react"

interface Props {
    children: ReactNode | ReactNode[]
}

export interface StateModifiers {
    openSideBar: () => void
    closeSideBar: () => void
}

export interface StateValues {
    isSideBarOpen: boolean
}

const stateModifiers: StateModifiers = {
    openSideBar: () => {},
    closeSideBar: () => {}
}

const initialState: StateValues = { isSideBarOpen: false }

type State = StateValues & StateModifiers

const UIContext = createContext<State>({
    ...stateModifiers,
    ...initialState
})

type Action = { type: "OPEN_SIDEBAR"| "CLOSE_SIDEBAR" }

function uiReducer(state: StateValues, action: Action) {
    switch(action.type){
        case "OPEN_SIDEBAR" : {
            return {
                ...state,
                isSideBarOpen: true
            }
        }
        case "CLOSE_SIDEBAR": {
            return {
                ...state,
                isSideBarOpen: false
            }
        }
    }
}

export const UIProvider: FC<Props> = ({children}: Props) => {

    const [ state, dispatch ] = useReducer(uiReducer, initialState)

    const openSideBar = () => dispatch({type: "OPEN_SIDEBAR"})
    const closeSideBar = () => dispatch({type: "CLOSE_SIDEBAR"})

    const  value = {
        ...state,
        openSideBar,
        closeSideBar,
    }

    const handle = (e: any) => {
        e.preventDefault();
    }
    const lockScroll = () => {
        if(state.isSideBarOpen){
            document.addEventListener('wheel', handle, { passive: false })
            document.addEventListener('touchmove', handle, { passive: false })
        }
    }
    const unlockScroll = () => {
        if(state.isSideBarOpen){
            document.removeEventListener('wheel', handle)
            document.removeEventListener('touchmove', handle)
        }
    }

    useEffect(() => {
        lockScroll();
        return () => {
            unlockScroll();
        }
    })

    return (
        <UIContext.Provider value={value}>
            { children }
        </UIContext.Provider>
    )
}

export const useUI = () => {
    const context = useContext(UIContext);
    return context;
}