/**
 * @jest-environment jsdom
 */

import {pushToHistory} from '../scripts/router.js';

describe ('length of the history stack ', ()=> {
    
    test ('settings', ()=>{
        pushToHistory('settings');
        expect(history.length).toBe(2)
    });

    test ('entry', ()=>{
        pushToHistory('entry', 3);
        expect(history.length).toBe(3)
    });

    test ('entry1', ()=>{
        pushToHistory('entry', 6);
        expect(history.length).toBe(4)
    });

    test ('default', ()=>{
        pushToHistory();
        expect(history.length).toBe(5)
    });
});

describe('the current state object', ()=>{
        
    test ('settings', ()=>{
        pushToHistory('settings');
        expect(history.state.page).toBe('settings')
    });

    test ('entry', ()=>{
        pushToHistory('entry', 3);
        expect(history.state.page).toBe('entry3')
    });

    test ('entry1', ()=>{
        pushToHistory('entry', 6);
        expect(history.state.page).toBe('entry6')
    });

    test ('default', ()=>{
        pushToHistory();
        expect(history.state.page).toBeUndefined();
    });
});