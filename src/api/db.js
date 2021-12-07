/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { API, Auth } from 'aws-amplify'

const apiName = 'todolist-todoApi';
const todosPath = '/todos'; 

// This function is called immediately when the page loads, before populating the table with this data
export async function getUserItems() {
    const myInit = { 
        headers: { 
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        },
    };

    const todos = await API.get(apiName, todosPath, myInit);
    console.log("Todos ", todos);
    return todos.Items;
}

// This function is called when a user clicks the button 'Add'
export async function addItem(itemName) {
    const myInit = { 
        headers: { 
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        },
        body: {  
            "name": itemName,
        },
    };

    const todo = await API.post(apiName, todosPath, myInit)
    return todo.Item;
}

// This function is called when a user deletes an existing item in the table
export async function deleteItem(itemId) {
    const myInit = { 
        headers: { 
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        }
    };

    await API.del(apiName, todosPath + "/" + itemId, myInit)
    return itemId;
}
