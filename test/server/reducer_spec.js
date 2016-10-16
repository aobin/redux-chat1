/**
 * Created by aobin on 10/16/2016.
 */


import {expect} from "chai";
import {fromJS, Map, List} from "immutable";
import {v1} from "uuid";

import coreReducer from "../../src/server/reducer";
import {addRoom,removeRoom} from "../../src/server/actionCreator";

describe("server reducer", ()=> {
        it("server reducer", ()=> {
            let id = v1();
            let actions = [
                {type: "ADD_ROOM", room: {id, name: "1", owner: "aobin1"}},
                {type: "ADD_ROOM", room: {name: "2", owner: "aobin2"}},
                {type: "ADD_ROOM", room: {name: "3", owner: "aobin3"}},
                {type: "REMOVE_ROOM", room: {id, owner: "aobin1"}}

            ];
            const finalState = actions.reduce(coreReducer, undefined);
            expect(finalState.get("rooms").size).to.equal(2);
            expect(finalState.getIn(["rooms", "0", "owner"])).to.equal("aobin2");

        })

        it("test action creator", ()=> {
            let id = v1();
            let actions = [
                addRoom({id,name:"1",owner:"aobin1"}),
                addRoom({name:"2",owner:"aobin2"}),
                addRoom({name:"3",owner:"aobin3"}),
                removeRoom({id,owner:"aobin1"})

            ];
            const finalState = actions.reduce(coreReducer, undefined);
            expect(finalState.get("rooms").size).to.equal(2);
            expect(finalState.getIn(["rooms", "0", "owner"])).to.equal("aobin2");

        })

    }
);



