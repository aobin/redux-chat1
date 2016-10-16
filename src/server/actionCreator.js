/**
 * Created by aobin on 10/16/2016.
 */


const ADD_ROOM="ADD_ROOM";
const REMOVE_ROOM="REMOVE_ROOM";

export function addRoom(room) {

    return {type:ADD_ROOM,room:room};
}

export function removeRoom(room) {

    return {type:REMOVE_ROOM,room:room};
}


