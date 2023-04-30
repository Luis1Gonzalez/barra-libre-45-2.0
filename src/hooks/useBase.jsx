import { useContext } from "react";
import BaseContext from "../context/BaseProvider";

export default function useBase(){
    return useContext(BaseContext)
}