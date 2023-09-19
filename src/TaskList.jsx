import React from 'react';

const TaskList = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '2em', padding: '1em', border: '1px solid #e0e0e0', borderRadius: '8px', textAlign: 'left' }}>
            <h2>Your tasks:</h2>
            <ol>
                <li>Display this data into a table (aesthetics are not being judged)</li>
                <li>Calculate the total inventory value of each item being held in a new column</li>
                <li>Create a form / input field where a user could input a non-negative number, that multiplies all inventory quantities by that value (i.e. if they input 2, all inventory quantities are multiplied by 2)</li>
                <li>Create the ability to sort the table by alphabetical product title.</li>
                <li>Then create the ability to sort the table by numerical Cost</li>
                <li>Create a filter drop down that allows only 1 product type to be displayed.</li>
            </ol>
        </div>
    );
}

export default TaskList;
