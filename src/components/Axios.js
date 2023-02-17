import React from 'react';
import axios from 'axios'

const Axios = () => {
    const getAxios = () => {
        axios.get('http://localhost:8000/posts')
            .then((response) => {
                console.log('Success:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const postAxios = () => {
        axios.post('http://localhost:8000/posts', {
            "title": "json-server 2",
            "author": "typicode 2"
        })

            .then((data) => {
                console.log('Success:', data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const data = {
        title: "BVT 3", author: "abc 3"
    }

    const putAxios = () => {
        axios.put('http://localhost:8000/posts/3', {data})
            .then((data) => {
                console.log('Success:', data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const deleteAxios = () => {
        axios.delete("http://localhost:8000/posts/10", {
            method: "DELETE"
        })
            .then((data) => {
                console.log('Success:', data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <button onClick={getAxios}>GET DemoAxios</button>
            <button onClick={postAxios}>POST DemoAxios</button>
            <button onClick={putAxios}>PUT DemoAxios</button>
            <button onClick={deleteAxios}>DELETE DemoAxios</button>
        </div>
    );
}

export default Axios;
