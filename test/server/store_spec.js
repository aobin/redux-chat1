/**
 * Created by aobin on 10/16/2016.
 */
import {expect} from "chai";
import {fromJS} from "immutable";

import {addRoom} from "../../src/server/actionCreator";
import {makeStore} from "../../src/server/store";

describe("store test",()=>{
    it("store test",(done)=>{
        const mockState = fromJS({rooms:[]});
        const store = makeStore(mockState);
        store.subscribe(()=>{
            const state = store.getState();
            expect(state.get("rooms").size).to.equal(1);
            done();
        });
        store.dispatch(addRoom({name:"aobin's rom",owner:"aobin"}));

    })

});
