/**
 * Created by aobin on 10/16/2016.
 */

import {addRoom,removeRoom} from "./core"

export default function reducer(state,action) {
    switch (action.type)
    {
        case "ADD_ROOM":
            return addRoom(state,action.room);
        case "REMOVE_ROOM":
            return removeRoom(state,action.room);
    }

    return state;
}
