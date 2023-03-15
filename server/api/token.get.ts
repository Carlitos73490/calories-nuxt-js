import { getToken } from '#auth'
import {eventHandler} from "h3";

export default eventHandler(async (event) => {
    // @ts-ignore
    return await getToken({ raw : true,event})
})