/**
 * Created by aobin on 10/8/2016.
 */
import {expect} from "chai";
import {v1} from "uuid";
import {fromJS,Map,List} from "immutable";

import {addRoom,removeRoom} from "../../src/server/core.js";

describe("rooms", ()=>{
    it("添加room",()=>
    {
        let firstRoom = {name:"first room",id:v1(),owner:"aobin1"};
        const nextState = addRoom(undefined, firstRoom);
        const rooms = nextState.get("rooms");
        expect(rooms).to.be.ok;
        expect(rooms.get(0)).to.equal(Map(firstRoom));

        const nextNextState = addRoom(nextState,{name:"second room",id:v1(),owner:"aobin2"});
        expect(nextNextState.getIn(["rooms",1,"name"])).to.equal("second room");

    });

    const mockState = fromJS({rooms:[{name:"first name",id:v1(),owner:"aobin"}] });

    it("能被创建者删除",()=>
    {
        console.log("mockState:"+mockState);
        let id = mockState.getIn(["rooms",0,"id"]);
        console.log("mock Id is :  "+ id);
        const state = removeRoom(mockState,{id:id,owner:"aobin"});
        console.log(state);
        expect(state.get("rooms").size).to.equal(0);
    });

    it("不能被其他人删除",()=>
    {

        const state = removeRoom(mockState,{id:mockState.getIn(["room",0,"id"]),owner:"aobin1"});
        expect(state.get("rooms").size).to.equal(1);
    });

})


