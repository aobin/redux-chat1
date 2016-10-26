/**
 * Created by aobin on 10/16/2016.
 */


export const ADD_ROOM="ADD_ROOM";
export const REMOVE_ROOM="REMOVE_ROOM";

export function addRoom(room) {

    return {type:ADD_ROOM,room:room};
}

export function removeRoom(room) {

    return {type:REMOVE_ROOM,room:room};
}


