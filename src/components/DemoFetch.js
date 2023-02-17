import React from 'react';

const DemoFetch = () => {

    const getFetch = () => {
        fetch('http://localhost:8000/posts')
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const postFetch = () => {
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": "json-server 1",
                "author": "typicode 1"
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const putFetch = () => {
        fetch('http://localhost:8000/posts/3', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": 'BVT 1', "author": 'abc 1', id: 3
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const deleteFetch = () => {
        fetch("http://localhost:8000/posts/4", {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <button onClick={getFetch}>GET DemoFetch</button>
            <button onClick={postFetch}>POST DemoFetch</button>
            <button onClick={putFetch}>PUT DemoFetch</button>
            <button onClick={deleteFetch}>DELETE DemoFetch</button>
        </div>
    );
}

export default DemoFetch;
