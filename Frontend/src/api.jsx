import {API_URL} from "./utils";


export const CreateTask = async (taskObj) => {
  const url = API_URL;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskObj),
  };

  try {
    const result = await fetch(url, options);
    const data = await result.json();
    console.log("Task created successfully:", data);
    return data;
  } catch (err) {
    console.error("Error in CreateTask function:", err);
    throw err;
  }
};

export const DeleteTaskById = async (id) => {
    const url =` ${API_URL}/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const result = await fetch(url, options);
      const data = await result.json();
      console.log("Task created successfully:", data);
      return data;
    } catch (err) {
      console.error("Error in CreateTask function:", err);
      throw err;
    }
  };
  


  export const UpdateTask = async (taskId, taskObj) => {
    const url = `${API_URL}/${taskId}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskObj),
    };
  
    try {
      const result = await fetch(url, options);
      const data = await result.json();
      console.log("Task updated successfully:", data);
      return data;
    } catch (err) {
      console.error("Error in UpdateTask function:", err);
      throw err;
    }
  };
  
  
